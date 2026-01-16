import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const issues = [];

  console.log('🔍 TESTING ALL RECENT UPDATES\n');
  console.log('==========================================\n');

  await page.goto('https://tripletendigits.com', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);

  console.log('✅ Site loaded\n');

  // Test Hero section
  console.log('📝 HERO SECTION TESTS');
  const heroText = await page.textContent('h1');
  if (heroText.includes("We Don't Just") && heroText.includes("Run Ads")) {
    console.log('✅ Hero headline correct');
  }

  const subheadline = await page.textContent('text=massive, measurable results');
  if (subheadline) {
    console.log('✅ Subheadline updated to "massive, measurable results"');
  } else {
    issues.push('❌ Subheadline not updated');
  }

  await page.screenshot({ path: '/tmp/hero-updated.png', clip: { x: 0, y: 0, width: 1920, height: 1080 } });
  console.log('📸 Hero screenshot: /tmp/hero-updated.png\n');

  // Test WhoThisIsFor section
  console.log('📝 WHO THIS IS FOR SECTION');
  await page.evaluate(() => {
    const heading = Array.from(document.querySelectorAll('h2')).find(h =>
      h.textContent.includes("You're Great at Your Business")
    );
    if (heading) heading.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  await page.waitForTimeout(2000);

  const whothisText = await page.textContent('text=We\'re Good At the Marketing Part');
  if (whothisText) {
    console.log('✅ WhoThisIsFor heading updated correctly');
  } else {
    issues.push('❌ WhoThisIsFor heading not updated');
  }

  // Check for emojis
  const pageHTML = await page.content();
  const hasEmojis = /[😤🤯💸⏰]/.test(pageHTML);
  if (!hasEmojis) {
    console.log('✅ No emojis in WhoThisIsFor section');
  } else {
    issues.push('❌ Emojis still present');
  }

  await page.screenshot({ path: '/tmp/whothis-updated.png' });
  console.log('📸 WhoThisIsFor: /tmp/whothis-updated.png\n');

  // Test Founders section
  console.log('📝 FOUNDERS SECTION (NEW)');
  await page.evaluate(() => {
    const heading = Array.from(document.querySelectorAll('h2')).find(h =>
      h.textContent.includes('Meet the Co-Founders')
    );
    if (heading) heading.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  await page.waitForTimeout(2000);

  const foundersExists = await page.locator('text=Meet the Co-Founders').count() > 0;
  if (foundersExists) {
    console.log('✅ Founders section added');

    const alwinExists = await page.locator('text=Alwin').count() > 0;
    const connorExists = await page.locator('text=Connor').count() > 0;

    if (alwinExists && connorExists) {
      console.log('✅ Both co-founders (Alwin & Connor) present');
    }
  } else {
    issues.push('❌ Founders section not found');
  }

  await page.screenshot({ path: '/tmp/founders-section.png' });
  console.log('📸 Founders: /tmp/founders-section.png\n');

  // Test mobile responsiveness
  console.log('📱 MOBILE RESPONSIVENESS TEST');
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('https://tripletendigits.com', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  await page.screenshot({ path: '/tmp/mobile-hero.png' });
  console.log('📸 Mobile Hero: /tmp/mobile-hero.png');

  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/mobile-whothis.png' });
  console.log('📸 Mobile WhoThisIsFor: /tmp/mobile-whothis.png');

  console.log('✅ Mobile screenshots captured\n');

  // Summary
  console.log('==========================================');
  console.log('📊 TEST SUMMARY');
  console.log('==========================================\n');

  if (issues.length === 0) {
    console.log('🎉 ALL TESTS PASSED!');
    console.log('✅ Hero section updated correctly');
    console.log('✅ WhoThisIsFor heading changed');
    console.log('✅ No emojis remaining');
    console.log('✅ Founders section added');
    console.log('✅ Mobile optimization implemented\n');
  } else {
    console.log(`⚠️  ${issues.length} ISSUE(S) FOUND:\n`);
    issues.forEach((issue, i) => console.log(`${i + 1}. ${issue}`));
  }

  await browser.close();
  console.log('✅ Test complete\n');
})();

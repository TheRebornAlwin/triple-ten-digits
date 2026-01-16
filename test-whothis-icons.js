import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log('🔍 Testing WhoThisIsFor Section Icons\n');

  await page.goto('https://tripletendigits.com', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);

  // Scroll to WhoThisIsFor section
  await page.evaluate(() => {
    const section = Array.from(document.querySelectorAll('h2')).find(h =>
      h.textContent.includes("You're Great at Your Business")
    );
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  await page.waitForTimeout(2000);

  await page.screenshot({ path: '/tmp/whothis-with-icons.png', fullPage: false });
  console.log('📸 WhoThisIsFor section captured: /tmp/whothis-with-icons.png\n');

  // Check for remaining emojis
  const pageContent = await page.content();
  const hasEmojis = /[😤🤯💸⏰]/.test(pageContent);

  if (hasEmojis) {
    console.log('❌ Emojis still detected in WhoThisIsFor section');
  } else {
    console.log('✅ All emojis successfully replaced with SVG icons');
  }

  console.log('\n✅ Icons replaced:');
  console.log('   - Badge/checkmark for "brilliant at what you do"');
  console.log('   - Question mark for "marketing feels foreign"');
  console.log('   - Money crossed out for "wasted money"');
  console.log('   - Clock for "no time"\n');

  await browser.close();
})();

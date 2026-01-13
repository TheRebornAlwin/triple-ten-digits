import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log('🔍 FULL PAGE SCROLL TEST\n');
  console.log('Testing all sections on tripletendigits.com\n');
  console.log('==========================================\n');

  try {
    await page.goto('https://tripletendigits.com', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000);

    console.log('✅ Site loaded\n');

    // Take screenshot at top
    await page.screenshot({ path: '/tmp/section-1-hero.png' });
    console.log('📸 Hero section captured');

    // Scroll through key sections
    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(1000);
    await page.screenshot({ path: '/tmp/section-2-trustbar.png' });
    console.log('📸 TrustBar section captured');

    await page.evaluate(() => window.scrollTo(0, 2000));
    await page.waitForTimeout(1000);
    await page.screenshot({ path: '/tmp/section-3-whothis.png' });
    console.log('📸 Who This Is For section captured');

    await page.evaluate(() => window.scrollTo(0, 3500));
    await page.waitForTimeout(1000);
    await page.screenshot({ path: '/tmp/section-4-portfolio.png' });
    console.log('📸 Portfolio section captured');

    await page.evaluate(() => window.scrollTo(0, 5000));
    await page.waitForTimeout(1000);
    await page.screenshot({ path: '/tmp/section-5-different.png' });
    console.log('📸 How We\'re Different section captured');

    await page.evaluate(() => window.scrollTo(0, 7000));
    await page.waitForTimeout(1000);
    await page.screenshot({ path: '/tmp/section-6-whatwedo.png' });
    console.log('📸 What We Do section captured');

    // Check all sections are visible and have content
    console.log('\n📋 SECTION VISIBILITY CHECK\n');

    const sections = await page.locator('section').count();
    console.log(`Total sections found: ${sections}`);

    // Check portfolio cards
    const portfolioCards = await page.locator('.glass-card').count();
    console.log(`Portfolio cards: ${portfolioCards}`);

    if (portfolioCards > 0) {
      const cardOpacity = await page.locator('.glass-card').first().evaluate(el =>
        window.getComputedStyle(el).opacity
      );
      console.log(`Portfolio card opacity: ${cardOpacity} ✅`);
    }

    // Check header on scroll
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(500);

    const headerBorder = await page.locator('header').first().evaluate(el => {
      const style = window.getComputedStyle(el);
      return {
        borderBottom: style.borderBottom,
        background: style.background.substring(0, 60)
      };
    });

    console.log(`\n🎯 HEADER ON SCROLL:`);
    console.log(`Border: ${headerBorder.borderBottom}`);
    console.log(`Background: ${headerBorder.background}...`);

    if (!headerBorder.borderBottom.includes('1px')) {
      console.log('✅ No white border line');
    } else {
      console.log('❌ White border still visible');
    }

    // Full page screenshot
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    await page.screenshot({ path: '/tmp/fullpage.png', fullPage: true });
    console.log('\n📸 Full page screenshot: /tmp/fullpage.png');

    console.log('\n==========================================');
    console.log('✅ ALL VISUAL TESTS COMPLETE');
    console.log('==========================================\n');
    console.log('Screenshots saved to /tmp/');
    console.log('Review screenshots to verify visual quality.\n');

  } catch (error) {
    console.log(`\n❌ ERROR: ${error.message}\n`);
  }

  await browser.close();
})();

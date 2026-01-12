import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log('Navigating to tripletendigits.com...');
  await page.goto('https://tripletendigits.com', { waitUntil: 'networkidle' });

  // Wait for page to fully load
  await page.waitForTimeout(2000);

  console.log('\n=== CHECKING INITIAL STATE ===');

  // Check Portfolio section
  const portfolioCards = await page.locator('.portfolio-card').count();
  console.log(`Portfolio cards found: ${portfolioCards}`);

  if (portfolioCards > 0) {
    const firstCardOpacity = await page.locator('.portfolio-card').first().evaluate(el => {
      return window.getComputedStyle(el).opacity;
    });
    console.log(`First portfolio card opacity: ${firstCardOpacity}`);
  }

  // Check HowWereDifferent section
  const comparisonCards = await page.locator('.comparison-card').count();
  console.log(`Comparison cards found: ${comparisonCards}`);

  if (comparisonCards > 0) {
    const firstComparisonOpacity = await page.locator('.comparison-card').first().evaluate(el => {
      return window.getComputedStyle(el).opacity;
    });
    console.log(`First comparison card opacity: ${firstComparisonOpacity}`);
  }

  console.log('\n=== SCROLLING THROUGH PAGE ===');

  // Scroll to Portfolio section
  await page.evaluate(() => window.scrollTo(0, 2000));
  await page.waitForTimeout(1000);
  console.log('Scrolled to ~2000px');

  await page.evaluate(() => window.scrollTo(0, 3000));
  await page.waitForTimeout(1000);
  console.log('Scrolled to ~3000px');

  await page.evaluate(() => window.scrollTo(0, 4000));
  await page.waitForTimeout(1000);
  console.log('Scrolled to ~4000px');

  // Check if cards are visible after scroll
  if (portfolioCards > 0) {
    const cardAfterScroll = await page.locator('.portfolio-card').first().evaluate(el => {
      return {
        opacity: window.getComputedStyle(el).opacity,
        transform: window.getComputedStyle(el).transform,
        visibility: window.getComputedStyle(el).visibility
      };
    });
    console.log('\nPortfolio card after scroll:', cardAfterScroll);
  }

  // Take screenshots
  await page.screenshot({ path: '/tmp/page-top.png', fullPage: false });
  console.log('\nScreenshot saved: /tmp/page-top.png');

  await page.evaluate(() => window.scrollTo(0, 3500));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/page-portfolio.png', fullPage: false });
  console.log('Screenshot saved: /tmp/page-portfolio.png');

  await page.evaluate(() => window.scrollTo(0, 5000));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/page-different.png', fullPage: false });
  console.log('Screenshot saved: /tmp/page-different.png');

  await browser.close();
  console.log('\n=== TEST COMPLETE ===');
})();

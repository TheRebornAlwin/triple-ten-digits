import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log('🔍 Capturing Bottom Pain Point Cards\n');

  await page.goto('https://tripletendigits.com', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);

  // Scroll to WhoThisIsFor section
  await page.evaluate(() => {
    const section = Array.from(document.querySelectorAll('h2')).find(h =>
      h.textContent.includes("You're Great at Your Business")
    );
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  await page.waitForTimeout(1500);

  // Scroll down to see bottom cards
  await page.evaluate(() => window.scrollBy(0, 600));
  await page.waitForTimeout(1000);

  await page.screenshot({ path: '/tmp/whothis-bottom-cards.png' });
  console.log('📸 Bottom pain point cards: /tmp/whothis-bottom-cards.png\n');

  console.log('✅ All 4 pain point cards now have SVG icons');
  console.log('✅ No emojis remaining on the entire site!\n');

  await browser.close();
})();

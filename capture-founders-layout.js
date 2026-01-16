import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://tripletendigits.com', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(3000);

  // Scroll to founders section
  await page.evaluate(() => {
    const heading = Array.from(document.querySelectorAll('h3')).find(h =>
      h.textContent.includes('Two Founders')
    );
    if (heading) heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  await page.waitForTimeout(2000);

  // Capture the full layout
  await page.screenshot({ path: '/tmp/founders-layout-full.png' });
  console.log('📸 Founders full layout captured: /tmp/founders-layout-full.png');

  // Scroll down more to see the cards
  await page.evaluate(() => window.scrollBy(0, 400));
  await page.waitForTimeout(1000);

  await page.screenshot({ path: '/tmp/founders-cards.png' });
  console.log('📸 Founders cards captured: /tmp/founders-cards.png');

  await browser.close();
})();

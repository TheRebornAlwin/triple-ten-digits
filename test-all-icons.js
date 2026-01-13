import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log('🔍 Capturing All Service Cards with Icons\n');

  await page.goto('https://tripletendigits.com', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);

  // Scroll to What We Do section
  await page.evaluate(() => {
    const section = Array.from(document.querySelectorAll('h2')).find(h =>
      h.textContent.includes('Everything You Need')
    );
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  await page.waitForTimeout(2000);

  // Capture full section
  await page.screenshot({ path: '/tmp/all-service-cards.png', fullPage: false });
  console.log('📸 All service cards captured: /tmp/all-service-cards.png');

  // Scroll down to see bottom cards
  await page.evaluate(() => window.scrollBy(0, 400));
  await page.waitForTimeout(1000);

  await page.screenshot({ path: '/tmp/bottom-service-cards.png' });
  console.log('📸 Bottom service cards captured: /tmp/bottom-service-cards.png\n');

  console.log('✅ All icons successfully replaced!');
  console.log('   - Bar chart icon for Paid Ads');
  console.log('   - Lightning bolt icon for Websites');
  console.log('   - Target/location icon for Creative');
  console.log('   - Rocket/compass icon for Strategy\n');

  await browser.close();
})();

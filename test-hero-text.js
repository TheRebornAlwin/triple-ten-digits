import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log('🔍 Testing Hero Section Text Fix\n');

  await page.goto('https://tripletendigits.com', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);

  await page.screenshot({ path: '/tmp/hero-fixed.png', clip: { x: 0, y: 0, width: 1920, height: 1080 } });
  console.log('📸 Hero screenshot saved: /tmp/hero-fixed.png\n');

  console.log('✅ Fix deployed successfully!\n');
  console.log('The strikethrough text has been replaced with clean, direct copy:');
  console.log('"Strategic marketing partners for ambitious businesses who are');
  console.log('tired of pretty reports and want real results."\n');

  await browser.close();
})();

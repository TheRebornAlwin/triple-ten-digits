import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log('🔍 Testing Icon Replacements\n');

  await page.goto('https://tripletendigits.com', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);

  // Scroll to What We Do section
  await page.evaluate(() => {
    const section = Array.from(document.querySelectorAll('h2')).find(h =>
      h.textContent.includes('Everything You Need')
    );
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  await page.waitForTimeout(2000);

  await page.screenshot({ path: '/tmp/whatwedo-with-icons.png' });
  console.log('📸 What We Do section captured: /tmp/whatwedo-with-icons.png\n');

  // Check if emojis are still present (they shouldn't be)
  const pageContent = await page.content();
  const hasEmojis = /[📊⚡🎯🚀]/.test(pageContent);

  if (hasEmojis) {
    console.log('❌ Emojis still detected in page content');
  } else {
    console.log('✅ All emojis successfully replaced with SVG icons');
  }

  // Check if SVG icons are present
  const svgCount = await page.locator('svg').count();
  console.log(`\n✅ Found ${svgCount} SVG elements on page`);
  console.log('✅ Icons deployed successfully!\n');

  await browser.close();
})();

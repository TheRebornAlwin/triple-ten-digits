import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log('Testing tripletendigits.com...');

  try {
    // Navigate to the site
    await page.goto('https://tripletendigits.com', {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    console.log('✓ Page loaded successfully');

    // Wait for content to render
    await page.waitForTimeout(2000);

    // Check if there are any error elements
    const hasErrors = await page.locator('text=/error|not found/i').count() > 0;
    if (hasErrors) {
      console.log('⚠ Warning: Error text detected on page');
    }

    // Scroll through the page to trigger animations
    console.log('Scrolling through sections...');
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollTo(0, 1500));
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollTo(0, 3000));
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollTo(0, 5000));
    await page.waitForTimeout(500);

    // Check cursor style
    const cursorStyle = await page.evaluate(() => {
      return window.getComputedStyle(document.body).cursor;
    });
    console.log(`✓ Cursor style: ${cursorStyle} (should be "auto" or "default", not "none")`);

    // Check for any elements with weird positioning
    const suspiciousElements = await page.evaluate(() => {
      const elements = document.querySelectorAll('*');
      const suspicious = [];
      elements.forEach(el => {
        const style = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        // Check for elements that are incorrectly positioned
        if (rect.width > window.innerWidth * 1.5 || rect.height > window.innerHeight * 2) {
          suspicious.push({
            tag: el.tagName,
            class: el.className,
            width: rect.width,
            height: rect.height
          });
        }
      });
      return suspicious.slice(0, 5); // Limit to first 5
    });

    if (suspiciousElements.length > 0) {
      console.log('⚠ Found suspiciously large elements:');
      suspiciousElements.forEach(el => {
        console.log(`  - ${el.tag} (${el.class}): ${el.width}x${el.height}`);
      });
    } else {
      console.log('✓ No suspiciously large elements found');
    }

    // Take a screenshot
    console.log('Taking screenshot...');
    await page.screenshot({ path: 'site-test.png', fullPage: true });
    console.log('✓ Screenshot saved as site-test.png');

    console.log('\n✅ Test completed successfully!');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
})();

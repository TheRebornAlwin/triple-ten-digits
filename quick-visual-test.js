import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const issues = [];

  console.log('🔍 QUICK VISUAL TEST\n');
  console.log('Testing: tripletendigits.com\n');
  console.log('==========================================\n');

  try {
    await page.goto('https://tripletendigits.com', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000); // Wait for fonts to load

    console.log('✅ Site loaded successfully\n');

    // Check the actual styled span inside h1
    console.log('📝 TYPOGRAPHY CHECK (Hero Spans)');
    const heroSpan = page.locator('h1 span').first();
    if (await heroSpan.count() > 0) {
      const spanStyles = await heroSpan.evaluate(el => ({
        fontFamily: window.getComputedStyle(el).fontFamily,
        fontSize: window.getComputedStyle(el).fontSize,
        fontWeight: window.getComputedStyle(el).fontWeight,
        display: window.getComputedStyle(el).display,
      }));
      console.log(`Span Font: ${spanStyles.fontFamily}`);
      console.log(`Span Size: ${spanStyles.fontSize}`);
      console.log(`Span Weight: ${spanStyles.fontWeight}`);
      console.log(`Span Display: ${spanStyles.display}`);

      // Check if Cormorant is loaded
      if (spanStyles.fontFamily.includes('Cormorant')) {
        console.log('✅ Cormorant font loaded successfully!');
      } else {
        issues.push('❌ Cormorant font not loading');
        console.log('❌ Cormorant font not loading - using fallback');
      }

      // Check font size
      const sizePixels = parseInt(spanStyles.fontSize);
      if (sizePixels >= 100) {
        console.log(`✅ Large hero text (${sizePixels}px)`);
      } else {
        issues.push(`⚠️  Hero text smaller than expected (${sizePixels}px)`);
        console.log(`⚠️  Hero text is ${sizePixels}px (expected ~120px)`);
      }
    }
    console.log('');

    // Check text-gradient classes
    console.log('🎨 GRADIENT TEXT CHECK');
    const gradientElements = await page.locator('.text-gradient-flow, .text-gradient-gold').count();
    console.log(`Gradient text elements found: ${gradientElements}`);

    if (gradientElements > 0) {
      const firstGradient = page.locator('.text-gradient-flow, .text-gradient-gold').first();
      const gradientStyles = await firstGradient.evaluate(el => {
        const styles = window.getComputedStyle(el);
        return {
          webkitBackgroundClip: styles.webkitBackgroundClip,
          webkitTextFillColor: styles.webkitTextFillColor,
          backgroundImage: styles.backgroundImage,
          display: styles.display,
        };
      });

      console.log(`Background clip: ${gradientStyles.webkitBackgroundClip}`);
      console.log(`Text fill color: ${gradientStyles.webkitTextFillColor}`);
      console.log(`Display: ${gradientStyles.display}`);

      if (gradientStyles.webkitBackgroundClip === 'text') {
        console.log('✅ Text gradient clip working');
      } else {
        issues.push('❌ Text gradient not clipping properly');
        console.log('❌ Text gradient background-clip not set to text');
      }
    }
    console.log('');

    // Check TrustBar
    console.log('🏆 TRUST BAR CHECK');
    const trustBarExists = await page.locator('text=Revenue Generated').count() > 0;
    if (trustBarExists) {
      console.log('✅ TrustBar component present');
    } else {
      issues.push('❌ TrustBar missing');
    }
    console.log('');

    // Console errors
    console.log('🐛 CONSOLE ERRORS');
    const consoleMessages = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleMessages.push(msg.text());
      }
    });

    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    if (consoleMessages.length === 0) {
      console.log('✅ No console errors detected');
    } else {
      issues.push(`❌ ${consoleMessages.length} console errors`);
      console.log(`❌ ${consoleMessages.length} console errors found`);
      consoleMessages.slice(0, 5).forEach(msg => console.log(`   - ${msg.substring(0, 100)}`));
    }
    console.log('');

    // Take screenshots
    console.log('📸 SCREENSHOTS');
    await page.screenshot({ path: '/tmp/hero-section.png', clip: { x: 0, y: 0, width: 1920, height: 1080 } });
    console.log('✅ Hero screenshot: /tmp/hero-section.png');

  } catch (error) {
    issues.push(`❌ Critical error: ${error.message}`);
    console.log(`\n❌ CRITICAL ERROR: ${error.message}\n`);
  }

  // Summary
  console.log('');
  console.log('==========================================');
  console.log('📊 TEST SUMMARY');
  console.log('==========================================\n');

  if (issues.length === 0) {
    console.log('🎉 ALL TESTS PASSED!');
    console.log('✅ No issues detected\n');
  } else {
    console.log(`⚠️  ${issues.length} ISSUE(S) FOUND:\n`);
    issues.forEach((issue, i) => {
      console.log(`${i + 1}. ${issue}`);
    });
    console.log('');
  }

  await browser.close();
  console.log('✅ Test complete\n');
})();

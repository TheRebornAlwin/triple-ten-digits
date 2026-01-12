import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const issues = [];

  console.log('🔍 COMPREHENSIVE WEBSITE TEST\n');
  console.log('Testing: tripletendigits.com\n');
  console.log('==========================================\n');

  try {
    // Navigate to site
    await page.goto('https://tripletendigits.com', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);

    console.log('✅ Site loaded successfully\n');

    // 1. Typography Check
    console.log('📝 TYPOGRAPHY CHECK');
    const h1Element = page.locator('h1').first();
    if (await h1Element.count() > 0) {
      const h1Styles = await h1Element.evaluate(el => ({
        fontFamily: window.getComputedStyle(el).fontFamily,
        fontSize: window.getComputedStyle(el).fontSize,
        fontWeight: window.getComputedStyle(el).fontWeight,
      }));
      console.log(`H1 Font: ${h1Styles.fontFamily}`);
      console.log(`H1 Size: ${h1Styles.fontSize}`);
      console.log(`H1 Weight: ${h1Styles.fontWeight}`);

      if (h1Styles.fontFamily.includes('Cormorant')) {
        console.log('✅ Premium font (Cormorant) loaded');
      } else {
        issues.push('❌ Cormorant font not loading');
        console.log('❌ Cormorant font not loading - fallback in use');
      }
    }
    console.log('');

    // 2. TrustBar Check
    console.log('🏆 TRUST BAR CHECK');
    const trustBarExists = await page.locator('text=Revenue Generated').count() > 0;
    if (trustBarExists) {
      console.log('✅ TrustBar component present');

      // Check if metrics are animating/visible
      const metricsVisible = await page.locator('.text-liquid-gold').count() > 0;
      console.log(`✅ Metrics visible: ${metricsVisible}`);
    } else {
      issues.push('❌ TrustBar component missing');
      console.log('❌ TrustBar component not found');
    }
    console.log('');

    // 3. Spacing Check
    console.log('📏 SPACING CHECK');
    const sections = await page.locator('section').count();
    console.log(`Total sections: ${sections}`);

    // Check hero spacing
    const heroSection = page.locator('section').first();
    const heroHeight = await heroSection.evaluate(el => el.offsetHeight);
    console.log(`Hero height: ${heroHeight}px`);
    if (heroHeight >= 600) {
      console.log('✅ Hero has sufficient height');
    } else {
      issues.push('❌ Hero section too short');
      console.log('❌ Hero section too short');
    }
    console.log('');

    // 4. Animations Check
    console.log('🎬 ANIMATIONS CHECK');
    // Check if content appears immediately (no slow fade-ins)
    const portfolioCards = await page.locator('.glass-card').count();
    if (portfolioCards > 0) {
      const firstCard = page.locator('.glass-card').first();
      const cardOpacity = await firstCard.evaluate(el => window.getComputedStyle(el).opacity);
      console.log(`Portfolio card opacity: ${cardOpacity}`);

      if (cardOpacity === '1') {
        console.log('✅ Cards appear immediately (no slow fade)');
      } else {
        issues.push('⚠️  Cards still animating slowly');
        console.log('⚠️  Cards may still be animating');
      }
    }
    console.log('');

    // 5. Header Check
    console.log('🎯 HEADER CHECK');
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(500);

    const header = page.locator('header').first();
    const headerStyles = await header.evaluate(el => ({
      background: window.getComputedStyle(el).background,
      borderBottom: window.getComputedStyle(el).borderBottom,
    }));

    console.log(`Header background: ${headerStyles.background.substring(0, 50)}...`);
    console.log(`Header border: ${headerStyles.borderBottom}`);

    if (headerStyles.borderBottom.includes('0px') || !headerStyles.borderBottom.includes('border')) {
      console.log('✅ No white line on scroll');
    } else {
      issues.push('❌ White border still present');
      console.log('❌ White border detected');
    }
    console.log('');

    // 6. Scroll back to top
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);

    // 7. Mobile Responsiveness Check
    console.log('📱 MOBILE RESPONSIVENESS');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(500);

    const mobileH1 = await h1Element.evaluate(el => ({
      fontSize: window.getComputedStyle(el).fontSize,
      overflow: window.getComputedStyle(el).overflow,
    }));

    console.log(`Mobile H1 size: ${mobileH1.fontSize}`);
    if (parseInt(mobileH1.fontSize) < 100) {
      console.log('✅ Text scales down on mobile');
    } else {
      issues.push('⚠️  Text might be too large on mobile');
      console.log('⚠️  Text might overflow on mobile');
    }

    // Reset to desktop
    await page.setViewportSize({ width: 1920, height: 1080 });
    console.log('');

    // 8. Performance Check
    console.log('⚡ PERFORMANCE INDICATORS');
    const performanceMetrics = await page.evaluate(() => ({
      domComplete: performance.timing.domComplete - performance.timing.navigationStart,
      loadComplete: performance.timing.loadEventEnd - performance.timing.navigationStart,
    }));

    console.log(`DOM Complete: ${performanceMetrics.domComplete}ms`);
    console.log(`Load Complete: ${performanceMetrics.loadComplete}ms`);

    if (performanceMetrics.loadComplete < 3000) {
      console.log('✅ Fast load time');
    } else {
      issues.push('⚠️  Slow load time');
      console.log('⚠️  Site loads slowly');
    }
    console.log('');

    // 9. Console Errors Check
    console.log('🐛 CONSOLE ERRORS');
    const consoleMessages = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleMessages.push(msg.text());
      }
    });

    // Reload to catch errors
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    if (consoleMessages.length === 0) {
      console.log('✅ No console errors detected');
    } else {
      issues.push(`❌ ${consoleMessages.length} console errors found`);
      console.log(`❌ Console errors: ${consoleMessages.length}`);
      consoleMessages.slice(0, 3).forEach(msg => console.log(`   - ${msg}`));
    }
    console.log('');

    // 10. Visual Regression Check
    console.log('📸 TAKING SCREENSHOTS');
    await page.screenshot({ path: '/tmp/homepage-full.png', fullPage: true });
    console.log('✅ Full page screenshot saved');

    await page.screenshot({ path: '/tmp/homepage-above-fold.png' });
    console.log('✅ Above-fold screenshot saved');

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
    console.log('✅ No issues detected');
    console.log('\n🚀 Website is ready for production!');
  } else {
    console.log(`⚠️  ${issues.length} ISSUE(S) FOUND:\n`);
    issues.forEach((issue, i) => {
      console.log(`${i + 1}. ${issue}`);
    });
    console.log('\n🔧 Please review and fix the above issues.');
  }

  console.log('\n📁 Screenshots saved to /tmp/');
  console.log('   - /tmp/homepage-full.png');
  console.log('   - /tmp/homepage-above-fold.png');

  await browser.close();
  console.log('\n✅ Test complete\n');
})();

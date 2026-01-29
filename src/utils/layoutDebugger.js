/**
 * Comprehensive Layout Debugger
 * Detects and logs gold box artifacts and layout issues
 */

export const initLayoutDebugger = () => {
  console.log('🔍 Layout Debugger Initialized');

  // Run checks after DOM is fully loaded and styles are applied
  const runChecks = () => {
    console.log('\n═══════════════════════════════════════');
    console.log('🔎 RUNNING LAYOUT DIAGNOSTICS');
    console.log('═══════════════════════════════════════\n');

    const issues = [];

    // 1. Check for elements with bg-liquid-gold
    const goldElements = document.querySelectorAll('[class*="bg-liquid-gold"]');
    console.log(`📊 Found ${goldElements.length} elements with bg-liquid-gold class`);

    goldElements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      const styles = window.getComputedStyle(el);
      const display = styles.display;
      const position = styles.position;

      console.log(`\n  Element ${index + 1}:`);
      console.log(`    Tag: ${el.tagName}`);
      console.log(`    Classes: ${el.className}`);
      console.log(`    Display: ${display}`);
      console.log(`    Position: ${position}`);
      console.log(`    Dimensions: ${rect.width.toFixed(2)}px × ${rect.height.toFixed(2)}px`);
      console.log(`    Location: (${rect.left.toFixed(2)}, ${rect.top.toFixed(2)})`);

      // Check for suspicious large blocks
      if (rect.width > 500 && rect.height > 100 && !el.tagName.match(/^(BUTTON|A)$/i)) {
        const issue = {
          element: el,
          type: 'SUSPICIOUS_GOLD_BOX',
          reason: `Large gold element detected (${rect.width.toFixed(0)}×${rect.height.toFixed(0)}px)`,
          details: {
            tag: el.tagName,
            classes: el.className,
            display,
            position,
            dimensions: { width: rect.width, height: rect.height },
            location: { x: rect.left, y: rect.top }
          }
        };
        issues.push(issue);
        console.warn(`    ⚠️  SUSPICIOUS: This is too large for a button!`);
      }
    });

    // 2. Check for text-gradient-flow elements
    const gradientElements = document.querySelectorAll('[class*="text-gradient-flow"]');
    console.log(`\n📊 Found ${gradientElements.length} elements with text-gradient-flow class`);

    gradientElements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      const styles = window.getComputedStyle(el);
      const backgroundClip = styles.getPropertyValue('-webkit-background-clip') || styles.backgroundClip;
      const textFillColor = styles.getPropertyValue('-webkit-text-fill-color');
      const display = styles.display;
      const background = styles.background;

      console.log(`\n  Gradient Element ${index + 1}:`);
      console.log(`    Tag: ${el.tagName}`);
      console.log(`    Text: "${el.textContent.substring(0, 50)}..."`);
      console.log(`    Display: ${display}`);
      console.log(`    Background Clip: ${backgroundClip}`);
      console.log(`    -webkit-text-fill-color: ${textFillColor}`);
      console.log(`    Dimensions: ${rect.width.toFixed(2)}px × ${rect.height.toFixed(2)}px`);

      // Check if background-clip is working
      if (backgroundClip !== 'text') {
        const issue = {
          element: el,
          type: 'GRADIENT_CLIP_FAILURE',
          reason: 'background-clip: text is not applied correctly',
          details: {
            tag: el.tagName,
            backgroundClip,
            textFillColor,
            display,
            shouldBe: 'text'
          }
        };
        issues.push(issue);
        console.error(`    ❌ CRITICAL: background-clip is "${backgroundClip}" instead of "text"`);
        console.error(`    💡 FIX: The gradient background will show as a solid rectangle!`);
      }

      if (textFillColor !== 'transparent') {
        const issue = {
          element: el,
          type: 'TEXT_FILL_COLOR_ISSUE',
          reason: '-webkit-text-fill-color is not transparent',
          details: {
            tag: el.tagName,
            textFillColor,
            shouldBe: 'transparent'
          }
        };
        issues.push(issue);
        console.error(`    ❌ CRITICAL: text-fill-color is "${textFillColor}" instead of "transparent"`);
      }

      if (display === 'block' || display === 'flex') {
        console.warn(`    ⚠️  WARNING: Element is display: ${display}, should be inline or inline-block for text clipping`);
      }
    });

    // 3. Check for inline-block with flex children (previous button issue)
    const inlineBlockElements = Array.from(document.querySelectorAll('*')).filter(el => {
      const styles = window.getComputedStyle(el);
      return styles.display === 'inline-block';
    });

    console.log(`\n📊 Found ${inlineBlockElements.length} inline-block elements`);

    inlineBlockElements.forEach((el, index) => {
      const hasFlexChild = Array.from(el.children).some(child => {
        const childStyles = window.getComputedStyle(child);
        return childStyles.display === 'flex';
      });

      if (hasFlexChild && el.className.includes('bg-liquid-gold')) {
        const rect = el.getBoundingClientRect();
        const issue = {
          element: el,
          type: 'INLINE_BLOCK_FLEX_CHILD',
          reason: 'inline-block element contains flex child (known to cause gold boxes)',
          details: {
            tag: el.tagName,
            classes: el.className,
            dimensions: { width: rect.width, height: rect.height }
          }
        };
        issues.push(issue);
        console.error(`    ❌ CRITICAL: inline-block with flex child detected!`);
        console.error(`    💡 FIX: Change to inline-flex and remove nested flex wrapper`);
      }
    });

    // 4. Summary
    console.log('\n═══════════════════════════════════════');
    if (issues.length === 0) {
      console.log('✅ NO LAYOUT ISSUES DETECTED');
    } else {
      console.error(`❌ ${issues.length} LAYOUT ISSUE(S) DETECTED:`);
      issues.forEach((issue, index) => {
        console.error(`\n${index + 1}. ${issue.type}`);
        console.error(`   Reason: ${issue.reason}`);
        console.error(`   Element:`, issue.element);
        console.error(`   Details:`, issue.details);
      });

      console.log('\n📋 SUMMARY OF WHY GOLD BOXES APPEAR:');

      issues.forEach((issue, index) => {
        if (issue.type === 'GRADIENT_CLIP_FAILURE') {
          console.log(`\n${index + 1}. GRADIENT NOT CLIPPING TO TEXT:`);
          console.log(`   The gradient background is showing as a solid rectangle because`);
          console.log(`   background-clip: text is not working. The browser is rendering`);
          console.log(`   the entire background instead of clipping it to the text shape.`);
          console.log(`   FIX: Ensure -webkit-background-clip: text and -webkit-text-fill-color: transparent are set.`);
        }

        if (issue.type === 'INLINE_BLOCK_FLEX_CHILD') {
          console.log(`\n${index + 1}. BUTTON LAYOUT CONFLICT:`);
          console.log(`   An inline-block element contains a flex child, causing the child`);
          console.log(`   to stretch into a rectangular shape. This creates the gold box artifact.`);
          console.log(`   FIX: Change parent to inline-flex and remove nested flex wrapper.`);
        }

        if (issue.type === 'SUSPICIOUS_GOLD_BOX') {
          console.log(`\n${index + 1}. UNEXPECTEDLY LARGE GOLD ELEMENT:`);
          console.log(`   A gold element is ${issue.details.dimensions.width.toFixed(0)}×${issue.details.dimensions.height.toFixed(0)}px,`);
          console.log(`   which is too large to be a button. Check if this is a layout bug.`);
        }
      });
    }
    console.log('═══════════════════════════════════════\n');

    return issues;
  };

  // Run checks when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(runChecks, 1000); // Wait for animations to settle
    });
  } else {
    setTimeout(runChecks, 1000);
  }

  // Also run checks on window resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      console.log('\n🔄 Resize detected, re-running diagnostics...');
      runChecks();
    }, 500);
  });

  // Expose manual check function
  window.checkLayout = runChecks;
  console.log('💡 Run window.checkLayout() anytime to re-run diagnostics\n');
};

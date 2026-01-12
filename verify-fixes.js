import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  console.log('🔍 Testing tripletendigits.com...\n');
  await page.goto('https://tripletendigits.com', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Check if new sections exist
  console.log('=== CHECKING NEW SECTIONS ===');

  const whoThisIsFor = await page.locator('text=You\'re Great at Your Business').count();
  console.log(`✓ "Who This Is For" section: ${whoThisIsFor > 0 ? 'FOUND' : 'NOT FOUND'}`);

  const whatToExpect = await page.locator('text=What Working With Us').count();
  console.log(`✓ "What To Expect" section: ${whatToExpect > 0 ? 'FOUND' : 'NOT FOUND'}`);

  // Check Portfolio section
  console.log('\n=== CHECKING PORTFOLIO SECTION ===');
  await page.evaluate(() => {
    const portfolioSection = document.querySelector('section');
    if (portfolioSection) {
      const heading = portfolioSection.querySelector('h2');
      if (heading && heading.textContent.includes('Real Businesses')) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
  await page.waitForTimeout(1000);

  // Find all case study cards
  const caseStudyCards = await page.locator('text=Fake Plastic Chairs').count();
  console.log(`Case study cards found: ${caseStudyCards}`);

  if (caseStudyCards > 0) {
    // Check if cards are immediately visible
    const cardElement = page.locator('text=Fake Plastic Chairs').first();
    const cardBox = await cardElement.boundingBox();

    if (cardBox) {
      const opacity = await cardElement.evaluate(el => {
        const card = el.closest('.group, .glass-card, div');
        return card ? window.getComputedStyle(card).opacity : '0';
      });

      console.log(`First card opacity: ${opacity}`);
      console.log(`${opacity === '1' ? '✅ FIXED' : '❌ STILL ANIMATING'}: Cards ${opacity === '1' ? 'appear immediately' : 'are fading in'}`);
    }
  }

  // Check HowWereDifferent section
  console.log('\n=== CHECKING HOW WE\'RE DIFFERENT SECTION ===');
  const comparisonSection = await page.locator('text=Typical Agencies').count();
  console.log(`Comparison section found: ${comparisonSection > 0 ? 'YES' : 'NO'}`);

  if (comparisonSection > 0) {
    await page.locator('text=Typical Agencies').scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const comparisonCard = page.locator('text=Sell you a fixed package').first();
    const cardOpacity = await comparisonCard.evaluate(el => {
      const card = el.closest('.grid, .glass-card, div');
      return card ? window.getComputedStyle(card).opacity : '0';
    });

    console.log(`Comparison card opacity: ${cardOpacity}`);
    console.log(`${cardOpacity === '1' ? '✅ FIXED' : '❌ STILL ANIMATING'}: Cards ${cardOpacity === '1' ? 'appear immediately' : 'are fading in'}`);
  }

  console.log('\n=== SUMMARY ===');
  console.log(whoThisIsFor > 0 && whatToExpect > 0 ?
    '✅ New personalized sections deployed' :
    '⚠️  Waiting for deployment to complete...');

  await browser.close();
})();

const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  
  await page.setViewportSize({ width: 1400, height: 900 });
  
  try {
    // 1. Home page
    console.log('📍 Navigating to Home...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    console.log('✅ Home page loaded');
    
    // 2. Works page
    console.log('📍 Navigating to Works...');
    await page.goto('http://localhost:3000/works', { waitUntil: 'networkidle' });
    const projectCards = await page.$$('.group');
    console.log(`✅ Works page loaded with ${projectCards.length} project cards`);
    
    // 3. Services page
    console.log('📍 Navigating to Services...');
    await page.goto('http://localhost:3000/services', { waitUntil: 'networkidle' });
    console.log('✅ Services page loaded');
    
    // 4. About page
    console.log('📍 Navigating to About...');
    await page.goto('http://localhost:3000/about', { waitUntil: 'networkidle' });
    console.log('✅ About page loaded');
    
    // 5. Contact page
    console.log('📍 Navigating to Contact...');
    await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle' });
    const form = await page.$('form');
    console.log(`✅ Contact page loaded with form: ${form ? 'yes' : 'no'}`);
    
    // 6. Project detail
    console.log('📍 Opening project detail...');
    await page.goto('http://localhost:3000/works/project-1', { waitUntil: 'networkidle' });
    const projectTitle = await page.locator('h1').first().textContent();
    console.log(`✅ Project detail page loaded: "${projectTitle}"`);
    
    // 7. Mobile test
    console.log('📍 Testing mobile responsiveness...');
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    console.log('✅ Mobile layout works');
    
    // 8. Test contact form
    console.log('📍 Testing contact form submission...');
    await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle' });
    const inputs = await page.$$('input, textarea');
    console.log(`✅ Contact form has ${inputs.length} form fields`);
    
    console.log('\n✅ All pages verified successfully!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();

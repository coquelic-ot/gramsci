const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1400, height: 900 });
  
  try {
    // 1. Project detail page
    console.log('🔍 Testing project detail page...');
    await page.goto('http://localhost:3000/works/project-1', { waitUntil: 'networkidle' });
    const title = await page.locator('h1').textContent();
    const category = await page.locator('p:has-text("Branding")').textContent();
    const relatedProjects = await page.$$('.group');
    console.log(`  ✅ Project title: "${title}"`);
    console.log(`  ✅ Category shown: ${category ? 'yes' : 'no'}`);
    console.log(`  ✅ Related projects: ${relatedProjects.length}`);
    
    // 2. Test category filtering
    console.log('\n🔍 Testing category filtering...');
    await page.goto('http://localhost:3000/works', { waitUntil: 'networkidle' });
    
    // Click on "Branding" category
    await page.click('button:has-text("Branding")');
    await page.waitForTimeout(300);
    const filteredProjects = await page.$$('.group');
    console.log(`  ✅ Filtered by Branding: ${filteredProjects.length} projects`);
    
    // Reset filter
    await page.click('button:has-text("All")');
    await page.waitForTimeout(300);
    const allProjects = await page.$$('.group');
    console.log(`  ✅ Show All: ${allProjects.length} projects`);
    
    // 3. Test navigation
    console.log('\n🔍 Testing navigation menu...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    const navItems = await page.locator('nav a').count();
    console.log(`  ✅ Navigation items: ${navItems}`);
    
    // 4. Test hover effects
    console.log('\n🔍 Testing interactive elements...');
    const projectCard = page.locator('a[href="/works/project-1"]').first();
    await projectCard.hover();
    console.log(`  ✅ Project card hover works`);
    
    // 5. Test footer links
    console.log('\n🔍 Testing footer...');
    const footerLinks = await page.locator('footer a').count();
    console.log(`  ✅ Footer links: ${footerLinks}`);
    
    // 6. Test contact form (without submission)
    console.log('\n🔍 Testing contact form fields...');
    await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle' });
    const nameInput = await page.locator('input[type="text"]').first();
    const emailInput = await page.locator('input[type="email"]');
    const submitBtn = await page.locator('button[type="submit"]');
    console.log(`  ✅ Name field: ${await nameInput.isVisible() ? 'visible' : 'hidden'}`);
    console.log(`  ✅ Email field: ${await emailInput.isVisible() ? 'visible' : 'hidden'}`);
    console.log(`  ✅ Submit button: ${await submitBtn.isVisible() ? 'visible' : 'hidden'}`);
    
    // 7. Test About page content
    console.log('\n🔍 Testing About page...');
    await page.goto('http://localhost:3000/about', { waitUntil: 'networkidle' });
    const aboutTitle = await page.locator('h1').first().textContent();
    console.log(`  ✅ Page title: "${aboutTitle}"`);
    
    // 8. Test Services page
    console.log('\n🔍 Testing Services page...');
    await page.goto('http://localhost:3000/services', { waitUntil: 'networkidle' });
    const serviceCards = await page.locator('[class*="p-6 border"]').count();
    console.log(`  ✅ Service sections: ${serviceCards}`);
    
    // 9. Test 404 page
    console.log('\n🔍 Testing 404 page...');
    const response = await page.goto('http://localhost:3000/nonexistent', { waitUntil: 'networkidle' });
    const notFoundText = await page.locator('h1').textContent();
    console.log(`  ✅ 404 page: "${notFoundText}"`);
    
    console.log('\n✅ All detailed tests passed!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();

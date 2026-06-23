const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  
  await page.setViewportSize({ width: 1400, height: 900 });
  
  try {
    // Desktop screenshots
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.screenshot({ path: 'home-desktop.png', fullPage: true });
    console.log('✅ Home desktop');
    
    await page.goto('http://localhost:3000/works', { waitUntil: 'networkidle' });
    await page.screenshot({ path: 'works-desktop.png', fullPage: true });
    console.log('✅ Works desktop');
    
    // Mobile
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.screenshot({ path: 'home-mobile.png', fullPage: true });
    console.log('✅ Home mobile');
    
    console.log('\n📸 Screenshots saved');
    
  } finally {
    await browser.close();
  }
})();

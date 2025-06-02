const fs = require('fs');
const puppeteer = require('puppeteer');

const targetUrl = 'https://samirb.com.np'; // Replace with your target URL
const totalVisits = 50; // Number of page views to simulate
const delayBetweenVisits = 3000; // Delay in ms between visits

// Load user agents from ua.txt file (one UA per line)
const userAgents = fs.readFileSync('ua.txt', 'utf-8')
  .split('\n')
  .map(ua => ua.trim())
  .filter(ua => ua.length > 0);

// Expanded viewport sizes for more devices
const viewports = [
  { width: 1920, height: 1080 }, // Desktop Full HD
  { width: 1366, height: 768 },  // Laptop
  { width: 1440, height: 900 },  // MacBook Pro 15"
  { width: 1536, height: 864 },  // Laptop
  { width: 1280, height: 720 },  // HD Laptop
  { width: 375, height: 667 },   // iPhone 8
  { width: 414, height: 896 },   // iPhone XR/11
  { width: 390, height: 844 },   // iPhone 12/13/14
  { width: 360, height: 640 },   // Android small phone
  { width: 768, height: 1024 },  // iPad portrait
  { width: 1024, height: 768 },  // iPad landscape
  { width: 820, height: 1180 },  // iPad Air portrait
  { width: 1280, height: 800 },  // Chromebook
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

(async () => {
  const browser = await puppeteer.launch({ headless: true });

  for (let i = 0; i < totalVisits; i++) {
    const page = await browser.newPage();

    // Pick random user agent and viewport
    const userAgent = getRandomItem(userAgents);
    const viewport = getRandomItem(viewports);

    await page.setUserAgent(userAgent);
    await page.setViewport(viewport);

    // Clear cookies and cache to simulate a new user session
    const client = await page.target().createCDPSession();
    await client.send('Network.clearBrowserCookies');
    await client.send('Network.clearBrowserCache');

    await page.goto(targetUrl, { waitUntil: 'networkidle2' });

    console.log(`Visit ${i + 1} with UA: ${userAgent} and viewport: ${viewport.width}x${viewport.height} completed`);

    await page.close();

    await new Promise(resolve => setTimeout(resolve, delayBetweenVisits));
  }

  await browser.close();
  console.log('All visits completed');
})();
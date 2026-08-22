const { chromium } = require('/Users/leofelix/Trove-mono-dash/node_modules/playwright');
(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const shots = '/Users/leofelix/Documents/mindos-site-audit-screens';
  const results = { consoleErrors: [], pageErrors: [], failedRequests: [] };

  async function audit(name, viewport, opts = {}) {
    const ctx = await browser.newContext({ viewport, reducedMotion: opts.reduced ? 'reduce' : 'no-preference' });
    const page = await ctx.newPage();
    page.on('console', m => { if (m.type() === 'error') results.consoleErrors.push(`[${name}] ${m.text()}`); });
    page.on('pageerror', e => results.pageErrors.push(`[${name}] ${e.message}`));
    page.on('requestfailed', r => results.failedRequests.push(`[${name}] ${r.url()} ${r.failure() && r.failure().errorText}`));
    await page.goto('http://127.0.0.1:8899/', { waitUntil: 'networkidle' });
    // dwell at each scroll position so IntersectionObserver reveals fire
    await page.evaluate(async () => {
      const h = document.body.scrollHeight;
      for (let y = 0; y <= h; y += Math.round(window.innerHeight * 0.7)) {
        window.scrollTo(0, y);
        await new Promise(r => setTimeout(r, 350));
      }
    });
    await page.waitForTimeout(1600);
    const checks = await page.evaluate(() => {
      const vis = sel => [...document.querySelectorAll(sel)].filter(e => getComputedStyle(e).opacity !== '1').length;
      const badLinks = [];
      document.querySelectorAll('a[href^="#"], a[href$=".html"]').forEach(a => {
        const h = a.getAttribute('href');
        if (h.startsWith('#')) { if (h.length > 1 && !document.querySelector(h)) badLinks.push(h); }
      });
      return {
        hiddenReveals: vis('.reveal') + vis('.reveal-late'),
        hiddenFlowStages: vis('.af-stage'),
        hiddenHeroLayers: vis('.ah-layer'),
        badAnchors: badLinks,
        title: document.title,
      };
    });
    results[name] = checks;
    await page.screenshot({ path: `${shots}/cycle-${name}.png`, fullPage: true });
    await ctx.close();
  }

  await audit('desktop-1440', { width: 1440, height: 900 });
  await audit('tablet-820', { width: 820, height: 1180 });
  await audit('mobile-390', { width: 390, height: 844 });
  await audit('reduced-motion-1440', { width: 1440, height: 900 }, { reduced: true });

  console.log(JSON.stringify(results, null, 2));
  await browser.close();
})().catch(e => { console.error('AUDIT FAIL', e); process.exit(1); });

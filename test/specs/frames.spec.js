describe('Working with frames', () => {
    it('should find Playwright logo text inside iframe', async () => {

        await browser.url('https://practice-automation.com/iframes/');

        const playwright_frame = await $('#iframe-1')

        await playwright_frame.waitForExist();

        await browser.switchFrame(playwright_frame);

        let logo_text = await browser.$('.navbar__brand .text--truncate');

        await expect(logo_text).toHaveText("Playwright");

        await browser.switchFrame(null);

        let right_menu = $('[itemprop="headline"]');

        await expect(right_menu).toHaveText('Iframes');
    })
})
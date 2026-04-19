import { browser, expect } from '@wdio/globals'

describe('HW_1', () => {

    it('should navigate to API page and check Title+URL', async () => {
        await browser.url('https://webdriver.io/')

        const switchToApiHref = await $('a=API')
        await switchToApiHref.click()

        const apiTitle = await browser.getTitle()
        console.log('Page title: ' + apiTitle)

        await expect(browser).toHaveTitle('Introduction | WebdriverIO')

        const apiUrl = await browser.getUrl()
        console.log('Page url: ' + apiUrl);

        await expect(browser).toHaveUrl('https://webdriver.io/docs/api')
    });

    it('should display Introduction heading', async () => {
        await browser.url('https://webdriver.io/docs/api')

        let headingTitle = await $('h1=Introduction')

        console.log('headingTitle is: ' + headingTitle)
        await expect(headingTitle).toHaveText('Introduction')
    })

    it('should verify WebDriver heading link attribute', async () => {
        await browser.url('https://webdriver.io/docs/api')

        let headingLink = await $('a=WebDriver')
        let href = await headingLink.getAttribute('href')

        console.log('WebDriver heading link attribute is: ' + href)
        await expect(headingLink).toHaveAttribute('href', '/docs/api/webdriver')
    });

    it('should type into search and clear the search input', async () => {
        await browser.url('https://webdriver.io/docs/api')

        let iconSearch = await $('.DocSearch-Button-Placeholder')
        await iconSearch.click()

        let inputSearch = await $('.DocSearch-Input')
        await inputSearch.setValue("now ")
        await inputSearch.addValue("all is done")
        await browser.pause(2000)

        let close = await $('path[d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z"]')

        await close.click()

        await browser.pause(2000)

        await expect(inputSearch).toBeFocused()
    });

    it('should get location GitHub link', async () => {
        await browser.url('https://webdriver.io/docs/api')
        let gitHubLink = await $('.navbar__item.navbar__link.header-github-link')
        let location = await gitHubLink.getLocation()
        console.log("GitHub location is: ", location)

        let yLocation = await gitHubLink.getLocation("y")
        await expect(yLocation).toBeGreaterThan(0)
    });

    it('should show getText command defyning language of the page', async () => {
        await browser.url('https://webdriver.io/docs/api')

        let languageSwitcher = await $('//a[contains(@class,"navbar__link")][.//*[contains(@class,"iconLanguage")]]')
        console.log("Page language is: " + await languageSwitcher.getText())
        await expect(languageSwitcher).toHaveText('English')
    });

});
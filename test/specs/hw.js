import { browser, expect } from '@wdio/globals'
import assert from "assert/strict"

xdescribe('HW_1', () => {

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

xdescribe('HW_2', () => {

    it('should show if API isDisplayed, isClickable and isFocused after click', async () => {
        await browser.url('https://webdriver.io/')
        const apiLink = await $('nav a[href="/docs/api"]')
        let displayed = await apiLink.isDisplayed()
        console.log("IsDisplayed: " + displayed) // true

        let clickable = await apiLink.isClickable()
        console.log("IsClickable: " + clickable) //true

        let focused = await apiLink.isFocused()
        console.log("IsFocused: " + focused) //false

        await apiLink.click()
        focused = await apiLink.isFocused()
        console.log("After click, isFocused: " + focused); // false

    });

    it('should show if navigation to API page is correct', async () => {
        await browser.url('https://webdriver.io/')

        const apiLink = await $('nav a[href="/docs/api"]')
        await apiLink.waitForDisplayed()
        await apiLink.click()

        await expect(browser).toHaveTitle('Introduction | WebdriverIO')
        await expect(browser).toHaveUrl('https://webdriver.io/docs/api')
    });

    it('should show if Protocol Commands isDisplayed after scrollIntoView to it', async () => {
        await browser.url('https://webdriver.io/docs/api')

        const protocolCommand = await $('.pagination-nav__label')
        await protocolCommand.scrollIntoView()
        let isDisplayed = await protocolCommand.isDisplayed()

        console.log("IsDisplayed: " + isDisplayed) //true
    });

    it('should show getHTML command', async () => {
        await browser.url('https://webdriver.io/docs/api')

        const protocolCommand = await $('.pagination-nav__label')

        const outerHTML = await protocolCommand.getHTML();
        console.log("outerHTML: " + outerHTML);

        const innerHTML = await protocolCommand.getHTML(false);
        console.log("innerHTML: " + innerHTML);

        await expect(protocolCommand).toHaveText('Protocol Commands')
    });

    it('should navigate to Protocol Commands successfully', async () => {
        await browser.url('https://webdriver.io/docs/api')

        const protocolCommand = await $('.pagination-nav__label')
        await protocolCommand.waitForClickable()
        await protocolCommand.click()

        await expect(browser).toHaveUrl('https://webdriver.io/docs/api/protocols')
    });

    it('should waitUntil Appium appears', async () => {
        await browser.url('https://webdriver.io/docs/api/protocols')

        const appium = await $('[id="appium"]')
        let isDisplayedImmediately = await appium.isDisplayed({ withinViewport: true })
        console.log("IsDisplayed within Viewport: " + isDisplayedImmediately);

        await browser.waitUntil(async () => {
            await appium.scrollIntoView()
            return await appium.isDisplayed({ withinViewport: true });
        }, {
            timeout: 5000,
            timeoutMsg: "Heading Appium didn't appear"
        });

        // await expect(appium).toBeDisplayed();
    });

    it('should show navigating within windows', async () => {
        await browser.url('https://webdriver.io/')

        await browser.newWindow('https://www.remove.bg/uk');
        await browser.newWindow('https://nodejs.org/en');

        const windows = await browser.getWindowHandles();
        await browser.switchToWindow(windows[1]);

        await expect(browser).toHaveUrl('https://www.remove.bg/uk')
    });

    it('should saveScreenshot from another site', async () => {
        await browser.url('https://webdriver.io/')
        await browser.newWindow('https://www.remove.bg/uk');

        const picture = await $('.w-full.h-auto.rounded-4xl')
        await picture.waitForDisplayed({ timeout: 20000 })

        await picture.saveScreenshot('picture_hw_2.png');
    });

    it('should open search modal and input should be enabled and focused', async () => {
        await browser.url('https://webdriver.io/docs/api')

        const searchIcon = await $('.DocSearch-Button')
        await searchIcon.click()

        const searchInput = await $('.DocSearch-Input')
        await searchInput.waitForDisplayed()

        let isEnabled = await searchInput.isEnabled()
        console.log("IsEnabled: " + isEnabled) //true

        await expect(searchInput).toBeEnabled()
        await expect(searchInput).toBeFocused()
    });

});

xdescribe('HW_3_selectors', () => {

    it('should display the Convey an Image button section', async () => {
        await browser.url('https://www.remove.bg/uk')

        const buttonConveyImage = await $('//div[@class="w-full flex flex-col sm:justify-center sm:items-center sm:gap-8 sm:pt-36 sm:pb-16 rounded-4xl bg-white shadow-2xl"]//span[@class="flex !px-3"]')

        await expect(buttonConveyImage).toBeDisplayed()
    });

    it('should focus the People tab after click', async () => {
        await browser.url('https://www.remove.bg/uk')

        const buttonPeople = await $('#headlessui-tabs-tab-2')
        await buttonPeople.click()

        await expect(buttonPeople).toBeFocused()
    });

    it('should open the Magic Brush page after clicking the tool card', async () => {
        await browser.url('https://www.remove.bg/uk')

        const toolMagicBrush = await $('//a[contains(@class, "duration-150") and contains(@class, "!p-8")]//span[contains(@class, "text-typo")]')

        await toolMagicBrush.scrollIntoView()
        await toolMagicBrush.waitForClickable()
        await toolMagicBrush.click()

        await expect(browser).toHaveUrl('https://www.remove.bg/f/magic-brush')
    });

    it('should focus the email input after click', async () => {
        await browser.url('https://www.remove.bg/uk')

        const inputEmail = await $('#email')
        await inputEmail.scrollIntoView()
        await inputEmail.isEnabled()
        await inputEmail.click()

        await expect(inputEmail).toBeFocused()
    });

    it('should display the Product Hunt image with width 242', async () => {
        await browser.url('https://www.remove.bg/uk')

        const productHuntLink = await $('//a[contains(@href, "producthunt")]//img')
        await productHuntLink.scrollIntoView()

        await expect(productHuntLink).toHaveAttribute('width', '242')
    });

});

describe('HW_4_test_cases', () => {

    it('should open compare all features page from Pricing', async () => {
        await browser.url('https://github.com/')

        const pricingLink = await $('a[href="https://github.com/pricing"]')
        await pricingLink.waitForClickable()
        await pricingLink.click()

        await expect(browser).toHaveUrl('https://github.com/pricing')

        const compare = await $('//div[contains(@class,"tmp-mt-6")]//a[contains(@class,"h5-mktg")]')
        await compare.scrollIntoView()
        await compare.waitForClickable()
        await compare.click()

        const featureName = await $('//div[@role="columnheader"]//div[contains(@class,"color-bg-subtle")]//h2')
        await expect(featureName).toBeDisplayed()
    });

    it('should open Trending Developers page from Open Source menu', async () => {
        await browser.url('https://github.com/')

        const openSourceLink = await $('//button[contains(@class, "js-details-target") and contains(., "Open Source")]')
        await openSourceLink.moveTo()

        const trendingLink = await $('a[href="https://github.com/trending"]')
        await trendingLink.waitForClickable()
        await trendingLink.click()

        await expect(browser).toHaveUrl('https://github.com/trending')

        const developersTab = await $('//a[@class="js-selected-navigation-item subnav-item"]')
        await developersTab.waitForClickable()
        await developersTab.click()

        await expect(browser).toHaveUrl('https://github.com/trending/developers')
    });

    it('should allow entering email into the email field', async () => {
        await browser.url('https://github.com/')

        const inputEmailField = await $('//div[@class = "CtaForm"]//input[@type="email"]')
        await inputEmailField.waitForDisplayed()
        await inputEmailField.click()

        await inputEmailField.setValue('example@gmail.com')

        await expect(inputEmailField).toHaveValue('example@gmail.com')
    });

    it('should display CI/CD information in Documentation', async () => {
        await browser.url('https://github.com/')

        const platformLink = await $('//button[contains(@class, "js-details-target") and contains(., "Platform")]')
        await platformLink.moveTo()

        const docLink = await $('//a[@href="https://docs.github.com"]')
        await docLink.waitForClickable()
        await docLink.click()

        const cicd = await $('//*[contains(., "CI/CD")]')
        await cicd.waitForDisplayed()

        await expect(cicd).toBeDisplayed()
    });

    it('should open Copilot plans page and start plan selection', async () => {
        await browser.url('https://github.com/')

        const platformLink = await $('//button[contains(@class, "js-details-target") and contains(., "Platform")]')
        await platformLink.moveTo()

        const copilotLink = await $('a[href="https://github.com/features/copilot"]')
        await copilotLink.click()

        await expect(browser).toHaveUrl('https://github.com/features/copilot')

        const buttonSeePlans = await $('a[href*="/features/copilot/plans"]')
        await buttonSeePlans.waitForDisplayed()
        await buttonSeePlans.click()

        await expect(browser).toHaveUrl('https://github.com/features/copilot/plans')

        const buttonsGetStarted = await $$('.Primer_Brand__PricingOptions-module__PricingOptions__actions___e2W5P')

        await buttonsGetStarted[0].waitForClickable()
        await buttonsGetStarted[0].click()

        await expect(browser).not.toHaveUrl('https://github.com/features/copilot/plans')
        //assert(browser.url != 'https://github.com/features/copilot/plans','Stayed on the same page')
    });

});
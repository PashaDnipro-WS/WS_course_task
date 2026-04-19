import { browser, expect } from '@wdio/globals'

describe('Webdriverio main page', () => {

    // #2

    xit('should have correct title', async () => {
        await browser.url('https://webdriver.io/');

        const title = await browser.getTitle()
        console.log(title);

        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
    });

    // #3

    xit('should show addValue command', async () => {
        await browser.url('https://id.heroku.com/login');

        let input = await $("#email")
        await input.addValue("hello")
        await browser.pause(2000)

        await input.addValue(123)
        await browser.pause(2000)

        await expect(input).toHaveValue("hello123")
    });

    // #4

    xit('should show setValue command', async () => {
        await browser.url('https://id.heroku.com/login');

        let input = await $("#email")
        await input.setValue("world")
        await input.setValue("hello")
        await browser.pause(2000)

        console.log(await input.getValue())
        await expect(input).toHaveValue("hello")
    });

    xit('should show click command', async () => {
        await browser.url('https://id.heroku.com/login');

        let loginButton = await $('button.btn-primary')
        await browser.pause(2000)
        await loginButton.click()
        await browser.pause(4000)

        let inputEmail = await $("#email")
        await inputEmail.addValue("guy_Tom")
        await browser.pause(2000)

        let inputPassword = await $("#password")
        await inputPassword.setValue("superPS")
        await browser.pause(2000)

        await loginButton.click()
        await browser.pause(4000)
    });

    // #6

    xit("should show getAttribute command", async () => {
        await browser.url('https://dou.ua/search')

        let inputSearch = await $('input[name="search"]')
        let attr = await inputSearch.getAttribute("aria-label")
        console.log("Placeholder attribute is: " + attr) // шукати

        await inputSearch.setValue("Cat")
        attr = await inputSearch.getValue()
        await browser.pause(2000)
        console.log("Value attribute is: " + attr) //Cat

        await expect(inputSearch).toHaveValue("Cat")
    });

    // #7

    xit("should show getLocation command", async () => {
        await browser.url('https://dou.ua/')

        let inputSearch = await $('#txtGlobalSearch')
        let location = await inputSearch.getLocation()
        console.log("Location is: ", location) // x; y

        let xLocation = await inputSearch.getLocation("x")
        console.log("Location by x is: " + xLocation) // x
    });

    xit("should show getText command", async () => {
        await browser.url("https://webdriver.io/")

        let subtitle = await $('.hero__subtitle')
        console.log("Subtitle text is: " + await subtitle.getText()) // Next-gen browser...
    });

    // #9

    xit('should show if the element is clickable', async () => {
        await browser.url('https://webdriver.io/')

        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let clickable = await blogButton.isClickable()
        console.log("Is displayed: " + clickable) // true
    });

    xit('should show if the element is displayed', async () => {
        await browser.url('https://webdriver.io/')

        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let displayed = await blogButton.isDisplayed()
        console.log("Is displayed: " + displayed) // true

    });

    xit('should show if the element is visible', async () => {
        await browser.url('https://webdriver.io/')

        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let displayedInViewport = await blogButton.isDisplayed({ withinViewport: true })
        console.log("Is blog button displayed in viewport: " + displayedInViewport) //true

        const footer = await $('.footer__link-item[href="/docs/gettingstarted"]')
        let footerIsDisplayedInViewport = await footer.isDisplayed({ withinViewport: false }) // true || false 
        console.log("Is footer displayed in viewport: " + footerIsDisplayedInViewport) // => false || true

    });

    // #10

    xit("should show if an element is enabled", async () => {
        await browser.url('https://webdriver.io');

        const getStartedButton = await $('.button[href="/docs/gettingstarted"]');
        const isEnabled = await getStartedButton.isEnabled();

        console.log("Is get started button enabled: " + isEnabled); // true
    });

    xit("should show if an element is focused", async () => {
        await browser.url('https://webdriver.io');

        const getStartedButton = await $('.button[href="/docs/gettingstarted"]');

        let isFocused = await getStartedButton.isFocused();
        console.log("Before click, is focused: " + isFocused); // false

        await browser.pause(2000);
        await getStartedButton.click();

        // тут  треба заново перевірити
        isFocused = await getStartedButton.isFocused();
        console.log("After click, is focused: " + isFocused); // true

        await browser.pause(2000);
    });

    xit("should show movement to element action", async () => {
        await browser.url('https://webdriver.io');

        const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]');

        await browser.pause(2000);
        await getStartedLink.scrollIntoView();
        await browser.pause(2000);
    });

    // #11

    xit("should show save screenshot command", async () => {
        await browser.url('https://webdriver.io');

        const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]');

        await browser.pause(2000);
        await getStartedLink.scrollIntoView();
        await browser.pause(2000);

        await getStartedLink.saveScreenshot('linkScreenshot.png');
    });

    xit("should switch to another window", async () => {
        await browser.url('https://webdriver.io');

        await browser.newWindow('https://google.com');
        await browser.pause(2000);

        // await browser.switchWindow('https://webdriver.io')
        // краще не по URL, а по handle
        const windows = await browser.getWindowHandles(); // робить "масив" вкладок
        await browser.switchToWindow(windows[0]); // назад на webdriver.io

        await browser.pause(2000);
    });

    // #12

    it("should show waitUntil command", async () => {
        await browser.url('https://webdriver.io');

        await browser.waitUntil(async () => {
            const button = await $('.button[href="/docs/gettingstarted"]');
            return await button.isDisplayed();
        }, {
            timeout: 5000,
            timeoutMsg: "Button is not displayed"
        });
    });

    it("should get html for certain elements", async () => {
        await browser.url('https://webdriver.io');

        const element = await $('.dropdown__menu');

        const outerHTML = await element.getHTML();
        console.log("outerHTML: " + outerHTML);

        const innerHTML = await element.getHTML(false);
        console.log("innerHTML: " + innerHTML);
    });

});


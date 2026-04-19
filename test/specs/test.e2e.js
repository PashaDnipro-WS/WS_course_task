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



});


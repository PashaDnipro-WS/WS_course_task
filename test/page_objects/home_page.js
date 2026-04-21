import Page from './page.js'

class HomePage extends Page {
    get signUpButton() {
        return $('a[href*="signup"]')
    }

    async open() {
        await super.open('https://github.com/')
    }

    async clickSignUp() {
        await this.signUpButton.waitForClickable()
        await this.signUpButton.click()
    }
}

export default new HomePage()
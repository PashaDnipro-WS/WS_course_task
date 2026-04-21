import Page from './page.js'

class SignupPage extends Page {
    get emailInput() {
        return $('#email')
    }

    get passwordInput() {
        return $('#password')
    }

    get usernameInput() {
        return $('#login')
    }

    get preferencesCheckbox() {
        return $('input[type="checkbox"]')
    }

    get submitButton() {
        return $('button[type="submit"]')
    }

    get headingTitle() {
        return $('h1')
    }

    get headingText() {
        return $('//span[contains(text(), "Explore GitHub\'s core features")]')
    }

    get countryDropdown() {
        return $('#country-dropdown-panel-button')
    }

    get countrySearchInput() {
        return $('#country-dropdown-panel-filter')
    }

    async waitForPageToLoad() {
        await this.emailInput.waitForDisplayed()
    }

    async fillEmail(email) {
        await this.emailInput.setValue(email)
    }

    async fillPassword(password) {
        await this.passwordInput.setValue(password)
    }

    async fillUsername(user) {
        await this.usernameInput.setValue(user)
    }

    async fillSignUpForm(email, password, user, country) {
        await this.fillEmail(email)
        await this.fillPassword(password)
        await this.fillUsername(user)
        await this.selectCountry(country)
    }

    async clickPreferencesCheckbox() {
        await this.preferencesCheckbox.click()
    }

    async selectCountry(country = 'Ukraine') {
        await this.countryDropdown.click()

        await this.countrySearchInput.waitForDisplayed()
        await this.countrySearchInput.setValue(country.slice(0, 3))

        await browser.keys('Enter')
    }

    async clickSubmit() {
        await this.submitButton.waitForClickable()
        await this.submitButton.click()
    }
}

export default new SignupPage()
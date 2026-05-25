class RegisterSection {

    get emailInput() {
        return $('#email');
    }

    get passwordInput() {
        return $('#password');
    }

    get birthdateInput() {
        return $('#birthdate');
    }

    get submitButton() {
        return $('button[type="submit"]')
    }

    get loginToggle() {
        return $('#login-signup-toggle')
    }

    get emailErrorMessage() {
        return $('#email-error')
    }

    get passwordErrorMessage() {
        return $('#password-error')
    }

    get birthdateErrorMessage() {
        return $('#birthdate-error')
    }

    async waitForPageToLoad() {
        await this.emailInput.waitForDisplayed()
    }

    async clearAndSet(element, value) {
        await element.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Backspace');

        if (value) {
            await element.setValue(value);
        }
    }

    async fillEmail(email) {
        await this.clearAndSet(this.emailInput, email);
    }

    async fillPassword(password) {
        await this.clearAndSet(this.passwordInput, password);
    }

    async fillBirthdate(birthdate) {
        await this.clearAndSet(this.birthdateInput, birthdate);
    }

    async fillSignUpForm(email, password, birthdate) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.fillBirthdate(birthdate);
        await this.submitButton.click();
    }

    async getErrorMessage(errorMessage) {
        return this.errorMessage.getText();
    }
}
export default new RegisterSection()
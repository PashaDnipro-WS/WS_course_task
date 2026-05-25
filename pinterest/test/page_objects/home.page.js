import BasePage from './base.page.js'
import RegisterSection from './sections/register.section.js'
import WarningSection from './sections/warning.section.js';

class HomePage extends BasePage{

    registerSection = RegisterSection;
    warningSection = WarningSection

    get signupButton() {
        return $('[data-test-id="simple-signup-button"]')
    }

    async open() {
        await super.open()
    }
}
export default new HomePage()
import HomePage from "../page_objects/home.page";
import testData from "../../../test-data/registerData.json" with { type: "json" };
import { expect } from '@wdio/globals';

describe('home page tests', () => {

    beforeEach(async () => {
        await HomePage.open();
    });

    it('register with invalid date to check diff errors', async () => {
        await HomePage.signupButton.click();

        for (const data of testData) {
            await HomePage.registerSection.fillSignUpForm(
                data.email,
                data.password,
                data.birthdate
            );

            await browser.pause(2000);

            if (data.error_msg_1) {
                await expect(HomePage.registerSection.emailErrorMessage)
                    .toHaveText(data.error_msg_1);
            }

            if (data.error_msg_2) {
                await expect(HomePage.registerSection.passwordErrorMessage)
                    .toHaveText(data.error_msg_2);
            }

            if (data.error_msg_3) {
                await expect(HomePage.registerSection.birthdateErrorMessage)
                    .toHaveText(data.error_msg_3);
            }

            if (data.error_msg_4) {
                await expect(HomePage.warningSection.warningHeading)
                    .toHaveText(data.error_msg_4);
            }
        }
    });
});
import HomePage from '../page_objects/home_page.js'
import SignupPage from '../page_objects/signup_page.js'

describe('GitHub Sign Up', () => {
    it('should fill sign up form and submit it', async () => {
        await HomePage.open()

        await HomePage.clickSignUp()

        await SignupPage.waitForPageToLoad()

        await expect(SignupPage.headingTitle).toHaveText('Create your free account')
        await expect(SignupPage.headingText).toHaveText(
            "Explore GitHub's core features for individuals and organizations."
        )

        await SignupPage.fillSignUpForm(
            'test123@gmail.com',
            'TestPassword123!',
            'user',
            'Ukraine'
        )

        await SignupPage.clickPreferencesCheckbox()

        await SignupPage.clickSubmit()
    })
})
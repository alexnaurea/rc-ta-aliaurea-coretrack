import { WaitHelper } from '../../../components/html/wait-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { CredentialsHelper } from '../../../components/misc-utils/credentials-helper';
import { EndpointHelper } from '../../../components/misc-utils/endpoint-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { BasePageHelper } from '../base-page.helper';
import { HomePage } from '../home-page/home-page.po';
import { User } from '../models/user.model';

import { LoginPage } from './login-page.po';

export class LoginPageHelper extends BasePageHelper {

    private static vInstance: LoginPageHelper;

    private constructor() {
        super();
    }

    public static getInstance(): LoginPageHelper {
        return this.vInstance || (this.vInstance = new this());
    }

    /**
     * Helps in logging in to the application
     * @param user
     */
    private static async login(user: User) {
        const form = LoginPage.loginForm;
        await WaitHelper.waitForPageToStable();
        await form.username.sendKeys(user.username);
        await form.password.sendKeys(user.password);
        await form.signIn.clickButton();
        await WaitHelper.waitForPageToStable();
        await HomePage.pageTitle.verifyDisplayedStatus();
    }

    /**
     * Enter UserName, Password and click 'SignIn' button
     * @param user
     */
    static async enterLoginInformation(user: User) {
        await LoginPage.loginForm.username.sendKeys(user.username);
        await LoginPage.loginForm.password.sendKeys(user.password);
        await LoginPage.loginForm.signIn.clickButton();
    }

    static async verifyLoginPage() {
        await LoginPage.loginForm.username.verifyDisplayedStatus();
    }

    /**
     * Login as admin
     */
    static async loginAsAdmin() {
        await this.login(CredentialsHelper.admin);
    }

    /**
     * Verify username textbox is highlighted
     */
    static async verifyUsernameBoxHighlightedInRed() {
        const borderLeft = HtmlHelper.additionalAttributes.borderLeftColor;
        const actualValue = await LoginPage.loginForm.username.getCssValue(borderLeft);
        await ExpectationHelper.verifyStringEqualTo(actualValue, Constants.colorCode.red);
    }

    url(): string {
        return EndpointHelper.login;
    }
}

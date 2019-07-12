import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { HomePageConstant } from '../../../../page-objects/pages/home-page/home-page.constants';
import { HomePageHelper } from '../../../../page-objects/pages/home-page/home-page.helper';
import { HomePage } from '../../../../page-objects/pages/home-page/home-page.po';
import { LoginPageHelper } from '../../../../page-objects/pages/login-page/login-page.helper';
import { NewAccountPageConstant } from '../../../../page-objects/pages/new-account-page/new-account-page.constants';
import { NewAccountPageHelper } from '../../../../page-objects/pages/new-account-page/new-account-page.helper';
import { SuiteNames } from '../../../helpers/suite-names';

describe(SuiteNames.smokeSuite, () => {
    let loginPageHelper: LoginPageHelper;

    beforeAll(async () => {
        loginPageHelper = LoginPageHelper.getInstance();
        await PageHelper.maximiseBrowser();
    });

    beforeEach(async () => {
        await PageHelper.restartBrowser();
        await loginPageHelper.goTo();
    });

    // Jira References - COTRAC-91
    it('To verify that user lands to Overview Pane when"New Account" is clicked. - [22398355]', async () => {
        // Auto generated by aurea-automation - util on Wed, 13 Mar 2019 17:12:24 GMT

        StepLogger.caseId = 22398355;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePage.newItems.account.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('Click "account".');
        await HomePageHelper.clickAccountUnderNew();
        StepLogger.verification('New account page should be displayed.');
        await NewAccountPageHelper.verifyNewAccountPageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Verify that only "Overview" pane is displayed.');
        StepLogger.verification('Overview pane is displayed on left panel.');
        await NewAccountPageHelper.verifyOverViewTabAndLeftPane();
    });

    // Jira References - COTRAC-91
    it('To verify that validation error message is displayed when new account form is left blank and save is clicked. - [22399330]', async () => {
        // Auto generated by aurea-automation - util on Wed, 13 Mar 2019 17:12:24 GMT

        StepLogger.caseId = 22399330;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePage.newItems.account.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('Click "account".');
        await HomePageHelper.clickAccountUnderNew();
        StepLogger.verification('New account page should be displayed.');
        await NewAccountPageHelper.verifyNewAccountPageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Leaving all the mandatory fields blank, click Save.');
        await NewAccountPageHelper.clickSave();
        StepLogger.verification('Validation Error messages should be displayed beside all the mandatory fields.');
        await NewAccountPageHelper.verifyMandatoryMessage();
    });

    // Jira References - COTRAC-91
    it('To verify the Product field. - [22399335]', async () => {
        // Auto generated by aurea-automation - util on Wed, 13 Mar 2019 17:12:24 GMT

        StepLogger.caseId = 22399335;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePage.newItems.account.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('Click "account".');
        await HomePageHelper.clickAccountUnderNew();
        StepLogger.verification('New account page should be displayed.');
        await NewAccountPageHelper.verifyNewAccountPageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Verify the Product field.');
        StepLogger.verification('It should have following 4 values:');
        await NewAccountPageHelper.verifyProductOptions();
    });

    // Jira References - COTRAC-91
    it('To verify the status field. - [22399336]', async () => {
        // Auto generated by aurea-automation - util on Wed, 13 Mar 2019 17:12:24 GMT

        StepLogger.caseId = 22399336;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePage.newItems.account.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('Click "account".');
        await HomePageHelper.clickAccountUnderNew();
        StepLogger.verification('New account page should be displayed.');
        await NewAccountPageHelper.verifyNewAccountPageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Verify the status field.');
        StepLogger.verification(`It should have following values:
            1. Opened Account
            2. Closed Account`);
        await NewAccountPageHelper.verifyStatusOptions();
    });

    // Jira References - COTRAC-91
    it('To verify the functionality of close button. - [22399369]', async () => {
        // Auto generated by aurea-automation - util on Wed, 13 Mar 2019 17:08:48 GMT

        StepLogger.caseId = 22399369;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePage.newItems.account.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('Click "account".');
        await HomePageHelper.clickAccountUnderNew();
        StepLogger.verification('New account page should be displayed.');
        await NewAccountPageHelper.verifyNewAccountPageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Click "Close" button.');
        await NewAccountPageHelper.clickClose();
        StepLogger.verification('Warning pop up should be displayed.');
        await NewAccountPageHelper.verifyConfirmWindow();

        StepLogger.stepId(4);
        StepLogger.step('Click "OK"');
        await NewAccountPageHelper.clickDialogOk();
        StepLogger.verification('Tab should be closed.');
        await NewAccountPageHelper.verifyTabClosed();
    });

    // Jira References - COTRAC-91
    it('To verify Referral Source Drop down. - [22403661]', async () => {
        // Auto generated by aurea-automation - util on Wed, 13 Mar 2019 17:08:48 GMT

        StepLogger.caseId = 22403661;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePage.newItems.account.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('Click "account".');
        await HomePageHelper.clickAccountUnderNew();
        StepLogger.verification('New account page should be displayed.');
        await NewAccountPageHelper.verifyNewAccountPageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Verify Referral Source Drop down.');
        StepLogger.verification('It should have following options:');
        await NewAccountPageHelper.verifyReferralSourceOptions();
    });

    // Jira References - COTRAC-91
    it('Verify "Product Details" section when brokerage is selected in product field. - [22399337]', async () => {
        // Auto generated by aurea-automation - util on Wed, 13 Mar 2019 17:08:49 GMT

        StepLogger.caseId = 22399337;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePage.newItems.account.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('Click "account".');
        await HomePageHelper.clickAccountUnderNew();
        StepLogger.verification('New account page should be displayed.');
        await NewAccountPageHelper.verifyNewAccountPageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Select "brokerage" in product field and also sub product.');
        await NewAccountPageHelper.selectProduct();
        StepLogger.verification('It should be selected.');
        await NewAccountPageHelper.verifySelectedProduct();

        StepLogger.stepId(4);
        StepLogger.step('Verify the Product details section.');
        StepLogger.verification('Potential investment field should be displayed.');
        await NewAccountPageHelper.verifyProductDetail();
    });

    // Jira References - COTRAC-91
    it('To verify the tabs that are displayed when a account is saved. - [22403475]', async () => {
        // Auto generated by aurea-automation - util on Wed, 13 Mar 2019 17:08:48 GMT

        StepLogger.caseId = 22403475;
        const name = HomePageConstant.elementNames.test;
        const acct = PageHelper.getUniqueId();

        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePage.newItems.account.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('Click "account".');
        await HomePageHelper.clickAccountUnderNew();
        StepLogger.verification('New account page should be displayed.');
        await NewAccountPageHelper.verifyNewAccountPageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Enter data in all the mandatory fields and Click "save".');
        await NewAccountPageHelper.enterDetailAndSave(name, acct);
        StepLogger.verification('The account should be saved.');
        await NewAccountPageHelper.verifyAccountSaved();

        StepLogger.stepId(4);
        StepLogger.step('Verify the tabs available in the left panel after the case is saved.');
        StepLogger.verification(`Following tabs should be available:
            1. Household
            2. Cases
            3. Notes
            4. Events
            5. Tasks
            6. Attachments`);
        await NewAccountPageHelper.verifyLeftPanel();
    });

    // Jira References - COTRAC-91
    it('To verify that user is able to see the contact name, email and phone number in the menu bar of an account - [22403476]', async () => {
        // Auto generated by aurea-automation - util on Wed, 13 Mar 2019 17:08:49 GMT

        StepLogger.caseId = 22403476;
        const name = HomePageConstant.elementNames.test;
        const acct = PageHelper.getUniqueId();
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePage.newItems.account.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('Click "account".');
        await HomePageHelper.clickAccountUnderNew();
        StepLogger.verification('New account page should be displayed.');
        await NewAccountPageHelper.verifyNewAccountPageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Enter data in all the mandatory fields and Click "save".');
        await NewAccountPageHelper.enterDetailAndSave(name, acct);
        StepLogger.verification('The account should be saved.');
        await NewAccountPageHelper.verifyAccountSaved();

        StepLogger.stepId(4);
        StepLogger.step('To verify that user is able to see the contact name, email and phone number in the menu bar of an account');
        StepLogger.verification('Contact name, email and phone number should be displayed in top menu.');
        await NewAccountPageHelper.verifyTopOption();
    });

    // Jira References - COTRAC-91
    it('To verify that validation error message is displayed when product is left blank. - [22401419]', async () => {
        // Auto generated by aurea-automation - util on Wed, 13 Mar 2019 17:12:23 GMT

        StepLogger.caseId = 22401419;
        const name = HomePageConstant.elementNames.test;
        const acct = PageHelper.getUniqueId();
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePage.newItems.account.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('Click "account".');
        await HomePageHelper.clickAccountUnderNew();
        StepLogger.verification('New account page should be displayed.');
        await NewAccountPageHelper.verifyNewAccountPageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Search a contact and enter account number.Click Save.');
        await NewAccountPageHelper.addContactAcctAndSave(name, acct);
        StepLogger.verification('Validation error message should be displayed.');
        await HomePageHelper.verifyAlertText(NewAccountPageConstant.elementNames.noProductSelected);
    });
});

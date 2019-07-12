import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { HomePageConstant } from '../../../../page-objects/pages/home-page/home-page.constants';
import { HomePageHelper } from '../../../../page-objects/pages/home-page/home-page.helper';
import { HomePage } from '../../../../page-objects/pages/home-page/home-page.po';
import { LoginPageHelper } from '../../../../page-objects/pages/login-page/login-page.helper';
import { NewAccountPageHelper } from '../../../../page-objects/pages/new-account-page/new-account-page.helper';
import { NewAccountPage } from '../../../../page-objects/pages/new-account-page/new-account-page.po';
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
    it('To verify that user is able to navigate to "New Account" page. - [22398344]', async () => {
        // Auto generated by aurea-automation - util on Fri, 08 Mar 2019 10:44:27 GMT

        StepLogger.caseId = 22398344;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Verify that account option is displayed under new section.');
        StepLogger.verification('Account should be displayed.');
        await HomePageHelper.verifyAccountDisplayedUnderNew();

        StepLogger.stepId(3);
        StepLogger.step('Click "account".');
        await HomePageHelper.clickAccountUnderNew();
        StepLogger.verification('New account page should be displayed.');
        await NewAccountPageHelper.verifyNewAccountPageDisplayed();
    });

    // Jira References - COTRAC-91
    it('To verify that there are 2 sections on the "New account" page. - [22398357]', async () => {
        // Auto generated by aurea-automation - util on Fri, 08 Mar 2019 10:44:27 GMT

        StepLogger.caseId = 22398357;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click "account".');
        await HomePageHelper.clickAccountUnderNew();
        StepLogger.verification('New account page should be displayed.');
        await NewAccountPageHelper.verifyNewAccountPageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Verify the sections available in new case page.');
        StepLogger.verification(`Following 2 sections should be available:
			1. Information
			2. Product Details`);
        await NewAccountPageHelper.verifyInformationAndProductDetailsDisplayed();
    });

    // Jira References - COTRAC-91
    it('To verify the fields available on "New account" page. - [22398361]', async () => {
        // Auto generated by aurea-automation - util on Fri, 08 Mar 2019 10:44:27 GMT

        StepLogger.caseId = 22398361;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click "account".');
        await HomePageHelper.clickAccountUnderNew();
        StepLogger.verification('New account page should be displayed.');
        await NewAccountPageHelper.verifyNewAccountPageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Verify the fields available on "New account" page.');
        StepLogger.verification(`The following fields should be available:
			Contact, Product, Owner, Status, ACCT#, Description, Created, Forecast, Funds Source, Referral Source`);
        await NewAccountPageHelper.verifyOptionsDisplayedUnderInformationSection();
    });

    // Jira References - COTRAC-91
    it('To verify Funds Source drop down - [22403659]', async () => {
        // Auto generated by aurea-automation - util on Fri, 08 Mar 2019 10:44:27 GMT

        StepLogger.caseId = 22403659;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click "account".');
        await HomePageHelper.clickAccountUnderNew();
        StepLogger.verification('New account page should be displayed.');
        await NewAccountPageHelper.verifyNewAccountPageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Verify Funds Source drop down');
        StepLogger.verification('It should have following values:');
        await NewAccountPageHelper.verifyFundsSourceOptions();
    });

    // Jira References - COTRAC-91
    it('To verify that user is able to pick a date in created field. - [22403549]', async () => {
        // Auto generated by aurea-automation - util on Fri, 08 Mar 2019 10:44:27 GMT

        StepLogger.caseId = 22403549;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click "account".');
        await HomePageHelper.clickAccountUnderNew();
        StepLogger.verification('New account page should be displayed.');
        await NewAccountPageHelper.verifyNewAccountPageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Click on the calendar icon displayed in created field.');
        await NewAccountPageHelper.clickCalenderIcon();
        StepLogger.verification('Calendar should be opened.');
        await NewAccountPage.information.calenderPopUp.verifyDisplayedStatus();

        StepLogger.stepId(4);
        StepLogger.step('Pick a date form the calendar.');
        const date = await NewAccountPageHelper.pickCreatedDate();
        StepLogger.verification('Date should be displayed in Created field.');
        await NewAccountPageHelper.verifyCreatedDate(date);
    });

    // Jira References - COTRAC-91
    it('To verify that user is able to select a time in created field. - [22403557]', async () => {
        // Auto generated by aurea-automation - util on Fri, 08 Mar 2019 10:44:27 GMT

        StepLogger.caseId = 22403557;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click "account".');
        await HomePageHelper.clickAccountUnderNew();
        StepLogger.verification('New account page should be displayed.');
        await NewAccountPageHelper.verifyNewAccountPageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Click on the Clock icon displayed in Created field.');
        await NewAccountPageHelper.clickClockIcon();
        StepLogger.verification('Time picker should be displayed.');
        await NewAccountPage.information.timePopUp.verifyDisplayedStatus();

        StepLogger.stepId(4);
        StepLogger.step('User should be able to select a time.');
        const selectedTime = await NewAccountPageHelper.selectTimeInClock();
        StepLogger.verification('Time should be updated in created field.');
        await NewAccountPageHelper.verifySelectedTimeIsDisplayedInCreatedField(selectedTime);
    });

    // Jira References - COTRAC-91
    it('To verify the buttons available on "New Account" page. - [22398354]', async () => {
        // Auto generated by aurea-automation - util on Wed, 13 Mar 2019 17:12:24 GMT

        StepLogger.caseId = 22398354;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click "account".');
        await HomePageHelper.clickAccountUnderNew();
        StepLogger.verification('New account page should be displayed.');
        await NewAccountPageHelper.verifyNewAccountPageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Verify the button available on new account page.');
        StepLogger.verification('“Save” and “Close” buttons should be displayed on top right corner.');
        await NewAccountPageHelper.verifySaveAndCloseOptions();
    });

    // Jira References - COTRAC-91
    it('To verify that user is able to save a new account by entering data in mandatory fields - [22399338]', async () => {
        // Auto generated by aurea-automation - util on Tue, 26 Mar 2019 13:38:04 GMT

        StepLogger.caseId = 22399338;
        const name = HomePageConstant.elementNames.test;
        const acct = PageHelper.getUniqueId();

        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click "account".');
        await HomePageHelper.clickAccountUnderNew();
        StepLogger.verification('New account page should be displayed.');
        await NewAccountPageHelper.verifyNewAccountPageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Search a contact and add.');
        await NewAccountPageHelper.searchAndAddContact(name);
        StepLogger.verification('Contact should be added.');
        await NewAccountPageHelper.verifyContactText(name);

        StepLogger.stepId(4);
        StepLogger.step('Select a product');
        await NewAccountPageHelper.selectProductDetail();
        StepLogger.verification('Product should be selected.');
        await NewAccountPageHelper.verifySelectedProduct();

        StepLogger.stepId(5);
        StepLogger.step('Select Status.');
        await NewAccountPageHelper.selectStatus();
        StepLogger.verification('Status should be selected.');
        await NewAccountPageHelper.verifySelectedStatus();

        StepLogger.stepId(6);
        StepLogger.step('Enter Account number');
        await NewAccountPage.information.acct.sendKeys(acct);
        StepLogger.verification('It should be entered.');
        await NewAccountPage.information.acct.verifyTextEntered(acct);

        StepLogger.stepId(7);
        StepLogger.step('Click "save".');
        await NewAccountPageHelper.clickSave();
        StepLogger.verification('Account should be saved.');
        await NewAccountPageHelper.verifyAccountSaved();
    });
});
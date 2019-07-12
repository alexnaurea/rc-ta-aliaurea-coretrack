import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { HomePageConstant } from '../../../../page-objects/pages/home-page/home-page.constants';
import { HomePageHelper } from '../../../../page-objects/pages/home-page/home-page.helper';
import { HomePage } from '../../../../page-objects/pages/home-page/home-page.po';
import { LoginPageHelper } from '../../../../page-objects/pages/login-page/login-page.helper';
import { SuiteNames } from '../../../helpers/suite-names';

describe(SuiteNames.regressionSuite, () => {
    let loginPageHelper: LoginPageHelper;

    beforeAll(async () => {
        loginPageHelper = LoginPageHelper.getInstance();
        await PageHelper.maximiseBrowser();
    });

    beforeEach(async () => {
        await PageHelper.restartBrowser();
        await loginPageHelper.goTo();
    });

    // Jira References - COTRAC-93
    it('Verify if Last Name input field in the Check Existing Contact modal  is a mandatory field - [22991077]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Mar 2019 14:35:30 GMT

        StepLogger.caseId = 22991077;
        const uniqueName = await PageHelper.getUniqueId();
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click on New menu button.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('The New menu list is displayed successfully.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click on Retail Prospect menu button.');
        await HomePageHelper.clickRetailProspectUnderNew();
        StepLogger.verification('The "Check Existing Contact" modal screen is displayed successfully.');
        await HomePageHelper.verifyCheckExistingContactDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Fill the First Name input field.');
        await HomePageHelper.enterFirstNameOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The First Name input field should be filled successfully.');
        await HomePageHelper.verifyFirstNameIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(4);
        StepLogger.step('Click on Search Contacts button.');
        await HomePageHelper.clickSearchContactsOnCheckExistingContactModal(false);
        StepLogger.verification('The warning popup should display with text: "Please review the following errors: Last Name is required"');
        await HomePageHelper.verifyAlertText(HomePageConstant.elementNames.lastNameRequired);
    });

    // Jira References - COTRAC-93
    it('Verify if user can see the company input field on the Check Existing Contact modal - [22991112]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Mar 2019 14:35:30 GMT

        StepLogger.caseId = 22991112;
        const uniqueName = await PageHelper.getUniqueId();
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click on New menu button.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('The New menu list is displayed successfully.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click on Retail Prospect menu button.');
        await HomePageHelper.clickRetailProspectUnderNew();
        StepLogger.verification('The "Check Existing Contact" modal screen is displayed successfully.');
        await HomePageHelper.verifyCheckExistingContactDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Check if the Company input field.');
        await HomePageHelper.enterCompanyOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The Company input field is displayed successfully.');
        await HomePageHelper.verifyCompanyIsEnteredOnCheckExistingContactModal(uniqueName);
    });

    // Jira References - COTRAC-93
    it('Verify if user shall be able to access the Check Existing Contact modal screen - [22991072]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Mar 2019 14:35:30 GMT

        StepLogger.caseId = 22991072;
        const uniqueName = HomePageConstant.elementNames.test;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click on New menu button.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('The New menu list is displayed successfully.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click on Retail Prospect menu button.');
        await HomePageHelper.clickRetailProspectUnderNew();
        StepLogger.verification('The "Check Existing Contact" modal screen is displayed successfully.');
        await HomePageHelper.verifyCheckExistingContactDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Fill the First Name input field with text "test".');
        await HomePageHelper.enterFirstNameOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The First Name input field is filled successfully.');
        await HomePageHelper.verifyFirstNameIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(4);
        StepLogger.step('Fill the Last Name input field with text "test".');
        await HomePageHelper.enterLastNameOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The Last Name input field is filled successfully.');
        await HomePageHelper.verifyLastNameIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(5);
        StepLogger.step('Click on Search Contacts button.');
        await HomePageHelper.clickSearchContactsOnCheckExistingContactModal();
        StepLogger.verification('The list of contacts is displayed successfully.');
        await HomePageHelper.verifyContactListCheckExistingContactModal();
    });

    // Jira References - COTRAC-93
    it('Verify if user can see the Return dropdown list on the Check Existing Contact modal - [22991115]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Mar 2019 14:35:30 GMT

        StepLogger.caseId = 22991115;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click on New menu button.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('The New menu list is displayed successfully.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click on Retail Prospect menu button.');
        await HomePageHelper.clickRetailProspectUnderNew();
        StepLogger.verification('The "Check Existing Contact" modal screen is displayed successfully.');
        await HomePageHelper.verifyCheckExistingContactDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Check if the Return dropdown list field.');
        StepLogger.verification('The Return dropdown list field is displayed successfully.');
        await HomePageHelper.verifyReturnOptionOnCheckExistingContactModal();
    });

    // Jira References - COTRAC-93
    it('Verify if user can see the Search Contacts button on the Check Existing Contact modal - [22991185]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Mar 2019 14:35:30 GMT

        StepLogger.caseId = 22991185;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click on New menu button.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('The New menu list is displayed successfully.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click on Retail Prospect menu button.');
        await HomePageHelper.clickRetailProspectUnderNew();
        StepLogger.verification('The "Check Existing Contact" modal screen is displayed successfully.');
        await HomePageHelper.verifyCheckExistingContactDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Check if the Search Contacts button.');
        StepLogger.verification('The Contacts button is displayed successfully.');
        await HomePageHelper.verifySearchContactsOnCheckExistingContactModal();
    });

    // Jira References - COTRAC-93
    it('Verify if First Name input field in the Check Existing Contact modal is a mandatory field - [22991076]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Mar 2019 14:35:30 GMT

        StepLogger.caseId = 22991076;
        const uniqueName = PageHelper.getUniqueId();

        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click on New menu button.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('The New menu list is displayed successfully.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click on Retail Prospect menu button.');
        await HomePageHelper.clickRetailProspectUnderNew();
        StepLogger.verification('The "Check Existing Contact" modal screen is displayed successfully.');
        await HomePageHelper.verifyCheckExistingContactDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Fill the Last Name input field.');
        await HomePageHelper.enterLastNameOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The Last Name input field should be filled successfully.');
        await HomePageHelper.verifyLastNameIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(4);
        StepLogger.step('Click on Search Contacts button.');
        await HomePageHelper.clickSearchContactsOnCheckExistingContactModal(false);
        StepLogger.verification('The warning popup should display with text: "Please review the following errors: First Name is required"');
        await HomePageHelper.verifyAlertText(HomePageConstant.elementNames.firstNameRequired);
    });

    // Jira References - COTRAC-93
    it('Verify if user can see the grid columns on the Check Existing Contact modal - [22991186]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Mar 2019 14:35:30 GMT

        StepLogger.caseId = 22991186;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(1);
        StepLogger.step('Click on New menu button.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('The New menu list is displayed successfully.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click on Retail Prospect menu button.');
        await HomePageHelper.clickRetailProspectUnderNew();
        StepLogger.verification('The "Check Existing Contact" modal screen is displayed successfully.');
        await HomePageHelper.verifyCheckExistingContactDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Check the Contacts grid columns list.');
        StepLogger.verification(`The grid is displayed with columns:
            -Name
            -Address
            -Work Phone
            -Home Phone
            -Tax ID
            -Details`);
        await HomePageHelper.verifyContactGridHeader();
    });
});

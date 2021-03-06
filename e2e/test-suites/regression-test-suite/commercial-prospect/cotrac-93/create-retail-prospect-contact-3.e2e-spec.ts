import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { HomePageConstant } from '../../../../page-objects/pages/home-page/home-page.constants';
import { HomePageHelper } from '../../../../page-objects/pages/home-page/home-page.helper';
import { HomePage } from '../../../../page-objects/pages/home-page/home-page.po';
import { LoginPageHelper } from '../../../../page-objects/pages/login-page/login-page.helper';
import { NewAccountPageHelper } from '../../../../page-objects/pages/new-account-page/new-account-page.helper';
import { NewProspectPageHelper } from '../../../../page-objects/pages/new-prospect-page/new-prospect-page.helper';
import { NewProspectPage } from '../../../../page-objects/pages/new-prospect-page/new-prospect-page.po';
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
    it('Verify if user shall be able to see the Name section - [22991215]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Mar 2019 14:36:03 GMT

        StepLogger.caseId = 22991215;
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
        StepLogger.step('Fill the First Name input field.');
        await HomePageHelper.enterFirstNameOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The First Name input field is filled successfully.');
        await HomePageHelper.verifyFirstNameIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(4);
        StepLogger.step('Fill the Last Name input field.');
        await HomePageHelper.enterLastNameOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The Last Name input field is filled successfully.');
        await HomePageHelper.verifyLastNameIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(5);
        StepLogger.step('Fill the Company input field.');
        await HomePageHelper.enterCompanyOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The Company input field is filled successfully.');
        await HomePageHelper.verifyCompanyIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(6);
        StepLogger.step('Select Retail option in the Return dropdown list.');
        await HomePageHelper.selectReturnOptionOnCheckExistingContactModal(HomePageConstant.retail);
        StepLogger.verification('The Retail option is displayed in the dropdown field.');
        await HomePageHelper.verifyReturnOptionIsSelectedOnCheckExistingContactModal(HomePageConstant.retail);

        StepLogger.stepId(7);
        StepLogger.step('Click on Search Contacts button.');
        await HomePageHelper.clickSearchContactsOnCheckExistingContactModal();
        StepLogger.verification('The Continue With New Prospect button is enabled.');
        await HomePageHelper.verifyContinueWithNewProspectIsEnabled();

        StepLogger.stepId(8);
        StepLogger.step('Click on Continue With New Prospect button.');
        await HomePageHelper.clickContinueWithNewProspectButton();
        StepLogger.verification('The New Prospect screen is displayed successfully.');
        await NewProspectPageHelper.verifyNewProspectPageIsDisplayed(false);

        StepLogger.stepId(9);
        StepLogger.step('Check the Name section fields.');
        StepLogger.verification('The list of fields is displayed successfully.');
        await NewProspectPageHelper.verifyNameSection();
    });

    // Jira References - COTRAC-93
    it('Verify if Last Name input field in the New Prospect Retail screen is a mandatory field - [22991212]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Mar 2019 14:36:03 GMT

        StepLogger.caseId = 22991212;
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
        StepLogger.verification('The First Name input field is filled successfully.');
        await HomePageHelper.verifyFirstNameIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(4);
        StepLogger.step('Fill the Last Name input field.');
        await HomePageHelper.enterLastNameOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The Last Name input field is filled successfully.');
        await HomePageHelper.verifyLastNameIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(5);
        StepLogger.step('Fill the Company input field.');
        await HomePageHelper.enterCompanyOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The Company input field is filled successfully.');
        await HomePageHelper.verifyCompanyIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(6);
        StepLogger.step('Select Retail option in the Return dropdown list.');
        await HomePageHelper.selectReturnOptionOnCheckExistingContactModal(HomePageConstant.retail);
        StepLogger.verification('The Retail option is displayed in the dropdown field.');
        await HomePageHelper.verifyReturnOptionIsSelectedOnCheckExistingContactModal(HomePageConstant.retail);

        StepLogger.stepId(7);
        StepLogger.step('Click on Search Contacts button.');
        await HomePageHelper.clickSearchContactsOnCheckExistingContactModal();
        StepLogger.verification('The Continue With New Prospect button is enabled.');
        await HomePageHelper.verifyContinueWithNewProspectIsEnabled();

        StepLogger.stepId(8);
        StepLogger.step('Click on Continue With New Prospect button.');
        await HomePageHelper.clickContinueWithNewProspectButton();
        StepLogger.verification('The New Prospect screen is displayed successfully.');
        await NewProspectPageHelper.verifyNewProspectPageIsDisplayed(false);

        StepLogger.stepId(9);
        StepLogger.step('Clear the Last Name input field and click on Save button.');
        await NewProspectPageHelper.clearLastNameAndClickSave();
        StepLogger.verification('The mandatory message is displayed successfully.');
        await NewProspectPage.form.information.lastNameRequired.verifyDisplayedStatus();
    });

    // Jira References - COTRAC-93
    it('Verify if First Name input field in the New Prospect Retail screen is a mandatory field - [22991211]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Mar 2019 14:36:03 GMT

        StepLogger.caseId = 22991211;
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
        StepLogger.step('Fill the First Name input field.');
        await HomePageHelper.enterFirstNameOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The First Name input field is filled successfully.');
        await HomePageHelper.verifyFirstNameIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(4);
        StepLogger.step('Fill the Last Name input field.');
        await HomePageHelper.enterLastNameOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The Last Name input field is filled successfully.');
        await HomePageHelper.verifyLastNameIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(5);
        StepLogger.step('Fill the Company input field.');
        await HomePageHelper.enterCompanyOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The Company input field is filled successfully.');
        await HomePageHelper.verifyCompanyIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(6);
        StepLogger.step('Select Retail option in the Return dropdown list.');
        await HomePageHelper.selectReturnOptionOnCheckExistingContactModal(HomePageConstant.retail);
        StepLogger.verification('The Retail option is displayed in the dropdown field.');
        await HomePageHelper.verifyReturnOptionIsSelectedOnCheckExistingContactModal(HomePageConstant.retail);

        StepLogger.stepId(7);
        StepLogger.step('Click on Search Contacts button.');
        await HomePageHelper.clickSearchContactsOnCheckExistingContactModal();
        StepLogger.verification('The Continue With New Prospect button is enabled.');
        await HomePageHelper.verifyContinueWithNewProspectIsEnabled();

        StepLogger.stepId(8);
        StepLogger.step('Click on Continue With New Prospect button.');
        await HomePageHelper.clickContinueWithNewProspectButton();
        StepLogger.verification('The New Prospect screen is displayed successfully.');
        await NewProspectPageHelper.verifyNewProspectPageIsDisplayed(false);

        StepLogger.stepId(9);
        StepLogger.step('Clear the First Name input field and click on Save button.');
        await NewProspectPageHelper.clearFirstNameAndClickSave();
        StepLogger.verification('The mandatory message is displayed successfully.');
        await NewProspectPage.form.information.firstNameRequired.verifyDisplayedStatus();
    });

    // Jira References - COTRAC-93
    it('Verify if user shall be able to close the New Prospect screen clicking on Close button - [22991209]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Mar 2019 14:36:03 GMT

        StepLogger.caseId = 22991209;
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
        StepLogger.step('Fill the First Name input field.');
        await HomePageHelper.enterFirstNameOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The First Name input field is filled successfully.');
        await HomePageHelper.verifyFirstNameIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(4);
        StepLogger.step('Fill the Last Name input field.');
        await HomePageHelper.enterLastNameOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The Last Name input field is filled successfully.');
        await HomePageHelper.verifyLastNameIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(5);
        StepLogger.step('Fill the Company input field.');
        await HomePageHelper.enterCompanyOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The Company input field is filled successfully.');
        await HomePageHelper.verifyCompanyIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(6);
        StepLogger.step('Select Retail option in the Return dropdown list.');
        await HomePageHelper.selectReturnOptionOnCheckExistingContactModal(HomePageConstant.retail);
        StepLogger.verification('The Retail option is displayed in the dropdown field.');
        await HomePageHelper.verifyReturnOptionIsSelectedOnCheckExistingContactModal(HomePageConstant.retail);

        StepLogger.stepId(7);
        StepLogger.step('Click on Search Contacts button.');
        await HomePageHelper.clickSearchContactsOnCheckExistingContactModal();
        StepLogger.verification('The Continue With New Prospect button is enabled.');
        await HomePageHelper.verifyContinueWithNewProspectIsEnabled();

        StepLogger.stepId(8);
        StepLogger.step('Click on Continue With New Prospect button.');
        await HomePageHelper.clickContinueWithNewProspectButton();
        StepLogger.verification('The New Prospect screen is displayed successfully.');
        await NewProspectPageHelper.verifyNewProspectPageIsDisplayed(false);

        StepLogger.stepId(9);
        StepLogger.step('Click on Close button.');
        await NewProspectPageHelper.clickCloseButton();
        StepLogger.verification('Should display the popup confirmation');
        await NewAccountPageHelper.verifyConfirmWindow();

        StepLogger.stepId(10);
        StepLogger.step('Click on OK button.');
        await NewAccountPageHelper.clickDialogOk();
        StepLogger.verification('Should close the New Prospect screen.');
        await NewProspectPageHelper.verifyNewProspectPageClosed();
    });

    // Jira References - COTRAC-93
    it('Verify if user shall be able to see the Identification section - [22991219]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Mar 2019 14:36:03 GMT

        StepLogger.caseId = 22991219;
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
        StepLogger.step('Fill the First Name input field.');
        await HomePageHelper.enterFirstNameOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The First Name input field is filled successfully.');
        await HomePageHelper.verifyFirstNameIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(4);
        StepLogger.step('Fill the Last Name input field.');
        await HomePageHelper.enterLastNameOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The Last Name input field is filled successfully.');
        await HomePageHelper.verifyLastNameIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(5);
        StepLogger.step('Fill the Company input field.');
        await HomePageHelper.enterCompanyOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The Company input field is filled successfully.');
        await HomePageHelper.verifyCompanyIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(6);
        StepLogger.step('Select Retail option in the Return dropdown list.');
        await HomePageHelper.selectReturnOptionOnCheckExistingContactModal(HomePageConstant.retail);
        StepLogger.verification('The Retail option is displayed in the dropdown field.');
        await HomePageHelper.verifyReturnOptionIsSelectedOnCheckExistingContactModal(HomePageConstant.retail);

        StepLogger.stepId(7);
        StepLogger.step('Click on Search Contacts button.');
        await HomePageHelper.clickSearchContactsOnCheckExistingContactModal();
        StepLogger.verification('The Continue With New Prospect button is enabled.');
        await HomePageHelper.verifyContinueWithNewProspectIsEnabled();

        StepLogger.stepId(8);
        StepLogger.step('Click on Continue With New Prospect button.');
        await HomePageHelper.clickContinueWithNewProspectButton();
        StepLogger.verification('The New Prospect screen is displayed successfully.');
        await NewProspectPageHelper.verifyNewProspectPageIsDisplayed(false);

        StepLogger.stepId(9);
        StepLogger.step('Check the Identification section fields.');
        StepLogger.verification('The list of fields is displayed successfully.');
        await NewProspectPageHelper.verifyIdentificationSection();
    });

    // Jira References - COTRAC-93
    it('Verify if New Prospect header screen is displaying properly - [22991207]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Mar 2019 14:36:03 GMT

        StepLogger.caseId = 22991207;
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
        StepLogger.step('Fill the First Name input field.');
        await HomePageHelper.enterFirstNameOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The First Name input field is filled successfully.');
        await HomePageHelper.verifyFirstNameIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(4);
        StepLogger.step('Fill the Last Name input field.');
        await HomePageHelper.enterLastNameOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The Last Name input field is filled successfully.');
        await HomePageHelper.verifyLastNameIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(5);
        StepLogger.step('Fill the Company input field.');
        await HomePageHelper.enterCompanyOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The Company input field is filled successfully.');
        await HomePageHelper.verifyCompanyIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(6);
        StepLogger.step('Select Retail option in the Return dropdown list.');
        await HomePageHelper.selectReturnOptionOnCheckExistingContactModal(HomePageConstant.retail);
        StepLogger.verification('The Retail option is displayed in the dropdown field.');
        await HomePageHelper.verifyReturnOptionIsSelectedOnCheckExistingContactModal(HomePageConstant.retail);

        StepLogger.stepId(7);
        StepLogger.step('Click on Search Contacts button.');
        await HomePageHelper.clickSearchContactsOnCheckExistingContactModal();
        StepLogger.verification('The Continue With New Prospect button is enabled.');
        await HomePageHelper.verifyContinueWithNewProspectIsEnabled();

        StepLogger.stepId(8);
        StepLogger.step('Click on Continue With New Prospect button.');
        await HomePageHelper.clickContinueWithNewProspectButton();
        StepLogger.verification('The New Prospect screen is displayed successfully.');
        await NewProspectPageHelper.verifyNewProspectPageIsDisplayed(false);

        StepLogger.stepId(9);
        StepLogger.step('Check the New Prospect header screen.');
        StepLogger.verification('Should display the items:');
        await NewProspectPageHelper.verifyHeaderSection();
    });

    // Jira References - COTRAC-93
    it('Verify if user shall be able to see the Address section - [22991217]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Mar 2019 14:36:03 GMT

        StepLogger.caseId = 22991217;
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
        StepLogger.step('Fill the First Name input field.');
        await HomePageHelper.enterFirstNameOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The First Name input field is filled successfully.');
        await HomePageHelper.verifyFirstNameIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(4);
        StepLogger.step('Fill the Last Name input field.');
        await HomePageHelper.enterLastNameOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The Last Name input field is filled successfully.');
        await HomePageHelper.verifyLastNameIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(5);
        StepLogger.step('Fill the Company input field.');
        await HomePageHelper.enterCompanyOnCheckExistingContactModal(uniqueName);
        StepLogger.verification('The Company input field is filled successfully.');
        await HomePageHelper.verifyCompanyIsEnteredOnCheckExistingContactModal(uniqueName);

        StepLogger.stepId(6);
        StepLogger.step('Select Retail option in the Return dropdown list.');
        await HomePageHelper.selectReturnOptionOnCheckExistingContactModal(HomePageConstant.retail);
        StepLogger.verification('The Retail option is displayed in the dropdown field.');
        await HomePageHelper.verifyReturnOptionIsSelectedOnCheckExistingContactModal(HomePageConstant.retail);

        StepLogger.stepId(7);
        StepLogger.step('Click on Search Contacts button.');
        await HomePageHelper.clickSearchContactsOnCheckExistingContactModal();
        StepLogger.verification('The Continue With New Prospect button is enabled.');
        await HomePageHelper.verifyContinueWithNewProspectIsEnabled();

        StepLogger.stepId(8);
        StepLogger.step('Click on Continue With New Prospect button.');
        await HomePageHelper.clickContinueWithNewProspectButton();
        StepLogger.verification('The New Prospect screen is displayed successfully.');
        await NewProspectPageHelper.verifyNewProspectPageIsDisplayed(false);

        StepLogger.stepId(9);
        StepLogger.step('Check the Address section fields.');
        StepLogger.verification('The list of fields is displayed successfully.');
        await NewProspectPageHelper.verifyAddressSection();
    });
});

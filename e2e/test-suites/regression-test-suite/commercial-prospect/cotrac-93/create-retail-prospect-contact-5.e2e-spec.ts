import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { HomePageConstant } from '../../../../page-objects/pages/home-page/home-page.constants';
import { HomePageHelper } from '../../../../page-objects/pages/home-page/home-page.helper';
import { HomePage } from '../../../../page-objects/pages/home-page/home-page.po';
import { LoginPageHelper } from '../../../../page-objects/pages/login-page/login-page.helper';
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
    it('Verify if user shall be able to see the Attachments tab - [22991242]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Mar 2019 14:37:21 GMT

        StepLogger.caseId = 22991242;
        const name = await PageHelper.getUniqueId();

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
        await HomePageHelper.enterFirstNameOnCheckExistingContactModal(name);
        StepLogger.verification('The First Name input field is filled successfully.');
        await HomePageHelper.verifyFirstNameIsEnteredOnCheckExistingContactModal(name);

        StepLogger.stepId(4);
        StepLogger.step('Fill the Last Name input field.');
        await HomePageHelper.enterLastNameOnCheckExistingContactModal(name);
        StepLogger.verification('The Last Name input field is filled successfully.');
        await HomePageHelper.verifyLastNameIsEnteredOnCheckExistingContactModal(name);

        StepLogger.stepId(5);
        StepLogger.step('Fill the Company input field.');
        await HomePageHelper.enterCompanyOnCheckExistingContactModal(name);
        StepLogger.verification('The Company input field is filled successfully.');
        await HomePageHelper.verifyCompanyIsEnteredOnCheckExistingContactModal(name);

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
        StepLogger.step('Fill the First Name, Last Name mandatory fields and click on Save button.');
        await NewProspectPageHelper.fillNewProspectInformation();
        StepLogger.verification('The new prospect retail is saved successfully.');
        await NewProspectPageHelper.verifyNewProspectRetailIsSavedSuccessfully();

        StepLogger.stepId(10);
        StepLogger.step('Click on Attachments tab screen.');
        await NewProspectPage.leftPane.attachments.clickButton();
        StepLogger.verification('The Attachments tab screen is displayed successfully.');
        await NewProspectPage.page.attachments.verifyDisplayedStatus();
    });

    // Jira References - COTRAC-93
    it('Verify if user shall be able to see the Notes tab - [22991239]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Mar 2019 14:37:21 GMT

        StepLogger.caseId = 22991239;
        const name = await PageHelper.getUniqueId();

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
        await HomePageHelper.enterFirstNameOnCheckExistingContactModal(name);
        StepLogger.verification('The First Name input field is filled successfully.');
        await HomePageHelper.verifyFirstNameIsEnteredOnCheckExistingContactModal(name);

        StepLogger.stepId(4);
        StepLogger.step('Fill the Last Name input field.');
        await HomePageHelper.enterLastNameOnCheckExistingContactModal(name);
        StepLogger.verification('The Last Name input field is filled successfully.');
        await HomePageHelper.verifyLastNameIsEnteredOnCheckExistingContactModal(name);

        StepLogger.stepId(5);
        StepLogger.step('Fill the Company input field.');
        await HomePageHelper.enterCompanyOnCheckExistingContactModal(name);
        StepLogger.verification('The Company input field is filled successfully.');
        await HomePageHelper.verifyCompanyIsEnteredOnCheckExistingContactModal(name);

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
        StepLogger.step('Fill the First Name, Last Name mandatory fields and click on Save button.');
        await NewProspectPageHelper.fillNewProspectInformation();
        StepLogger.verification('The new prospect retail is saved successfully.');
        await NewProspectPageHelper.verifyNewProspectRetailIsSavedSuccessfully();

        StepLogger.stepId(10);
        StepLogger.step('Click on Notes tab screen.');
        await NewProspectPage.leftPane.notes.clickButton();
        StepLogger.verification('The Notes tab screen is displayed successfully.');
        await NewProspectPage.page.notes.verifyDisplayedStatus();
    });

    // Jira References - COTRAC-93
    it('Verify if user shall be able to see the Portfolio tab in the Related Contacts screen - [22991235]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Mar 2019 14:37:22 GMT

        StepLogger.caseId = 22991235;
        const name = await PageHelper.getUniqueId();

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
        await HomePageHelper.enterFirstNameOnCheckExistingContactModal(name);
        StepLogger.verification('The First Name input field is filled successfully.');
        await HomePageHelper.verifyFirstNameIsEnteredOnCheckExistingContactModal(name);

        StepLogger.stepId(4);
        StepLogger.step('Fill the Last Name input field.');
        await HomePageHelper.enterLastNameOnCheckExistingContactModal(name);
        StepLogger.verification('The Last Name input field is filled successfully.');
        await HomePageHelper.verifyLastNameIsEnteredOnCheckExistingContactModal(name);

        StepLogger.stepId(5);
        StepLogger.step('Fill the Company input field.');
        await HomePageHelper.enterCompanyOnCheckExistingContactModal(name);
        StepLogger.verification('The Company input field is filled successfully.');
        await HomePageHelper.verifyCompanyIsEnteredOnCheckExistingContactModal(name);

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
        StepLogger.step('Fill the First Name, Last Name mandatory fields and click on Save button.');
        await NewProspectPageHelper.fillNewProspectInformation();
        StepLogger.verification('The new prospect retail is saved successfully.');
        await NewProspectPageHelper.verifyNewProspectRetailIsSavedSuccessfully();

        StepLogger.stepId(10);
        StepLogger.step('Click on Portfolio tab Related Contacts screen.');
        await NewProspectPageHelper.clickRelatedContactsTab(NewProspectPage.tabs.portfolio);
        StepLogger.verification('The Portfolio tab screen is displayed successfully.');
        await NewProspectPage.page.portfolio.verifyDisplayedStatus();
    });

    // Jira References - COTRAC-93
    it('Verify if user shall be able to see the Households tab - [22991236]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Mar 2019 14:37:22 GMT

        StepLogger.caseId = 22991236;
        const name = await PageHelper.getUniqueId();

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
        await HomePageHelper.enterFirstNameOnCheckExistingContactModal(name);
        StepLogger.verification('The First Name input field is filled successfully.');
        await HomePageHelper.verifyFirstNameIsEnteredOnCheckExistingContactModal(name);

        StepLogger.stepId(4);
        StepLogger.step('Fill the Last Name input field.');
        await HomePageHelper.enterLastNameOnCheckExistingContactModal(name);
        StepLogger.verification('The Last Name input field is filled successfully.');
        await HomePageHelper.verifyLastNameIsEnteredOnCheckExistingContactModal(name);

        StepLogger.stepId(5);
        StepLogger.step('Fill the Company input field.');
        await HomePageHelper.enterCompanyOnCheckExistingContactModal(name);
        StepLogger.verification('The Company input field is filled successfully.');
        await HomePageHelper.verifyCompanyIsEnteredOnCheckExistingContactModal(name);

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
        StepLogger.step('Fill the First Name, Last Name mandatory fields and click on Save button.');
        await NewProspectPageHelper.fillNewProspectInformation();
        StepLogger.verification('The new prospect retail is saved successfully.');
        await NewProspectPageHelper.verifyNewProspectRetailIsSavedSuccessfully();

        StepLogger.stepId(10);
        StepLogger.step('Click on Households tab screen.');
        await NewProspectPage.leftPane.households.clickButton();
        StepLogger.verification('The Households tab screen is displayed successfully.');
        await NewProspectPage.page.households.verifyDisplayedStatus();
    });

    // Jira References - COTRAC-93
    it('Verify if user shall be able to see the Tasks tab - [22991241]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Mar 2019 14:37:22 GMT

        StepLogger.caseId = 22991241;
        const name = await PageHelper.getUniqueId();

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
        await HomePageHelper.enterFirstNameOnCheckExistingContactModal(name);
        StepLogger.verification('The First Name input field is filled successfully.');
        await HomePageHelper.verifyFirstNameIsEnteredOnCheckExistingContactModal(name);

        StepLogger.stepId(4);
        StepLogger.step('Fill the Last Name input field.');
        await HomePageHelper.enterLastNameOnCheckExistingContactModal(name);
        StepLogger.verification('The Last Name input field is filled successfully.');
        await HomePageHelper.verifyLastNameIsEnteredOnCheckExistingContactModal(name);

        StepLogger.stepId(5);
        StepLogger.step('Fill the Company input field.');
        await HomePageHelper.enterCompanyOnCheckExistingContactModal(name);
        StepLogger.verification('The Company input field is filled successfully.');
        await HomePageHelper.verifyCompanyIsEnteredOnCheckExistingContactModal(name);

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
        StepLogger.step('Fill the First Name, Last Name mandatory fields and click on Save button.');
        await NewProspectPageHelper.fillNewProspectInformation();
        StepLogger.verification('The new prospect retail is saved successfully.');
        await NewProspectPageHelper.verifyNewProspectRetailIsSavedSuccessfully();

        StepLogger.stepId(10);
        StepLogger.step('Click on Tasks tab screen.');
        await NewProspectPage.leftPane.tasks.clickButton();
        StepLogger.verification('The Tasks tab screen is displayed successfully.');
        await NewProspectPage.page.tasks.verifyDisplayedStatus();
    });

    // Jira References - COTRAC-93
    it('Verify if user shall be able to see the Related Contacts tab - [22991233]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Mar 2019 14:37:01 GMT

        StepLogger.caseId = 22991233;
        const name = await PageHelper.getUniqueId();

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
        await HomePageHelper.enterFirstNameOnCheckExistingContactModal(name);
        StepLogger.verification('The First Name input field is filled successfully.');
        await HomePageHelper.verifyFirstNameIsEnteredOnCheckExistingContactModal(name);

        StepLogger.stepId(4);
        StepLogger.step('Fill the Last Name input field.');
        await HomePageHelper.enterLastNameOnCheckExistingContactModal(name);
        StepLogger.verification('The Last Name input field is filled successfully.');
        await HomePageHelper.verifyLastNameIsEnteredOnCheckExistingContactModal(name);

        StepLogger.stepId(5);
        StepLogger.step('Fill the Company input field.');
        await HomePageHelper.enterCompanyOnCheckExistingContactModal(name);
        StepLogger.verification('The Company input field is filled successfully.');
        await HomePageHelper.verifyCompanyIsEnteredOnCheckExistingContactModal(name);

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
        StepLogger.step('Fill the First Name, Last Name mandatory fields and click on Save button.');
        await NewProspectPageHelper.fillNewProspectInformation();
        StepLogger.verification('The new prospect retail is saved successfully.');
        await NewProspectPageHelper.verifyNewProspectRetailIsSavedSuccessfully();

        StepLogger.stepId(10);
        StepLogger.step('Click on Related Contacts tab screen.');
        await NewProspectPage.leftPane.relatedContacts.clickButton();
        StepLogger.verification('The Related Contacts tab screen is displayed successfully.');
        await NewProspectPage.page.relatedContactsPage.verifyDisplayedStatus();
    });
});

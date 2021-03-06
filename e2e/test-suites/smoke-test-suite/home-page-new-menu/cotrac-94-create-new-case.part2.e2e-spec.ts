import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { HomePageHelper } from '../../../page-objects/pages/home-page/home-page.helper';
import { LoginPageHelper } from '../../../page-objects/pages/login-page/login-page.helper';
import { NewCasePageConstant } from '../../../page-objects/pages/new-case-page/new-case-page.constants';
import { NewCasePageHelper } from '../../../page-objects/pages/new-case-page/new-case-page.helper';
import { SuiteNames } from '../../helpers/suite-names';

describe(SuiteNames.smokeSuite, () => {
    let loginPageHelper: LoginPageHelper;

    beforeAll(async () => {
        loginPageHelper = LoginPageHelper.getInstance();
        await PageHelper.maximiseBrowser();
    });

    beforeEach(async () => {
        await PageHelper.restartBrowser();
        await loginPageHelper.goTo();
        await LoginPageHelper.loginAsAdmin();
    });

    // Jira References - COTRAC-2918
    it('To verify the options in Priority field. - [22397657]', async () => {
        // Auto generated by aurea-automation - util on Thu, 21 Mar 2019 08:29:50 GMT
        StepLogger.caseId = 22397657;

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click "case".');
        await HomePageHelper.clickCaseUnderNew();
        StepLogger.verification('New case page should be displayed.');
        await NewCasePageHelper.verifyNewCasePageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Verify the "Priority" field.');
        StepLogger.verification('It should have 3 options:');
        await NewCasePageHelper.verifyNormalEscalatedAndEmergencyDisplayed();
    });

    // Jira References - COTRAC-2922
    it('To verify the options in Status field. - [22397658]', async () => {
        // Auto generated by aurea-automation - util on Thu, 21 Mar 2019 09:01:27 GMT
        StepLogger.caseId = 22397658;

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click "case".');
        await HomePageHelper.clickCaseUnderNew();
        StepLogger.verification('New case page should be displayed.');
        await NewCasePageHelper.verifyNewCasePageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Verify the "Status" field.');
        StepLogger.verification('It should have following options:');
        await NewCasePageHelper.verifyStatusDropdown();
    });

    // Jira References - COTRAC-2917
    it('To verify that user is able to save a new case by entering data in all the fields - [22397630]', async () => {
        // Auto generated by aurea-automation - util on Thu, 21 Mar 2019 09:13:27 GMT
        StepLogger.caseId = 22397630;
        const { dropdownOptions } = NewCasePageConstant;
        const subject = `${NewCasePageConstant.elementNames.test}${PageHelper.getUniqueId()}`;
        const category = dropdownOptions.onlineBanking;
        const subCategory = dropdownOptions.atmDebit;

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click "case".');
        await HomePageHelper.clickCaseUnderNew();
        StepLogger.verification('New case page should be displayed.');
        await NewCasePageHelper.verifyNewCasePageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Search a contact and add.');
        const contact = await NewCasePageHelper.selectContact();
        StepLogger.verification('Contact should be added.');
        await NewCasePageHelper.verifyContactIsSelected(contact);

        StepLogger.stepId(4);
        StepLogger.step('Select an account from the drop down.');
        const account = await NewCasePageHelper.selectAccountOption();
        StepLogger.verification('Account should be selected.');
        await NewCasePageHelper.verifySelectedAccount(account);

        StepLogger.stepId(5);
        StepLogger.step('Select a branch.');
        const branch = await NewCasePageHelper.selectBranchOption();
        StepLogger.verification('Branch should be selected.');
        await NewCasePageHelper.verifySelectedBranch(branch);

        StepLogger.stepId(6);
        StepLogger.step('Select a language.');
        const language = await NewCasePageHelper.selectBranchOption();
        StepLogger.verification('Language should be selected.');
        await NewCasePageHelper.verifySelectedBranch(language);

        StepLogger.stepId(7);
        StepLogger.step('Select a product.');
        const product = await NewCasePageHelper.selectProductTypeOption();
        StepLogger.verification('Product should be selected.');
        await NewCasePageHelper.verifySelectedProductType(product);

        StepLogger.stepId(8);
        StepLogger.step('Enter subject.');
        await NewCasePageHelper.enterSubject(subject);
        StepLogger.verification('Subject should be entered.');
        await NewCasePageHelper.verifySubjectIsEntered(subject);

        StepLogger.stepId(9);
        StepLogger.step('Enter description.');
        await NewCasePageHelper.enterDescription(subject);
        StepLogger.verification('Description should be entered.');
        await NewCasePageHelper.verifyDescriptionIsEntered(subject);

        StepLogger.stepId(10);
        StepLogger.step('Select a category and sub category.');
        await NewCasePageHelper.selectCategoryAndSubcategory(category, subCategory);
        StepLogger.verification('Category should be selected.');
        await NewCasePageHelper.verifyCategoryAndSubcategory(category, subCategory);

        StepLogger.stepId(11);
        StepLogger.step('Select value in "contact by " field.');
        const email = dropdownOptions.email;
        await NewCasePageHelper.selectContactByOption(email);
        StepLogger.verification('It should be selected.');
        await NewCasePageHelper.verifySelectedContactBy(email);

        StepLogger.stepId(12);
        StepLogger.step('Select a value in priority field.');
        await NewCasePageHelper.selectNormalPriority();
        StepLogger.verification('It should be selected.');
        await NewCasePageHelper.verifySelectedPriority(NewCasePageConstant.elementNames.normal);

        StepLogger.stepId(13);
        StepLogger.step('Select a value in status field.');
        const status = dropdownOptions.resolved;
        await NewCasePageHelper.selectStatusOption(status);
        StepLogger.verification('Status should be selected.');
        await NewCasePageHelper.verifySelectedStatus(status);

        StepLogger.stepId(14);
        StepLogger.step('Click "save"');
        await NewCasePageHelper.clickSave();
        StepLogger.verification('Case should be saved.');
        await NewCasePageHelper.verifyCaseIsCreated(subject);
    });

    // Jira References - COTRAC-2921
    it('To verify the functionality of close button. - [22397633]', async () => {
        // Auto generated by aurea-automation - util on Thu, 21 Mar 2019 10:20:55 GMT
        StepLogger.caseId = 22397633;

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click "case".');
        await HomePageHelper.clickCaseUnderNew();
        StepLogger.verification('New case page should be displayed.');
        await NewCasePageHelper.verifyNewCasePageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Click "Close" button.');
        await NewCasePageHelper.clickCloseButton();
        StepLogger.verification('Warning pop up should be displayed.');
        await NewCasePageHelper.verifyWarningDialog();

        StepLogger.stepId(4);
        StepLogger.step('Click "OK".');
        await NewCasePageHelper.clickOkWarningDialog();
        StepLogger.verification('The new case page should be closed.');
        await NewCasePageHelper.verifyNewCasePageClosed();
    });

    // Jira References - COTRAC-2920
    it('To verify the tabs that are displayed when a case is saved. - [22397637]', async () => {
        // Auto generated by aurea-automation - util on Thu, 21 Mar 2019 10:56:13 GMT
        StepLogger.caseId = 22397637;
        const subject = `${NewCasePageConstant.elementNames.test}${PageHelper.getUniqueId()}`;

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click "case".');
        await HomePageHelper.clickCaseUnderNew();
        StepLogger.verification('New case page should be displayed.');
        await NewCasePageHelper.verifyNewCasePageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Enter data in all the mandatory fields and Click "save".');
        await NewCasePageHelper.createCase(subject);
        StepLogger.verification('The case should be saved.');
        await NewCasePageHelper.verifyCaseIsCreated(subject);

        StepLogger.stepId(4);
        StepLogger.step('Verify the tabs available in the left panel after the case is saved.');
        StepLogger.verification(`Following tabs should be available:
            1. Log
            2. Notes
            3. Events
            4. Tasks
            5. Attachments`);
        await NewCasePageHelper.verifyLeftPanel();
    });

    // Jira References - COTRAC-3006
    it('To verify that case number is displayed when a case is saved - [22397653]', async () => {
        // Auto generated by aurea-automation - util on Thu, 21 Mar 2019 11:30:54 GMT
        StepLogger.caseId = 22397653;
        const subject = `${NewCasePageConstant.elementNames.test}${PageHelper.getUniqueId()}${PageHelper.getUniqueId()}`;

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click "case".');
        await HomePageHelper.clickCaseUnderNew();
        StepLogger.verification('New case page should be displayed.');
        await NewCasePageHelper.verifyNewCasePageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Enter data in all the mandatory fields and Click "save".');
        await NewCasePageHelper.createCase(subject);
        StepLogger.verification('The case should be saved.');
        await NewCasePageHelper.verifyCaseIsCreated(subject);

        StepLogger.stepId(4);
        StepLogger.step('Verify the heading of the saved case.');
        StepLogger.verification('Heading should be a case number:#some number followed by subject of the case.');
        await NewCasePageHelper.verifyHeadingNumberAndSubject(subject);
    });

    // Jira References - COTRAC-3038
    it('To verify the functionality of save and add button. - [22397632]', async () => {
        // Auto generated by aurea-automation - util on Thu, 21 Mar 2019 12:30:53 GMT
        StepLogger.caseId = 22397632;
        const subject = `${PageHelper.getUniqueId()}${NewCasePageConstant.elementNames.test}`;

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click "case".');
        await HomePageHelper.clickCaseUnderNew();
        StepLogger.verification('New case page should be displayed.');
        await NewCasePageHelper.verifyNewCasePageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Search a contact and add.');
        const contact = await NewCasePageHelper.selectContact();
        StepLogger.verification('Contact should be added.');
        await NewCasePageHelper.verifyContactIsSelected(contact);

        StepLogger.stepId(4);
        StepLogger.step('Enter some test subject.');
        await NewCasePageHelper.enterSubject(subject);
        StepLogger.verification('Subject should be entered.');
        await NewCasePageHelper.verifySubjectIsEntered(subject);

        StepLogger.stepId(5);
        StepLogger.step('Enter some test description.');
        await NewCasePageHelper.enterDescription(subject);
        StepLogger.verification('Test description should be added.');
        await NewCasePageHelper.verifyDescriptionIsEntered(subject);

        StepLogger.stepId(6);
        StepLogger.step('Select a category.');
        const option = NewCasePageConstant.dropdownOptions.onlineBanking;
        await NewCasePageHelper.selectCategoryOption(option);
        StepLogger.verification('Category should be selected.');
        await NewCasePageHelper.verifyCategorySelectedOption(option);

        StepLogger.stepId(7);
        StepLogger.step('Enter Sub-category.');
        const subOption = NewCasePageConstant.dropdownOptions.atmDebit;
        await NewCasePageHelper.selectSubCategoryOption(subOption);
        StepLogger.verification('Sub-Category should be added.');
        await NewCasePageHelper.verifySubCategorySelectedOption(subOption);

        StepLogger.stepId(8);
        StepLogger.step('Click "save and add" button.');
        await NewCasePageHelper.clickSaveAndAdd();
        StepLogger.verification('The case should be saved and a new case page should be displayed.');
        await NewCasePageHelper.verifyCaseIsCreatedAndNewCase(subject);
    });

    // Jira References - COTRAC-3039
    it('To verify that the user should be able to select a contact by clicking "Create new Prospect" - [22397612]', async () => {
        // Auto generated by aurea-automation - util on Fri, 22 Mar 2019 08:25:31 GMT
        StepLogger.caseId = 22397612;

        StepLogger.stepId(1);
        StepLogger.step('Click "New" link displayed in the left panel.');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('Option available under new section should be displayed.');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click "case".');
        await HomePageHelper.clickCaseUnderNew();
        StepLogger.verification('New case page should be displayed.');
        await NewCasePageHelper.verifyNewCasePageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Click search icon besides contact field.');
        await NewCasePageHelper.clickSearchContact();
        StepLogger.verification('Contact locator dialog box should be displayed.');
        await NewCasePageHelper.verifyContactDialog();

        StepLogger.stepId(4);
        StepLogger.step('Enter some data in first name field and Click "Search contacts".');
        const contact = await NewCasePageHelper.enterContactNameAndSearch();
        StepLogger.verification('List of contacts matching the first name are displayed.');
        await NewCasePageHelper.verifySearchedContact(contact);

        StepLogger.stepId(5);
        StepLogger.step('Click "Create new Prospect"');
        await NewCasePageHelper.clickCreateNewProspect();
        StepLogger.verification('New Prospect form should be displayed.');
        await NewCasePageHelper.verifyNewProspectDialog();

        StepLogger.stepId(6);
        StepLogger.step('Enter data in Mandatory field and Click "Save"');
        const prospect = await NewCasePageHelper.fillNewProspectInformation();
        StepLogger.verification('New Prospect should be displayed in contact field.');
        await NewCasePageHelper.verifyProspectIsSelected(prospect);
    });
});

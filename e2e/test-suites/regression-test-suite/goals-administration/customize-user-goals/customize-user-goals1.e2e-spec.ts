import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { GoalsHelper } from '../../../../page-objects/pages/administration/goals/goals.helper';
import { HomePageHelper } from '../../../../page-objects/pages/home-page/home-page.helper';
import { HomePage1Helper } from '../../../../page-objects/pages/home-page/home-page1.helper';
import { LoginPageHelper } from '../../../../page-objects/pages/login-page/login-page.helper';
import { SuiteNames } from '../../../helpers/suite-names';

describe(SuiteNames.regressionSuite, () => {
    let loginPageHelper: LoginPageHelper;

    beforeAll(async () => {
        loginPageHelper = LoginPageHelper.getInstance();
        await PageHelper.maximiseBrowser();
    });

    beforeEach(async () => {
        await loginPageHelper.goTo();
        await LoginPageHelper.loginAsAdmin();
    });

    it('To verify that user is able to access Manage Goals page. - [22968008]', async () => {
        // Auto generated by aurea-automation - util on Thu, 11 Apr 2019 11:43:36 GMT

        StepLogger.caseId = 22968008;
        StepLogger.stepId(1);
        StepLogger.step('Click "Administration" link displayed in the left panel.');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Option available under administration section should be displayed.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Verify "Goals" option is displayed under "Administration"');
        StepLogger.verification('"Goals" option should be displayed');
        await HomePage1Helper.verifyGoalsOptionUnderAdministration();

        StepLogger.stepId(3);
        StepLogger.step('Click "Goals".');
        await HomePage1Helper.clickOnGoalsOptionUnderAdministration();
        StepLogger.verification('"Manage Goals" should be displayed.');
        await GoalsHelper.verifyManageGoalsPage();
    });

    it('To verify that the user is able to access Customize User Goals dialogue. - [22968009]', async () => {
        // Auto generated by aurea-automation - util on Wed, 17 Apr 2019 08:41:54 GMT

        StepLogger.caseId = 22968009;

        StepLogger.stepId(1);
        StepLogger.step('Go to "Administration -> Goals"');
        await HomePageHelper.clickAdministrationLink();
        await HomePage1Helper.clickOnGoalsOptionUnderAdministration();
        StepLogger.verification('Manage goals page should be displayed.');
        await GoalsHelper.verifyManageGoalsPage();

        StepLogger.stepId(2);
        StepLogger.step('Verify that "Customize user" button is displayed on top left corner.');
        StepLogger.verification('It should be displayed.');
        await GoalsHelper.verifyCustomizeUserButton();

        StepLogger.stepId(3);
        StepLogger.step('Click "Customize User" button');
        await GoalsHelper.clickOnCustomizeUserButton();
        StepLogger.verification('"Customize User Goals" pop-up is displayed.');
        await GoalsHelper.verifyCustomizeUserGoalsPopUp();
    });

    it('To Verify the fields displayed on Customize User Goals dialogue. - [22968014]', async () => {
        // Auto generated by aurea-automation - util on Wed, 17 Apr 2019 09:15:12 GMT

        StepLogger.caseId = 22968014;

        StepLogger.stepId(1);
        StepLogger.step('Go to "Administration -> Goals"');
        await HomePageHelper.clickAdministrationLink();
        await HomePage1Helper.clickOnGoalsOptionUnderAdministration();
        StepLogger.verification('Manage goals page should be displayed.');
        await GoalsHelper.verifyManageGoalsPage();

        StepLogger.stepId(2);
        StepLogger.step('Click "Customize User" button');
        await GoalsHelper.clickOnCustomizeUserButton();
        StepLogger.verification('"Customize User Goals" pop-up is displayed.');
        await GoalsHelper.verifyCustomizeUserGoalsPopUp();

        StepLogger.stepId(3);
        StepLogger.step('Verify the drop-down fields');
        StepLogger.verification(`Below are drop-down fields:
        1. Select the User to customize
        2. Start with records from this role
        3. Start with records from this user`);
        await GoalsHelper.verifyDropDownsInCustomizePopup();

        StepLogger.stepId(4);
        StepLogger.step('Verify the buttons on pop-up window');
        StepLogger.verification('"Save" and "Cancel" buttons are present');
        await GoalsHelper.verifyButtonsInCustomizePopup();

        StepLogger.stepId(5);
        StepLogger.step('Verify the options with radio buttons');
        StepLogger.verification(`Below options are present with radio buttons:
        1. START WITH A CLEAN SLATE (DO NOT BRING EXISTING ROLE DEFINED RECORDS OVER FOR THIS USER)
        2. START WITH RECORDS FROM THIS ROLE
        3. START WITH RECORDS FROM THIS USER
        4. PRESERVE
        5. DELETE`);
        await GoalsHelper.verifyRadioButtonsInCustomizePopup();
    });

    it('To verify the buttons and columns present on Manage Goals page. - [22968016]', async () => {
        // Auto generated by aurea-automation - util on Wed, 17 Apr 2019 10:37:16 GMT

        StepLogger.caseId = 22968016;
        StepLogger.stepId(1);
        StepLogger.step('Go to "Administration -> Goals"');
        await HomePageHelper.clickAdministrationLink();
        await HomePage1Helper.clickOnGoalsOptionUnderAdministration();
        StepLogger.verification('Manage goals page should be displayed.');
        await GoalsHelper.verifyManageGoalsPage();

        StepLogger.stepId(2);
        StepLogger.step('Verify the items in grid');
        StepLogger.verification(`Below items are present:
        1. Type
        2. Description
        3. Goal Type
        4. Period
        5. Target
        6. Active
        7. Replicate`);
        await GoalsHelper.verifyGoalsPageItemsGrid();

        StepLogger.stepId(3);
        StepLogger.step('Verify the buttons displayed');
        StepLogger.verification(`Below buttons are displayed:
        1. Add Goal
        2. Customize User
        3. Refresh
        4. Export to Excel
        5. Export to Word`);
        await GoalsHelper.verifyButtons();
    });

    it('To verify list of users is displayed in drop-down "Select the User to Customize" - [22968017]', async () => {
        // Auto generated by aurea-automation - util on Wed, 17 Apr 2019 12:14:29 GMT

        StepLogger.caseId = 22968017;
        StepLogger.stepId(1);
        StepLogger.step('Go to "Administration -> Goals"');
        await HomePageHelper.clickAdministrationLink();
        await HomePage1Helper.clickOnGoalsOptionUnderAdministration();
        StepLogger.verification('Manage goals page should be displayed.');
        await GoalsHelper.verifyManageGoalsPage();

        StepLogger.stepId(2);
        StepLogger.step('Click "Customize User" button');
        await GoalsHelper.clickOnCustomizeUserButton();
        StepLogger.verification('"Customize User Goals" pop-up is displayed.');
        await GoalsHelper.verifyCustomizeUserGoalsPopUp();

        StepLogger.stepId(3);
        StepLogger.step('Verify if "Select the User to Customize" drop-down is present on "Customize User Goal" pop-up window');
        StepLogger.verification('"Select the User to Customize" drop-down should be present.');
        await GoalsHelper.verifySelectTheUserToCustomizeDropDown();

        StepLogger.stepId(4);
        StepLogger.step('Click on "Select the User to Customize" drop-down');
        await GoalsHelper.clickOnUserToCustomizeDropDown();
        StepLogger.verification('List of Users should be displayed in drop-down');
        await GoalsHelper.verifySelectTheUserToCustomizeDropDown();
    });
});
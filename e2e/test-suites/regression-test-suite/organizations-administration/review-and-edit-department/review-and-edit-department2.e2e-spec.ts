import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { DepartmentsConstants } from '../../../../page-objects/pages/administration/organization/departments/departments.constants';
import { DepartmentsHelper } from '../../../../page-objects/pages/administration/organization/departments/departments.helper';
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

    it('To verify Cancel button functionality on Department Edit window - [22443994]', async () => {
        // Auto generated by aurea-automation - util on Wed, 03 Apr 2019 16:56:04 GMT

        StepLogger.caseId = 22443994;
        const value = await PageHelper.getUniqueId();
        const inactive = DepartmentsConstants.inactiveStatus;

        StepLogger.preCondition('Execute C22443967 to open Department edit window');
        await DepartmentsHelper.navigateToEditDepartmentScreen();

        StepLogger.stepId(1);
        StepLogger.step('Edit the Code field');
        await DepartmentsHelper.enterCode(value);
        StepLogger.verification('User is able to Edit code field');
        await DepartmentsHelper.verifyEnteredCode(value);

        StepLogger.stepId(2);
        StepLogger.step('Change Status to Inactive');
        await DepartmentsHelper.selectAStatusFromDropDown(inactive);
        StepLogger.verification('User is able to change status to inactive');
        await DepartmentsHelper.verifyStatusSelected(inactive);

        StepLogger.stepId(3);
        StepLogger.step('Click Cancel button');
        await DepartmentsHelper.clickOnCancel();
        StepLogger.verification('Edit department window is closed and changes are not saved');
        await DepartmentsHelper.verifyNewDepartmentScreenClosed();
    });

    it('To verify user able to change status of an active department to inactive - [22443990]', async () => {
        // Auto generated by aurea-automation - util on Wed, 03 Apr 2019 17:06:29 GMT

        StepLogger.caseId = 22443990;
        const inactive = DepartmentsConstants.inactiveStatus;
        const active = DepartmentsConstants.activeStatus;

        StepLogger.preCondition('Execute C22443967 to open Department edit window');
        await DepartmentsHelper.navigateToEditDepartmentScreen();

        StepLogger.stepId(1);
        StepLogger.step('Click on drop-down of Status field');
        await DepartmentsHelper.clickOnStatusDropDown();
        StepLogger.verification('Active and Inactive values are displayed in the drop-down');
        await DepartmentsHelper.verifyStatusSelected(active);
        await DepartmentsHelper.verifyStatusSelected(inactive);

        StepLogger.stepId(2);
        StepLogger.step('Select Inactive value');
        await DepartmentsHelper.selectAStatusFromDropDown(active);
        StepLogger.verification('User is able to select Inactive value for drop-down Status');
        await DepartmentsHelper.verifyStatusSelected(active);

        StepLogger.stepId(3);
        StepLogger.step('Click Save button at bottom of Branch edit window');
        await DepartmentsHelper.clickOnSave();
        StepLogger.verification('Window is closed and changes are saved');
        await DepartmentsHelper.verifyNewDepartmentScreenClosed();
    });

    it('To verify user able to close Department edit window by clicking on close icon on top right corner of window - [22443982]', async () => {
        // Auto generated by aurea-automation - util on Thu, 04 Apr 2019 01:13:33 GMT

        StepLogger.caseId = 22443982;
        StepLogger.stepId(1);
        StepLogger.step('Click "Administration" link displayed in the left panel.');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Option available under administration section should be displayed.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click "Organization" displayed under administration.');
        await HomePageHelper.clickOrganizationUnderAdministration();
        StepLogger.verification('Item available under Organization should be displayed.');
        await HomePageHelper.optionsUnderOrganization();

        StepLogger.stepId(3);
        StepLogger.step('Click "Departments"');
        await HomePageHelper.clickDepartmentsUnderOrganization();
        StepLogger.verification('Manage Departments page should be displayed.');
        await DepartmentsHelper.verifyManageDepartmentsPageDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on department icon next to department entry');
        await DepartmentsHelper.clickOnEditDepartment();
        StepLogger.verification('Edit window is displayed for the department');
        await DepartmentsHelper.verifyEditDepartmentScreen();

        StepLogger.stepId(5);
        StepLogger.step('Click Close icon at top right corner');
        await DepartmentsHelper.clickOnCloseIcon();
        StepLogger.verification('Edit window is closed');
        await DepartmentsHelper.verifyNewDepartmentScreenClosed();
    });

    it('To verify Department Edit window is displayed when double clicked on department entry - [22443967]', async () => {
        // Auto generated by aurea-automation - util on Thu, 04 Apr 2019 05:24:54 GMT

        StepLogger.caseId = 22443967;
        StepLogger.stepId(1);
        StepLogger.step('Click "Administration" link displayed in the left panel.');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Option available under administration section should be displayed.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click "Organization" displayed under administration');
        await HomePageHelper.clickOrganizationUnderAdministration();
        StepLogger.verification('Item available under Organization should be displayed');
        await HomePageHelper.optionsUnderOrganization();

        StepLogger.stepId(3);
        StepLogger.step('Click "Departments"');
        await HomePageHelper.clickDepartmentsUnderOrganization();
        StepLogger.verification('Manage Departments page should be displayed.');
        await DepartmentsHelper.verifyManageDepartmentsPageDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Double click on department entry');
        await DepartmentsHelper.doubleClickOnDepartmentEntry();
        StepLogger.verification('Edit window is displayed for the department');
        await DepartmentsHelper.verifyEditDepartmentScreen();
    });

    it('To verify Manage Departments page - [22443929]', async () => {
        // Auto generated by aurea-automation - util on Thu, 04 Apr 2019 06:12:33 GMT

        StepLogger.caseId = 22443929;

        StepLogger.preCondition('Execute C22441993 to reach to add department page.');
        await HomePage1Helper.navigateToDepartmentsPage();

        StepLogger.stepId(1);
        StepLogger.step('Verify the buttons displayed on Manage Departments page');
        StepLogger.verification(`Below buttons are displayed
        - Add Department
        - Refresh
        - Export to Excel
        - Export to Word`);
        await DepartmentsHelper.verifyButtons();

        StepLogger.stepId(2);
        StepLogger.step('Click in Search icon at top of page');
        await DepartmentsHelper.clickOnSearchButton();
        StepLogger.verification('Search box is displayed');
        await DepartmentsHelper.verifySearchBox();

        StepLogger.stepId(3);
        StepLogger.step('Verify the columns displayed');
        StepLogger.verification(`Below columns are displayed
        - Department
        - Code
        - Description
        - Active`);
        await DepartmentsHelper.verifyDepartmentsPageItemsGrid();
    });
});
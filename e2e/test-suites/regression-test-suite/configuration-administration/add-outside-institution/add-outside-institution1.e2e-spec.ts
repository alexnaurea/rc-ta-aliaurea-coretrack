import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { OutsideInstitutionConstants } from '../../../../page-objects/pages/administration/configuration/outside-institutions/outside-institutions.constant';
import { OutsideInstitutionHelper } from '../../../../page-objects/pages/administration/configuration/outside-institutions/outside-institutions.helper';
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

    it('To verify that the user is able to navigate to Manage Outside Institutions page - [22884605]', async () => {
        // Auto generated by aurea-automation - util on Wed, 10 Apr 2019 08:05:07 GMT

        StepLogger.caseId = 22884605;

        StepLogger.stepId(1);
        StepLogger.step('Click "Administration" link displayed in the left panel.');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Option available under administration section should be displayed.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click "Configuration" displayed under administration');
        await HomePageHelper.clickConfigurationUnderAdministration();
        StepLogger.verification('Items available under Configuration should be displayed.');
        await HomePageHelper.verifyOptionsUnderConfiguration();

        StepLogger.stepId(3);
        StepLogger.step('Click "Outside Institutions"');
        await HomePage1Helper.clickOutsideInstitutionsUnderConfiguration();
        StepLogger.verification('Manage Outside Institutions should be displayed');
        await OutsideInstitutionHelper.verifyManageOutsideInstitutionPage();
    });

    it('To verify the list of Items in Grid on Manage Outside Institutions Page - [22884606]', async () => {
        // Auto generated by aurea-automation - util on Wed, 10 Apr 2019 08:33:23 GMT

        StepLogger.caseId = 22884606;
        StepLogger.stepId(1);
        StepLogger.step('Go to "Administration - > Configuration " displayed under administration');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickConfigurationUnderAdministration();
        StepLogger.verification('Items available under Configuration should be displayed');
        await HomePageHelper.verifyOptionsUnderConfiguration();

        StepLogger.stepId(2);
        StepLogger.step('Click Outside Institutions');
        await HomePage1Helper.clickOutsideInstitutionsUnderConfiguration();
        StepLogger.verification('Manage Outside Institutions page is displayed');
        await OutsideInstitutionHelper.verifyManageOutsideInstitutionPage();

        StepLogger.stepId(3);
        StepLogger.step('Verify the Items displayed in the grid.');
        StepLogger.verification(`Below items are displayed :
        - Institution Name
        - Delete`);
        await OutsideInstitutionHelper.verifyItemsInGrid();
    });

    it('To verify the buttons available on "Manage Outside Institutions" page - [22884607]', async () => {
        // Auto generated by aurea-automation - util on Wed, 10 Apr 2019 10:26:59 GMT

        StepLogger.caseId = 22884607;
        StepLogger.stepId(1);
        StepLogger.step('Go to "Administration - > Configuration " displayed under administration');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickConfigurationUnderAdministration();
        StepLogger.verification('Items available under Configuration should be displayed');
        await HomePageHelper.verifyOptionsUnderConfiguration();

        StepLogger.stepId(2);
        StepLogger.step('Click Outside Institutions');
        await HomePage1Helper.clickOutsideInstitutionsUnderConfiguration();
        StepLogger.verification('Manage Outside Institutions page is displayed');
        await OutsideInstitutionHelper.verifyManageOutsideInstitutionPage();

        StepLogger.stepId(3);
        StepLogger.step('Verify the buttons displayed');
        StepLogger.verification(`Below buttons are displayed:
        - Add Outside Institution
        - Refresh
        - Export to Excel
        - Export to Word`);
        await OutsideInstitutionHelper.verifyButtons();
    });

    it('To verify user is able to navigate to "New Outside Institution" window - [22884609]', async () => {
        // Auto generated by aurea-automation - util on Wed, 10 Apr 2019 11:30:53 GMT

        StepLogger.caseId = 22884609;
        StepLogger.stepId(1);
        StepLogger.step('Go to "Administration - > Configuration " displayed under administration');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickConfigurationUnderAdministration();
        StepLogger.verification('Items available under Configuration should be displayed');
        await HomePageHelper.verifyOptionsUnderConfiguration();

        StepLogger.stepId(2);
        StepLogger.step('Click Outside Institutions');
        await HomePage1Helper.clickOutsideInstitutionsUnderConfiguration();
        StepLogger.verification('Manage Outside Institutions page is displayed');
        await OutsideInstitutionHelper.verifyManageOutsideInstitutionPage();

        StepLogger.stepId(3);
        StepLogger.step('Click Add Outside Institution button');
        await OutsideInstitutionHelper.clickOnAddOutsideInstitutionButton();
        StepLogger.verification('New Outside Institution window is displayed');
        await OutsideInstitutionHelper.verifyNewOutsideInstitutionWindow();
    });

    it('To verify that the validation error message is displayed when Name is left blank - [22884610]', async () => {
        // Auto generated by aurea-automation - util on Wed, 10 Apr 2019 11:56:14 GMT

        StepLogger.caseId = 22884610;
        const error = OutsideInstitutionConstants.error.name;

        StepLogger.stepId(1);
        StepLogger.step('Go to "Administration - > Configuration " displayed under administration');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickConfigurationUnderAdministration();
        StepLogger.verification('Items available under Configuration should be displayed');
        await HomePageHelper.verifyOptionsUnderConfiguration();

        StepLogger.stepId(2);
        StepLogger.step('Click Outside Institutions');
        await HomePage1Helper.clickOutsideInstitutionsUnderConfiguration();
        StepLogger.verification('Manage Outside Institutions page is displayed');
        await OutsideInstitutionHelper.verifyManageOutsideInstitutionPage();

        StepLogger.stepId(3);
        StepLogger.step('Click Add Outside Institution button');
        await OutsideInstitutionHelper.clickOnAddOutsideInstitutionButton();
        StepLogger.verification('New Outside Institution window is displayed');
        await OutsideInstitutionHelper.verifyNewOutsideInstitutionWindow();

        StepLogger.stepId(4);
        StepLogger.step('Click Save button leaving Name field blank');
        await OutsideInstitutionHelper.clickOnSaveButton();
        StepLogger.verification('Error message is displayed');
        await OutsideInstitutionHelper.verifyValidationErrorMessage(error);
    });
});

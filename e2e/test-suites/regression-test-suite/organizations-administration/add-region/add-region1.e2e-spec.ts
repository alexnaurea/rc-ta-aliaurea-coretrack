import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { RegionsConstants } from '../../../../page-objects/pages/administration/organization/regions/regions.constants';
import { RegionsHelper } from '../../../../page-objects/pages/administration/organization/regions/regions.helper';
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

    it('To verify that the user is able to navigate to Manage Regions page. - [22436854]', async () => {
        // Auto generated by aurea-automation - util on Tue, 26 Mar 2019 05:33:15 GMT

        StepLogger.caseId = 22436854;
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
        StepLogger.step('Click "Regions"');
        await HomePage1Helper.clickRegionsUnderOrganization();
        StepLogger.verification('Manage Regions should be displayed.');
        await RegionsHelper.verifyManageRegionsPageDisplayed();
    });

    it('To verify the list of Items in Grid on Manage Regions Page - [22436855]', async () => {
        // Auto generated by aurea-automation - util on Tue, 26 Mar 2019 06:17:55 GMT

        StepLogger.caseId = 22436855;
        StepLogger.stepId(1);
        StepLogger.step('Go to  "Administration - >Organization" displayed under administration.');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickOrganizationUnderAdministration();
        StepLogger.verification('Item available under Organization should be displayed.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click "Regions"');
        await HomePage1Helper.clickRegionsUnderOrganization();
        StepLogger.verification('Manage Regions should be displayed.');
        await RegionsHelper.verifyManageRegionsPageDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Verify the Items displayed in the grid.');
        StepLogger.verification(`Following items should be displayed in the grid:
        1. Region
        2. Region Code
        3. Markets
        4. Active`);
        await RegionsHelper.verifyRegionsPageItemsGrid();
    });

    it('To verify the button available on "Manage Regions page". - [22436856]', async () => {
        // Auto generated by aurea-automation - util on Tue, 26 Mar 2019 07:16:01 GMT

        StepLogger.caseId = 22436856;
        StepLogger.stepId(1);
        StepLogger.step('Go to  "Administration - >Organization" displayed under administration.');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickOrganizationUnderAdministration();
        StepLogger.verification('Item available under Organization should be displayed.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click "Regions"');
        await HomePage1Helper.clickRegionsUnderOrganization();
        StepLogger.verification('Manage Regions should be displayed.');
        await RegionsHelper.verifyManageRegionsPageDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('To verify the button available on "Manage Regions page".');
        StepLogger.verification(`Following options should be displayed.
        1. Add Region
        2. Refresh
        3. Grouping Drop down list
        4. Export to Excel
        5. Export to Word`);
        await RegionsHelper.verifyButtons();
    });

    it('To verify that user is able to navigate to "New Branch" page. - [22436904]', async () => {
        // Auto generated by aurea-automation - util on Tue, 26 Mar 2019 08:10:22 GMT

        StepLogger.caseId = 22436904;
        StepLogger.stepId(1);
        StepLogger.step('Go to  "Administration - >Organization" displayed under administration.');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickOrganizationUnderAdministration();
        StepLogger.verification('Item available under Organization should be displayed.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click "Regions"');
        await HomePage1Helper.clickRegionsUnderOrganization();
        StepLogger.verification('Manage Regions should be displayed.');
        await RegionsHelper.verifyManageRegionsPageDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click "Add Region"');
        await RegionsHelper.clickOnAddRegion();
        StepLogger.verification('"New region" page should be displayed.');
        await RegionsHelper.verifyNewRegionScreen();

        StepLogger.stepId(4);
        StepLogger.step('Verify the fields available on the "New region" page.');
        StepLogger.verification(`Following Fields should be available:
        1. Code
        2. Name
        3. District
        4. Status`);
        await RegionsHelper.verifyNewRegionScreenProperties();
    });

    it('To verify that the validation error message is displayed when all the mandatory fields are left blank. - [22436908]', async () => {
        // Auto generated by aurea-automation - util on Tue, 26 Mar 2019 08:46:53 GMT

        StepLogger.caseId = 22436908;
        const error = RegionsConstants.errorMessages.code;

        StepLogger.stepId(1);
        StepLogger.step('Go to  "Administration - >Organization" displayed under administration.');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickOrganizationUnderAdministration();
        StepLogger.verification('Item available under Organization should be displayed.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click "Regions"');
        await HomePage1Helper.clickRegionsUnderOrganization();
        StepLogger.verification('Manage Regions should be displayed.');
        await RegionsHelper.verifyManageRegionsPageDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click "Add Region"');
        await RegionsHelper.clickOnAddRegion();
        StepLogger.verification('"New region" page should be displayed.');
        await RegionsHelper.verifyNewRegionScreen();

        StepLogger.stepId(4);
        StepLogger.step('Click "save" leaving all the mandatory fields blank.');
        await RegionsHelper.clickOnSave();
        StepLogger.verification('Validation Error message should be displayed.');
        await RegionsHelper.verifyErrorMessage(error);
    });
});

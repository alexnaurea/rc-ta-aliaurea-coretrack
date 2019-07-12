import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
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

    it('To verify that the user is able to navigate to Manage Regions page - [22460725]', async () => {
        // Auto generated by aurea-automation - util on Fri, 29 Mar 2019 05:08:17 GMT

        StepLogger.caseId = 22460725;
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
        StepLogger.verification('"Manage Regions" should be displayed.');
        await RegionsHelper.verifyManageRegionsPageDisplayed();
    });

    it('To verify Edit Region window is displayed when clicked on district icon next to a region entry - [22460727]', async () => {
        // Auto generated by aurea-automation - util on Fri, 29 Mar 2019 05:13:29 GMT

        StepLogger.caseId = 22460727;
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
        StepLogger.verification('"Manage Regions" should be displayed.');
        await RegionsHelper.verifyManageRegionsPageDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on region icon next to region entry');
        await RegionsHelper.clickOnEditRegion();
        StepLogger.verification('Edit window is displayed for the region');
        await RegionsHelper.verifyEditRegionScreen();
    });

    it('To verify user able to close edit region window by clicking on close icon on top right corner of window - [22460729]', async () => {
        // Auto generated by aurea-automation - util on Fri, 29 Mar 2019 11:12:15 GMT

        StepLogger.caseId = 22460729;
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
        StepLogger.verification('"Manage Regions" should be displayed.');
        await RegionsHelper.verifyManageRegionsPageDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on region icon next to region entry');
        await RegionsHelper.clickOnEditRegion();
        StepLogger.verification('Edit window is displayed for the region');
        await RegionsHelper.verifyEditRegionScreen();

        StepLogger.stepId(5);
        StepLogger.step('Click Close icon at top right corner');
        await RegionsHelper.clickCloseIconOnScreen();
        StepLogger.verification('Edit window is closed');
        await RegionsHelper.verifyNewRegionScreenClosed();
    });

    it('To verify user able to edit mandatory fields Code and Name of existing region - [22460730]', async () => {
        // Auto generated by aurea-automation - util on Fri, 29 Mar 2019 11:40:11 GMT

        StepLogger.caseId = 22460730;
        const value = await PageHelper.getUniqueId();

        StepLogger.preCondition('Execute C22460728 to open region window');
        await RegionsHelper.navigateToEditRegionWindow();

        StepLogger.stepId(1);
        StepLogger.step('Edit the Code field');
        await RegionsHelper.enterCode(value);
        StepLogger.verification('User is able to edit code field');
        await RegionsHelper.verifyEnteredCode(value);

        StepLogger.stepId(2);
        StepLogger.step('Edit the Name of Region');
        await RegionsHelper.enterName(value);
        StepLogger.verification('User is able to edit Name');
        await RegionsHelper.verifyEnteredName(value);

        StepLogger.stepId(3);
        StepLogger.step('Click Save button at bottom of region edit window');
        await RegionsHelper.clickOnSave();
        StepLogger.verification('Window is closed and changes are saved');
        await RegionsHelper.verifyNewRegionScreenClosed();
    });
});
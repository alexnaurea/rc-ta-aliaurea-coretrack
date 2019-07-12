import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { WaitHelper } from '../../../../components/html/wait-helper';
import { HomePage1Helper } from '../../../../page-objects/pages/home-page/home-page1.helper';
import { LoginPageHelper } from '../../../../page-objects/pages/login-page/login-page.helper';
import { CampaignsConstant } from '../../../../page-objects/pages/marketing/campaigns/campaigns.constants';
import { CampaignsPageHelper } from '../../../../page-objects/pages/marketing/campaigns/campaigns.helper';
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
        await LoginPageHelper.loginAsAdmin();
    });

    // Jira References - COTRAC-5196
    it('Verify user able to update and save Cost. - [22959125]', async () => {
        // Auto generated by aurea-automation - util on Mon, 15 Apr 2019 19:02:47 GMT

        StepLogger.caseId = 22959125;
        StepLogger.preCondition('Navigate to Campaigns page and open an existing campaign');
        await HomePage1Helper.navigateToMarketingCampaignsPage();
        await CampaignsPageHelper.openACampaign();

        StepLogger.stepId(1);
        StepLogger.step('Verify Cost field is appearing on the Overview tab.');
        StepLogger.verification('Cost field should be appearing on the Overview tab.');
        await CampaignsPageHelper.verifyCostFieldDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Update the value of Cost field.');
        const cost = CampaignsConstant.testData.cost;
        await CampaignsPageHelper.typeCost(cost);
        StepLogger.verification('"Cost" should be updated.');
        await CampaignsPageHelper.verifyCostFieldValue(cost);

        StepLogger.stepId(3);
        StepLogger.step('Click on the Save button appearing on the right side of the page.');
        await CampaignsPageHelper.clickOnSaveButton();
        StepLogger.verification('Update Cost should be saved');
        await WaitHelper.waitForPageToStable();
        await CampaignsPageHelper.verifyCostFieldValue(cost);

        StepLogger.stepId(4);
        StepLogger.step('Click on Close button present on the right side of the page.');
        await CampaignsPageHelper.clickOnCloseButton();
        StepLogger.verification('Warning pop will appear with message "Are you sure you want to leave this page? Unsaved changes will be lost"');
        await CampaignsPageHelper.verifyWarningPopupDisplayed();

        StepLogger.stepId(5);
        StepLogger.step('Click on cancel button on the warning pop up');
        await CampaignsPageHelper.clickCancelButtonOnWarningPopup();
        StepLogger.verification('user should navigate back to "Marketing Campaigns"" page.');
        await CampaignsPageHelper.verifyCampaignPageDisplayed();

        StepLogger.stepId(6);
        StepLogger.step('Click on the campaign logo again to navigate to Campaign page.');
        await CampaignsPageHelper.openACampaign();
        StepLogger.verification('Update COST should be appearing in the COST field.');
        await CampaignsPageHelper.verifyCostFieldValue(cost);
    });
});
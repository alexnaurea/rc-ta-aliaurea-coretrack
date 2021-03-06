import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { HomePage1Helper } from '../../../page-objects/pages/home-page/home-page1.helper';
import { LoginPageHelper } from '../../../page-objects/pages/login-page/login-page.helper';
import { NewOpportunityPageHelper } from '../../../page-objects/pages/new-opportunity-page/new-opportunity-page.helper';
import { ReferralsPageHelper } from '../../../page-objects/pages/referrals/referrals.helper';
import { SuiteNames } from '../../helpers/suite-names';

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

    // Jira References - COTRAC-5263
    it('To verify user is able to open an opportunity from Referral page. - [22961197]', async () => {
        // Auto generated by aurea-automation - util on Wed, 17 Apr 2019 22:43:45 GMT

        StepLogger.caseId = 22961197;
        StepLogger.stepId(1);
        StepLogger.step('Go to Opportunities -> Referrals');
        await HomePage1Helper.clickOnOpportunitiesMenu();
        await HomePage1Helper.clickOnReferralsMenu();
        StepLogger.verification('Referrals page should be displayed.');
        await ReferralsPageHelper.verifyReferralsPageDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Double click the opportunity displayed.');
        await ReferralsPageHelper.doubleclickOpportunity();
        StepLogger.verification('Opportunity detail should be opened in the adjacent tab.');
        await NewOpportunityPageHelper.verifyOpportunityPageIsDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Verify that pull button is displayed beside owner field.');
        StepLogger.verification('Pull button should be displayed.');
        await ReferralsPageHelper.verifyPullButtonDisplayed();
    });

    // Jira References - COTRAC-5264
    it('To verify the buttons and the grid displayed on Referrals page. - [22961196]', async () => {
        // Auto generated by aurea-automation - util on Wed, 17 Apr 2019 22:43:45 GMT

        StepLogger.caseId = 22961196;
        StepLogger.stepId(1);
        StepLogger.step('Go to Opportunities -> Referrals');
        await HomePage1Helper.clickOnOpportunitiesMenu();
        await HomePage1Helper.clickOnReferralsMenu();
        StepLogger.verification('Referrals page should be displayed.');
        await ReferralsPageHelper.verifyReferralsPageDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Verify the buttons displayed on Opportunities.');
        StepLogger.verification(`It should have following buttons :
        1. Add Opportunity
        2. Refresh
        3. View by All or Unread Only
        4. Grouping
        5. Search by Contact
        6. Export to Excel
        7. Export to Word`);
        await ReferralsPageHelper.verifyReferralsPageButtons();

        StepLogger.stepId(3);
        StepLogger.step('Verify the Column displayed on the grid.');
        StepLogger.verification(`It should display following columns:
        1. Product Type
        2. Product
        3. Contact
        4. Amount
        5. Status
        6. Sales Stage
        7. Owner
        8. Outside
        9. Modified
        10. Qual`);
        await ReferralsPageHelper.verifyReferralsGridColumns();
    });

    // Jira References - COTRAC-5262
    it('To verify that user is able to access Referrals page. - [22961195]', async () => {
        // Auto generated by aurea-automation - util on Wed, 17 Apr 2019 22:43:45 GMT

        StepLogger.caseId = 22961195;
        StepLogger.stepId(1);
        StepLogger.step('Click "Opportunities" menu is displayed in left panel.');
        await HomePage1Helper.clickOnOpportunitiesMenu();
        StepLogger.verification('Sub menus of opportunities should be displayed.');
        await HomePage1Helper.verifyOpportunitiesSubmenuOptions();

        StepLogger.stepId(2);
        StepLogger.step('Verify Referral is displayed under opportunities.');
        StepLogger.verification('It should be displayed.');
        await HomePage1Helper.verifyReferralsOptionDisplated();

        StepLogger.stepId(3);
        StepLogger.step('Click "Referral".');
        await HomePage1Helper.clickOnReferralsMenu();
        StepLogger.verification('"Referrals" page should be displayed.');
        await ReferralsPageHelper.verifyReferralsPageDisplayed();
    });

    // Jira References - COTRAC-5265
    it('To verify the functionality of close button on Opportunity page. - [22961202]', async () => {
        // Auto generated by aurea-automation - util on Fri, 19 Apr 2019 17:23:55 GMT

        StepLogger.caseId = 22961202;
        StepLogger.stepId(1);
        StepLogger.step('Go to Opportunities -> Referrals');
        await HomePage1Helper.clickOnOpportunitiesMenu();
        await HomePage1Helper.clickOnReferralsMenu();
        StepLogger.verification('Referrals page should be displayed.');
        await ReferralsPageHelper.verifyReferralsPageDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Double click the opportunity displayed.');
        await ReferralsPageHelper.doubleclickOpportunity();
        StepLogger.verification('Opportunity detail should be opened in the adjacent tab.');
        await NewOpportunityPageHelper.verifyOpportunityPageIsDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Click "Close [X]" button.');
        await NewOpportunityPageHelper.clickOnCloseButton();
        await NewOpportunityPageHelper.clickOkOnWarningMessagePopup();
        StepLogger.verification('Opportunity detail should be closed.');
        await ReferralsPageHelper.verifyTabClosed(Constants.number.one);
    });
});

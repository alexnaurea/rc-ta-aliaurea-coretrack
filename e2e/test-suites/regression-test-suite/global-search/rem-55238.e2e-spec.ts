import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { HomePageConstant } from '../../../page-objects/pages/home-page/home-page.constants';
import { HomePageHelper } from '../../../page-objects/pages/home-page/home-page.helper';
import { LoginPageHelper } from '../../../page-objects/pages/login-page/login-page.helper';
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

    // Jira References - COTRAC-86
    it('To verify user is able to search for Retail Contacts - [22954347]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 09:47:54 GMT

        StepLogger.caseId = 22954347;
        StepLogger.stepId(1);
        StepLogger.step('Click on Search icon present at top right corner of page near username of logged in user');
        await HomePageHelper.verifySearchButtonIsDisplayed();
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('Search box is displayed');
        await HomePageHelper.verifySearchCriteriaIsDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click on search selector drop-down and select "Retail Contacts"');
        await HomePageHelper.selectRetailContactsFromSearchDropdown();
        StepLogger.verification('User is able to selected "Retail Contacts"');
        await HomePageHelper.verifyRetailContactsOptionIsSelectedInDropdown();

        StepLogger.stepId(3);
        StepLogger.step('Enter 3 or more than 3 characters in search box to search for retail contact');
        await HomePageHelper.enterSearchCriteria(HomePageConstant.testData.test);
        StepLogger.verification('User is able to enter characters');
        await HomePageHelper.verifySearchCriteriaIsEntered(HomePageConstant.testData.test);

        StepLogger.stepId(4);
        StepLogger.step('Click Search icon or hit "Enter" key');
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('Page is refreshed and search results are displayed');
        await HomePageHelper.verifySearchResultsAreDisplayed();
    });

    // Jira References - COTRAC-86
    it('To verify user is able to search Cases - [22955415]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 09:47:53 GMT

        StepLogger.caseId = 22955415;
        StepLogger.stepId(1);
        StepLogger.step('Click on Search icon present at top right corner of page near username of logged in user');
        await HomePageHelper.verifySearchButtonIsDisplayed();
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('Search box is displayed');
        await HomePageHelper.verifySearchCriteriaIsDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click on search selector drop-down and select "Cases"');
        await HomePageHelper.selectCasesFromSearchDropdown();
        StepLogger.verification('User is able to selected "Cases"');
        await HomePageHelper.verifyCasesOptionIsSelectedInDropdown();

        StepLogger.stepId(3);
        StepLogger.step('Enter 3 or more than 3 characters in search box to search for cases');
        await HomePageHelper.enterSearchCriteria(HomePageConstant.testData.test);
        StepLogger.verification('User is able to enter characters');
        await HomePageHelper.verifySearchCriteriaIsEntered(HomePageConstant.testData.test);

        StepLogger.stepId(4);
        StepLogger.step('Click Search icon or hit "Enter" key');
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('Page is refreshed and search results are displayed');
        await HomePageHelper.verifySearchResultsAreDisplayed();
    });

    // Jira References - COTRAC-86
    it('To verify user is able to search Accounts - [22955419]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 09:47:51 GMT

        StepLogger.caseId = 22955419;
        StepLogger.stepId(1);
        StepLogger.step('Click on Search icon present at top right corner of page near username of logged in user');
        await HomePageHelper.verifySearchButtonIsDisplayed();
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('Search box is displayed');
        await HomePageHelper.verifySearchCriteriaIsDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click on search selector drop-down and select "Accounts"');
        await HomePageHelper.selectAccountsFromSearchDropdown();
        StepLogger.verification('User is able to selected "Accounts"');
        await HomePageHelper.verifyAccountsOptionIsSelectedInDropdown();

        StepLogger.stepId(3);
        StepLogger.step('Enter 3 or more than 3 characters in search box to search for commercial contact');
        await HomePageHelper.enterSearchCriteria(HomePageConstant.testData.test);
        StepLogger.verification('User is able to enter characters');
        await HomePageHelper.verifySearchCriteriaIsEntered(HomePageConstant.testData.test);

        StepLogger.stepId(4);
        StepLogger.step('Click Search icon or hit "Enter" key');
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('Page is refreshed and search results are displayed');
        await HomePageHelper.verifySearchResultsAreDisplayed();
    });

    // Jira References - COTRAC-86
    it('To verify options displayed on right side top corner of search results page - [22955440]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 09:47:45 GMT

        StepLogger.caseId = 22955440;
        StepLogger.stepId(1);
        StepLogger.step('Verify search results are displayed on page');
        await HomePageHelper.verifySearchButtonIsDisplayed();
        await HomePageHelper.clickSearchButton();
        await HomePageHelper.enterSearchCriteriaAndHitEnter(HomePageConstant.testData.test);
        StepLogger.verification('Search results should be displayed');
        await HomePageHelper.verifySearchResultsAreDisplayed();

        // Verifications for step-2 is merged with step-3 as they were verifying the same thing.
        StepLogger.stepId(2);
        StepLogger.step('Verify 3 options are displayed below the username of logged in user');
        StepLogger.verification('3 options should be displayed in the form of icons');

        StepLogger.stepId(3);
        StepLogger.step('Verify the options');
        StepLogger.verification(`Below options are present:
            Show Card View
            Show Grid View
            Refresh`);
        await HomePageHelper.verifyShowCardViewButtonIsDisplayed();
        await HomePageHelper.verifyShowGridViewButtonIsDisplayed();
        await HomePageHelper.verifyRefreshButtonIsDisplayed();
    });

    // Jira References - COTRAC-86
    it('To verify search results are displayed in card view when clicked on "Show Card View" button - [22955465]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 09:47:42 GMT

        StepLogger.caseId = 22955465;
        StepLogger.stepId(1);
        StepLogger.step('Verify search results are displayed on page in grid view');
        await HomePageHelper.verifySearchButtonIsDisplayed();
        await HomePageHelper.clickSearchButton();
        await HomePageHelper.enterSearchCriteriaAndHitEnter(HomePageConstant.testData.test);
        await HomePageHelper.verifySearchResultsAreDisplayed();
        await HomePageHelper.clickShowGridView();
        StepLogger.verification('Search results should be displayed in grid view');
        await HomePageHelper.verifySearchResultsAreDisplayedInGridView();

        StepLogger.stepId(2);
        StepLogger.step('Verify "Show Card View" button is present');
        StepLogger.verification('"Show Card View" button should be present');
        await HomePageHelper.verifyShowCardViewButtonIsDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click on "Show Card View" button');
        await HomePageHelper.clickShowCardView();
        StepLogger.verification('Search results are displayed in card view');
        await HomePageHelper.verifySearchResultsAreDisplayedInCardView();
    });

    // Jira References - COTRAC-86
    it('To verify search results are displayed in grid view when clicked on "Show Grid View" button - [22955461]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 09:47:41 GMT

        StepLogger.caseId = 22955461;
        StepLogger.stepId(1);
        StepLogger.step('Verify search results are displayed on page');
        await HomePageHelper.verifySearchButtonIsDisplayed();
        await HomePageHelper.clickSearchButton();
        await HomePageHelper.enterSearchCriteriaAndHitEnter(HomePageConstant.testData.test);
        StepLogger.verification('Search results should be displayed');
        await HomePageHelper.verifySearchResultsAreDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Verify "Show Grid View" button is present');
        StepLogger.verification('"Show Grid View" button should be present');
        await HomePageHelper.verifyShowGridViewButtonIsDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click on "Show Grid View" button');
        await HomePageHelper.clickShowGridView();
        StepLogger.verification('Search results are displayed in grid view');
        await HomePageHelper.verifySearchResultsAreDisplayedInGridView();
    });

    // Jira References - COTRAC-86
    it('To verify search results page is refreshed when clicked on refresh button - [22955444]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 09:47:44 GMT

        StepLogger.caseId = 22955444;
        StepLogger.stepId(1);
        StepLogger.step('Verify search results are displayed on page');
        await HomePageHelper.verifySearchButtonIsDisplayed();
        await HomePageHelper.clickSearchButton();
        await HomePageHelper.enterSearchCriteriaAndHitEnter(HomePageConstant.testData.test);
        StepLogger.verification('Search results should be displayed');
        await HomePageHelper.verifySearchResultsAreDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Verify refresh button is present');
        StepLogger.verification('Refresh button should be present');
        await HomePageHelper.verifyRefreshButtonIsDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click refresh button');
        await HomePageHelper.clickRefreshButton();
        StepLogger.verification('Search results page is refreshed');
        await HomePageHelper.verifyIfSearchResultsAreRefreshed();
    });

    // Jira References - COTRAC-86
    it('To verify user is able to filter search results of contacts - [22955426]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 09:47:49 GMT

        StepLogger.caseId = 22955426;
        StepLogger.stepId(1);
        StepLogger.step('Verify search results are displayed on page');
        await HomePageHelper.verifySearchButtonIsDisplayed();
        await HomePageHelper.clickSearchButton();
        await HomePageHelper.enterSearchCriteriaAndHitEnter(HomePageConstant.testData.test);
        StepLogger.verification('Search results should be displayed');
        await HomePageHelper.verifySearchResultsAreDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click on drop-down above search results');
        await HomePageHelper.clickSearchFilter();
        StepLogger.verification('Values in filter drop-down are displayed');
        await HomePageHelper.verifyFilterItemsDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Select a value from drop-down to filter results');
        await HomePageHelper.selectRetailContactFromFilter();
        StepLogger.verification('Search results are filter on basis of selected value');
        await HomePageHelper.verifyIfSearchResultsAreRefreshed();
    });

    // Jira References - COTRAC-86
    it('To verify user is able to filter search results of case - [22955429]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 09:47:52 GMT

        StepLogger.caseId = 22955429;
        StepLogger.stepId(1);
        StepLogger.step('Verify search results are displayed on page');
        await HomePageHelper.verifySearchButtonIsDisplayed();
        await HomePageHelper.clickSearchButton();
        await HomePageHelper.selectCasesFromSearchDropdown();
        await HomePageHelper.enterSearchCriteriaAndHitEnter(HomePageConstant.testData.test);
        StepLogger.verification('Search results should be displayed');
        await HomePageHelper.verifySearchResultsAreDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click on drop-down above search results');
        await HomePageHelper.clickSearchFilter();
        StepLogger.verification('Values in filter drop-down are displayed');
        await HomePageHelper.verifyFilterItemsDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Select a value from drop-down to filter results');
        await HomePageHelper.selectCaseOwnerUserFromFilter();
        StepLogger.verification('Search results are filter on basis of selected value');
        await HomePageHelper.verifyIfSearchResultsAreRefreshed();
    });
});

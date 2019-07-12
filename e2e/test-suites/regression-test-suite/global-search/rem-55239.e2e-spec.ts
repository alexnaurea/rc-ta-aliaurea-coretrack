import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { HomePageOneHelper } from '../../../page-objects/pages/home-page/home-page-one.helper';
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
    it('To verify user is able to search for Commercial Contacts - [22954346]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 09:39:40 GMT

        StepLogger.caseId = 22954346;
        StepLogger.stepId(1);
        StepLogger.step('Click on Search icon present at top right corner of page near username of logged in user');
        await HomePageHelper.verifySearchButtonIsDisplayed();
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('Search box is displayed');
        await HomePageHelper.verifySearchCriteriaIsDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click on search selector drop-down and select "Commercial Contacts"');
        await HomePageHelper.selectCommercialContactsFromSearchDropdown();
        StepLogger.verification('User is able to selected "Commercial Contacts"');
        await HomePageHelper.verifyCommercialContactsOptionIsSelectedInDropdown();

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
    it('To verify user is able to search for Contacts by Number - [22954344]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 09:39:54 GMT

        StepLogger.caseId = 22954344;
        StepLogger.stepId(1);
        StepLogger.step('Click on Search icon present at top right corner of page near username of logged in user');
        await HomePageHelper.verifySearchButtonIsDisplayed();
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('Search box is displayed');
        await HomePageHelper.verifySearchCriteriaIsDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click on search selector drop-down and select "Contacts by Number"');
        await HomePageHelper.selectContactsByNumberFromSearchDropdown();
        StepLogger.verification('User is able to selected "Contacts by Number"');
        await HomePageHelper.verifyContactsByNumberOptionIsSelectedInDropdown();

        StepLogger.stepId(3);
        StepLogger.step('Enter 3 or more than 3 digit number in search box to search for contact');
        await HomePageHelper.enterSearchCriteria(HomePageConstant.testData.test);
        StepLogger.verification('User is able to enter number');
        await HomePageHelper.verifySearchCriteriaIsEntered(HomePageConstant.testData.test);

        StepLogger.stepId(4);
        StepLogger.step('Click Search icon or hit "Enter" key');
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('Page is refreshed and search results are displayed');
        await HomePageHelper.verifySearchResultsAreDisplayed();
    });

    // Jira References - COTRAC-86
    it('To verify user is able to search for Contacts - [22954343]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 09:39:50 GMT

        StepLogger.caseId = 22954343;
        StepLogger.stepId(1);
        StepLogger.step('Click on Search icon present at top right corner of page near username of logged in user');
        await HomePageHelper.verifySearchButtonIsDisplayed();
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('Search box is displayed');
        await HomePageHelper.verifySearchCriteriaIsDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Verify "Contacts" is selected by default from search selector drop-down');
        StepLogger.verification('"Contacts" should be selected');
        await HomePageHelper.verifyContactsOptionIsSelectedInDropdown();

        StepLogger.stepId(3);
        StepLogger.step('Enter 3 or more than 3 characters in search box');
        await HomePageHelper.enterSearchCriteria(HomePageConstant.testData.test);
        StepLogger.verification('User is able to enter characters in search box');
        await HomePageHelper.verifySearchCriteriaIsEntered(HomePageConstant.testData.test);

        StepLogger.stepId(4);
        StepLogger.step('Click Search icon or hit "Enter" key');
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('Page is refreshed and search results are displayed');
        await HomePageHelper.verifySearchResultsAreDisplayed();
    });

    // Jira References - COTRAC-86
    it('To verify user is navigated to new page when clicked on any search result - [22954339]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 09:39:49 GMT

        StepLogger.caseId = 22954339;
        StepLogger.stepId(1);
        StepLogger.step('Verify search results are displayed in form of cards by default');
        await HomePageHelper.verifySearchButtonIsDisplayed();
        await HomePageHelper.clickSearchButton();
        await HomePageHelper.enterSearchCriteriaAndHitEnter(HomePageConstant.testData.alec);
        StepLogger.verification('Search results should be displayed in form of cards');
        await HomePageHelper.verifySearchResultsAreDisplayedInCardView();

        StepLogger.stepId(2);
        StepLogger.step('Click on any card from search results');
        await HomePageHelper.clickOnSearchResult(HomePageConstant.testData.alec);
        StepLogger.verification('User is redirected to new tab in browser');
        await HomePageHelper.verifyIfUserRedirectedToNewTab();

        StepLogger.stepId(3);
        StepLogger.step('Verify if the new tab displays details of search result');
        StepLogger.verification('New tab displays all the details of search result');
        await HomePageHelper.verifyPageHeaderDetailsInNewTab(HomePageConstant.testData.ALEC);
    });

    // Jira References - COTRAC-86
    it('To verify the text message displayed at top of page when user performs a search - [22954337]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 09:39:53 GMT

        StepLogger.caseId = 22954337;
        StepLogger.stepId(1);
        StepLogger.step('Click on Search icon present at top right corner of page near username of logged in user');
        await HomePageHelper.verifySearchButtonIsDisplayed();
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('Search box is displayed');
        await HomePageHelper.verifySearchCriteriaIsDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Enter 3 or more than 3 characters in search box');
        await HomePageHelper.enterSearchCriteria(HomePageConstant.testData.TEST);
        StepLogger.verification('User is able to enter characters in search box');
        await HomePageHelper.verifySearchCriteriaIsEntered(HomePageConstant.testData.TEST);

        StepLogger.stepId(3);
        StepLogger.step('Click Search icon or hit "Enter" key');
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('Page is refreshed and search results are displayed');
        await HomePageHelper.verifySearchResultsAreDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Verify the text message displayed above search results');
        StepLogger.verification('Below highlighted messaged in displayed');
        await HomePageHelper.verifyMessageDisplayedAfterSuccessfulSearch(HomePageConstant.testData.TEST);
    });

    // Jira References - COTRAC-86
    it('To verify error message displayed when searched using less than 3 characters - [22954332]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 09:40:01 GMT

        StepLogger.caseId = 22954332;
        StepLogger.stepId(1);
        StepLogger.step('Click on Search icon present at top right corner of page near username of logged in user');
        await HomePageHelper.verifySearchButtonIsDisplayed();
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('Search box is displayed');
        await HomePageHelper.verifySearchCriteriaIsDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Enter less than 3 characters in search box');
        await HomePageHelper.enterSearchCriteria('');
        StepLogger.verification('User is able to enter less than 3 characters in search box');
        await HomePageHelper.verifySearchCriteriaIsEntered('');

        StepLogger.stepId(3);
        StepLogger.step('Press Enter key or click Search icon');
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('Error pop-up asking to enter minimum 3 characters is displayed');
        await HomePageOneHelper.verifyErrorMsgWhenSearchTxtHasLessThanThreeCharacters();
    });

    // Jira References - COTRAC-86
    it('To verify options in search selector drop-down - [22954325]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 09:40:06 GMT

        StepLogger.caseId = 22954325;
        StepLogger.stepId(1);
        StepLogger.step('Click on Search icon present at top right corner of page near username of logged in user');
        await HomePageHelper.verifySearchButtonIsDisplayed();
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('Search box is displayed');
        await HomePageHelper.verifySearchCriteriaIsDisplayed();

        // Verification for step-2 is merged with step-3 since they both are verifying the same thing.
        StepLogger.stepId(2);
        StepLogger.step('Click on drop-down beside the search box');
        StepLogger.verification('Search selector drop-down is displayed');

        StepLogger.stepId(3);
        StepLogger.step('Verify the options in drop-down');
        StepLogger.verification(`Below options are present:
            Contacts
            Contacts by Number
            Commercial Contacts
            Retails Contacts
            Cases
            Accounts`);
        await HomePageHelper.verifySearchDropdownListAndInputFieldsAreDisplayed();
    });

    // Jira References - COTRAC-86
    it('To verify user is able to access search selector drop-down to left side of search box - [22954324]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 09:40:02 GMT

        StepLogger.caseId = 22954324;
        StepLogger.stepId(1);
        StepLogger.step('Verify if Search icon is present at top right corner of page near username of logged in user');
        StepLogger.verification('Search icon should be present');
        await HomePageHelper.verifySearchButtonIsDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click on Search icon');
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('Search box is displayed');
        await HomePageHelper.verifySearchCriteriaIsDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click on drop-down beside the search box');
        StepLogger.verification('Search selector drop-down is displayed');
        await HomePageHelper.verifySearchDropdownListAndInputFieldsAreDisplayed();
    });

    // Jira References - COTRAC-86
    it('To verify Search box is displayed when clicked on Search icon at top right corner of home page - [22954313]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 09:40:11 GMT

        // Verification for step-1 is merged with step-2 as step-1's verification is anyway done as part of step-2's verification method
        StepLogger.caseId = 22954313;
        StepLogger.stepId(1);
        StepLogger.step('Verify if user is on home page of resource one application');
        StepLogger.verification('User should be on home page');

        StepLogger.stepId(2);
        StepLogger.step('Verify if Search icon is present at top right corner of page near username of logged in user');
        StepLogger.verification('Search icon should be present');
        await HomePageHelper.verifySearchButtonIsDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click on Search icon');
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('Search box is displayed');
        await HomePageHelper.verifySearchCriteriaIsDisplayed();
    });
});
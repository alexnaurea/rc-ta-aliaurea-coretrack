import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { HomePageOneHelper } from '../../../../page-objects/pages/home-page/home-page-one.helper';
import { HomePageHelper } from '../../../../page-objects/pages/home-page/home-page.helper';
import { HomePage1Helper } from '../../../../page-objects/pages/home-page/home-page1.helper';
import { LoginPageHelper } from '../../../../page-objects/pages/login-page/login-page.helper';
import { ManagedContactsHelper } from '../../../../page-objects/pages/managed-contacts/managed-contacts.helper';
import { CampaignsPageHelper } from '../../../../page-objects/pages/marketing/campaigns/campaigns.helper';
import { MarketingListsHelper } from '../../../../page-objects/pages/marketing/marketing-lists/marketing-lists.helper';
import { QueuedCasesHelper } from '../../../../page-objects/pages/queues/cases/cases.helper';
import { EventQueueHelper } from '../../../../page-objects/pages/queues/events/events-queue-page.helper';
import { OpportunitiesHelper } from '../../../../page-objects/pages/queues/opportunities/opportunities.helper';
import { TicketsPageHelper } from '../../../../page-objects/pages/queues/tickets-page/tickets-page.helper';
import { CasesHelper } from '../../../../page-objects/pages/service-center/cases/cases.helper';
import {
    KnowledgeBase1Helper
} from '../../../../page-objects/pages/service-center/knowledge-base/knowledge-base.helper';
import { TicketsHelper } from '../../../../page-objects/pages/service-center/tickets/tickets.helper';
import { TasksQueuePageHelper } from '../../../../page-objects/pages/tasks-queue-page/tasks-queue-page.helper';
import { ToDoListPageHelper } from '../../../../page-objects/pages/to-do-list/to-do-list-page.helper';
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

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Campaigns screen under the menu Marketing - [22412536]', async () => {
        // Auto generated by aurea-automation - util on Mon, 27 May 2019 05:42:01 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412536;
        StepLogger.stepId(1);
        StepLogger.step('Goto URL : http://ct-allinone-qa.coretrac.dev.avolin.com/ResourceOne/App/index.html#login');
        StepLogger.verification('User should be able to navigate to the login page.');

        StepLogger.stepId(2);
        StepLogger.step('Enter username: r1adminpassword : editipt');
        StepLogger.verification('User should be able to enter the data.');

        StepLogger.stepId(3);
        StepLogger.step('Click "Sign in".');
        StepLogger.verification('User should be able to login successfully.');

        StepLogger.stepId(4);
        StepLogger.step('Click on Campaigns button.');
        await HomePage1Helper.clickOnMarketingMenu();
        await HomePage1Helper.clickOnCampaignsOption();
        StepLogger.verification('Should display the Campaigns screen properly.');
        await CampaignsPageHelper.verifyMarketingCampaignsPageDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Marketing Lists screen under the menu Marketing - [22412534]', async () => {
        // Auto generated by aurea-automation - util on Mon, 27 May 2019 05:42:01 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412534;
        StepLogger.stepId(1);
        StepLogger.step('Goto URL : http://ct-allinone-qa.coretrac.dev.avolin.com/ResourceOne/App/index.html#login');
        StepLogger.verification('User should be able to navigate to the login page.');

        StepLogger.stepId(2);
        StepLogger.step('Enter username: r1adminpassword : editipt');
        StepLogger.verification('User should be able to enter the data.');

        StepLogger.stepId(3);
        StepLogger.step('Click "Sign in".');
        StepLogger.verification('User should be able to login successfully.');

        StepLogger.stepId(4);
        StepLogger.step('Click on Marketing List button.');
        await HomePage1Helper.clickOnMarketingMenu();
        await HomePageOneHelper.clickMarketingListsButtonUnderMarketingMenu();
        StepLogger.verification('Should display the Marketing List screen properly.');
        await MarketingListsHelper.verifyMarketingListsPageDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see the Marketing menu - [22412533]', async () => {
        // Auto generated by aurea-automation - util on Mon, 27 May 2019 05:42:13 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412533;
        StepLogger.stepId(1);
        StepLogger.step('Goto URL : http://ct-allinone-qa.coretrac.dev.avolin.com/ResourceOne/App/index.html#login');
        StepLogger.verification('User should be able to navigate to the login page.');

        StepLogger.stepId(2);
        StepLogger.step('Enter username: r1adminpassword : editipt');
        StepLogger.verification('User should be able to enter the data.');

        StepLogger.stepId(3);
        StepLogger.step('Click "Sign in".');
        StepLogger.verification('User should be able to login successfully.');

        StepLogger.stepId(4);
        StepLogger.step('Check the Marketing menu item.');
        StepLogger.verification('Should display the Marketing option under the main menu properly.');
        await HomePageOneHelper.verifyMarketingMenu();
        await HomePage1Helper.clickOnMarketingMenu();
        await HomePage1Helper.verifyMarketingSubmenu();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Knowledge Base screen under the menu Service Center - [22412532]', async () => {
        // Auto generated by aurea-automation - util on Mon, 27 May 2019 05:42:11 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412532;
        StepLogger.stepId(1);
        StepLogger.step('Goto URL : http://ct-allinone-qa.coretrac.dev.avolin.com/ResourceOne/App/index.html#login');
        StepLogger.verification('User should be able to navigate to the login page.');

        StepLogger.stepId(2);
        StepLogger.step('Enter username: r1adminpassword : editipt');
        StepLogger.verification('User should be able to enter the data.');

        StepLogger.stepId(3);
        StepLogger.step('Click "Sign in".');
        StepLogger.verification('User should be able to login successfully.');

        StepLogger.stepId(4);
        StepLogger.step('Click on Knowledge Base button under Service Center menu.');
        await HomePageHelper.clickServiceCenterLink();
        await HomePageHelper.clickKnowledgeBaseUnderServiceCenter();
        StepLogger.verification('Should display the Knowledge Base screen properly.');
        await KnowledgeBase1Helper.verifyKnowledgeBasePageDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Cases screen under the menu Service Center - [22412531]', async () => {
        // Auto generated by aurea-automation - util on Mon, 27 May 2019 05:42:21 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412531;
        StepLogger.stepId(1);
        StepLogger.step('Goto URL : http://ct-allinone-qa.coretrac.dev.avolin.com/ResourceOne/App/index.html#login');
        StepLogger.verification('User should be able to navigate to the login page.');

        StepLogger.stepId(2);
        StepLogger.step('Enter username: r1adminpassword : editipt');
        StepLogger.verification('User should be able to enter the data.');

        StepLogger.stepId(3);
        StepLogger.step('Click "Sign in".');
        StepLogger.verification('User should be able to login successfully.');

        StepLogger.stepId(4);
        StepLogger.step('Click on Cases button under Service Center menu.');
        await HomePageHelper.clickServiceCenterLink();
        await HomePageOneHelper.clickCasesButtonUnderServiceCenterMenu();
        StepLogger.verification('Should display the Cases screen properly.');
        await CasesHelper.verifyCasesPageDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Tickets screen under the menu Service Center - [22412530]', async () => {
        // Auto generated by aurea-automation - util on Mon, 27 May 2019 05:42:17 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412530;
        StepLogger.stepId(1);
        StepLogger.step('Goto URL : http://ct-allinone-qa.coretrac.dev.avolin.com/ResourceOne/App/index.html#login');
        StepLogger.verification('User should be able to navigate to the login page.');

        StepLogger.stepId(2);
        StepLogger.step('Enter username: r1adminpassword : editipt');
        StepLogger.verification('User should be able to enter the data.');

        StepLogger.stepId(3);
        StepLogger.step('Click "Sign in".');
        StepLogger.verification('User should be able to login successfully.');

        StepLogger.stepId(4);
        StepLogger.step('Click on Tickets button under Service Center menu.');
        await HomePageHelper.clickServiceCenterLink();
        await HomePageHelper.clickTicketsUnderServiceCenter();
        StepLogger.verification('Should display the Tickets screen properly.');
        await TicketsHelper.verifyTicketsPageDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Service Center menu - [22412529]', async () => {
        // Auto generated by aurea-automation - util on Mon, 27 May 2019 05:42:19 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412529;
        StepLogger.stepId(1);
        StepLogger.step('Goto URL : http://ct-allinone-qa.coretrac.dev.avolin.com/ResourceOne/App/index.html#login');
        StepLogger.verification('User should be able to navigate to the login page.');

        StepLogger.stepId(2);
        StepLogger.step('Enter username: r1adminpassword : editipt');
        StepLogger.verification('User should be able to enter the data.');

        StepLogger.stepId(3);
        StepLogger.step('Click "Sign in".');
        StepLogger.verification('User should be able to login successfully.');

        StepLogger.stepId(4);
        StepLogger.step('Check the Service Center menu item.');
        StepLogger.verification('Should display the Service Center in the main menu properly.');
        await HomePageOneHelper.verifyServiceCenterMenu();
        await HomePageHelper.clickServiceCenterLink();
        await HomePageHelper.verifyOptionsUnderServiceCenterMenu();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Managed Contacts screen properly - [22412528]', async () => {
        // Auto generated by aurea-automation - util on Mon, 27 May 2019 05:42:27 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412528;
        StepLogger.stepId(1);
        StepLogger.step('Goto URL : http://ct-allinone-qa.coretrac.dev.avolin.com/ResourceOne/App/index.html#login');
        StepLogger.verification('User should be able to navigate to the login page.');

        StepLogger.stepId(2);
        StepLogger.step('Enter username: r1adminpassword : editipt');
        StepLogger.verification('User should be able to enter the data.');

        StepLogger.stepId(3);
        StepLogger.step('Click "Sign in".');
        StepLogger.verification('User should be able to login successfully.');

        StepLogger.stepId(4);
        StepLogger.step('Click on Managed Contacts button.');
        await HomePageOneHelper.clickManagedContactsButton();
        StepLogger.verification('Should display Managed Contacts screen properly.');
        await ManagedContactsHelper.verifyManagedContactsPageDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see To Do List screen properly - [22412527]', async () => {
        // Auto generated by aurea-automation - util on Mon, 27 May 2019 05:42:27 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412527;
        StepLogger.stepId(1);
        StepLogger.step('Goto URL : http://ct-allinone-qa.coretrac.dev.avolin.com/ResourceOne/App/index.html#login');
        StepLogger.verification('User should be able to navigate to the login page.');

        StepLogger.stepId(2);
        StepLogger.step('Enter username: r1adminpassword : editipt');
        StepLogger.verification('User should be able to enter the data.');

        StepLogger.stepId(3);
        StepLogger.step('Click "Sign in".');
        StepLogger.verification('User should be able to login successfully.');

        StepLogger.stepId(4);
        StepLogger.step('Click on To Do List button.');
        await HomePageHelper.clickToDoListLabel();
        StepLogger.verification('Should display the To Do List screen properly.');
        await ToDoListPageHelper.verifyToDoListPageIsDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Tickets screen under the menu Queues - [22412523]', async () => {
        // Auto generated by aurea-automation - util on Mon, 27 May 2019 05:42:27 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412523;
        StepLogger.stepId(1);
        StepLogger.step('Goto URL : http://ct-allinone-qa.coretrac.dev.avolin.com/ResourceOne/App/index.html#login');
        StepLogger.verification('User should be able to navigate to the login page.');

        StepLogger.stepId(2);
        StepLogger.step('Enter username: r1adminpassword : editipt');
        StepLogger.verification('User should be able to enter the data.');

        StepLogger.stepId(3);
        StepLogger.step('Click "Sign in".');
        StepLogger.verification('User should be able to login successfully.');

        StepLogger.stepId(4);
        StepLogger.step('Click on Tickets button under the Queues menu.');
        await HomePageHelper.clickQueuesLink();
        await HomePage1Helper.clickOnTicketLink();
        StepLogger.verification('Should display the Tickets screen properly.');
        await TicketsPageHelper.verifyTicketQueuePageIsDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Events screen under the menu Queues - [22412522]', async () => {
        // Auto generated by aurea-automation - util on Mon, 27 May 2019 05:42:31 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412522;
        StepLogger.stepId(1);
        StepLogger.step('Goto URL : http://ct-allinone-qa.coretrac.dev.avolin.com/ResourceOne/App/index.html#login');
        StepLogger.verification('User should be able to navigate to the login page.');

        StepLogger.stepId(2);
        StepLogger.step('Enter username: r1adminpassword : editipt');
        StepLogger.verification('User should be able to enter the data.');

        StepLogger.stepId(3);
        StepLogger.step('Click "Sign in".');
        StepLogger.verification('User should be able to login successfully.');

        StepLogger.stepId(4);
        StepLogger.step('Click on Events button under Queues menu.');
        await HomePageHelper.clickQueuesLink();
        await HomePageHelper.clickEventsUnderQueues();
        StepLogger.verification('Should display the Events screen properly.');
        await EventQueueHelper.verifyEventsQueuePageDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Tasks screen under the menu Queues - [22412521]', async () => {
        // Auto generated by aurea-automation - util on Mon, 27 May 2019 05:42:34 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412521;
        StepLogger.stepId(1);
        StepLogger.step('Goto URL : http://ct-allinone-qa.coretrac.dev.avolin.com/ResourceOne/App/index.html#login');
        StepLogger.verification('User should be able to navigate to the login page.');

        StepLogger.stepId(2);
        StepLogger.step('Enter username: r1adminpassword : editipt');
        StepLogger.verification('User should be able to enter the data.');

        StepLogger.stepId(3);
        StepLogger.step('Click "Sign in".');
        StepLogger.verification('User should be able to login successfully.');

        StepLogger.stepId(4);
        StepLogger.step('Click on Tasks button under Queues menu.');
        await HomePageHelper.clickQueuesLink();
        await HomePageHelper.clickTasksUnderQueues();
        StepLogger.verification('Should display the Tasks screen properly.');
        await TasksQueuePageHelper.verifyTasksQueuePageDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Cases screen under the menu Queues - [22412520]', async () => {
        // Auto generated by aurea-automation - util on Mon, 27 May 2019 05:42:31 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412520;
        StepLogger.stepId(1);
        StepLogger.step('Goto URL : http://ct-allinone-qa.coretrac.dev.avolin.com/ResourceOne/App/index.html#login');
        StepLogger.verification('User should be able to navigate to the login page.');

        StepLogger.stepId(2);
        StepLogger.step('Enter username: r1adminpassword : editipt');
        StepLogger.verification('User should be able to enter the data.');

        StepLogger.stepId(3);
        StepLogger.step('Click "Sign in".');
        StepLogger.verification('User should be able to login successfully.');

        StepLogger.stepId(4);
        StepLogger.step('Click on Cases button under Queues menu.');
        await HomePageHelper.clickQueuesLink();
        await HomePageOneHelper.clickCasesButtonUnderQueues();
        StepLogger.verification('Should display the Cases screen properly.');
        await QueuedCasesHelper.verifyQueuedCasesPageDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Opportunities screen under the menu Queues - [22412519]', async () => {
        // Auto generated by aurea-automation - util on Mon, 27 May 2019 05:42:28 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412519;
        StepLogger.stepId(1);
        StepLogger.step('Goto URL : http://ct-allinone-qa.coretrac.dev.avolin.com/ResourceOne/App/index.html#login');
        StepLogger.verification('User should be able to navigate to the login page.');

        StepLogger.stepId(2);
        StepLogger.step('Enter username: r1adminpassword : editipt');
        StepLogger.verification('User should be able to enter the data.');

        StepLogger.stepId(3);
        StepLogger.step('Click "Sign in".');
        StepLogger.verification('User should be able to login successfully.');

        StepLogger.stepId(4);
        StepLogger.step('Click on Opportunities button under Queues menu.');
        await HomePageHelper.clickQueuesLink();
        await HomePageHelper.clickOpportunitiesUnderQueues();
        StepLogger.verification('Should display the Opportunities screen properly.');
        await OpportunitiesHelper.verifyOpportunitiesPageDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see the Queues menu - [22412518]', async () => {
        // Auto generated by aurea-automation - util on Mon, 27 May 2019 05:42:35 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412518;
        StepLogger.stepId(1);
        StepLogger.step('Goto URL : http://ct-allinone-qa.coretrac.dev.avolin.com/ResourceOne/App/index.html#login');
        StepLogger.verification('User should be able to navigate to the login page.');

        StepLogger.stepId(2);
        StepLogger.step('Enter username: r1adminpassword : editipt');
        StepLogger.verification('User should be able to enter the data.');

        StepLogger.stepId(3);
        StepLogger.step('Click "Sign in".');
        StepLogger.verification('User should be able to login successfully.');

        StepLogger.stepId(4);
        StepLogger.step('Check the Queue item in the main menu.');
        StepLogger.verification('Should display the Queue item in the menu properly.');
        await HomePageOneHelper.verifyQueuesMenu();
        await HomePageHelper.clickQueuesLink();
        await HomePageHelper.verifyOptionsDisplayedUnderQueues();
    });
});

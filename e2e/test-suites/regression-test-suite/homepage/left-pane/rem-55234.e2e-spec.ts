import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { OnboardingHelper } from '../../../../page-objects/pages/administration/configuration/onboarding/onboarding.helper';
import { OrganizationsHelper } from '../../../../page-objects/pages/administration/configuration/organizations/organizations.helper';
import { ProductsHelper } from '../../../../page-objects/pages/administration/configuration/products/products.helper';
import { QueuesHelper } from '../../../../page-objects/pages/administration/configuration/queues/queues.helper';
import { ReferralSourcesHelper } from '../../../../page-objects/pages/administration/configuration/referral-sources/referral-sources.helper';
import { RelationshipsHelper } from '../../../../page-objects/pages/administration/configuration/relationships/relationships.helper';
import { TrainingModulesHelper } from '../../../../page-objects/pages/administration/configuration/training-modules/training-modules.helper';
import { TransferActivitiesHelper } from '../../../../page-objects/pages/administration/configuration/transfer-activities/transfer-activities.helper';
import { UserLabelsHelper } from '../../../../page-objects/pages/administration/configuration/user-labels/user-labels.helper';
import { GoalsHelper } from '../../../../page-objects/pages/administration/goals/goals.helper';
import { BranchesHelper } from '../../../../page-objects/pages/administration/organization/branches/branches.helper';
import { DepartmentsHelper } from '../../../../page-objects/pages/administration/organization/departments/departments.helper';
import { HomePageOneHelper } from '../../../../page-objects/pages/home-page/home-page-one.helper';
import { HomePageHelper } from '../../../../page-objects/pages/home-page/home-page.helper';
import { HomePage1Helper } from '../../../../page-objects/pages/home-page/home-page1.helper';
import { LoginPageHelper } from '../../../../page-objects/pages/login-page/login-page.helper';
import { ManageCompensationPageHelper } from '../../../../page-objects/pages/manage-compensation-page/manage-compensation-page.helper';
import { OutsideInstitutionsPageHelper } from '../../../../page-objects/pages/outside-institutions-page/outside-institutions-page.helper';
import { SalesStagePageHelper } from '../../../../page-objects/pages/sales-stages-page/sales-stages-page.helper';
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
    it('Verify if user shall be able to see Departments screen under the sub-menu Organization - [22412612]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 15:21:11 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412612;
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
        StepLogger.step('Click on Departments button under the Organizations sub-menu.');
        await HomePage1Helper.navigateToDepartmentsPage();
        StepLogger.verification('Should display the Departments screen properly.');
        await DepartmentsHelper.verifyManageDepartmentsPageDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Branches screen under the sub-menu Organization - [22412611]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 16:03:44 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412611;
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
        StepLogger.step('Click on Branches button under the Organizations sub-menu.');
        await HomePage1Helper.navigateToBranchesPage();
        StepLogger.verification('Should display the Branches screen properly.');
        await BranchesHelper.verifyManageBranchesPageDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Goals screen under the menu Administration - [22412610]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 16:04:07 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412610;
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
        StepLogger.step('Click on Goals button under the sub-menu Administration.');
        await HomePageHelper.clickAdministrationLink();
        await HomePage1Helper.clickOnGoalsOptionUnderAdministration();
        StepLogger.verification('Should display the Goals screen properly.');
        await GoalsHelper.verifyManageGoalsPage();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Compensation screen under the menu Administration - [22412609]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 16:04:24 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412609;
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
        StepLogger.step('Click on Compensation button under the sub-menu Administration.');
        await HomePageHelper.clickAdministrationLink();
        await HomePage1Helper.clickCompensationAdministration();
        StepLogger.verification('Should display the Compensation screen properly.');
        await ManageCompensationPageHelper.verifyManageCompensationPageDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see User Labels screen under the sub-menu Configuration - [22412608]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 16:04:41 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412608;
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
        StepLogger.step('Click on User Labels button under the Configuration sub-menu.');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickConfigurationUnderAdministration();
        await HomePageOneHelper.clickUserLabelsButtonUnderConfigurationSubmenuUnderAdministrationMenu();
        StepLogger.verification('Should display the User Labels screen properly.');
        await UserLabelsHelper.verifyUserLabelsPageDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Transfer Activities screen under the sub-menu Configuration - [22412600]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 16:04:55 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412600;
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
        StepLogger.step('Click on Transfer Activities button under the Configuration sub-menu.');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickConfigurationUnderAdministration();
        await HomePageOneHelper.clickTransferActivitiesButtonUnderConfigurationSubmenuUnderAdministrationMenu();
        StepLogger.verification('Should display the Transfer Activities screen properly.');
        await TransferActivitiesHelper.verifyTransferActivitiesPageDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Training Modules screen under the sub-menu Configuration - [22412599]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 16:05:08 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412599;
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
        StepLogger.step('Click on Training Modules button under the Configuration sub-menu.');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickConfigurationUnderAdministration();
        await HomePageOneHelper.clickTrainingModulesButtonUnderConfigurationSubmenuUnderAdministrationMenu();
        StepLogger.verification('Should display the Training Modules screen properly.');
        await TrainingModulesHelper.verifyTrainingModulesPageDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Sales Stages screen under the sub-menu Configuration - [22412598]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 16:05:20 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412598;
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
        StepLogger.step('Click on Sales Stages button under the Configuration sub-menu.');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickConfigurationUnderAdministration();
        await HomePageHelper.clickSalesStagesUnderConfiguration();
        StepLogger.verification('Should display the Sales Stages screen properly.');
        await SalesStagePageHelper.verifyManageSalesStagesDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Relationship screen under the sub-menu Configuration - [22412597]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 16:05:32 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412597;
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
        StepLogger.step('Click on Relationship button under the Configuration sub-menu.');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickConfigurationUnderAdministration();
        await HomePage1Helper.clickRelationshipsUnderConfiguration();
        StepLogger.verification('Should display the Relationship screen properly.');
        await RelationshipsHelper.verifyRelationshipsManagePageDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Referral Sources screen under the sub-menu Configuration - [22412596]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 16:05:44 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412596;
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
        StepLogger.step('Click on Referral Sources button under the Configuration sub-menu.');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickConfigurationUnderAdministration();
        await HomePageHelper.clickReferralSourcesUnderConfigurationUnderAdministration();
        StepLogger.verification('Should display the Referral Sources screen properly.');
        await ReferralSourcesHelper.verifyReferralSourcesPageDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Queues screen under the sub-menu Configuration - [22412595]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 16:06:00 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412595;
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
        StepLogger.step('Click on Queues button under the Configuration sub-menu.');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickConfigurationUnderAdministration();
        await HomePageOneHelper.clickQueuesButtonUnderConfigurationSubmenuUnderAdministrationMenu();
        StepLogger.verification('Should display the Queues screen properly.');
        await QueuesHelper.verifyQueuesPageDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Products screen under the sub-menu Configuration - [22412594]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 16:06:13 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412594;
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
        StepLogger.step('Click on Products button under the Configuration sub-menu.');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickConfigurationUnderAdministration();
        await HomePageHelper.clickProductsUnderConfiguration();
        StepLogger.verification('Should display the Products screen properly.');
        await ProductsHelper.verifyProductsManagePageDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Outside Institutions screen under the sub-menu Configuration - [22412592]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 16:06:28 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412592;
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
        StepLogger.step('Click on Outside Institutions button under the sub-menu Configuration');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickConfigurationUnderAdministration();
        await HomePageHelper.clickOutsideInstitutions();
        StepLogger.verification('Should display the Outside Institutions screen properly.');
        await OutsideInstitutionsPageHelper.verifyOutsideInstitutionsPageDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Organizations screen under the sub-menu Configuration - [22412591]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 16:06:53 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412591;
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
        StepLogger.step('Click on Organizations button under the sub-menu Configuration');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickConfigurationUnderAdministration();
        await HomePageOneHelper.clickOrganizationButtonUnderConfigurationSubmenuUnderAdministrationMenu();
        StepLogger.verification('Should display the Organizations screen properly.');
        await OrganizationsHelper.verifyOrganizationsPageDisplayed();
    });

    // Jira References - COTRAC-88
    it('Verify if user shall be able to see Onboarding screen under the sub-menu Configuration - [22412590]', async () => {
        // Auto generated by aurea-automation - util on Wed, 22 May 2019 15:21:41 GMT

        // Step-1,2 & 3 are verified as part of the prerequisite in beforeEach method
        StepLogger.caseId = 22412590;
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
        StepLogger.step('Click on Event Onboarding under the sub-menu Configuration');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickConfigurationUnderAdministration();
        await HomePageOneHelper.clickOnboardingButtonUnderConfigurationSubmenuUnderAdministrationMenu();
        StepLogger.verification('Should display the Onboarding screen properly.');
        await OnboardingHelper.verifyOnboardingPageDisplayed();
    });
});

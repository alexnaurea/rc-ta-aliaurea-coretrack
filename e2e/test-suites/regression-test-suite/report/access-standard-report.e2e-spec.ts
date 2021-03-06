import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { BrowsePageHelper } from '../../../page-objects/pages/browse-reports-page/browse-page.helper';
import { CommonPageHelper } from '../../../page-objects/pages/common/common-page.helper';
import { HomePage1Helper } from '../../../page-objects/pages/home-page/home-page1.helper';
import { LoginPageHelper } from '../../../page-objects/pages/login-page/login-page.helper';
import { SuiteNames } from '../../helpers/suite-names';

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

    // Jira References - COTRAC-2097
    it('Verify if user shall be able to access the Standard Reports page - [22914977]', async () => {
        // Auto generated by aurea-automation - util on Wed, 10 Apr 2019 06:30:18 GMT

        StepLogger.caseId = 22914977;
        StepLogger.stepId(1);
        StepLogger.step('Click on Reports menu on left side navigation pane of the screen.');
        await HomePage1Helper.clickReportsLink();
        StepLogger.verification('The Reports menu should expand.');
        await HomePage1Helper.verifyReportExpand();

        StepLogger.stepId(2);
        StepLogger.step('Check the Reports menu option list.');
        StepLogger.verification(`The Reports menu should have 4 options:
        Browse
        Custom Reports
        Report Writer
        Pending Reports`);
        await HomePage1Helper.verifyReportItemDisplay();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Browse option menu.');
        await HomePage1Helper.clickOnBrowseButton();
        StepLogger.verification('The Standard Reports page is displayed in the right side pane.');
        await BrowsePageHelper.verifyBrowserPageIsDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on Sign off button at the bottom in the left side Navigation Pane.');
        await CommonPageHelper.signOffApp();
        StepLogger.verification('The Login screen is displayed again.');
        await LoginPageHelper.verifyLoginPage();
    });

    // Jira References - COTRAC-2097
    it('Verify if header is displaying properly - [22914982]', async () => {
        // Auto generated by aurea-automation - util on Wed, 10 Apr 2019 07:23:41 GMT

        StepLogger.caseId = 22914982;
        StepLogger.stepId(1);
        StepLogger.step('Click on Reports menu on left side navigation pane of the screen.');
        await HomePage1Helper.clickReportsLink();
        StepLogger.verification('The Reports menu should expand.');
        await HomePage1Helper.verifyReportExpand();

        StepLogger.stepId(2);
        StepLogger.step('Check the Reports menu option list.');
        StepLogger.verification(`The Reports menu should have 4 options:
        Browse
        Custom Reports
        Report Writer
        Pending Reports`);
        await HomePage1Helper.verifyReportItemDisplay();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Browse option menu.');
        await HomePage1Helper.clickOnBrowseButton();
        StepLogger.verification('The Standard Reports page is displayed in the right side pane.');
        await BrowsePageHelper.verifyBrowserPageIsDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Verify if header is displaying properly');
        StepLogger.verification('The header is displayed as "Standard Reports".');
        await BrowsePageHelper.verifyBrowserPageIsDisplayed();

        StepLogger.stepId(5);
        StepLogger.step('Click on Sign off button at the bottom in the left side Navigation Pane.');
        await CommonPageHelper.signOffApp();
        StepLogger.verification('The Login screen is displayed again.');
        await LoginPageHelper.verifyLoginPage();
    });

    // Jira References - COTRAC-2097
    it('Verify the columns present on Standard Reports Page - [22914984]', async () => {
        // Auto generated by aurea-automation - util on Wed, 10 Apr 2019 07:29:49 GMT

        StepLogger.caseId = 22914984;
        StepLogger.stepId(1);
        StepLogger.step('Click on Reports menu on left side navigation pane of the screen.');
        await HomePage1Helper.clickReportsLink();
        StepLogger.verification('The Reports menu should expand.');
        await HomePage1Helper.verifyReportExpand();

        StepLogger.stepId(2);
        StepLogger.step('Check the Reports menu option list.');
        StepLogger.verification(`The Reports menu should have 4 options:
        Browse
        Custom Reports
        Report Writer
        Pending Reports`);
        await HomePage1Helper.verifyReportItemDisplay();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Browse option menu.');
        await HomePage1Helper.clickOnBrowseButton();
        StepLogger.verification('The Standard Reports page is displayed in the right side pane.');
        await BrowsePageHelper.verifyBrowserPageIsDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Verify the columns present on Standard Reports Page');
        StepLogger.verification(`The following columns present on Standard Reports Page:
        REPORT
        CATEGORY`);
        await BrowsePageHelper.verifyCoulumnsOnPage();

        StepLogger.stepId(5);
        StepLogger.step('Click on Sign off button at the bottom in the left side Navigation Pane.');
        await CommonPageHelper.signOffApp();
        StepLogger.verification('The Login screen is displayed again.');
        await LoginPageHelper.verifyLoginPage();
    });

    // Jira References - COTRAC-2097
    it('Verify the buttons present on Standard Reports Page - [22914987]', async () => {
        // Auto generated by aurea-automation - util on Wed, 10 Apr 2019 08:16:29 GMT

        StepLogger.caseId = 22914987;
        StepLogger.stepId(1);
        StepLogger.step('Click on Reports menu on left side navigation pane of the screen.');
        await HomePage1Helper.clickReportsLink();
        StepLogger.verification('The Reports menu should expand.');
        await HomePage1Helper.verifyReportExpand();

        StepLogger.stepId(2);
        StepLogger.step('Check the Reports menu option list.');
        StepLogger.verification(`The Reports menu should have 4 options:
        Browse
        Custom Reports
        Report Writer
        Pending Reports`);
        await HomePage1Helper.verifyReportItemDisplay();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Browse option menu.');
        await HomePage1Helper.clickOnBrowseButton();
        StepLogger.verification('The Standard Reports page is displayed in the right side pane.');
        await BrowsePageHelper.verifyBrowserPageIsDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Verify the buttons present on Standard Reports Page');
        StepLogger.verification(`The following buttons present on Standard Reports Page:
        Refresh
        Export to Excel
        Export to Word`);
        await BrowsePageHelper.verifyButtonOnBrowse();

        StepLogger.stepId(5);
        StepLogger.step('Click on Sign off button at the bottom in the left side Navigation Pane.');
        await CommonPageHelper.signOffApp();
        StepLogger.verification('The Login screen is displayed again.');
        await LoginPageHelper.verifyLoginPage();
    });

    // Jira References - COTRAC-2097
    it('Verify if user shall be able to refresh the data on screen clicking on Refresh button - [22915045]', async () => {
        // Auto generated by aurea-automation - util on Wed, 10 Apr 2019 08:27:47 GMT

        StepLogger.caseId = 22915045;
        StepLogger.stepId(1);
        StepLogger.step('Click on Reports menu on left side navigation pane of the screen.');
        await HomePage1Helper.clickReportsLink();
        StepLogger.verification('The Reports menu should expand.');
        await HomePage1Helper.verifyReportExpand();

        StepLogger.stepId(2);
        StepLogger.step('Check the Reports menu option list.');
        StepLogger.verification(`The Reports menu should have 4 options:
        Browse
        Custom Reports
        Report Writer
        Pending Reports`);
        await HomePage1Helper.verifyReportItemDisplay();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Browse option menu.');
        await HomePage1Helper.clickOnBrowseButton();
        StepLogger.verification('The Standard Reports page is displayed in the right side pane.');
        await BrowsePageHelper.verifyBrowserPageIsDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Verify if user shall be able to refresh the data on screen clicking on Refresh button');
        await BrowsePageHelper.clickRefresh();
        StepLogger.verification('The screen is refreshed and data is updated accordingly.');
        await BrowsePageHelper.verifyRefreshDone();

        StepLogger.stepId(5);
        StepLogger.step('Click on Sign off button at the bottom in the left side Navigation Pane.');
        await CommonPageHelper.signOffApp();
        StepLogger.verification('The Login screen is displayed again.');
        await LoginPageHelper.verifyLoginPage();
    });

    // Jira References - COTRAC-2097
    it('Verify if user shall be able to sort the grid data in Report column in Ascending order - [22915068]', async () => {
        // Auto generated by aurea-automation - util on Wed, 10 Apr 2019 08:39:28 GMT

        StepLogger.caseId = 22915068;
        StepLogger.stepId(1);
        StepLogger.step('Click on Reports menu on left side navigation pane of the screen.');
        await HomePage1Helper.clickReportsLink();
        StepLogger.verification('The Reports menu should expand.');
        await HomePage1Helper.verifyReportExpand();

        StepLogger.stepId(2);
        StepLogger.step('Check the Reports menu option list.');
        StepLogger.verification(`The Reports menu should have 4 options:
        Browse
        Custom Reports
        Report Writer
        Pending Reports`);
        await HomePage1Helper.verifyReportItemDisplay();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Browse option menu.');
        await HomePage1Helper.clickOnBrowseButton();
        StepLogger.verification('The Standard Reports page is displayed in the right side pane.');
        await BrowsePageHelper.verifyBrowserPageIsDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on the Report column heading to sort the data.');
        await BrowsePageHelper.clickOnReport();
        StepLogger.verification('The Data in the Report column is sorted in ascending order.');
        await BrowsePageHelper.verifyReportAscendingOrder();

        StepLogger.stepId(5);
        StepLogger.step('Click on Sign off button at the bottom in the left side Navigation Pane.');
        await CommonPageHelper.signOffApp();
        StepLogger.verification('The Login screen is displayed again.');
        await LoginPageHelper.verifyLoginPage();
    });

    // Jira References - COTRAC-2097
    it('Verify if user shall be able to sort the grid data in Report column in Descending order - [22915073]', async () => {
        // Auto generated by aurea-automation - util on Thu, 11 Apr 2019 05:46:02 GMT

        StepLogger.caseId = 22915073;
        StepLogger.stepId(1);
        StepLogger.step('Click on Reports menu on left side navigation pane of the screen.');
        await HomePage1Helper.clickReportsLink();
        StepLogger.verification('The Reports menu should expand.');
        await HomePage1Helper.verifyReportExpand();

        StepLogger.stepId(2);
        StepLogger.step('Check the Reports menu option list.');
        StepLogger.verification(`The Reports menu should have 4 options:
        Browse
        Custom Reports
        Report Writer
        Pending Reports`);
        await HomePage1Helper.verifyReportItemDisplay();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Browse option menu.');
        await HomePage1Helper.clickOnBrowseButton();
        StepLogger.verification('The Standard Reports page is displayed in the right side pane.');
        await BrowsePageHelper.verifyBrowserPageIsDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on the Report column heading to sort the data.');
        await BrowsePageHelper.clickOnReport();
        StepLogger.verification('The Data in the Report column is sorted in ascending order.');
        await BrowsePageHelper.verifyReportAscendingOrder();

        StepLogger.stepId(5);
        StepLogger.step('Click on the Report column heading to sort the data again.');
        await BrowsePageHelper.clickOnReport();
        StepLogger.verification('The Data in the Report column is sorted in descending order.');
        await BrowsePageHelper.verifyReportDescendingOrder();

        StepLogger.stepId(6);
        StepLogger.step('Click on Sign off button at the bottom in the left side Navigation Pane.');
        await CommonPageHelper.signOffApp();
        StepLogger.verification('The Login screen is displayed again.');
        await LoginPageHelper.verifyLoginPage();
    });

    // Jira References - COTRAC-2097
    it('Verify if user shall be able to sort the grid data in Category column in Ascending order - [22915075]', async () => {
        // Auto generated by aurea-automation - util on Thu, 11 Apr 2019 05:50:20 GMT

        StepLogger.caseId = 22915075;
        StepLogger.stepId(1);
        StepLogger.step('Click on Reports menu on left side navigation pane of the screen.');
        await HomePage1Helper.clickReportsLink();
        StepLogger.verification('The Reports menu should expand.');
        await HomePage1Helper.verifyReportExpand();

        StepLogger.stepId(2);
        StepLogger.step('Check the Reports menu option list.');
        StepLogger.verification(`The Reports menu should have 4 options:
        Browse
        Custom Reports
        Report Writer
        Pending Reports`);
        await HomePage1Helper.verifyReportItemDisplay();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Browse option menu.');
        await HomePage1Helper.clickOnBrowseButton();
        StepLogger.verification('The Standard Reports page is displayed in the right side pane.');
        await BrowsePageHelper.verifyBrowserPageIsDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on the Category column heading to sort the data.');
        await BrowsePageHelper.clickCategorySort();
        StepLogger.verification('The Data in the Category column is sorted in ascending order.');
        await BrowsePageHelper.verifyReportAscendingOrder();

        StepLogger.stepId(5);
        StepLogger.step('Click on Sign off button at the bottom in the left side Navigation Pane.');
        await CommonPageHelper.signOffApp();
        StepLogger.verification('The Login screen is displayed again.');
        await LoginPageHelper.verifyLoginPage();
    });

    // Jira References - COTRAC-2097
    it('Verify if user shall be able to sort the grid data in Category column in Descending order - [22915082]', async () => {
        // Auto generated by aurea-automation - util on Thu, 11 Apr 2019 06:14:54 GMT

        StepLogger.caseId = 22915082;
        StepLogger.stepId(1);
        StepLogger.step('Click on Reports menu on left side navigation pane of the screen.');
        await HomePage1Helper.clickReportsLink();
        StepLogger.verification('The Reports menu should expand.');
        await HomePage1Helper.verifyReportExpand();

        StepLogger.stepId(2);
        StepLogger.step('Check the Reports menu option list.');
        StepLogger.verification(`The Reports menu should have 4 options:
        Browse
        Custom Reports
        Report Writer
        Pending Reports`);
        await HomePage1Helper.verifyReportItemDisplay();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Browse option menu.');
        await HomePage1Helper.clickOnBrowseButton();
        StepLogger.verification('The Standard Reports page is displayed in the right side pane.');
        await BrowsePageHelper.verifyBrowserPageIsDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on the Category column heading to sort the data.');
        await BrowsePageHelper.clickCategorySort();
        StepLogger.verification('The Data in the Category column is sorted in ascending order.');
        await BrowsePageHelper.verifyReportAscendingOrder();

        StepLogger.stepId(5);
        StepLogger.step('Click on the Category column heading again to sort the data.');
        await BrowsePageHelper.clickCategorySort();
        StepLogger.verification('The Data in the Category column is sorted in descending order.');
        await BrowsePageHelper.verifyReportDescendingOrder();

        StepLogger.stepId(6);
        StepLogger.step('Click on Sign off button at the bottom in the left side Navigation Pane.');
        await CommonPageHelper.signOffApp();
        StepLogger.verification('The Login screen is displayed again.');
        await LoginPageHelper.verifyLoginPage();
    });

    // Jira References - COTRAC-2097
    it('Verify if data in the grid can be ungrouped selecting "No Grouping" option in the dropdown. - [22915084]', async () => {
        // Auto generated by aurea-automation - util on Thu, 11 Apr 2019 06:19:00 GMT

        StepLogger.caseId = 22915084;
        StepLogger.stepId(1);
        StepLogger.step('Click on Reports menu on left side navigation pane of the screen.');
        await HomePage1Helper.clickReportsLink();
        StepLogger.verification('The Reports menu should expand.');
        await HomePage1Helper.verifyReportExpand();

        StepLogger.stepId(2);
        StepLogger.step('Check the Reports menu option list.');
        StepLogger.verification(`The Reports menu should have 4 options:
        Browse
        Custom Reports
        Report Writer
        Pending Reports`);
        await HomePage1Helper.verifyReportItemDisplay();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Browse option menu.');
        await HomePage1Helper.clickOnBrowseButton();
        StepLogger.verification('The Standard Reports page is displayed in the right side pane.');
        await BrowsePageHelper.verifyBrowserPageIsDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Select "No grouping" option from the grouping dropdown.');
        await BrowsePageHelper.selectNoGroup();
        StepLogger.verification('No grouping is applied to the data in the grid.');
        await BrowsePageHelper.verifyGroupNotAppearing();

        StepLogger.stepId(5);
        StepLogger.step('Click on Sign off button at the bottom in the left side Navigation Pane.');
        await CommonPageHelper.signOffApp();
        StepLogger.verification('The Login screen is displayed again.');
        await LoginPageHelper.verifyLoginPage();
    });

    // Jira References - COTRAC-2097
    it('Verify if data in the grid can be grouped by selecting Category option in the dropdown. - [22915087]', async () => {
        // Auto generated by aurea-automation - extension on Tue, 16 Apr 2019 10: 59: 44 GMT

        StepLogger.caseId = 22915087;
        StepLogger.stepId(1);
        StepLogger.step('Click on Reports menu on left side navigation pane of the screen.');
        await HomePage1Helper.clickReportsLink();
        StepLogger.verification('The Reports menu should expand.');
        await HomePage1Helper.verifyReportExpand();

        StepLogger.stepId(2);
        StepLogger.step('Check the Reports menu option list.');
        StepLogger.verification(`The Reports menu should have 4 options:
        Browse
        Custom Reports
        Report Writer
        Pending Reports`);
        await HomePage1Helper.verifyReportItemDisplay();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Browse option menu.');
        await HomePage1Helper.clickOnBrowseButton();
        StepLogger.verification('The Standard Reports page is displayed in the right side pane.');
        await BrowsePageHelper.verifyBrowserPageIsDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Select Category option from the Grouping dropdown.');
        // Selected by default
        StepLogger.verification('The data in the grid is grouped by Category option.');
        await BrowsePageHelper.verifyGroupAppearing();

        StepLogger.stepId(5);
        StepLogger.step('Click on Sign off button at the bottom in the left side Navigation Pane.');
        await CommonPageHelper.signOffApp();
        StepLogger.verification('The Login screen is displayed again.');
        await LoginPageHelper.verifyLoginPage();
    });
});

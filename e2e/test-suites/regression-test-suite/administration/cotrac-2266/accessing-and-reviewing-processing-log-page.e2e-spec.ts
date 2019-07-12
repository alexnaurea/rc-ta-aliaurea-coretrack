import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import {
    ProcessingLogConstants
} from '../../../../page-objects/pages/administration/system/processing-log/processing-log.constants';
import {
    ProcessingLogHelper
} from '../../../../page-objects/pages/administration/system/processing-log/processing-log.helper';
import { HomePageHelper } from '../../../../page-objects/pages/home-page/home-page.helper';
import { HomePage1Helper } from '../../../../page-objects/pages/home-page/home-page1.helper';
import { LoginPageHelper } from '../../../../page-objects/pages/login-page/login-page.helper';
import { SuiteNames } from '../../../helpers/suite-names';

const { elementNames: eNames } = ProcessingLogConstants;

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

    // Jira References - COTRAC-2266
    it('Verify if user is able to access the Processing Log screen - [22946402]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 15:40:00 GMT

        StepLogger.caseId = 22946402;
        StepLogger.stepId(1);
        StepLogger.step('Click on Administration menu button.');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Should display the Administration Menu list properly.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click on System menu under the Administration section.');
        await HomePage1Helper.clickSystemUnderAdministration();
        StepLogger.verification(`Should display the System sub-menu list properly.
            -Application Status
            -Processing Log
            -Sessions
            -Unmatched`);
        await HomePage1Helper.verifyOptionsUnderSystem();

        StepLogger.stepId(3);
        StepLogger.step('Click on Processing Log menu button under System section.');
        await HomePage1Helper.clickProcessingLog();
        StepLogger.verification('Should display the Processing Log screen properly.');
        await ProcessingLogHelper.verifyProcessingLogPageDisplayed();
    });

    // Jira References - COTRAC-2266
    it('Verify if pagination tool is working properly - [22946404]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 15:40:00 GMT

        StepLogger.caseId = 22946404;
        StepLogger.stepId(1);
        StepLogger.step('Click on Administration menu button.');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Should display the Administration Menu list properly.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click on System menu under the Administration section.');
        await HomePage1Helper.clickSystemUnderAdministration();
        StepLogger.verification(`Should display the System sub-menu list properly.
            -Application Status
            -Processing Log
            -Sessions
            -Unmatched`);
        await HomePage1Helper.verifyOptionsUnderSystem();

        StepLogger.stepId(3);
        StepLogger.step('Click on Processing Log menu button under System section.');
        await HomePage1Helper.clickProcessingLog();
        StepLogger.verification('Should display the Processing Log screen properly.');
        await ProcessingLogHelper.verifyProcessingLogPageDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on ">" arrow button.');
        await ProcessingLogHelper.clickNextArrow();
        StepLogger.verification('Should display the next grid data list page properly.');
        await ProcessingLogHelper.verifySelectedPageNumber(eNames.two);

        StepLogger.stepId(5);
        StepLogger.step('Click on "<" arrow button.');
        await ProcessingLogHelper.clickPreviousArrow();
        StepLogger.verification('Should display the previous grid data list page properly.');
        await ProcessingLogHelper.verifySelectedPageNumber(eNames.one);

        StepLogger.stepId(6);
        StepLogger.step('Click on page number.');
        await ProcessingLogHelper.clickPageNumber(eNames.two);
        StepLogger.verification('Should display the page number grid data properly.');
        await ProcessingLogHelper.verifySelectedPageNumber(eNames.two);
    });

    // Jira References - COTRAC-2266
    it('Verify if user shall be able to refresh the grid data clicking on Refresh button - [22946405]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 15:40:00 GMT

        StepLogger.caseId = 22946405;
        StepLogger.stepId(1);
        StepLogger.step('Click on Administration menu button.');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Should display the Administration Menu list properly.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click on System menu under the Administration section.');
        await HomePage1Helper.clickSystemUnderAdministration();
        StepLogger.verification(`Should display the System sub-menu list properly.
            -Application Status
            -Processing Log
            -Sessions
            -Unmatched`);
        await HomePage1Helper.verifyOptionsUnderSystem();

        StepLogger.stepId(3);
        StepLogger.step('Click on Processing Log menu button under System section.');
        await HomePage1Helper.clickProcessingLog();
        StepLogger.verification('Should display the Processing Log screen properly.');
        await ProcessingLogHelper.verifyProcessingLogPageDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on Refresh button.');
        await ProcessingLogHelper.clickOnRefresh();
        StepLogger.verification('Should reload the page properly.');
        await ProcessingLogHelper.verifyProcessingLogPageDisplayed();
    });

    // Jira References - COTRAC-2266
    it('Verify if user shall be able to filter the grid data by "Within 2 Weeks" filter - [22946407]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 15:40:00 GMT

        StepLogger.caseId = 22946407;
        StepLogger.stepId(1);
        StepLogger.step('Click on Administration menu button.');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Should display the Administration Menu list properly.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click on System menu under the Administration section.');
        await HomePage1Helper.clickSystemUnderAdministration();
        StepLogger.verification(`Should display the System sub-menu list properly.
            -Application Status
            -Processing Log
            -Sessions
            -Unmatched`);
        await HomePage1Helper.verifyOptionsUnderSystem();

        StepLogger.stepId(3);
        StepLogger.step('Click on Processing Log menu button under System section.');
        await HomePage1Helper.clickProcessingLog(false);
        StepLogger.verification('Should display the Processing Log screen properly.');
        await ProcessingLogHelper.verifyProcessingLogPageDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Select the Within 2 Weeks option in the filter.');
        await ProcessingLogHelper.setFilterTimeOption(eNames.withinTwoWeeks);
        StepLogger.verification('Should display the grid data filtered by Within 2 Weeks properly.');
        await ProcessingLogHelper.verifyTimeFilterOptionSelected(eNames.withinTwoWeeks);
    });

    // Jira References - COTRAC-2266
    it('Verify if user shall be able to filter the grid data by "Within a Month" filter - [22946408]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 15:40:00 GMT

        StepLogger.caseId = 22946408;
        StepLogger.stepId(1);
        StepLogger.step('Click on Administration menu button.');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Should display the Administration Menu list properly.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click on System menu under the Administration section.');
        await HomePage1Helper.clickSystemUnderAdministration();
        StepLogger.verification(`Should display the System sub-menu list properly.
            -Application Status
            -Processing Log
            -Sessions
            -Unmatched`);
        await HomePage1Helper.verifyOptionsUnderSystem();

        StepLogger.stepId(3);
        StepLogger.step('Click on Processing Log menu button under System section.');
        await HomePage1Helper.clickProcessingLog(false);
        StepLogger.verification('Should display the Processing Log screen properly.');
        await ProcessingLogHelper.verifyProcessingLogPageDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Select the Within a Month option in the filter.');
        await ProcessingLogHelper.setFilterTimeOption(eNames.withinAMonth);
        StepLogger.verification('Should display the grid data filtered by Within a Month properly.');
        await ProcessingLogHelper.verifyTimeFilterOptionSelected(eNames.withinAMonth);
    });

    // Jira References - COTRAC-2266
    it('Verify if user shall be able to filter the grid data by "No Grouping" filter - [22946409]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 15:40:00 GMT

        StepLogger.caseId = 22946409;
        StepLogger.stepId(1);
        StepLogger.step('Click on Administration menu button.');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Should display the Administration Menu list properly.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click on System menu under the Administration section.');
        await HomePage1Helper.clickSystemUnderAdministration();
        StepLogger.verification(`Should display the System sub-menu list properly.
            -Application Status
            -Processing Log
            -Sessions
            -Unmatched`);
        await HomePage1Helper.verifyOptionsUnderSystem();

        StepLogger.stepId(3);
        StepLogger.step('Click on Processing Log menu button under System section.');
        await HomePage1Helper.clickProcessingLog(false);
        StepLogger.verification('Should display the Processing Log screen properly.');
        await ProcessingLogHelper.verifyProcessingLogPageDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Select the "No Grouping" option in the filter.');
        await ProcessingLogHelper.setFilterGroupingOption(eNames.noGrouping);
        StepLogger.verification('Should display the grid data filtered by No Grouping properly.');
        await ProcessingLogHelper.verifyGroupingFilterOptionSelected(eNames.noGrouping);
    });

    // Jira References - COTRAC-2266
    it('Verify if user shall be able to filter the grid data by "Data File" filter - [22946410]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 15:40:00 GMT

        StepLogger.caseId = 22946410;
        StepLogger.stepId(1);
        StepLogger.step('Click on Administration menu button.');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Should display the Administration Menu list properly.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click on System menu under the Administration section.');
        await HomePage1Helper.clickSystemUnderAdministration();
        StepLogger.verification(`Should display the System sub-menu list properly.
            -Application Status
            -Processing Log
            -Sessions
            -Unmatched`);
        await HomePage1Helper.verifyOptionsUnderSystem();

        StepLogger.stepId(3);
        StepLogger.step('Click on Processing Log menu button under System section.');
        await HomePage1Helper.clickProcessingLog(false);
        StepLogger.verification('Should display the Processing Log screen properly.');
        await ProcessingLogHelper.verifyProcessingLogPageDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Select the "Data File" option in the filter.');
        await ProcessingLogHelper.setFilterGroupingOption(eNames.dataFile);
        StepLogger.verification('Should disGrousetFilterGroupingOption the grid data filtered by Data File properly.');
        await ProcessingLogHelper.verifyGroupingFilterOptionSelected(eNames.dataFile);
    });

    // Jira References - COTRAC-2266
    it('Verify if user shall be able to filter the grid data by "Employee Code" filter - [22946411]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 15:40:01 GMT

        StepLogger.caseId = 22946411;
        StepLogger.stepId(1);
        StepLogger.step('Click on Administration menu button.');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Should display the Administration Menu list properly.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click on System menu under the Administration section.');
        await HomePage1Helper.clickSystemUnderAdministration();
        StepLogger.verification(`Should display the System sub-menu list properly.
            -Application Status
            -Processing Log
            -Sessions
            -Unmatched`);
        await HomePage1Helper.verifyOptionsUnderSystem();

        StepLogger.stepId(3);
        StepLogger.step('Click on Processing Log menu button under System section.');
        await HomePage1Helper.clickProcessingLog(false);
        StepLogger.verification('Should display the Processing Log screen properly.');
        await ProcessingLogHelper.verifyProcessingLogPageDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Select the "Employee Code" option in the filter.');
        await ProcessingLogHelper.setFilterGroupingOption(eNames.employeeCode);
        StepLogger.verification('Should display the grid data filtered by Employee Code properly.');
        await ProcessingLogHelper.setFilterGroupingOption(eNames.employeeCode);
    });

    // Jira References - COTRAC-2266
    it('Verify if user shall be able to filter the grid data by "Within a Week" filter - [22946406]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 15:40:00 GMT

        StepLogger.caseId = 22946406;
        StepLogger.stepId(1);
        StepLogger.step('Click on Administration menu button.');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Should display the Administration Menu list properly.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click on System menu under the Administration section.');
        await HomePage1Helper.clickSystemUnderAdministration();
        StepLogger.verification(`Should display the System sub-menu list properly.
            -Application Status
            -Processing Log
            -Sessions
            -Unmatched`);
        await HomePage1Helper.verifyOptionsUnderSystem();

        StepLogger.stepId(3);
        StepLogger.step('Click on Processing Log menu button under System section.');
        await HomePage1Helper.clickProcessingLog(false);
        StepLogger.verification('Should display the Processing Log screen properly.');
        await ProcessingLogHelper.verifyProcessingLogPageDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Select the Within a Week option in the filter.');
        await ProcessingLogHelper.setFilterTimeOption(eNames.withinAWeek);
        StepLogger.verification('Should display the grid data filtered by Within a Week properly.');
        await ProcessingLogHelper.verifyTimeFilterOptionSelected(eNames.withinAWeek);
    });
});

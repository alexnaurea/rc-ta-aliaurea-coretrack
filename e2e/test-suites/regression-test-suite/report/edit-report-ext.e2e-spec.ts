import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { BrowsePageHelper } from '../../../page-objects/pages/browse-reports-page/browse-page.helper';
import { HomePage1Helper } from '../../../page-objects/pages/home-page/home-page1.helper';
import { LoginPageHelper } from '../../../page-objects/pages/login-page/login-page.helper';
import { ReportWriterReportsPageHelper } from '../../../page-objects/pages/report-writer-reports-page/report-writer-reports-page.helper';
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

    // Jira References - COTRAC-2480
    it('Verify table appearing Run Report pop up - [23167538]', async () => {
        // Auto generated by aurea-automation - extension on Thu, 18 Apr 2019 10: 37: 05 GMT

        StepLogger.caseId = 23167538;
        StepLogger.preCondition('C23008176 should pass successfully and user should be on Report Writer Reports page.');
        await HomePage1Helper.navigateToReportWriterPage();

        StepLogger.stepId(1);
        StepLogger.step('Click on Create/Edit link');
        await ReportWriterReportsPageHelper.clickOnCreateAndEdit();
        StepLogger.verification('Create/Edit page should open and  label on the right side of the page "Reports -> Create/Edit"');
        await ReportWriterReportsPageHelper.verifyCreateAndEditFormDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Verify user clicks on Edit button present against any report.');
        await ReportWriterReportsPageHelper.clickOnNThEdit(2);
        StepLogger.verification('Report Criteria page should open, heading should be appearing on the right side'
        + 'of the page Report Criteria:  <Report name>');
        await ReportWriterReportsPageHelper.verifyEditPage();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Preview button.');
        await ReportWriterReportsPageHelper.clickOnPreviewbutton();
        StepLogger.verification(`Pop up should open with following buttons:
        Run This Report
        Close`);
        await ReportWriterReportsPageHelper.verifyRunAndCloseDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on Run Report button.');
        await ReportWriterReportsPageHelper.clickRunReport();
        StepLogger.verification('Run Report pop up should open');
        await ReportWriterReportsPageHelper.verifyReportAppear();

        StepLogger.stepId(5);
        StepLogger.step('Verify Table should be appearing on the Report pop up page.');
        StepLogger.verification('Table is loaded and columns should be appearing on the report(depending on the report).');
        await ReportWriterReportsPageHelper.verifyTableLoaded();

        StepLogger.stepId(6);
        StepLogger.step('Click on Close button.');
        await ReportWriterReportsPageHelper.clickCloseReport();
        StepLogger.verification('Report pop up should close .');
        await ReportWriterReportsPageHelper.verifyEditPage();
    });

    // Jira References - COTRAC-2480
    it('Verify Refresh button"s functionality on Run Report pop up. - [23167540]', async () => {
        // Auto generated by aurea-automation - extension on Thu, 18 Apr 2019 10: 43: 07 GMT

        StepLogger.caseId = 23167540;
        StepLogger.preCondition('C23008176 should pass successfully and user should be on Report Writer Reports page.');
        await HomePage1Helper.navigateToReportWriterPage();

        StepLogger.stepId(1);
        StepLogger.step('Click on Create/Edit link');
        await ReportWriterReportsPageHelper.clickOnCreateAndEdit();
        StepLogger.verification('Create/Edit page should open and  label on the right side of the page "Reports -> Create/Edit"');
        await ReportWriterReportsPageHelper.verifyCreateAndEditFormDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Verify user clicks on Edit button present against any report.');
        await ReportWriterReportsPageHelper.clickOnNThEdit(2);
        StepLogger.verification('Report Criteria page should open, heading should be appearing on the right side'
        + 'of the page Report Criteria:  <Report name>');
        await ReportWriterReportsPageHelper.verifyEditPage();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Preview button.');
        await ReportWriterReportsPageHelper.clickOnPreviewbutton();
        StepLogger.verification(`Pop up should open with following buttons:
        Run This Report
        Close`);
        await ReportWriterReportsPageHelper.verifyRunAndCloseDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on Run Report button.');
        await ReportWriterReportsPageHelper.clickRunReport();
        StepLogger.verification('Run Report pop up should open');
        await ReportWriterReportsPageHelper.verifyReportAppear();

        StepLogger.stepId(5);
        StepLogger.step('Verify user clicks on the Refresh button present on the Report page.');
        await ReportWriterReportsPageHelper.clickRefresh();
        StepLogger.verification('Page should refresh and data should reload on Report Pop up');
        await ReportWriterReportsPageHelper.verifyReportGenerate();
    });

    // Jira References - COTRAC-2480
    it('Verify buttons appearing on Condition tab after adding condition record. - [23167550]', async () => {
        // Auto generated by aurea-automation - extension on Fri, 19 Apr 2019 08: 25: 21 GMT

        StepLogger.caseId = 23167550;
        const value = PageHelper.getUniqueId();
        const nextValue = PageHelper.getUniqueId();
        await ReportWriterReportsPageHelper.createConditionalOkFlow(value, nextValue);

        // Step 1-3 are covered in precondition
        StepLogger.stepId(1);
        StepLogger.step('Click on Create/Edit link');
        StepLogger.verification('Create/Edit page should open and label on the right side of the page "Reports -> Create/Edit"');

        StepLogger.stepId(2);
        StepLogger.step('Verify user clicks on Edit button present against any report.');
        StepLogger.verification('Report Criteria page should open, heading should be appearing on the right side of the page Report Criteria:  <Report name>');

        StepLogger.stepId(3);
        StepLogger.step('Verify user clicks on the Conditionals tab is appearing on the page.');
        StepLogger.verification('Conditionals tab should open.');

        StepLogger.stepId(4);
        StepLogger.step('Verify buttons appearing on the table appearing on the page.');
        StepLogger.verification(`Following buttons should be appearing with record added in the table.
        Edit this conditional
        Make a copy below
        remove`);
        await ReportWriterReportsPageHelper.verifyCondtionActions();
        });

    // Jira References - COTRAC-2480
    it('user Runs Report again and verify no filtration is applied. - [23167551]', async () => {
        // Auto generated by aurea-automation - extension on Fri, 19 Apr 2019 08: 40: 01 GMT

        StepLogger.caseId = 23167551;
        StepLogger.preCondition('C23008176 should pass successfully and user should be on Report Writer Reports page.');
        await HomePage1Helper.navigateToReportWriterPage();

        StepLogger.stepId(1);
        StepLogger.step('Click on Create/Edit link');
        await ReportWriterReportsPageHelper.clickOnCreateAndEdit();
        StepLogger.verification('Create/Edit page should open and  label on the right side of the page "Reports -> Create/Edit"');
        await ReportWriterReportsPageHelper.verifyCreateAndEditFormDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Verify user clicks on Edit button present against any report.');
        await ReportWriterReportsPageHelper.clickOnNThEdit(2);
        StepLogger.verification('Report Criteria page should open, heading should be appearing on the right side'
        + 'of the page Report Criteria:  <Report name>');
        await ReportWriterReportsPageHelper.verifyEditPage();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Preview button.');
        await ReportWriterReportsPageHelper.clickOnPreviewbutton();
        StepLogger.verification(`Pop up should open with following buttons:
        Run This Report
        Close`);
        await ReportWriterReportsPageHelper.verifyRunAndCloseDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on Run Report button.');
        await ReportWriterReportsPageHelper.clickRunReport();
        StepLogger.verification('Run Report pop up should open');
        await ReportWriterReportsPageHelper.verifyReportAppear();

        StepLogger.stepId(5);
        StepLogger.step('Verify Table should be appearing on the Report pop up page.');
        StepLogger.verification('Table is loaded and columns should be appearing on the report(depending on the report).');
        await ReportWriterReportsPageHelper.verifyTableLoaded();

        StepLogger.stepId(6);
        StepLogger.step('Verify no Filtration  should be appearing on the page.');
        StepLogger.verification('No filtration  should be applied on the page.');
        await BrowsePageHelper.verifyNoFilter();
    });
});

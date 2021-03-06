import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
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
    it('Click on Create/Edit button and verify the page. - [23167528]', async () => {
        // Auto generated by aurea-automation - util on Wed, 10 Apr 2019 06:01:04 GMT

        StepLogger.caseId = 23167528;
        StepLogger.preCondition('C23008176 should pass successfully and user should be on Report Writer Reports page.');
        await HomePage1Helper.navigateToReportWriterPage();

        StepLogger.stepId(1);
        StepLogger.step('Verify Reports section is appearing on the left side of the Report Writer Reports page.');
        StepLogger.verification('Reports section should be appearing on the left side of the Report Writer Reports page.');
        await ReportWriterReportsPageHelper.verifyReportWriterReportsPageIsDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click on Create/Edit link');
        await ReportWriterReportsPageHelper.clickOnCreateAndEdit();
        StepLogger.verification('Create/Edit page should open and  label on the right side of the page "Reports -> Create/Edit"');
        await ReportWriterReportsPageHelper.verifyCreateAndEditFormDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Verify list of reports appearing on the page.');
        StepLogger.verification('List of reports should be appearing on the page');
        await ReportWriterReportsPageHelper.verifyColumnReporterPage();

        StepLogger.stepId(4);
        StepLogger.step('Verify buttons appearing on each row.');
        StepLogger.verification(`Following buttons should be appearing on each rows:
        - Edit this report
        - Clone this report
        -  Delete
        -  Lock
        - Run this report`);
        await ReportWriterReportsPageHelper.verifyButtonsUnderActions();
    });

    // Jira References - COTRAC-2480
    it('Verify user clicks on Edit button against any record - [23167529]', async () => {
        // Auto generated by aurea-automation - util on Wed, 10 Apr 2019 11:10:05 GMT

        StepLogger.caseId = 23167529;
        StepLogger.preCondition('C23008176 should pass successfully and user should be on Report Writer Reports page.');
        await HomePage1Helper.navigateToReportWriterPage();

        StepLogger.stepId(1);
        StepLogger.step('Click on Create/Edit link');
        await ReportWriterReportsPageHelper.clickOnCreateAndEdit();
        StepLogger.verification('Create/Edit page should open and  label on the right side of the page "Reports -> Create/Edit"');
        await ReportWriterReportsPageHelper.verifyCreateAndEditFormDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Verify user clicks on Edit button present against any report.');
        await ReportWriterReportsPageHelper.clickOnFirstEdit();
        StepLogger.verification('Report Criteria page should open, heading should be appearing on the right side of the page'
           + 'Report Criteria:  <Report name>');
        await ReportWriterReportsPageHelper.verifyEditPage();

        StepLogger.stepId(3);
        StepLogger.step('Verify General tab should be open.');
        StepLogger.verification('General tab should be open by default.');
        await ReportWriterReportsPageHelper.verifyGeneralTabDisplayed();
    });

    // Jira References - COTRAC-2480
    it('Verify tabs appearing on Report Criteria page. - [23167531]', async () => {
        // Auto generated by aurea-automation - util on Wed, 10 Apr 2019 11:21:48 GMT

        StepLogger.caseId = 23167531;
        StepLogger.preCondition('C23008176 should pass successfully and user should be on Report Writer Reports page.');
        await HomePage1Helper.navigateToReportWriterPage();

        StepLogger.stepId(1);
        StepLogger.step('Click on Create/Edit link');
        await ReportWriterReportsPageHelper.clickOnCreateAndEdit();
        StepLogger.verification('Create/Edit page should open and  label on the right side of the page "Reports -> Create/Edit"');
        await ReportWriterReportsPageHelper.verifyCreateAndEditFormDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Verify user clicks on Edit button present against any report.');
        await ReportWriterReportsPageHelper.clickOnFirstEdit();
        StepLogger.verification('Report Criteria page should open, heading should be appearing on the right side'
        + 'of the page Report Criteria:  <Report name>');
        await ReportWriterReportsPageHelper.verifyEditPage();

        StepLogger.stepId(3);
        StepLogger.step('Verify tabs appearing on the page.');
        StepLogger.verification(`Following tabs should be appearing on the page:
        - General
        - Sharing
        - Column Selection
        - Table Relationships
        - Conditionals
        - Filtration
        - Groups / Summaries`);
        await ReportWriterReportsPageHelper.verifyTabsOnEdit();
    });

    // Jira References - COTRAC-2480
    it('Verify user clicks on Add Condition button - [23167542]', async () => {
        // Auto generated by aurea-automation - util on Thu, 11 Apr 2019 11:20:21 GMT

        StepLogger.caseId = 23167542;
        StepLogger.preCondition('C23008176 should pass successfully and user should be on Report Writer Reports page.');
        await HomePage1Helper.navigateToReportWriterPage();

        StepLogger.stepId(1);
        StepLogger.step('Click on Create/Edit link');
        await ReportWriterReportsPageHelper.clickOnCreateAndEdit();
        StepLogger.verification('Create/Edit page should open and  label on the right side of the page "Reports -> Create/Edit"');
        await ReportWriterReportsPageHelper.verifyCreateAndEditFormDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Verify user clicks on Edit button present against any report.');
        await ReportWriterReportsPageHelper.clickOnFirstEdit();
        StepLogger.verification('Report Criteria page should open, heading should be appearing on the right side'
        + 'of the page Report Criteria:  <Report name>');
        await ReportWriterReportsPageHelper.verifyEditPage();

        StepLogger.stepId(3);
        StepLogger.step('Verify user clicks on the Conditionals tab is appearing on the page.');
        await ReportWriterReportsPageHelper.clickOnConditionals();
        StepLogger.verification('Conditionals tab should open.');
        await ReportWriterReportsPageHelper.verifyConditionalsSelectedDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on the  "Add Conditional" button present on the page.');
        await ReportWriterReportsPageHelper.clickOnAddConditionals();
        StepLogger.verification('Conditional Editor page should open.');
        await ReportWriterReportsPageHelper.verifyEditConditionalsFormDisplayed();
    });

    // Jira References - COTRAC-2480
    it('Conditional Editor | Verify UI Type drop down. - [23167543]', async () => {
        // Auto generated by aurea-automation - util on Thu, 11 Apr 2019 11:42:49 GMT

        StepLogger.caseId = 23167543;
        StepLogger.preCondition('C23008176 should pass successfully and user should be on Report Writer Reports page.');
        await HomePage1Helper.navigateToReportWriterPage();

        StepLogger.stepId(1);
        StepLogger.step('Click on Create/Edit link');
        await ReportWriterReportsPageHelper.clickOnCreateAndEdit();
        StepLogger.verification('Create/Edit page should open and  label on the right side of the page "Reports -> Create/Edit"');
        await ReportWriterReportsPageHelper.verifyCreateAndEditFormDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Verify user clicks on Edit button present against any report.');
        await ReportWriterReportsPageHelper.clickOnFirstEdit();
        StepLogger.verification('Report Criteria page should open, heading should be appearing on the right side'
        + 'of the page Report Criteria:  <Report name>');
        await ReportWriterReportsPageHelper.verifyEditPage();

        StepLogger.stepId(3);
        StepLogger.step('Verify user clicks on the Conditionals tab is appearing on the page.');
        await ReportWriterReportsPageHelper.clickOnConditionals();
        StepLogger.verification('Conditionals tab should open.');
        await ReportWriterReportsPageHelper.verifyConditionalsSelectedDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on the  "Add Conditional" button present on the page.');
        await ReportWriterReportsPageHelper.clickOnAddConditionals();
        StepLogger.verification('Conditional Editor page should open.');
        await ReportWriterReportsPageHelper.verifyEditConditionalsFormDisplayed();

        StepLogger.stepId(5);
        StepLogger.step('Verify UI Type drop down is appearing on the Conditional Editor pop up.');
        StepLogger.verification('UI Type drop down should be  appearing on the Conditional Editor pop up.');
        await ReportWriterReportsPageHelper.verifyUiType();

        StepLogger.stepId(6);
        StepLogger.step('Click on the UI Type drop down and verify  values appearing in the UI Type drop down');
        await ReportWriterReportsPageHelper.clickuiTypeDropDown();
        StepLogger.verification(`UI Type drop down  should have following values:
        - Drop down
        - Checkboxes`);
        await ReportWriterReportsPageHelper.verifyUiTypeOptions();
    });

    // Jira References - COTRAC-2480
    it('Conditional Editor | Verify user is able to Add new Value. - [23167544]', async () => {
        // Auto generated by aurea-automation - util on Thu, 11 Apr 2019 12:14:25 GMT

        StepLogger.caseId = 23167544;
        StepLogger.preCondition('C23008176 should pass successfully and user should be on Report Writer Reports page.');
        await HomePage1Helper.navigateToReportWriterPage();

        StepLogger.stepId(1);
        StepLogger.step('Click on Create/Edit link');
        await ReportWriterReportsPageHelper.clickOnCreateAndEdit();
        StepLogger.verification('Create/Edit page should open and  label on the right side of the page "Reports -> Create/Edit"');
        await ReportWriterReportsPageHelper.verifyCreateAndEditFormDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Verify user clicks on Edit button present against any report.');
        await ReportWriterReportsPageHelper.clickOnFirstEdit();
        StepLogger.verification('Report Criteria page should open, heading should be appearing on the right side'
        + 'of the page Report Criteria:  <Report name>');
        await ReportWriterReportsPageHelper.verifyEditPage();

        StepLogger.stepId(3);
        StepLogger.step('Verify user clicks on the Conditionals tab is appearing on the page.');
        await ReportWriterReportsPageHelper.clickOnConditionals();
        StepLogger.verification('Conditionals tab should open.');
        await ReportWriterReportsPageHelper.verifyConditionalsSelectedDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on the  "Add Conditional" button present on the page.');
        await ReportWriterReportsPageHelper.clickOnAddConditionals();
        StepLogger.verification('Conditional Editor page should open.');
        await ReportWriterReportsPageHelper.verifyEditConditionalsFormDisplayed();

        StepLogger.stepId(5);
        StepLogger.step('Verify Values text box is appearing on the page.');
        StepLogger.verification('Value text box is appearing on the Conditional Editor pop up.');
        await ReportWriterReportsPageHelper.verifyValueInput();

        StepLogger.stepId(6);
        StepLogger.step('Verify user enters Value in the text box.');
        const value = PageHelper.getUniqueId();
        await ReportWriterReportsPageHelper.enterValueInput(value);
        StepLogger.verification('Value should be entered.');
        await ReportWriterReportsPageHelper.verifyEnteredValueInput(value);

        StepLogger.stepId(7);
        StepLogger.step('Click on the "Add" button');
        await ReportWriterReportsPageHelper.clickAddButtonConditional();
        StepLogger.verification('Value should be added in the combo box.');
        await ReportWriterReportsPageHelper.verifyValueEntered(value);

        StepLogger.stepId(8);
        StepLogger.step('Add value again in the Value text box and click  on Add button.');
        const nextValue = PageHelper.getUniqueId();
        await ReportWriterReportsPageHelper.enterValueInput(nextValue);
        await ReportWriterReportsPageHelper.clickAddButtonConditional();
        StepLogger.verification('Value should be added in the combo box.');
        await ReportWriterReportsPageHelper.verifyValueEntered(nextValue);
    });

    // Jira References - COTRAC-2480
    it('Conditional Editor | Verify user is able to Remove added value - [23167545]', async () => {
        // Auto generated by aurea-automation - extension on Tue, 16 Apr 2019 11: 18: 44 GMT

        StepLogger.caseId = 23167545;
        StepLogger.preCondition('Execute 23167544');
        const value = PageHelper.getUniqueId();
        const nextValue = PageHelper.getUniqueId();
        await ReportWriterReportsPageHelper.createConditionalFlow(value, nextValue);

        StepLogger.stepId(1);
        StepLogger.step('Verify values are added in to combo box.');
        StepLogger.verification('Values should be added in to combo box.');
        await ReportWriterReportsPageHelper.verifyValueEntered(nextValue);

        StepLogger.stepId(2);
        StepLogger.step('Click on the any of the value present in to combo box.');
        await ReportWriterReportsPageHelper.clickConditionEntered(value);
        StepLogger.verification('Value should be selected.');
        await ReportWriterReportsPageHelper.verifyConditionSelected();

        StepLogger.stepId(3);
        StepLogger.step('Verify "Remove Selected" button appearing under Combo box.');
        StepLogger.verification('"Remove Selected" button should be appearing under Combo box.');
        await ReportWriterReportsPageHelper.verifyRemoveSelected();

        StepLogger.stepId(4);
        StepLogger.step('Click on "Remove Selected" button');
        await ReportWriterReportsPageHelper.clickRemoveSelected();
        StepLogger.verification('Selected value should be removed from combo box.');
        await ReportWriterReportsPageHelper.verifyValueRemoved(value);
    });

    // Jira References - COTRAC-2480
    it('Conditional Editor | Verify user is able to Save Condition. - [23167546]', async () => {
        // Auto generated by aurea-automation - extension on Thu, 18 Apr 2019 04: 38: 18 GMT

        StepLogger.caseId = 23167546;
        StepLogger.preCondition('C23008176 should pass successfully and user should be on Report Writer Reports page.');
        await HomePage1Helper.navigateToReportWriterPage();

        StepLogger.stepId(1);
        StepLogger.step('Click on Create/Edit link');
        await ReportWriterReportsPageHelper.clickOnCreateAndEdit();
        StepLogger.verification('Create/Edit page should open and  label on the right side of the page "Reports -> Create/Edit"');
        await ReportWriterReportsPageHelper.verifyCreateAndEditFormDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Verify user clicks on Edit button present against any report.');
        await ReportWriterReportsPageHelper.clickOnFirstEdit();
        StepLogger.verification('Report Criteria page should open, heading should be appearing on the right side'
        + 'of the page Report Criteria:  <Report name>');
        await ReportWriterReportsPageHelper.verifyEditPage();

        StepLogger.stepId(3);
        StepLogger.step('Verify user clicks on the Conditionals tab is appearing on the page.');
        await ReportWriterReportsPageHelper.clickOnConditionals();
        StepLogger.verification('Conditionals tab should open.');
        await ReportWriterReportsPageHelper.verifyConditionalsSelectedDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on the  "Add Conditional" button present on the page.');
        await ReportWriterReportsPageHelper.clickOnAddConditionals();
        StepLogger.verification('Conditional Editor page should open.');
        await ReportWriterReportsPageHelper.verifyEditConditionalsFormDisplayed();

        StepLogger.stepId(5);
        StepLogger.step('Verify Values text box is appearing on the page.');
        StepLogger.verification('Value text box is appearing on the Conditional Editor pop up.');
        await ReportWriterReportsPageHelper.verifyValueInput();

        StepLogger.stepId(6);
        StepLogger.step('Verify user enters Value in the text box.');
        const value = PageHelper.getUniqueId();
        await ReportWriterReportsPageHelper.enterValueInput(value);
        StepLogger.verification('Value should be entered.');
        await ReportWriterReportsPageHelper.verifyEnteredValueInput(value);

        StepLogger.stepId(7);
        StepLogger.step('Click on the "Add" button');
        await ReportWriterReportsPageHelper.clickAddButtonConditional();
        StepLogger.verification('Value should be added in the combo box.');
        await ReportWriterReportsPageHelper.verifyValueEntered(value);

        StepLogger.stepId(8);
        StepLogger.step('Enter text in Label field');
        const label = PageHelper.getUniqueId();
        await ReportWriterReportsPageHelper.enterLabelInput(label);
        StepLogger.verification('Label field should be entered.');
        await ReportWriterReportsPageHelper.verifyEnteredLabelInput(label);

        StepLogger.stepId(9);
        StepLogger.step('Click on OK button');
        await ReportWriterReportsPageHelper.clickOkButton();
        StepLogger.verification('Conditional Editor pop up should close and record should be added in to the table present on Conditional page');
        await ReportWriterReportsPageHelper.verifyConditionCreated(value);
    });

    // Jira References - COTRAC-2480
    it('Conditional Editor | Verify user is able to set order of added value. - [23167548]', async () => {
        // Auto generated by aurea-automation - extension on Thu, 18 Apr 2019 07: 42: 46 GMT

        StepLogger.caseId = 23167548;
        StepLogger.preCondition('C23008176 should pass successfully and user should be on Report Writer Reports page.');
        await HomePage1Helper.navigateToReportWriterPage();

        StepLogger.stepId(1);
        StepLogger.step('Click on Create/Edit link');
        await ReportWriterReportsPageHelper.clickOnCreateAndEdit();
        StepLogger.verification('Create/Edit page should open and  label on the right side of the page "Reports -> Create/Edit"');
        await ReportWriterReportsPageHelper.verifyCreateAndEditFormDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Verify user clicks on Edit button present against any report.');
        await ReportWriterReportsPageHelper.clickOnFirstEdit();
        StepLogger.verification('Report Criteria page should open, heading should be appearing on the right side'
        + 'of the page Report Criteria:  <Report name>');
        await ReportWriterReportsPageHelper.verifyEditPage();

        StepLogger.stepId(3);
        StepLogger.step('Verify user clicks on the Conditionals tab is appearing on the page.');
        await ReportWriterReportsPageHelper.clickOnConditionals();
        StepLogger.verification('Conditionals tab should open.');
        await ReportWriterReportsPageHelper.verifyConditionalsSelectedDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on the  "Add Conditional" button present on the page.');
        await ReportWriterReportsPageHelper.clickOnAddConditionals();
        StepLogger.verification('Conditional Editor page should open.');
        await ReportWriterReportsPageHelper.verifyEditConditionalsFormDisplayed();

        StepLogger.stepId(5);
        StepLogger.step('Verify Values text box is appearing on the page.');
        StepLogger.verification('Value text box is appearing on the Conditional Editor pop up.');
        await ReportWriterReportsPageHelper.verifyValueInput();

        StepLogger.stepId(6);
        StepLogger.step('Verify user enters Value in the text box.');
        const value = PageHelper.getUniqueId();
        await ReportWriterReportsPageHelper.enterValueInput(value);
        StepLogger.verification('Value should be entered.');
        await ReportWriterReportsPageHelper.verifyEnteredValueInput(value);

        StepLogger.stepId(7);
        StepLogger.step('Click on the "Add" button');
        await ReportWriterReportsPageHelper.clickAddButtonConditional();
        StepLogger.verification('Value should be added in the combo box.');
        await ReportWriterReportsPageHelper.verifyValueEntered(value);

        StepLogger.stepId(8);
        StepLogger.step('Add value again in the Value text box and click  on Add button.');
        const nextValue = PageHelper.getUniqueId();
        await ReportWriterReportsPageHelper.enterValueInput(nextValue);
        await ReportWriterReportsPageHelper.clickAddButtonConditional();
        StepLogger.verification('Value should be added in the combo box.');
        await ReportWriterReportsPageHelper.verifyValueEntered(nextValue);

        StepLogger.stepId(9);
        StepLogger.step('Select any value present at the bottom in the combo box.');
        await ReportWriterReportsPageHelper.clickLastValue();
        StepLogger.verification('Value should be highlighted.');
        await ReportWriterReportsPageHelper.verifyConditionSelected();

        StepLogger.stepId(10);
        StepLogger.step('Click the top button present next to Combo box.');
        await ReportWriterReportsPageHelper.clickTopArrow();
        StepLogger.verification('Highlighted record should move top in the order.');
        await ReportWriterReportsPageHelper.verifyValueShiftedTop(nextValue);
    });

    // Jira References - COTRAC-2480
    it('Verify user clicks on Preview button and verify Preview pop up . - [23167533]', async () => {
        // Auto generated by aurea-automation - util on Mon, 15 Apr 2019 04:18:03 GMT

        StepLogger.caseId = 23167533;
        StepLogger.preCondition('C23008176 should pass successfully and user should be on Report Writer Reports page.');
        await HomePage1Helper.navigateToReportWriterPage();

        StepLogger.stepId(1);
        StepLogger.step('Click on Create/Edit link');
        await ReportWriterReportsPageHelper.clickOnCreateAndEdit();
        StepLogger.verification('Create/Edit page should open and  label on the right side of the page "Reports -> Create/Edit"');
        await ReportWriterReportsPageHelper.verifyCreateAndEditFormDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Verify user clicks on Edit button present against any report.');
        await ReportWriterReportsPageHelper.clickOnFirstEdit();
        StepLogger.verification('Report Criteria page should open, heading should be appearing on the right side'
        + 'of the page Report Criteria:  <Report name>');
        await ReportWriterReportsPageHelper.verifyEditPage();

        StepLogger.stepId(3);
        StepLogger.step('Verify Preview button is appearing at the right side of the page.');
        StepLogger.verification('Preview buttons (down arrow)  should be appearing  at the right side of the page.');
        await ReportWriterReportsPageHelper.verifyPreviewbutton();

        StepLogger.stepId(4);
        StepLogger.step('Click on the Preview button.');
        await ReportWriterReportsPageHelper.clickOnPreviewbutton();
        StepLogger.verification(`Pop up should open with following buttons:
        - Run This Report
        - Close`);
        await ReportWriterReportsPageHelper.verifyRunAndCloseDisplayed();
    });

    // Jira References - COTRAC-2480
    it('Verify user clicks on Run Report button. - [23167536]', async () => {
        // Auto generated by aurea-automation - extension on Thu, 18 Apr 2019 10: 23: 45 GMT

        StepLogger.caseId = 23167536;
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
    });
});

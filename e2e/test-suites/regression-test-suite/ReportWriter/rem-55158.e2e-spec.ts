import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { HomePage1Helper } from '../../../page-objects/pages/home-page/home-page1.helper';
import { LoginPageHelper } from '../../../page-objects/pages/login-page/login-page.helper';
import { ReportWriterReportsPageHelper } from '../../../page-objects/pages/report-writer-reports-page/report-writer-reports-page.helper';
import { YearQuartersPageConstants } from '../../../page-objects/pages/report-writer-reports-page/year-quarters-page/year-quarters-page.constants';
import { YearQuartersPageHelper } from '../../../page-objects/pages/report-writer-reports-page/year-quarters-page/year-quarters-page.helper';
import { SuiteNames } from '../../helpers/suite-names';

describe(SuiteNames.regressionSuite, () => {
    let loginPageHelper: LoginPageHelper;

    beforeAll(async () => {
        loginPageHelper = LoginPageHelper.getInstance();
        await PageHelper.maximiseBrowser();
    });

    beforeAll(async () => {
        await loginPageHelper.goTo();
        await LoginPageHelper.loginAsAdmin();
    });

    // Jira References - COTRAC-2414
    it('To verify if user is able to navigate to "Report Writer Reports" page - [23002053]', async () => {
        // Auto generated by aurea-automation - util on Mon, 17 Jun 2019 16:40:12 GMT

        StepLogger.caseId = 23002053;
        StepLogger.stepId(1);
        StepLogger.step('Click on Reports menu on left side navigation pane of the screen.');
        await HomePage1Helper.clickReportsLink();
        StepLogger.verification('The Reports menu should expand.');
        await HomePage1Helper.verifyReportExpand();

        StepLogger.stepId(2);
        StepLogger.step('Check the Reports menu option list.');
        // Step Handled in verification
        StepLogger.verification(`The Reports menu should have below options:
		Browse
		Custom Reports
		Report Writer
		Pending Reports`);
        await HomePage1Helper.verifyReportItemDisplay();

        StepLogger.stepId(3);
        StepLogger.step('Click "Report Writer"');
        await HomePage1Helper.navigateToReportWriterPage();
        StepLogger.verification('"Report Writer Reports" page is displayed in right pane');
        await ReportWriterReportsPageHelper.verifyReportWriterReportsPageIsDisplayed();
    });

    // Jira References - COTRAC-2413
    it('To verify if user is able to navigate to "Resources -> Yearly Quarters" on "Report Writer Reports" page - [23002060]', async () => {
        // Auto generated by aurea-automation - util on Mon, 17 Jun 2019 11:40:44 GMT

        StepLogger.caseId = 23002060;
        StepLogger.stepId(1);
        StepLogger.step('Navigate to Reports -> Report Writer');
        await HomePage1Helper.navigateToReportWriterPage();
        StepLogger.verification('"Report Writer Reports" page is displayed in right pane');
        await ReportWriterReportsPageHelper.verifyReportWriterReportsPageIsDisplayed();

        StepLogger.stepId(2);
        // Step Handled in verification
        StepLogger.step('Verify if "Yearly Quarters" is displayed under "Resources" in left pane');
        StepLogger.verification('"Yearly Quarters" should be present');
        await ReportWriterReportsPageHelper.verifyLinkUnderResource();

        StepLogger.stepId(3);
        StepLogger.step('Click Yearly Quarters');
        await YearQuartersPageHelper.clickYearlyQuarter();
        StepLogger.verification('User is redirected to Resources -> Yearly Quarters in right pane');
        await YearQuartersPageHelper.verifyYearlyQuarterDisplaced();
    });

    // Jira References - COTRAC-2414
    it('To verify contents of "Resources -> Yearly Quarters" on "Report Writer Reports" page - [23002055]', async () => {
        // Auto generated by aurea-automation - util on Mon, 17 Jun 2019 16:52:46 GMT

        StepLogger.caseId = 23002055;
        StepLogger.stepId(1);
        StepLogger.step('Verify the headers of table displayed on page');
        // Step Handled in verification
        StepLogger.verification(`Below are the headers:
		Action
        Year
        Quarter
        Begin
        End`);
        await YearQuartersPageHelper.verifyYearColumnReporterPage();

        StepLogger.stepId(2);
        StepLogger.step('Verify the buttons displayed below the table');
        // Step Handled in verification
        StepLogger.verification('"New Quarter" and "Duplicate Year" are the buttons displayed');
        await YearQuartersPageHelper.verifyTableButtons();

        StepLogger.stepId(3);
        StepLogger.step('Verify if pagination and page size drop-down are present');
        await YearQuartersPageHelper.verifyPaginationDisplayed();
        StepLogger.verification('Pagination and page size drop-down should be present');
        await YearQuartersPageHelper.verifyPageSizeDisplayed();
    });

    // Jira References - COTRAC-2414
    it('To verify if "Quarter Editor" dialog box is displayed when clicked on edit icon against a quarter entry in grid - [23002058]', async () => {
        // Auto generated by aurea-automation - util on Mon, 17 Jun 2019 17:45:42 GMT

        StepLogger.caseId = 23002058;
        StepLogger.stepId(1);
        StepLogger.step('Click "Yearly Quarters" under Resources');
        await YearQuartersPageHelper.clickYearlyQuarter();
        StepLogger.verification('Resources -> Yearly Quarters is displayed');
        await YearQuartersPageHelper.verifyYearlyQuarterDisplaced();

        StepLogger.stepId(2);
        StepLogger.step('Verify if "Edit" icon is present against the quarter entries in grid');
        // Step Handled in verification
        StepLogger.verification('Edit icon should be present');
        await YearQuartersPageHelper.verifyEditDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click edit icon');
        await YearQuartersPageHelper.clickEdit();
        StepLogger.verification('"Quarter Editor" window is displayed below grid');
        await YearQuartersPageHelper.verifyEditFormisplayed();
    });

    // Jira References - COTRAC-2414
    it('To verify if "Quarter Editor" dialog box is closed and no changes are saved when clicked on Cancel button - [23002070]', async () => {
        // Auto generated by aurea-automation - util on Tue, 18 Jun 2019 06:59:31 GMT

        StepLogger.caseId = 23002070;
        StepLogger.stepId(1);
        StepLogger.step('Verify if Year field is editable');
        // Step Handled in verification
        StepLogger.verification('Year field should be editable');
        await YearQuartersPageHelper.verifyEditFormisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Verify if user is able to select a different value from Quarter drop-down');
        await YearQuartersPageHelper.verifyQuarterDropDisplayed();
        StepLogger.verification('User should be able to select different value from quarter drop-down');
        await YearQuartersPageHelper.selectValueFromQuarterDrop();

        StepLogger.stepId(3);
        StepLogger.step('Verify if user is able to change Begin and End dates');
        await YearQuartersPageHelper.verifyStartDateDisplayed();
        StepLogger.verification('Use should be able to edit Begin and End dates');
        await YearQuartersPageHelper.setStartAndEndDate();

        StepLogger.stepId(4);
        StepLogger.step('Click Cancel button');
        await YearQuartersPageHelper.clickCancelButton();
        StepLogger.verification('Quarter Editor window should be closed and quarter should not be edited');
        await YearQuartersPageHelper.verifyEditFormNotDisplayed();
    });

    // Jira References - COTRAC-2414
    it('To verify if user is able to edit Year of an existing Quarter - [23002072]', async () => {
        // Auto generated by aurea-automation - util on Wed, 19 Jun 2019 07:12:16 GMT

        StepLogger.caseId = 23002072;
        StepLogger.stepId(1);
        StepLogger.step('Click Edit icon against the entry of quarter to be edited');
        await YearQuartersPageHelper.clickEdit();
        StepLogger.verification('"Quarter Editor" dialog box is displayed below grid');
        await YearQuartersPageHelper.verifyEditFormisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Edit the Year field');
        await YearQuartersPageHelper.verifyYearFieldDisplayed();
        StepLogger.verification('User should be able to edit Year field');
        await YearQuartersPageHelper.setYearField();

        StepLogger.stepId(3);
        StepLogger.step('Click OK button');
        await YearQuartersPageHelper.clickOkButton();
        StepLogger.verification('"Quarter Editor" dialog box is closed and Year change is saved');
        await YearQuartersPageHelper.verifyEditFormNotDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Verify if changed Year is displayed in grid');
        // Handled in Verification
        StepLogger.verification('Changed year should be displayed in grid');
        await YearQuartersPageHelper.verifyYearUpdated();
    });

    // Jira References - COTRAC-2414
    it('To verify if user is able to edit Quarter of an existing Quarter - [23002073]', async () => {
        // Auto generated by aurea-automation - util on Wed, 19 Jun 2019 08:09:30 GMT

        StepLogger.caseId = 23002073;
        StepLogger.stepId(1);
        StepLogger.step('Click Edit icon against the entry of quarter to be edited');
        await YearQuartersPageHelper.clickEdit();
        StepLogger.verification('"Quarter Editor" dialog box is displayed below grid');
        await YearQuartersPageHelper.verifyEditFormisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Select different quarter value from drop-down');
        await YearQuartersPageHelper.verifyQuarterDropDisplayed();
        StepLogger.verification('User should be able to select different quarter value from drop-down');
        await YearQuartersPageHelper.selectValueFromQuarterDrop();

        StepLogger.stepId(3);
        StepLogger.step('Click OK button');
        await YearQuartersPageHelper.clickOkButton();
        StepLogger.verification('"Quarter Editor" dialog box is closed and quarter change is saved');
        await YearQuartersPageHelper.verifyEditFormNotDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Verify if changed Quarter is displayed in grid');
        // Handled in Verification
        StepLogger.verification('Changed Quarter should be displayed in grid');
        await YearQuartersPageHelper.verifyQuarterUpdated(YearQuartersPageConstants.yearTableHeader.Q2);
    });

    // Jira References - COTRAC-2414
    it('To verify if user is able to edit Begin (date) of an existing Quarter - [23002074]', async () => {
        // Auto generated by aurea-automation - util on Wed, 19 Jun 2019 08:26:55 GMT

        StepLogger.caseId = 23002074;
        StepLogger.stepId(1);
        StepLogger.step('Click Edit icon against the entry of quarter to be edited');
        await YearQuartersPageHelper.clickEdit();
        StepLogger.verification('"Quarter Editor" dialog box is displayed below grid');
        await YearQuartersPageHelper.verifyEditFormisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Edit the Begin field');
        await YearQuartersPageHelper.verifyStartDateDisplayed();
        StepLogger.verification('User should be able to edit Begin field');
        await YearQuartersPageHelper.setBeginDate();

        StepLogger.stepId(3);
        StepLogger.step('Click OK button');
        await YearQuartersPageHelper.clickOkButton();
        StepLogger.verification('"Quarter Editor" dialog box is closed and Begin change is saved');
        await YearQuartersPageHelper.verifyEditFormNotDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Verify if changed Begin date is displayed in grid');
        // Handled in Verification
        StepLogger.verification('Changed begin date should be displayed in grid');
        await YearQuartersPageHelper.verifyBeginDateSet();
    });

    // Jira References - COTRAC-2414
    it('To verify if user is able to edit End (date) of an existing Quarter - [23002075]', async () => {
        // Auto generated by aurea-automation - util on Wed, 19 Jun 2019 08:43:42 GMT

        StepLogger.caseId = 23002075;
        StepLogger.stepId(1);
        StepLogger.step('Click Edit icon against the entry of quarter to be edited');
        await YearQuartersPageHelper.clickEdit();
        StepLogger.verification('"Quarter Editor" dialog box is displayed below grid');
        await YearQuartersPageHelper.verifyEditFormisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Edit the End field');
        await YearQuartersPageHelper.verifyStartDateDisplayed();
        StepLogger.verification('User should be able to edit End field');
        await YearQuartersPageHelper.setEndDate();

        StepLogger.stepId(3);
        StepLogger.step('Click OK button');
        await YearQuartersPageHelper.clickOkButton();
        StepLogger.verification('"Quarter Editor" dialog box is closed and End date change is saved');
        await YearQuartersPageHelper.verifyEditFormNotDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Verify if changed End date is displayed in grid');
        // Handled in Verification
        StepLogger.verification('Changed end date should be displayed in grid');
        await YearQuartersPageHelper.verifyEndDateSet();
    });

    // Jira References - COTRAC-2414
    it('To verify if confirmation message is displayed when clicked in delete icon against an quarter entry in grid - [23002077]', async () => {
        // Auto generated by aurea-automation - util on Wed, 19 Jun 2019 08:54:38 GMT

        StepLogger.caseId = 23002077;
        StepLogger.stepId(1);
        StepLogger.step('Click "Yearly Quarters" under Resources');
        await YearQuartersPageHelper.clickYearlyQuarter();
        StepLogger.verification('Resources -> Yearly Quarters is displayed');
        await YearQuartersPageHelper.verifyYearlyQuarterDisplaced();

        StepLogger.stepId(2);
        StepLogger.step('Verify if "Delete" icon is present against the quarter entries in grid');
        // Handled in Verification
        StepLogger.verification('Delete icon should be present');
        await YearQuartersPageHelper.verifyDeleteIconDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click delete icon');
        await YearQuartersPageHelper.clickDeleteIcon();
        StepLogger.verification('Confirmation message pop-up is displayed below grid');
        await YearQuartersPageHelper.verifyDeletePopUp();
        await YearQuartersPageHelper.cancelDeleteMessage();
    });

    // Jira References - COTRAC-2414
    it('To verify if confirmation message to delete quarter is closed and quarter is not deleted when clicked on Cancel button - [23002079]', async () => {
        // Auto generated by aurea-automation - util on Wed, 19 Jun 2019 09:32:54 GMT

        StepLogger.caseId = 23002079;
        StepLogger.stepId(1);
        StepLogger.step('Verify if "Delete" icon is present against the quarter entries in grid');
        // Handled in Verification
        StepLogger.verification('Delete icon should be present');
        await YearQuartersPageHelper.verifyDeleteIconDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click delete icon');
        await YearQuartersPageHelper.clickDeleteIcon();
        StepLogger.verification('Confirmation message pop-up is displayed below grid');
        await YearQuartersPageHelper.verifyDeletePopUp();

        StepLogger.stepId(3);
        StepLogger.step('Click Cancel button');
        await YearQuartersPageHelper.cancelDeleteMessage();
        StepLogger.verification('Confirmation message pop-up is closed and quarter entry is not deleted');
        await YearQuartersPageHelper.verifyMessageDismissed();

        StepLogger.stepId(4);
        StepLogger.step('Verify if Quarter is still present in grid');
        // Handled in Verification
        StepLogger.verification('Quarter should be present in grid');
        await YearQuartersPageHelper.verifyQuarterUpdated(YearQuartersPageConstants.yearTableHeader.Q2);
    });

    // Jira References - COTRAC-2414
    it('To verify if user is able to successfully delete an quarter from grid - [23002081]', async () => {
        // Auto generated by aurea-automation - util on Wed, 19 Jun 2019 10:08:47 GMT

        StepLogger.caseId = 23002081;
        StepLogger.stepId(1);
        StepLogger.step('Verify if "Delete" icon is present against the quarter entries in grid');
        // Handled in Verification
        StepLogger.verification('Delete icon should be present');
        await YearQuartersPageHelper.verifyDeleteIconDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click delete icon');
        await YearQuartersPageHelper.clickDeleteIcon();
        StepLogger.verification('Confirmation message pop-up is displayed below grid');
        await YearQuartersPageHelper.verifyDeletePopUp();

        StepLogger.stepId(3);
        StepLogger.step('Click OK button');
        await YearQuartersPageHelper.acceptDeleteMessage();
        StepLogger.verification('Confirmation message pop-up is closed and quarter entry is deleted');
        await YearQuartersPageHelper.verifyMessageDismissed();

        StepLogger.stepId(4);
        StepLogger.step('Verify if Quarter is still present in grid');
        // Handled in Verification
        StepLogger.verification('Quarter should be present in grid');
        await YearQuartersPageHelper.verifyQuarterUpdated(YearQuartersPageConstants.yearTableHeader.Q2);

        StepLogger.stepId(5);
        StepLogger.step('Verify if number of items displayed on pagination tab at right bottom corner of grid is changed');
        // Handled in Verification
        StepLogger.verification('Number of items should be reduced by 1');
        await YearQuartersPageHelper.verifyCountIsDeceased();
    });
});

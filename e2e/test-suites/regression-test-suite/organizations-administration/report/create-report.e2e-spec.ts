import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { HomePage } from '../../../../page-objects/pages/home-page/home-page.po';
import { HomePage1Helper } from '../../../../page-objects/pages/home-page/home-page1.helper';
import { LoginPageHelper } from '../../../../page-objects/pages/login-page/login-page.helper';
import { ReportWriterReportsPageHelper } from '../../../../page-objects/pages/report-writer-reports-page/report-writer-reports-page.helper';
import { ReportWriterReportsPage } from '../../../../page-objects/pages/report-writer-reports-page/report-writer-reports-page.po';
import { SuiteNames } from '../../../helpers/suite-names';

const eNames = ReportWriterReportsPage.elements;
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

    // Jira References - COTRAC-2458
    it('To verify that user can access the sharing tab. - [23164383]', async () => {
        // Auto generated by aurea-automation - util on Tue, 09 Apr 2019 07:21:42 GMT

        StepLogger.caseId = 23164383;

        StepLogger.stepId(1);
        StepLogger.step('Go to Reports -> Report writer');
        await HomePage1Helper.navigateToReportWriterPage();
        StepLogger.verification('Report writer page should be displayed.');
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('From the list of report displayed click the edit button displayed besides the report user wants to edit.');
        await ReportWriterReportsPageHelper.clickOnFirstEdit();
        StepLogger.verification('General tab of Editable report should be displayed.');
        await ReportWriterReportsPageHelper.verifySharingTab();

        StepLogger.stepId(3);
        StepLogger.step('Go to tab "Sharing".');
        await ReportWriterReportsPageHelper.clickOnSharing();
        StepLogger.verification('Sharing tab should be displayed.');
        await ReportWriterReportsPageHelper.verifySharingTabOpens();
    });

    // Jira References - COTRAC-2458
    it('To verify the options available on sharing tab. - [23164386]', async () => {
        // Auto generated by aurea-automation - util on Tue, 09 Apr 2019 07:51:59 GMT

        StepLogger.caseId = 23164386;
        StepLogger.stepId(1);
        StepLogger.step('Go to Reports -> Report writer');
        await HomePage1Helper.navigateToReportWriterPage();
        StepLogger.verification('Report writer page should be displayed.');
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('From the list of report displayed click the edit button displayed besides the report user wants to edit.');
        await ReportWriterReportsPageHelper.clickOnFirstEdit();
        StepLogger.verification('General tab of Editable report should be displayed.');
        await ReportWriterReportsPageHelper.verifySharingTab();

        StepLogger.stepId(3);
        StepLogger.step('Go to tab "Sharing".');
        await ReportWriterReportsPageHelper.clickOnSharing();
        StepLogger.verification(`The following items should be displayed:
        1. Groups tab : List of groups with Edit and export check boxes.
        2. Users tab :  List of users with Edit and export check boxes.`);
        await ReportWriterReportsPageHelper.verifySharingTabOpens();
    });

    // Jira References - COTRAC-2458
    it('To verify user can select 1 group and share. - [23164388]', async () => {
        // Auto generated by aurea-automation - util on Tue, 09 Apr 2019 08:11:46 GMT

        StepLogger.caseId = 23164388;
        StepLogger.stepId(1);
        StepLogger.step('Go to Reports -> Report writer.');
        await HomePage1Helper.navigateToReportWriterPage();
        StepLogger.verification('Report writer page should be displayed.');
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('From the list of report displayed click the edit button displayed besides the report user wants to edit.');
        await ReportWriterReportsPageHelper.clickOnFirstEdit();
        StepLogger.verification('General tab of Editable report should be displayed.');
        await ReportWriterReportsPageHelper.verifySharingTab();

        StepLogger.stepId(3);
        StepLogger.step('Go to tab "Sharing".');
        await ReportWriterReportsPageHelper.clickOnSharing();
        StepLogger.verification('Sharing tab should be displayed.');
        await ReportWriterReportsPageHelper.verifySharingTabOpens();

        StepLogger.stepId(4);
        StepLogger.step('Select 1 group from the list of groups displayed.');
        await ReportWriterReportsPageHelper.selectCheckBoxGroup();
        StepLogger.verification(`1. Group should be selected.
        2. "Sharing saved" message should be displayed.`);
        await ReportWriterReportsPageHelper.verifyCheckboxChecked(eNames.selectGroupCheckbox);
        await ReportWriterReportsPageHelper.verifySavedMessage();
    });

    // Jira References - COTRAC-2458
    it('To verify user can select all group and share. - [23164392]', async () => {
        // Auto generated by aurea-automation - util on Tue, 09 Apr 2019 09:02:34 GMT

        StepLogger.caseId = 23164392;
        StepLogger.stepId(1);
        StepLogger.step('Go to Reports -> Report writer.');
        await HomePage1Helper.navigateToReportWriterPage();
        StepLogger.verification('Report writer page should be displayed.');
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('From the list of report displayed click the edit button displayed besides the report user wants to edit.');
        await ReportWriterReportsPageHelper.clickOnFirstEdit();
        StepLogger.verification('General tab of Editable report should be displayed.');
        await ReportWriterReportsPageHelper.verifySharingTab();

        StepLogger.stepId(3);
        StepLogger.step('Go to tab "Sharing".');
        await ReportWriterReportsPageHelper.clickOnSharing();
        StepLogger.verification('Sharing tab should be displayed.');
        await ReportWriterReportsPageHelper.verifySharingTabOpens();

        StepLogger.stepId(4);
        StepLogger.step('Select all the groups from the list of groups displayed.');
        await ReportWriterReportsPageHelper.selectAllCheckBoxGroup();
        StepLogger.verification(`1. Groups should be selected.
        2. "Sharing saved" message should be displayed.`);
        await ReportWriterReportsPageHelper.verifyCheckboxChecked(eNames.selectGroupCheckboxAll);
        await ReportWriterReportsPageHelper.verifySavedMessage();
    });

    // Jira References - COTRAC-2458
    it('To verify user can select 1 group for edit. - [23164393]', async () => {
        // Auto generated by aurea-automation - util on Tue, 09 Apr 2019 09:30:21 GMT

        StepLogger.caseId = 23164393;
        StepLogger.stepId(1);
        StepLogger.step('Go to Reports -> Report writer.');
        await HomePage1Helper.navigateToReportWriterPage();
        StepLogger.verification('Report writer page should be displayed.');
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('From the list of report displayed click the edit button displayed besides the report user wants to edit.');
        await ReportWriterReportsPageHelper.clickOnFirstEdit();
        StepLogger.verification('General tab of Editable report should be displayed.');
        await ReportWriterReportsPageHelper.verifySharingTab();

        StepLogger.stepId(3);
        StepLogger.step('Go to tab "Sharing".');
        await ReportWriterReportsPageHelper.clickOnSharing();
        StepLogger.verification('Sharing tab should be displayed.');
        await ReportWriterReportsPageHelper.verifySharingTabOpens();

        StepLogger.stepId(4);
        StepLogger.step('Select "Edit" checkbox for 1 group.');
        await ReportWriterReportsPageHelper.selectEditCheckBoxGroup();
        StepLogger.verification(`1. Edit checkbox should be selected.
        2. "Sharing saved" message should be displayed.`);
        await ReportWriterReportsPageHelper.verifyCheckboxChecked(eNames.editCheckbox);
        await ReportWriterReportsPageHelper.verifySavedMessage();
    });

    // Jira References - COTRAC-2458
    it('To verify user can select 1 group for export. - [23164394]', async () => {
        // Auto generated by aurea-automation - util on Tue, 09 Apr 2019 11:34:28 GMT

        StepLogger.caseId = 23164394;
        StepLogger.stepId(1);
        StepLogger.step('Go to Reports -> Report writer.');
        await HomePage1Helper.navigateToReportWriterPage();
        StepLogger.verification('Report writer page should be displayed.');
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('From the list of report displayed click the edit button displayed besides the report user wants to edit.');
        await ReportWriterReportsPageHelper.clickOnFirstEdit();
        StepLogger.verification('General tab of Editable report should be displayed.');
        await ReportWriterReportsPageHelper.verifySharingTab();

        StepLogger.stepId(3);
        StepLogger.step('Go to tab "Sharing".');
        await ReportWriterReportsPageHelper.clickOnSharing();
        StepLogger.verification('Sharing tab should be displayed.');
        await ReportWriterReportsPageHelper.verifySharingTabOpens();

        StepLogger.stepId(4);
        StepLogger.step('Select "Export" checkbox for 1 group.');
        await ReportWriterReportsPageHelper.selectExportCheckBoxGroup();
        StepLogger.verification(`1. Export should be selected.
        2. "Sharing saved" message should be displayed.`);
        await ReportWriterReportsPageHelper.verifySavedMessage();
    });

    // Jira References - COTRAC-2458
    it('To verify user can select multiple group and share. - [23164389]', async () => {
        // Auto generated by aurea-automation - util on Tue, 09 Apr 2019 08:38:28 GMT

        StepLogger.caseId = 23164389;
        StepLogger.stepId(1);
        StepLogger.step('Go to Reports -> Report writer.');
        await HomePage1Helper.navigateToReportWriterPage();
        StepLogger.verification('Report writer page should be displayed.');
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('From the list of report displayed click the edit button displayed besides the report user wants to edit.');
        await ReportWriterReportsPageHelper.clickOnFirstEdit();
        StepLogger.verification('General tab of Editable report should be displayed.');
        await ReportWriterReportsPageHelper.verifySharingTab();

        StepLogger.stepId(3);
        StepLogger.step('Go to tab "Sharing".');
        await ReportWriterReportsPageHelper.clickOnSharing();
        StepLogger.verification('Sharing tab should be displayed.');
        await ReportWriterReportsPageHelper.verifySharingTabOpens();

        StepLogger.stepId(4);
        StepLogger.step('Select multiple groups from the list of groups displayed.');
        await ReportWriterReportsPageHelper.selectAllCheckBoxGroup();
        StepLogger.verification(`1. Groups should be selected.
        2. "Sharing saved" message should be displayed.`);
        await ReportWriterReportsPageHelper.verifyCheckboxChecked(eNames.selectGroupCheckboxAll);
        await ReportWriterReportsPageHelper.verifySavedMessage();
    });

    // Jira References - COTRAC-2458
    it('To verify user can select multiple groups for export and edit. - [23164396]', async () => {
        // Auto generated by aurea-automation - util on Tue, 09 Apr 2019 11:43:40 GMT

        StepLogger.caseId = 23164396;
        StepLogger.stepId(1);
        StepLogger.step('Go to Reports -> Report writer.');
        await HomePage1Helper.navigateToReportWriterPage();
        StepLogger.verification('Report writer page should be displayed.');
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('From the list of report displayed click the edit button displayed besides the report user wants to edit.');
        await ReportWriterReportsPageHelper.clickOnFirstEdit();
        StepLogger.verification('General tab of Editable report should be displayed.');
        await ReportWriterReportsPageHelper.verifySharingTab();

        StepLogger.stepId(3);
        StepLogger.step('Go to tab "Sharing".');
        await ReportWriterReportsPageHelper.clickOnSharing();
        StepLogger.verification('Sharing tab should be displayed.');
        await ReportWriterReportsPageHelper.verifySharingTabOpens();

        StepLogger.stepId(4);
        StepLogger.step('Select "Export" and "Edit" checkbox for multiple groups.');
        await ReportWriterReportsPageHelper.selectExportCheckBoxGroup();
        await ReportWriterReportsPageHelper.selectEditCheckBoxGroup();
        StepLogger.verification(`1. Groups should be selected.
        2. "Sharing saved" message should be displayed.`);
        await ReportWriterReportsPageHelper.verifyExportEditSelected();
        await ReportWriterReportsPageHelper.verifySavedMessage();
    });

    // Jira References - COTRAC-2458
    it('To verify user can de select all groups for sharing,export and edit. - [23164398]', async () => {
        // Auto generated by aurea-automation - util on Tue, 09 Apr 2019 16:04:46 GMT

        StepLogger.caseId = 23164398;
        StepLogger.stepId(1);
        StepLogger.step('Go to Reports -> Report writer.');
        await HomePage1Helper.navigateToReportWriterPage();
        StepLogger.verification('Report writer page should be displayed.');
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('From the list of report displayed click the edit button displayed besides the report user wants to edit.');
        await ReportWriterReportsPageHelper.clickOnFirstEdit();
        StepLogger.verification('General tab of Editable report should be displayed.');
        await ReportWriterReportsPageHelper.verifySharingTab();

        StepLogger.stepId(3);
        StepLogger.step('Go to tab "Sharing".');
        await ReportWriterReportsPageHelper.clickOnSharing();
        StepLogger.verification('Sharing tab should be displayed.');
        await ReportWriterReportsPageHelper.verifySharingTabOpens();

        StepLogger.stepId(4);
        StepLogger.step('Select "Export" and "Edit" checkbox for all the groups.');
        await ReportWriterReportsPageHelper.selectExportCheckBoxGroup();
        await ReportWriterReportsPageHelper.selectEditCheckBoxGroup();
        StepLogger.verification(`1. All the check boxes should be checked.
        2. "Sharing saved" message should be displayed.`);
        await ReportWriterReportsPageHelper.verifyExportEditSelected();

        StepLogger.stepId(5);
        StepLogger.step('De select all the groups by clicking the top most left side check box.');
        await ReportWriterReportsPageHelper.deselectExportCheckBoxGroup();
        await ReportWriterReportsPageHelper.deselectEditCheckBoxGroup();
        StepLogger.verification(`1. All the groups should be un checked.
        2. "Sharing saved" message should be displayed.`);
        await ReportWriterReportsPageHelper.verifyExportEditNotSelected();
    });

    // Jira References - COTRAC-2458
    it('To verify user can select all groups for sharing,export and edit. - [23164397]', async () => {
        // Auto generated by aurea-automation - util on Wed, 10 Apr 2019 03:10:40 GMT

        StepLogger.caseId = 23164397;
        StepLogger.stepId(1);
        StepLogger.step('Go to Reports -> Report writer.');
        await HomePage1Helper.navigateToReportWriterPage();
        StepLogger.verification('Report writer page should be displayed.');
        await HomePage.hamburgerIcon.verifyDisplayedStatus();

        StepLogger.stepId(2);
        StepLogger.step('From the list of report displayed click the edit button displayed besides the report user wants to edit.');
        await ReportWriterReportsPageHelper.clickOnFirstEdit();
        StepLogger.verification('General tab of Editable report should be displayed.');
        await ReportWriterReportsPageHelper.verifySharingTab();

        StepLogger.stepId(3);
        StepLogger.step('Go to tab "Sharing".');
        await ReportWriterReportsPageHelper.clickOnSharing();
        StepLogger.verification('Sharing tab should be displayed.');
        await ReportWriterReportsPageHelper.verifySharingTabOpens();

        StepLogger.stepId(4);
        StepLogger.step('Select "Export" and "Edit" checkbox for all the groups.');
        await ReportWriterReportsPageHelper.selectExportAllCheckBoxGroup();
        await ReportWriterReportsPageHelper.selectEditAllCheckBoxGroup();
        StepLogger.verification(`1. All the check boxes should be checked.
        2. "Sharing saved" message should be displayed.`);
        await ReportWriterReportsPageHelper.verifyCheckboxChecked(eNames.editCheckboxAll);
        await ReportWriterReportsPageHelper.verifySavedMessage();
    });
});

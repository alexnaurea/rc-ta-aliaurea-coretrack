import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { CommonPageConstant } from '../../../page-objects/pages/common/common-page.constant';
import { CommonPageHelper } from '../../../page-objects/pages/common/common-page.helper';
import { ContactPageConstant } from '../../../page-objects/pages/contact-page/contact-page.constants';
import { ContactPageHelper } from '../../../page-objects/pages/contact-page/contact-page.helper';
import { LoginPageHelper } from '../../../page-objects/pages/login-page/login-page.helper';
import { ReferralsPageHelper } from '../../../page-objects/pages/referrals/referrals.helper';
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

    // Jira References - COTRAC-5332
    it('Verify user is able to access and view the Attachments Pane of a Retail Prospect - [23162608]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 14:38:46 GMT

        StepLogger.caseId = 23162608;
        StepLogger.stepId(1);
        StepLogger.step('Click on the Global search button.');
        await CommonPageHelper.clickOnGlobalSearchButton();
        StepLogger.verification('The Search text field is displayed.');
        await CommonPageHelper.verifyGlobalTextboxDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Select Contacts from the dropdown next to search text field.');
        await CommonPageHelper.selectItemFromGlobalDropdown(CommonPageConstant.names.contact);
        StepLogger.verification('The Contacts option is selected from the dropdown.');
        await CommonPageHelper.verifySelectedItemFromGlobalDropdown(CommonPageConstant.names.contact);

        StepLogger.stepId(3);
        StepLogger.step('Enter the name of the Retail Prospect on the search bar and click on the search button e.g. Baldwin, Alec');
        await CommonPageHelper.typeValueInGlobalTextFieldAndClickSearchIcon(CommonPageConstant.testData.alecBaldwin);
        StepLogger.verification('The Contact card is displayed on the screen.');
        await ReferralsPageHelper.verifyActivityCardDisplayed(CommonPageConstant.testData.alecBaldwin);

        StepLogger.stepId(4);
        StepLogger.step('Click on the Retail Prospect Contact card.');
        await ReferralsPageHelper.clickOnActivityCard(CommonPageConstant.testData.alecBaldwin);
        StepLogger.verification('The Snapshot window of the Contact is displayed.');
        await ContactPageHelper.verifySnapshotModalIsDisplayed(false);

        StepLogger.stepId(5);
        StepLogger.step('Close the Snapshot Window');
        await ContactPageHelper.closeSnapshotModal();
        StepLogger.verification('The details of the contact is displayed on a new page with Overview tab displayed by default.');
        await ContactPageHelper.verifyContactPageIsDisplayed(false);

        StepLogger.stepId(6);
        StepLogger.step('Click on Attachments button in the left side navigation pane.');
        await ContactPageHelper.clickAttachmentsTabInSidebar();
        StepLogger.verification('The screen is refreshed and the Attachments page is displayed on the right side pane.');
        await WaitHelper.waitForPageToStable();
        await ContactPageHelper.verifyAttachmentsPageIsDisplayed();
    });

    // Jira References - COTRAC-5333
    it('Verify user is able to collapse and expand the sections of screen on Attachments Pane - [23162689]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 14:38:44 GMT

        StepLogger.caseId = 23162689;

        StepLogger.stepId(1);
        StepLogger.step('Execute test case [C23162608] to access the Attachments Pane of a Retail Prospect');
        await ContactPageHelper.navigateToAttachmentsPage();
        StepLogger.verification('The screen is refreshed and the Attachments page is displayed on the right side pane.');
        await ContactPageHelper.verifyAttachmentsPageIsDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Select Date option from the Grouping dropdown');
        await ContactPageHelper.selectGroupingOption(ContactPageConstant.elementNames.date);
        StepLogger.verification('The data in the grid is grouped by "Date" option.');
        await ContactPageHelper.verifyAttachementListIsGrouped(ContactPageConstant.elementNames.date);

        StepLogger.stepId(3);
        StepLogger.step('Click on - (minus) sign next to Date Group to collapse the section');
        await ContactPageHelper.clickFirstGroupingIcon();
        StepLogger.verification('The details of that section on screen is collapsed.');
        await ContactPageHelper.verifyFirstGroupingIconIsCollapsed();

        StepLogger.stepId(4);
        StepLogger.step('Click on + (plus) sign next to Date Group to expand the section');
        await ContactPageHelper.clickFirstGroupingIcon();
        StepLogger.verification('The details of that section on screen is expanded.');
        await ContactPageHelper.verifyFirstGroupingIconIsExpanded();
    });

    // Jira References - COTRAC-5334
    it('Verify validation error message on Name mandatory field while adding a new Attachment - [23162801]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 14:38:47 GMT

        StepLogger.caseId = 23162801;

        StepLogger.stepId(1);
        StepLogger.step('Execute test case [C23162645] to Add Attachment');
        await ContactPageHelper.navigateToNewAttachmentPage();
        StepLogger.verification('The New Attachment window is displayed.');
        await ContactPageHelper.verifyNewAttachmentModalDisplayed();

        // No action required in this step
        StepLogger.stepId(2);
        StepLogger.step('Do not enter any value in Name field.');
        StepLogger.verification('The Name field is blank.');
        await ContactPageHelper.verifyNewAttachementNameValue(Constants.EMPTY_STRING);

        StepLogger.stepId(3);
        StepLogger.step('Click on Save button.');
        await ContactPageHelper.clickOnSaveButtonFromNewAttachementModal();
        StepLogger.verification('An Error message is displayed "Attachment Name is required."');
        await ContactPageHelper.verifyValidationMessageDisplayed(ContactPageConstant.messages.nameRequired);
    });

    // Jira References - COTRAC-5329
    it('Verify user is able to sort the data in Date column on Attachments Pane - [23162666]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 14:38:47 GMT

        StepLogger.caseId = 23162666;
        StepLogger.stepId(1);
        StepLogger.step('Execute test case [C23162608] to access the Attachments Pane of a Retail Prospect');
        await ContactPageHelper.navigateToAttachmentsPage();
        StepLogger.verification('The screen is refreshed and the Attachments page is displayed on the right side pane.');
        await ContactPageHelper.verifyAttachmentsPageIsDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click on the Date column to sort the data');
        await ContactPageHelper.clickAttachmentListColumn(ContactPageConstant.elementNames.attachmentsColumns.date);
        StepLogger.verification('The data in the Date column is sorted in ascending order.');
        await ContactPageHelper.verifyColumnIsSortedAsc(ContactPageConstant.elementNames.attachmentsColumns.date);

        StepLogger.stepId(3);
        StepLogger.step('Click on the Date column to sort the data');
        await ContactPageHelper.clickAttachmentListColumn(ContactPageConstant.elementNames.attachmentsColumns.date);
        StepLogger.verification('The data in the Date column is sorted in descending order.');
        await ContactPageHelper.verifyColumnIsSortedDesc(ContactPageConstant.elementNames.attachmentsColumns.date);

        StepLogger.stepId(4);
        StepLogger.step('Click on Date column again to remove the sorting');
        await ContactPageHelper.clickAttachmentListColumn(ContactPageConstant.elementNames.attachmentsColumns.date);
        StepLogger.verification('The sorting is removed from the Date column');
        await ContactPageHelper.verifyColumnIsNotSorted(ContactPageConstant.elementNames.attachmentsColumns.date);
    });

    // Jira References - COTRAC-5335
    it('Verify user is able to sort the data in Added By column on Attachments Pane - [23162660]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 14:38:47 GMT

        StepLogger.caseId = 23162660;
        StepLogger.stepId(1);
        StepLogger.step('Execute test case [C23162608] to access the Attachments Pane of a Retail Prospect');
        await ContactPageHelper.navigateToAttachmentsPage();
        StepLogger.verification('The screen is refreshed and the Attachments page is displayed on the right side pane.');
        await ContactPageHelper.verifyAttachmentsPageIsDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click on the Added By column to sort the data');
        await ContactPageHelper.clickAttachmentListColumn(ContactPageConstant.elementNames.attachmentsColumns.addedBy);
        StepLogger.verification('The data in the Added By column is sorted in ascending order.');
        await ContactPageHelper.verifyColumnIsSortedAsc(ContactPageConstant.elementNames.attachmentsColumns.addedBy);

        StepLogger.stepId(3);
        StepLogger.step('Click on the Added By column to sort the data');
        await ContactPageHelper.clickAttachmentListColumn(ContactPageConstant.elementNames.attachmentsColumns.addedBy);
        StepLogger.verification('The data in the Added By column is sorted in descending order.');
        await ContactPageHelper.verifyColumnIsSortedDesc(ContactPageConstant.elementNames.attachmentsColumns.addedBy);

        StepLogger.stepId(4);
        StepLogger.step('Click on Added By column again to remove the sorting');
        await ContactPageHelper.clickAttachmentListColumn(ContactPageConstant.elementNames.attachmentsColumns.addedBy);
        StepLogger.verification('The sorting is removed from the Added By column');
        await ContactPageHelper.verifyColumnIsNotSorted(ContactPageConstant.elementNames.attachmentsColumns.addedBy);
    });

    // Jira References - COTRAC-5328
    it('Verify user is able to sort the data in Name column on Attachments Pane - [23162651]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 14:38:47 GMT

        StepLogger.caseId = 23162651;
        StepLogger.stepId(1);
        StepLogger.step('Execute test case [C23162608] to access the Attachments Pane of a Retail Prospect');
        await ContactPageHelper.navigateToAttachmentsPage();
        StepLogger.verification('The screen is refreshed and the Attachments page is displayed on the right side pane.');
        await ContactPageHelper.verifyAttachmentsPageIsDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click on the Name column to sort the data');
        await ContactPageHelper.clickAttachmentListColumn(ContactPageConstant.elementNames.attachmentsColumns.name);
        StepLogger.verification('The data in the Name column is sorted in ascending order.');
        await ContactPageHelper.verifyColumnIsSortedAsc(ContactPageConstant.elementNames.attachmentsColumns.name);

        StepLogger.stepId(3);
        StepLogger.step('Click on the Name column to sort the data');
        await ContactPageHelper.clickAttachmentListColumn(ContactPageConstant.elementNames.attachmentsColumns.name);
        StepLogger.verification('The data in the Name column is sorted in descending order.');
        await ContactPageHelper.verifyColumnIsSortedDesc(ContactPageConstant.elementNames.attachmentsColumns.name);

        StepLogger.stepId(4);
        StepLogger.step('Click on Name column again to remove the sorting');
        await ContactPageHelper.clickAttachmentListColumn(ContactPageConstant.elementNames.attachmentsColumns.name);
        StepLogger.verification('The sorting is removed from the Name column');
        await ContactPageHelper.verifyColumnIsNotSorted(ContactPageConstant.elementNames.attachmentsColumns.name);
    });

    // Jira References - COTRAC-5326
    it('Verify column headings present on the Attachments Pane of a Retail Prospect - [23162633]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 14:38:47 GMT

        StepLogger.caseId = 23162633;
        StepLogger.stepId(1);
        StepLogger.step('Click on the Global search button.');
        await CommonPageHelper.clickOnGlobalSearchButton();
        StepLogger.verification('The Search text field is displayed.');
        await CommonPageHelper.verifyGlobalTextboxDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Select Contacts from the dropdown next to search text field.');
        await CommonPageHelper.selectItemFromGlobalDropdown(CommonPageConstant.names.contact);
        StepLogger.verification('The Contacts option is selected from the dropdown.');
        await CommonPageHelper.verifySelectedItemFromGlobalDropdown(CommonPageConstant.names.contact);

        StepLogger.stepId(3);
        StepLogger.step('Enter the name of the Retail Prospect on the search bar and click on the search button e.g. Baldwin, Alec');
        await CommonPageHelper.typeValueInGlobalTextFieldAndClickSearchIcon(CommonPageConstant.testData.alecBaldwin);
        StepLogger.verification('The Contact card is displayed on the screen.');
        await ReferralsPageHelper.verifyActivityCardDisplayed(CommonPageConstant.testData.alecBaldwin);

        StepLogger.stepId(4);
        StepLogger.step('Click on the Retail Prospect Contact card.');
        await ReferralsPageHelper.clickOnActivityCard(CommonPageConstant.testData.alecBaldwin);
        StepLogger.verification('The Snapshot window of the Contact is displayed.');
        await ContactPageHelper.verifySnapshotModalIsDisplayed(false);

        StepLogger.stepId(5);
        StepLogger.step('Close the Snapshot Window');
        await ContactPageHelper.closeSnapshotModal();
        StepLogger.verification('The details of the contact is displayed on a new page with Overview tab displayed by default.');
        await ContactPageHelper.verifyContactPageIsDisplayed(false);

        StepLogger.stepId(6);
        StepLogger.step('Click on Attachments button in the left side navigation pane.');
        await ContactPageHelper.clickAttachmentsTabInSidebar();
        StepLogger.verification('The screen is refreshed and the Attachments page is displayed on the right side pane.');
        await WaitHelper.waitForPageToStable();
        await ContactPageHelper.verifyAttachmentsPageIsDisplayed();

        StepLogger.stepId(7);
        StepLogger.step('Verify column headings present on the Attachments Pane of a Retail Prospect');
        StepLogger.verification(`The column headings present on the Attachments Pane of a Retail Prospect are:
        Name
        Added By
        Date
        Details`);
        await ContactPageHelper.verifyAttachmentListColumns();
    });

    // Jira References - COTRAC-5336
    it('Verify refresh button on the Attachments Pane of a Retail Prospect - [23162640]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 14:38:47 GMT

        StepLogger.caseId = 23162640;
        StepLogger.stepId(1);
        StepLogger.step('Click on the Global search button.');
        await CommonPageHelper.clickOnGlobalSearchButton();
        StepLogger.verification('The Search text field is displayed.');
        await CommonPageHelper.verifyGlobalTextboxDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Select Contacts from the dropdown next to search text field.');
        await CommonPageHelper.selectItemFromGlobalDropdown(CommonPageConstant.names.contact);
        StepLogger.verification('The Contacts option is selected from the dropdown.');
        await CommonPageHelper.verifySelectedItemFromGlobalDropdown(CommonPageConstant.names.contact);

        StepLogger.stepId(3);
        StepLogger.step('Enter the name of the Retail Prospect on the search bar and click on the search button e.g. Baldwin, Alec');
        await CommonPageHelper.typeValueInGlobalTextFieldAndClickSearchIcon(CommonPageConstant.testData.alecBaldwin);
        StepLogger.verification('The Contact card is displayed on the screen.');
        await ReferralsPageHelper.verifyActivityCardDisplayed(CommonPageConstant.testData.alecBaldwin);

        StepLogger.stepId(4);
        StepLogger.step('Click on the Retail Prospect Contact card.');
        await ReferralsPageHelper.clickOnActivityCard(CommonPageConstant.testData.alecBaldwin);
        StepLogger.verification('The Snapshot window of the Contact is displayed.');
        await ContactPageHelper.verifySnapshotModalIsDisplayed(false);

        StepLogger.stepId(5);
        StepLogger.step('Close the Snapshot Window');
        await ContactPageHelper.closeSnapshotModal();
        StepLogger.verification('The details of the contact is displayed on a new page with Overview tab displayed by default.');
        await ContactPageHelper.verifyContactPageIsDisplayed(false);

        StepLogger.stepId(6);
        StepLogger.step('Click on Attachments button in the left side navigation pane.');
        await ContactPageHelper.clickAttachmentsTabInSidebar();
        StepLogger.verification('The screen is refreshed and the Attachments page is displayed on the right side pane.');
        await WaitHelper.waitForPageToStable();
        await ContactPageHelper.verifyAttachmentsPageIsDisplayed();

        StepLogger.stepId(7);
        StepLogger.step('Verify refresh button is present on the Attachments Pane of a Retail Prospect');
        StepLogger.verification('The refresh button is present on the Attachments Pane of a Retail Prospect');
        await ContactPageHelper.verifyRefreshButtonDisplayed();

        StepLogger.stepId(8);
        StepLogger.step('Click on the refresh button.');
        await ContactPageHelper.clickOnRefreshButton();
        StepLogger.verification('The screen is refreshed and the data is updated accordingly.');
        // This action is not verifiable
    });

    // Jira References - COTRAC-5337
    it('Verify user is able to group the grid data by "Date" option by clicking on Grouping dropdown - [23162670]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 14:38:47 GMT

        StepLogger.caseId = 23162670;
        StepLogger.stepId(1);
        StepLogger.step('Click on the Global search button.');
        await CommonPageHelper.clickOnGlobalSearchButton();
        StepLogger.verification('The Search text field is displayed.');
        await CommonPageHelper.verifyGlobalTextboxDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Select Contacts from the dropdown next to search text field.');
        await CommonPageHelper.selectItemFromGlobalDropdown(CommonPageConstant.names.contact);
        StepLogger.verification('The Contacts option is selected from the dropdown.');
        await CommonPageHelper.verifySelectedItemFromGlobalDropdown(CommonPageConstant.names.contact);

        StepLogger.stepId(3);
        StepLogger.step('Enter the name of the Retail Prospect on the search bar and click on the search button e.g. Baldwin, Alec');
        await CommonPageHelper.typeValueInGlobalTextFieldAndClickSearchIcon(CommonPageConstant.testData.alecBaldwin);
        StepLogger.verification('The Contact card is displayed on the screen.');
        await ReferralsPageHelper.verifyActivityCardDisplayed(CommonPageConstant.testData.alecBaldwin);

        StepLogger.stepId(4);
        StepLogger.step('Click on the Retail Prospect Contact card.');
        await ReferralsPageHelper.clickOnActivityCard(CommonPageConstant.testData.alecBaldwin);
        StepLogger.verification('The Snapshot window of the Contact is displayed.');
        await ContactPageHelper.verifySnapshotModalIsDisplayed(false);

        StepLogger.stepId(5);
        StepLogger.step('Close the Snapshot Window');
        await ContactPageHelper.closeSnapshotModal();
        StepLogger.verification('The details of the contact is displayed on a new page with Overview tab displayed by default.');
        await ContactPageHelper.verifyContactPageIsDisplayed(false);

        StepLogger.stepId(6);
        StepLogger.step('Click on Attachments button in the left side navigation pane.');
        await ContactPageHelper.clickAttachmentsTabInSidebar();
        StepLogger.verification('The screen is refreshed and the Attachments page is displayed on the right side pane.');
        await WaitHelper.waitForPageToStable();
        await ContactPageHelper.verifyAttachmentsPageIsDisplayed();

        StepLogger.stepId(7);
        StepLogger.step('Select Date option from the Grouping dropdown');
        await ContactPageHelper.selectGroupingOption(ContactPageConstant.elementNames.date);
        StepLogger.verification('The data in the grid is grouped by "Date" option.');
        await ContactPageHelper.verifyAttachementListIsGrouped(ContactPageConstant.elementNames.date);
    });

    // Jira References - COTRAC-5327
    it('Verify Add Attachment button on the Attachments Pane of a Retail Prospect - [23162645]', async () => {
        // Auto generated by aurea-automation - util on Fri, 19 Apr 2019 18:17:47 GMT

        StepLogger.caseId = 23162645;
        StepLogger.stepId(1);
        StepLogger.step('Click on the Global search button.');
        await CommonPageHelper.clickOnGlobalSearchButton();
        StepLogger.verification('The Search text field is displayed.');
        await CommonPageHelper.verifyGlobalTextboxDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Select Contacts from the dropdown next to search text field.');
        await CommonPageHelper.selectItemFromGlobalDropdown(CommonPageConstant.names.contact);
        StepLogger.verification('The Contacts option is selected from the dropdown.');
        await CommonPageHelper.verifySelectedItemFromGlobalDropdown(CommonPageConstant.names.contact);

        StepLogger.stepId(3);
        StepLogger.step('Enter the name of the Retail Prospect on the search bar and click on the search button e.g. Baldwin, Alec');
        await CommonPageHelper.typeValueInGlobalTextFieldAndClickSearchIcon(CommonPageConstant.testData.alecBaldwin);
        StepLogger.verification('The Contact card is displayed on the screen.');
        await ReferralsPageHelper.verifyActivityCardDisplayed(CommonPageConstant.testData.alecBaldwin);

        StepLogger.stepId(4);
        StepLogger.step('Click on the Retail Prospect Contact card.');
        await ReferralsPageHelper.clickOnActivityCard(CommonPageConstant.testData.alecBaldwin);
        StepLogger.verification('The Snapshot window of the Contact is displayed.');
        await ContactPageHelper.verifySnapshotModalIsDisplayed(false);

        StepLogger.stepId(5);
        StepLogger.step('Close the Snapshot Window');
        await ContactPageHelper.closeSnapshotModal();
        StepLogger.verification('The details of the contact is displayed on a new page with Overview tab displayed by default.');
        await ContactPageHelper.verifyContactPageIsDisplayed(false);

        StepLogger.stepId(6);
        StepLogger.step('Click on Attachments button in the left side navigation pane.');
        await ContactPageHelper.clickAttachmentsTabInSidebar();
        StepLogger.verification('The screen is refreshed and the Attachments page is displayed on the right side pane.');
        await WaitHelper.waitForPageToStable();
        await ContactPageHelper.verifyAttachmentsPageIsDisplayed();

        StepLogger.stepId(7);
        StepLogger.step('Verify if Add Attachment button is present on the Attachments Pane of a Retail Prospect');
        StepLogger.verification('The Add Attachment button is present on the Attachments Pane of a Retail Prospect');
        await ContactPageHelper.verifyAddAttachmentButtonDisplayed();

        StepLogger.stepId(8);
        StepLogger.step('Click on Add Attachment button');
        await ContactPageHelper.clickOnAddAttachmentButton();
        StepLogger.verification('The New Attachment window is displayed.');
        await ContactPageHelper.verifyNewAttachmentModalDisplayed();
    });
});
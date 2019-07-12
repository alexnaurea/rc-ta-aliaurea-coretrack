
import { StepLogger } from '../../../../core/logger/step-logger';
import { AlertHelper } from '../../../components/html/alert-helper';
import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { CommonPage } from '../common/common.po';
import { ContactPageHelper } from '../contact-page/contact-page.helper';
import { ContactPage } from '../contact-page/contact-page.po';
import { LoginPageHelper } from '../login-page/login-page.helper';
import { NewCasePage } from '../new-case-page/new-case-page.po';
import { NewTaskPageHelper } from '../new-task-page/new-task-page.helper';
import { NewTaskPage } from '../new-task-page/new-task-page.po';
import { TasksQueuePageConstant } from '../tasks-queue-page/tasks-queue-page.constants';
import { TasksQueuePage } from '../tasks-queue-page/tasks-queue-page.po';

import { AccountConstants } from './accounts.constant';
import { AccountsPageHelper } from './accounts.helper';
import { AccountsPage } from './accounts.po';

export class AccountsOnePageHelper {

    static async clickTasksTabInSidebar() {
        StepLogger.subStep('Click task tab in side bar');
        await AccountsPage.sidebarMenu.tasks.hoverOverAndClick();
    }

    static async verifyTasksPageIsDisplayed() {
        StepLogger.subVerification('Verify Task Page');
        await PageHelper.executeInIFrame([AccountsPage.tasksIFrame], async () => {
            await ContactPage.tasks.header.addTask.verifyDisplayedStatus();
        });
    }

    static async clickAddTask() {
        StepLogger.subStep('Click Add task');
        await PageHelper.executeInIFrame([AccountsPage.tasksIFrame], async () => {
            await ContactPage.tasks.header.addTask.clickButton();
        });
    }

    static async verifyTaskIsSavedAndDisplayedUnderTaskQueue(taskSubject: string) {
        StepLogger.subVerification('Verify Saved Task');
        await ExpectationHelper.verifyHiddenStatus(CommonPage.contentIFrameOnModal);
        await this.selectNoGroupingOption();
        await this.verifyTaskIsDisplayedInQueueList(taskSubject);
    }

    static async selectNoGroupingOption() {
        StepLogger.subStep('Select No Grouping Option');
        await PageHelper.executeInIFrame([AccountsPage.tasksIFrame], async () => {
            await DropDownHelper.selectOptionByCssText(TasksQueuePage.header.grouping,
                TasksQueuePageConstant.elementNames.noGrouping);
        });
    }

    static async verifyTaskIsDisplayedInQueueList(subject: string) {
        StepLogger.subVerification('Verify Task in list');
        await PageHelper.executeInIFrame([AccountsPage.tasksIFrame], async () => {
            await TasksQueuePage.queueTask.specific(subject).verifyDisplayedStatus();
        });
    }

    static async verifyTaskTableColumns() {
        StepLogger.subVerification('Verify Task table Column');
        const { taskTable } = AccountsPage;
        await PageHelper.executeInIFrame([AccountsPage.tasksIFrame], async () => {
            await taskTable.status.scrollToElement();
            await taskTable.task.verifyDisplayedStatus();
            await taskTable.assignedBy.scrollToElement();
            await taskTable.due.verifyDisplayedStatus();
        });
    }

    static async navigateAndCreatTask(uniqueText: string) {
        StepLogger.subStep('Navigate and Create Task');
        await LoginPageHelper.loginAsAdmin();
        await AccountsPageHelper.navigateToProductionTabAndOpenAnAccount();
        await this.clickTasksTabInSidebar();
        await this.verifyTasksPageIsDisplayed();
        await this.clickAddTask();
        await NewTaskPageHelper.verifyNewTaskPageIsDisplayed();
        await NewTaskPageHelper.enterSubject(uniqueText);
        await NewTaskPageHelper.verifySubjectIsEntered(uniqueText);
        await NewTaskPageHelper.enterDescription(uniqueText);
        await NewTaskPageHelper.verifyEnteredDescription(uniqueText);
        await NewTaskPageHelper.clickSaveAndClose();
        await this.verifyTaskIsSavedAndDisplayedUnderTaskQueue(uniqueText);
    }

    static async clickEditTask(subject: string) {
        StepLogger.subStep('Click Edit Task');
        const { taskTable } = AccountsPage;
        await PageHelper.executeInIFrame([AccountsPage.tasksIFrame], async () => {
            await taskTable.editTask(subject).clickButton();
        });
    }

    static async verifySubjectIsEntered(subject: string) {
        StepLogger.subVerification('Verify Entered Subject');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await NewTaskPage.form.subject.verifyDisplayedStatus();
            await NewTaskPage.form.subject.verifyTextEntered(subject);
        });
    }

    static async clickMenuButton() {
        StepLogger.subStep('Click menu button');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await NewCasePage.header.dottedMenu.clickButton();
        });
    }

    static async verifyMenuList() {
        StepLogger.subVerification('Verify Menu List');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await NewCasePage.header.history.verifyDisplayedStatus();
            await AccountsPage.taskWindow.delete.verifyDisplayedStatus();
        });
    }

    static async clickHistory() {
        StepLogger.subStep('Click History');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await NewCasePage.header.history.clickButton();
        });
    }

    static async verifyHistoryWindow() {
        StepLogger.subVerification('Verify History Window');
        await AccountsPage.taskWindow.dialogTitle.verifyContainsText('History');
    }

    static async clickDelete(switchBack = true) {
        StepLogger.subStep('Click Delete');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await AccountsPage.taskWindow.delete.clickButton();
        }, switchBack);
    }

    static async verifyConfirmWindow() {
        StepLogger.subVerification('Verify Confirm Window');
        const   message = await AlertHelper.getAlertTextIfExist();
        await ExpectationHelper.verifyStringValueContain(message, AccountConstants.elementNames.deleteMessage);
    }

    static async clickConfirmWindowCancel() {
        StepLogger.subStep('Click Confirm Window Cancel');
        await AlertHelper.dismissAlertIfExists();
        await PageHelper.switchToDefaultContent();
    }

    static async clickConfirmWindowOk() {
        StepLogger.subStep('Click Confirm Window Ok');
        await AlertHelper.acceptAlertIfExists();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyTaskEnteredData(uniqueText: string) {
        StepLogger.subVerification('Verify Task Entered Data');
        await NewTaskPageHelper.verifySubjectIsEntered(uniqueText);
        await NewTaskPageHelper.verifyEnteredDescription(uniqueText);
    }

    static async verifyTaskDataField() {
        StepLogger.subVerification('Verify Task Data Field');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await NewTaskPage.form.subject.verifyDisplayedStatus();
            await NewTaskPage.form.owner.verifyDisplayedStatus();
            await NewTaskPage.form.status.verifyDisplayedStatus();
            await NewTaskPage.form.calender.dueDate.verifyDisplayedStatus();
            await NewTaskPage.form.calender.startDate.verifyDisplayedStatus();
        });
    }

    static async verifyTaskTab() {
        StepLogger.subVerification('Verify Task Tab');
        const { taskWindow } = AccountsPage;
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await taskWindow.overview.scrollToElement();
            await taskWindow.overview.verifyDisplayedStatus();
            await taskWindow.notes.verifyDisplayedStatus();
            await taskWindow.subtask.verifyDisplayedStatus();
            await taskWindow.attachments.verifyDisplayedStatus();
        });
    }

    static async verifyTaskButton() {
        StepLogger.subVerification('Verify Task Button');
        const { casePageElements } = AccountsPage;
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await casePageElements.saveButton.verifyDisplayedStatus();
            await casePageElements.closeButton.verifyDisplayedStatus();
            await casePageElements.printPage.verifyDisplayedStatus();
            await casePageElements.saveAndClose.verifyDisplayedStatus();
        });
    }

    static async verifyTaskIsDeletedUnderTaskQueue(taskSubject: string) {
        StepLogger.subVerification('Verify Task is Deleted');
        await PageHelper.switchToDefaultContent();
        await ExpectationHelper.verifyHiddenStatus(CommonPage.contentIFrameOnModal);
        await this.selectNoGroupingOption();
        await this.verifyTaskIsDeletedInQueueList(taskSubject);
    }

    static async verifyTaskIsDeletedInQueueList(subject: string) {
        StepLogger.subVerification('Verify Task is Deleted in list');
        await PageHelper.executeInIFrame([AccountsPage.tasksIFrame], async () => {
            await TasksQueuePage.queueTask.specific(subject).verifyHiddenStatus();
        });
    }

    static async verifyTaskHistoryTab() {
        StepLogger.subVerification('Verify Task History Tabs');
        const { taskWindow } = AccountsPage;
        await PageHelper.executeInIFrame([taskWindow.historyFrame], async () => {
            // Wait to load page
            await WaitHelper.sleep();
            await taskWindow.summary.verifyDisplayedStatus();
            await taskWindow.details.verifyDisplayedStatus();
        });
    }

    static async verifyHistoryField() {
        StepLogger.subVerification('Verify Task History Field');
        const { taskWindow } = AccountsPage;
        await PageHelper.executeInIFrame([taskWindow.historyFrame], async () => {
            await taskWindow.createdDate.verifyDisplayedStatus();
            await taskWindow.createdBy.verifyDisplayedStatus();
            await taskWindow.modifiedDate.verifyDisplayedStatus();
            await taskWindow.modifiedUserBy.verifyDisplayedStatus();
        });
    }

    static async clickHistoryClose() {
        StepLogger.subStep('Click Close');
        const { taskWindow } = AccountsPage;
        await PageHelper.executeInIFrame([taskWindow.historyFrame], async () => {
            await taskWindow.closeButton.clickButton();
        });
    }

    static async clickHistoryDetailsTab() {
        StepLogger.subStep('Click History Details Tabs');
        const { taskWindow } = AccountsPage;
        await PageHelper.executeInIFrame([taskWindow.historyFrame], async () => {
            await taskWindow.details.hoverOverAndClick();
        });
    }

    static async verifyHistoryDetailsPanel() {
        StepLogger.subVerification('Verify History Details Panel');
        const { taskWindow } = AccountsPage;
        await PageHelper.executeInIFrame([taskWindow.historyFrame], async () => {
            await taskWindow.detailPanel.verifyDisplayedStatus();
        });
    }

    static async verifyDetailDropDownOption() {
        StepLogger.subVerification('Verify Details Drop Down Option');
        const { taskWindow } = AccountsPage;
        await PageHelper.executeInIFrame([taskWindow.historyFrame], async () => {
            await taskWindow.showLogInListView.verifyDisplayedStatus();
            await taskWindow.showLogInReadView.verifyDisplayedStatus();
        });
    }

    static async clickShowLogInListView() {
        StepLogger.subStep('Click drop down option');
        await this.selectLogInReadView();
        // Wait is required to load Page
        await WaitHelper.sleepForTwoSeconds();
        await this.selectLogInListView();
    }

    static async selectLogInReadView() {
        StepLogger.subStep('Click drop down Log In Read View option');
        const { taskWindow } = AccountsPage;
        await PageHelper.executeInIFrame([taskWindow.historyFrame], async () => {
            await taskWindow.showLogDropDown.hoverOverAndClick();
            await taskWindow.showLogInReadView.hoverOverAndClick();
        });
    }

    static async selectLogInListView() {
        StepLogger.subStep('Click drop down Log In List View option');
        const { taskWindow } = AccountsPage;
        await PageHelper.executeInIFrame([taskWindow.historyFrame], async () => {
            await taskWindow.showLogDropDown.hoverOverAndClick();
            await taskWindow.showLogInListView.hoverOverAndClick();
        });
    }

    static async verifyLogListView() {
        StepLogger.subVerification('Verify Log List View');
        const { taskWindow } = AccountsPage;
        await PageHelper.executeInIFrame([taskWindow.historyFrame], async () => {
            await taskWindow.listView.verifyDisplayedStatus();
        });
    }

    static async verifyDetailPanelButton() {
        StepLogger.subVerification('Verify Detail Panel Button');
        const { taskWindow } = AccountsPage;
        await PageHelper.executeInIFrame([taskWindow.historyFrame], async () => {
            await taskWindow.exportToWord.verifyDisplayedStatus();
        });
    }

    static async clickNotesTabInSidebar() {
        StepLogger.subStep('Click Notes tab in side bar');
        await AccountsPage.sidebarMenu.notes.hoverOverAndClick();
    }

    static async clickAddNotes() {
        StepLogger.subStep('Click add Notes');
        await PageHelper.executeInIFrame([CommonPage.notesIFrame], async () => {
            await ContactPage.notes.header.addNote.clickButton();
        });
    }

    static async verifyNewNoteModalIsDisplayed() {
        StepLogger.subVerification('Verify New Note Modal');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await AccountsPage.newNoteWindow.newNoteTitle.verifyDisplayedStatus();
        });
    }

    static async verifyNewNotesField() {
        StepLogger.subVerification('Verify New Note Modal fields');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ContactPage.newNoteModal.subject.verifyDisplayedStatus();
            await ContactPage.newNoteModal.save.verifyDisplayedStatus();
            await AccountsPage.casePageElements.closeButton.verifyDisplayedStatus();
        });
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal, CommonPage.contentIFrame], async () => {
            await ContactPage.newNoteModal.text.verifyDisplayedStatus();
        });
    }

    static async navigateToNotes() {
        StepLogger.subStep('Navigate To Notes');
        await LoginPageHelper.loginAsAdmin();
        await AccountsPageHelper.navigateToProductionTabAndOpenAnAccount();
        await AccountsOnePageHelper.clickNotesTabInSidebar();
        await ContactPageHelper.verifyNotesPageIsDisplayed();
    }

    static async verifySubjectOnNewNoteModal(text: string) {
        StepLogger.subVerification('Verify subject text in New Note Modal');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ContactPage.newNoteModal.subject.verifyTextEntered(text);
        });
    }

    static async verifyTextOnNewNoteModal(text: string) {
        StepLogger.subVerification('Verify text in New Note Modal');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal, CommonPage.contentIFrame], async () => {
            await ContactPage.newNoteModal.text.verifyContainsText(text);
        });
    }

    static async clickPrivateOff() {
        StepLogger.subStep('Click No of "Private"');
        const { privateOff } = AccountsPage.newNoteWindow;
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await privateOff.scrollToElement();
            await privateOff.clickButton();
        });
    }

    static async verifyPrivateOn() {
        StepLogger.subVerification('Verify Yes of "Private"');
        const { privateOn } = AccountsPage.newNoteWindow;
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await privateOn.scrollToElement();
            await privateOn.verifyDisplayedStatus();
        });
    }

    static async selectGroupingOption(groupingText: string) {
        StepLogger.subStep(`Select ${groupingText} Grouping Option`);
        await PageHelper.executeInIFrame([CommonPage.notesIFrame], async () => {
            await DropDownHelper.selectOptionByCssText(TasksQueuePage.header.grouping, groupingText);
        });
    }

    static async verifyGroupingDropDown() {
        StepLogger.subVerification('Verify Grouping drop downOption');
        await PageHelper.executeInIFrame([CommonPage.notesIFrame], async () => {
            await TasksQueuePage.header.grouping.verifyDisplayedStatus();
        });
    }

    static async verifySelectedGroupingOption(groupingText: string) {
        StepLogger.subVerification(`Verify Selected ${groupingText} Grouping Option`);
        await PageHelper.executeInIFrame([CommonPage.notesIFrame], async () => {
            const selectedOption = await DropDownHelper.getTheSelectedOptionText(TasksQueuePage.header.grouping);
            await ExpectationHelper.verifyStringEqualTo(selectedOption.toLowerCase(), groupingText.toLowerCase());
        });
    }

    static async verifySubjectValidationMessage() {
        StepLogger.subVerification('Verify Subject message');
        const { subjectRequiredValidator } = AccountsPage.newNoteWindow;
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await subjectRequiredValidator.scrollToElement();
            await subjectRequiredValidator.verifyDisplayedStatus();
        });
    }

    static async verifyTextRequiredValidatorMessage() {
        StepLogger.subVerification('Verify Text message');
        const { textRequiredValidator } = AccountsPage.newNoteWindow;
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await textRequiredValidator.scrollToElement();
            await textRequiredValidator.verifyDisplayedStatus();
        });
    }

    static async verifyRequiredValidatorMessage() {
        StepLogger.subVerification('Verify Required messages');
        await this.verifySubjectValidationMessage();
        await this.verifyTextRequiredValidatorMessage();
    }
}

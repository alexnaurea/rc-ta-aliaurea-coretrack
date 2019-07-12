import { StepLogger } from '../../../../core/logger/step-logger';
import { ElementHelper } from '../../../components/html/element-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { PageHelperExtension } from '../../../components/html/page-helper-extended';
import { WaitHelper } from '../../../components/html/wait-helper';
import { EndpointHelper } from '../../../components/misc-utils/endpoint-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';

import { BasePageHelper } from '../base-page.helper';
import { HomePageHelper } from '../home-page/home-page.helper';

import { ToDoListPage } from './to-do-list-page.po';
import { ToDoListPageConstant } from './to-do-list.constants';

const { executeInNewTab } = PageHelper;
export class ToDoListPageHelper extends BasePageHelper {

    static async verifyToDoListPageIsDisplayed() {
        StepLogger.subVerification('Verify To DO List Page title displayed.');
        await ToDoListPage.pageTitle.verifyDisplayedStatus();
    }

    static async verifyPageElementsDisplayed() {
        StepLogger.subVerification('Verify "My activities filter" displayed');
        await ToDoListPage.filters.myActivities.verifyDisplayedStatus();
        StepLogger.subVerification('Verify "Filter based on status of completion of tasks" displayed');
        await ToDoListPage.filters.overDue.verifyDisplayedStatus();
        StepLogger.subVerification('Verify "Search text box" displayed');
        await ToDoListPage.search.inputBox.verifyDisplayedStatus();
        StepLogger.subVerification('Verify "Refresh" displayed');
        await ToDoListPage.search.refresh.verifyDisplayedStatus();
    }

    static async clickActivitiesFilter() {
        StepLogger.subStep('Click activities filter Ddl"');
        await ToDoListPage.filters.myActivities.clickButton();
    }

    static async clickActivitiesArrow() {
        StepLogger.subStep('Click activities arrow"');
        await ToDoListPage.filters.activitiesListArrow.clickButton();
    }

    static async selectMyActivities() {
        StepLogger.subStep("Select 'My Activities' and edit.");
        await this.clickActivitiesArrow();
        await this.clickOnItemInDdl(ToDoListPageConstant.activities.myActivities);
        await WaitHelper.waitForPageToStable();
        await this.clickOnOverdueArrow();
        await this.clickOnItemInDdl(ToDoListPageConstant.overdue.dueThisMonth);
    }

    static async clickOnOverdueArrow() {
        StepLogger.subStep('Click on "Overdue arrow" arrow');
        await ToDoListPage.filters.overdueListArrow.clickLinkJs();
    }

    static async getOverdueData(subjectName: string) {
        StepLogger.subStep('Click on "Overdue" arrow');
        await ToDoListPageHelper.clickOnOverdueArrow();
        StepLogger.subStep('Click "Due This Month" option');
        await ToDoListPageHelper.clickOnItemInDdl(ToDoListPageConstant.overdue.dueThisWeek);
        StepLogger.subStep('Click on "Refresh" icon');
        await this.clickOnRefresh();
        StepLogger.subStep(`Type ${subjectName} in search textbox`);
        await this.typeInSearchBox(`${subjectName}`);
        await WaitHelper.waitForPageToStable();
        await ToDoListPage.getActivityElement(subjectName).clickLinkJs();
    }

    static async clickGlobalSearchButton() {
        StepLogger.subStep('Click on "Global Search" button');
        await ToDoListPage.search.globalSearchButton.clickButton();
    }

    static async typeInGlobalSearchTextbox(value: string) {
        StepLogger.subStep(`Type "${value}" in the Global search textbox.`);
        await ToDoListPage.search.globalSearchTextbox.sendKeys(value);
    }

    static async clickOnInputBox() {
        StepLogger.subStep('Click on "Search text box"');
        await ToDoListPage.search.inputBox.clickLinkJs();
    }

    static async searchForContact() {
        StepLogger.subStep('Search for a contact');
        await this.clickGlobalSearchButton();
        await this.typeInGlobalSearchTextbox(ToDoListPageConstant.testData.alec);
        await this.clickGlobalSearchButton();
    }

    static async clickOnRefresh() {
        StepLogger.subStep('Click on "Refresh"');
        await ToDoListPage.search.refresh.clickLinkJs();
    }

    static async clickOnItemInDdl(itemName: string) {
        StepLogger.subStep(`Click "${itemName}" item.`);
        await ToDoListPage.getItemInDdl(itemName).clickLinkJs();
    }

    static async verifyDisplayedItemInDdl(itemName: string) {
        StepLogger.subVerification(`Verify "${itemName}" item displayed`);
        await ToDoListPage.getItemInDdl(itemName).verifyDisplayedStatus();
    }

    static async clickContactElement() {
        StepLogger.subStep('Click "Contact Element" panel.');
        await ToDoListPage.contact.contactItem.clickButton();
    }

    static async verifyContactElementDisplayed() {
        StepLogger.subVerification('Verify "Contact Element" displayed');
        await ToDoListPage.contact.contactItem.verifyDisplayedStatus();
    }

    static async clickCloseIconInSnapshot(closeWindow = false) {
        await executeInNewTab(async () => {
            StepLogger.subStep('Click on close icon In snapshot');
            await ToDoListPage.contact.closeSnapshotIcon.clickButton();
        }, 1, closeWindow);
    }

    static async clickCloseIconInEdit() {
        StepLogger.subStep('Click on Close icon In Edit');
        await ToDoListPage.editEventDialog.close.clickLinkJs();
    }

    static async clickCancelIconInEdit() {
        StepLogger.subStep('Click on Cancel icon In Edit');
        await ToDoListPage.editEventDialog.cancel.clickLinkJs();
    }

    static async verifyContactPageDisplayed(closeWindow = false) {
        await executeInNewTab(async () => {
            await ElementHelper.titleIs(ToDoListPageConstant.testData.contactTitle);
        }, 1, closeWindow);
    }

    static async clickTab(tabName: string) {
        StepLogger.subStep(`Click on "${tabName}' tab.`);
        await ToDoListPage.getTabElement(tabName).clickButton();
    }

    static async verifyTabDisplayed(tabName: string) {
        StepLogger.subVerification(`Verify "${tabName}' tab displayed.`);
        await ToDoListPage.getTabElement(tabName).verifyDisplayedStatus();
    }

    static async clickAddEventIcon(switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(ToDoListPage.iframes.event);
        }
        StepLogger.subStep('Click "Add Event" icon.');
        await ToDoListPage.event.addEvent.clickLinkJs();
    }

    static async clickAddNoteIcon() {
        StepLogger.subStep('Click "Add a Note" icon.');
        await ToDoListPage.event.addNote.clickLinkJs();
    }

    static async verifyAddNoteIconDisplayed() {
        StepLogger.subVerification('Verify "Add a Note" icon displayed.');
        await ToDoListPage.event.addNote.verifyDisplayedStatus();
    }

    static async clickNoteTab(notesNumber: string) {
        StepLogger.subStep('Click "Notes" tab.');
        await ToDoListPage.getNotesTab(notesNumber).clickLinkJs();
    }

    static async verifyNoteTabDisplayed(notesNumber: string) {
        StepLogger.subVerification('Verify "Notes" tab displayed.');
        await ToDoListPage.getNotesTab(notesNumber).verifyDisplayedStatus();
    }

    static async verifyNoteExists(noteDescription: string) {
        StepLogger.subVerification(`Verify ${noteDescription} note exists`);
        await ExpectationHelper.verifyStringEqualTo(await ToDoListPage.event.addedNote.getText(), noteDescription);
    }

    static async canTypeInNoteTitle(title: string) {
        StepLogger.subStep('Click on Note Title tb.');
        await ToDoListPage.editEventDialog.noteTitleTb.clickLinkJs();
        StepLogger.subStep(`Type ${title} in Note Title tb.`);
        await ToDoListPage.editEventDialog.noteTitleTb.sendKeys(title);
    }

    static async canTypeInNoteDescription(description: string) {
        await ToDoListPage.editEventDialog.noteTitleTb.sendKeys(description);
        StepLogger.subStep(`Type ${description} Note Description `);
        await PageHelperExtension.executeInIFrame([ToDoListPage.iframes.noteDescription], async () => {
            await ToDoListPage.editEventDialog.noteDescriptionTb.clickLinkJs();
            await ToDoListPage.editEventDialog.noteDescriptionTb.sendKeys(description);
        });
        await WaitHelper.waitForPageToStable();
    }

    static async clickAddTaskIcon(switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(ToDoListPage.iframes.taskList);
        }
        StepLogger.subStep('Click "Add Task" icon.');
        await ToDoListPage.event.addTask.clickLinkJs();
    }

    static async verifyCreatedActivity(title: string, switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(ToDoListPage.iframes.newEvent);
        }
        StepLogger.subStep('Verify "Add Event" popup displayed.');
        await ToDoListPage.getTaskPopupTitle(title).verifyDisplayedStatus();
    }

    static async verifyCanTypeInSubjectTextbox(value: string, switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(ToDoListPage.iframes.newEvent);
        }
        StepLogger.subStep('Type in "Subject" textbox.');
        await ToDoListPage.event.subjectTextbox.sendKeys(value);
    }

    static async verifyCanTypeInSubjectTbTaskTab(value: string, switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(ToDoListPage.iframes.taskPage);
        }
        StepLogger.subStep('Type in "Subject" textbox in the Task popup.');
        await ToDoListPage.event.subjectTaskTextbox.sendKeys(value);
    }

    static async clickSaveActivity(switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(ToDoListPage.iframes.newEvent);
        }
        StepLogger.subStep('Click Save new event button.');
        await ToDoListPage.event.saveActivity.clickLink();
    }

    static async clickSaveTask() {
        StepLogger.subStep('Click Save Task Icon.');
        await ToDoListPage.event.saveTask.clickLink();
    }

    static async verifyAddNewTaskPopup(switchToFrame: boolean = true,
                                       subjectName: string = ToDoListPageConstant.elementNames.newTask) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(ToDoListPage.iframes.taskList);
        }
        StepLogger.subStep(`Verify ${subjectName} popup displayed.`);
        await ToDoListPage.getEventElement(subjectName).verifyDisplayedStatus();
    }

    static async switchTabAndGetOverdueList() {
        StepLogger.subStep('Switch to the first tab.');
        await PageHelper.switchToFirstTab();
        StepLogger.subStep('Click on To Do list item.');
        await HomePageHelper.clickToDoListLabel();
        StepLogger.subStep('Click on overdue arrow.');
        await ToDoListPageHelper.clickOnOverdueArrow();
        StepLogger.subStep('Click "Overdue" option');
        await ToDoListPageHelper.clickOnItemInDdl(ToDoListPageConstant.overdue.dueThisWeek);
    }

    static async goToContactAndSelectTab(tabName: string) {
        StepLogger.subStep('Search for a contact');
        await ToDoListPageHelper.searchForContact();
        StepLogger.subStep('Click "Contact Element" panel.');
        await ToDoListPageHelper.clickContactElement();
        StepLogger.subStep('Click on close icon in snapshot');
        await ToDoListPageHelper.clickCloseIconInSnapshot();
        StepLogger.subStep(`Click on "${tabName}' tab.`);
        await ToDoListPageHelper.clickTab(tabName);
    }

    static async verifySubjectNameInEventsDisplayed(subjectName: string) {
        StepLogger.subVerification(`Verify ${subjectName} activity displayed`);
        await ToDoListPage.getEventElement(subjectName).verifyDisplayedStatus();
    }

    static async verifySubjectNameInActivityListDisplayed(subjectName: string) {
        StepLogger.subVerification(`Verify ${subjectName} activity displayed`);
        await ToDoListPage.getActivityElement(subjectName).verifyDisplayedStatus();
    }

    static async verifyUsernameInActivityListDisplayed() {
        StepLogger.subVerification(`Verify ${ToDoListPageConstant.testData.adminUsername} displayed`);
        await ToDoListPage.getUsernameElement(ToDoListPageConstant.testData.adminUsername).verifyDisplayedStatus();
    }

    static async verifySubjectNameInActivityListHidden(subjectName: string) {
        StepLogger.subVerification(`Verify ${subjectName} activity hidden`);
        await ToDoListPage.getActivityElement(subjectName).verifyHiddenStatus();
    }

    static async clickEditButton() {
        StepLogger.subStep('Click Edit button.');
        await ToDoListPage.listElements.editButton.clickLinkJs();
    }

    static async verifyEditButtonDisplayed() {
        StepLogger.subVerification('Verify edit button displayed.');
        await ToDoListPage.listElements.editButton.verifyDisplayedStatus();
    }

    static async verifyEditButtonHidden() {
        StepLogger.subVerification('Verify edit button hidden.');
        await ToDoListPage.listElements.editButton.verifyHiddenStatus();
    }

    static async verifyEditPanelDisplayed() {
        StepLogger.subVerification('Verify edit panel displayed.');
        await ToDoListPage.editEventDialog.overview.verifyDisplayedStatus();
    }

    static async verifyEditPanelHidden() {
        StepLogger.subVerification('Verify edit panel hidden.');
        await ToDoListPage.editEventDialog.overview.verifyHiddenStatus();
    }

    static async verifyCanEditSubjectTb() {
        const subjectName = PageHelper.getUniqueId();
        StepLogger.subStep(`Type ${subjectName} in search tb`);
        await ToDoListPage.editEventDialog.subjectTextbox.sendKeys(subjectName);
        return subjectName;
    }

    static async typeInSearchBox(subjectName: string) {
        StepLogger.subStep(`Type ${subjectName} in search tb`);
        await ToDoListPage.listElements.searchTb.sendKeys(subjectName);
    }

    static async getCompletedData(subjectName: string) {
        StepLogger.subStep('Click on "Overdue" arrow');
        await ToDoListPageHelper.clickOnOverdueArrow();
        StepLogger.subStep('Click "Completed This Week" option');
        await ToDoListPageHelper.clickOnItemInDdl(ToDoListPageConstant.overdue.completedThisWeek);
        StepLogger.subStep('Click on "Refresh" icon');
        await this.clickOnRefresh();
        StepLogger.subStep(`Type ${subjectName} in search textbox`);
        await this.typeInSearchBox(`${subjectName}`);
        await WaitHelper.waitForPageToStable();
        await ToDoListPage.getActivityElement(subjectName).clickLinkJs();
    }

    static async verifyCanEditStartAndEndDateAndTime() {
        const time = ToDoListPageConstant.testData;
        StepLogger.subStep(`Type ${time.twoAM} in Start Date textbox`);
        await ToDoListPage.editEventDialog.startTime.sendKeys(time.twoAM);
        StepLogger.subStep('Pick Start Date');
        await ToDoListPage.editEventDialog.pickStartDate.clickLinkJs();
        StepLogger.subStep('Click on Today span');
        await ToDoListPage.editEventDialog.today.clickLinkJs();
    }

    static async verifyCanCheckOccuredInEditPanel() {
        await StepLogger.subStep('Click on Occured checkbox.');
        await ToDoListPage.editEventDialog.occuredCheckbox.clickLinkJs();
        return ToDoListPage.listElements.selectedSubjectName.getText();
    }

    static async verifyCanSelectCompletedInDdl() {
        await StepLogger.subStep('Click on Status Ddl.');
        await ToDoListPage.editEventDialog.statusDdl.clickLinkJs();
        await StepLogger.subStep('Click on Completed option.');
        await ToDoListPage.getItemInDdl(ToDoListPageConstant.testData.completed).clickLinkJs();
    }

    static async clickSaveEditEventLink() {
        StepLogger.subStep('Click Save edit event link.');
        await ToDoListPage.editEventDialog.save.clickLinkJs();
        await WaitHelper.waitForPageToStable();
        StepLogger.subStep('Click on "Refresh"');
        await this.clickOnRefresh();
    }

    static async verifyCanSelectElementsDepositionFromDdl() {
        await WaitHelper.waitForPageToStable();
        StepLogger.subStep('Click on Deposition ddl.');
        await ToDoListPage.editEventDialog.depositionDdl.clickLinkJs();
        await WaitHelper.waitForPageToStable();
        StepLogger.subStep('Select Deposition from the ddl.');
        await ToDoListPage.editEventDialog.depositionDdlElement.clickLinkJs();
    }

    static async verifyCanClickOccurredTick() {
        const subjectName = await ToDoListPage.listElements.selectedSubjectName.getText();
        StepLogger.subStep('Click on Occurred tick to mark event as completed');
        await ToDoListPage.listElements.completedTick.clickLinkJs();
        return subjectName;
    }

    static async verifyOccurredTickDisplayed() {
        StepLogger.subStep('Verify Occurred tick to mark event as completed');
        await ToDoListPage.listElements.completedTick.verifyDisplayedStatus();
    }

    static async clickAttachmentTick() {
        const subjectName = await ToDoListPage.listElements.selectedSubjectName.getText();
        StepLogger.subStep('Click on Attatchement tick');
        await ToDoListPage.listElements.attachIcon.clickLinkJs();
        return subjectName;
    }

    static async verifyAttachmentSubWindowFields() {
        const fieldNames = ToDoListPageConstant.elementNames;
        StepLogger.subVerification('Verify "Name title fields" displayed');
        await ToDoListPage.getFormField(fieldNames.name).verifyDisplayedStatus();
        StepLogger.subVerification('Verify "Description fields" displayed');
        await ToDoListPage.getFormField(fieldNames.description).verifyDisplayedStatus();
        StepLogger.subVerification('Verify "File to Attach fields" displayed');
        await ToDoListPage.getFormField(fieldNames.fileToAttach).verifyDisplayedStatus();
        StepLogger.subVerification('Verify "is Private fields" displayed');
        await ToDoListPage.getFormFieldLabel(fieldNames.isPrivate).verifyDisplayedStatus();
    }

    static async createNewActivityAndGetInToDoListTable(activityName: string) {
        const subjectName = PageHelper.getUniqueId();
        StepLogger.subStep(`Create a new ${activityName}`);
        await this.goToContactAndSelectTab(activityName);
        await this.clickAddEventIcon();
        await this.verifyCanTypeInSubjectTextbox(subjectName);
        await this.clickSaveActivity();
        await this.switchTabAndGetOverdueList();
        await this.clickOnRefresh();
        await this.typeInSearchBox(subjectName);
        await ToDoListPage.getActivityElement(subjectName).clickLinkJs();
        return subjectName;
    }

    static async createNewTaskAndGetInToDoList(activityName: string) {
        const subjectName = PageHelper.getUniqueId();
        StepLogger.subStep(`Create a new ${activityName}`);
        await this.goToContactAndSelectTab(activityName);
        await this.clickAddTaskIcon();
        await this.verifyCanTypeInSubjectTbTaskTab(subjectName);
        await this.clickSaveActivity();
        await this.switchTabAndGetOverdueList();
        await this.clickOnRefresh();
        await this.typeInSearchBox(subjectName);
        await ToDoListPage.getActivityElement(subjectName).clickLinkJs();
        return subjectName;
    }

    static async revertActivityToUndetermined(subjectName: string) {
        await StepLogger.subStep('Revert Activity from Completed to Undetermined.');
        await this.getOverdueData(subjectName);
        await ToDoListPage.editEventDialog.statusDdl.clickLinkJs();
        await ToDoListPage.getItemInDdl(ToDoListPageConstant.testData.undetermined).clickLinkJs();
        await ToDoListPageHelper.clickSaveTask();
    }

    url(): string {
        return EndpointHelper.tasksQueue;
    }
}

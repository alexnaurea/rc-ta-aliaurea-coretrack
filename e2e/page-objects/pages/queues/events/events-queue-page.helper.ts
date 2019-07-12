import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { WaitHelper } from '../../../../components/html/wait-helper';
import { Constants } from '../../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../../components/misc-utils/expectation-helper';
import { CommonPage } from '../../common/common.po';
import { HomePageHelper } from '../../home-page/home-page.helper';

import { EventQueuePage } from './events-queue-page.po';

export class EventQueueHelper {

    static async verifyEventsQueuePageDisplayed() {
        await EventQueuePage.title.verifyDisplayedStatus();
    }

    static async clickAddEventButton(switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(EventQueuePage.eventsQueue.resourceOneFrame);
        }

        await EventQueuePage.buttons.addEvent.clickButton();
    }

    static async verifyEventDialog() {
        await PageHelper.switchToDefaultContent();
        await EventQueuePage.eventDialog.dialogTitle.verifyDisplayedStatus();
    }

    static async navigateToNewEventDialog() {
        await HomePageHelper.clickQueuesLink();
        await HomePageHelper.verifyQueuesMenuIsExpanded();
        await HomePageHelper.verifyOptionsDisplayedUnderQueues();
        await HomePageHelper.clickEventsUnderQueues();
        await EventQueueHelper.verifyEventsQueuePageDisplayed();
        await EventQueueHelper.clickAddEventButton();
        await EventQueueHelper.verifyEventDialog();
    }

    static async navigateToEventsQueue() {
        await HomePageHelper.clickQueuesLink();
        await HomePageHelper.verifyQueuesMenuIsExpanded();
        await HomePageHelper.verifyOptionsDisplayedUnderQueues();
        await HomePageHelper.clickEventsUnderQueues();
        await EventQueueHelper.verifyEventsQueuePageDisplayed();
    }

    static async verifyDetailsAttributes(switchToFrame: boolean = false) {
        const { eventDialog } = EventQueuePage;

        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await eventDialog.subject.verifyDisplayedStatus();
        await eventDialog.owner.verifyDisplayedStatus();
        await eventDialog.attendee.verifyDisplayedStatus();
        await eventDialog.type.verifyDisplayedStatus();
        await eventDialog.startDate.verifyDisplayedStatus();
        await eventDialog.endDate.verifyDisplayedStatus();
        await eventDialog.allDayEvent.verifyDisplayedStatus();
        await eventDialog.ocurred.verifyDisplayedStatus();
        await eventDialog.syncOutlook.verifyDisplayedStatus();
    }

    static async verifyMandatoryAttributes(switchToFrame: boolean = false) {
        const { eventDialog } = EventQueuePage;

        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        const count = await eventDialog.iconMandatory.item.count();
        await ExpectationHelper.verifyValueEqualTo(count, Constants.number.five);
    }

    static async verifyEventDialogButtons(switchToFrame: boolean = false) {
        const { eventDialog } = EventQueuePage;

        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await eventDialog.save.verifyDisplayedStatus();
        await eventDialog.close.verifyDisplayedStatus();
    }

    static async clickCloseEventDialog(switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await EventQueuePage.eventDialog.close.clickButton();
    }

    static async verifyUnsavedChangesDialog(toSwitch: boolean = false) {
        if (toSwitch) {
            await PageHelper.switchToiFrame(CommonPage.contentIFrameOnModal);
        }

        await EventQueuePage.eventDialog.unsavedChanges.verifyDisplayedStatus();
    }

    static async clickOkErrorDialog() {
        await EventQueuePage.eventDialog.okButton.clickButton();
    }

    static async verifyEventDialogClosedAndEventsQueue() {
        await PageHelper.switchToDefaultContent();
        await EventQueuePage.eventDialog.dialogTitle.verifyHiddenStatus();
        await this.verifyEventsQueuePageDisplayed();
    }

    static async clickSaveEventDialog(switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await EventQueuePage.eventDialog.save.clickButton();
    }

    static async verifyNameRequiredDialog(toSwitch: boolean = false) {
        if (toSwitch) {
            await PageHelper.switchToiFrame(CommonPage.contentIFrameOnModal);
        }

        await EventQueuePage.eventDialog.eventNameRequired.verifyDisplayedStatus();
    }

    static async enterSubject(subject: string, switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await EventQueuePage.eventDialog.subject.sendKeys(subject);
    }

    static async verifySubjectIsEntered(subject: string) {
        await EventQueuePage.eventDialog.subject.verifyTextEntered(subject);
    }

    static async selectOwnerOption(option: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await EventQueuePage.eventDialog.ownerOption(option).clickButton();
        StepLogger.subStep('Wait for tasks to load');
        await WaitHelper.sleepForTwoSeconds();
    }

    static async verifyOwnerSelectedOption(option: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        const selected = await EventQueuePage.eventDialog.owner.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, option);
    }

    static async selectTaskOption() {
        const { eventDialog } = EventQueuePage;
        StepLogger.subStep('Get all tasks');
        const options = await PageHelper.getTextOfElements(eventDialog.allTasks);
        const lastOption = options[options.length - Constants.number.one];
        await eventDialog.taskOption(lastOption).clickButton();
        StepLogger.subStep('Wait for branches to load');
        await WaitHelper.sleepForTwoSeconds();
        return lastOption;
    }

    static async verifyTaskSelectedOption(option: string) {
        const selected = await EventQueuePage.eventDialog.task.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, option);
    }

    static async enterStartAndEndDates() {
        const { eventDialog } = EventQueuePage;
        const today = new Date().toLocaleDateString();
        await eventDialog.startDateCalendar.clickButton();
        await eventDialog.todayStartDate.clickButton();
        await eventDialog.endDateCalendar.clickButton();
        await eventDialog.todayEndDate.clickButton();
        return today;
    }

    static async enterPastStartAndEndDates() {
        const { eventDialog } = EventQueuePage;
        const today = new Date();
        const yesterday = new Date(today.setDate(today.getDate() - 1)).toLocaleDateString();
        await eventDialog.startDate.sendKeys(yesterday, true);
        await eventDialog.endDate.sendKeys(yesterday, true);
        return yesterday;
    }

    static async verifyStartAndEndDates(date: string) {
        const { eventDialog } = EventQueuePage;

        await eventDialog.startDate.verifyTextBoxContains(date);
        await eventDialog.endDate.verifyTextBoxContains(date);
    }

    static async verifyEventDialogClosedAndEventCreated(subject: string, toHidePast: boolean = true) {
        const { eventsQueue } = EventQueuePage;
        await PageHelper.switchToDefaultContent();
        await EventQueuePage.eventDialog.dialogTitle.verifyHiddenStatus();
        await PageHelper.switchToDefaultContentAndIFrame(eventsQueue.resourceOneFrame);
        if (!toHidePast) {
            await EventQueuePage.buttons.hidePastEvents.clickButton();
        }

        await this.searchEvent(subject);
        await eventsQueue.record(subject).verifyDisplayedStatus();
    }

    static async searchEvent(subject: string) {
        const { eventsQueue } = EventQueuePage;
        let page = Constants.number.one;
        await PageHelper.switchToDefaultContentAndIFrame(eventsQueue.resourceOneFrame);
        StepLogger.subStep('Wait for page number to display');
        await WaitHelper.waitForElementToBeDisplayed(eventsQueue.currentPage(page.toString()).item);
        StepLogger.subStep('Check if event is present');
        let isVisible = await eventsQueue.record(subject).item.isPresent();

        while (!isVisible) {
            page++;
            await eventsQueue.nextPage.clickButton();
            StepLogger.subStep('Wait for page number to display');
            await WaitHelper.waitForElementToBeDisplayed(eventsQueue.currentPage(page.toString()).item);
            StepLogger.subStep('Check if event is present');
            isVisible = await eventsQueue.record(subject).item.isPresent();
        }
    }

    static async verifyEventCreated(subject: string) {
        await EventQueuePage.eventsQueue.record(subject).verifyDisplayedStatus();
    }

    static async clickSaveAndCloseEventDialog(switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await EventQueuePage.eventDialog.saveAndClose.clickButton();
    }

    static async selectAllDayEvent() {
        await EventQueuePage.eventDialog.allDayEvent.clickButton();
    }

    static async verifyAllDayEventAndDateFields() {
        const { eventDialog } = EventQueuePage;

        await eventDialog.allDayEventYes.verifyDisplayedStatus();
        await eventDialog.startTime.verifyHiddenStatus();
        await eventDialog.endTime.verifyHiddenStatus();
    }

    static async selectOcurred() {
        await EventQueuePage.eventDialog.ocurred.clickButton();
    }

    static async verifyOcurredOptionYes() {
        await EventQueuePage.eventDialog.ocurredYes.verifyDisplayedStatus();
    }

    static async selectSyncOutlook() {
        await EventQueuePage.eventDialog.syncOutlook.clickButton();
    }

    static async verifySyncOutlookOptionYes() {
        await EventQueuePage.eventDialog.syncOutlookYes.verifyDisplayedStatus();
    }

    static async clickEventButton(subject: string, switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(EventQueuePage.eventsQueue.resourceOneFrame);
        }

        await EventQueuePage.eventsQueue.itemIcon(subject).clickButton();
    }

    static async verifyEventOpened(subject: string, switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await EventQueuePage.eventDialog.subject.verifyTextEntered(subject);
    }
}

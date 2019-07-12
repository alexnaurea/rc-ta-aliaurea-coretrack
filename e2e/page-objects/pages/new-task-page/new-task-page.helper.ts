import * as moment from 'moment';

import { StepLogger } from '../../../../core/logger/step-logger';
import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { ElementHelper } from '../../../components/html/element-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { DateHelper } from '../../../components/misc-utils/date-helper';
import { EndpointHelper } from '../../../components/misc-utils/endpoint-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { BasePageHelper } from '../base-page.helper';
import { CommonPage } from '../common/common.po';
import { HomePageOneHelper } from '../home-page/home-page-one.helper';
import { HomePage } from '../home-page/home-page.po';
import { LoginPageHelper } from '../login-page/login-page.helper';
import { DropdownField } from '../models/dropdown-field';
import { NewAccountPage } from '../new-account-page/new-account-page.po';
import { TasksQueuePageHelper } from '../tasks-queue-page/tasks-queue-page.helper';

import { NewTaskPage } from './new-task-page.po';

const { executeInIFrame } = PageHelper;
const { attributes } = HtmlHelper;

export class NewTaskPageHelper extends BasePageHelper {

    /**
     * Verify 'NewTask' page is displayed
     */
    static async verifyNewTaskPageIsDisplayed() {
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await NewTaskPage.form.newTaskTitle.verifyDisplayedStatus();
        });
    }

    /**
     * Enter Subject
     * @param subject
     */
    static async enterSubject(subject: string) {
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await NewTaskPage.form.subject.hoverOverAndClick();
            await NewTaskPage.form.subject.sendKeys(subject);
        });
    }

    /**
     * Verify Subject is entered properly
     * @param subject
     */
    static async verifySubjectIsEntered(subject: string) {
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await NewTaskPage.form.subject.verifyTextEntered(subject);
        });
    }

    /**
     * Select owner
     * @param options
     */
    static async selectOwner(options: DropdownField) {
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DropDownHelper.selectSpecificOrNthOptionByCss(NewTaskPage.form.owner,
                options);
        });
    }

    /**
     * Verify entered Owner is selected
     * @param options
     */
    static async verifyEnteredOwnerIsSelected(options: DropdownField) {
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await WaitHelper.sleep(PageHelper.timeout.xs);
            await ExpectationHelper.verifyValueAttributeOfDropdownOption(NewTaskPage.form.owner,
                options);
        });
    }

    /**
     * Select Task
     * @param options
     */
    static async selectTask(options: DropdownField) {
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DropDownHelper.selectSpecificOrNthOptionByCss(NewTaskPage.form.task,
                options);
        });
    }

    /**
     * Verify Entered task is selected
     * @param options
     */
    static async verifyEnteredTaskIsSelected(options: DropdownField) {
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ExpectationHelper.verifyValueAttributeOfDropdownOption(NewTaskPage.form.task,
                options);
        });
    }

    /**
     * Select Branch
     * @param options
     */
    static async selectBranch(options: DropdownField) {
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await WaitHelper.sleep();
            await DropDownHelper.selectSpecificOrNthOptionByCss(NewTaskPage.form.branch,
                options);
        });
    }

    /**
     * Verify entered Branch is selected
     * @param options
     */
    static async verifyEnteredBranchIsSelected(options: DropdownField) {
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ExpectationHelper.verifyValueAttributeOfDropdownOption(NewTaskPage.form.branch,
                options);
        });
    }

    /**
     * Select Task and Branch dropdown options
     * @param task
     * @param branch
     */
    static async selectTaskAndBranch(task: DropdownField,
                                     branch: DropdownField) {
        await this.selectTask(task);
        await this.verifyEnteredTaskIsSelected(task);
        await this.selectBranch(branch);
    }

    /**
     * Verify entered Task and Branch fields are properly selected
     * @param task
     * @param branch
     */
    static async verifyEnteredTaskAndBranchAreSelected(task: DropdownField,
                                                       branch: DropdownField) {
        await this.verifyEnteredTaskIsSelected(task);
        await this.verifyEnteredBranchIsSelected(branch);
    }

    /**
     * Helps in clicking 'DateStart' calender icon
     */
    static async clickDateStartCalenderIcon() {
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await NewTaskPage.form.calender.startDate.hoverOverAndClick();
        });
    }

    /**
     * Helps in clicking 'DateDue' calender icon
     */
    static async clickDateDueCalenderIcon() {
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await NewTaskPage.form.calender.dueDate.hoverOverAndClick();
        });
    }

    /**
     * Pick date on DateStart Calender
     * Date can be selected from two ways inRange or OutOfRange
     * @param date
     * @param inRange
     */
    static async pickDateOnDateStartCalender(date = DateHelper.getCurrentDate(),
                                             inRange = true) {
        await this.clickDateStartCalenderIcon();
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            if (inRange) {
                await ElementHelper.hoverMouseDownAndClickJS(NewAccountPage.calendar
                    .inRangeDate(date.date()));
            } else {
                await ElementHelper.hoverMouseDownAndClickJS(NewAccountPage.calendar
                    .outOfRangeDate(date.date()));
            }
        });
        return date;
    }

    /**
     * Pick date on DateDue Calender
     * Date can be selected from two ways inRange or OutOfRange
     * @param date
     * @param inRange
     */
    static async pickDateOnDateDueCalender(date = DateHelper.getFutureDate(),
                                           inRange = true) {
        await this.clickDateDueCalenderIcon();
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await WaitHelper.sleep(PageHelper.timeout.xs);
            if (inRange) {
                await ElementHelper.hoverMouseDownAndClickJS(NewAccountPage.calendar
                    .inRangeDate(date.date()));
            } else {
                await ElementHelper.hoverMouseDownAndClickJS(NewAccountPage.calendar
                    .outOfRangeDate(date.date()));
            }
        });
        return date;
    }

    /**
     * Verify Selected date is displayed in DateStart field
     * @param expectedDate
     */
    static async verifySelectedDateStartIsDisplayed(expectedDate: moment.Moment) {
        const { dateStartLabel } = NewTaskPage.form;

        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            const timeStamp = await dateStartLabel.getAtttribute(attributes.value);
            const actualDate = timeStamp.split(Constants.separators.space)[0];
            await ExpectationHelper.verifyStringValueEqualTo(dateStartLabel,
                actualDate, expectedDate.format(Constants.dateFormats.M_D_YYYY));
        });
    }

    /**
     * Verify Selected date is displayed in DateDue field
     * @param expectedDate
     */
    static async verifySelectedDateDueIsDisplayed(expectedDate: moment.Moment) {
        const { dateDueLabel } = NewTaskPage.form;

        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            const timeStamp = await dateDueLabel.getAtttribute(attributes.value);
            const actualDate = timeStamp.split(Constants.separators.space)[0];
            await ExpectationHelper.verifyStringValueEqualTo(dateDueLabel,
                actualDate, expectedDate.format(Constants.dateFormats.M_D_YYYY));
        });
    }

    /**
     * Select status
     * @param textOrIndex
     */
    static async selectStatus(textOrIndex: DropdownField) {
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DropDownHelper.selectSpecificOrNthOptionByCss(NewTaskPage.form.status,
                textOrIndex);
        });
    }

    /**
     * Verify entered status is selected
     * @param textOrIndex
     */
    static async verifyEnteredStatusIsSelected(textOrIndex: DropdownField) {
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ExpectationHelper.verifyValueAttributeOfDropdownOption(NewTaskPage.form.status,
                textOrIndex);
        });
    }

    /**
     * Click 'Save' on NewTask modal
     */
    static async clickSave() {
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await NewTaskPage.form.save.clickButton();
        });
    }

    static async enterDescription(subject: string) {
        StepLogger.subStep('Enter Description');
        await executeInIFrame([CommonPage.contentIFrameOnModal, NewTaskPage.form.descriptionIframe], async () => {
            await NewTaskPage.form.description.hoverOverAndClick();
            await NewTaskPage.form.description.item.sendKeys(subject);
        });
    }

    static async verifyEnteredDescription(subject: string) {
        StepLogger.subVerification('Verify enter Description');
        await executeInIFrame([CommonPage.contentIFrameOnModal, NewTaskPage.form.descriptionIframe], async () => {
            await NewTaskPage.form.description.hoverOverAndClick();
            await NewTaskPage.form.description.verifyContainsText(subject);
        });
    }

    static async clickSaveAndClose() {
        StepLogger.subStep('Click Save And Close');
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await NewTaskPage.form.saveAndClose.clickButton();
        });
    }

    static async enterDatesAndVerify() {
        StepLogger.subStep('Enter Start And Due Dates');
        const startDate = await NewTaskPageHelper.pickDateOnDateStart();
        const dueDate = await NewTaskPageHelper.pickDateOnDateDue();
        StepLogger.subVerification('Verify Start And Due Dates');
        await NewTaskPageHelper.verifySelectedDateStart(startDate);
        await NewTaskPageHelper.verifySelectedDateDue(dueDate);
    }

    static async pickDateOnDateStart(date = DateHelper.getCurrentDate(),
                                     inRange = true) {
        StepLogger.subStep('Pick Start Date');
        let expectedDate: string;
        await this.pickDateOnDateStartCalender(date, inRange);
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            const { dateStartLabel } = NewTaskPage.form;
            const timeStamp = await dateStartLabel.getAtttribute(attributes.value);
            expectedDate = timeStamp.split(Constants.separators.space)[0];
        });
        return expectedDate;
    }

    static async pickDateOnDateDue(date = DateHelper.getFutureDate(),
                                   inRange = true) {
        StepLogger.subStep('Pick Due Date');
        let expectedDate: string;
        await this.pickDateOnDateDueCalender(date, inRange);
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await WaitHelper.sleep(PageHelper.timeout.xs);
            const { dateDueLabel } = NewTaskPage.form;
            const timeStamp = await dateDueLabel.getAtttribute(attributes.value);
            expectedDate = timeStamp.split(Constants.separators.space)[0];
        });
        return expectedDate;
    }

    static async verifySelectedDateStart(expectedDate: string) {
        StepLogger.subVerification('Verify Start Date');
        const { dateStartLabel } = NewTaskPage.form;
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            const timeStamp = await dateStartLabel.getAtttribute(attributes.value);
            const actualDate = timeStamp.split(Constants.separators.space)[0];
            await ExpectationHelper.verifyStringValueEqualTo(dateStartLabel,
                actualDate, expectedDate);
        });
    }

    static async verifySelectedDateDue(expectedDate: string) {
        StepLogger.subVerification('Verify Due Date');
        const { dateDueLabel } = NewTaskPage.form;
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            const timeStamp = await dateDueLabel.getAtttribute(attributes.value);
            const actualDate = timeStamp.split(Constants.separators.space)[0];
            await ExpectationHelper.verifyStringValueEqualTo(dateDueLabel,
                actualDate, expectedDate);
        });
    }

    static async verifySubjectIsRequired() {
        StepLogger.subVerification('Verify "Subject is required" message');
        const { subjectIsRequired } = NewTaskPage.form;
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await subjectIsRequired.verifyDisplayedStatus();
        });
    }

    static async navigateToNewTask() {
        StepLogger.subStep('Navigate to Task and Create task');
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();
        await HomePageOneHelper.expandQueueAndClickTask();
        await TasksQueuePageHelper.verifyTasksQueuePageDisplayed();
        await TasksQueuePageHelper.clickAddTaskIcon();
        await this.verifyNewTaskPageIsDisplayed();
    }

    static async verifyAttributes() {
        StepLogger.subVerification('Verify All Attributes');
        await this.verifyMandatoryAttributes();
        const { form } = NewTaskPage;
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await form.dateDueLabel.verifyDisplayedStatus();
            await form.descriptionIframe.verifyDisplayedStatus();
            await form.syncToOutlookOff.scrollToElement();
            await form.syncToOutlookOff.verifyDisplayedStatus();
        });
    }

    static async verifyMandatoryAttributes() {
        StepLogger.subVerification('Verify Mandatory Attributes');
        const { form } = NewTaskPage;
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await form.subject.verifyDisplayedStatus();
            await form.owner.verifyDisplayedStatus();
            await form.dateStartLabel.verifyDisplayedStatus();
            await form.status.verifyDisplayedStatus();
        });
    }

    static async verifySaveAndClose() {
        StepLogger.subVerification('Verify Save and Close');
        const { form } = NewTaskPage;
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await form.save.verifyDisplayedStatus();
            await form.close.verifyDisplayedStatus();
        });
    }

    static async clickSyncToOutLookOff() {
        StepLogger.subStep('Click No of "Sync To OutLook"');
        const { syncToOutlookOff } = NewTaskPage.form;
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await syncToOutlookOff.scrollToElement();
            await syncToOutlookOff.clickButton();
        });
    }

    static async verifySyncToOutLookOn() {
        StepLogger.subVerification('Verify Yes of "Sync To OutLook"');
        const { syncToOutlookOn } = NewTaskPage.form;
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await syncToOutlookOn.scrollToElement();
            await syncToOutlookOn.verifyDisplayedStatus();
        });
    }

    static async clickSyncToOutLookOn() {
        StepLogger.subStep('Click Yes of "Sync To OutLook"');
        const { syncToOutlookOn } = NewTaskPage.form;
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await syncToOutlookOn.scrollToElement();
            await syncToOutlookOn.clickButton();
        });
    }

    static async verifySyncToOutLookOff() {
        StepLogger.subVerification('Verify No of "Sync To OutLook"');
        const { syncToOutlookOff } = NewTaskPage.form;
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await syncToOutlookOff.scrollToElement();
            await syncToOutlookOff.verifyDisplayedStatus();
        });
    }

    static async verifyInvalidStartDate() {
        StepLogger.subVerification('Verify Due Date');
        const { invalidStartDate } = NewTaskPage.form;
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await invalidStartDate.verifyDisplayedStatus();
        });
    }

    static async clickClose() {
        StepLogger.subStep('Click Close');
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await NewTaskPage.form.closeLink.clickButton();
        });
    }

    static async verifyConfirmWindow() {
        StepLogger.subVerification('Verify Confirm Dialog window');
        const { dialogBox } = NewAccountPage;
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await dialogBox.window.verifyDisplayedStatus();
        });
    }

    static async clickDialogOk() {
        StepLogger.subStep('Click Dialog Ok Option');
        const { dialogBox } = NewAccountPage;
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await dialogBox.okButton.clickButton();
        });
    }

    static async clickDialogCancel() {
        StepLogger.subStep('Click Dialog Cancel Option');
        const { dialogBox } = NewAccountPage;
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await dialogBox.cancelButton.clickButton();
        });
    }

    static async enterStartDateAfterDueAndVerify() {
        StepLogger.subStep('Enter Start After the Due Dates');
        const startDate = await NewTaskPageHelper.pickDateOnDateStart(DateHelper.getFutureDate());
        const dueDate = await NewTaskPageHelper.pickDateOnDateDue(DateHelper.getCurrentDate());
        StepLogger.subVerification('Verify Start And Due Dates');
        await this.verifySelectedDateStart(startDate);
        await this.verifySelectedDateDue(dueDate);
    }

    url(): string {
        return EndpointHelper.tasksQueue;
    }
}

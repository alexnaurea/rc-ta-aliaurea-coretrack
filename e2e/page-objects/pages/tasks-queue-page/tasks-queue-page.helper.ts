import { StepLogger } from '../../../../core/logger/step-logger';
import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { EndpointHelper } from '../../../components/misc-utils/endpoint-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { BasePageHelper } from '../base-page.helper';
import { CommonPage } from '../common/common.po';
import { HomePageOneHelper } from '../home-page/home-page-one.helper';
import { HomePage } from '../home-page/home-page.po';
import { LoginPageHelper } from '../login-page/login-page.helper';
import { NewTaskPageConstant } from '../new-task-page/new-task-page.constants';
import { NewTaskPageHelper } from '../new-task-page/new-task-page.helper';

import { TasksQueuePageConstant } from './tasks-queue-page.constants';
import { TasksQueuePage } from './tasks-queue-page.po';

const { executeInIFrame } = PageHelper;

export class TasksQueuePageHelper extends BasePageHelper {

    /**
     * Verify 'TasksQueue' page is displayed
     */
    static async verifyTasksQueuePageDisplayed() {
        await TasksQueuePage.pageTitle.verifyDisplayedStatus();
    }

    /**
     * Click 'AddTask' Icon
     */
    static async clickAddTaskIcon() {
        await executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await TasksQueuePage.header.addTaskIcon.clickButton();
        });
    }

    /**
     * Verify task is displayed in 'Queue: Task' list
     * @param subject
     */
    static async verifyTaskIsDisplayedInQueueList(subject: string) {
        await executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await TasksQueuePage.queueTask.specific(subject).verifyDisplayedStatus();
        });
    }

    /**
     * Verifies if 'NewTask' modal is closed and task with given subject is displayed
     * under 'Queue: Task' list on TasksQueuePage
     * Note: To verify tasks under 'Queue  : Task Queue for Email Notification' list, make sure
     * to navigate to the respective page before calling this method
     * @param taskSubject
     */
    static async verifyTaskIsSavedAndDisplayedUnderTaskQueue(taskSubject: string) {
        await ExpectationHelper.verifyHiddenStatus(CommonPage.contentIFrameOnModal);
        await this.selectNoGroupingOption();
        await TasksQueuePageHelper.verifyTaskIsDisplayedInQueueList(taskSubject);
    }

    static async selectNoGroupingOption() {
        StepLogger.subStep('Select No Grouping Option');
        await executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await DropDownHelper.selectOptionByCssText(TasksQueuePage.header.grouping,
                TasksQueuePageConstant.elementNames.noGrouping);
        });
    }

    static async selectTaskListAndClick() {
        StepLogger.subStep('Select Task from List');
        await TasksQueuePageHelper.selectNoGroupingOption();
        await executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await TasksQueuePage.queueTask.queueTaskList.hoverOver();
            await TasksQueuePage.queueTask.queueTaskList.clickButton();
        });
    }

    static async navigateAndCreateTask(taskName: string) {
        StepLogger.subStep('Navigate to Task and Create task');
        const { taskQueueForEmail, cornell, queue } = NewTaskPageConstant;
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();
        await HomePageOneHelper.expandQueueAndClickTask();
        await TasksQueuePageHelper.verifyTasksQueuePageDisplayed();
        await TasksQueuePageHelper.clickAddTaskIcon();
        await NewTaskPageHelper.verifyNewTaskPageIsDisplayed();
        await NewTaskPageHelper.enterSubject(taskName);
        await NewTaskPageHelper.verifySubjectIsEntered(taskName);
        await NewTaskPageHelper.selectOwner(queue);
        await NewTaskPageHelper.verifyEnteredOwnerIsSelected(queue);
        await NewTaskPageHelper.selectTaskAndBranch(taskQueueForEmail, cornell);
        await NewTaskPageHelper.verifyEnteredTaskAndBranchAreSelected(taskQueueForEmail, cornell);
        await NewTaskPageHelper.enterDatesAndVerify();
        await NewTaskPageHelper.clickSaveAndClose();
        await TasksQueuePageHelper.verifyTaskIsSavedAndDisplayedUnderTaskQueue(taskName);
    }

    url(): string {
        return EndpointHelper.tasksQueue;
    }
}

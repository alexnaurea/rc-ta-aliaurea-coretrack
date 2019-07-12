import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { CommonPageConstant } from '../../../page-objects/pages/common/common-page.constant';
import { HomePageHelper } from '../../../page-objects/pages/home-page/home-page.helper';
import { LoginPageHelper } from '../../../page-objects/pages/login-page/login-page.helper';
import { ToDoListPageHelper } from '../../../page-objects/pages/to-do-list/to-do-list-page.helper';
import { ToDoListPageConstant } from '../../../page-objects/pages/to-do-list/to-do-list.constants';

import { SuiteNames } from '../../helpers/suite-names';

describe(SuiteNames.regressionSuite, () => {
    const one =  CommonPageConstant.one;
    const tasks = ToDoListPageConstant.contactTabs.tasks;
    const overdue = ToDoListPageConstant.overdue;
    let loginPageHelper: LoginPageHelper;
    let subjectName = PageHelper.getUniqueId();

    beforeAll(async () => {
        loginPageHelper = LoginPageHelper.getInstance();
        await PageHelper.maximiseBrowser();
    });

    beforeEach(async () => {
        await PageHelper.restartBrowser();
        await loginPageHelper.goTo();
        await LoginPageHelper.loginAsAdmin();
        await HomePageHelper.clickToDoListLabel();
    });

    // Jira References - COTRAC-165
    it('To verify that user is able to access "To Do List" page - [22896358]', async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Mar 2019 13:45:26 GMT

        StepLogger.caseId = 22896358;
        StepLogger.stepId(1);
        StepLogger.step('Verify that To do list menu item is displayed in the left panel.');
        StepLogger.verification('To do List should be displayed.');
        await HomePageHelper.verifyToDoListLinkDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click "To do List"');
        await HomePageHelper.clickToDoListLabel();
        StepLogger.verification('To Do list page should be displayed.');
        await ToDoListPageHelper.verifyToDoListPageIsDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Verify the elements displayed on to do list page.');
        StepLogger.verification(`1. My activities filter.
            2. Filter based on status of completion of tasks
            3. Search text box
            4. Refresh`);
        await ToDoListPageHelper.verifyPageElementsDisplayed();
    });

    // Jira References - COTRAC-165
    it('To verify that user can filter tasks "due today" - [22896359]', async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Mar 2019 13:45:25 GMT

        StepLogger.caseId = 22896359;
        StepLogger.stepId(1);
        StepLogger.step('Verify that To do list menu item is displayed in the left panel.');
        StepLogger.verification('To do List should be displayed.');
        await HomePageHelper.verifyToDoListLinkDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click "To do List"');
        await HomePageHelper.clickToDoListLabel();
        StepLogger.verification('To Do list page should be displayed.');
        await ToDoListPageHelper.verifyToDoListPageIsDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('User should be able to select "Due today" in the filter');
        await ToDoListPageHelper.clickOnOverdueArrow();
        StepLogger.verification('Tasks due today should be displayed.');
        await ToDoListPageHelper.verifyDisplayedItemInDdl(overdue.dueToday);
    });

    // Jira References - COTRAC-165
    it('To verify that user can filter tasks "due tomorrow" - [22896360]', async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Mar 2019 13:45:26 GMT

        StepLogger.caseId = 22896360;
        StepLogger.stepId(1);
        StepLogger.step('Verify that To do list menu item is displayed in the left panel.');
        StepLogger.verification('To do List should be displayed.');
        await HomePageHelper.verifyToDoListLinkDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click "To do List"');
        await HomePageHelper.clickToDoListLabel();
        StepLogger.verification('To Do list page should be displayed.');
        await ToDoListPageHelper.verifyToDoListPageIsDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('User should be able to select "Due  tomorrow" in the filter');
        await ToDoListPageHelper.clickOnOverdueArrow();
        StepLogger.verification('Tasks due  tomorrow should be displayed.');
        await ToDoListPageHelper.verifyDisplayedItemInDdl(overdue.dueTomorrow);
    });

    // Jira References - COTRAC-165
    it('To verify that user can filter tasks "due this week" - [22896361]', async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Mar 2019 13:45:25 GMT

        StepLogger.caseId = 22896361;
        StepLogger.stepId(1);
        StepLogger.step('Verify that To do list menu item is displayed in the left panel.');
        StepLogger.verification('To do List should be displayed.');
        await HomePageHelper.verifyToDoListLinkDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click "To do List"');
        await HomePageHelper.clickToDoListLabel();
        StepLogger.verification('To Do list page should be displayed.');
        await ToDoListPageHelper.verifyToDoListPageIsDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('User should be able to select "Due this week" in the filter');
        await ToDoListPageHelper.clickOnOverdueArrow();
        StepLogger.verification('Tasks due this week should be displayed.');
        await ToDoListPageHelper.verifyDisplayedItemInDdl(overdue.dueThisWeek);
    });

    // Jira References - COTRAC-165
    it('To verify that user can filter tasks "Overdue". - [22896362]', async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Mar 2019 13:45:26 GMT

        StepLogger.caseId = 22896362;
        StepLogger.stepId(1);
        StepLogger.step('Verify that To do list menu item is displayed in the left panel.');
        StepLogger.verification('To do List should be displayed.');
        await HomePageHelper.verifyToDoListLinkDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click "To do List"');
        await HomePageHelper.clickToDoListLabel();
        StepLogger.verification('To Do list page should be displayed.');
        await ToDoListPageHelper.verifyToDoListPageIsDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('User should be able to select "Overdue" in the filter');
        await ToDoListPageHelper.clickOnOverdueArrow();
        StepLogger.verification('Tasks Overdue should be displayed.');
        await ToDoListPageHelper.verifyDisplayedItemInDdl(overdue.overdue);
    });

    // Jira References - COTRAC-165
    it('To verify that user can filter tasks "due next week" - [22896363]', async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Mar 2019 13:45:26 GMT

        StepLogger.caseId = 22896363;
        StepLogger.stepId(1);
        StepLogger.step('Verify that To do list menu item is displayed in the left panel.');
        StepLogger.verification('To do List should be displayed.');
        await HomePageHelper.verifyToDoListLinkDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click "To do List"');
        await HomePageHelper.clickToDoListLabel();
        StepLogger.verification('To Do list page should be displayed.');
        await ToDoListPageHelper.verifyToDoListPageIsDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('User should be able to select "Due next week" in the filter');
        await ToDoListPageHelper.clickOnOverdueArrow();
        StepLogger.verification('Tasks Due next week should be displayed.');
        await ToDoListPageHelper.verifyDisplayedItemInDdl(overdue.dueNextWeek);
    });

    // Jira References - COTRAC-165
    it('To verify that user can filter tasks "due this month" - [22896364]', async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Mar 2019 13:45:25 GMT

        StepLogger.caseId = 22896364;
        StepLogger.stepId(1);
        StepLogger.step('Verify that To do list menu item is displayed in the left panel.');
        StepLogger.verification('To do List should be displayed.');
        await HomePageHelper.verifyToDoListLinkDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click "To do List"');
        await HomePageHelper.clickToDoListLabel();
        StepLogger.verification('To Do list page should be displayed.');
        await ToDoListPageHelper.verifyToDoListPageIsDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('User should be able to select "Due this month" in the filter');
        await ToDoListPageHelper.clickOnOverdueArrow();
        StepLogger.verification('Tasks Due this month should be displayed.');
        await ToDoListPageHelper.verifyDisplayedItemInDdl(overdue.dueThisMonth);
    });

    // Jira References - COTRAC-165
    it('To verify that user can filter tasks "Completed today" - [22896365]', async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Mar 2019 13:45:26 GMT

        StepLogger.caseId = 22896365;
        StepLogger.stepId(1);
        StepLogger.step('Verify that To do list menu item is displayed in the left panel.');
        StepLogger.verification('To do List should be displayed.');
        await HomePageHelper.verifyToDoListLinkDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click "To do List"');
        await HomePageHelper.clickToDoListLabel();
        StepLogger.verification('To Do list page should be displayed.');
        await ToDoListPageHelper.verifyToDoListPageIsDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('User should be able to select "Completed today" in the filter');
        await ToDoListPageHelper.clickOnOverdueArrow();
        StepLogger.verification('Tasks Completed today should be displayed.');
        await ToDoListPageHelper.verifyDisplayedItemInDdl(overdue.completedToday);
    });

    // Jira References - COTRAC-165
    it('To verify that user can filter tasks "Completed this week" - [22896367]', async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Mar 2019 13:45:25 GMT

        StepLogger.caseId = 22896367;
        StepLogger.stepId(1);
        StepLogger.step('Verify that To do list menu item is displayed in the left panel.');
        StepLogger.verification('To do List should be displayed.');
        await HomePageHelper.verifyToDoListLinkDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click "To do List"');
        await HomePageHelper.clickToDoListLabel();
        StepLogger.verification('To Do list page should be displayed.');
        await ToDoListPageHelper.verifyToDoListPageIsDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('User should be able to select "Completed this week" in the filter');
        await ToDoListPageHelper.clickOnOverdueArrow();
        StepLogger.verification('Completed this week today should be displayed.');
        await ToDoListPageHelper.verifyDisplayedItemInDdl(overdue.completedThisWeek);
    });

    // Jira References - COTRAC-165
    it('To verify that user is able to open task tab of a contact - [22896371]', async () => {
        // Auto generated by aurea-automation - util on Sun, 24 Mar 2019 14:48:34 GMT

        StepLogger.caseId = 22896371;
        StepLogger.stepId(1);
        StepLogger.step('Search for a contact in global search box.');
        await ToDoListPageHelper.searchForContact();
        StepLogger.verification('All the matching results should be displayed.');
        await ToDoListPageHelper.verifyContactElementDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Select the contact');
        await ToDoListPageHelper.clickContactElement();
        await ToDoListPageHelper.clickCloseIconInSnapshot();
        StepLogger.verification('Contact details should be displayed.');
        await ToDoListPageHelper.verifyContactPageDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Goto Tasks tab');
        await ToDoListPageHelper.clickTab(ToDoListPageConstant.contactTabs.tasks);
        StepLogger.verification('Task tab should be displayed.');
        await ToDoListPageHelper.verifyTabDisplayed(tasks);
    });

    // Jira References - COTRAC-165
    it('To verify that created task is getting displayed in to do list page - [22896374]', async () => {
        // Auto generated by aurea-automation - util on Sun, 24 Mar 2019 14:48:34 GMT

        StepLogger.preCondition(`Go to contact and select "${tasks}" tab`);
        await ToDoListPageHelper.goToContactAndSelectTab(tasks);

        StepLogger.caseId = 22896374;
        StepLogger.stepId(1);
        StepLogger.step('Click "add task"');
        await ToDoListPageHelper.clickAddTaskIcon();
        StepLogger.verification('"New task" dialog box should be displayed.');
        await ToDoListPageHelper.verifyCreatedActivity(ToDoListPageConstant.elementNames.newTask);

        StepLogger.stepId(2);
        StepLogger.step('Enter values in mandatory fields.');
        StepLogger.verification('It should be entered.');
        await ToDoListPageHelper.verifyCanTypeInSubjectTbTaskTab(subjectName);

        StepLogger.stepId(3);
        StepLogger.step('Click "save"');
        await ToDoListPageHelper.clickSaveActivity(false);
        StepLogger.verification('Task should be saved.');
        await ToDoListPageHelper.verifyCreatedActivity(subjectName);

        StepLogger.stepId(4);
        StepLogger.step('Go to Todo list page.');
        await ToDoListPageHelper.switchTabAndGetOverdueList();
        await ToDoListPageHelper.typeInSearchBox(subjectName);
        StepLogger.verification('The task created in step 3 should be displayed under due today filter.');
        await ToDoListPageHelper.verifySubjectNameInActivityListDisplayed(subjectName);
    });

    // Jira References - COTRAC-165
    it('To verify that the user can edit the task from to do page. - [22896380]', async () => {
        // Auto generated by aurea-automation - util on Sun, 24 Mar 2019 14:48:34 GMT

        StepLogger.preCondition('Get data based on overdue');
        await ToDoListPageHelper.getOverdueData(subjectName);

        StepLogger.caseId = 22896380;
        StepLogger.stepId(1);
        StepLogger.step('Verify that Edit button is displayed beside the task in To Do list page.');
        StepLogger.verification('Edit button should be displayed.');
        await ToDoListPageHelper.verifyEditButtonDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click "Edit"');
        await ToDoListPageHelper.clickEditButton();
        StepLogger.verification('Edit task dialog box should be displayed.');
        await ToDoListPageHelper.verifyEditPanelDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Edit the subject.');
        StepLogger.verification('User should be able to edit the subject.');
        subjectName = await ToDoListPageHelper.verifyCanEditSubjectTb();

        StepLogger.stepId(4);
        // Covered in step#5
        StepLogger.step('Edit start date and End date');
        StepLogger.verification('User should be able to edit the start dates and the end dates.');

        StepLogger.stepId(5);
        StepLogger.step('Edit start time and Due time');
        StepLogger.verification('User should be able to edit time.');
        await ToDoListPageHelper.verifyCanEditStartAndEndDateAndTime();

        StepLogger.stepId(6);
        StepLogger.step('Click "save". and refresh the to do list.');
        await ToDoListPageHelper.clickSaveEditEventLink();
        StepLogger.verification('Edited task should be displayed in the list.');
        await ToDoListPageHelper.verifySubjectNameInActivityListDisplayed(subjectName);
    });

    // Jira References - COTRAC-165
    it('To verify user can add a note to task - [22896383]', async () => {
        // Auto generated by aurea-automation - util on Sun, 24 Mar 2019 14:48:34 GMT
        const noteTitle = PageHelper.getUniqueId();
        const noteDescription = PageHelper.getUniqueId();

        StepLogger.preCondition('Get data based on overdue');
        await ToDoListPageHelper.getOverdueData(subjectName);

        StepLogger.caseId = 22896383;
        StepLogger.stepId(1);
        StepLogger.step('Verify that Edit button is displayed beside the task in To Do list page.');
        StepLogger.verification('Edit button should be displayed.');
        await ToDoListPageHelper.verifyEditButtonDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click "Edit"');
        await ToDoListPageHelper.clickEditButton();
        StepLogger.verification('Edit task dialog box should be displayed.');
        await ToDoListPageHelper.verifyEditPanelDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Verify that "add a note" button is displayed on the top.');
        StepLogger.verification('It should be displayed.');
        await ToDoListPageHelper.verifyAddNoteIconDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click "Add a note" button.');
        await ToDoListPageHelper.clickAddNoteIcon();
        StepLogger.verification('Notes tab should be displayed.');
        await ToDoListPageHelper.verifyNoteTabDisplayed(one);

        StepLogger.stepId(5);
        StepLogger.step('Enter some text in note title and description');
        StepLogger.verification('Text should be entered.');
        await ToDoListPageHelper.canTypeInNoteTitle(noteTitle);
        await ToDoListPageHelper.canTypeInNoteDescription(noteDescription);

        StepLogger.stepId(6);
        StepLogger.step('Click "save"');
        await ToDoListPageHelper.clickSaveTask();
        StepLogger.verification('Note should be saved.');
        await ToDoListPageHelper.verifySubjectNameInActivityListDisplayed(subjectName);

        StepLogger.stepId(7);
        StepLogger.step('Click "Edit" button for the task for which note is being added.');
        StepLogger.verification('Notes tab number is incremented by 1.');
        await ToDoListPageHelper.verifyNoteTabDisplayed(one);

        StepLogger.stepId(8);
        StepLogger.step('Click "Notes" tab');
        await ToDoListPageHelper.clickNoteTab(one);
        StepLogger.verification('The saved note should be displayed there.');
        await ToDoListPageHelper.verifyNoteExists(noteDescription);
    });

    // Jira References - COTRAC-165
    it('To verify that user can mark the task completed by Edit Task. - [22896388]', async () => {
        // Auto generated by aurea-automation - util on Sun, 24 Mar 2019 14:48:34 GMT
        StepLogger.preCondition('Get data based on overdue');
        await ToDoListPageHelper.getOverdueData(subjectName);

        StepLogger.caseId = 22896388;
        StepLogger.stepId(1);
        StepLogger.step('Verify that Edit button is displayed beside the task in To Do list page.');
        StepLogger.verification('Edit button should be displayed.');
        await ToDoListPageHelper.verifyEditButtonDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click "Edit"');
        await ToDoListPageHelper.clickEditButton();
        StepLogger.verification('Edit task dialog box should be displayed.');
        await ToDoListPageHelper.verifyEditPanelDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Edit the status to "Completed"');
        StepLogger.verification('Task should be marked as completed.');
        await ToDoListPageHelper.verifyCanSelectCompletedInDdl();

        StepLogger.stepId(4);
        StepLogger.step('Click "save"');
        await ToDoListPageHelper.clickSaveTask();
        StepLogger.verification('Task should be completed.');
        await ToDoListPageHelper.verifyEditPanelHidden();

        StepLogger.stepId(5);
        StepLogger.step('Select Completed today in the filter and Refresh the list');
        await ToDoListPageHelper.getCompletedData(subjectName);
        StepLogger.verification('The task completed in step 4 should be listed there.');
        await ToDoListPageHelper.verifySubjectNameInActivityListDisplayed(subjectName);
    });

    // Jira References - COTRAC-165
    it('To verify that user can mark the task completed. - [22896385]', async () => {
        // Auto generated by aurea-automation - util on Sun, 24 Mar 2019 14:48:34 GMT

        StepLogger.preCondition('Get due this week data');
        const newSubject = await ToDoListPageHelper.createNewTaskAndGetInToDoList(
            ToDoListPageConstant.contactTabs.tasks);

        StepLogger.caseId = 22896385;
        StepLogger.stepId(1);
        StepLogger.step('Verify that tick mark button is displayed beside the task in To Do list page.');
        StepLogger.verification('It should be displayed.');
        await ToDoListPageHelper.verifyOccurredTickDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Click "Mark as complete" tick mark.');
        await ToDoListPageHelper.verifyCanClickOccurredTick();
        StepLogger.verification('The task should be marked as complete.');
        await ToDoListPageHelper.verifySubjectNameInActivityListHidden(subjectName);

        StepLogger.stepId(3);
        StepLogger.step('Select Completed today in the filter and Refresh the list');
        await ToDoListPageHelper.getCompletedData(newSubject);
        StepLogger.verification('The task completed in step 2 should be listed there.');
        await ToDoListPageHelper.verifySubjectNameInActivityListDisplayed(newSubject);
    });
});

import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { RandomHelper } from '../../../../components/misc-utils/random-helper';
import { GoalsConstants } from '../../../../page-objects/pages/administration/goals/goals.constants';
import { GoalsHelper } from '../../../../page-objects/pages/administration/goals/goals.helper';
import { GoalsPageHelper } from '../../../../page-objects/pages/goals-page/goals-page.helper';
import { HomePageHelper } from '../../../../page-objects/pages/home-page/home-page.helper';
import { HomePage1Helper } from '../../../../page-objects/pages/home-page/home-page1.helper';
import { LoginPageHelper } from '../../../../page-objects/pages/login-page/login-page.helper';
import { SuiteNames } from '../../../helpers/suite-names';

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

    it('To verify the goal (of selected role) is added to customized user in grid. - [22968029]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 10:35:56 GMT

        StepLogger.caseId = 22968029;
        const roles = GoalsConstants.roles;
        const user = GoalsConstants.users;

        StepLogger.preCondition('Navigate To Goals Page');
        await GoalsHelper.navigateToGoalsPage();

        StepLogger.stepId(1);
        StepLogger.step('Verify if user is on Manage Goals page.');
        StepLogger.verification('User is on Manage Goals page.');
        await GoalsHelper.verifyManageGoalsPage();

        StepLogger.stepId(2);
        StepLogger.step(`Select "Roles" from first filter drop-down.
        Select role value in second filter drop-down (one which was used in precondition test case)`);
        await GoalsHelper.selectAValueFromFirstFilter(roles);
        StepLogger.verification('List of goals for selected role should be displayed.');
        await GoalsHelper.verifyValueSelected(roles);

        StepLogger.stepId(3);
        StepLogger.step(`Select "Users" from first filter drop-down.
        Select user value in second filter drop-down (one which was customized in precondition test case)`);
        await GoalsHelper.selectAValueFromFirstFilter(user);
        StepLogger.verification('List of goals for selected user is displayed.');
        await GoalsHelper.verifyValueSelected(user);
    });

    it('To verify if user goal is customized by selecting user from drop-down "Start with records from this user". - [22968031]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 11:01:03 GMT

        StepLogger.caseId = 22968031;
        const user = GoalsConstants.user;

        StepLogger.stepId(1);
        StepLogger.step('Go to "Administration -> Goals"');
        await HomePageHelper.clickAdministrationLink();
        await HomePage1Helper.clickOnGoalsOptionUnderAdministration();
        StepLogger.verification('Manage goals page should be displayed.');
        await GoalsHelper.verifyManageGoalsPage();

        StepLogger.stepId(2);
        StepLogger.step('Click "Customize User" button');
        await GoalsHelper.clickOnCustomizeUserButton();
        StepLogger.verification('"Customize User Goals" pop-up should be displayed.');
        await GoalsHelper.verifyCustomizeUserGoalsPopUp();

        StepLogger.stepId(3);
        StepLogger.step('Select a user to customize from "Select the user to customize" drop-down');
        await GoalsHelper.selectAUserFromCustomizeDropDown(user);
        StepLogger.verification('User is able to select a user from drop-down.');
        await GoalsHelper.verifyUserSelected(user);

        StepLogger.stepId(4);
        StepLogger.step('Select the radio button - "Start with records from this user"');
        await GoalsHelper.clickOnStartWithRecordsFromThisUserRadio();
        StepLogger.verification('User is able to select radio button');
        await GoalsHelper.verifyStartWithRecordsFromThisUserRadioSelected();

        StepLogger.stepId(5);
        StepLogger.step('Select a user from "Start with records from this user" drop-down');
        await GoalsHelper.selectAUserFromStartWithRecordFromThisUser(user);
        StepLogger.verification('User is able to select user from drop-down');
        await GoalsHelper.verifyUserSelected(user);

        StepLogger.stepId(6);
        StepLogger.step('Click Save button');
        await GoalsHelper.clickSaveOnCustomizeUserPopup();
        StepLogger.verification('Window is closed and user is redirected to Manage Goals page.');
        await GoalsHelper.verifyCustomizeUserGoalsPopUpClosed();
    });

    it('To verify the goals (of selected user) are added to customized user in grid. - [22968033]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 11:47:24 GMT

        StepLogger.caseId = 22968033;
        const users = GoalsConstants.users;
        const user = GoalsConstants.user;

        StepLogger.preCondition('Navigate To Goals Page');
        await GoalsHelper.navigateToGoalsPage();

        StepLogger.stepId(1);
        StepLogger.step('Verify if user is on Manage Goals page.');
        StepLogger.verification('User is on Manage Goals page.');
        await GoalsHelper.verifyManageGoalsPage();

        StepLogger.stepId(2);
        StepLogger.step(`Select "Users" from first filter drop-down
        Select user value in second filter drop-down (one which was used in precondition test case against the drop-down "START WITH RECORDS FROM THIS
        USER")`);
        await GoalsHelper.selectAValueFromFirstFilter(users);
        StepLogger.verification('List of goals for selected user is displayed.');
        await GoalsHelper.verifyValueSelected(users);

        StepLogger.stepId(3);
        StepLogger.step('Select user value in second filter drop-down (one which was customized in precondition test case )');
        await GoalsHelper.selectAValueFromSecondeFilter(user);
        StepLogger.verification('List of goals for selected user is displayed.');
        await GoalsHelper.verifyValueSelected(user);
    });

    it('To verify result of customize user goal when option "Start with a clean slate" is selected. - [22968034]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 12:03:07 GMT

        StepLogger.caseId = 22968034;
        const user = GoalsConstants.user;

        StepLogger.stepId(1);
        StepLogger.step('Go to "Administration -> Goals"');
        await HomePageHelper.clickAdministrationLink();
        await HomePage1Helper.clickOnGoalsOptionUnderAdministration();
        StepLogger.verification('Manage goals page should be displayed.');
        await GoalsHelper.verifyManageGoalsPage();

        StepLogger.stepId(2);
        StepLogger.step('Click "Customize User" button');
        await GoalsHelper.clickOnCustomizeUserButton();
        StepLogger.verification('"Customize User Goals" pop-up should be displayed.');
        await GoalsHelper.verifyCustomizeUserGoalsPopUp();

        StepLogger.stepId(3);
        StepLogger.step('Select a user to customize from "Select the user to customize" drop-down');
        await GoalsHelper.selectAUserFromCustomizeDropDown(user);
        StepLogger.verification('User is able to select a user from drop-down.');
        await GoalsHelper.verifyUserSelected(user);

        StepLogger.stepId(4);
        StepLogger.step('Verify that "Start with a clean slate" is selected by default');
        StepLogger.verification('"Start with a clean slate" is selected by default');
        await GoalsHelper.verifystartWithACleanStateRadioSelected();

        StepLogger.stepId(5);
        StepLogger.step('Click Save button');
        await GoalsHelper.clickSaveOnCustomizeUserPopup();
        StepLogger.verification('Window is closed and user is redirected to Manage goals page');
        await GoalsHelper.verifyCustomizeUserGoalsPopUp();
    });

    it('To verify if user goal is customized by selecting role from drop-down "Start with records from' +
        'this role" and "DELETE" radio button. - [22968035]', async () => {
            // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 16:23:44 GMT

            StepLogger.caseId = 22968035;
            const user = GoalsConstants.user;
            const role = GoalsConstants.businessDevelopment;

            StepLogger.stepId(1);
            StepLogger.step('Go to "Administration -> Goals"');
            await HomePageHelper.clickAdministrationLink();
            await HomePage1Helper.clickOnGoalsOptionUnderAdministration();
            StepLogger.verification('Manage goals page should be displayed.');
            await GoalsHelper.verifyManageGoalsPage();

            StepLogger.stepId(2);
            StepLogger.step('Click "Customize User" button');
            await GoalsHelper.clickOnCustomizeUserButton();
            StepLogger.verification('"Customize User Goals" pop-up should be displayed.');
            await GoalsHelper.verifyCustomizeUserGoalsPopUp();

            StepLogger.stepId(3);
            StepLogger.step('Select a user to customize from "Select the user to customize" drop-down');
            await GoalsHelper.selectAUserFromCustomizeDropDown(user);
            StepLogger.verification('User is able to select a user from drop-down.');
            await GoalsHelper.verifyUserSelected(user);

            StepLogger.stepId(4);
            StepLogger.step('Select the radio button - "Start with records from this role"');
            await GoalsHelper.clickOnStartWithRecordsFromThisRoleRadio();
            StepLogger.verification('User is able to select radio button');
            await GoalsHelper.verifyStartWithRecordsFromThisRoleRadioSelected();

            StepLogger.stepId(5);
            StepLogger.step('Select a role from "Start with records from this role" drop-down');
            await GoalsHelper.selectARoleFromDropDown(role);
            StepLogger.verification('User is able to select role from drop-down');
            await GoalsHelper.verifyRoleSelected(role);

            StepLogger.stepId(6);
            StepLogger.step('Select "DELETE" radio button');
            await GoalsHelper.clickOnDeleteRadioButton();
            StepLogger.verification('User is able to select "DELETE" radio button');
            await GoalsHelper.verifyDeleteRadioButtonSelected();

            StepLogger.stepId(7);
            StepLogger.step('Click Save button');
            await GoalsHelper.clickSaveOnCustomizeUserPopup();
            StepLogger.verification('Window is closed and user is redirected to Manage Goal page.');
            await GoalsHelper.verifyCustomizeUserGoalsPopUpClosed();
        });

    it('To verify that user can Edit the customized goal. - [22968037]', async () => {
        // Auto generated by aurea-automation - util on Thu, 18 Apr 2019 16:46:05 GMT

        StepLogger.caseId = 22968037;
        const num = await RandomHelper.getRandomNumber(1);
        const dollar = GoalsConstants.dollars;

        StepLogger.preCondition('Navigate And Access Created Goal');
        await GoalsHelper.navigateAndAccessCreatedGoal();

        StepLogger.stepId(1);
        StepLogger.step('Verify Customized goal is displayed on Manage goals page.');
        StepLogger.verification('Goal should be displayed.');
        await GoalsHelper.verifyGoalEntryDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Double click the goal.');
        await GoalsHelper.doubleClickOnGoalsEntry();
        StepLogger.verification('Edit Goal Window should be displayed.');
        await GoalsHelper.verifyEditGoalsScreen();

        StepLogger.stepId(3);
        StepLogger.step('Edit the target value.');
        await GoalsPageHelper.enterTargetValue(num);
        StepLogger.verification('It should be edited.');
        await GoalsPageHelper.verifyTargetValue(num);

        StepLogger.stepId(4);
        StepLogger.step('Edit the description.');
        await GoalsPageHelper.enterDescription(dollar);
        StepLogger.verification('It should be edited.');
        await GoalsPageHelper.verifyDescriptionTextValue(dollar);

        StepLogger.stepId(5);
        StepLogger.step('Click "save and close".');
        await GoalsHelper.clickOnSaveAndClose();
        StepLogger.verification('Edited goal should be displayed on Manage goals page.');
        await GoalsHelper.verifyNewGoalsScreenClosed();
    });
});

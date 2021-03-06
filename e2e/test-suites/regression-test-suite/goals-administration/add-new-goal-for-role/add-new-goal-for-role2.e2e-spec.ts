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

    it('To verify that user is able to create goal with Year as period type. - [22932147]', async () => {
        // Auto generated by aurea-automation - util on Tue, 16 Apr 2019 01:27:03 GMT

        StepLogger.caseId = 22932147;
        const role = GoalsConstants.goal;
        const role1 = GoalsConstants.businessDevelopment;
        const goalType = GoalsConstants.production;
        const year = GoalsConstants.year;
        const num = await RandomHelper.getRandomNumber(1);
        const dollar = GoalsConstants.dollars;
        const active = GoalsConstants.active;

        StepLogger.stepId(1);
        StepLogger.step('Click "Administration -> Goals".');
        await HomePageHelper.clickAdministrationLink();
        await HomePage1Helper.clickOnGoalsOptionUnderAdministration();
        StepLogger.verification('"Manage Goals" should be displayed.');
        await GoalsHelper.verifyManageGoalsPage();

        StepLogger.stepId(2);
        StepLogger.step('Click "Add Goal".');
        await GoalsHelper.clickOnAddGoal();
        StepLogger.verification('"New Goal" page should be displayed.');
        await GoalsHelper.verifyNewGoalsScreen();

        StepLogger.stepId(3);
        StepLogger.step('Select "Role" in "goal is for" field.');
        await GoalsPageHelper.selectGoalIsFor(role);
        StepLogger.verification('Role field should be displayed.');
        await GoalsPageHelper.verifySelectedGoalIsFor(role);

        StepLogger.stepId(4);
        StepLogger.step('Select a role from the drop down.');
        await GoalsPageHelper.selectRole(role1);
        StepLogger.verification('User should be selected.');
        await GoalsPageHelper.verifySelectedRole(role1);

        StepLogger.stepId(5);
        StepLogger.step('Select "goal type"');
        await GoalsPageHelper.selectGoalType(goalType);
        StepLogger.verification('It should be selected.');
        await GoalsPageHelper.verifySelectedGoalType(goalType);

        StepLogger.stepId(6);
        StepLogger.step('Select year in "Period type" field');
        await GoalsPageHelper.selectPeriodType(year);
        StepLogger.verification('It should be selected.');
        await GoalsPageHelper.verifySelectedPeriodType(year);

        StepLogger.stepId(7);
        StepLogger.step('Enter value in " target type"  and "Target value" field.');
        await GoalsPageHelper.enterTargetValue(num);
        await GoalsPageHelper.selectTargetType(dollar);
        StepLogger.verification('It should be entered.');
        await GoalsPageHelper.verifyTargetValue(num);
        await GoalsPageHelper.verifySelectedTargetType(dollar);

        StepLogger.stepId(8);
        StepLogger.step('Enter description.');
        await GoalsPageHelper.enterDescription(dollar);
        StepLogger.verification('Description should be entered.');
        await GoalsPageHelper.verifyDescriptionTextValue(dollar);

        StepLogger.stepId(9);
        StepLogger.step('Enter display order.');
        await GoalsPageHelper.enterDisplayOrder(num);
        StepLogger.verification('It should be entered.');
        await GoalsPageHelper.verifyDisplayOrderValue(num);

        StepLogger.stepId(10);
        StepLogger.step('Verify "Active" is selected by default in status field.');
        StepLogger.verification('It should be selected.');
        await GoalsHelper.verifyStatusSelected(active);

        StepLogger.stepId(11);
        StepLogger.step('Click "save".');
        await GoalsHelper.clickOnSaveAndClose();
        StepLogger.verification('Active Goal with year period type should be saved.');
        await GoalsPageHelper.verifySelectedPeriodType(year);
    });

    it('To verify that user is able to create goal with Quarter as period type. - [22932148]', async () => {
        // Auto generated by aurea-automation - util on Tue, 16 Apr 2019 02:42:05 GMT

        StepLogger.caseId = 22932148;
        const role = GoalsConstants.goal;
        const role1 = GoalsConstants.businessDevelopment;
        const goalType = GoalsConstants.production;
        const quarter = GoalsConstants.quarter;
        const num = await RandomHelper.getRandomNumber(1);
        const dollar = GoalsConstants.dollars;
        const active = GoalsConstants.active;

        StepLogger.stepId(1);
        StepLogger.step('Click "Administration -> Goals".');
        await HomePageHelper.clickAdministrationLink();
        await HomePage1Helper.clickOnGoalsOptionUnderAdministration();
        StepLogger.verification('"Manage Goals" should be displayed.');
        await GoalsHelper.verifyManageGoalsPage();

        StepLogger.stepId(2);
        StepLogger.step('Click "Add Goal".');
        await GoalsHelper.clickOnAddGoal();
        StepLogger.verification('"New Goal" page should be displayed.');
        await GoalsHelper.verifyNewGoalsScreen();

        StepLogger.stepId(3);
        StepLogger.step('Select "Role" in "goal is for" field.');
        await GoalsPageHelper.selectGoalIsFor(role);
        StepLogger.verification('Role field should be displayed.');
        await GoalsPageHelper.verifySelectedGoalIsFor(role);

        StepLogger.stepId(4);
        StepLogger.step('Select a role from the drop down.');
        await GoalsPageHelper.selectRole(role1);
        StepLogger.verification('User should be selected.');
        await GoalsPageHelper.verifySelectedRole(role1);

        StepLogger.stepId(5);
        StepLogger.step('Select "goal type"');
        await GoalsPageHelper.selectGoalType(goalType);
        StepLogger.verification('It should be selected.');
        await GoalsPageHelper.verifySelectedGoalType(goalType);

        StepLogger.stepId(6);
        StepLogger.step('Select Quarter in "Period type" field');
        await GoalsPageHelper.selectPeriodType(quarter);
        StepLogger.verification('It should be selected.');
        await GoalsPageHelper.verifySelectedPeriodType(quarter);

        StepLogger.stepId(7);
        StepLogger.step('Enter value in " target type"  and "Target value" field.');
        await GoalsPageHelper.enterTargetValue(num);
        await GoalsPageHelper.selectTargetType(dollar);
        StepLogger.verification('It should be entered.');
        await GoalsPageHelper.verifyTargetValue(num);
        await GoalsPageHelper.verifySelectedTargetType(dollar);

        StepLogger.stepId(8);
        StepLogger.step('Enter description.');
        await GoalsPageHelper.enterDescription(dollar);
        StepLogger.verification('Description should be entered.');
        await GoalsPageHelper.verifyDescriptionTextValue(dollar);

        StepLogger.stepId(9);
        StepLogger.step('Enter display order.');
        await GoalsPageHelper.enterDisplayOrder(num);
        StepLogger.verification('It should be entered.');
        await GoalsPageHelper.verifyDisplayOrderValue(num);

        StepLogger.stepId(10);
        StepLogger.step('Verify "Active" is selected by default in status field.');
        StepLogger.verification('It should be selected.');
        await GoalsHelper.verifyStatusSelected(active);

        StepLogger.stepId(11);
        StepLogger.step('Click "save".');
        await GoalsHelper.clickOnSave();
        StepLogger.verification('Active Goal with year period type should be saved.');
        await GoalsPageHelper.verifySelectedPeriodType(quarter);
    });

    it('To verify the functionality of save and close button on new goal page. - [22932151]', async () => {
        // Auto generated by aurea-automation - util on Tue, 16 Apr 2019 06:06:55 GMT

        StepLogger.caseId = 22932151;
        const role = GoalsConstants.goal;
        const role1 = GoalsConstants.businessDevelopment;
        const goalType = GoalsConstants.production;
        const year = GoalsConstants.year;
        const num = await RandomHelper.getRandomNumber(1);
        const dollar = GoalsConstants.dollars;
        const active = GoalsConstants.active;

        StepLogger.stepId(1);
        StepLogger.step('Click "Administration -> Goals".');
        await HomePageHelper.clickAdministrationLink();
        await HomePage1Helper.clickOnGoalsOptionUnderAdministration();
        StepLogger.verification('"Manage Goals" should be displayed.');
        await GoalsHelper.verifyManageGoalsPage();

        StepLogger.stepId(2);
        StepLogger.step('Click "Add Goal".');
        await GoalsHelper.clickOnAddGoal();
        StepLogger.verification('"New Goal" page should be displayed.');
        await GoalsHelper.verifyNewGoalsScreen();

        StepLogger.stepId(3);
        StepLogger.step('Select "Role" in "goal is for" field.');
        await GoalsPageHelper.selectGoalIsFor(role);
        StepLogger.verification('Role field should be displayed.');
        await GoalsPageHelper.verifySelectedGoalIsFor(role);

        StepLogger.stepId(4);
        StepLogger.step('Select a role from the drop down.');
        await GoalsPageHelper.selectRole(role1);
        StepLogger.verification('User should be selected.');
        await GoalsPageHelper.verifySelectedRole(role1);

        StepLogger.stepId(5);
        StepLogger.step('Select "goal type"');
        await GoalsPageHelper.selectGoalType(goalType);
        StepLogger.verification('It should be selected.');
        await GoalsPageHelper.verifySelectedGoalType(goalType);

        StepLogger.stepId(6);
        StepLogger.step('Select year in "Period type" field');
        await GoalsPageHelper.selectPeriodType(year);
        StepLogger.verification('It should be selected.');
        await GoalsPageHelper.verifySelectedPeriodType(year);

        StepLogger.stepId(7);
        StepLogger.step('Enter value in " target type"  and "Target value" field.');
        await GoalsPageHelper.enterTargetValue(num);
        await GoalsPageHelper.selectTargetType(dollar);
        StepLogger.verification('It should be entered.');
        await GoalsPageHelper.verifyTargetValue(num);
        await GoalsPageHelper.verifySelectedTargetType(dollar);

        StepLogger.stepId(8);
        StepLogger.step('Enter description.');
        await GoalsPageHelper.enterDescription(dollar);
        StepLogger.verification('Description should be entered.');
        await GoalsPageHelper.verifyDescriptionTextValue(dollar);

        StepLogger.stepId(9);
        StepLogger.step('Enter display order.');
        await GoalsPageHelper.enterDisplayOrder(num);
        StepLogger.verification('It should be entered.');
        await GoalsPageHelper.verifyDisplayOrderValue(num);

        StepLogger.stepId(10);
        StepLogger.step('Verify "Active" is selected by default in status field.');
        StepLogger.verification('It should be selected.');
        await GoalsHelper.verifyStatusSelected(active);

        StepLogger.stepId(10);
        StepLogger.step('Click "save and close".');
        await GoalsHelper.clickOnSaveAndClose();
        StepLogger.verification('Active Goal with quarter period type should be saved and new goal dialog' +
            'should be closed.User should be redirected to Manage goals page.');
        await GoalsHelper.verifyNewGoalsScreenClosed();
    });

    it('To verify the the newly created goal is searchable. - [22932152]', async () => {
        // Auto generated by aurea-automation - util on Tue, 16 Apr 2019 06:10:28 GMT

        StepLogger.caseId = 22932152;
        const roles = GoalsConstants.roles;
        const role = GoalsConstants.businessDevelopment;

        StepLogger.stepId(1);
        StepLogger.step('Click "Administration -> Goals".');
        await HomePageHelper.clickAdministrationLink();
        await HomePage1Helper.clickOnGoalsOptionUnderAdministration();
        StepLogger.verification('"Manage Goals" should be displayed.');
        await GoalsHelper.verifyManageGoalsPage();

        StepLogger.stepId(2);
        StepLogger.step('Select Roles is first search filter.');
        await GoalsHelper.selectAValueFromFirstFilter(roles);
        StepLogger.verification('It should be selected.');
        await GoalsHelper.verifyValueSelected(roles);

        StepLogger.stepId(3);
        StepLogger.step('Select the Role for which the goal is created in the pre condition test case in second filter.');
        await GoalsHelper.selectAValueFromSecondeFilter(role);
        StepLogger.verification('It should be selected.');
        await GoalsHelper.verifyValueSelected(role);

        StepLogger.stepId(4);
        StepLogger.step('Verify the goal created in pre condition is displayed.');
        StepLogger.verification('Goal should be displayed.');
        await GoalsHelper.verifyGoalEntryDisplayed();
    });

    it('To verify that role field is displayed when user selects role in "Goal is for" field. - [22932142]', async () => {
        // Auto generated by aurea-automation - util on Tue, 16 Apr 2019 06:23:58 GMT

        StepLogger.caseId = 22932142;
        const role = GoalsConstants.goal;

        StepLogger.stepId(1);
        StepLogger.step('Click "Administration -> Goals".');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickGoalsUnderAdministration();
        StepLogger.verification('"Manage Goals" should be displayed.');
        await GoalsHelper.verifyManageGoalsPage();

        StepLogger.stepId(2);
        StepLogger.step('Click "Add Goal".');
        await GoalsHelper.clickOnAddGoal();
        StepLogger.verification('"New Goal" page should be displayed.');
        await GoalsHelper.verifyNewGoalsScreen();

        StepLogger.stepId(3);
        StepLogger.step('Select "Role" in "goal is for" field.');
        await GoalsPageHelper.selectGoalIsFor(role);
        StepLogger.verification('Role field should be displayed.');
        await GoalsPageHelper.verifySelectedGoalIsFor(role);
    });
});

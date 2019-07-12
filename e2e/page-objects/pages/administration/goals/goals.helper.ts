import { StepLogger } from '../../../../../core/logger/step-logger';
import { VerboseLogger } from '../../../../../core/logger/verbose-logger';
import { DropDownHelper } from '../../../../components/html/dropdown-helper';
import { ElementHelper } from '../../../../components/html/element-helper';
import { PageHelper } from '../../../../components/html/page-helper';
import { WaitHelper } from '../../../../components/html/wait-helper';
import { ExpectationHelper } from '../../../../components/misc-utils/expectation-helper';
import { CommonPage } from '../../common/common.po';
import { HomePageHelper } from '../../home-page/home-page.helper';
import { HomePage1Helper } from '../../home-page/home-page1.helper';

import { GoalsConstants } from './goals.constants';
import { GoalsPage } from './goals.po';

export class GoalsHelper {

    static async verifyManageGoalsPage() {
        StepLogger.subVerification('Verify Manage Goals Page');
        await GoalsPage.manageGoalsPage.verifyDisplayedStatus();
    }

    static async clickOnAddGoal() {
        StepLogger.subStep('Click On Add Goal');
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await GoalsPage.buttons.addGoals.clickButton();
        });
    }

    static async verifyCustomizeUserButton() {
        StepLogger.subVerification('Verify Customize User Button');
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await GoalsPage.buttons.customizeUser.verifyDisplayedStatus();
        });
    }

    static async clickOnCustomizeUserButton() {
        StepLogger.subVerification('Click On Customize User Button');
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await GoalsPage.buttons.customizeUser.clickButton();
        });
    }

    static async verifyCustomizeUserGoalsPopUp() {
        StepLogger.subVerification('Verify Customize User Goals Pop Up');
        await GoalsPage.customizeUserGoalsPopup.verifyDisplayedStatus();
    }

    static async verifyCustomizeUserGoalsPopUpClosed() {
        StepLogger.subVerification('Verify Customize User Goals Pop Up Closed');
        await GoalsPage.customizeUserGoalsPopup.verifyHiddenStatus();
    }

    static async verifyNewGoalsScreen() {
        StepLogger.subVerification('Verify New Goals Screen');
        await GoalsPage.newGoalsScreen.verifyDisplayedStatus();
    }

    static async verifyNewGoalsScreenClosed() {
        StepLogger.subStep('Verify New Goals Screen Closed');
        await GoalsPage.newGoalsScreen.verifyHiddenStatus();
    }

    static async clickOnCancel() {
        StepLogger.subStep('Click On Cancel');
        await GoalsPage.newGoalsScreenProperties.cancel.clickButton();
    }

    static async selectAGoalFromDropDown(goal: string) {
        StepLogger.subStep('Select A Goal From Drop Down');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DropDownHelper.selectOptionByText(GoalsPage.newGoalsScreenProperties.goalType, goal);
        });
    }

    static async verifyGoalSelected(goal: string) {
        StepLogger.subVerification('Verify Goal Selected');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.goalSelected(goal).verifyDisplayedStatus();
        });
    }

    static async selectARoleFromDropDown(role: string) {
        StepLogger.subStep('Select A Role From Drop Down');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await WaitHelper.waitForElementToBeDisplayed(GoalsPage.customizeUserGoalsProperties.startWithRecordsFromThisRole.item);
            await DropDownHelper.selectOptionByText(GoalsPage.customizeUserGoalsProperties.startWithRecordsFromThisRole, role);
        });
    }

    static async clickOnSave() {
        StepLogger.subStep('Click On Save');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.newGoalsScreenProperties.save.clickButton();
        });
    }

    static async clickOnDelete() {
        StepLogger.subStep('Click On Delete');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.newGoalsScreenProperties.delete.clickButton();
        });
    }

    static async verifyDeleteConfirmationDialog() {
        StepLogger.subVerification('Verify Delete Confirmation Dialog');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.newGoalsScreenProperties.deleteConfirmationDialog.verifyDisplayedStatus();
        });
    }

    static async clickDeleteOnConfirmation() {
        StepLogger.subStep('Click Delete On Confirmation');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.newGoalsScreenProperties.deleteOnConfirmation.clickButton();
        });
    }

    static async clickOnSaveAndClose() {
        StepLogger.subStep('Click On Save And Close');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.newGoalsScreenProperties.saveAndClose.clickButton();
        });
    }

    static async enterDescription(description: string) {
        StepLogger.subStep('Enter Description');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.newGoalsScreenProperties.description.sendKeys(description);
        });
    }

    static async verifyValidationErrorMessage(message: string) {
        StepLogger.subVerification('Verify Validation Error Message');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.validationError(message).verifyDisplayedStatus();
        });
    }

    static async selectAValueFromFirstFilter(value: string) {
        StepLogger.subStep('Select A Value From First Filter');
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await DropDownHelper.selectOptionByText(GoalsPage.buttons.firstFilter, value);
        });
    }

    static async selectAValueFromSecondeFilter(value: string) {
        StepLogger.subStep('Select A Value From Second Filter');
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await WaitHelper.waitForElementToBeDisplayed(GoalsPage.buttons.secondFilter.item);
            await DropDownHelper.selectOptionByText(GoalsPage.buttons.secondFilter, value);
        });
    }

    static async verifyValueSelected(value: string) {
        StepLogger.subVerification('Verify Value Selected');
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await GoalsPage.goalSelected(value).verifyDisplayedStatus();
        });
    }

    static async selectAStatusFromDropDown(status: string) {
        StepLogger.subStep('Select a Status from Drop Down');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DropDownHelper.selectOptionByText(GoalsPage.newGoalsScreenProperties.status, status);
        });
    }

    static async verifyStatusSelected(value: string) {
        StepLogger.subVerification('Verify Value Selected');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.goalSelected(value).verifyDisplayedStatus();
        });
    }

    static async doubleClickOnGoalsEntry() {
        StepLogger.subStep('Double Click On Goals Entry');
        const firstRegionEntry = GoalsPage.buttons.goalEntry(1);
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await ElementHelper.actionMouseMove(firstRegionEntry);
            await ElementHelper.actionDoubleClick(firstRegionEntry.item,
                firstRegionEntry.name)
                .catch((e: Error) => VerboseLogger.log(`Error during double click: ${e}`));
        });
    }

    static async verifyGoalEntryDisplayed() {
        StepLogger.subStep('Verify Goal Entry Displayed');
        const firstRegionEntry = GoalsPage.buttons.goalEntry(1);
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await firstRegionEntry.verifyDisplayedStatus();
        });
    }

    static async verifyEditGoalsScreen() {
        StepLogger.subVerification('Verify Edit Goals Screen');
        await GoalsPage.newGoalsScreen.verifyDisplayedStatus();
    }

    static async navigateAndAccessCreatedGoal() {
        StepLogger.subStep('Navigate And Access Created Goal');
        const roles = GoalsConstants.roles;
        const role = GoalsConstants.businessDevelopment;
        await HomePageHelper.clickAdministrationLink();
        await HomePage1Helper.clickOnGoalsOptionUnderAdministration();
        await GoalsHelper.selectAValueFromFirstFilter(roles);
        await GoalsHelper.selectAValueFromSecondeFilter(role);
    }

    static async verifyButtonsInCustomizePopup() {
        StepLogger.subVerification('Verify Buttons in Customize Popup');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            const label = GoalsPage.customizeUserGoalsProperties;
            await label.save.verifyDisplayedStatus();
            await label.cancel.verifyDisplayedStatus();
        });
    }

    static async verifyDropDownsInCustomizePopup() {
        StepLogger.subVerification('Verify Drop Downs in Customize Popup');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            const label = GoalsPage.customizeUserGoalsProperties;
            await label.selectTheUserToCustomize.verifyDisplayedStatus();
            await label.startWithRecordsFromThisRole.verifyDisplayedStatus();
            await label.startWithRecordsFromThisUser.verifyDisplayedStatus();
        });
    }

    static async verifyRadioButtonsInCustomizePopup() {
        StepLogger.subVerification('Verify Drop Downs in Customize Popup');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            const label = GoalsPage.customizeUserGoalsProperties;
            await label.deleteRadio.verifyDisplayedStatus();
            await label.preserveRadio.verifyDisplayedStatus();
            await label.startWithACleanSlateRadio.verifyDisplayedStatus();
            await label.startWithRecordsFromThisRoleRadio.verifyDisplayedStatus();
            await label.startWithRecordsFromThisUserRadio.verifyDisplayedStatus();
        });
    }

    static async verifyGoalsPageItemsGrid() {
        StepLogger.subVerification('Verify Goals Page Items Grid');
        const label = GoalsPage.goalsPageItemsGrid;
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await label.type.verifyDisplayedStatus();
            await label.description.verifyDisplayedStatus();
            await label.goalType.verifyDisplayedStatus();
            await label.period.verifyDisplayedStatus();
            await label.replicate.verifyDisplayedStatus();
            await label.target.verifyDisplayedStatus();
            await label.type.verifyDisplayedStatus();
        });
    }

    static async verifyButtons() {
        StepLogger.subVerification('Verify Buttons');
        const label = GoalsPage.buttons;
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await label.addGoals.verifyDisplayedStatus();
            await label.customizeUser.verifyDisplayedStatus();
            await label.refresh.verifyDisplayedStatus();
            await label.exportToExcel.verifyDisplayedStatus();
            await label.exportToWord.verifyDisplayedStatus();
        });
    }

    static async verifySelectTheUserToCustomizeDropDown() {
        StepLogger.subVerification('Verify Select the User ToCustomize Drop Down');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.customizeUserGoalsProperties.selectTheUserToCustomize.verifyDisplayedStatus();
        });
    }

    static async clickOnUserToCustomizeDropDown() {
        StepLogger.subStep('Click On User To Customize Drop Down');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.customizeUserGoalsProperties.selectTheUserToCustomize.clickButton();
        });
    }

    static async clickOnStartWithRecordsFromThisRole() {
        StepLogger.subStep('Click On Start With Records From This Role');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.customizeUserGoalsProperties.startWithRecordsFromThisRole.clickButton();
        });
    }

    static async verifyStartWithRecordsFromThisRole() {
        StepLogger.subVerification('Verify Start With Records From This Role');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.customizeUserGoalsProperties.startWithRecordsFromThisRole.verifyDisplayedStatus();
        });
    }

    static async clickOnStartWithRecordsFromThisUser() {
        StepLogger.subStep('Click On Start With Records From This User');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.customizeUserGoalsProperties.startWithRecordsFromThisUser.clickButton();
        });
    }

    static async verifyStartWithRecordsFromThisUser() {
        StepLogger.subVerification('Verify Start With Records From This User');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.customizeUserGoalsProperties.startWithRecordsFromThisUser.verifyDisplayedStatus();
        });
    }

    static async clickOnCloseIcon() {
        StepLogger.subStep('Click On Close Icon');
        await GoalsPage.customizeUserGoalsProperties.closeIcon.clickButton();
    }

    static async clickCancelOnCustomizeUserPopup() {
        StepLogger.subStep('Click On Cancel On Customize User Popup');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.customizeUserGoalsProperties.cancel.clickButton();
        });
    }

    static async selectAUserFromCustomizeDropDown(user: string) {
        StepLogger.subStep('Select a User From Customize Drop Down');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DropDownHelper.selectOptionByText(GoalsPage.customizeUserGoalsProperties.selectTheUserToCustomize, user);
        });
    }

    static async verifyUserSelected(value: string) {
        StepLogger.subVerification('Verify User Selected');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.goalSelected(value).verifyDisplayedStatus();
        });
    }

    static async clickOnStartWithRecordsFromThisRoleRadio() {
        StepLogger.subStep('Click On Start With Records From This Role Radio');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.customizeUserGoalsProperties.startWithRecordsFromThisRoleRadio.clickButton();
        });
    }

    static async verifyStartWithRecordsFromThisRoleRadioSelected() {
        StepLogger.subVerification('Verify Start With Records From This Role Radio Selected');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ExpectationHelper.verifyCheckboxIsChecked(GoalsPage.customizeUserGoalsProperties.startWithRecordsFromThisRoleRadio);
        });
    }

    static async selectARoleFromStartWithRecordFromThisRole(role: string) {
        StepLogger.subStep('Select a Role From Start With Record From This Role');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DropDownHelper.selectOptionByText(GoalsPage.customizeUserGoalsProperties.startWithRecordsFromThisRole, role);
        });
    }

    static async verifyRoleSelected(user: string) {
        StepLogger.subVerification('Verify User Selected');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.goalSelected(user).verifyDisplayedStatus();
        });
    }

    static async clickSaveOnCustomizeUserPopup() {
        StepLogger.subStep('Click On Save On Customize User Popup');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.customizeUserGoalsProperties.save.clickButton();
        });
    }

    static async navigateToGoalsPage() {
        StepLogger.subStep('Navigate To Goals Page');
        await HomePageHelper.clickAdministrationLink();
        await HomePage1Helper.clickOnGoalsOptionUnderAdministration();
    }

    static async clickOnStartWithRecordsFromThisUserRadio() {
        StepLogger.subStep('Click On Start With Records From This User Radio');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.customizeUserGoalsProperties.startWithRecordsFromThisUserRadio.clickButton();
        });
    }

    static async verifyStartWithRecordsFromThisUserRadioSelected() {
        StepLogger.subVerification('Verify Start With Records From This User Radio Selected');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ExpectationHelper.verifyCheckboxIsChecked(GoalsPage.customizeUserGoalsProperties.startWithRecordsFromThisUserRadio);
        });
    }

    static async verifystartWithACleanStateRadioSelected() {
        StepLogger.subVerification('Verify Start With A Clean State Radio Selected');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ExpectationHelper.verifyCheckboxIsChecked(GoalsPage.customizeUserGoalsProperties.startWithACleanSlateRadio);
        });
    }

    static async selectAUserFromStartWithRecordFromThisUser(user: string) {
        StepLogger.subStep('Select a User From Start With Record From This User');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DropDownHelper.selectOptionByText(GoalsPage.customizeUserGoalsProperties.startWithRecordsFromThisUser, user);
        });
    }

    static async clickOnDeleteRadioButton() {
        StepLogger.subStep('Click On Delete Radio Button');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.customizeUserGoalsProperties.deleteRadio.clickButton();
        });
    }

    static async verifyDeleteRadioButtonSelected() {
        StepLogger.subVerification('Verify Delete Radio Button Selected');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ExpectationHelper.verifyCheckboxIsChecked(GoalsPage.customizeUserGoalsProperties.deleteRadio);
        });
    }
}

import { StepLogger } from '../../../../core/logger/step-logger';
import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { PageHelperExtension } from '../../../components/html/page-helper-extended';
import { WaitHelper } from '../../../components/html/wait-helper';
import { EndpointHelper } from '../../../components/misc-utils/endpoint-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { BasePageHelper } from '../base-page.helper';
import { CommonPage } from '../common/common.po';

import { GoalsPage } from './goals-page.po';

export class GoalsPageHelper extends BasePageHelper {
    /**
     * Enter Value for "Target Value" field in New Goal Window
     * @param targetValue
     */
    static async enterTargetValue(targetValue: string) {
        StepLogger.subStep(`Enter Target value ${targetValue}`);
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await WaitHelper.sleepForTwoSeconds();
            await WaitHelper.waitForElementToBeDisplayed(GoalsPage.textField.targetValue.item);
            await GoalsPage.textField.targetValue.item.clear();
            await GoalsPage.textField.targetValue.item.sendKeys(targetValue);
        });
    }

    /**
     * Verify Value for "Target Value" in New Goal Window
     * @param expectedValue
     */
    static async verifyTargetValue(expectedValue: string) {
        StepLogger.subVerification(`Verify Target Value is ${expectedValue}`);
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.textField.targetValue.verifyTextEntered(expectedValue);
        });
    }

    /**
     * Click on the "Save" Button on the New Goal Window
     */
    static async clickSaveNewGoal() {
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await WaitHelper.waitForElementToBeDisplayed(GoalsPage.saveButton.item);
            await GoalsPage.saveButton.clickButton();
        });
    }

    /**
     * Enter Value for "Display Order" field in Add New Goal Window
     * @param displayOrderValue
     */
    static async enterDisplayOrder(displayOrderValue: string) {
        StepLogger.subStep(`Enter Display Order value ${displayOrderValue}`);
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await WaitHelper.waitForElementToBeDisplayed(GoalsPage.textField.displayOrder.item);
            await GoalsPage.textField.displayOrder.item.sendKeys(displayOrderValue);
        });
    }

    /**
     * Verify Value for "Display Order" field in Add New Goal Window
     * @param expectedValue
     */
    static async verifyDisplayOrderValue(expectedValue: string) {
        StepLogger.subVerification(`Verify Description Value is ${expectedValue}`);
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.textField.displayOrder.verifyTextEntered(expectedValue);
        });
    }

    /**
     * Enter Value for "Description" field in Add New Goal Window
     * @param descriptionInputValue
     */
    static async enterDescription(descriptionInputValue: string) {
        StepLogger.subStep(`Enter Description value ${descriptionInputValue}`);
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await WaitHelper.waitForElementToBeDisplayed(GoalsPage.textField.description.item);
            await GoalsPage.textField.description.item.clear();
            await GoalsPage.textField.description.item.sendKeys(descriptionInputValue);
        });
    }

    /**
     * Verify Value for "Description" text field in Add New Goal Window
     * @param expectedValue
     */
    static async verifyDescriptionTextValue(expectedValue: string) {
        StepLogger.subVerification(`Verify Description Value is ${expectedValue}`);
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await GoalsPage.textField.description.verifyTextEntered(expectedValue);
        });
    }

    /**
     * Verify Selected Value for "Role" field in Add New Goal Window
     * @param expectedValue
     */
    static async verifySelectedRole(expectedValue: string) {
        StepLogger.subVerification(`Verify Selected Value for "Role" is ${expectedValue}`);
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            const selected = await DropDownHelper.getTheSelectedOptionText(GoalsPage.dropDown.role);
            await ExpectationHelper.verifyStringEqualTo(selected, expectedValue);
        });
    }

    /**
     * Verify Selected Value for "Goal Type" field in Add New Goal Window
     * @param expectedValue
     */
    static async verifySelectedGoalType(expectedValue: string) {
        StepLogger.subVerification(`Verify Selected Value for "Goal Type" is ${expectedValue}`);
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            const selected = await DropDownHelper.getTheSelectedOptionText(GoalsPage.dropDown.goalType);
            await ExpectationHelper.verifyStringEqualTo(selected, expectedValue);
        });
    }

    /**
     * Verify Selected Value for "Period Type" field in Add New Goal Window
     * @param expectedValue
     */
    static async verifySelectedPeriodType(expectedValue: string) {
        StepLogger.subVerification(`Verify Selected Value for "Period Type" is ${expectedValue}`);
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            const selected = await DropDownHelper.getTheSelectedOptionText(GoalsPage.dropDown.periodType);
            await ExpectationHelper.verifyStringEqualTo(selected, expectedValue);
        });
    }

    /**
     * Verify Selected Value for "Target Type" field in Add New Goal Window
     * @param expectedValue
     */
    static async verifySelectedTargetType(expectedValue: string) {
        StepLogger.subVerification(`Verify Selected Value for "Target Type" is ${expectedValue}`);
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            const selected = await DropDownHelper.getTheSelectedOptionText(GoalsPage.dropDown.targetType);
            await ExpectationHelper.verifyStringEqualTo(selected, expectedValue);
        });
    }

    /**
     * Select Value in DropDown "Period Type" in the Add New Goal Window
     * @param periodTypeToBeSelected
     */
    static async selectPeriodType(periodTypeToBeSelected: string) {
        StepLogger.subStep(`Select value ${periodTypeToBeSelected} for "Period Type" from Drop Down`);
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await WaitHelper.waitForElementToBeDisplayed(GoalsPage.dropDown.periodType.item);
            await DropDownHelper.selectOptionByText(GoalsPage.dropDown.periodType, periodTypeToBeSelected);
        });
    }

    /**
     * Select Value in DropDown "Target Type" in the Add New Goal Window
     * @param targetTypeToBeSelected
     */
    static async selectTargetType(targetTypeToBeSelected: string) {
        StepLogger.subStep(`Select value ${targetTypeToBeSelected} for "Target Type" from Drop Down`);
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await WaitHelper.waitForElementToBeClickable(GoalsPage.dropDown.targetType.item);
            await DropDownHelper.selectOptionByText(GoalsPage.dropDown.targetType, targetTypeToBeSelected);
        });
    }

    /**
     * Verify Selected Value for "Goal Is For" field in Add New Goal Window
     * @param expectedValue
     */
    static async verifySelectedGoalIsFor(expectedValue: string) {
        StepLogger.subVerification(`Verify Selected Value for "Goal Is For" is ${expectedValue}`);
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            const selected = await DropDownHelper.getTheSelectedOptionText(GoalsPage.dropDown.goalIsFor);
            await ExpectationHelper.verifyStringEqualTo(selected, expectedValue);
        });
    }

    /**
     * Select Value in DropDown "Goal Type" in the Add New Goal Window
     * @param goalTypeToBeSelected
     */
    static async selectGoalType(goalTypeToBeSelected: string) {
        StepLogger.subStep(`Select value ${goalTypeToBeSelected} for "Goal Type" from Drop Down`);
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await WaitHelper.waitForElementToBeClickable(GoalsPage.dropDown.goalType.item);
            await DropDownHelper.selectOptionByText(GoalsPage.dropDown.goalType, goalTypeToBeSelected);
        });
    }

    /**
     * Select Value in DropDown "Role" in the Add New Goal Window
     * @param roleToBeSelected
     */
    static async selectRole(roleToBeSelected: string) {
        StepLogger.subStep(`Select value ${roleToBeSelected} for "Role" from Drop Down`);
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await WaitHelper.waitForElementToBeClickable(GoalsPage.dropDown.role.item);
            await DropDownHelper.selectOptionByText(GoalsPage.dropDown.role, roleToBeSelected);
        });
    }

    /**
     * Select Value in Dropdown "Goal Is For" in the Add New Goal Window
     * @param valueToBeSelected
     */
    static async selectGoalIsFor(valueToBeSelected: string) {
        StepLogger.subStep(`Select value ${valueToBeSelected} for "Goal is For" from Drop Down`);
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await WaitHelper.waitForElementToBeClickable(GoalsPage.dropDown.goalIsFor.item);
            await DropDownHelper.selectOptionByText(GoalsPage.dropDown.goalIsFor, valueToBeSelected);
        });
    }

    /**
     * Click on Add Goals Button displayed on the Goals page
     */
    static async clickAddGoalButton() {
        StepLogger.subStep('Click on Add Goal Button');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await GoalsPage.addGoalButton.clickButton();
        });
    }

    /**
     * Verify Add New Goal Window is displayed
     */
    static async verifyNewGoalWindowDisplayed() {
        StepLogger.subVerification('Verify Add New Goal Window is displayed.');
        await GoalsPage.uiDialogTitle.verifyDisplayedStatus();
    }

    /**
     * Verify Manage Goals page is displayed, with the help of page title displayed on top of page
     */
    static async verifyManageGoalsPageDisplayed() {
        await WaitHelper.waitForPageToStable();
        StepLogger.subVerification('Verify Manage Goals Page title displayed.');
        await GoalsPage.pageTitle.verifyDisplayedStatus();
    }

    url(): string {
        return EndpointHelper.goals;
    }
}

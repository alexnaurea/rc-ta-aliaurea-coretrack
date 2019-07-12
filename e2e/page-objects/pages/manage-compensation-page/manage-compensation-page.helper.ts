import { StepLogger } from '../../../../core/logger/step-logger';
import { VerboseLogger } from '../../../../core/logger/verbose-logger';
import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { ElementHelper } from '../../../components/html/element-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { PageHelperExtension } from '../../../components/html/page-helper-extended';
import { WaitHelper } from '../../../components/html/wait-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { CommonPage } from '../common/common.po';
import { HomePageHelper } from '../home-page/home-page.helper';
import { HomePage1Helper } from '../home-page/home-page1.helper';

import { ManageCompensationPageConstant } from './manage-compensation-page.constants';
import { ManageCompensationPage } from './manage-compensation-page.po';

const { elementNames: eNames } = ManageCompensationPageConstant;

export class ManageCompensationPageHelper {
    /**
     * Click Save Button on the dialog box
     */
    static async clickCompensationSaveButton() {
        StepLogger.subVerification('Click Save button on dialog.');
        await PageHelperExtension.executeInIFrame([CommonPage.contentFrame], async () => {
            await ManageCompensationPage.saveButton.clickButton();
        });
    }
    /**
     * Clicks on the Add Compensation button on the manage compensation page
     */
    static async clickAddCompensationButton() {
        StepLogger.subStep('Click on Add Compensation Button');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await ManageCompensationPage.addCompensation.clickButton();
        });
    }

    /**
     * Verify New Compensation Plan Window is displayed
     */
    static async verifyNewCompensationPlanWindowDisplayed() {
        StepLogger.subVerification('Verify New Sales Stage Window is displayed.');
        await ManageCompensationPage.uiDialogTitle.verifyDisplayedStatus();
    }

    /**
     * Verify 'Manage Compensation' page is displayed
     */
    static async verifyManageCompensationPageDisplayed() {
        await ManageCompensationPage.header.title.verifyContainsText(eNames.manageCompensation);
    }

    static async verifyCompensationPlanDisplayed(name: string) {
        await ManageCompensationPage.compensationName(name).verifyDisplayedStatus();
    }

    static async clickOnCompensationPlan(name: string) {
        // Double click is not working and other operation cause element not display because of iframes.
        await PageHelper.click(ManageCompensationPage.compensationName(name));
    }

    static async verifyEditDialogBox() {
        await ManageCompensationPage.dialogBox.title.verifyContainsText(
            ManageCompensationPageConstant.elementNames.dialogBox);
    }

    static async verifyDetailsEditDialogBox() {
        await ManageCompensationPage.dialogBox.title.verifyContainsText(
            ManageCompensationPageConstant.elementNames.detailsDialogBox);
    }

    static async verifyCompaniesDetailsDisplayed() {
        await ManageCompensationPage.dialogBox.compDetails.verifyDisplayedStatus();
    }

    static async clickOnEditButton() {
        await ManageCompensationPage.dialogBox.firstEdit.clickLinkJs();
    }

    static async verifyErrorMessage(message: string) {
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ManageCompensationPage.validationError(message).verifyDisplayedStatus();
        });
    }

    static async navigateAndAccessCreatedCompensation() {
        StepLogger.subStep('Navigate And Access Created Goal');
        const roles = ManageCompensationPageConstant.roles;
        const role = ManageCompensationPageConstant.businessDevelopment;
        await HomePageHelper.clickAdministrationLink();
        await HomePage1Helper.clickCompensationAdministration();
        await this.selectAValueFromFirstFilter(roles);
        await this.selectAValueFromSecondFilter(role);
        await this.doubleClickOnCompensationEntry();
    }

    static async selectAValueFromFirstFilter(value: string) {
        StepLogger.subStep('Select A Value From First Filter');
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await DropDownHelper.selectOptionByText(ManageCompensationPage.elements.firstFilter, value);
        });
    }

    static async selectAValueFromSecondFilter(value: string) {
        StepLogger.subStep('Select A Value From Second Filter');
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await WaitHelper.waitForElementToBeDisplayed(ManageCompensationPage.elements.secondFilter.item);
            await DropDownHelper.selectOptionByText(ManageCompensationPage.elements.secondFilter, value);
        });
    }

    static async doubleClickOnCompensationEntry() {
        StepLogger.subStep('Double Click On Compensation Entry');
        const firstCompensationEntry = ManageCompensationPage.elements.compensationEntry(1);
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await ElementHelper.actionMouseMove(firstCompensationEntry);
            await ElementHelper.actionDoubleClick(firstCompensationEntry.item,
                firstCompensationEntry.name)
                .catch((e: Error) => VerboseLogger.log(`Error during double click: ${e}`));
        });
    }

    static async verifyAddACompDetailButton() {
        StepLogger.subVerification('Verify Add A Comp Detail Button');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ManageCompensationPage.elements.addACompDetailButton.verifyDisplayedStatus();
        });
    }

    static async clickAddACompDetailButton() {
        StepLogger.subStep('Click Add A Comp Detail Button');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ManageCompensationPage.elements.addACompDetailButton.clickButton();
        });
    }

    static async verifyEditCompensationPlanWindowDisplayed() {
        StepLogger.subVerification('Verify Edit Compensation Plan Window displayed.');
        await ManageCompensationPage.editDialogTitle.verifyDisplayedStatus();
    }

    static async selectAValueFromCompIsForDropDown(value: string) {
        StepLogger.subStep('Select a Branch from Drop Down');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DropDownHelper.selectOptionByText(ManageCompensationPage.elements.branch, value);
        });
    }

    static async verifyValueSelected(value: string) {
        StepLogger.subVerification('Verify Value Selected');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            const selected = await DropDownHelper.getTheSelectedOptionText(ManageCompensationPage.elements.branch);
            await ExpectationHelper.verifyStringEqualTo(selected, value);
        });
    }
}

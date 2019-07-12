import { StepLogger } from '../../../../../../core/logger/step-logger';
import { PageHelperExtension } from '../../../../../components/html/page-helper-extended';
import { CommonPage } from '../../../common/common.po';

import { OutsideInstitutionPage } from './outside-institutions.po';

export class OutsideInstitutionHelper {

    static async verifyManageOutsideInstitutionPage() {
        StepLogger.subVerification('Verify Manage Outside Institution Page');
        await OutsideInstitutionPage.manageOutsideInstitutionPage.verifyDisplayedStatus();
    }

    static async verifyItemsInGrid() {
        StepLogger.subVerification('Verify Items In Grid');
        const label = OutsideInstitutionPage.itemsInGrid;
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await label.institutionName.verifyDisplayedStatus();
            await label.delete.verifyDisplayedStatus();
        });
    }

    static async verifyButtons() {
        StepLogger.subVerification('Verify Buttons');
        const label = OutsideInstitutionPage.buttons;
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await label.addOutsideInstitution.verifyDisplayedStatus();
            await label.refresh.verifyDisplayedStatus();
            await label.exportToExcel.verifyDisplayedStatus();
            await label.exportToWord.verifyDisplayedStatus();
        });
    }

    static async clickOnAddOutsideInstitutionButton() {
        StepLogger.subStep('Click On Add Outside Institution Button');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await OutsideInstitutionPage.buttons.addOutsideInstitution.clickButton();
        });
    }

    static async verifyNewOutsideInstitutionWindow() {
        StepLogger.subVerification('Verify New Outside Institution Window');
        await OutsideInstitutionPage.newOutsideInstitutionScreen.verifyDisplayedStatus();
    }

    static async verifyNewOutsideInstitutionWindowClosed() {
        StepLogger.subVerification('Verify New Outside Institution Window Closed');
        await OutsideInstitutionPage.newOutsideInstitutionScreen.verifyHiddenStatus();
    }

    static async clickOnSaveButton() {
        StepLogger.subStep('Click on Save Button');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await OutsideInstitutionPage.newOutsideInstitutionWindowProperties.save.clickButton();
        });
    }

    static async clickOnCancelButton() {
        StepLogger.subStep('Click On Cancel Button');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await OutsideInstitutionPage.newOutsideInstitutionWindowProperties.cancel.clickButton();
        });
    }

    static async clickOnRefreshButton() {
        StepLogger.subStep('Click On Refresh Button');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await OutsideInstitutionPage.buttons.refresh.clickButton();
        });
    }

    static async verifyValidationErrorMessage(message: string) {
        StepLogger.subVerification('Verify Validation Error Message');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await OutsideInstitutionPage.validationError(message).verifyDisplayedStatus();
        });
    }

    static async enterName(name: string) {
        StepLogger.subStep('Enter Name');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await OutsideInstitutionPage.newOutsideInstitutionWindowProperties.name.sendKeys(name);
        });
    }

    static async verifyEnteredName(name: string) {
        StepLogger.subVerification('Verify Entered Name');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await OutsideInstitutionPage.newOutsideInstitutionWindowProperties.name.verifyTextEntered(name);
        });
    }
}

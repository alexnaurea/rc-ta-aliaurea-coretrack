import { StepLogger } from '../../../../../../core/logger/step-logger';
import { DropDownHelper } from '../../../../../components/html/dropdown-helper';
import { PageHelperExtension } from '../../../../../components/html/page-helper-extended';
import { CommonPage } from '../../../common/common.po';
import { HomePageHelper } from '../../../home-page/home-page.helper';
import { HomePage1Helper } from '../../../home-page/home-page1.helper';

import { RelationshipsPage } from './relationships.po';

export class RelationshipsHelper {

    static async verifyRelationshipsManagePageDisplayed() {
        StepLogger.subVerification('Verify Relationships Manage Page Displayed');
        await RelationshipsPage.manageRelationshipsPage.verifyDisplayedStatus();
    }

    static async verifyItemGridsInRelationshipsPage() {
        StepLogger.subStep('Verify Item Grids In Relationships Page');
        const label = RelationshipsPage.relationshipsPageItemsGrid;
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await label.active.verifyDisplayedStatus();
            await label.code.verifyDisplayedStatus();
            await label.description.verifyDisplayedStatus();
            await label.primary.verifyDisplayedStatus();
            await label.sortOrder.verifyDisplayedStatus();
        });
    }

    static async verifyButtons() {
        StepLogger.subStep('Verify Buttons');
        const label = RelationshipsPage.buttons;
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await label.addRelationship.verifyDisplayedStatus();
            await label.refresh.verifyDisplayedStatus();
            await label.exportToWord.verifyDisplayedStatus();
            await label.exportToExcel.verifyDisplayedStatus();
        });
    }

    static async clickOnAddRelationshipButton() {
        StepLogger.subStep('Click On Add Relationship Button');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await RelationshipsPage.buttons.addRelationship.clickButton();
        });
    }

    static async clickOnRefreshButton() {
        StepLogger.subStep('Click On Refresh Button');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await RelationshipsPage.buttons.refresh.clickButton();
        });
    }

    static async verifyNewRelationshipScreen() {
        StepLogger.subVerification('Verify New Relationship Screen');
        await RelationshipsPage.newRelationshipScreen.verifyDisplayedStatus();
    }

    static async verifyNewRelationshipScreenclosed() {
        StepLogger.subVerification('Verify New Relationship Screen Closed');
        await RelationshipsPage.newRelationshipScreen.verifyHiddenStatus();
    }

    static async clickOnSaveButton() {
        StepLogger.subStep('Click On Save Button');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RelationshipsPage.newRelationshipScreenProperties.save.clickButton();
        });
    }

    static async clickOnCancelButton() {
        StepLogger.subStep('Click On Cancel Button');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RelationshipsPage.newRelationshipScreenProperties.cancel.clickButton();
        });
    }

    static async verifyValidationErrorMessage(message: string) {
        StepLogger.subVerification('Verify Validation Error Message');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RelationshipsPage.validationError(message).verifyDisplayedStatus();
        });
    }

    static async enterDescription(description: string) {
        StepLogger.subStep('Enter Description');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RelationshipsPage.newRelationshipScreenProperties.description.sendKeys(description);
        });
    }

    static async verifyEnteredDescription(description: string) {
        StepLogger.subVerification('Verify Entered Description');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RelationshipsPage.newRelationshipScreenProperties.description.verifyTextEntered(description);
        });
    }
    static async enterSortOrder(sortOrder: string) {
        StepLogger.subStep('Enter Sort Order');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RelationshipsPage.newRelationshipScreenProperties.sortOrder.sendKeys(sortOrder);
        });
    }

    static async enterCode(code: string) {
        StepLogger.subStep('Enter Code');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RelationshipsPage.newRelationshipScreenProperties.code.sendKeys(code);
        });
    }

    static async verifyEnteredCode(code: string) {
        StepLogger.subStep('Verify Entered Code');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RelationshipsPage.newRelationshipScreenProperties.code.verifyTextEntered(code);
        });
    }

    static async clickOnStatusDropDown() {
        StepLogger.subStep('Click On Status Drop Down');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RelationshipsPage.newRelationshipScreenProperties.status.clickButton();
        });
    }

    static async selectAStatusFromDropDown(status: string) {
        StepLogger.subStep('Select A Status From Drop Down');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DropDownHelper.selectOptionByText(RelationshipsPage.newRelationshipScreenProperties.status, status);
        });
    }

    static async verifyStatusSelected(status: string) {
        StepLogger.subVerification('Verify Status Selected');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RelationshipsPage.statusSelected(status).verifyDisplayedStatus();
        });
    }

    static async selectPIFieldFromDropDown(pi: string) {
        StepLogger.subStep('Select PI Field From Drop Down');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DropDownHelper.selectOptionByText(RelationshipsPage.newRelationshipScreenProperties.primaryIndicator, pi);
        });
    }

    static async verifyPISelected(pi: string) {
        StepLogger.subVerification('Verify PI Selected');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RelationshipsPage.piSelected(pi).verifyDisplayedStatus();
        });
    }

    static async navigateToAddRelationshipPage() {
        StepLogger.subStep('Navigate To Add Relationship Page');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickConfigurationUnderAdministration();
        await HomePage1Helper.clickRelationshipsUnderConfiguration();
        await this.clickOnAddRelationshipButton();
    }
}

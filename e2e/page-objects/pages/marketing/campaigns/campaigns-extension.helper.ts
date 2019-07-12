import { StepLogger } from '../../../../../core/logger/step-logger';
import { DropDownHelper } from '../../../../components/html/dropdown-helper';
import { PageHelper } from '../../../../components/html/page-helper';
import { Constants } from '../../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../../components/misc-utils/expectation-helper';
import { CommonPage } from '../../common/common.po';
import { ContactPage } from '../../contact-page/contact-page.po';

import { CampaignsConstant } from './campaigns.constants';
import { CampaignsPageHelper } from './campaigns.helper';
import { CampaignsPage } from './campaigns.po';

export class CampaignsPageHelperExtension {

    static async verifyCampaignsGridColumns() {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await CampaignsPage.elements.marketingColumns.active.verifyDisplayedStatus();
        await CampaignsPage.elements.marketingColumns.campaign.verifyDisplayedStatus();
        await CampaignsPage.elements.marketingColumns.created.verifyDisplayedStatus();
        await CampaignsPage.elements.marketingColumns.owner.verifyDisplayedStatus();
        await CampaignsPage.elements.marketingColumns.type.verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyAddCampaignButtonDislayed() {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await CampaignsPage.elements.addCampaign.verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyCampaignPageTabs() {
        const tab = CampaignsConstant.elementNames.tabs;
        await CampaignsPage.elements.getTabByName(tab.attachments).verifyDisplayedStatus();
        await CampaignsPage.elements.getTabByName(tab.campaignItems).verifyDisplayedStatus();
        await CampaignsPage.elements.getTabByName(tab.campaignStats).verifyDisplayedStatus();
        await CampaignsPage.elements.getTabByName(tab.distribution).verifyDisplayedStatus();
        await CampaignsPage.elements.getTabByName(tab.notes).verifyDisplayedStatus();
        await CampaignsPage.elements.getTabByName(tab.overview).verifyDisplayedStatus();
    }

    static async openACampaign() {
        const name = await CampaignsPageHelper.clickOnTheFirstCampaignIcon();
        await CampaignsPageHelper.verifyCampaignPageDisplayed(false);
        return name;
    }

    static async verifyDescriptionFieldDisplayed() {
        await PageHelper.switchToiFrame(CommonPage.richTextFrame);
        await CampaignsPage.elements.description.verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyWarningPopupButtons() {
        await CampaignsPage.elements.warningPopupOkButton.verifyDisplayedStatus();
        await CampaignsPage.elements.warningPopupCancelButton.verifyDisplayedStatus();
    }

    static async clickCancelButtonOnWarningPopup() {
        StepLogger.subStep('Click on Cancel button');
        await CampaignsPage.elements.warningPopupCancelButton.hoverOverAndClick();
        await PageHelper.switchToTab(Constants.number.one);
    }

    static async verifyNameOneFieldIsEmpty() {
        const name = Constants.EMPTY_STRING;
        const text = await CampaignsPage.elements.nameOne.item.getText();
        await ExpectationHelper.verifyStringEqualTo(text.toString(), name.toString());
    }

    static async verifyNameOneFieldValue(name: string) {
        await CampaignsPage.elements.nameOne.verifyTextBoxContains(name);
    }

    static async verifyDescriptionFieldIsEmpty() {
        const description = Constants.EMPTY_STRING;
        await PageHelper.switchToiFrame(CommonPage.richTextFrame);
        const text = await CampaignsPage.elements.description.item.getText();
        await ExpectationHelper.verifyStringEqualTo(text.toString(), description.toString());
        await PageHelper.switchToDefaultContent();
    }

    static async verifyDescriptionFieldValue(description: string) {
        await PageHelper.switchToiFrame(CommonPage.richTextFrame);
        await CampaignsPage.elements.description.verifyContainsText(description);
        await PageHelper.switchToDefaultContent();
    }

    static async verifyThreeDotsFloatingMenuDisplayed() {
        await CampaignsPage.elements.threeDotsFloatingMenu.verifyDisplayedStatus();
    }

    static async  verifyHistoryOptionFromTheDropdown() {
        await CampaignsPage.elements.threeDotsFloatingMenuOptionByText(
            CampaignsConstant.attributes.name.history).verifyDisplayedStatus();
    }

    static async  verifyEmailOptionFromTheDropdown() {
        StepLogger.subStep('verify Email Link to Page');
        await CampaignsPage.elements.threeDotsFloatingMenuOptionByText(
            CampaignsConstant.attributes.name.emailToPage).verifyDisplayedStatus();
    }

    static async  clickOnHistoryOptionFromTheDropdown() {
        StepLogger.subStep('Click on "History..."');
        await CampaignsPage.elements.threeDotsFloatingMenuOptionByText(
            CampaignsConstant.attributes.name.history).hoverOverAndClick();
    }

    static async verifyIsCampaignCurrentlyActiveFieldDisplayed() {
        await CampaignsPage.elements.isCampaignCurrentlyActive.verifyDisplayedStatus();
    }

    static async selectIsCampaignCurrentlyActiveValue(option: string) {
        StepLogger.subStep(`Select "${option}" from "Is campaign currently active" dropdown`);
        await DropDownHelper.selectOptionByText(CampaignsPage.elements.isCampaignCurrentlyActive, option);
    }

    static async verifyIsCampaignCurrentlyActiveValue(option: string) {
        const text = await DropDownHelper.getTheSelectedOptionText(CampaignsPage.elements.isCampaignCurrentlyActive);
        await ExpectationHelper.verifyStringEqualTo(option, text);
    }

    static async verifyTypeFieldDisplayed() {
        await CampaignsPage.elements.typeField.verifyDisplayedStatus();
    }

    static async verifyTypeFieldIsReadOnly() {
        const readOnly = await CampaignsPage.elements.typeField.getAtttribute('readonly');
        await ExpectationHelper.verifyStringEqualTo(readOnly.toString(), true.toString());
    }

    static async  verifyDeleteOptionFromTheDropdown() {
        await CampaignsPage.elements.threeDotsFloatingMenuOptionByText(
            CampaignsConstant.attributes.name.delete).verifyDisplayedStatus();
    }

    static async  clickOnDeleteOptionFromTheDropdown() {
        StepLogger.subStep('Click on delete option');
        await CampaignsPage.elements.threeDotsFloatingMenuOptionByText(
            CampaignsConstant.attributes.name.delete).hoverOverAndClick();
    }

    static async verifyDeleteConfirmationPopupDisplayed() {
        await CampaignsPage.titles.deleteConfirmation.verifyDisplayedStatus();
    }

    static async clickCancelButtonOnDeleteConfirmationPopup() {
        StepLogger.subStep('Click on Cancel button');
        await CampaignsPage.elements.warningPopupCancelButton.hoverOverAndClick();
        await PageHelper.switchToTab(Constants.number.one);
    }

    static async clikOnCloseButtonFromMessagePopup() {
        StepLogger.subStep('Click on Close icon');
        await CampaignsPage.elements.closeButtonFromMessagePopup.hoverOverAndClick();
    }

    static async verifyCampaignNotDisplayed(name: string) {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await CampaignsPage.elements.getCampaignByName(name).verifyHiddenStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyCostFieldDisplayed() {
        await CampaignsPage.elements.cost.verifyDisplayedStatus();
    }

    static async typeCost(cost: string) {
        await CampaignsPage.elements.cost.clearText();
        await CampaignsPage.elements.cost.sendKeys(cost);
    }

    static async verifyCostFieldValue(cost: string) {
        await CampaignsPage.elements.cost.verifyTextBoxContains(cost);
    }

    static async verifySavedCostFieldValue(cost: string) {
        await CampaignsPage.elements.cost.verifyContainsText(cost);
    }

    static async clickPrint() {
        StepLogger.subStep('click Print Button');
        await CampaignsPage.elements.threeDotsFloatingMenuOptionByText(
            CampaignsConstant.attributes.name.print).hoverOverAndClick();
    }

    static async verifyPrintModalIsDisplayed(toCloseAfterExecution = true) {
        StepLogger.subVerification('Verify Print Model Displayed');
        await PageHelper.executeInNewTab(async () => {
            await ContactPage.print.title.verifyDisplayedStatus();
        }, 1, toCloseAfterExecution);
    }

    static async verifyPrintModalIsNotDisplayed(toCloseAfterExecution = true) {
        StepLogger.subVerification('Verify Print Model Not Displayed');
        await PageHelper.executeInNewTab(async () => {
            await ContactPage.print.title.verifyHiddenStatus();
        }, 1, toCloseAfterExecution);
    }

    static async checkProfileBox(toCloseAfterExecution = true) {
        StepLogger.subStep('Check Profile Checkbox');
        await PageHelper.executeInNewTab(async () => {
            await PageHelper.switchToiFrame(CommonPage.contentFrame);
            await CampaignsPage.profileCheckBox.markCheckbox(true);
            await PageHelper.switchToDefaultContent();
        }, 1, toCloseAfterExecution);
    }

    static async verifyCheckProfileBox(toCloseAfterExecution = true) {
        StepLogger.subVerification('Check Profile Checkbox checked');
        await PageHelper.executeInNewTab(async () => {
            await PageHelper.switchToiFrame(CommonPage.contentFrame);
            await CampaignsPage.profileCheckBox.verifyCheckboxChecked();
            await PageHelper.switchToDefaultContent();
        }, 1, toCloseAfterExecution);
    }

    static async checkRelationshipBox(toCloseAfterExecution = true) {
        StepLogger.subStep('Check Relationship Checkbox');
        await PageHelper.executeInNewTab(async () => {
            await PageHelper.switchToiFrame(CommonPage.contentFrame);
            await CampaignsPage.relationshipCheckBox.markCheckbox(true);
            await PageHelper.switchToDefaultContent();
        }, 1, toCloseAfterExecution);
    }

    static async verifyCheckRelationshipBox(toCloseAfterExecution = true) {
        StepLogger.subVerification('Check Relationship Checkbox checked');
        await PageHelper.executeInNewTab(async () => {
            await PageHelper.switchToiFrame(CommonPage.contentFrame);
            await CampaignsPage.relationshipCheckBox.verifyCheckboxChecked();
            await PageHelper.switchToDefaultContent();
        }, 1, toCloseAfterExecution);
    }

    static async checkRelatedContactsBox(toCloseAfterExecution = true) {
        StepLogger.subStep('Check Related Contacts Checkbox');
        await PageHelper.executeInNewTab(async () => {
            await PageHelper.switchToiFrame(CommonPage.contentFrame);
            await CampaignsPage.relatedContactsCheckBox.markCheckbox(true);
            await PageHelper.switchToDefaultContent();
        }, 1, toCloseAfterExecution);
    }

    static async verifyCheckRelatedContactsBox(toCloseAfterExecution = true) {
        StepLogger.subVerification('Check Related Contacts Checkbox checked');
        await PageHelper.executeInNewTab(async () => {
            await PageHelper.switchToiFrame(CommonPage.contentFrame);
            await CampaignsPage.relatedContactsCheckBox.verifyCheckboxChecked();
            await PageHelper.switchToDefaultContent();
        }, 1, toCloseAfterExecution);
    }

    static async checkHouseholdsBox(toCloseAfterExecution = true) {
        StepLogger.subStep('Check Households Checkbox');
        await PageHelper.executeInNewTab(async () => {
            await PageHelper.switchToiFrame(CommonPage.contentFrame);
            await CampaignsPage.householdsCheckBox.markCheckbox(true);
            await PageHelper.switchToDefaultContent();
        }, 1, toCloseAfterExecution);
    }

    static async verifyCheckHouseholdsBox(toCloseAfterExecution = true) {
        StepLogger.subVerification('Check Households Checkbox checked');
        await PageHelper.executeInNewTab(async () => {
            await PageHelper.switchToiFrame(CommonPage.contentFrame);
            await CampaignsPage.householdsCheckBox.verifyCheckboxChecked();
            await PageHelper.switchToDefaultContent();
        }, 1, toCloseAfterExecution);
    }

    static async checkCaseBox(toCloseAfterExecution = true) {
        StepLogger.subStep('Check Case Checkbox');
        await PageHelper.executeInNewTab(async () => {
            await PageHelper.switchToiFrame(CommonPage.contentFrame);
            await CampaignsPage.caseCheckBox.markCheckbox(true);
            await PageHelper.switchToDefaultContent();
        }, 1, toCloseAfterExecution);
    }

    static async verifyCaseBox(toCloseAfterExecution = true) {
        StepLogger.subVerification('Check Case Checkbox checked');
        await PageHelper.executeInNewTab(async () => {
            await PageHelper.switchToiFrame(CommonPage.contentFrame);
            await CampaignsPage.caseCheckBox.verifyCheckboxChecked();
            await PageHelper.switchToDefaultContent();
        }, 1, toCloseAfterExecution);
    }

    static async checkEventBox(toCloseAfterExecution = true) {
        StepLogger.subStep('Check Event Checkbox');
        await PageHelper.executeInNewTab(async () => {
            await PageHelper.switchToiFrame(CommonPage.contentFrame);
            await CampaignsPage.eventCheckBox.markCheckbox(true);
            await PageHelper.switchToDefaultContent();
        }, 1, toCloseAfterExecution);
    }

    static async verifyEventBox(toCloseAfterExecution = true) {
        StepLogger.subVerification('Check Event Checkbox checked');
        await PageHelper.executeInNewTab(async () => {
            await PageHelper.switchToiFrame(CommonPage.contentFrame);
            await CampaignsPage.eventCheckBox.verifyCheckboxChecked();
            await PageHelper.switchToDefaultContent();
        }, 1, toCloseAfterExecution);
    }

    static async checkTaskBox(toCloseAfterExecution = true) {
        StepLogger.subStep('Check Task Checkbox');
        await PageHelper.executeInNewTab(async () => {
            await PageHelper.switchToiFrame(CommonPage.contentFrame);
            await CampaignsPage.taskCheckBox.markCheckbox(true);
            await PageHelper.switchToDefaultContent();
        }, 1, toCloseAfterExecution);
    }

    static async verifyTaskBox(toCloseAfterExecution = true) {
        StepLogger.subVerification('Check Task Checkbox checked');
        await PageHelper.executeInNewTab(async () => {
            await PageHelper.switchToiFrame(CommonPage.contentFrame);
            await CampaignsPage.taskCheckBox.verifyCheckboxChecked();
            await PageHelper.switchToDefaultContent();
        }, 1, toCloseAfterExecution);
    }

    static async checkAttachmentsBox(toCloseAfterExecution = true) {
        StepLogger.subStep('Check Attachments Checkbox');
        await PageHelper.executeInNewTab(async () => {
            await PageHelper.switchToiFrame(CommonPage.contentFrame);
            await CampaignsPage.attachmentsCheckBox.markCheckbox(true);
            await PageHelper.switchToDefaultContent();
        }, 1, toCloseAfterExecution);
    }

    static async verifyAttachmentsBox(toCloseAfterExecution = true) {
        StepLogger.subVerification('Check Attachments Checkbox checked');
        await PageHelper.executeInNewTab(async () => {
            await PageHelper.switchToiFrame(CommonPage.contentFrame);
            await CampaignsPage.attachmentsCheckBox.verifyCheckboxChecked();
            await PageHelper.switchToDefaultContent();
        }, 1, toCloseAfterExecution);
    }

    static async checkNoteBox(toCloseAfterExecution = true) {
        StepLogger.subStep('Check Note Checkbox');
        await PageHelper.executeInNewTab(async () => {
            await PageHelper.switchToiFrame(CommonPage.contentFrame);
            await CampaignsPage.noteCheckBox.markCheckbox(true);
            await PageHelper.switchToDefaultContent();
        }, 1, toCloseAfterExecution);
    }

    static async verifyNoteBox(toCloseAfterExecution = true) {
        StepLogger.subVerification('Check Note Checkbox checked');
        await PageHelper.executeInNewTab(async () => {
            await PageHelper.switchToiFrame(CommonPage.contentFrame);
            await CampaignsPage.noteCheckBox.verifyCheckboxChecked();
            await PageHelper.switchToDefaultContent();
        }, 1, toCloseAfterExecution);
    }

    static async verifyHistoryModalIsDisplayed(toCloseAfterExecution = true) {
        StepLogger.subVerification('verify History Displayed');
        await PageHelper.executeInNewTab(async () => {
            await CampaignsPage.history.title.verifyDisplayedStatus();
        }, 1, toCloseAfterExecution);
    }
}

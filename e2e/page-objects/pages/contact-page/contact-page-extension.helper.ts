import { StepLogger } from '../../../../core/logger/step-logger';
import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { ElementHelper } from '../../../components/html/element-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { CommonPageConstant } from '../common/common-page.constant';
import { CommonPageHelper } from '../common/common-page.helper';
import { CommonPage } from '../common/common.po';
import { ReferralsPageHelper } from '../referrals/referrals.helper';

import { ContactPageConstant } from './contact-page.constants';
import { ContactPageHelper } from './contact-page.helper';
import { ContactPage } from './contact-page.po';

export class ContactPageHelperExtension {

    static async navigateToAttachmentsPage() {
        const { names: { contact }, testData: { alecBaldwin } } = CommonPageConstant;
        await CommonPageHelper.clickOnGlobalSearchButton();
        await CommonPageHelper.verifyGlobalTextboxDisplayed();
        await CommonPageHelper.selectItemFromGlobalDropdown(contact);
        await CommonPageHelper.verifySelectedItemFromGlobalDropdown(contact);
        await CommonPageHelper.typeValueInGlobalTextFieldAndClickSearchIcon(alecBaldwin);
        await ReferralsPageHelper.verifyActivityCardDisplayed(alecBaldwin);
        await ReferralsPageHelper.clickOnActivityCard(alecBaldwin);
        await ContactPageHelper.verifySnapshotModalIsDisplayed(false);
        await ContactPageHelper.closeSnapshotModal();
        await ContactPageHelper.verifyContactPageIsDisplayed(false);
        await ContactPageHelper.clickAttachmentsTabInSidebar();
        await WaitHelper.waitForPageToStable();
        await ContactPageHelper.verifyAttachmentsPageIsDisplayed();
    }

    static async selectGroupingOption(option: string) {
        await PageHelper.switchToiFrame(CommonPage.attachmentsIFrame);
        await ContactPage.grouping.dropdown.scrollToElement();
        await DropDownHelper.selectOptionByText(ContactPage.grouping.dropdown, option);
        await PageHelper.switchToDefaultContent();
    }

    static async verifyGroupingSelectedOption(option: string) {
        await PageHelper.switchToiFrame(CommonPage.attachmentsIFrame);
        await ContactPage.grouping.dropdown.scrollToElement();
        const text = await DropDownHelper.getTheSelectedOptionText(ContactPage.grouping.dropdown);
        await ExpectationHelper.verifyStringEqualTo(option, text);
        await PageHelper.switchToDefaultContent();
    }

    static async clickFirstGroupingIcon() {
        StepLogger.subStep('Click on Grouping icon');
        await PageHelper.switchToiFrame(CommonPage.attachmentsIFrame);
        await WaitHelper.waitForPageToStable();
        await ContactPage.grouping.firstGroupingIcon.scrollToElement();
        await ContactPage.grouping.firstGroupingIcon.clickButtonJs();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyFirstGroupingIconIsCollapsed() {
        await PageHelper.switchToiFrame(CommonPage.attachmentsIFrame);
        await WaitHelper.waitForPageToStable();
        const status = await ContactPage.grouping.firstGroupingIcon.getAltAttribute();
        await ExpectationHelper.verifyStringEqualTo(status, ContactPageConstant.elementNames.expandGroup);
        await PageHelper.switchToDefaultContent();
    }

    static async verifyFirstGroupingIconIsExpanded() {
        await PageHelper.switchToiFrame(CommonPage.attachmentsIFrame);
        await WaitHelper.waitForPageToStable();
        const status = await ContactPage.grouping.firstGroupingIcon.getAltAttribute();
        await ExpectationHelper.verifyStringEqualTo(status, ContactPageConstant.elementNames.collapseGroup);
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnAddAttachmentButton() {
        await PageHelper.switchToiFrame(CommonPage.attachmentsIFrame);
        StepLogger.subStep('Click on Add Atachment button');
        await ContactPage.attachments.header.addAttachments.scrollToElement();
        await ContactPage.attachments.header.addAttachments.clickButtonJs();
        await PageHelper.switchToDefaultContent();
    }

    static async navigateToNewAttachmentPage() {
        await this.navigateToAttachmentsPage();
        await this.clickOnAddAttachmentButton();
    }

    static async verifyNewAttachmentModalDisplayed() {
        await ContactPage.newAttachmentModal.title.verifyDisplayedStatus();
    }

    static async verifyNewAttachementNameValue(expectedValue: string) {
        await PageHelper.switchToiFrame(CommonPage.contentFrame);
        const name = await ContactPage.newAttachmentModal.nameField.item.getAttribute('value');
        await ExpectationHelper.verifyStringEqualTo(expectedValue, name);
        await PageHelper.switchToDefaultContent();
    }

    static async verifyValidationMessageDisplayed(message: string) {
        await PageHelper.switchToiFrame(CommonPage.contentFrame);
        await ContactPage.getValidationMessageByText(message).verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnSaveButtonFromNewAttachementModal() {
        await PageHelper.switchToiFrame(CommonPage.contentFrame);
        await ContactPageHelper.clickSaveButton();
        await PageHelper.switchToDefaultContent();
    }

    static async clickAttachmentListColumn(columnName: string) {
        await PageHelper.switchToiFrame(CommonPage.attachmentsIFrame);
        StepLogger.subStep(`Click on column ${columnName}`);
        await ElementHelper.scrollToElement(ContactPage.attachments.getColumnByName(columnName));
        await ContactPage.attachments.getColumnByName(columnName).clickButtonJs();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyColumnIsSortedAsc(columnName: string) {
        await PageHelper.switchToiFrame(CommonPage.attachmentsIFrame);
        await ContactPage.attachments.sortAscIcon(columnName).verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyColumnIsSortedDesc(columnName: string) {
        await PageHelper.switchToiFrame(CommonPage.attachmentsIFrame);
        await ContactPage.attachments.sortDescIcon(columnName).verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyColumnIsNotSorted(columnName: string) {
        await PageHelper.switchToiFrame(CommonPage.attachmentsIFrame);
        await ContactPage.attachments.getSortIcon(columnName).verifyHiddenStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyAttachmentListColumns() {
        const column = ContactPageConstant.elementNames.attachmentsColumns;
        await PageHelper.switchToiFrame(CommonPage.attachmentsIFrame);
        await ContactPage.attachments.getColumnByName(column.addedBy).scrollToElement();
        await ContactPage.attachments.getColumnByName(column.addedBy).verifyDisplayedStatus();
        await ContactPage.attachments.getColumnByName(column.date).scrollToElement();
        await ContactPage.attachments.getColumnByName(column.date).verifyDisplayedStatus();
        await ContactPage.attachments.detailsColumn.scrollToElement();
        await ContactPage.attachments.detailsColumn.verifyDisplayedStatus();
        await ContactPage.attachments.getColumnByName(column.name).scrollToElement();
        await ContactPage.attachments.getColumnByName(column.name).verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyRefreshButtonDisplayed() {
        await PageHelper.switchToiFrame(CommonPage.attachmentsIFrame);
        await ContactPage.header.refreshButton.scrollToElement();
        await ContactPage.header.refreshButton.verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnRefreshButton() {
        await PageHelper.switchToiFrame(CommonPage.attachmentsIFrame);
        StepLogger.subStep('Click on Refresh button');
        await ContactPage.header.refreshButton.scrollToElement();
        await ContactPage.header.refreshButton.clickButtonJs();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyAttachementListIsGrouped(columnName: string) {
        await PageHelper.switchToiFrame(CommonPage.attachmentsIFrame);
        await ContactPage.grouping.getGroupingIconByColumnName(columnName).verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyAddAttachmentButtonDisplayed() {
        await PageHelper.switchToiFrame(CommonPage.attachmentsIFrame);
        await ContactPage.attachments.header.addAttachments.scrollToElement();
        await ContactPage.attachments.header.addAttachments.verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async typeNewAttachmentName(attachamentName: string) {
        await PageHelper.switchToiFrame(CommonPage.contentFrame);
        await ContactPage.newAttachmentModal.nameField.clearText();
        await ContactPage.newAttachmentModal.nameField.sendKeys(attachamentName);
        await PageHelper.switchToDefaultContent();
    }

    static async typeDescription(description: string) {
        StepLogger.subStep(`Type ${description} in Description field`);
        await PageHelper.switchToiFrame(CommonPage.contentFrame);
        await PageHelper.switchToiFrame(CommonPage.noteBoxContentIframe);
        await ContactPage.attachments.description.clearText();
        await ContactPage.attachments.description.sendKeys(description);
        await PageHelper.switchToDefaultContent();
    }

    static async verifyDescription(description: string) {
        await PageHelper.switchToiFrame(CommonPage.contentFrame);
        await PageHelper.switchToiFrame(CommonPage.noteBoxContentIframe);
        await ContactPage.attachments.description.verifyContainsText(description);
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnAnAttachmentIcon() {
        StepLogger.subStep('Click on an attachment');
        await ContactPage.attachments.firstAttachmentIcon.hoverOverAndClick();
    }
}

import { StepLogger } from '../../../../../core/logger/step-logger';
import { DropDownHelper } from '../../../../components/html/dropdown-helper';
import { ElementHelper } from '../../../../components/html/element-helper';
import { PageHelper } from '../../../../components/html/page-helper';
import { WaitHelper } from '../../../../components/html/wait-helper';
import { Constants } from '../../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../../components/misc-utils/expectation-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';
import { RandomHelper } from '../../../../components/misc-utils/random-helper';
import { CommonPage } from '../../common/common.po';

import { CampaignsPageHelperExtension } from './campaigns-extension.helper';
import { CampaignsConstant } from './campaigns.constants';
import { CampaignsPage } from './campaigns.po';

const { additionalAttributes } = HtmlHelper;
export class CampaignsPageHelper extends CampaignsPageHelperExtension {

    static async verifyMarketingCampaignsPageDisplayed() {
        await CampaignsPage.titles.marketingCampaigns.verifyDisplayedStatus();
    }

    static async clickOnAddCampaignButton() {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        StepLogger.subStep('Click on Add Campaign button');
        await CampaignsPage.elements.addCampaign.hoverOverAndClick();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnRefreshButton() {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        StepLogger.subStep('Click on Refresh button');
        await CampaignsPage.elements.refreshButton.hoverOverAndClick();
        await PageHelper.switchToDefaultContent();
    }

    static async selectGroupingOption(option: string) {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        StepLogger.subStep(`Select ${option} as grouping option`);
        await DropDownHelper.selectOptionByText(CampaignsPage.elements.groupingDropdown, option);
        await PageHelper.switchToDefaultContent();
    }

    static async verifyRecordsAreGrouped(groupingOption: string) {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await CampaignsPage.elements.firstGroupingIcon(groupingOption).verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnGroupingIcon(groupingOption: string) {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await CampaignsPage.elements.firstGroupingIcon(groupingOption).hoverOverAndClick();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyRecordsAreCollapsed(groupingOption: string) {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        const status = await CampaignsPage.elements.firstGroupingIcon(groupingOption).getAltAttribute();
        await ExpectationHelper.verifyStringEqualTo(status, CampaignsConstant.elementNames.expandGroup);
        await PageHelper.switchToDefaultContent();
    }

    static async verifyRecordsAreExpanded(groupingOption: string) {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        const status = await CampaignsPage.elements.firstGroupingIcon(groupingOption).getAltAttribute();
        await ExpectationHelper.verifyStringEqualTo(status, CampaignsConstant.elementNames.collapseGroup);
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnActiveColumn() {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        StepLogger.subStep('Click on Active column');
        await CampaignsPage.elements.marketingColumns.active.hoverOverAndClick();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnCampaignColumn() {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        StepLogger.subStep('Click on Campaign column');
        await CampaignsPage.elements.marketingColumns.campaign.hoverOverAndClick();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnTypeColumn() {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        StepLogger.subStep('Click on Type column');
        await CampaignsPage.elements.marketingColumns.type.hoverOverAndClick();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyRecordsSortedAsc(columnName: string) {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        StepLogger.subStep(`Verify records are ascendently sorted by ${columnName}`);
        await CampaignsPage.elements.columnIcon(columnName).sortAsc.scrollToElement();
        await CampaignsPage.elements.columnIcon(columnName).sortAsc.verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnGroupingIconToCollapse(groupingOption: string) {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await CampaignsPage.elements.firstGroupingIcon(groupingOption).hoverOverAndClick();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyNewCampaignPageDisplayed(closeTabAfterValidation: boolean = true) {
        await PageHelper.switchToTab(Constants.number.one);
        await CampaignsPage.titles.newCampaign.verifyDisplayedStatus();
        if (closeTabAfterValidation) {
            await PageHelper.switchToFirstTab();
        }
    }

    static async verifyNewCampaignFields() {
        await CampaignsPage.elements.nameOne.verifyDisplayedStatus();
        await CampaignsPage.elements.type.verifyDisplayedStatus();
        await CampaignsPage.elements.cost.verifyDisplayedStatus();
        await PageHelper.switchToiFrame(CommonPage.richTextFrame);
        await CampaignsPage.elements.description.verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyNewCampaignMandatoryFields() {
        const name = CampaignsConstant.elementNames;
        const nameOneMandatoryFieldIcon = await CampaignsPage.elements.labelMandatoryFieldIcon(name.nameOne);
        const typeMandatoryFieldIcon = await CampaignsPage.elements.labelMandatoryFieldIcon(name.type);
        const descMandatoryFieldIcon = await CampaignsPage.elements.labelMandatoryFieldIcon(name.description);
        await ExpectationHelper.verifyDisplayedStatus(nameOneMandatoryFieldIcon);
        await ExpectationHelper.verifyDisplayedStatus(typeMandatoryFieldIcon);
        await ExpectationHelper.verifyDisplayedStatus(descMandatoryFieldIcon);
    }

    static async fillInNewCampaignMandatoryFields(
        name: string = RandomHelper.getRandomString(),
        type: string = CampaignsConstant.elementNames.contact,
        description = RandomHelper.getRandomString()
    ) {
        await CampaignsPage.elements.nameOne.clearText();
        await CampaignsPage.elements.nameOne.sendKeys(name);
        await DropDownHelper.selectOptionByText(CampaignsPage.elements.type, type);
        await PageHelper.switchToiFrame(CommonPage.richTextFrame);
        await CampaignsPage.elements.description.clearText();
        await CampaignsPage.elements.description.sendKeys(description);
        await PageHelper.switchToDefaultContent();
        return name;
    }

    static async clickOnSaveButton() {
        StepLogger.subStep('Click on Save button');
        await CampaignsPage.elements.saveButton.hoverOverAndClick();
    }

    static async verifyNewCampaignHasBeenSaved(updatedCampaing: boolean = false, name: string = '') {
        await CampaignsPage.titles.campaign.verifyDisplayedStatus();
        if (updatedCampaing) {
            await ExpectationHelper.verifyContainsText(
                CampaignsPage.titles.campaign,
                name);
        }
    }

    static async verifyUnsavedChangesDialog(toSwitch: boolean = false) {
        if (toSwitch) {
            await PageHelper.switchToiFrame(CommonPage.contentIFrameOnModal);
        }

        await CampaignsPage.elements.unsavedChanges.verifyDisplayedStatus();
    }

    static async verifyNewFieldsAdded() {
        await CampaignsPage.elements.lauchedOn.verifyDisplayedStatus();
        await CampaignsPage.elements.launchButton.verifyDisplayedStatus();
        await CampaignsPage.elements.totalNumberOfActivitiesContactsTargetedInThisCampaign.verifyDisplayedStatus();
        await CampaignsPage.elements.numberOfUsersIncludedInCampaign.verifyDisplayedStatus();
        await CampaignsPage.elements.numberOfPipelinesIncludedInCampaign.verifyDisplayedStatus();
        await CampaignsPage.elements.numberOfEventsIncludedInCampaign.verifyDisplayedStatus();
        await CampaignsPage.elements.distributePipelinesAndEventsToUsersOrQueues.verifyDisplayedStatus();
        await CampaignsPage.elements.numberOfProductsRecommendedInThisCampaign.verifyDisplayedStatus();
        await CampaignsPage.elements.showRecommendedProductsToAllUsersOrOnlyToDistributionList.verifyDisplayedStatus();
        await CampaignsPage.elements.isCampaignCurrentlyActive.verifyDisplayedStatus();
        await CampaignsPage.elements.refreshDistributionListAutomatically.verifyDisplayedStatus();
        await CampaignsPage.elements.refreshUsing.verifyDisplayedStatus();
    }

    static async clickOnCloseButton() {
        StepLogger.subStep('Click on Close button');
        await CampaignsPage.elements.closeButton.hoverOverAndClick();
    }

    static async clickOnFirstCampaignLogo() {
        StepLogger.subStep('Click on First Campaign Logo');
        await CampaignsPage.getFirstCampaignLogo().clickLink();
    }

    static async verifyWarningPopupDisplayed() {
        await CampaignsPage.titles.warning.verifyDisplayedStatus();
    }

    static async verifyWarningPopupClosed() {
        await CampaignsPage.titles.warning.verifyHiddenStatus();
    }

    static async verifyButtonsOnWarningPopup() {
        StepLogger.subVerification('Verify Ok button');
        await CampaignsPage.campaignData.ok.verifyDisplayedStatus();
        StepLogger.subVerification('Verify cancel button');
        await CampaignsPage.campaignData.cancel.verifyDisplayedStatus();
    }

    static async clickOkButtonOnWarningPopup() {
        StepLogger.subStep('Click on Ok button');
        await CampaignsPage.elements.warningPopupOkButton.hoverOverAndClick();
        await PageHelper.switchToTab(Constants.number.zero);
    }

    static async verifyCreateCampaign(campaignName: string) {
        await PageHelper.switchToTab(Constants.number.zero);
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await CampaignsPage.getCampaignFromTheListByName(campaignName).verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyNewCampaignPageTabsAdded() {
        await CampaignsPage.elements.tabs.overview.verifyDisplayedStatus();
        await CampaignsPage.elements.tabs.attachments.verifyDisplayedStatus();
        await CampaignsPage.elements.tabs.campaignItems.verifyDisplayedStatus();
        await CampaignsPage.elements.tabs.campaignStats.verifyDisplayedStatus();
        await CampaignsPage.elements.tabs.distribution.verifyDisplayedStatus();
        await CampaignsPage.elements.tabs.notes.verifyDisplayedStatus();
    }

    static async typeCostStringValue(cost: string) {
        await CampaignsPage.elements.cost.clearText();
        await CampaignsPage.elements.cost.sendKeys(cost);
    }

    static async verifyValidationMessageDisplayed(messageText: string) {
        await CampaignsPage.getValidationMessage(messageText).verifyDisplayedStatus();
    }

    static async clickOnNameField() {
        StepLogger.subStep('Click on Name field');
        await CampaignsPage.elements.nameOne.hoverOverAndClick();
    }

    static async selectType(type: string) {
        StepLogger.subStep(`Select ${type} as type`);
        await DropDownHelper.selectOptionByText(CampaignsPage.elements.type, type);
    }

    static async verifySelectedType(type: string) {
        const selected = await DropDownHelper.getTheSelectedOptionText(CampaignsPage.elements.type);
        await ExpectationHelper.verifyStringEqualTo(selected, type);
    }

    static async typeName(name: string = RandomHelper.getRandomString()) {
        await CampaignsPage.elements.nameOne.clearText();
        await CampaignsPage.elements.nameOne.sendKeys(name);
    }

    static async typeDescription(description: string = RandomHelper.getRandomString()) {
        await PageHelper.switchToiFrame(CommonPage.richTextFrame);
        await CampaignsPage.elements.description.clearText();
        await CampaignsPage.elements.description.sendKeys(description);
        await PageHelper.switchToDefaultContent();
    }

    static async typeNameAndDescription(
        name: string = RandomHelper.getRandomString(),
        description: string = PageHelper.getUniqueId()
    ) {
        await this.typeName(name);
        await this.typeDescription(description);
        return name;
    }

    static async clickAttachmentsTab(toCloseAfterExecution = true) {
        await PageHelper.executeInNewTab(async () => {
            await CampaignsPage.elements.tabs.attachmentsNew.clickButton();
        }, 1, toCloseAfterExecution);
    }

    static async verifyAttachmentsTabIsDisplayed() {
        await PageHelper.executeInIFrame([CommonPage.attachmentsIFrame], async () => {
            await CampaignsPage.attachments.addAttachment.verifyDisplayedStatus();
        });
    }

    static async clickAddAttachmentsButton() {
        await PageHelper.executeInIFrame([CommonPage.attachmentsIFrame], async () => {
            await CampaignsPage.attachments.addAttachment.clickButton();
        });
    }

    static async verifyNewAttachmentModalIsDisplayed() {
        await CampaignsPage.attachments.newAttachment.title.verifyDisplayedStatus();
    }

    static async clickEditButtonOnAttachmentsPane(index = 0) {
        await PageHelper.executeInIFrame([CommonPage.attachmentsIFrame], async () => {
            await CampaignsPage.attachments.editButtons.clickNthButton(index);
        });
    }

    static async verifyAttachmentModalIsDisplayedAfterClickOnEdit() {
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await CampaignsPage.attachments.editAttachment.title.verifyDisplayedStatus();
        });
    }

    static async verifyThreeVerticalDotsAreDisplayedOnEditAttachmentModal() {
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await CampaignsPage.attachments.editAttachment.threeDots.verifyDisplayedStatus();
        });
    }

    static async clickThreeDotsIconOnEditAttachmentModal() {
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await CampaignsPage.attachments.editAttachment.threeDots.hoverOverAndClick();
        });
    }

    static async clickHistoryIconOnEditAttachmentModal() {
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await CampaignsPage.attachments.editAttachment.history.hoverOverAndClick();
        });
    }

    static async verifyHistoryModalIsDisplayed() {
        await CampaignsPage.history.title.verifyDisplayedStatus();
    }
    static async selectLogInReadView() {
        await CampaignsPage.history.logDropDown.clickLink();
        await CampaignsPage.history.logReadView.hoverOverAndClick();
    }

    static async verifyLogInReadViewSelected() {
        await CampaignsPage.history.logReadViewSelected.verifyDisplayedStatus();
    }

    static async verifyLogInListViewSelected() {
        await CampaignsPage.history.logListViewSelected.verifyDisplayedStatus();
    }

    static async selectLogInListView() {
        await CampaignsPage.history.logDropDown.clickLink();
        await CampaignsPage.history.logListView.hoverOverAndClick();
    }

    static async clickDetailsTabOnHistoryModal() {
        await PageHelper.executeInIFrame([CommonPage.contentIFrameVisibleOnModal], async () => {
            await CampaignsPage.history.details.detailsTab.clickButton();
        });
    }

    static async verifyDetailTabIsDisplayed() {
        await PageHelper.executeInIFrame([CommonPage.contentIFrameVisibleOnModal], async () => {
            await CampaignsPage.history.details.viewDropdown.verifyDisplayedStatus();
        });
    }

    static async verifyViewDropdownIsDisplayedAtTop() {
        await PageHelper.executeInIFrame([CommonPage.contentIFrameVisibleOnModal], async () => {
            await CampaignsPage.history.details.viewDropdown.verifyDisplayedStatus();
            const vAlign = await CampaignsPage.history.details.viewDropdownTd
                .getAtttribute(additionalAttributes.vAlign);
            await ExpectationHelper.verifyStringEqualTo(vAlign, additionalAttributes.top);
        });
    }

    static async verifyThreeVerticalDotsAreDisplayedOnCampaignData() {
        await CampaignsPage.campaignData.threeDots.verifyDisplayedStatus();
    }

    static async verifyThreeVerticalDotsAreDisplayedOnCampaignDataExpended() {
        await CampaignsPage.campaignData.threeDotsExpanded.verifyDisplayedStatus();
    }

    static async clickThreeDotsIconOnCampaignData() {
        await ElementHelper.actionMouseMove(CampaignsPage.campaignData.threeDots);
        await CampaignsPage.campaignData.threeDots.hoverOverAndClick();
    }

    static async clickHistoryIconOnCampaignData() {
        await CampaignsPage.campaignData.history.hoverOverAndClick();
    }

    static async verifyHistoryIconOnCampaignData() {
        await CampaignsPage.campaignData.history.verifyDisplayedStatus();
    }

    static async clickDeleteIconOnCampaignData() {
        await CampaignsPage.campaignData.delete.hoverOverAndClick();
    }
    static async verifyName1FieldDisplay() {
        await CampaignsPage.campaignData.name1.verifyDisplayedStatus();
    }

    static async verifyDeleteIconOnCampaignData() {
        await CampaignsPage.campaignData.delete.verifyDisplayedStatus();
    }

    static async verifyDeleteMessageOnCampaignData() {
        await CampaignsPage.campaignData.deleteMessage.verifyDisplayedStatus();
    }

    static async verifyInfoTableInListViewDisplay() {
        await CampaignsPage.history.columnListView.verifyDisplayedStatus();
    }

    static async verifyDetailsDisplay() {
        await CampaignsPage.history.date.verifyDisplayedStatus();
        await CampaignsPage.history.description1.verifyDisplayedStatus();
        await CampaignsPage.history.user.verifyDisplayedStatus();
        await CampaignsPage.history.entry.verifyDisplayedStatus();
    }

    static async clickOnCreatedColumn() {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        StepLogger.subStep('Click on Created column');
        await CampaignsPage.elements.marketingColumns.created.scrollToElement();
        await CampaignsPage.elements.marketingColumns.created.hoverOverAndClick();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyRecordsUngrouped() {
        await CampaignsPage.elements.groupingIcon.verifyHiddenStatus();
    }

    static async clickOnOwnerColumn() {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        StepLogger.subStep('Click on Owner column');
        await CampaignsPage.elements.marketingColumns.owner.hoverOverAndClick();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnPage(pageNumber: number) {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        StepLogger.subStep(`Click on page number ${pageNumber}`);
        await CampaignsPage.elements.pagination.pageNumberLink(pageNumber).hoverOverAndClick();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyPaginationCurrentPage(pageNumber: number) {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        const current = await CampaignsPage.elements.pagination.currentPage.getText();
        await ExpectationHelper.verifyStringValueContain(current, 'Page ' + pageNumber + ' of');
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnNextPageIcon() {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        StepLogger.subStep('Click on next page ">" icon');
        await WaitHelper.waitForElementToBeDisplayed(CampaignsPage.elements.pagination.nextPage.item);
        await CampaignsPage.elements.pagination.nextPage.hoverOverAndClick();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnPreviousPageIcon() {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        StepLogger.subStep('Click on previous page "<" icon');
        await WaitHelper.waitForElementToBeDisplayed(CampaignsPage.elements.pagination.previousPage.item);
        await CampaignsPage.elements.pagination.previousPage.hoverOverAndClick();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnTheFirstCampaignIcon() {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        StepLogger.subStep('Click on the first campaign icon');
        await CampaignsPage.elements.firstIconCampaing.hoverOverAndClick();
        const name = await CampaignsPage.elements.firstCampaignName.getText();
        await PageHelper.switchToDefaultContent();
        return name;
    }

    static async verifyCampaignPageDisplayed(closeTabAfterValidation: boolean = true) {
        await PageHelper.switchToTab(Constants.number.one);
        await CampaignsPage.titles.campaign.verifyDisplayedStatus();
        if (closeTabAfterValidation) {
            await PageHelper.switchToFirstTab();
        }
    }

    static async verifyName(name: string) {
        await CampaignsPage.elements.nameOne.verifyTextBoxContains(name);
    }

    static async verifyGroupingFieldDisplayed() {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await CampaignsPage.elements.groupingDropdown.verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyDeleteConfirmationPopupClosed() {
        await CampaignsPage.titles.deleteConfirmation.verifyHiddenStatus();
    }
}

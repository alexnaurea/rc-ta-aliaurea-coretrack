import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { ReferralSourcesPage } from '../administration/configuration/referral-sources/referral-sources.po';

import { BrowsePageConstant } from './browse-page.constants';
import { BrowsePage } from './browse-page.po';

const { elementNames: eNames } = BrowsePageConstant;
const bElements = BrowsePage.browseControl;
export class BrowsePageHelper {

    /**
     * Verify 'Report Writer Reports' page is displayed
     */
    static async verifyBrowserPageIsDisplayed() {
        await BrowsePage.header.title.verifyContainsText(eNames.browse);
    }

    /**
     * Click on SignOff button
     */
    static async clickOnSignOffButton() {
        await BrowsePage.signOff.clickLink();
    }

    static async doubleClickOnCompensationInfoReport() {
        await PageHelper.click(BrowsePage.compensationInfoReport());
    }

    static async verifyCompensationInfoTitleDisplay() {
        await BrowsePage.header.compensationInfoTitle.verifyDisplayedStatus();
    }

    static async clickOnRunReport() {
        await BrowsePage.buttons.runReport.clickLinkJs();
    }

    static async clickOnLostReport() {
        await BrowsePage.lostReport.clickLink();
    }

    static async clickOnReport() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        await BrowsePage.reportHeading.clickLink();
    }

    static async selectUser(user: string) {
        await BrowsePage.userCheckbox(user).clickLink();
    }

    static async selectLostLeadByOwnerType() {
        await BrowsePage.typeDropDown.main.clickLink();
        await BrowsePage.typeDropDown.lostLeadByOwner.clickLink();
    }

    static async clickRunReportButton() {
        await BrowsePage.runReportButton.clickLink();
    }

    static async verifyReportAscendingOrder() {
        await BrowsePage.ascendingAndDescending.ascending.verifyDisplayedStatus();
    }

    static async verifyReportDescendingOrder() {
        await BrowsePage.ascendingAndDescending.descending.verifyDisplayedStatus();
    }

    static async verifyLostForm() {
        await BrowsePage.lostForm.verifyDisplayedStatus();
    }

    static async verifyUserList() {
        await BrowsePage.userList.verifyDisplayedStatus();
    }

    static async verifySelectUserDialogIsDisplayed() {
        await BrowsePage.header.userDialogTitle.verifyContainsText(eNames.selectUser);
    }

    static async verifySelectedUserDisplayed(user: string) {
        await BrowsePage.selectedUser.verifyContainsText(user);
    }

    static async verifySelectUserDialogNotDisplayed() {
        await ExpectationHelper.verifyNotPresentStatus(BrowsePage.header.userDialogTitleElm,
            BrowsePageConstant.elementNames.selectUser);
    }

    static async clickSearchIcon() {
        await BrowsePage.lostReportItems.search.clickLinkJs();
    }

    static async clickSearchButton() {
        await BrowsePage.lostReportItems.searchButton.clickLinkJs();
    }

    static async clickSelectButton() {
        await BrowsePage.lostReportItems.selectButton.clickLinkJs();
    }

    static async verifyCoulumnsOnPage() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        StepLogger.subVerification(' REPORT  should be displayed');
        await BrowsePage.reportHeading.verifyDisplayedStatus();
        StepLogger.subVerification(' CATEGORY  should be displayed');
        await BrowsePage.categoryHeading.verifyDisplayedStatus();
    }

    static async verifyButtonOnBrowse() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        StepLogger.subVerification(' Refresh  should be displayed');
        await bElements.refresh.verifyDisplayedStatus();
        StepLogger.subVerification(' Excel  should be displayed');
        await bElements.excel.verifyDisplayedStatus();
        StepLogger.subVerification(' Word  should be displayed');
        await bElements.word.verifyDisplayedStatus();
    }

    static async clickRefresh() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        await bElements.refresh.clickButton();
    }

    static async verifyRefreshDone() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        await bElements.refresh.verifyDisplayedStatus();
    }

    static async clickCategorySort() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        await BrowsePage.getLinkText(eNames.categoryColumn).clickNthButton(Constants.number.one);
    }

    static async selectNoGroup() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        await BrowsePage.categoryDropdown.selectOptionByVal(eNames.noGrouping);
    }

    static async verifyGroupNotAppearing() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        await BrowsePage.getGroupText.verifyHiddenStatus();
    }

    static async verifyGroupAppearing() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        await BrowsePage.getGroupText.verifyDisplayedStatus();
    }

    static async clickMinusButton() {
        await BrowsePage.browseControl.collapseGroup.clickButton();
    }

    static async clickPlusButton() {
        await BrowsePage.browseControl.expandGroup.clickButton();
    }

    static async verifySectionExpand() {
        await BrowsePage.browseControl.collapseGroup.verifyDisplayedStatus();
    }

    static async verifySectionCollapse() {
        await BrowsePage.browseControl.expandGroup.verifyDisplayedStatus();
    }

    static async verifyNoFilter() {
        await BrowsePage.categoryDropdown.verifyHiddenStatus();
    }
}

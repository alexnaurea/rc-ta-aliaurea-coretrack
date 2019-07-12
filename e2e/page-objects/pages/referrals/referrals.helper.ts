import { StepLogger } from '../../../../core/logger/step-logger';
import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { ProductsConstants } from '../administration/configuration/products/products.constants';
import { CommonPage } from '../common/common.po';
import { HomePageHelper } from '../home-page/home-page.helper';
import { HomePage1Helper } from '../home-page/home-page1.helper';
import { NewCasePageConstant } from '../new-case-page/new-case-page.constants';
import { NewOpportunityPageConstant } from '../new-opportunity-page/new-opportunity-page.constants';
import { NewOpportunityPageHelper } from '../new-opportunity-page/new-opportunity-page.helper';

import { ReferralsConstant } from './referrals.constant';
import { ReferralsPage } from './referrals.po';

export class ReferralsPageHelper {

    static async verifyReferralsPageDisplayed() {
        await ReferralsPage.titles.referrals.verifyDisplayedStatus();
    }

    static async selectUserFromUserFilterDropdown(user: string) {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await WaitHelper.waitForElementToBeDisplayed(ReferralsPage.elements.userFilterDropdown.item);
        await DropDownHelper.selectOptionByText(ReferralsPage.elements.userFilterDropdown, user);
        await PageHelper.switchToDefaultContent();
    }

    static async verifySelectedUserFromUserFilterDropdown(user: string) {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        const selected = await DropDownHelper.getTheSelectedOptionText(ReferralsPage.elements.userFilterDropdown);
        await ExpectationHelper.verifyStringEqualTo(selected, user);
        await PageHelper.switchToDefaultContent();
    }

    static async verifyPaginationAvailable() {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await ReferralsPage.elements.pagination.verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async selectAValueFromGroupingDropdown(groupOption: string) {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await WaitHelper.waitForElementToBeDisplayed(ReferralsPage.elements.groupingDropdown.item);
        await DropDownHelper.selectOptionByText(ReferralsPage.elements.groupingDropdown, groupOption);
        await PageHelper.switchToDefaultContent();
    }

    static async verifySelectedGroupingOption(groupOption: string) {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        const selected = await DropDownHelper.getTheSelectedOptionText(ReferralsPage.elements.groupingDropdown);
        await ExpectationHelper.verifyStringEqualTo(selected, groupOption);
        await PageHelper.switchToDefaultContent();
    }

    static async verifyRecordsAreGrouped(groupOption: string) {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await ReferralsPage.getGroupingIcon(groupOption).verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyAddOpportunityButtonDisplayed() {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await ReferralsPage.elements.addOpportunityButton.verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnAddOpportunityButton() {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        StepLogger.subStep('Click on Add Opportunity button');
        await ReferralsPage.elements.addOpportunityButton.hoverOverAndClick();
        await PageHelper.switchToDefaultContent();
    }

    static async navigateToReferralsAndClickAddOpportunity() {
        await HomePage1Helper.clickOnOpportunitiesMenu();
        await HomePage1Helper.clickOnReferralsMenu();
        await ReferralsPageHelper.verifyReferralsPageDisplayed();
        await ReferralsPageHelper.verifyAddOpportunityButtonDisplayed();
        await ReferralsPageHelper.clickOnAddOpportunityButton();
        await NewOpportunityPageHelper.verifyNewOpportunityPageIsDisplayed(false);
    }

    static async getCurrentNumbersOfRecords() {
        await HomePageHelper.navigateToReferralsPage();
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await WaitHelper.waitForElementToBeDisplayed(ReferralsPage.elements.referralsRows.item.get(Constants.number.zero));
        const num = await ReferralsPage.elements.referralsRows.item.count();
        await PageHelper.switchToFirstTab();
        await PageHelper.switchToDefaultContent();
        return num;
    }

    static async createAnOpportunity() {
        await ReferralsPageHelper.navigateToReferralsAndClickAddOpportunity();
        await NewOpportunityPageHelper.clickSearchContactIcon();
        await NewOpportunityPageHelper.verifyContactSelectorModalIsDisplayed();
        const criteria = NewCasePageConstant.elementNames.daron;
        await NewOpportunityPageHelper.searchARandomContact(criteria);
        await NewOpportunityPageHelper.verifyContactResultsAreDisplayedFromContactDialog();
        const contact = await NewOpportunityPageHelper.getFirstContactDisplayed();
        await NewOpportunityPageHelper.clickUseSelectedContact();
        await NewOpportunityPageHelper.clickReturnToNewIfPresent();
        await NewOpportunityPageHelper.verifyContactHasBeenSelected(contact);
        await NewOpportunityPageHelper.selectAProductType(ProductsConstants.productCategory.emailAddress);
        await NewOpportunityPageHelper.verifySelectedProductType(ProductsConstants.productCategory.emailAddress);
        await NewOpportunityPageHelper.selectAProductName(NewOpportunityPageConstant.testData.validateP1);
        await NewOpportunityPageHelper.verifySelectedProductName(NewOpportunityPageConstant.testData.validateP1);
        await NewOpportunityPageHelper.clickSaveButton();
        await PageHelper.switchToFirstTab();
    }

    static async verifyCurrentNumbersOfReferralsRecords(expectedNumber: number) {
        await HomePageHelper.navigateToReferralsPage();
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await WaitHelper.waitForElementToBeDisplayed(ReferralsPage.elements.referralsRows.item.get(Constants.number.zero));
        const num = await ReferralsPage.elements.referralsRows.item.count();
        await ExpectationHelper.verifyValueEqualTo(num, expectedNumber);
        await PageHelper.switchToFirstTab();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnGroupingIcon(groupingOption: string) {
        StepLogger.subStep('Click on the first grouping icon');
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await ReferralsPage.getGroupingIcon(groupingOption).hoverOverAndClick();
        await WaitHelper.waitForPageToStable();
        await WaitHelper.waitForElementToBeClickable(ReferralsPage.getGroupingIcon(groupingOption).item);
        await PageHelper.switchToDefaultContent();
    }

    static async verifyGroupIsCollapsed(groupingOption: string) {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await WaitHelper.waitForPageToStable();
        await WaitHelper.waitForElementToBeDisplayed(ReferralsPage.getGroupingIcon(groupingOption).item);
        await WaitHelper.waitForElementToBeClickable(ReferralsPage.getGroupingIcon(groupingOption).item);
        const status = await ReferralsPage.getGroupingIcon(groupingOption).getAltAttribute();
        await ExpectationHelper.verifyStringEqualTo(status, ReferralsConstant.names.expandGroup);
        await PageHelper.switchToDefaultContent();
    }

    static async verifyGroupIsExpanded(groupingOption: string) {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await WaitHelper.waitForPageToStable();
        await WaitHelper.waitForElementToBeDisplayed(ReferralsPage.getGroupingIcon(groupingOption).item);
        await WaitHelper.sleepForTwoSeconds();
        await WaitHelper.waitForElementToBeClickable(ReferralsPage.getGroupingIcon(groupingOption).item);
        const status = await ReferralsPage.getGroupingIcon(groupingOption).getAltAttribute();
        await ExpectationHelper.verifyStringEqualTo(status, ReferralsConstant.names.collapseGroup);
        await PageHelper.switchToDefaultContent();
    }

    static async verifyRecordsAreUngrouped() {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await ReferralsPage.elements.groupingIcon.verifyHiddenStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnReferralsGridColumn(columnName: string) {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        StepLogger.subStep(`Click on ${columnName} column`);
        await ReferralsPage.elements.getColumnByName(columnName).scrollToElement();
        await ReferralsPage.elements.getColumnByName(columnName).clickLink();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnRefreshButton() {
        StepLogger.subStep('Click on Refresh button');
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await ReferralsPage.elements.refresh.hoverOverAndClick();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyReferralsGridColumnSortedAsc(columnName: string) {
        await this.clickOnRefreshButton();
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await ReferralsPage.elements.getColumnAscIcon(columnName).scrollToElement();
        await ReferralsPage.elements.getColumnAscIcon(columnName).verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyReferralsGridColumnSortedDesc(columnName: string) {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await ReferralsPage.elements.getColumnDescIcon(columnName).verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnColumnOnceToResetTheSorting(columnName: string) {
        await ReferralsPageHelper.clickOnReferralsGridColumn(columnName);
    }

    static async clickOnColumnTwiceToResetTheSorting(columnName: string) {
        await ReferralsPageHelper.clickOnReferralsGridColumn(columnName);
        await ReferralsPageHelper.clickOnReferralsGridColumn(columnName);
    }

    static async verifyReferralsPageButtons() {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await ReferralsPage.elements.addOpportunityButton.verifyDisplayedStatus();
        await ReferralsPage.elements.refresh.verifyDisplayedStatus();
        await ReferralsPage.elements.userFilterDropdown.verifyDisplayedStatus();
        await ReferralsPage.elements.groupingDropdown.verifyDisplayedStatus();
        await ReferralsPage.elements.exportToExcel.verifyDisplayedStatus();
        await ReferralsPage.elements.exportToWord.verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyReferralsGridColumns() {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        const column = ReferralsConstant.referralsColumns;
        await ReferralsPage.elements.getColumnByName(column.amount).scrollToElement();
        await ReferralsPage.elements.getColumnByName(column.amount).verifyDisplayedStatus();
        await ReferralsPage.elements.getColumnByName(column.contact).scrollToElement();
        await ReferralsPage.elements.getColumnByName(column.contact).verifyDisplayedStatus();
        await ReferralsPage.elements.getColumnByName(column.modified).scrollToElement();
        await ReferralsPage.elements.getColumnByName(column.modified).verifyDisplayedStatus();
        await ReferralsPage.elements.getColumnByName(column.outside).scrollToElement();
        await ReferralsPage.elements.getColumnByName(column.outside).verifyDisplayedStatus();
        await ReferralsPage.elements.getColumnByName(column.owner).scrollToElement();
        await ReferralsPage.elements.getColumnByName(column.owner).verifyDisplayedStatus();
        await ReferralsPage.elements.getColumnByName(column.product).scrollToElement();
        await ReferralsPage.elements.getColumnByName(column.product).verifyDisplayedStatus();
        await ReferralsPage.elements.getColumnByName(column.productType).scrollToElement();
        await ReferralsPage.elements.getColumnByName(column.productType).verifyDisplayedStatus();
        await ReferralsPage.elements.getColumnByName(column.qual).scrollToElement();
        await ReferralsPage.elements.getColumnByName(column.qual).verifyDisplayedStatus();
        await ReferralsPage.elements.getColumnByName(column.salesStage).scrollToElement();
        await ReferralsPage.elements.getColumnByName(column.salesStage).verifyDisplayedStatus();
        await ReferralsPage.elements.getColumnByName(column.status).scrollToElement();
        await ReferralsPage.elements.getColumnByName(column.status).verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOpportunity() {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        StepLogger.subStep('click on an opportunity from Referrals page');
        await ReferralsPage.elements.iconOpportunity.hoverOverAndClick();
        await PageHelper.switchToDefaultContent();
    }

    static async verifyPullButtonDisplayed() {
        await ReferralsPage.elements.pullButton.verifyDisplayedStatus();
    }

    static async clickOnPullButton() {
        StepLogger.subStep('Click on Pull button');
        await ReferralsPage.elements.pullButton.hoverOverAndClick();
    }

    static async doubleclickOpportunity() {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        StepLogger.subStep('Double click opportunity from Referrals page');
        await ReferralsPage.elements.firstOpportunityProductType.hoverOverAndClick();
        await ReferralsPage.elements.firstOpportunityProductType.doubleClick();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnCloseButton() {
        StepLogger.subStep('Click on Close button');
        await ReferralsPage.elements.closeButton.hoverOverAndClick();
    }

    static async verifyTabClosed(expectedNumberOfTabs: number) {
        const numberOfTabs = await PageHelper.getTabsCount();
        await ExpectationHelper.verifyValueEqualTo(expectedNumberOfTabs, numberOfTabs);
    }

    static async verifyActivityCardDisplayed(name: string) {
        await ReferralsPage.elements.activityCardByName(name).verifyDisplayedStatus();
    }

    static async clickOnActivityCard(name: string) {
        StepLogger.subStep(`Click on ${name}'s card`);
        await WaitHelper.waitForElementToBeDisplayed(ReferralsPage.elements.activityCardByName(name).item);
        await ReferralsPage.elements.activityCardByName(name).hoverOverAndClick();
    }
}

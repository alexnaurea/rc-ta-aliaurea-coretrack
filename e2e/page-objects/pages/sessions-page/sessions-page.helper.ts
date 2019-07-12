import { browser, protractor } from 'protractor';

import { StepLogger } from '../../../../core/logger/step-logger';
import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { CommonPage } from '../common/common.po';

import { SessionsPageConstant } from './sessions-page.constants';
import { SessionsPage } from './sessions-page.po';

const { elementNames: eNames } = SessionsPageConstant;

export class SessionsPageHelper {

    /**
     * Verify 'Sessions' page is displayed
     */
    static async verifySessionsPageIsDisplayed() {
        await SessionsPage.header.title.verifyContainsText(eNames.sessions);
    }

    static async clickOnUser() {
        await SessionsPage.elements.tableFirst.clickLink();
    }

    static async clickOnDetailsTab() {
        await SessionsPage.elements.details.clickLink();
    }

    static async selectLogInListView() {
        await SessionsPage.elements.logDropDown.clickLink();
        await SessionsPage.elements.logListView.hoverOverAndClick();
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
        await WaitHelper.waitForElementToBeDisplayed(SessionsPage.elements.logDropDown.item);
        await SessionsPage.elements.logDropDown.clickLink();
        await WaitHelper.waitForElementToBeDisplayed(SessionsPage.elements.logReadView.item);
        await SessionsPage.elements.logReadView.hoverOverAndClick();
        await WaitHelper.waitForElementToBeDisplayed(SessionsPage.elements.logListView.item);
        await SessionsPage.elements.logListView.hoverOverAndClick();
    }

    static async selectLogInReadView() {
        await SessionsPage.elements.logDropDown.clickLink();
        await SessionsPage.elements.logReadView.hoverOverAndClick();
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
        await WaitHelper.waitForElementToBeDisplayed(SessionsPage.elements.logDropDown.item);
        await SessionsPage.elements.logDropDown.clickLink();
        await WaitHelper.waitForElementToBeDisplayed(SessionsPage.elements.logListView.item);
        await SessionsPage.elements.logListView.hoverOverAndClick();
        await WaitHelper.waitForElementToBeDisplayed(SessionsPage.elements.logReadView.item);
        await SessionsPage.elements.logReadView.hoverOverAndClick();
    }

    static async verifyDetailsSelectedDisplay() {
        await SessionsPage.elements.detailsSelected.verifyDisplayedStatus();
    }

    static async verifyRowModeDisplay() {
        await SessionsPage.elements.rowMode.verifyDisplayedStatus();
    }

    static async clickOnAUserIcon() {
        StepLogger.subStep('Click on User icon');
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await SessionsPage.elements.userIcon.clickFirstButton();
    }

    static async verifySessionDetailsPageDisplayed() {
        await PageHelper.switchToTab(Constants.number.one);
        await SessionsPage.elements.details.verifyDisplayedStatus();
    }

    static async verifyListViewDataGridDisplayed() {
        await WaitHelper.waitForElementToBeDisplayed(SessionsPage.elements.detailsListDataGrid.item);
        await SessionsPage.elements.detailsListDataGrid.verifyDisplayedStatus();
    }

    static async clickOnUserColumn() {
        if (await CommonPage.resourceOneIFrame.item.isPresent()) {
            await PageHelper.switchToiFrame(CommonPage.resourceOneIFrame);
            StepLogger.subStep('Click on User column');
            await SessionsPage.sessionColumns.user.hoverOverAndClick();
            await PageHelper.switchToDefaultContent();
        } else {
            StepLogger.subStep('Click on User column');
            await SessionsPage.sessionColumns.user.hoverOverAndClick();
        }
    }

    static async clickOnEntryColumn() {
        if (await CommonPage.resourceOneIFrame.item.isPresent()) {
            await PageHelper.switchToiFrame(CommonPage.resourceOneIFrame);
            StepLogger.subStep('Click on Entry column');
            await SessionsPage.sessionColumns.entry.hoverOverAndClick();
            await PageHelper.switchToDefaultContent();
        } else {
            StepLogger.subStep('Click on Entry column');
            await SessionsPage.sessionColumns.entry.hoverOverAndClick();
        }
    }

    static async clickOnDateColumn() {
        if (await CommonPage.resourceOneIFrame.item.isPresent()) {
            await PageHelper.switchToiFrame(CommonPage.resourceOneIFrame);
            StepLogger.subStep('Click on Date column');
            await SessionsPage.sessionColumns.date.hoverOverAndClick();
            await PageHelper.switchToDefaultContent();
        } else {
            StepLogger.subStep('Click on Date column');
            await SessionsPage.sessionColumns.date.hoverOverAndClick();
        }
    }

    static async clickOnStartedColumn() {
        if (await CommonPage.resourceOneIFrame.item.isPresent()) {
            await PageHelper.switchToiFrame(CommonPage.resourceOneIFrame);
            StepLogger.subStep('Click on Started column');
            await SessionsPage.sessionColumns.started.hoverOverAndClick();
            await PageHelper.switchToDefaultContent();
        } else {
            StepLogger.subStep('Click on Started column');
            await SessionsPage.sessionColumns.started.hoverOverAndClick();
        }
    }

    static async clickOnExpiresColumn() {
        if (await CommonPage.resourceOneIFrame.item.isPresent()) {
            await PageHelper.switchToiFrame(CommonPage.resourceOneIFrame);
            StepLogger.subStep('Click on Date column');
            await SessionsPage.sessionColumns.expires.hoverOverAndClick();
            await PageHelper.switchToDefaultContent();
        } else {
            StepLogger.subStep('Click on Date column');
            await SessionsPage.sessionColumns.expires.hoverOverAndClick();
        }
    }

    static async verifyColumSortedAsc(columnName: string) {
        if (await CommonPage.resourceOneIFrame.item.isPresent()) {
            await PageHelper.switchToiFrame(CommonPage.resourceOneIFrame);
            await WaitHelper.waitForElementToBeDisplayed(SessionsPage.getIconBesideColumn(columnName).asc.item);
            await SessionsPage.getIconBesideColumn(columnName).asc.scrollToElement();
            await SessionsPage.getIconBesideColumn(columnName).asc.verifyDisplayedStatus();
            await PageHelper.switchToDefaultContent();
        } else {
            await WaitHelper.waitForElementToBeDisplayed(SessionsPage.getIconBesideColumn(columnName).asc.item);
            await SessionsPage.getIconBesideColumn(columnName).asc.scrollToElement();
            await SessionsPage.getIconBesideColumn(columnName).asc.verifyDisplayedStatus();
        }
    }

    static async verifyColumSortedDesc(columnName: string) {
        if (await CommonPage.resourceOneIFrame.item.isPresent()) {
            await PageHelper.switchToiFrame(CommonPage.resourceOneIFrame);
            await SessionsPage.getIconBesideColumn(columnName).desc.verifyDisplayedStatus();
            await PageHelper.switchToDefaultContent();
        } else {
            await SessionsPage.getIconBesideColumn(columnName).desc.verifyDisplayedStatus();
        }
    }

    static async clickOnCloseButton() {
        StepLogger.subStep('Click on Close button');
        await SessionsPage.elements.closeButton.hoverOverAndClick();
        await PageHelper.switchToTab(Constants.number.zero);
    }

    static async verifyTabClosed(expectedNumberOfTabs: number) {
        const tabsCount = await PageHelper.getTabsCount();
        await ExpectationHelper.verifyValueEqualTo(expectedNumberOfTabs, tabsCount);
    }

    static async clickTwiceDateColumnToResetTheDefaultOrder() {
        await SessionsPageHelper.clickOnDateColumn();
        await SessionsPageHelper.clickOnDateColumn();
    }

    static async clickOnDescriptionColumn() {
        if (await CommonPage.resourceOneIFrame.item.isPresent()) {
            await PageHelper.switchToiFrame(CommonPage.resourceOneIFrame);
            StepLogger.subStep('Click on Description column');
            await SessionsPage.sessionColumns.description.hoverOverAndClick();
            await PageHelper.switchToDefaultContent();
        } else {
            StepLogger.subStep('Click on Description column');
            await SessionsPage.sessionColumns.description.hoverOverAndClick();
        }
    }

    static async clickOnStatusColumn() {
        if (await CommonPage.resourceOneIFrame.item.isPresent()) {
            await PageHelper.switchToiFrame(CommonPage.resourceOneIFrame);
            StepLogger.subStep('Click on Status column');
            await SessionsPage.sessionColumns.status.hoverOverAndClick();
            await PageHelper.switchToDefaultContent();
        } else {
            StepLogger.subStep('Click on Status column');
            await SessionsPage.sessionColumns.status.hoverOverAndClick();
        }
    }

    static async clickOnRefreshButton() {
        await PageHelper.switchToiFrame(CommonPage.resourceOneIFrame);
        StepLogger.subStep('Click on Refresh button');
        await SessionsPage.elements.refreshButton.hoverOverAndClick();
        await PageHelper.switchToDefaultContent();
    }

    static async clickOnLastAccessedColumn() {
        if (await CommonPage.resourceOneIFrame.item.isPresent()) {
            await PageHelper.switchToiFrame(CommonPage.resourceOneIFrame);
            StepLogger.subStep('Click on Last Accessed column');
            await SessionsPage.sessionColumns.lastAccessed.hoverOverAndClick();
            await PageHelper.switchToDefaultContent();
        } else {
            StepLogger.subStep('Click on Last Accessed column');
            await SessionsPage.sessionColumns.lastAccessed.hoverOverAndClick();
        }
    }

    static async clickOnIpColumn() {
        if (await CommonPage.resourceOneIFrame.item.isPresent()) {
            await PageHelper.switchToiFrame(CommonPage.resourceOneIFrame);
            StepLogger.subStep('Click on IP column');
            await SessionsPage.sessionColumns.ip.hoverOverAndClick();
            await PageHelper.switchToDefaultContent();
        } else {
            StepLogger.subStep('Click on IP column');
            await SessionsPage.sessionColumns.ip.hoverOverAndClick();
        }
    }

    static async filterByRole() {
        await PageHelper.switchToiFrame(CommonPage.resourceOneIFrame);
        await DropDownHelper.selectOptionByText(
            SessionsPage.elements.grouping,
            SessionsPageConstant.elementNames.role);
        await PageHelper.switchToDefaultContent();
    }
}

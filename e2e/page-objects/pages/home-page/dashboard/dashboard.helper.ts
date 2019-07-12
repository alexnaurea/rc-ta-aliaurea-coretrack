import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { WaitHelper } from '../../../../components/html/wait-helper';
import { Constants } from '../../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../../components/misc-utils/expectation-helper';
import { HomePage } from '../home-page.po';

import { DashboardPageConstant } from './dashboard.constants';
import { DashboardPage } from './dashboard.po';

export class DashboardPageHelper {

    static async clickArrowIcon() {
        await DashboardPage.buttons.arrowIcon.clickButton();
    }

    static async verifyDashboardList() {
        await DashboardPage.dashboard.menu.verifyDisplayedStatus();
    }

    static async clickAddDropdownButton() {
        await DashboardPage.dashboard.addBtn.scrollToElement();
        await DashboardPage.dashboard.addBtn.clickLink();
    }

    static async verifyNewDashboardRecord() {
        await DashboardPage.dashboard.newDashboard.verifyDisplayedStatus();
    }

    static async enterName(dashboard: string) {
        await DashboardPage.dashboard.newDashboardInput.sendKeysIfPresent(dashboard);
    }

    static async verifyEnteredName(dashboard: string) {
        await DashboardPage.dashboard.newDashboardInput.verifyTextBoxContains(dashboard);
    }

    static async addPipelineWidget() {
        StepLogger.subStep('Click Save dropdown, add widget and click pipeline');
        await DashboardPageHelper.clickSaveDropdownButton();
        await DashboardPageHelper.clickAddWidget();
        await DashboardPageHelper.clickPipeline();
    }

    static async clickSaveDropdownButton() {
        await DashboardPage.dashboard.saveBtn.clickButton();
    }

    static async verifyDashboardCreatedAndAddWidget(dashboard: string) {
        await DashboardPage.dashboard.dashboardName(dashboard).verifyDisplayedStatus();
        await DashboardPage.buttons.addWidget.verifyDisplayedStatus();
    }

    static async verifyDashboardDeleted(dashboard: string) {
        await DashboardPageHelper.clickArrowIcon();
        await DashboardPage.dashboard.dashboardDropdown(dashboard).verifyHiddenStatus();
        await DashboardPageHelper.clickArrowIcon();
    }

    static async openDashboard(dashboard: string, waitForSalesStage = false) {
        await this.clickArrowIcon();
        await DashboardPage.dashboard.dashboardDropdown(dashboard).clickButtonJs();
        if (waitForSalesStage) {
            await WaitHelper.waitForElementToBeDisplayed(HomePage.widgets.salesStage.item);
        }
    }

    static async createDashboard(id: string) {
        StepLogger.subStep('Click arrow, add dropdown and enter name');
        await DashboardPageHelper.clickArrowIcon();
        await DashboardPageHelper.clickAddDropdownButton();
        await DashboardPageHelper.enterName(id);
    }

    static async clickAddWidget() {
        await DashboardPage.buttons.addWidget.clickButton();
    }

    static async verifyAddWidgetMenu() {
        await DashboardPage.dashboard.addWidgetMenu.verifyDisplayedStatus();
    }

    static async verifyQueueSummary() {
        await DashboardPage.dashboard.queueSummary.verifyDisplayedStatus();
    }

    static async clickPipeline() {
        await DashboardPage.dashboard.pipeline.clickButton();
    }

    static async clickIconNavigateRightAndGetText() {
        StepLogger.subStep('Click > and get the selected text and click > again');
        await DashboardPageHelper.clickIconNavigateRight();
        const selectedText = await DashboardPageHelper.getSelectedText();
        await DashboardPageHelper.clickIconNavigateRight();
        return selectedText;
    }

    static async clickIconNavigateRight() {
        await DashboardPage.dashboard.rightArrow.clickLink();
    }

    static async getAndDeselectDataRow() {
        const selectedText = await this.clickIconNavigateRightAndGetText();
        await this.clickIconNavigateLeft();
        await HomePage.getWidgetDataRow(selectedText).clickLink();
        return selectedText;
    }

    static async getSelectedText() {
        return DashboardPage.dashboard.selectedItem.getText();
    }

    static async verifyTextEqualToSelectedText(text: string) {
        await ExpectationHelper.verifyStringEqualTo(text, await DashboardPage.dashboard.selectedItem.getText());
    }

    static async verifyTextNotEqualToSelectedText(text: string) {
        await ExpectationHelper.verifyStringNotEqualTo(text, await DashboardPage.dashboard.selectedItem.getText());
    }

    static async clickIconNavigateLeft() {
        await DashboardPage.dashboard.leftArrow.clickLink();
    }

    static async clickQueueSummary() {
        await DashboardPage.dashboard.queueSummary.clickButton();
    }

    static async verifyQueueSummaryWidget() {
        await DashboardPage.dashboard.queueSummaryWidget.verifyDisplayedStatus();
    }

    static async verifyPipelineWidget() {
        await DashboardPage.dashboard.pipelineSummaryWidget.verifyDisplayedStatus();
    }

    static async clickRefreshButton() {
        await DashboardPage.dashboard.widgetRefresh.clickButtonJs();
    }

    static async verifyQueueWidgetColumns() {
        const { dashboard } = DashboardPage;

        await dashboard.queueColumn.verifyDisplayedStatus();
        await dashboard.itemsColumn.verifyDisplayedStatus();
    }

    static async deleteWidget() {
        const { dashboard } = DashboardPage;

        await dashboard.widgetWheel.clickButtonJs();
        await dashboard.delete.clickButtonJs();
        await dashboard.deleteWidget.clickButtonJs();
    }

    static async clickPlusIcon() {
        await DashboardPage.buttons.plusIcon.clickButtonJs();
    }

    static async verifyWidgetSections() {
        const { dashboard } = DashboardPage;

        await dashboard.activity.verifyDisplayedStatus();
        await dashboard.case.verifyDisplayedStatus();
        await dashboard.event.verifyDisplayedStatus();
        await dashboard.task.verifyDisplayedStatus();
    }

    static async clickRecord(type: string) {
        const item = DashboardPage.dashboard.record(type);
        await item.scrollToElement();
        const text = await item.getText();
        await item.clickButtonJs();
        return text;
    }

    static async verifySelectedActivity(text: string) {
        await PageHelper.switchToDefaultContentAndIFrame(DashboardPage.resourceOneIFrame);
        await DashboardPage.dashboard.activityDetails(text).verifyDisplayedStatus();
    }

    static async verifySelectedSectionRecords() {
        const count = await DashboardPage.dashboard.allRecords.item.count();
        await ExpectationHelper.verifyValueGraterThan(count, Constants.number.zero);
    }

    static async clickSettingsIcon() {
        await DashboardPage.dashboard.widgetWheel.clickButton();
    }

    static async verifySettingsDialog() {
        await DashboardPage.dashboard.settingsDialog.verifyDisplayedStatus();
        await this.verifySettingsDialogButtons();
    }

    static async verifySettingsParams() {
        StepLogger.subStep('Verify Date Range parameter displayed');
        await DashboardPage.getSettingParam(DashboardPageConstant.elementNames.dateRange).verifyDisplayedStatus();
        StepLogger.subStep('Verify branch parameter displayed');
        await DashboardPage.getSettingParam(DashboardPageConstant.elementNames.branch).verifyDisplayedStatus();
        StepLogger.subStep('Verify scope parameter displayed');
        await DashboardPage.getSettingParam(DashboardPageConstant.elementNames.scope).verifyDisplayedStatus();
    }

    static async verifySettingsDialogButtons() {
        const { dashboard } = DashboardPage;

        await dashboard.delete.verifyDisplayedStatus();
        await dashboard.okBtn.verifyDisplayedStatus();
    }

    static async clickOkButton() {
        await DashboardPage.dashboard.okBtn.clickButton();
    }

    static async clickCloseButton() {
        await DashboardPage.dashboard.closeBtn.clickLink();
    }

    static async verifySettingsDialogClosedAndActionPage() {
        await DashboardPage.dashboard.settingsDialog.verifyHiddenStatus();
        await this.verifyQueueSummaryWidget();
    }

    static async clickDeleteButton() {
        await DashboardPage.dashboard.delete.clickButtonJs();
    }

    static async verifyDeleteThisWidget() {
        await DashboardPage.dashboard.deleteWidget.verifyDisplayedStatus();
    }

    static async clickDeleteThisWidget() {
        await DashboardPage.dashboard.deleteWidget.clickButtonJs();
    }

    static async verifySelectedSection(text: string) {
        await PageHelper.switchToDefaultContentAndIFrame(DashboardPage.resourceOneIFrame);
        const current = await DashboardPage.dashboard.sectionSelected.getSelectedOptionText();
        await ExpectationHelper.verifyStringValueContain(current, text);
    }

    static async clickCollapseActivity() {
        await DashboardPage.dashboard.collapseSection(DashboardPageConstant.elementNames.activity).clickButton();
    }

    static async verifyRecordHidden() {
        await DashboardPage.dashboard
            .record(DashboardPageConstant.elementNames.activity)
            .verifyHiddenStatus();
    }

    static async verifyRecordDisplay() {
        await DashboardPage.dashboard
            .record(DashboardPageConstant.elementNames.activity)
            .verifyDisplayedStatus();
    }
}

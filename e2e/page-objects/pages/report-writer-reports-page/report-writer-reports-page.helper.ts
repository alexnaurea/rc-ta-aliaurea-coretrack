import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { DfElement } from '../../../components/misc-utils/df-elements-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { ReferralSourcesPage } from '../administration/configuration/referral-sources/referral-sources.po';
import { CommonPageHelper } from '../common/common-page.helper';
import { HomePage1Helper } from '../home-page/home-page1.helper';

import { ReportWriterReportsConstant } from './report-writer-reports-page.constants';
import { ReportWriterReportsPage } from './report-writer-reports-page.po';

const { elementNames: eNames } = ReportWriterReportsConstant;

const aNames = ReportWriterReportsConstant.attributes.name;

export class ReportWriterReportsPageHelper {

    /**
     * Verify 'Report Writer Reports' page is displayed
     */
    static async verifyReportWriterReportsPageIsDisplayed() {
        await ReportWriterReportsPage.header.title.verifyContainsText(eNames.reportWriterReports);
    }

    static async clickOnFirstEdit() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        await ReportWriterReportsPage.elements.firstEdit.clickLink();
    }

    static async clickOnNThEdit(index: number) {
        await ReportWriterReportsPage.getEditIcon(index).clickLink();
    }

    static async clickOnSharing() {
        await ReportWriterReportsPage.elements.sharing.clickLink();
    }

    static async verifySharingTab() {
        await ReportWriterReportsPage.elements.sharing.verifyDisplayedStatus();
    }

    static async clickOnConditionals() {
        await ReportWriterReportsPage.elements.conditionals.clickLink();
    }

    static async verifyConditionalsSelectedDisplayed() {
        await ReportWriterReportsPage.elements.conditionalsSelected.verifyDisplayedStatus();
    }

    static async clickOnCreateAndEdit() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        await ReportWriterReportsPage.elements.createAndEdit.clickLink();
    }

    static async verifyGeneralTabDisplayed() {
        await ReportWriterReportsPage.elements.general.verifyDisplayedStatus();
    }

    static async verifySharingSelectedDisplayed() {
        await ReportWriterReportsPage.elements.sharingSelected.verifyDisplayedStatus();
    }

    static async clickOnPreviewbutton() {
        await ReportWriterReportsPage.elements.preview.clickLink();
    }

    static async verifyPreviewbutton() {
        await ReportWriterReportsPage.elements.preview.verifyDisplayedStatus();
    }

    static async verifyUiType() {
        await ReportWriterReportsPage.elements.uiType.verifyDisplayedStatus();
    }

    static async verifyUiTypeOptions() {
        StepLogger.subVerification('Dropdown should be displayed');
        await ReportWriterReportsPage.elements.dropDown.verifyDisplayedStatus();
        StepLogger.subVerification('Checkbox should be displayed');
        await ReportWriterReportsPage.elements.checkboxes.verifyDisplayedStatus();
    }

    static async clickuiTypeDropDown() {
        await ReportWriterReportsPage.elements.uiTypeDropDown.clickLink();
    }

    static async clickOnRun() {
        await CommonPageHelper.switchToWindowPopup(1);
        await ReportWriterReportsPage.elements.runReport.clickLink();
    }

    static async clickOnAddConditionals() {
        StepLogger.subStep('Verify if first item has Add Conditionals button and click Add');
        if ( await ReportWriterReportsPage.elements.addConditionals.isElementDisplayed()) {
            await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
            await ReportWriterReportsPage.elements.addConditionals.clickLink();
        } else {
            StepLogger.subStep('Verify if second item has Add Conditionals button and click Add');
            await this.clickOnCreateAndEdit();
            await this.clickOnNThEdit(2);
            await ReportWriterReportsPage.elements.conditionals.clickLink();
            await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
            await ReportWriterReportsPage.elements.addConditionals.clickLink();
        }
    }

    static async verifyEditConditionalsFormDisplayed() {
        await ReportWriterReportsPage.elements.editConditionals.verifyDisplayedStatus();
    }

    static async verifyCreateAndEditFormDisplayed() {
        await ReportWriterReportsPage.elements.createAndEditForm.verifyDisplayedStatus();
    }

    static async verifyRunAndCloseDisplayed() {
        await CommonPageHelper.switchToWindowPopup(1);
        StepLogger.subVerification('"Pop up should open with following buttons:' +
            'Run This Report' +
            'Close"');
        await ReportWriterReportsPage.elements.runReport.verifyDisplayedStatus();
        await ReportWriterReportsPage.elements.close.verifyDisplayedStatus();
    }

    static async clickRunReport() {
        await ReportWriterReportsPage.elements.runReport.clickButton();
    }

    static async verifyReportAppear() {
        await ReportWriterReportsPage.elements.closeReport.verifyDisplayedStatus();
    }

    static async clickRefresh() {
        await ReportWriterReportsPage.elements.refresh.clickButton();
    }

    static async verifyReportGenerate() {
        const generatingReport = ReportWriterReportsConstant.attributes.name.generatingReport;
        await ReportWriterReportsPage.getSpanText(generatingReport).verifyHiddenStatus();
    }

    static async verifySharingTabOpens() {
        StepLogger.subVerification('User should be displayed');
        await ReportWriterReportsPage.getSpanText(aNames.users).verifyDisplayedStatus();
        StepLogger.subVerification('Group should be displayed');
        await ReportWriterReportsPage.getSpanText(aNames.groups).verifyDisplayedStatus();
    }

    static async selectAllCheckBoxGroup() {
        // Before check this checkbox uncheck is required
        await ReportWriterReportsPage.elements.selectGroupCheckboxAll.markCheckbox(false);
        await ReportWriterReportsPage.elements.selectGroupCheckboxAll.markCheckbox(true);
    }

    static async selectCheckBoxGroup() {
        // Before check this checkbox uncheck is required
        await ReportWriterReportsPage.elements.selectGroupCheckbox.markCheckbox(false);
        await ReportWriterReportsPage.elements.selectGroupCheckbox.markCheckbox(true);
    }

    static async selectEditCheckBoxGroup() {
        // Before check this checkbox uncheck is required
        await ReportWriterReportsPage.elements.editCheckbox.markCheckbox(false);
        await ReportWriterReportsPage.elements.editCheckbox.markCheckbox(true);
    }

    static async selectExportCheckBoxGroup() {
        // Before check this checkbox uncheck is required
        await ReportWriterReportsPage.elements.exportCheckbox.markCheckbox(false);
        await ReportWriterReportsPage.elements.exportCheckbox.markCheckbox(true);
    }

    static async selectExportAllCheckBoxGroup() {
        // Before check this checkbox uncheck is required
        await ReportWriterReportsPage.elements.exportCheckboxAll.markCheckbox(false);
        await ReportWriterReportsPage.elements.exportCheckboxAll.markCheckbox(true);
    }

    static async selectEditAllCheckBoxGroup() {
        // Before check this checkbox uncheck is required
        await ReportWriterReportsPage.elements.editCheckboxAll.markCheckbox(false);
        await ReportWriterReportsPage.elements.editCheckboxAll.markCheckbox(true);
    }

    static async deselectExportCheckBoxGroup() {
        await ReportWriterReportsPage.elements.exportCheckbox.markCheckbox(false);
    }

    static async deselectEditCheckBoxGroup() {
        await ReportWriterReportsPage.elements.editCheckbox.markCheckbox(false);
    }

    static async verifySavedMessage() {
        await ReportWriterReportsPage.getSpanText(aNames.sharingSaved).verifyDisplayedStatus();
    }

    static async verifyCheckboxChecked(dElement: DfElement) {
        await dElement.verifyCheckboxChecked();
    }

    static async verifyCheckboxNotChecked(dElement: DfElement) {
        await dElement.verifyCheckboxNotChecked();
    }

    static async verifyExportEditSelected() {
        StepLogger.subVerification('Verify Edit checkbox is checked');
        await ReportWriterReportsPageHelper.verifyCheckboxChecked(ReportWriterReportsPage.elements.editCheckbox);
        StepLogger.subVerification('Verify Export checkbox is checked');
        await ReportWriterReportsPageHelper.verifyCheckboxChecked(ReportWriterReportsPage.elements.exportCheckbox);
        StepLogger.subVerification('Verify save message is appearing');
        await ReportWriterReportsPageHelper.verifySavedMessage();
    }

    static async verifyExportEditNotSelected() {
        StepLogger.subVerification('Verify Edit checkbox is not checked');
        await ReportWriterReportsPageHelper.verifyCheckboxNotChecked(ReportWriterReportsPage.elements.editCheckbox);
        StepLogger.subVerification('Verify Export checkbox is not checked');
        await ReportWriterReportsPageHelper.verifyCheckboxNotChecked(ReportWriterReportsPage.elements.exportCheckbox);
        StepLogger.subVerification('Verify save message is appearing');
        await ReportWriterReportsPageHelper.verifySavedMessage();
    }

    static async verifyColumnReporterPage() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        StepLogger.subVerification(' Action  should be displayed');
        await ReportWriterReportsPage.getCoulumn(eNames.action).verifyDisplayedStatus();
        StepLogger.subVerification(' Name  should be displayed');
        await ReportWriterReportsPage.getCoulumn(eNames.name).verifyDisplayedStatus();
        StepLogger.subVerification(' Type  should be displayed');
        await ReportWriterReportsPage.getCoulumn(eNames.type).verifyDisplayedStatus();
        StepLogger.subVerification(' Last Change  should be displayed');
        await ReportWriterReportsPage.getCoulumn(eNames.lastchange).verifyDisplayedStatus();
        StepLogger.subVerification(' Description  should be displayed');
        await ReportWriterReportsPage.getCoulumn(eNames.description).verifyDisplayedStatus();
    }

    static async verifyResource() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        await ReportWriterReportsPage.getDivText(eNames.resources).verifyDisplayedStatus();
    }

    static async verifyReport() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        await ReportWriterReportsPage.getDivText(eNames.reports).verifyDisplayedStatus();
    }

    static async verifySchema() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        await ReportWriterReportsPage.getDivText(eNames.schema).verifyDisplayedStatus();
    }

    static async verifyLinkUnderReport() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        await ReportWriterReportsPage.getDivText(eNames.createEdit).verifyDisplayedStatus();
    }

    static async verifyLinkUnderResource() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        StepLogger.subVerification(' Images  should be displayed');
        await ReportWriterReportsPage.getDivText(eNames.images).verifyDisplayedStatus();
        StepLogger.subVerification(' Yearly Quarters  should be displayed');
        await ReportWriterReportsPage.getDivText(eNames.yearlyquarters).verifyDisplayedStatus();
    }

    static async clickNewReport() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        await ReportWriterReportsPage.elements.newReport.clickButton();
    }

    static async verifyReportName() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        await ReportWriterReportsPage.elements.reportName.verifyDisplayedStatus();
    }

    static async verifyButtonsUnderActions() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        StepLogger.subVerification(' edit this report  should be displayed');
        await ReportWriterReportsPage.getButtonUnderAction(eNames.editThisReport).verifyDisplayedStatus();
        StepLogger.subVerification(' Copy This report  should be displayed');
        await ReportWriterReportsPage.getButtonInputUnderAction(eNames.copyThisReport).verifyDisplayedStatus();
        StepLogger.subVerification(' Delete This report  should be displayed');
        await ReportWriterReportsPage.getButtonInputUnderAction(eNames.deleteThisReport).verifyDisplayedStatus();
        StepLogger.subVerification(' Lock this report  should be displayed');
        await ReportWriterReportsPage.getButtonInputUnderAction(eNames.lockThisReport).verifyDisplayedStatus();
        StepLogger.subVerification(' Run this report.  should be displayed');
        await ReportWriterReportsPage.getButtonUnderAction(eNames.runThisReport).verifyDisplayedStatus();
    }

    static async verifyReportsLinks() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        StepLogger.subVerification('New report  should be displayed');
        await ReportWriterReportsPage.elements.newReport.verifyDisplayedStatus();
        StepLogger.subVerification('New Union Report  should be displayed');
        await ReportWriterReportsPage.elements.newUnionReport.verifyDisplayedStatus();
    }

    static async verifyLinkUnderSchema() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        StepLogger.subVerification(' Connections  should be displayed');
        await ReportWriterReportsPage.getDivText(eNames.connections).verifyDisplayedStatus();
        StepLogger.subVerification(' Create  should be displayed');
        await ReportWriterReportsPage.getDivText(eNames.create).verifyDisplayedStatus();
        StepLogger.subVerification(' Edit  should be displayed');
        await ReportWriterReportsPage.getDivText(eNames.edit).verifyDisplayedStatus();
    }

    static async verifyEditPage() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        await ReportWriterReportsPage.getHeader(eNames.reportCriteria).verifyDisplayedStatus();
    }

    static async verifyTabsOnEdit() {
        StepLogger.subVerification(' General  should be displayed');
        await ReportWriterReportsPage.elements.general.verifyDisplayedStatus();
        StepLogger.subVerification(' Sharing  should be displayed');
        await ReportWriterReportsPage.elements.sharing.verifyDisplayedStatus();
        StepLogger.subVerification(' Column Selection  should be displayed');
        await ReportWriterReportsPage.elements.columnSelection.verifyDisplayedStatus();
        StepLogger.subVerification(' Table Relationships  should be displayed');
        await ReportWriterReportsPage.elements.tableRelationships.verifyDisplayedStatus();
        StepLogger.subVerification(' Conditionals  should be displayed');
        await ReportWriterReportsPage.elements.conditionals.verifyDisplayedStatus();
        StepLogger.subVerification(' Filtration  should be displayed');
        await ReportWriterReportsPage.elements.filtration.verifyDisplayedStatus();
        StepLogger.subVerification(' Groups / Summaries  should be displayed');
        await ReportWriterReportsPage.elements.groupsSummaries.verifyDisplayedStatus();
    }

    static async enterValueInput(text: string) {
        await ReportWriterReportsPage.elements.valueInput.sendKeys(text);
    }

    static async verifyEnteredValueInput(text: string) {
        await ReportWriterReportsPage.elements.valueInput.verifyAttributeContains(HtmlHelper.attributes.value, text);
    }

    static async verifyValueInput() {
        await ReportWriterReportsPage.elements.valueInput.verifyDisplayedStatus();
    }

    static async enterLabelInput(text: string) {
        await ReportWriterReportsPage.elements.labelInput.sendKeys(text);
    }

    static async verifyEnteredLabelInput(text: string) {
        await ReportWriterReportsPage.elements.labelInput.verifyAttributeContains(HtmlHelper.attributes.value, text);
    }

    static async clickOkButton() {
        await ReportWriterReportsPage.elements.okCondition.clickButton();
    }

    static async verifyConditionCreated(text: string) {
        await ReportWriterReportsPage.getTdText(text).verifyDisplayedStatus();
    }

    static async verifyCondtionActions() {
        StepLogger.subVerification(' Edit this conditional  should be displayed');
        await ReportWriterReportsPage.elements.editThisConditional.verifyDisplayedStatus();
        StepLogger.subVerification(' Make a copy below  should be displayed');
        await ReportWriterReportsPage.elements.makeCopy.verifyDisplayedStatus();
        StepLogger.subVerification(' remove  should be displayed');
        await ReportWriterReportsPage.elements.remove.verifyDisplayedStatus();
    }

    static async clickAddButtonConditional() {
        await ReportWriterReportsPage.elements.add.clickButton();
    }

    static async verifyValueEntered(text: string) {
        await ReportWriterReportsPage.getSpanText(text).verifyDisplayedStatus();
    }

    static async clickArrowCollapse() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        await ReportWriterReportsPage.arrowCollapse.clickButton();
    }

    static async verifyArrowCollapse() {
        await ReportWriterReportsPage.arrowCollapse.verifyDisplayedStatus();
    }

    static async clickArrowExpand() {
        await ReportWriterReportsPage.arrowExpand.clickButton();
    }

    static async verifyArrowExpand() {
        await ReportWriterReportsPage.arrowExpand.verifyDisplayedStatus();
    }

    static async clickUnionReport() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        await ReportWriterReportsPage.elements.newUnionReport.clickButton();
    }

    static async verifyPermissionLink() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        await ReportWriterReportsPage.getDivText(eNames.permissions).verifyDisplayedStatus();
    }

    static async verifyUsersLink() {
        await ReportWriterReportsPage.getDivText(eNames.users).verifyDisplayedStatus();
    }

    static async verifyGroupLink() {
        await ReportWriterReportsPage.getDivText(eNames.groups).verifyDisplayedStatus();
    }

    static async verifyImportExportLink() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        await ReportWriterReportsPage.getDivText(eNames.importExport).verifyDisplayedStatus();
    }

    static async verifyImportLink() {
        await ReportWriterReportsPage.getDivText(eNames.import).verifyDisplayedStatus();
    }

    static async verifyExportLink() {
        await ReportWriterReportsPage.getDivText(eNames.export).verifyDisplayedStatus();
    }

    static async clickRemoveSelected() {
        await ReportWriterReportsPage.elements.removeSelected.clickButton();
    }

    static async verifyRemoveSelected() {
        await ReportWriterReportsPage.elements.removeSelected.verifyDisplayedStatus();
    }

    static async verifyConditionSelected() {
        await ReportWriterReportsPage.elements.selectedConditional.verifyDisplayedStatus();
    }

    static async clickConditionEntered(text: string) {
        await ReportWriterReportsPage.getSpanText(text).clickLink();
    }

    static async verifyValueRemoved(text: string) {
        await ReportWriterReportsPage.getSpanText(text).verifyHiddenStatus();
    }

    static async createConditionalFlow(value: string, nextValue: string) {
        await HomePage1Helper.navigateToReportWriterPage();
        await ReportWriterReportsPageHelper.clickOnCreateAndEdit();
        await ReportWriterReportsPageHelper.clickOnFirstEdit();
        await ReportWriterReportsPageHelper.clickOnConditionals();
        await ReportWriterReportsPageHelper.clickOnAddConditionals();
        await ReportWriterReportsPageHelper.enterValueInput(value);
        await ReportWriterReportsPageHelper.clickAddButtonConditional();
        await ReportWriterReportsPageHelper.verifyValueEntered(value);
        await ReportWriterReportsPageHelper.enterValueInput(nextValue);
        await ReportWriterReportsPageHelper.clickAddButtonConditional();
    }

    static async createConditionalOkFlow(value: string, label: string) {
        await HomePage1Helper.navigateToReportWriterPage();
        await ReportWriterReportsPageHelper.clickOnCreateAndEdit();
        await ReportWriterReportsPageHelper.clickOnFirstEdit();
        await ReportWriterReportsPageHelper.clickOnConditionals();
        await ReportWriterReportsPageHelper.clickOnAddConditionals();
        await ReportWriterReportsPageHelper.enterValueInput(value);
        await ReportWriterReportsPageHelper.clickAddButtonConditional();
        await this.enterLabelInput(label);
        await ReportWriterReportsPageHelper.clickOkButton();
    }

    static async clickTopArrow() {
        await ReportWriterReportsPage.elements.topArrow.clickFirstButton();
    }

    static async clickLastValue() {
        await ReportWriterReportsPage.elements.valueEntered.clickNthButton(1);
    }

    static async verifyValueShiftedTop(expectedValue: string) {
        await ExpectationHelper.verifyText(ReportWriterReportsPage.elements.topValue, expectedValue);
    }

    static async verifyTableLoaded() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.reportOneIFrame);
        await ReportWriterReportsPage.elements.sheetPage.verifyDisplayedStatus();
    }

    static async clickCloseReport() {
        await CommonPageHelper.closeWindowPopupAndSwitchToParentWindow();
    }

    static async verifyWindowClose() {
        await ReportWriterReportsPage.elements.sheetPage.verifyHiddenStatus();
    }

    static async verifyDisplayedStatus() {
        await ReportWriterReportsPage.elements.selectedConditional.verifyDisplayedStatus();
    }
}

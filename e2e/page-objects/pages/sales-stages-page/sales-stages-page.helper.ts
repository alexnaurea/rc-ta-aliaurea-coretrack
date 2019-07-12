import { StepLogger } from '../../../../core/logger/step-logger';
import { VerboseLogger } from '../../../../core/logger/verbose-logger';
import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { ElementHelper } from '../../../components/html/element-helper';
import { PageHelperExtension } from '../../../components/html/page-helper-extended';
import { WaitHelper } from '../../../components/html/wait-helper';
import { EndpointHelper } from '../../../components/misc-utils/endpoint-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { BasePageHelper } from '../base-page.helper';
import { CommonPage } from '../common/common.po';

import { SalesStagesPageConstant } from './sales-stages-page.constants';
import { SalesStagesPage } from './sales-stages-page.po';

const { values } = SalesStagesPageConstant;

export class SalesStagePageHelper extends BasePageHelper {

    /**
     * Double Click the First Sales Stage Entry in the table
     */
    static async doubleClickFirstSalesStageEntry() {
        StepLogger.subStep('Double Click On First Sales Stage Entry');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await ElementHelper.actionMouseMove(SalesStagesPage.firstSalesStageEntry);
            await ElementHelper.actionDoubleClick(SalesStagesPage.firstSalesStageEntry.item,
                SalesStagesPage.firstSalesStageEntry.name)
                .catch((e: Error) => VerboseLogger.log(`Error during double click: ${e}`));
        });
    }

    /**
     * Verify Edit Sales Stage Window Displayed
     */
    static async verifyEditSalesStageWindowDisplayed() {
        StepLogger.subVerification('Verify Edit Sales Stage Window is displayed.');
        await SalesStagesPage.editDialogTitle.verifyDisplayedStatus();
    }

    /**
     * Select Status Value form Dropdown: Active/ Inactive
     * @param statusToBeSelected
     */
    static async selectStatus(statusToBeSelected: string) {
        StepLogger.subStep(`Select value ${statusToBeSelected} for "Status" from Drop Down`);
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await WaitHelper.waitForElementToBeDisplayed(SalesStagesPage.statusDropdown.item);
            await DropDownHelper.selectOptionByText(SalesStagesPage.statusDropdown, statusToBeSelected);
        });
    }

    /**
     * Verify Status Value selected
     * @param expectedValue
     */
    static async verifyStatusSelected(expectedValue: string) {
        StepLogger.subVerification(`Verify Selected Value for "Status" is ${expectedValue}`);
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            const selected = await DropDownHelper.getTheSelectedOptionText(SalesStagesPage.statusDropdown);
            await ExpectationHelper.verifyStringEqualTo(selected, expectedValue);
        });
    }

    /**
     * Verify Sales Stage Saved
     */
    static async verifySalesStageSaved(statusSaved: string) {
        await this.verifySalesStageDialogClosed();
        await this.verifySalesStageStatusSaved(statusSaved);
    }

    /**
     * Verify Sales Stage Dialog Closed
     */
    static async verifySalesStageDialogClosed() {
        StepLogger.subVerification('Verify Sales Stage Dialog closed');
        await SalesStagesPage.editDialogTitle.verifyHiddenStatus();
    }

    /**
     * Verify Sales Status status save as Active/ Inactive
     * @param expectedValue Active/Inactive
     */
    static async verifySalesStageStatusSaved(expectedValue: string) {
        StepLogger.subVerification(`Verify Sales Status status save as ${expectedValue}`);
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            const expectedActiveValue = expectedValue !== values.statusValues.inactive;
            await ExpectationHelper.verifyContainsText(SalesStagesPage.firstSalesStageEntryStatus,
                expectedActiveValue.toString());
        });
    }

    /**
     * Click on Add Sales Stage Button displayed on the page
     */
    static async clickAddSalesStageButton() {
        StepLogger.subStep('Click on Add Sales Stage Button');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await SalesStagesPage.addSalesStage.clickButton();
        });
    }

    /**
     * Verify New Sales Stage Window is displayed
     */
    static async verifyNewSalesStageWindowDisplayed() {
        StepLogger.subVerification('Verify New Sales Stage Window is displayed.');
        await SalesStagesPage.uiDialogTitle.verifyDisplayedStatus();
    }

    /**
     * Click Save Button on the dialog box
     */
    static async clickSalesStageSaveButton() {
        StepLogger.subVerification('Click Save button on dialog.');
        await PageHelperExtension.executeInIFrame([CommonPage.contentFrame], async () => {
            await SalesStagesPage.saveButton.clickButton();
        });
    }

    /**
     * Verify Manage Sales Stages page is displayed
     */
    static async verifyManageSalesStagesDisplayed() {
        StepLogger.subVerification('Manage Sales Stages Page should be displayed');
        await SalesStagesPage.pageTitle.verifyDisplayedStatus();
    }

    url(): string {
        return EndpointHelper.salesStage;
    }
}

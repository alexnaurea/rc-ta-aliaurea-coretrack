import { StepLogger } from '../../../../../../core/logger/step-logger';
import { VerboseLogger } from '../../../../../../core/logger/verbose-logger';
import { DropDownHelper } from '../../../../../components/html/dropdown-helper';
import { ElementHelper } from '../../../../../components/html/element-helper';
import { PageHelperExtension } from '../../../../../components/html/page-helper-extended';
import { ExpectationHelper } from '../../../../../components/misc-utils/expectation-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';
import { CommonPage } from '../../../common/common.po';
import { HomePageHelper } from '../../../home-page/home-page.helper';
import { HomePage1Helper } from '../../../home-page/home-page1.helper';

import { DistrictsPage } from './districts.po';

export class DistrictsHelper {

    static async verifyManageDistrictsPageDisplayed() {
        StepLogger.subVerification('Verify Manage Districts Page Displayed');
        await DistrictsPage.manageDistrictsPage.verifyDisplayedStatus();
    }

    static async verifyDistrictsPageItemsGrid() {
        const label = DistrictsPage.districtsPageItemsGrid;
        StepLogger.subVerification('Verify Districts Page Items Grid');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await label.district.verifyDisplayedStatus();
            await label.districtCode.verifyDisplayedStatus();
            await label.active.verifyDisplayedStatus();
        });
    }

    static async verifyButtons() {
        const label = DistrictsPage.buttons;
        StepLogger.subVerification('Verify Buttons');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await label.add.verifyDisplayedStatus();
            await label.refresh.verifyDisplayedStatus();
            await label.exportToExcel.verifyDisplayedStatus();
            await label.exportToWord.verifyDisplayedStatus();
        });
    }

    static async clickOnAddDistrict() {
        await StepLogger.subStep('Click On Add District');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await DistrictsPage.buttons.add.clickButton();
        });
    }

    static async verifyNewDistrictsScreen() {
        StepLogger.subVerification('Verify New District Screen');
        await DistrictsPage.newDistrictsScreen.verifyDisplayedStatus();
    }

    static async clickOnCancelButton() {
        StepLogger.subStep('Click On Cancel Button');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DistrictsPage.newDistrictsScreenProperties.cancel.clickButton();
        });
    }

    static async clickOnSaveButton() {
        StepLogger.subStep('Click On Save Button');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DistrictsPage.newDistrictsScreenProperties.save.clickButton();
        });
    }

    static async clickOnCloseButton() {
        StepLogger.subStep('Click On Close Button');
        await DistrictsPage.newDistrictsScreenProperties.close.clickButton();
    }

    static async verifyNewDistrictsScreenClosed() {
        StepLogger.subVerification('Verify New District Screen Closed');
        await DistrictsPage.newDistrictsScreen.verifyHiddenStatus();
    }

    static async enterCode(code: string) {
        StepLogger.subStep('Enter Code');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DistrictsPage.newDistrictsScreenProperties.code.sendKeys(code);
        });
    }

    static async verifyEnteredCode(code: string) {
        const value = HtmlHelper.attributes.value;
        StepLogger.subVerification('Verify Enterd Code');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ExpectationHelper.verifyAttributeContains(DistrictsPage.newDistrictsScreenProperties.code,
                value, code);
        });
    }

    static async enterName(name: string) {
        StepLogger.subStep('Enter Name');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DistrictsPage.newDistrictsScreenProperties.name.sendKeys(name);
        });
    }

    static async verifyEnteredName(name: string) {
        const value = HtmlHelper.attributes.value;
        StepLogger.subVerification('Verify Entered Name');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ExpectationHelper.verifyAttributeContains(DistrictsPage.newDistrictsScreenProperties.name,
                value, name);
        });
    }

    static async enterDescription(description: string) {
        StepLogger.subStep('Enter Description');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DistrictsPage.newDistrictsScreenProperties.description.sendKeys(description);
        });
    }

    static async verifyEnteredDescription(description: string) {
        const value = HtmlHelper.attributes.value;
        StepLogger.subVerification('Verify Entered Description');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ExpectationHelper.verifyAttributeContains(DistrictsPage.newDistrictsScreenProperties.description,
                value, description);
        });
    }

    static async selectAStatusFromDropDown(status: string) {
        StepLogger.subStep('Select a Status from Drop Down');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DropDownHelper.selectOptionByText(DistrictsPage.newDistrictsScreenProperties.status, status);
        });
    }

    static async verifyStatusSelected(status: string) {
        StepLogger.subVerification('Verify Status Selected');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DistrictsPage.statusSelected(status).verifyDisplayedStatus();
        });
    }

    static async verifyValidationErrorMessage(message: string) {
        StepLogger.subVerification('Verify Validation Error Message');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DistrictsPage.validationError(message).verifyDisplayedStatus();
        });
    }

    static async navigateToAddDistrictPage() {
        StepLogger.subStep('Navigate To Add District Page');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickOrganizationUnderAdministration();
        await HomePage1Helper.clickDistrictsUnderOrganization();
        await DistrictsHelper.clickOnAddDistrict();
    }

    static async navigateToEditDistrictPage() {
        StepLogger.subStep('Navigate To Edit District Page');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickOrganizationUnderAdministration();
        await HomePage1Helper.clickDistrictsUnderOrganization();
        await DistrictsHelper.clickOnEditDistrict();
    }

    static async clickOnSearchButton() {
        StepLogger.subStep('Click On Search Button');
        await DistrictsPage.buttons.searchButton.clickButton();
    }

    static async verifySearchBox() {
        StepLogger.subVerification('Verify Search Box');
        await DistrictsPage.buttons.searchBox.verifyDisplayedStatus();
    }

    static async clickOnEditDistrict() {
        StepLogger.subStep('Click On Edit District');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await DistrictsPage.buttons.editDistrict.clickButton();
        });
    }

    static async verifyEditDistrictScreen() {
        StepLogger.subVerification('Verify Edit District Screen');
        await DistrictsPage.newDistrictsScreen.verifyDisplayedStatus();
    }

    static async doubleClickOnDistrictEntry() {
        StepLogger.subStep('Double Click On District Entry');
        const firstRegionEntry = DistrictsPage.buttons.districtEntry(1);
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await ElementHelper.actionMouseMove(firstRegionEntry);
            await ElementHelper.actionDoubleClick(firstRegionEntry.item,
                firstRegionEntry.name)
                .catch((e: Error) => VerboseLogger.log(`Error during double click: ${e}`));
        });
    }

    static async clickOnStatusDropDown() {
        StepLogger.subStep('Click On Status Drop Down');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DistrictsPage.newDistrictsScreenProperties.status.clickLink();
        });
    }

    static async clickOnDistrictDropDown() {
        StepLogger.subStep('Click On District Drop Down');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DistrictsPage.newDistrictsScreenProperties.description.clickLinkJs();
        });
    }
}

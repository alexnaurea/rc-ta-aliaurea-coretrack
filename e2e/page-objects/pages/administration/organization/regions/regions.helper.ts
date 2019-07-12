import { StepLogger } from '../../../../../../core/logger/step-logger';
import { VerboseLogger } from '../../../../../../core/logger/verbose-logger';
import { DropDownHelper } from '../../../../../components/html/dropdown-helper';
import { ElementHelper } from '../../../../../components/html/element-helper';
import { PageHelperExtension } from '../../../../../components/html/page-helper-extended';
import { CommonPage } from '../../../common/common.po';
import { HomePageHelper } from '../../../home-page/home-page.helper';
import { HomePage1Helper } from '../../../home-page/home-page1.helper';

import { RegionsPage } from './regions.po';

export class RegionsHelper {

    static async verifyManageRegionsPageDisplayed() {
        StepLogger.subVerification('Verify Manage Regions Page Displayed');
        await RegionsPage.manageRegionsPage.verifyDisplayedStatus();
    }

    static async verifyRegionsPageItemsGrid() {
        StepLogger.subVerification('Verify Regions Page Items Grid');
        const label = RegionsPage.regionsPageItemGrid;
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await label.active.verifyDisplayedStatus();
            await label.markets.verifyDisplayedStatus();
            await label.region.verifyDisplayedStatus();
            await label.regionCode.verifyDisplayedStatus();
        });
    }

    static async verifyButtons() {
        StepLogger.subStep('Verify Buttons');
        const label = RegionsPage.buttons;
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await label.addRegion.verifyDisplayedStatus();
            await label.refresh.verifyDisplayedStatus();
            await label.groupingDropDownList.verifyDisplayedStatus();
            await label.exportToExcel.verifyDisplayedStatus();
            await label.exportToWord.verifyDisplayedStatus();
        });
    }

    static async clickOnAddRegion() {
        StepLogger.subStep('Click On Add Region');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await RegionsPage.buttons.addRegion.clickButton();
        });
    }

    static async verifyNewRegionScreen() {
        StepLogger.subVerification('Verify New Region Screen');
        await RegionsPage.newRegionScreen.verifyDisplayedStatus();
    }

    static async verifyNewRegionScreenClosed() {
        StepLogger.subVerification('Verify New Region Screen Closed');
        await RegionsPage.newRegionScreen.verifyHiddenStatus();
    }

    static async verifyNewRegionScreenProperties() {
        const label = RegionsPage.newRegionScreenProperties;
        StepLogger.subVerification('Verify New Region Screen Prperties');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await label.code.verifyDisplayedStatus();
            await label.name.verifyDisplayedStatus();
            await label.district.verifyDisplayedStatus();
            await label.status.verifyDisplayedStatus();
        });
    }

    static async enterCode(code: string) {
        StepLogger.subStep('Enter Code');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RegionsPage.newRegionScreenProperties.code.sendKeys(code);
        });
    }

    static async verifyEnteredCode(code: string) {
        StepLogger.subVerification('Verify Entered Code');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RegionsPage.newRegionScreenProperties.code.verifyTextEntered(code);
        });
    }

    static async enterName(name: string) {
        StepLogger.subStep('Enter Name');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RegionsPage.newRegionScreenProperties.name.sendKeys(name);
        });
    }

    static async verifyEnteredName(name: string) {
        StepLogger.subVerification('Verify Entered Name');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RegionsPage.newRegionScreenProperties.name.verifyTextEntered(name);
        });
    }

    static async enterDescription(description: string) {
        StepLogger.subStep('Enter Description');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RegionsPage.newRegionScreenProperties.description.sendKeys(description);
        });
    }

    static async verifyEnteredDescription(description: string) {
        StepLogger.subVerification('Verify Entered Description');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RegionsPage.newRegionScreenProperties.description.verifyTextEntered(description);
        });
    }

    static async selectAStatusFromDropDown(status: string) {
        StepLogger.subStep('Select a Status from Drop Down');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DropDownHelper.selectOptionByText(RegionsPage.newRegionScreenProperties.status, status);
        });
    }

    static async verifyStatusSelected(status: string) {
        StepLogger.subVerification('Verify Status Selected');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RegionsPage.statusSelected(status).verifyDisplayedStatus();
        });
    }

    static async selectADistrictFromDropDown(district: string) {
        StepLogger.subStep('Select a district from Drop Down');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DropDownHelper.selectOptionByText(RegionsPage.newRegionScreenProperties.district, district);
        });
    }

    static async verifyDistrictSelected(district: string) {
        StepLogger.subVerification('Verify district Selected');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RegionsPage.districtSelected(district).verifyDisplayedStatus();
        });
    }

    static async clickOnSave() {
        StepLogger.subStep('Click On Save');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RegionsPage.newRegionScreenProperties.save.clickButton();
        });
    }

    static async clickOnCancel() {
        StepLogger.subStep('Click On Cancel');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RegionsPage.newRegionScreenProperties.cancel.clickButton();
        });
    }

    static async verifyErrorMessage(message: string) {
        StepLogger.subVerification('Verify Error Message');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RegionsPage.validationError(message).verifyDisplayedStatus();
        });
    }

    static async navigateToNewRegionsPage() {
        StepLogger.subStep('Navigate To New Regions Page');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickOrganizationUnderAdministration();
        await HomePage1Helper.clickRegionsUnderOrganization();
        await RegionsHelper.clickOnAddRegion();
    }

    static async navigateToEditRegionWindow() {
        StepLogger.subStep('Navigate To Edit Region Window');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickOrganizationUnderAdministration();
        await HomePage1Helper.clickRegionsUnderOrganization();
        await this.clickOnEditRegion();
    }

    static async clickOnEditRegion() {
        StepLogger.subStep('Click on Edit Region');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await RegionsPage.buttons.editRegion.clickButton();
        });
    }

    static async verifyEditRegionScreen() {
        StepLogger.subVerification('Verify Edit Region Screen');
        await RegionsPage.newRegionScreen.verifyDisplayedStatus();
    }

    static async clickCloseIconOnScreen() {
        StepLogger.subStep('Click Close Icon On Screen');
        await RegionsPage.newRegionScreenProperties.close.clickButton();
    }

    static async clickOnStatusDropDown() {
        StepLogger.subStep('Click On Status Drop Down');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RegionsPage.newRegionScreenProperties.status.clickButton();
        });
    }

    static async clickOnDistrictDropDown() {
        StepLogger.subStep('Click On District Drop Down');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await RegionsPage.newRegionScreenProperties.district.clickButton();
        });
    }

    static async doubleClickOnRegionEntry() {
        StepLogger.subStep('Double Click On Region Entry');
        const firstRegionEntry = RegionsPage.buttons.regionEntry(1);
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await ElementHelper.actionMouseMove(firstRegionEntry);
            await ElementHelper.actionDoubleClick(firstRegionEntry.item,
                firstRegionEntry.name)
                .catch((e: Error) => VerboseLogger.log(`Error during double click: ${e}`));
        });
    }
}

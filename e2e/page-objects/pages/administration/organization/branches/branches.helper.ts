import { StepLogger } from '../../../../../../core/logger/step-logger';
import { VerboseLogger } from '../../../../../../core/logger/verbose-logger';
import { DropDownHelper } from '../../../../../components/html/dropdown-helper';
import { ElementHelper } from '../../../../../components/html/element-helper';
import { PageHelperExtension } from '../../../../../components/html/page-helper-extended';
import { ExpectationHelper } from '../../../../../components/misc-utils/expectation-helper';
import { CommonPage } from '../../../common/common.po';
import { HomePageHelper } from '../../../home-page/home-page.helper';
import { HomePage1Helper } from '../../../home-page/home-page1.helper';

import { BranchesPage } from './branches.po';

export class BranchesHelper {

    static async verifyManageBranchesPageDisplayed() {
        StepLogger.subVerification('Verify Manage Branches Page Displayed');
        await BranchesPage.manageBranchesPage.verifyDisplayedStatus();
    }

    static async verifyBranchesPageItemsGrid() {
        const label = BranchesPage.branchesPageItemsGrid;
        StepLogger.subVerification('Verify Branches Page Items Grid');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await label.active.verifyDisplayedStatus();
            await label.branch.verifyDisplayedStatus();
            await label.branchCode.verifyDisplayedStatus();
            await label.city.verifyDisplayedStatus();
            await label.phone.verifyDisplayedStatus();
            await label.region.verifyDisplayedStatus();
            await label.state.verifyDisplayedStatus();
        });
    }

    static async verifyButtons() {
        StepLogger.subStep('Verify Buttons');
        const label = BranchesPage.buttons;
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await label.addBranch.verifyDisplayedStatus();
            await label.refresh.verifyDisplayedStatus();
            await label.groupingDropDownList.verifyDisplayedStatus();
            await label.exportToExcel.verifyDisplayedStatus();
            await label.exportToWord.verifyDisplayedStatus();
        });
    }

    static async clickOnAddBranch() {
        StepLogger.subStep('Click On Add Branch');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await BranchesPage.buttons.addBranch.clickButton();
        });
    }

    static async verifyNewBranchScreenDisplayed() {
        StepLogger.subVerification('Verify New Branch Screen Displayed');
        await BranchesPage.newBranchScreen.verifyDisplayedStatus();
    }

    static async verifyNewBranchScreenClosed() {
        StepLogger.subVerification('Verify New Branch Screen Closed');
        await BranchesPage.newBranchScreen.verifyHiddenStatus();
    }

    static async verifyValuesInStatusDropDown(status: string) {
        StepLogger.subStep('Verify Values In Status Drop Down');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ExpectationHelper.verifyDisplayedElementFinder(BranchesPage.newBranchScreenProperties.status.item, status);
        });
    }

    static async navigateToNewBranchPage() {
        StepLogger.subStep('Navigate To New Branch Page');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickOrganizationUnderAdministration();
        await HomePage1Helper.clickBranchesUnderOrganization();
        await BranchesHelper.clickOnAddBranch();
    }

    static async enterCode(code: string) {
        StepLogger.subStep('Enter Code');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await BranchesPage.newBranchScreenProperties.code.sendKeys(code);
        });
    }

    static async verifyEnteredCode(code: string) {
        StepLogger.subVerification('Verify Entered Code');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await BranchesPage.newBranchScreenProperties.code.verifyTextEntered(code);
        });
    }

    static async enterName(name: string) {
        StepLogger.subStep('Enter Name');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await BranchesPage.newBranchScreenProperties.name.sendKeys(name);
        });
    }

    static async verifyEnteredName(name: string) {
        StepLogger.subVerification('Verify Entered Name');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await BranchesPage.newBranchScreenProperties.name.verifyTextEntered(name);
        });
    }

    static async selectARegionFromDropDown(region: string) {
        StepLogger.subStep('Select a Region from Drop Down');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DropDownHelper.selectOptionByText(BranchesPage.newBranchScreenProperties.region, region);
        });
    }

    static async verifyRegionSelected(region: string) {
        StepLogger.subVerification('Verify Region Selected');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await BranchesPage.regionSelected(region).verifyDisplayedStatus();
        });
    }

    static async enterValuesInAllAddressFields(address: string, state: string) {
        StepLogger.subStep('Enter Values In All Address Fields');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await BranchesPage.newBranchScreenProperties.address1.sendKeys(address);
            await BranchesPage.newBranchScreenProperties.address2.sendKeys(address);
            await BranchesPage.newBranchScreenProperties.city.sendKeys(address);
            await BranchesPage.newBranchScreenProperties.state.sendKeys(state);
            await BranchesPage.newBranchScreenProperties.zip.sendKeys(address);
            await BranchesPage.newBranchScreenProperties.country.sendKeys(state);
        });
    }

    static async verifyEnteredAdresses(address: string, state: string) {
        StepLogger.subVerification('Verify Entered Addresses');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await BranchesPage.newBranchScreenProperties.address1.verifyTextEntered(address);
            await BranchesPage.newBranchScreenProperties.address2.verifyTextEntered(address);
            await BranchesPage.newBranchScreenProperties.city.verifyTextEntered(address);
            await BranchesPage.newBranchScreenProperties.state.verifyTextEntered(state);
            await BranchesPage.newBranchScreenProperties.zip.verifyTextEntered(address);
            await BranchesPage.newBranchScreenProperties.country.verifyTextEntered(state);
        });
    }

    static async enterPhoneNumber(number: string) {
        StepLogger.subStep('Enter Phone Number');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await BranchesPage.newBranchScreenProperties.primaryPhone.sendKeys(number);
        });
    }

    static async verifyEnteredPhoneNumber(number: string) {
        StepLogger.subVerification('Verify Entered Phone Number');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await BranchesPage.newBranchScreenProperties.primaryPhone.verifyTextEntered(number);
        });
    }

    static async enterFax(fax: string) {
        StepLogger.subStep('Enter Fax');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await BranchesPage.newBranchScreenProperties.fax.sendKeys(fax);
        });
    }

    static async verifyEnteredFax(fax: string) {
        StepLogger.subVerification('Verify Entered Fax');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await BranchesPage.newBranchScreenProperties.fax.verifyTextEntered(fax);
        });
    }

    static async enterDescription(description: string) {
        StepLogger.subStep('Enter Description');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await BranchesPage.newBranchScreenProperties.description.sendKeys(description);
        });
    }

    static async verifyEnteredDescription(description: string) {
        StepLogger.subVerification('Verify Entered Description');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await BranchesPage.newBranchScreenProperties.description.verifyTextEntered(description);

        });
    }

    static async selectAStatusFromDropDown(status: string) {
        StepLogger.subStep('Select a Status from Drop Down');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DropDownHelper.selectOptionByText(BranchesPage.newBranchScreenProperties.status, status);
        });
    }

    static async verifyStatusSelected(status: string) {
        StepLogger.subVerification('Verify Status Selected');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await BranchesPage.statusSelected(status).verifyDisplayedStatus();
        });
    }

    static async clickOnSave() {
        StepLogger.subStep('Click On Save');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await BranchesPage.newBranchScreenProperties.save.clickButton();
        });
    }

    static async clickOnCancel() {
        StepLogger.subStep('Click On Cancel');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await BranchesPage.newBranchScreenProperties.cancel.clickButton();
        });
    }

    static async verifyValidationError(message: string) {
        StepLogger.subVerification('Verify Validation Error');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await BranchesPage.validationError(message).verifyDisplayedStatus();
        });
    }

    static async verifyValuesInGroupingDropDown(groupingOption: string) {
        StepLogger.subVerification('Verify Values In Grouping Drop Down');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await ExpectationHelper.verifyDisplayedElementFinder(BranchesPage.newBranchScreenProperties.groupingOption.item, groupingOption);
        });
    }

    static async clickOnEditBranch() {
        StepLogger.subStep('Click On Edit Branch');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await BranchesPage.buttons.editBranch.clickButton();
        });
    }

    static async navigateToEditBranchesPage() {
        StepLogger.subStep('Navigate To Edit Branches Page');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickOrganizationUnderAdministration();
        await HomePage1Helper.clickBranchesUnderOrganization();
        await this.clickOnEditBranch();
    }

    static async clickOnStatusDropDown() {
        StepLogger.subStep('Click On Status Drop Down');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await BranchesPage.newBranchScreenProperties.status.clickButton();
        });
    }

    static async verifyEditBranchWindowDisplayed() {
        StepLogger.subVerification('Verify Edit Branch Window Displayed');
        await BranchesPage.newBranchScreen.verifyDisplayedStatus();
    }

    static async doubleClickOnBranchEntry() {
        StepLogger.subStep('Double Click On Branch Entry');
        const firstRegionEntry = BranchesPage.buttons.branchEntry(1);
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await ElementHelper.actionMouseMove(firstRegionEntry);
            await ElementHelper.actionDoubleClick(firstRegionEntry.item,
                firstRegionEntry.name)
                .catch((e: Error) => VerboseLogger.log(`Error during double click: ${e}`));
        });
    }

    static async clickOnCloseIcon() {
        StepLogger.subStep('Click On Close Icon');
        await BranchesPage.newBranchScreenProperties.closeIcon.clickButton();
    }

    static async clickOnCloseButton() {
        StepLogger.subStep('Click On Close Button');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async() => {
            await BranchesPage.newBranchScreenProperties.closeButton.clickButton();
        });
    }

    static async clickOnRegionDropDown() {
        StepLogger.subStep('Click On Region Drop Down');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await BranchesPage.newBranchScreenProperties.region.clickButton();
        });
    }

    static async verifyRegionDropDown() {
        StepLogger.subVerification('Verify Region Drop Down');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await BranchesPage.newBranchScreenProperties.region.verifyDisplayedStatus();
        });
    }

}

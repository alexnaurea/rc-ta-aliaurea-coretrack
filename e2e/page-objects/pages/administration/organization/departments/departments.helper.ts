import { StepLogger } from '../../../../../../core/logger/step-logger';
import { VerboseLogger } from '../../../../../../core/logger/verbose-logger';
import { DropDownHelper } from '../../../../../components/html/dropdown-helper';
import { ElementHelper } from '../../../../../components/html/element-helper';
import { PageHelperExtension } from '../../../../../components/html/page-helper-extended';
import { ExpectationHelper } from '../../../../../components/misc-utils/expectation-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';
import { CommonPage } from '../../../common/common.po';
import { HomePageHelper } from '../../../home-page/home-page.helper';

import { DepartmentsPage } from './departments.po';

export class DepartmentsHelper {

    static async verifyManageDepartmentsPageDisplayed() {
        StepLogger.subVerification('Verify Products Manage Page Displayed');
        await DepartmentsPage.manageDepartmentsPage.verifyDisplayedStatus();
    }

    static async verifyDepartmentsPageItemsGrid() {
        StepLogger.subVerification('Verify Departments Page Items Grid');
        const label = DepartmentsPage.departmentsPageItemsGrid;
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await label.department.verifyDisplayedStatus();
            await label.description.verifyDisplayedStatus();
            await label.code.verifyDisplayedStatus();
            await label.active.verifyDisplayedStatus();
        });
    }

    static async verifyButtons() {
        StepLogger.subVerification('Verify Buttons');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            const label = DepartmentsPage.buttons;
            await label.refresh.verifyDisplayedStatus();
            await label.addDepartment.verifyDisplayedStatus();
            await label.exportToExcel.verifyDisplayedStatus();
            await label.exportToWord.verifyDisplayedStatus();
        });
    }

    static async clickAddDepartment() {
        StepLogger.subStep('Click Add Department');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await DepartmentsPage.buttons.addDepartment.clickButton();
        });
    }

    static async verifyNewDepartmentScreen() {
        StepLogger.subVerification('Verify New Department Screen');
        await DepartmentsPage.newDepartmentScreen.verifyDisplayedStatus();
    }

    static async clickOnCancel() {
        StepLogger.subStep('Click On Cancel');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DepartmentsPage.newDepartmentScreenProperties.cancel.clickButton();
        });
    }

    static async clickOnSave() {
        StepLogger.subStep('Click On Save');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DepartmentsPage.newDepartmentScreenProperties.save.clickButton();
        });
    }

    static async verifyNewDepartmentScreenClosed() {
        StepLogger.subVerification('Verify New Department Screen Closed');
        await DepartmentsPage.newDepartmentScreen.verifyHiddenStatus();
    }

    static async enterCode(code: string) {
        StepLogger.subStep('Enter Code');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DepartmentsPage.newDepartmentScreenProperties.code.sendKeys(code);
        });
    }

    static async verifyEnteredCode(code: string) {
        const value = HtmlHelper.attributes.value;
        StepLogger.subVerification('Verify Enterd Code');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ExpectationHelper.verifyAttributeContains(DepartmentsPage.newDepartmentScreenProperties.code,
                value, code);
        });
    }

    static async enterName(name: string) {
        StepLogger.subStep('Enter Name');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DepartmentsPage.newDepartmentScreenProperties.name.sendKeys(name);
        });
    }

    static async verifyEnteredName(name: string) {
        const value = HtmlHelper.attributes.value;
        StepLogger.subVerification('Verify Entered Name');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ExpectationHelper.verifyAttributeContains(DepartmentsPage.newDepartmentScreenProperties.name,
                value, name);
        });
    }

    static async enterDescription(description: string) {
        StepLogger.subStep('Enter Description');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DepartmentsPage.newDepartmentScreenProperties.description.sendKeys(description);
        });
    }

    static async verifyEnteredDescription(description: string) {
        const value = HtmlHelper.attributes.value;
        StepLogger.subVerification('Verify Entered Description');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ExpectationHelper.verifyAttributeContains(DepartmentsPage.newDepartmentScreenProperties.description,
                value, description);
        });
    }

    static async selectAStatusFromDropDown(status: string) {
        StepLogger.subStep('Select a Status from Drop Down');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DropDownHelper.selectOptionByText(DepartmentsPage.newDepartmentScreenProperties.status, status);
        });
    }

    static async verifyStatusSelected(status: string) {
        StepLogger.subVerification('Verify Status Selected');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DepartmentsPage.statusSelected(status).verifyDisplayedStatus();
        });
    }

    static async navigateToAddDepartmentScreen() {
        StepLogger.subStep('Navigate To Add Department Screen');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickOrganizationUnderAdministration();
        await HomePageHelper.clickDepartmentsUnderOrganization();
        await DepartmentsHelper.clickAddDepartment();
    }

    static async verifyValidationErrorMessage(message: string) {
        StepLogger.subVerification('Verify Validation Error Message');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DepartmentsPage.validationError(message).verifyDisplayedStatus();
        });
    }

    static async clickOnEditDepartment() {
        StepLogger.subStep('Click On Edit Department');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await DepartmentsPage.buttons.editDepartment.clickButton();
        });
    }

    static async verifyEditDepartmentScreen() {
        StepLogger.subVerification('Verify Edit Department Screen');
        await DepartmentsPage.newDepartmentScreen.verifyDisplayedStatus();
    }

    static async navigateToEditDepartmentScreen() {
        StepLogger.subStep('Navigate To Edit Department Screen');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickOrganizationUnderAdministration();
        await HomePageHelper.clickDepartmentsUnderOrganization();
        await this.clickOnEditDepartment();
    }

    static async clickOnStatusDropDown() {
        StepLogger.subStep('Click On Status Drop Down');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DepartmentsPage.newDepartmentScreenProperties.status.clickButton();
        });
    }

    static async clickOnCloseIcon() {
        StepLogger.subStep('Click On Close Icon');
        await DepartmentsPage.newDepartmentScreenProperties.close.clickButton();
    }

    static async doubleClickOnDepartmentEntry() {
        StepLogger.subStep('Double Click On Department Entry');
        const firstRegionEntry = DepartmentsPage.buttons.departmentEntry(1);
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await ElementHelper.actionMouseMove(firstRegionEntry);
            await ElementHelper.actionDoubleClick(firstRegionEntry.item,
                firstRegionEntry.name)
                .catch((e: Error) => VerboseLogger.log(`Error during double click: ${e}`));
        });
    }

    static async clickOnSearchButton() {
        StepLogger.subStep('Click On Search Button');
        await DepartmentsPage.buttons.searchButton.clickButton();
    }

    static async verifySearchBox() {
        StepLogger.subVerification('Verify Search Box');
        await DepartmentsPage.buttons.searchBox.verifyDisplayedStatus();
    }
}

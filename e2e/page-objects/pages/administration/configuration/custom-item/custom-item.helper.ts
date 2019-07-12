import { StepLogger } from '../../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../../components/html/page-helper';
import { PageHelperExtension } from '../../../../../components/html/page-helper-extended';
import { WaitHelper } from '../../../../../components/html/wait-helper';
import { CommonPage } from '../../../common/common.po';
import { HomePageHelper } from '../../../home-page/home-page.helper';
import { HomePage } from '../../../home-page/home-page.po';

import { CustomItemConstants } from './custom-item.constants';
import { CustomItemPage } from './custom-item.po';

const { tableElements: table, buttons, editItem } = CustomItemPage;
const { elementNames: eNames } = CustomItemConstants;
export class CustomItemHelper {

    static async verifyCustomItemPageDisplayed() {
        StepLogger.subVerification('Verify Manage Custom Items Page Displayed');
        await CustomItemPage.customItemsPage.verifyDisplayedStatus();
    }

    static async navigateToAdministrationConfiguration() {
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickConfigurationUnderAdministration();
    }

    static async clickCustomItemAndSelectItem() {
        await HomePage.configurationUnderAdministration.customItem.clickLink();
        await this.clickOnUnselectedTableItemName(CustomItemConstants.table.itemName);
    }

    static async clickOnUnselectedTableItemName(itemName: string) {
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await table.unselectedItemName(itemName).clickLinkJs();
        });
    }

    static async clickOnAddItem() {
        StepLogger.subStep('Click On Add Item');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await buttons.addItem.clickButton();
        });
    }

    static async clickEditElement() {
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await buttons.editItem.clickLinkJs();
        });
    }

    static async clickRefresh() {
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await CustomItemPage.buttons.refresh.clickLink();
            await WaitHelper.waitForPageToStable();
        });
    }

    static async clickOnSelectedTableItemName(itemName: string) {
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await CustomItemPage.tableElements.selectedItemName(itemName).clickLink();
        });
    }

    static async clickSave() {
        await PageHelper.executeInIFrame([CommonPage.contentFrame], async () => {
            await editItem.save.clickLink();
            await WaitHelper.waitForPageToStable();
        });
    }

    static async clickClose() {
        await PageHelper.switchToDefaultContent();
        await editItem.close.clickLink();
    }

    static async clickCancel() {
        await PageHelper.executeInIFrame([CommonPage.contentFrame], async () => {
            await editItem.cancel.clickLink();
        });
    }

    static async verifyNewItemScreenDisplayed() {
        StepLogger.subVerification('Verify New Item Screen Displayed');
        await CustomItemPage.newItemScreen.verifyDisplayedStatus();
    }

    static async verifyNewItemScreenClosed() {
        StepLogger.subVerification('Verify New Item Screen Closed');
        await CustomItemPage.newItemScreen.verifyHiddenStatus();
    }

    static async verifyAllButtonDisplayed() {
        StepLogger.subVerification('Verify All buttons displayed');
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await buttons.iconUp.verifyDisplayedStatus();
            await buttons.iconDown.verifyDisplayedStatus();
            await buttons.refresh.verifyDisplayedStatus();
            await buttons.addItem.verifyDisplayedStatus();
            await buttons.exportToExcel.verifyDisplayedStatus();
            await buttons.exportToWord.verifyDisplayedStatus();
        });
    }

    static async verifyPageTitleAndTableColumnsDisplayed() {
        StepLogger.subVerification('Verify page title and table header displayed');
        await this.verifyCustomItemPageDisplayed();
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await table.activeHeader.verifyDisplayedStatus();
            await table.itemHeader.verifyDisplayedStatus();
            await table.typeHeader.verifyDisplayedStatus();
        });
    }

    static async verifyEditItemElementsDisplayed() {
        StepLogger.subVerification('Verify Edit Item sub-window elements displayed');
        await PageHelper.switchToDefaultContent();
        await editItem.close.verifyDisplayedStatus();
        await PageHelper.executeInIFrame([CommonPage.contentFrame], async () => {
            await editItem.itemTypeDdl.verifyDisplayedStatus();
            await editItem.sortableItemTb.verifyDisplayedStatus();
            await editItem.statusDdl.verifyDisplayedStatus();
            await editItem.save.verifyDisplayedStatus();
            await editItem.cancel.verifyDisplayedStatus();
        });
    }

    static async changeDataElementsInEdit(itemName: string) {
        StepLogger.subStep('Change Edit Item sub-window elements data');
        await PageHelper.executeInIFrame([CommonPage.contentFrame], async () => {
            await editItem.sortableItemTb.sendKeys(itemName);
            await editItem.itemTypeDdl.clickLink();
            await editItem.itemTypeDdlOption(eNames.open).clickLink();
            await editItem.statusDdl.clickLink();
            await editItem.statusDdlOption(eNames.inactive).clickLink();
        });
    }

    static async revertDataElementsInEdit(itemName: string) {
        StepLogger.subStep('Change Edit Item sub-window elements data');
        await this.clickEditElement();
        await PageHelper.executeInIFrame([CommonPage.contentFrame], async () => {
            await editItem.sortableItemTb.sendKeys(itemName);
            await editItem.itemTypeDdl.clickLink();
            await editItem.itemTypeDdlOption(eNames.disposition).clickLink();
            await editItem.statusDdl.clickLink();
            await editItem.statusDdlOption(eNames.active).clickLink();
        });
        await this.clickSave();
    }

    static async verifyChangesEnteredInEdit(itemName: string) {
        StepLogger.subVerification('The saved changes are displayed');
        await PageHelper.executeInIFrame([CommonPage.contentFrame], async () => {
            await editItem.sortableItemTb.verifyTextEntered(itemName);
            await editItem.itemTypeDdlOption(eNames.open).verifyDisplayedStatus();
            await editItem.statusDdlOption(eNames.inactive).verifyDisplayedStatus();
        });
    }

    static async verifyChangesDisplayedInTableItems(itemName: string, itemStatus: string, active: boolean = false) {
        StepLogger.subVerification('The saved changes are displayed');
        await this.clickOnUnselectedTableItemName(itemName);
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await table.selectedItemName(itemName).verifyDisplayedStatus();
            await table.selectedItemName(itemStatus).verifyDisplayedStatus();
            if (active) {
                await table.activeCheckbox.verifyCheckboxNotChecked();
            } else {
                await table.activeCheckbox.verifyCheckboxChecked();
            }
        });
    }
}

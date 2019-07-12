import { StepLogger } from '../../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../../components/html/page-helper';
import { PageHelperExtension } from '../../../../../components/html/page-helper-extended';
import { WaitHelper } from '../../../../../components/html/wait-helper';
import { CommonPage } from '../../../common/common.po';
import { HomePageHelper } from '../../../home-page/home-page.helper';
import { HomePage } from '../../../home-page/home-page.po';

import { CustomItemTypesConstants } from './custom-item-types.constants';
import { CustomItemTypesPage } from './custom-item-types.po';

const { tableElements: table, buttons, editItem } = CustomItemTypesPage;
const { elementNames: eNames } = CustomItemTypesConstants;
export class CustomItemTypesHelper {

    static async verifyCustomItemTypesPageDisplayed() {
        StepLogger.subVerification('Verify Manage Custom Items Page Displayed');
        await CustomItemTypesPage.customItemsTypesPage.verifyDisplayedStatus();
    }

    static async navigateToAdministrationConfiguration() {
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickConfigurationUnderAdministration();
    }

    static async clickCustomItemTypesAndSelectItem() {
        await HomePage.configurationUnderAdministration.customItemType.clickLink();
        await this.clickOnUnselectedTableItemName(CustomItemTypesConstants.table.itemTypeName);
    }

    static async clickOnUnselectedTableItemName(itemName: string) {
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await table.unselectedItemName(itemName).clickLinkJs();
        });
    }

    static async clickOnAddItemTypes() {
        StepLogger.subStep('Click On Add Item Types');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await CustomItemTypesPage.buttons.addItemType.clickButton();
        });
    }

    static async clickEditElement() {
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await buttons.editItem.clickLinkJs();
        });
    }

    static async clickRefresh() {
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await CustomItemTypesPage.buttons.refresh.clickLink();
            await WaitHelper.waitForPageToStable();
        });
    }

    static async clickOnSelectedTableItemName(itemName: string) {
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await CustomItemTypesPage.tableElements.selectedItemName(itemName).clickLink();
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

    static async verifyAllButtonDisplayed() {
        StepLogger.subVerification('Verify All buttons displayed');
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await buttons.refresh.verifyDisplayedStatus();
            await buttons.addItemType.verifyDisplayedStatus();
            await buttons.exportToExcel.verifyDisplayedStatus();
            await buttons.exportToWord.verifyDisplayedStatus();
        });
    }

    static async verifyPageTitleAndTableColumnsDisplayed() {
        StepLogger.subVerification('Verify page title and table header displayed');
        await this.verifyCustomItemTypesPageDisplayed();
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await table.activeHeader.verifyDisplayedStatus();
            await table.itemTypeHeader.verifyDisplayedStatus();
        });
    }

    static async verifyEditItemElementsDisplayed() {
        StepLogger.subVerification('Verify Edit Item sub-window elements displayed');
        await PageHelper.switchToDefaultContent();
        await editItem.close.verifyDisplayedStatus();
        await PageHelper.executeInIFrame([CommonPage.contentFrame], async () => {
            await editItem.sortableItemTb.verifyDisplayedStatus();
            await editItem.statusDdl.verifyDisplayedStatus();
            await editItem.save.verifyDisplayedStatus();
            await editItem.cancel.verifyDisplayedStatus();
        });
    }

    static async changeDataElementsInEdit() {
        StepLogger.subStep('Change Edit Item sub-window elements data');
        await PageHelper.executeInIFrame([CommonPage.contentFrame], async () => {
            await editItem.statusDdl.clickLink();
            await editItem.statusDdlOption(eNames.inactive).clickLink();
        });
    }

    static async revertDataElementsInEdit() {
        StepLogger.subStep('Change Edit Item sub-window elements data');
        await this.clickEditElement();
        await PageHelper.executeInIFrame([CommonPage.contentFrame], async () => {
            await editItem.statusDdl.clickLink();
            await editItem.statusDdlOption(eNames.active).clickLink();
        });
        await this.clickSave();
    }

    static async verifyChangesEnteredInEdit() {
        StepLogger.subVerification('The saved changes are displayed');
        await PageHelper.executeInIFrame([CommonPage.contentFrame], async () => {
            await editItem.statusDdlOption(eNames.inactive).verifyDisplayedStatus();
        });
    }

    static async verifyChangesDisplayedInTableItems(itemName: string, active: boolean = false) {
        StepLogger.subVerification('The saved changes are displayed');
        await this.clickOnUnselectedTableItemName(itemName);
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            if (active) {
                await table.activeCheckbox.verifyCheckboxNotChecked();
            } else {
                await table.activeCheckbox.verifyCheckboxChecked();
            }
        });
    }

    static async verifyNewItemTypesScreenDisplayed() {
        StepLogger.subVerification('Verify New Item Type Screen Displayed');
        await CustomItemTypesPage.newItemScreen.verifyDisplayedStatus();
    }

    static async verifyNewItemTypesScreenClosed() {
        StepLogger.subVerification('Verify New Item Type Screen Closed');
        await CustomItemTypesPage.newItemScreen.verifyHiddenStatus();
    }
}

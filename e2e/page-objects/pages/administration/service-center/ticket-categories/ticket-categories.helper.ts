import { PageHelper } from '../../../../../components/html/page-helper';
import { Constants } from '../../../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../../../components/misc-utils/expectation-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';
import { CommonPage } from '../../../common/common.po';
import { HomePageHelper } from '../../../home-page/home-page.helper';

import { TicketCategoriesConstant } from './ticket-categories.constants';
import { TicketCategoriesPage } from './ticket-categories.po';

export class TicketCategoriesHelper {

    static async verifyTicketCategoriesPageDisplayed() {
        await TicketCategoriesPage.title.verifyDisplayedStatus();
    }

    static async clickAddTicketCategory(switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(TicketCategoriesPage.resourceOneIFrame);
        }

        await TicketCategoriesPage.buttons.addTicketCategory.clickButton();
    }

    static async verifyTicketCategoryDialog() {
        await PageHelper.switchToDefaultContent();
        await TicketCategoriesPage.ticketCategoryDialog.dialogTitle.verifyDisplayedStatus();
    }

    static async verifyTicketCategoryDialogAttributes() {
        const { ticketCategoryDialog } = TicketCategoriesPage;
        const frames =  [CommonPage.contentIFrameOnModal];

        await PageHelper.executeInIFrame(frames, async () => {
            await ticketCategoryDialog.title.verifyDisplayedStatus();
            await ticketCategoryDialog.description.verifyDisplayedStatus();
            await ticketCategoryDialog.status.verifyDisplayedStatus();
            await ticketCategoryDialog.parent.verifyDisplayedStatus();
            await this.verifyStatusDropdownOptions();
            await this.verifyParentDropdownOptions();
        });
    }

    static async verifyStatusDropdownOptions(switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        const dropdown = TicketCategoriesConstant.statusDropdown;
        const options = await PageHelper.getTextOfElements(
            await TicketCategoriesPage.ticketCategoryDialog.allStatusOptions);
        await ExpectationHelper.verifyStringArrayContainsValue(options, dropdown.active);
        await ExpectationHelper.verifyStringArrayContainsValue(options, dropdown.inactive);
    }

    static async verifyParentDropdownOptions(switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        const dropdown = TicketCategoriesConstant.parentDropdown;
        const options = await PageHelper.getTextOfElements(
            await TicketCategoriesPage.ticketCategoryDialog.allParentOptions);
        await ExpectationHelper.verifyStringArrayContainsValue(options, dropdown.rootCategory);
        await ExpectationHelper.verifyStringArrayContainsValue(options, dropdown.subCategory);
    }

    static async clickCancelTicketCategoryDialog(switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await TicketCategoriesPage.ticketCategoryDialog.cancel.clickButton();
    }

    static async clickSaveTicketCategoryDialog(switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await TicketCategoriesPage.ticketCategoryDialog.save.clickButton();
    }

    static async verifyTicketCategoriesPageHidden() {
        await PageHelper.switchToDefaultContent();
        await TicketCategoriesPage.ticketCategoryDialog.dialogTitle.verifyHiddenStatus();
    }

    static async verifyEnterNameDialog(toSwitch: boolean = false) {
        if (toSwitch) {
            await PageHelper.switchToiFrame(CommonPage.contentIFrameOnModal);
        }
        await TicketCategoriesPage.ticketCategoryDialog.enterName.verifyDisplayedStatus();
    }

    static async navigateToTicketCategoriesClickAddCategory() {
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.verifyOptionsUnderAdministration();
        await HomePageHelper.clickServiceCenterUnderAdministration();
        await HomePageHelper.verifyOptionsUnderServiceCenter();
        await HomePageHelper.clickTicketCategoriesUnderServiceCenterUnderAdministration();
        await TicketCategoriesHelper.verifyTicketCategoriesPageDisplayed();
        await TicketCategoriesHelper.clickAddTicketCategory(true);
        await TicketCategoriesHelper.verifyTicketCategoryDialog();
    }

    static async enterName(name: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await TicketCategoriesPage.ticketCategoryDialog.title.sendKeys(name);
    }

    static async verifyName(name: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await TicketCategoriesPage.ticketCategoryDialog.title.verifyTextBoxContains(name);
    }

    static async selectParentOption(option: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await TicketCategoriesPage.ticketCategoryDialog.parentOption(option).clickButton();
    }

    static async verifyParentSelectedOption(option: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        const selected = await TicketCategoriesPage.ticketCategoryDialog.parent.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, option);
    }

    static async selectStatusOption(option: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await TicketCategoriesPage.ticketCategoryDialog.statusOption(option).clickButton();
    }

    static async verifyStatusSelectedOption(option: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        const selected = await TicketCategoriesPage.ticketCategoryDialog.status.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, option);
    }

    static async verifyCreatedCategory(name: string, switchToFrame: boolean = true, subCategory: boolean = false,
                                       parent?: string) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(TicketCategoriesPage.resourceOneIFrame);
        }

        if (subCategory) {
            await TicketCategoriesPage.manageTicketCategory.itemPlusIcon(parent).clickButton();
        }

        await TicketCategoriesPage.manageTicketCategory.item(name).verifyDisplayedStatus();
    }

    static async deleteCategory(name: string, switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(TicketCategoriesPage.resourceOneIFrame);
        }

        await TicketCategoriesPage.manageTicketCategory.item(name).clickButton();
        await TicketCategoriesPage.buttons.deleteTicketCategory.clickButton();
        await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        await TicketCategoriesPage.deleteCategory.enabledItem(name).clickButton();
        await TicketCategoriesPage.deleteCategory.deleteBtn.clickButton();
    }

    static async clickSearchTicketCategoryDialog() {
        await TicketCategoriesPage.ticketCategoryDialog.searchCategoryBtn.clickButton();
    }

    static async verifySelectCategoryDialog() {
        await PageHelper.switchToDefaultContent();
        await TicketCategoriesPage.ticketCategoryDialog.selectCategoryTitle.verifyDisplayedStatus();
    }

    static async selectCategoryDialogAndClickSelect() {
        const { ticketCategoryDialog } = TicketCategoriesPage;
        let category = Constants.EMPTY_STRING;

        await PageHelper.switchToiFrame(ticketCategoryDialog.categoryFrame);
        category = await ticketCategoryDialog.firstCategory.getText();
        await ticketCategoryDialog.firstCategory.clickButton();
        await ticketCategoryDialog.selectCategory.clickButton();
        return category;
    }

    static async verifySelectedCategoryInDialog(category: string, switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }
        const current = await TicketCategoriesPage.ticketCategoryDialog.category.getAtttribute(HtmlHelper.attributes.value);
        await ExpectationHelper.verifyStringValueContain(current, category);
    }

    static async enterDescription(description: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await TicketCategoriesPage.ticketCategoryDialog.description.sendKeys(description);
    }

    static async verifyDescription(description: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await TicketCategoriesPage.ticketCategoryDialog.description.verifyTextBoxContains(description);
    }
}

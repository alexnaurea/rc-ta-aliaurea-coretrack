import { StepLogger } from '../../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../../components/html/page-helper';
import { WaitHelper } from '../../../../../components/html/wait-helper';
import { Constants } from '../../../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../../../components/misc-utils/expectation-helper';
import { CommonPage } from '../../../common/common.po';
import { HomePageHelper } from '../../../home-page/home-page.helper';
import { NewCasePageHelper } from '../../../new-case-page/new-case-page.helper';
import { NewCasePage } from '../../../new-case-page/new-case-page.po';

import { CaseAreasConstant } from './case-areas.constants';
import { CaseAreasPage } from './case-areas.po';

export class CaseAreasHelper {
    static async verifyCaseAreasPageDisplayed() {
        await CaseAreasPage.title.verifyDisplayedStatus();
    }

    static async clickAddCategoryButton(switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CaseAreasPage.resourceOneIFrame);
        }

        await CaseAreasPage.buttons.addCategory.clickButton();
    }

    static async verifyCategoryDialog() {
        await PageHelper.switchToDefaultContent();
        await CaseAreasPage.categoryDialog.dialogTitle.verifyDisplayedStatus();
    }

    static async verifyCategoryDialogAttributes() {
        const { categoryDialog } = CaseAreasPage;
        const frames =  [CommonPage.contentIFrameOnModal];

        await PageHelper.executeInIFrame(frames, async () => {
            await categoryDialog.category.verifyDisplayedStatus();
            await categoryDialog.status.verifyDisplayedStatus();
            await this.verifyStatusDropdownOptions();
        });
    }

    static async verifyStatusDropdownOptions(switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        const dropdown = CaseAreasConstant.statusDropdown;
        const options = await PageHelper.getTextOfElements(
            await CaseAreasPage.categoryDialog.allStatusOptions);
        await ExpectationHelper.verifyStringArrayContainsValue(options, dropdown.active);
        await ExpectationHelper.verifyStringArrayContainsValue(options, dropdown.inactive);
    }

    static async verifyCategoryDialogButtons() {
        const { categoryDialog } = CaseAreasPage;
        const frames =  [CommonPage.contentIFrameOnModal];

        await PageHelper.executeInIFrame(frames, async () => {
            await categoryDialog.save.verifyDisplayedStatus();
            await categoryDialog.cancel.verifyDisplayedStatus();
        });
    }

    static async clickSaveCategoryDialog(switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await CaseAreasPage.categoryDialog.save.clickButton();
    }

    static async verifyEnterNameDialog(toSwitch: boolean = false) {
        if (toSwitch) {
            await PageHelper.switchToiFrame(CommonPage.contentIFrameOnModal);
        }

        await CaseAreasPage.categoryDialog.enterName.verifyDisplayedStatus();
    }

    static async clickOkErrorDialog() {
        await CaseAreasPage.categoryDialog.okButton.clickButton();
    }

    static async verifyDialogClosedAndNewCategory() {
        await CaseAreasPage.categoryDialog.enterName.verifyHiddenStatus();
        await this.verifyCategoryDialog();
    }

    static async enterCategoryName(name: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await CaseAreasPage.categoryDialog.category.sendKeys(name);
    }

    static async verifyCategoryName(name: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await CaseAreasPage.categoryDialog.category.verifyTextBoxContains(name);
    }

    static async selectStatusOption(option: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await CaseAreasPage.categoryDialog.statusOption(option).clickButton();
    }

    static async verifyStatusSelectedOption(option: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        const selected = await CaseAreasPage.categoryDialog.status.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, option);
    }

    static async verifyDialogClosedAndCaseAreas() {
        await PageHelper.switchToDefaultContent();
        await CaseAreasPage.categoryDialog.enterName.verifyHiddenStatus();
        await this.verifyCaseAreasPageDisplayed();
    }

    static async clickAddSubcategoryButton(switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CaseAreasPage.resourceOneIFrame);
        }

        await CaseAreasPage.buttons.addSubcategory.clickButton();
    }

    static async verifySubcategoryDialog() {
        await PageHelper.switchToDefaultContent();
        await CaseAreasPage.subcategoryDialog.dialogTitle.verifyDisplayedStatus();
    }

    static async verifySubcategoryDialogAttributes() {
        const { subcategoryDialog } = CaseAreasPage;
        const frames = [CommonPage.contentIFrameOnModal];

        await PageHelper.executeInIFrame(frames, async () => {
            await subcategoryDialog.category.verifyDisplayedStatus();
            await subcategoryDialog.subcategory.verifyDisplayedStatus();
            await subcategoryDialog.status.verifyDisplayedStatus();
            await this.verifyStatusDropdownOptions();
            await subcategoryDialog.dafaulQueue.verifyDisplayedStatus();
            await subcategoryDialog.private.verifyDisplayedStatus();
            await subcategoryDialog.reminder.verifyDisplayedStatus();
        });
    }

    static async verifySubcategoryDialogButtons() {
        const { subcategoryDialog } = CaseAreasPage;
        const frames =  [CommonPage.contentIFrameOnModal];

        await PageHelper.executeInIFrame(frames, async () => {
            await subcategoryDialog.save.verifyDisplayedStatus();
            await subcategoryDialog.cancel.verifyDisplayedStatus();
        });
    }

    static async clickSaveSubcategoryDialog(switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await CaseAreasPage.subcategoryDialog.save.clickButton();
    }

    static async verifyEnterSubcategoryNameDialog(toSwitch: boolean = false) {
        if (toSwitch) {
            await PageHelper.switchToiFrame(CommonPage.contentIFrameOnModal);
        }
        await CaseAreasPage.subcategoryDialog.enterName.verifyDisplayedStatus();
    }

    static async verifyDialogClosedAndNewSubcategory() {
        await CaseAreasPage.categoryDialog.enterName.verifyHiddenStatus();
        await this.verifySubcategoryDialog();
    }

    static async clickCategoryDropdown(switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await CaseAreasPage.subcategoryDialog.category.clickButton();
    }

    static async verifySavedCategoryInDropdown(name: string, switchToFrame: boolean = false,
                                               closeDropdown: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        if (closeDropdown) {
            await CaseAreasPage.subcategoryDialog.category.clickButton();
        }

        StepLogger.subStep('Get all categories');
        const options = await PageHelper.getTextOfElements(CaseAreasPage.subcategoryDialog.allCategoryOptions);
        await ExpectationHelper.verifyStringArrayContainsValue(options, name);
    }

    static async selectCategory(name: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await CaseAreasPage.subcategoryDialog.categoryOption(name).clickButton();
    }

    static async verifySelectedCategory(name: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        const current = await CaseAreasPage.subcategoryDialog.category.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(current, name);
    }

    static async enterSubcategoryName(name: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await CaseAreasPage.subcategoryDialog.subcategory.sendKeys(name);
    }

    static async verifySubcategoryName(name: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await CaseAreasPage.subcategoryDialog.subcategory.verifyTextBoxContains(name);
    }

    static async selectStatusOptionSubcategory(option: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await CaseAreasPage.subcategoryDialog.statusOption(option).clickButton();
    }

    static async verifyStatusSelectedOptionSubcategory(option: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        const selected = await CaseAreasPage.subcategoryDialog.status.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, option);
    }

    static async verifyDialogClosedAndSubcategoryCreated(category: string, subcategory: string) {
        await PageHelper.switchToDefaultContent();
        await CaseAreasPage.subcategoryDialog.dialogTitle.verifyHiddenStatus();
        await PageHelper.switchToDefaultContentAndIFrame(CaseAreasPage.resourceOneIFrame);
        StepLogger.subStep('Check if subcategory is present');
        let isVisible = await CaseAreasPage.caseAreas.item(subcategory).item.isPresent();
        let page = Constants.number.two;

        while (!isVisible) {
            await CaseAreasPage.caseAreas.nextPage.clickButton();
            StepLogger.subStep('Wait for page number to display');
            await WaitHelper.waitForElementToBeDisplayed(CaseAreasPage.caseAreas.currentPage(page.toString()).item);
            StepLogger.subStep('Check if subcategory is present');
            isVisible = await CaseAreasPage.caseAreas.item(subcategory).item.isPresent();
            if (isVisible) {
                await CaseAreasPage.caseAreas.itemCategory(subcategory, category).verifyDisplayedStatus();
                break;
            } else {
                page++;
            }
        }
    }

    static async createCategory(name: string) {
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.verifyOptionsUnderAdministration();
        await HomePageHelper.clickServiceCenterUnderAdministration();
        await HomePageHelper.verifyOptionsUnderServiceCenter();
        await HomePageHelper.clickCaseAreasUnderServiceCenterUnderAdministration();
        await CaseAreasHelper.verifyCaseAreasPageDisplayed();
        await CaseAreasHelper.clickAddCategoryButton(true);
        await CaseAreasHelper.verifyCategoryDialog();
        await CaseAreasHelper.enterCategoryName(name, true);
        await CaseAreasHelper.selectStatusOption(CaseAreasConstant.statusDropdown.active);
        await CaseAreasHelper.clickSaveCategoryDialog();
        await CaseAreasHelper.verifyDialogClosedAndCaseAreas();
    }

    static async selectQueueAndStatus() {
        await this.selectQueueOptionSubcategory(CaseAreasConstant.queueDropdown.emailNotification);
        await this.selectStatusOptionSubcategory(CaseAreasConstant.statusDropdown.active);
    }

    static async selectQueueOptionSubcategory(option: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await CaseAreasPage.subcategoryDialog.queueOption(option).clickButton();
    }

    static async verifyQueueSelectedOptionSubcategory(option: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        const selected = await CaseAreasPage.subcategoryDialog.dafaulQueue.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, option);
    }

    static async selectPrivateOptionSubcategory(option: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await CaseAreasPage.subcategoryDialog.privateOption(option).clickButton();
    }

    static async verifyPrivateSelectedOptionSubcategory(option: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        const selected = await CaseAreasPage.subcategoryDialog.private.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, option);
    }

    static async verifyQueueAndStatus() {
        await this.verifyQueueSelectedOptionSubcategory(CaseAreasConstant.queueDropdown.emailNotification);
        await this.verifyStatusSelectedOptionSubcategory(CaseAreasConstant.statusDropdown.active);
    }

    static async setPrivateAndReminder(reminder: string) {
        await this.selectPrivateOptionSubcategory(CaseAreasConstant.privateDropdown.no);
        await CaseAreasPage.subcategoryDialog.reminder.sendKeys(reminder);
    }

    static async verifyPrivateAndReminder(reminder: string) {
        await this.verifyPrivateSelectedOptionSubcategory(CaseAreasConstant.privateDropdown.no);
        await CaseAreasPage.subcategoryDialog.reminder.verifyTextBoxContains(reminder);
    }

    static async searchSubcategory(subcategory: string) {
        await PageHelper.switchToDefaultContentAndIFrame(CaseAreasPage.resourceOneIFrame);
        StepLogger.subStep('Check if subcategory is present');
        let isVisible = await CaseAreasPage.caseAreas.item(subcategory).item.isPresent();
        let page = Constants.number.two;

        while (!isVisible) {
            await CaseAreasPage.caseAreas.nextPage.clickButton();
            StepLogger.subStep('Wait for page number to display');
            await WaitHelper.waitForElementToBeDisplayed(CaseAreasPage.caseAreas.currentPage(page.toString()).item);
            StepLogger.subStep('Check if subcategory is present');
            isVisible = await CaseAreasPage.caseAreas.item(subcategory).item.isPresent();
            if (isVisible) {
                break;
            } else {
                page++;
            }
        }
    }

    static async verifySubcategoryCreated(category: string, subcategory: string) {
        await CaseAreasPage.caseAreas.itemCategory(subcategory, category).verifyDisplayedStatus();
    }

    static async clickSubcategory(subcategory: string) {
        await CaseAreasPage.caseAreas.itemBookIcon(subcategory).clickButton();
    }

    static async verifyEditSubcategoryDialog(category: string, subcategory: string) {
        await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        await this.verifySelectedCategory(category);
        await this.verifySubcategoryName(subcategory);
        await this.verifyQueueSelectedOptionSubcategory(CaseAreasConstant.queueDropdown.emailNotification);
        await this.verifyStatusSelectedOptionSubcategory(CaseAreasConstant.statusDropdown.active);
        await this.verifyPrivateSelectedOptionSubcategory(CaseAreasConstant.privateDropdown.no);
        await CaseAreasPage.subcategoryDialog.reminder.verifyTextBoxContains(subcategory);
    }

    static async clickCancelSubcategory() {
        await CaseAreasPage.subcategoryDialog.cancel.clickButton();
    }

    static async verifyCategoryAndSubcategoryInDropdowns(category: string, subcategory: string) {
        await PageHelper.switchToDefaultContent();
        await NewCasePageHelper.selectCategoryOption(category);
        await NewCasePageHelper.verifyCategorySelectedOption(category);
        await NewCasePageHelper.selectSubCategoryOption(subcategory);
        await NewCasePageHelper.verifySubCategorySelectedOption(subcategory);
    }

    static async verifyCategoryNotDisplayedInDropdown(category: string) {
        await PageHelper.switchToDefaultContent();
        await NewCasePage.caseData.categoryOption(category).verifyHiddenStatus();
    }
}

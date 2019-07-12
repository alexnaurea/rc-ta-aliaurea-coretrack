import { StepLogger } from '../../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../../components/html/page-helper';
import { WaitHelper } from '../../../../../components/html/wait-helper';
import { Constants } from '../../../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../../../components/misc-utils/expectation-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';
import { CommonPage } from '../../../common/common.po';

import { KnowledgeBaseConstant } from './knowledge-base.constants';
import { KnowledgeBasePage } from './knowledge-base.po';

const { executeInIFrame } = PageHelper;

export class KnowledgeBaseHelper {

    static async verifyKnowledgeBasePageDisplayed() {
        await KnowledgeBasePage.title.verifyDisplayedStatus();
    }

    static async clickAddKnowledgeBaseButton(switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(KnowledgeBasePage.resourceOneIFrame);
        }

        await KnowledgeBasePage.buttons.addKnowledgeBase.clickButton();
    }

    static async verifyKnowledgeBaseArticle() {
        await PageHelper.switchToDefaultContent();
        await KnowledgeBasePage.knowledgeBaseArticle.dialogTitle.verifyDisplayedStatus();
    }

    static async verifyBaseArticleAttributes() {
        const { knowledgeBaseArticle } = KnowledgeBasePage;
        const frames =  [CommonPage.contentIFrameOnModal];
        await executeInIFrame(frames, async () => {
            await knowledgeBaseArticle.title.verifyDisplayedStatus();
            await knowledgeBaseArticle.description.verifyDisplayedStatus();
            await knowledgeBaseArticle.keywords.verifyDisplayedStatus();
            await knowledgeBaseArticle.category.verifyDisplayedStatus();
            await knowledgeBaseArticle.status.verifyDisplayedStatus();
            await knowledgeBaseArticle.active.verifyDisplayedStatus();
            await PageHelper.switchToiFrame(knowledgeBaseArticle.richEditorFrame);
            await knowledgeBaseArticle.editorTextArea.verifyDisplayedStatus();
        });
    }

    static async verifyStatusDropdownOptions() {
        const dropdown = KnowledgeBaseConstant.statusDropdown;
        const options = await PageHelper.getTextOfElements(
            await KnowledgeBasePage.knowledgeBaseArticle.allStatusOptions);
        await ExpectationHelper.verifyStringArrayContainsValue(options, dropdown.pending);
        await ExpectationHelper.verifyStringArrayContainsValue(options, dropdown.approved);
    }

    static async verifyActiveDropdownOptions() {
        const dropdown = KnowledgeBaseConstant.activeDropdown;
        const options = await PageHelper.getTextOfElements(
            await KnowledgeBasePage.knowledgeBaseArticle.allActiveOptions);
        await ExpectationHelper.verifyStringArrayContainsValue(options, dropdown.active);
        await ExpectationHelper.verifyStringArrayContainsValue(options, dropdown.inactive);
    }

    static async verifyBaseArticleButtons(toSwitch: boolean = false) {
        const article = KnowledgeBasePage.knowledgeBaseArticle;
        if (toSwitch) {
            await PageHelper.switchToiFrame(CommonPage.contentIFrameOnModal);
        }
        await article.save.verifyDisplayedStatus();
        await article.cancel.verifyDisplayedStatus();
    }

    static async clickStatusDropdown(toSwitch: boolean = false) {
        if (toSwitch) {
            await PageHelper.switchToiFrame(CommonPage.contentIFrameOnModal);
        }
        await KnowledgeBasePage.knowledgeBaseArticle.status.clickButton();
    }

    static async clickActiveDropdown(toSwitch: boolean = false) {
        if (toSwitch) {
            await PageHelper.switchToiFrame(CommonPage.contentIFrameOnModal);
        }
        await KnowledgeBasePage.knowledgeBaseArticle.status.clickButton();
    }

    static async clickArticleSaveButton(toSwitch: boolean = false) {
        if (toSwitch) {
            await PageHelper.switchToiFrame(CommonPage.contentIFrameOnModal);
        }
        await KnowledgeBasePage.knowledgeBaseArticle.save.clickButton();
    }

    static async verifyEnterTitleDialog(toSwitch: boolean = false) {
        if (toSwitch) {
            await PageHelper.switchToiFrame(CommonPage.contentIFrameOnModal);
        }
        await KnowledgeBasePage.knowledgeBaseArticle.enterTitle.verifyDisplayedStatus();
    }

    static async clickOkErrorDialog() {
        await KnowledgeBasePage.knowledgeBaseArticle.okButton.clickButton();
    }

    static async enterDescriptionCategoryStatusActive(name: string) {
        const { knowledgeBaseArticle } = KnowledgeBasePage;
        let category = Constants.EMPTY_STRING;
        const frames =  [CommonPage.contentIFrameOnModal];

        await executeInIFrame(frames, async () => {
            await knowledgeBaseArticle.description.sendKeys(name);
            await knowledgeBaseArticle
                .statusOption(KnowledgeBaseConstant.statusDropdown.pending)
                .clickButton();
            await knowledgeBaseArticle
                .activeOption(KnowledgeBaseConstant.activeDropdown.active)
                .clickButton();

            await knowledgeBaseArticle.searchCategoryBtn.clickButton();
            await PageHelper.switchToDefaultContentAndIFrame(knowledgeBaseArticle.categoryFrame);
            category = await knowledgeBaseArticle.firstCategory.getText();
            await knowledgeBaseArticle.firstCategory.clickButton();
            await knowledgeBaseArticle.selectCategory.clickButton();
        });
        return category;
    }

    static async verifyDescriptionCategoryStatusActive(name: string, category: string) {
        const { knowledgeBaseArticle } = KnowledgeBasePage;
        await PageHelper.switchToiFrame(CommonPage.contentIFrameOnModal);
        await knowledgeBaseArticle.description.verifyTextBoxContains(name);
        await knowledgeBaseArticle.category.verifyTextBoxContains(category);
        const status = await knowledgeBaseArticle.status.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(status, KnowledgeBaseConstant.statusDropdown.pending);
        const active = await knowledgeBaseArticle.active.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(active, KnowledgeBaseConstant.activeDropdown.active);
    }

    static async verifyDialogClosedAndBaseArticle(name?: string, checkTitle: boolean = false, checkDescription: boolean = false, checkCategory: boolean = false,
                                                  checkStatus: boolean = false, checkActive: boolean = false, category: string = Constants.EMPTY_STRING) {
        const { knowledgeBaseArticle } = KnowledgeBasePage;
        const frames =  [CommonPage.contentIFrameOnModal];

        await KnowledgeBasePage.knowledgeBaseArticle.enterTitle.verifyHiddenStatus();
        await KnowledgeBaseHelper.verifyKnowledgeBaseArticle();
        await executeInIFrame(frames, async () => {
            if (checkTitle) {
                await knowledgeBaseArticle.title.verifyTextBoxContains(name);
            }
            if (checkDescription) {
                await knowledgeBaseArticle.description.verifyTextBoxContains(name);
            }
            if (checkCategory) {
                await knowledgeBaseArticle.category.verifyTextBoxContains(category);
            }
            if (checkStatus) {
                const status = await knowledgeBaseArticle.status.getSelectedOptionText();
                await ExpectationHelper.verifyStringEqualTo(status, KnowledgeBaseConstant.statusDropdown.pending);
            }
            if (checkActive) {
                const active = await knowledgeBaseArticle.active.getSelectedOptionText();
                await ExpectationHelper.verifyStringEqualTo(active, KnowledgeBaseConstant.activeDropdown.active);
            }
         });
    }

    static async enterTitleCategoryStatusActive(name: string) {
        const { knowledgeBaseArticle } = KnowledgeBasePage;
        let category = Constants.EMPTY_STRING;
        const frames =  [CommonPage.contentIFrameOnModal];

        await executeInIFrame(frames, async () => {
            await knowledgeBaseArticle.title.sendKeys(name);
            await knowledgeBaseArticle
                .statusOption(KnowledgeBaseConstant.statusDropdown.pending)
                .clickButton();
            await knowledgeBaseArticle
                .activeOption(KnowledgeBaseConstant.activeDropdown.active)
                .clickButton();

            await knowledgeBaseArticle.searchCategoryBtn.clickButton();
            await PageHelper.switchToDefaultContentAndIFrame(knowledgeBaseArticle.categoryFrame);
            category = await knowledgeBaseArticle.firstCategory.getText();
            await knowledgeBaseArticle.firstCategory.clickButton();
            await knowledgeBaseArticle.selectCategory.clickButton();
        });

        return category;
    }

    static async verifyTitleCategoryStatusActive(name: string, category: string) {
        const { knowledgeBaseArticle } = KnowledgeBasePage;
        await PageHelper.switchToiFrame(CommonPage.contentIFrameOnModal);
        await knowledgeBaseArticle.title.verifyTextBoxContains(name);
        await knowledgeBaseArticle.category.verifyTextBoxContains(category);
        const status = await knowledgeBaseArticle.status.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(status, KnowledgeBaseConstant.statusDropdown.pending);
        const active = await knowledgeBaseArticle.active.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(active, KnowledgeBaseConstant.activeDropdown.active);
    }

    static async verifyEnterDescriptionDialog(toSwitch: boolean = false) {
        if (toSwitch) {
            await PageHelper.switchToiFrame(CommonPage.contentIFrameOnModal);
        }
        await KnowledgeBasePage.knowledgeBaseArticle.enterDescription.verifyDisplayedStatus();
    }

    static async enterTitleDescriptionStatusActive(name: string) {
        const { knowledgeBaseArticle } = KnowledgeBasePage;
        const frames =  [CommonPage.contentIFrameOnModal];

        await executeInIFrame(frames, async () => {
            await knowledgeBaseArticle.title.sendKeys(name);
            await knowledgeBaseArticle.description.sendKeys(name);
            await knowledgeBaseArticle
                .statusOption(KnowledgeBaseConstant.statusDropdown.pending)
                .clickButton();
            await knowledgeBaseArticle
                .activeOption(KnowledgeBaseConstant.activeDropdown.active)
                .clickButton();
        });
    }

    static async verifyTitleDescriptionStatusActive(name: string, expected: string = KnowledgeBaseConstant.statusDropdown.pending) {
        const { knowledgeBaseArticle } = KnowledgeBasePage;
        await PageHelper.switchToiFrame(CommonPage.contentIFrameOnModal);
        await knowledgeBaseArticle.title.verifyTextBoxContains(name);
        await knowledgeBaseArticle.description.verifyTextBoxContains(name);
        const status = await knowledgeBaseArticle.status.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(status, expected);
        const active = await knowledgeBaseArticle.active.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(active, KnowledgeBaseConstant.activeDropdown.active);
    }

    static async verifyEnterCategoryDialog(toSwitch: boolean = false) {
        if (toSwitch) {
            await PageHelper.switchToiFrame(CommonPage.contentIFrameOnModal);
        }
        await KnowledgeBasePage.knowledgeBaseArticle.enterCategory.verifyDisplayedStatus();
    }

    static async clickSearchCategory() {
        await PageHelper.switchToiFrame(CommonPage.contentIFrameOnModal);
        await KnowledgeBasePage.knowledgeBaseArticle.searchCategoryBtn.clickButton();
    }

    static async verifySelectCategoryDialog() {
        await PageHelper.switchToDefaultContent();
        await KnowledgeBasePage.knowledgeBaseArticle.selectCategoryDialog.verifyDisplayedStatus();
    }

    static async clickPlusIconCategory() {
        const { knowledgeBaseArticle } = KnowledgeBasePage;
        await PageHelper.switchToDefaultContentAndIFrame(knowledgeBaseArticle.categoryFrame);
        await knowledgeBaseArticle.plusCategory.clickButton();
    }

    static async verifyCategoryTreeExpanded() {
        const { knowledgeBaseArticle } = KnowledgeBasePage;
        await knowledgeBaseArticle.firstTreeChild.verifyDisplayedStatus();
    }

    static async selectCategoryChild() {
        const { knowledgeBaseArticle } = KnowledgeBasePage;
        const category = await knowledgeBaseArticle.firstTreeChild.getText();
        await knowledgeBaseArticle.firstTreeChild.clickButton();
        return category;
    }

    static async verifySelectedCategoryInDialog(category: string) {
        const current = await KnowledgeBasePage.knowledgeBaseArticle.selectedCategory.getAtttribute(HtmlHelper.attributes.value);
        await ExpectationHelper.verifyStringValueContain(current, category);
    }

    static async clickSelectCategoryDialog() {
        await KnowledgeBasePage.knowledgeBaseArticle.selectCategory.clickButton();
    }

    static async verifyCategoryDialogClosedAndSelected(category: string) {
        const { knowledgeBaseArticle } = KnowledgeBasePage;
        await PageHelper.switchToDefaultContent();
        await knowledgeBaseArticle.selectCategoryDialog.verifyHiddenStatus();
        await PageHelper.switchToiFrame(CommonPage.contentIFrameOnModal);
        const current = await knowledgeBaseArticle.category.getAtttribute(HtmlHelper.attributes.value);
        await ExpectationHelper.verifyStringValueContain(current, category);
    }

    static async selectCategory() {
        const { knowledgeBaseArticle } = KnowledgeBasePage;
        await PageHelper.switchToDefaultContentAndIFrame(knowledgeBaseArticle.categoryFrame);
        const category = await knowledgeBaseArticle.firstCategory.getText();
        await knowledgeBaseArticle.firstCategory.clickButton();
        return category;
    }

    static async clickCancelCategoryDialog() {
        await KnowledgeBasePage.knowledgeBaseArticle.cancelCategory.clickButton();
    }

    static async verifyCategoryDialogClosedAndNotSelected(category: string) {
        const { knowledgeBaseArticle } = KnowledgeBasePage;
        await PageHelper.switchToDefaultContent();
        await knowledgeBaseArticle.selectCategoryDialog.verifyHiddenStatus();
        await PageHelper.switchToiFrame(CommonPage.contentIFrameOnModal);
        const current = await knowledgeBaseArticle.category.getAtttribute(HtmlHelper.attributes.value);
        await ExpectationHelper.verifyStringValueNotContain(current, category);
    }

    static async clickClearCategory() {
        await KnowledgeBasePage.knowledgeBaseArticle.clearBtn.clickButtonJs();
    }

    static async clickCancelBaseArticle() {
        await KnowledgeBasePage.knowledgeBaseArticle.cancel.clickButton();
    }

    static async verifyKnowledgeBaseArticleHidden() {
        await PageHelper.switchToDefaultContent();
        await KnowledgeBasePage.knowledgeBaseArticle.dialogTitle.verifyHiddenStatus();
    }

    static async verifySelectedCategory(category: string) {
        const { knowledgeBaseArticle } = KnowledgeBasePage;
        const current = await knowledgeBaseArticle.category.getAtttribute(HtmlHelper.attributes.value);
        await ExpectationHelper.verifyStringValueContain(current, category);
    }

    static async enterTitleDescriptionText(name: string, enterText: boolean = true) {
        const { knowledgeBaseArticle } = KnowledgeBasePage;
        const frames =  [CommonPage.contentIFrameOnModal];

        await executeInIFrame(frames, async () => {
            await knowledgeBaseArticle.title.sendKeys(name);
            await knowledgeBaseArticle.description.sendKeys(name);
            if (enterText) {
                await PageHelper.switchToiFrame(knowledgeBaseArticle.richEditorFrame);
                await knowledgeBaseArticle.editorTextArea.sendKeys(name);
            }
        });
    }

    static async verifyTitleDescriptionText(name: string, checkText: boolean = true) {
        const { knowledgeBaseArticle } = KnowledgeBasePage;
        const frames =  [CommonPage.contentIFrameOnModal];

        await executeInIFrame(frames, async () => {
            await knowledgeBaseArticle.title.verifyTextBoxContains(name);
            await knowledgeBaseArticle.description.verifyTextBoxContains(name);
            if (checkText) {
                await PageHelper.switchToiFrame(knowledgeBaseArticle.richEditorFrame);
                await knowledgeBaseArticle.editorTextArea.verifyContainsText(name);
            }
        });
    }

    static async enterCategoryStatusActive(active: string = KnowledgeBaseConstant.activeDropdown.active) {
        const { knowledgeBaseArticle } = KnowledgeBasePage;
        let category = Constants.EMPTY_STRING;
        const frames =  [CommonPage.contentIFrameOnModal];

        await executeInIFrame(frames, async () => {
            await knowledgeBaseArticle
                .statusOption(KnowledgeBaseConstant.statusDropdown.approved)
                .clickButton();
            await knowledgeBaseArticle
                .activeOption(active)
                .clickButton();

            await knowledgeBaseArticle.searchCategoryBtn.clickButton();
            await PageHelper.switchToDefaultContentAndIFrame(knowledgeBaseArticle.categoryFrame);
            category = await knowledgeBaseArticle.firstCategory.getText();
            await knowledgeBaseArticle.firstCategory.clickButton();
            await knowledgeBaseArticle.selectCategory.clickButton();
        });
        return category;
    }

    static async verifyCategoryStatusActive(category: string, switchToFrame: boolean = true,
                                            active: string = KnowledgeBaseConstant.activeDropdown.active) {
        const { knowledgeBaseArticle } = KnowledgeBasePage;
        if (switchToFrame) {
            await PageHelper.switchToiFrame(CommonPage.contentIFrameOnModal);
        }

        await knowledgeBaseArticle.category.verifyTextBoxContains(category);
        const status = await knowledgeBaseArticle.status.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(status, KnowledgeBaseConstant.statusDropdown.approved);
        const current = await knowledgeBaseArticle.active.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(current, active);
    }

    static async verifyBaseArticleClosedAndCreated(name: string) {
        await KnowledgeBaseHelper.verifyKnowledgeBaseArticleHidden();
        await PageHelper.switchToDefaultContentAndIFrame(KnowledgeBasePage.resourceOneIFrame);
        await KnowledgeBaseHelper.sortByCreatedDate();
        await KnowledgeBasePage.knowledgeBase.item(name).verifyDisplayedStatus();
    }

    static async sortByCreatedDate() {
        StepLogger.subStep('Order by creation date');
        await KnowledgeBasePage.knowledgeBase.createdBtn.clickLinkJsNoWait();
        StepLogger.subStep('Wait for asc arrow');
        await WaitHelper.waitForElementToBePresent(KnowledgeBasePage.knowledgeBase.ascArrow.item);
        await KnowledgeBasePage.knowledgeBase.createdBtn.clickLinkJsNoWait();
        StepLogger.subStep('Wait for desc arrow');
        await WaitHelper.waitForElementToBePresent(KnowledgeBasePage.knowledgeBase.descArrow.item);
    }

    static async clickItemAddKnowledgeBaseButton(name: string, switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(KnowledgeBasePage.resourceOneIFrame);
        }
        await KnowledgeBaseHelper.sortByCreatedDate();
        await KnowledgeBasePage.knowledgeBase.itemBookIcon(name).clickButton();
    }

    static async verifyEditKnowledgeBaseArticle(name: string, category: string) {
        await KnowledgeBaseHelper.verifyKnowledgeBaseArticle();
        await KnowledgeBaseHelper.verifyTitleDescriptionStatusActive(name, KnowledgeBaseConstant.statusDropdown.approved);
        await KnowledgeBaseHelper.verifyCategoryStatusActive(category, false);
    }
}

import { StepLogger } from '../../../../../../core/logger/step-logger';
import { DropDownHelper } from '../../../../../components/html/dropdown-helper';
import { PageHelper } from '../../../../../components/html/page-helper';
import { PageHelperExtension } from '../../../../../components/html/page-helper-extended';
import { WaitHelper } from '../../../../../components/html/wait-helper';
import { Constants } from '../../../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../../../components/misc-utils/expectation-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';
import { CommonPage } from '../../../common/common.po';
import { HomePageHelper } from '../../../home-page/home-page.helper';

import { ProductsConstants } from './products.constants';
import { ProductsPage } from './products.po';

export class ProductsHelper {

    static async verifyProductsManagePageDisplayed() {
        StepLogger.subVerification('Verify Products Manage Page Displayed');
        await ProductsPage.manageProductPage.verifyDisplayedStatus();
    }

    static async verifyProductPageItemsGrid() {
        StepLogger.subVerification('Verify Product Page Items Grid');
        const label = ProductsPage.productPageItemsGrid;
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await label.product.verifyDisplayedStatus();
            await label.type.verifyDisplayedStatus();
            await label.productCode.verifyDisplayedStatus();
            await label.gen.verifyDisplayedStatus();
            await label.ser.verifyDisplayedStatus();
            await label.int.verifyDisplayedStatus();
            await label.active.verifyDisplayedStatus();
            await label.description.verifyDisplayedStatus();
        });
    }

    static async verifyButtons() {
        StepLogger.subVerification('Verify Buttons');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            const label = ProductsPage.buttons;
            await label.refresh.verifyDisplayedStatus();
            await label.addProduct.verifyDisplayedStatus();
            await label.search.verifyDisplayedStatus();
            await label.grouping.verifyDisplayedStatus();
            await label.exportToExcel.verifyDisplayedStatus();
            await label.exportToWord.verifyDisplayedStatus();
        });
    }

    static async clickOnAddProduct() {
        StepLogger.subStep('Click On Add Product');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await ProductsPage.buttons.addProduct.clickButton();
        });
    }

    static async verifyNewProductScreen() {
        StepLogger.subVerification('Verify New Product Screen');
        await ProductsPage.newProductScreen.verifyDisplayedStatus();
    }

    static async verifyNewProductScreenClosed() {
        StepLogger.subVerification('Verify New Product Screen Closed');
        await WaitHelper.waitForElementToBeHidden(ProductsPage.newProductScreen.item);
        await ProductsPage.newProductScreen.verifyHiddenStatus();
    }

    static async enterValuesInSearchText(value: string) {
        StepLogger.subStep('Enter Values In Search Text');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await ProductsPage.buttons.searchText.sendKeys(value);
        });
    }

    static async verifyEnteredValueInSearchText() {
        StepLogger.subVerification('Verify Entered Value In Search Text');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await ProductsPage.enteredSearchValue().verifyDisplayedStatus();
        });
    }

    static async clickOnSearchIcon() {
        StepLogger.subStep('Click On Search Icon');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await ProductsPage.buttons.search.clickLink();
        });
    }

    static async verifySearchResults(value: string) {
        StepLogger.subVerification('Verify Search Results');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await ProductsPage.searchResults(value).verifyDisplayedStatus();
        });
    }

    static async verifyTypeDropDown() {
        StepLogger.subStep('Verify Type Drop Down');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ProductsPage.typeDropDown.verifyPresentStatus();
        });
    }

    static async clickOnSaveOnNewProductScreen() {
        StepLogger.subStep('Click On Save On New Product Screen');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await WaitHelper.waitForElementToBeDisplayed(ProductsPage.newProductScreenProperties.save.item);
            await ProductsPage.newProductScreenProperties.save.clickButton();
        });
    }

    static async verifyValidationErrorMessages() {
        StepLogger.subVerification('Verify Validation Error Messages');
        const label = ProductsPage.newProductScreenProperties;
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await label.codeIdErrorMessage.verifyPresentStatus();
            await label.nameErrorMEssage.verifyPresentStatus();
            await label.descriptionErrorMessage.verifyPresentStatus();
        });
    }

    static async enterNameOnProductScreen(name: string) {
        StepLogger.subStep('Enter Name On Product Screen');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ProductsPage.newProductScreenProperties.name.sendKeys(name);
        });
    }

    static async verifyEnteredName(name: string) {
        StepLogger.subVerification('Verify Entered Name');
        const value = HtmlHelper.attributes.value;
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ExpectationHelper.verifyAttributeContains(ProductsPage.newProductScreenProperties.name,
                value, name);
        });
    }

    static async enterDescriptionOnProductScreen(description: string) {
        StepLogger.subStep('Enter Description On Product Screen');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await PageHelperExtension.switchToiFrames([ProductsPage.descriptionIframe]);
            await ProductsPage.newProductScreenProperties.description.clickLink();
            await ProductsPage.newProductScreenProperties.description.sendKeys(description);
        });
    }

    static async verifyEnteredDescription(description: string) {
        StepLogger.subVerification('Verify Entered Description');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await PageHelperExtension.switchToiFrames([ProductsPage.descriptionIframe]);
            await ProductsPage.enteredDescription(description).verifyDisplayedStatus();
        });
    }

    static async enterCodeIdOnProductScreen(codeId: string) {
        StepLogger.subStep('Enter CodeId On Product Screen');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ProductsPage.newProductScreenProperties.codeId.sendKeys(codeId);
        });
    }

    static async verifyEnteredCodeId(codeId: string) {
        StepLogger.subVerification('Verify Entered Code Id');
        const value = HtmlHelper.attributes.value;
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ExpectationHelper.verifyAttributeContains(ProductsPage.newProductScreenProperties.codeId,
                value, codeId);
        });
    }

    static async clickOnEdit() {
        StepLogger.subStep('Click On Edit');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await ProductsPage.buttons.editButton.clickLink();
        });
    }

    static async verifyEditProductScreen() {
        StepLogger.subVerification('Verify Edit Product Screen');
        await ProductsPage.newProductScreen.verifyDisplayedStatus();
    }

    static async verifyEditProductScreenClosed() {
        StepLogger.subVerification('Verify Edit Product Screen Closed');
        await WaitHelper.waitForElementToBeHidden(ProductsPage.newProductScreen.item);
        await ProductsPage.newProductScreen.verifyHiddenStatus();
    }

    static async selectATypeFromDropDown(value: string) {
        StepLogger.subStep('Select a Type from Drop Down');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await DropDownHelper.selectOptionByText(ProductsPage.typeDropDown, value);
        });
    }

    static async clickOnCancelOnProductScreen() {
        StepLogger.subStep('Click On Cancel On Product Screen');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await WaitHelper.waitForElementToBeDisplayed(ProductsPage.newProductScreenProperties.cancelButton.item);
            await ProductsPage.newProductScreenProperties.cancelButton.clickButton();
        });
    }

    static async verifyWarningMessagePopup() {
        StepLogger.subVerification('Verify Warning Message Popup');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ProductsPage.newProductScreenProperties.warningMessagePopup.verifyDisplayedStatus();
        });
    }

    static async clickOkOnWarningMessagePopup() {
        StepLogger.subStep('Click Ok On Warning Message Popup');
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ProductsPage.newProductScreenProperties.okButtonOnWarning.clickButton();
        });
    }

    static async searchText(textToSearch: string) {
        await ProductsHelper.enterValuesInSearchText(textToSearch);
        await ProductsHelper.clickOnSearchIcon();
    }

    static async toggleGenericButtonToYes() {
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await WaitHelper.waitForElementToBeDisplayed(ProductsPage.newProductScreenProperties.genericButton.item);
            await ProductsPage.newProductScreenProperties.genericButton.scrollToElement();
            const noOptionDisplayed = await ProductsPage.newProductScreenProperties.genericButtonLabelNo.item.isDisplayed();
            if (noOptionDisplayed) {
                StepLogger.subStep('Click on Generic button');
                await ProductsPage.newProductScreenProperties.genericButton.clickButton();
            }
        });
    }

    static async verifyGenericButtonSetAsYes() {
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ProductsPage.newProductScreenProperties.genericButtonLabelYes.verifyDisplayedStatus();
        });
    }

    static async editInsuranceProductToGeneric() {
        await HomePageHelper.navigateToProductsPage();
        await ProductsHelper.verifyProductsManagePageDisplayed();
        const textToSearch = ProductsConstants.productCategory.insurance;
        await ProductsHelper.searchText(textToSearch);
        await ProductsHelper.verifySearchResults(textToSearch);
        await ProductsHelper.clickOnEdit();
        await ProductsHelper.verifyEditProductScreen();
        const product = await ProductsHelper.getProductName();
        await PageHelper.switchToDefaultContent();
        await ProductsHelper.toggleGenericButtonToYes();
        await ProductsHelper.verifyGenericButtonSetAsYes();
        await ProductsHelper.clickOnSaveOnNewProductScreen();
        return product.toLowerCase();
    }

    static async getProductName() {
        let product: string;
        await PageHelperExtension.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await WaitHelper.waitForElementToBeDisplayed(ProductsPage.title.productEditionPage.item);
            product = await ProductsPage.title.productEditionPage.getText();
        });
        return product.substring(Constants.number.nine, product.length - Constants.number.one);
    }
}

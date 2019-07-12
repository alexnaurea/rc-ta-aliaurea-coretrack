import { browser } from 'protractor';

import { StepLogger } from '../../../../core/logger/step-logger';
import { AlertHelper } from '../../../components/html/alert-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { HomePage } from '../home-page/home-page.po';

import { CommonPage } from './common.po';

export class CommonPageHelper {

    static async switchToWindowPopup(no: number) {
        StepLogger.subStep('Switch to Window Popup');
        const winHandles = browser.getAllWindowHandles();
        await winHandles.then(async function (handles) {
            const popUpWindow = handles[no];
            await browser.switchTo().window(popUpWindow);
        });
    }

    static async closeWindowPopupAndSwitchToParentWindow() {
        await browser.getAllWindowHandles().then(async function (handles) {
            const secondWindowHandle = handles[1];
            const firstWindowHandle = handles[0];
            await browser.switchTo().window(secondWindowHandle)
                .then(async function () {
                    StepLogger.subStep('Close Window Popup');
                    await browser.close();
                }).then(async function () {
                    StepLogger.subStep('Switch to Parent Window');
                    await browser.switchTo().window(firstWindowHandle);
                });
        });
    }

    static async signOffApp() {
        await PageHelper.switchToDefaultContent();
        StepLogger.subStep('Click User Name');
        await HomePage.toolbar.username.clickButton();
        StepLogger.subStep('Click "sign off".');
        await HomePage.toolbar.signOff.clickLink();
        await AlertHelper.acceptAlertIfExists();
    }

    static async clickOnGlobalSearchButton() {
        StepLogger.subStep('Click on global search button');
        await WaitHelper.waitForPageToStable();
        await WaitHelper.waitForElementToBeClickable(CommonPage.globalElements.globalSearchButton.item);
        await CommonPage.globalElements.globalSearchButton.clickButtonJs();
    }

    static async verifyGlobalTextboxDisplayed() {
        await WaitHelper.waitForElementToBeDisplayed(CommonPage.globalElements.globalTextField.item);
        await CommonPage.globalElements.globalTextField.verifyDisplayedStatus();
    }

    static async clickOnGlobalDropdown() {
        StepLogger.subStep('Click on global dropdown');
        await CommonPage.globalElements.globalDropdown.hoverOverAndClick();
    }

    static async selectItemFromGlobalDropdown(item: string) {
        StepLogger.subStep(`Select ${item} from the global dropdown`);
        await this.clickOnGlobalDropdown();
        await CommonPage.globalElements.globalDropdownItemByText(item).hoverOverAndClick();
    }

    static async verifySelectedItemFromGlobalDropdown(item: string) {
        const text = await CommonPage.globalElements.globalTextField.getAtttribute('placeholder');
        await ExpectationHelper.verifyStringValueContain(text, item);
    }

    static async typeValueInGlobalTextFieldAndClickSearchIcon(text: string) {
        await CommonPage.globalElements.globalTextField.hoverOverAndClick();
        await CommonPage.globalElements.globalTextField.sendKeys(text);
        await this.clickOnGlobalSearchButton();
    }
}

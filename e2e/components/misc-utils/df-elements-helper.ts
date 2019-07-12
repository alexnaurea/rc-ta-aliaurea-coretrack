/**
 * This is a decorator function for a web element, pass in an element and get back
 * an extended function element
 * @param locator
 * @param name
 */
import { by, element, ElementArrayFinder, ElementFinder, Locator } from 'protractor';

import { CheckboxHelper } from '../html/checkbox-helper';
import { DropDownHelper } from '../html/dropdown-helper';
import { ElementHelper } from '../html/element-helper';
import { PageHelper } from '../html/page-helper';
import { TextBoxHelper } from '../html/textbox-helper';

import { ExpectationHelper } from './expectation-helper';
import { ExpectationHelperTwo } from './expectation-helper-two';

export function $(locator: Locator, name: string) {
    return new DfElement(locator, name);
}

export function $cssContainingText(cssSelector: string, text: string | RegExp): DfElement {
    return $(by.cssContainingText(cssSelector, text), String(text));
}

export function $$(locator: Locator, name: string) {
    return new DfElements(locator, name);
}

export class DfElement {

    readonly item: ElementFinder;

    constructor(locator: Locator, public name: string) {
        /* tslint:disable-next-line:no-element-outside-page-class */
        this.item = element(locator); // it is a helper class, so need to disable lint rule
    }

    async clickButtonJs() {
        await ElementHelper.clickButtonJs(this);
    }

    async clickButton() {
        await ElementHelper.clickButton(this);
    }

    async clickLink() {
        await ElementHelper.clickLink(this);
    }

    async clickCheckbox() {
        await ElementHelper.clickCheckbox(this);
    }

    async markCheckbox(flag = true) {
        await CheckboxHelper.markCheckbox(this, flag);
    }

    async verifyCheckboxChecked() {
        return await ExpectationHelper.verifyCheckboxIsChecked(this);
    }

    async verifyCheckboxNotChecked() {
        return await ExpectationHelperTwo.verifyCheckboxIsNotChecked(this);
    }

    async clickLinkJs() {
        await ElementHelper.clickLinkJs(this);
    }

    async doubleClick() {
        await PageHelper.doubleClick(this);
    }

    async sendKeys(text: string, sendEnter: boolean = false) {
        await ElementHelper.sendKeys(this, text, sendEnter);
    }

    async clearText() {
        await TextBoxHelper.clearText(this.item);
    }

    async sendKeysIfTextIsDefined(text: string) {
        await ElementHelper.sendKeysIfTextIsDefined(this, text);
    }

    async verifyDisplayedStatus() {
        await ExpectationHelper.verifyDisplayedStatus(this);
    }

    async isElementDisplayed() {
        return await PageHelper.isElementDisplayed(this.item, false);
    }

    async verifyAttributeContains(attribute: string, expectedValue: string) {
        await ExpectationHelper.verifyAttributeContains(this, attribute, expectedValue);
    }

    async verifyPresentStatus() {
        await ExpectationHelper.verifyPresentStatus(this);
    }

    async getCssValue(attribute: string) {
        return await PageHelper.getCssValue(this, attribute);
    }

    async verifyTextEntered(expected: string) {
        return ElementHelper.verifyTextEntered(this, expected);
    }

    async hoverOver() {
        await ElementHelper.actionHoverOver(this);
    }

    async hoverOverAndClick() {
        await this.hoverOver();
        await this.clickButton();
    }

    async getText() {
        return await ElementHelper.getText(this);
    }

    async getAtttribute(attribute: string) {
        return await ElementHelper.getAttributeValue(this, attribute);
    }

    async scrollToElement() {
        await ElementHelper.scrollToElement(this);
    }

    async verifyHiddenStatus() {
        await ExpectationHelper.verifyHiddenStatus(this);
    }

    async verifyContainsText(expected: string) {
        await ExpectationHelper.verifyContainsText(this, expected);
    }

    async verifyTextBoxContains(expected: string) {
        await ExpectationHelper.verifyTextBoxContains(this, expected);
    }

    async getSelectedOptionText() {
        return await DropDownHelper.getTheSelectedOptionText(this);
    }

    async selectOptionByVal(optionVal: string) {
        return await DropDownHelper.selectOptionByVal(this, optionVal);
    }

    async clickLinkJsNoWait() {
        await ElementHelper.clickUsingJsNoWait(this);
    }

    async sendKeysIfPresent(text: string, sendEnter: boolean = false) {
        await ElementHelper.sendKeysIfPresent(this, text, sendEnter);
    }

    async getAltAttribute() {
        return await ElementHelper.getAttributeValue(this, 'alt');
    }
}

export class DfElements {

    readonly item: ElementArrayFinder;

    constructor(locator: Locator, public name: string) {
        this.item = element.all(locator);
    }

    /**
     * Click first button from the list of elements
     */
    async clickFirstButton() {
        await ElementHelper.clickFirstButton(this);
    }

    /**
     * Click nth button from the list of elements
     * @param index
     */
    async clickNthButton(index: number) {
        await ElementHelper.clickNthButton(this, index);
    }
}

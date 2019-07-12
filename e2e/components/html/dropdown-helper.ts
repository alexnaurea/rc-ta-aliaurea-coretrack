import { By } from 'protractor';

import { StepLogger } from '../../../core/logger/step-logger';
import { CommonPage } from '../../page-objects/pages/common/common.po';
import { DropdownField } from '../../page-objects/pages/models/dropdown-field';
import { DfElement, DfElements } from '../misc-utils/df-elements-helper';
import { HtmlHelper } from '../misc-utils/html-helper';

import { WaitHelper } from './wait-helper';

// Helper class needs to interact with elements outside po file
/* tslint:disable:no-element-outside-page-class */
export class DropDownHelper {

    static async selectOptionByVal(target: DfElement, optionVal: string) {
        const option = target.item.element(By.css(this.getCssForOptionValue(optionVal)));
        await option.click();
    }

    static getXPathForOptionValue(optionVal: string) {
        return `//option[normalize-space(.)="${optionVal}"]`;
    }

    static getCssForOptionValue(optionVal: string) {
        return `option[value="${optionVal}"]`;
    }

    static async selectOptionByText(target: DfElement, optionVal: string) {
        return target.item.element(By.xpath(this.getXPathForOptionValue(optionVal))).click();
    }

    static getDropdownOptions(target: DfElements) {
        return target.item.all(By.tagName(HtmlHelper.tags.option));
    }

    static async getTheSelectedOptionText(target: DfElement) {
        StepLogger.subStep('Wait for element to be displayed');
        await WaitHelper.waitForElementToBeDisplayed(target.item);
        StepLogger.subStep('Get selected option');
        return await target.item.element(By.css('option:checked')).getText();
    }

    /**
     * Select dropdown option by text
     * Expects dropdown element located by any locator other than xpath
     * @param target
     * @param text
     */
    static async selectOptionByCssText(target: DfElement, text: string) {
        const ele = CommonPage.getDropdownOptionByCssText(target, text).item;
        await WaitHelper.waitForElementToBeDisplayed(ele);
        await ele.click();
    }

    /**
     * Select nth dropdown option
     * Expects dropdown element located by any locator other than xpath
     * @param {DfElement} target
     * @param {number} index
     */
    static async selectNthOptionByCss(target: DfElement, index: number) {
        const elements = CommonPage.getDropdownOptionsByText(target, /\w+/).item;
        await WaitHelper.waitUntilElementsCountIsGreaterOrEqual(elements, index + 1);
        await elements.get(index).click();
    }

    /**
     * Helps in selecting dropdown-option by either text or index
     * It uses named parameters for accessing text or index passed to the method
     * for selecting dropdown option by text, pass { text: 'SOME_TEXT'}
     * for selecting dropdown option by index, pass { index: SOME_NUMBER }
     * Expects dropdown element located by any locator other than xpath
     * @param {DfElement} target
     * @param {string} text
     * @param {number} index
     */
    static async selectSpecificOrNthOptionByCss(target: DfElement,
                                                { text, index }: DropdownField) {
        if (text) {
            await this.selectOptionByCssText(target, text);
        } else  {
            await this.selectNthOptionByCss(target, index);
        }
    }
}

// Disabled max file line count rule as file has many relevant functions
/*tslint:disable:max-file-line-count */
import { assert } from 'chai';
import { ElementFinder } from 'protractor';

import { StepLogger } from '../../../core/logger/step-logger';
import { CommonPage } from '../../page-objects/pages/common/common.po';
import { DropdownField } from '../../page-objects/pages/models/dropdown-field';
import { AlertHelper } from '../html/alert-helper';
import { CheckboxHelper } from '../html/checkbox-helper';
import { ElementHelper } from '../html/element-helper';
import { PageHelper } from '../html/page-helper';
import { TextBoxHelper } from '../html/textbox-helper';
import { WaitHelper } from '../html/wait-helper';

import { Constants } from './constants';
import { DfElement, DfElements } from './df-elements-helper';
import { HtmlHelper } from './html-helper';
import { ValidationsHelper } from './validation-helper';

const { attributes } = HtmlHelper;

export class ExpectationHelper {
    /**
     * Verify whether an element is displayed or not
     * @param targetElement
     */
    static async verifyDisplayedStatus(targetElement: DfElement) {
        StepLogger.subVerification(`${targetElement.name} should display`);
        await assert.equal(await WaitHelper.waitForElementToBeDisplayed(targetElement.item),
            true, ValidationsHelper.getDisplayedValidation(targetElement.name));
    }

    static async verifyHiddenStatus(targetElement: DfElement) {
        StepLogger.subVerification(`${targetElement.name} should not display`);
        await assert.equal(await WaitHelper.waitForElementToBeHidden(targetElement.item),
            true, ValidationsHelper.getNotDisplayedValidation(targetElement.name));
    }

    /**
     * Verify whether an element is present or not
     * @param targetElement
     */
    static async verifyPresentStatus(targetElement: DfElement) {
        StepLogger.subVerification(`${targetElement.name} should be present`);
        await assert.equal(await WaitHelper.waitForElement(targetElement.item),
            true, ValidationsHelper.getPresentValidation(targetElement.name));
    }

    /**
     * Verify whether an element is displayed or not
     * @param targetElement
     */

    static async verifyNotDisplayedStatus(targetElement: DfElement) {
        StepLogger.subVerification(`${targetElement.name} should not display`);
        await assert.equal(await WaitHelper.waitForElementToBeHidden(targetElement.item), false,
            ValidationsHelper.getNotDisplayedValidation(targetElement.name));
    }

    static async verifyNotPresentStatus(targetElement: ElementFinder, name: string) {
        StepLogger.subVerification(`${name} should not display`);
        await expect(await PageHelper.isElementPresent(targetElement, false))
            .toBe(false, ValidationsHelper.getNotDisplayedValidation(name));
    }

    /**
     * Verify whether an element is hidden or not
     * @param targetElement
     */
    static async verifyCheckboxIsChecked(targetElement: DfElement) {
        StepLogger.subVerification(`${targetElement.name} should be checked`);
        const checkBoxStatus = await CheckboxHelper.isCheckboxChecked(targetElement);
        await assert.equal(checkBoxStatus, true,
            ValidationsHelper.getCheckedValidation(targetElement.name));
    }

    /**
     * Verify whether an element is hidden or not
     * @param targetElement
     */
    static async verifyRemovedStatus(targetElement: DfElement) {
        StepLogger.subVerification(`${targetElement.name} should be removed`);
        await assert.equal(await WaitHelper.waitForElementToBeHidden(targetElement.item), true,
            ValidationsHelper.getNotDisplayedValidation(targetElement.name));
    }

    /**
     * Verify whether an element is enabled or not
     * @param targetElement
     */
    static async verifyEnabledStatus(targetElement: DfElement) {
        StepLogger.subVerification(`${targetElement.name} should be enabled`);
        await assert.equal(await WaitHelper.waitForElementToBeEnabled(targetElement.item), true,
            ValidationsHelper.getEnabledValidation(targetElement.name));
    }

    /**
     * Verify whether an element is enabled or not
     * @param targetElement
     */
    static async verifySelectedStatus(targetElement: DfElement) {
        StepLogger.subVerification(`${targetElement.name} should be selected`);
        await assert.equal(await WaitHelper.waitForElementToBeSelected(targetElement.item), true,
            ValidationsHelper.getSelectedValidation(targetElement.name));
    }

    /**
     * Verify that TextBox has the exact text
     * @param targetElement
     * @param expectedValue
     */
    static async verifyTextBoxContains(targetElement: DfElement, expectedValue: string) {
        StepLogger.subVerification(`${targetElement.name} should contain ${expectedValue} value`);
        const val = await ElementHelper.getAttributeValue(targetElement,
            HtmlHelper.attributes.value);
        await assert.equal(val.toLowerCase() === expectedValue.toLowerCase(), true,
            ValidationsHelper.getStringToContain(val, expectedValue));
    }

    /**
     * Verify that element has the exact text
     * @param targetElement
     * @param expectedValue
     */
    static async verifyText(targetElement: DfElement, expectedValue: string) {
        StepLogger.subVerification(`${targetElement.name} should have exact text as ${expectedValue} `);
        await assert.equal((await ElementHelper.getText(targetElement)).toLowerCase(), expectedValue.toLowerCase(),
            ValidationsHelper.getFieldShouldHaveValueValidation(targetElement.name, expectedValue));
    }

    /**
     * Verify that textbox element has the exact value
     * @param targetElement
     * @param expectedValue
     */
    static async verifyValue(targetElement: DfElement, expectedValue: string) {
        StepLogger.subVerification(`${targetElement.name} should have exact value as ${expectedValue} `);
        await assert.equal(await TextBoxHelper.hasValue(targetElement, expectedValue), true,
            ValidationsHelper.getFieldShouldHaveValueValidation(targetElement.name, expectedValue));
    }

    /**
     * Verify that element contains the text
     * @param targetElement
     * @param expectedValue
     */
    static async verifyTextContains(targetElement: DfElement, expectedValue: string) {
        StepLogger.subVerification(`${targetElement.name} should contain ${expectedValue} value`);
        await assert.include((await ElementHelper.getText(targetElement)).toLowerCase(), expectedValue.toLowerCase(),
            ValidationsHelper.getStringToContain(targetElement.name, expectedValue));
    }

    /**
     * Verify that value is grater than other value
     * @param actualValue
     * @param expectedValue
     */
    static async verifyValueGraterThan(actualValue: number, expectedValue: number) {
        StepLogger.subVerification(`${actualValue} should be grater than ${expectedValue} value`);
        await assert.isAbove(actualValue, expectedValue,
            ValidationsHelper.getGraterThanValidation(actualValue, expectedValue));
    }

    /**
     * Verify that value is less or equal than other value
     * @param actualValue
     * @param expectedValue
     */
    static async verifyValueLessOrEqualTo(actualValue: number, expectedValue: number) {
        StepLogger.subVerification(`${actualValue} should be less ot equal to ${expectedValue} value`);
        await assert.isAtMost(actualValue, expectedValue,
            ValidationsHelper.getLessThanOrEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that value is less than other value
     * @param actualValue
     * @param expectedValue
     */
    static async verifyValueLessThan(actualValue: number, expectedValue: number) {
        StepLogger.subVerification(`${actualValue} should be less than ${expectedValue} value`);
        await assert.isBelow(actualValue, expectedValue,
            ValidationsHelper.getLessThanValidation(actualValue, expectedValue));
    }

    /**
     * Verify that value is less or equal than other value
     * @param actualValue
     * @param expectedValue
     */
    static async verifyValueGreaterOrEqualTo(actualValue: number, expectedValue: number) {
        StepLogger.subVerification(`${actualValue} should be greater or equal to ${expectedValue} value`);
        await assert.isAtLeast(actualValue, expectedValue,
            ValidationsHelper.getGreaterThanOrEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that value is equal to other value
     * @param actualValue
     * @param expectedValue
     */
    static async verifyValueEqualTo(actualValue: number, expectedValue: number) {
        StepLogger.subVerification(`${actualValue} should be equal to  ${expectedValue} value`);
        await assert.equal(actualValue, expectedValue,
            ValidationsHelper.getEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that value is not equal to other value
     * @param actualValue
     * @param expectedValue
     */
    static async verifyValueNotEqualTo(actualValue: string, expectedValue: string) {
        StepLogger.subVerification(`${actualValue} should be not equal to ${expectedValue} value`);
        await assert.notEqual(actualValue, expectedValue,
            ValidationsHelper.getNotEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that checkbox is checked
     * @param targetElement
     */
    static async verifyCheckBoxNotSelected(targetElement: DfElement) {
        const actualValue = await targetElement.item.isSelected();
        StepLogger.subVerification(`${targetElement.name} should not be selected`);
        await assert.equal(actualValue, false,
            ValidationsHelper.getUnSelectedValidation(targetElement.name));
    }

    /**
     * Verify that attribute values is equal to expected Value
     * @param targetElement
     * @param attribute
     * @param expectedValue
     */
    static async verifyAttributeValue(targetElement: DfElement, attribute: string, expectedValue: string) {
        const actualValue = await ElementHelper.getAttributeValue(targetElement, attribute);
        StepLogger.subVerification(`${actualValue} should be equal to  ${expectedValue} value`);
        await assert.equal(actualValue, expectedValue,
            ValidationsHelper.getStringEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that attribute values is equal to expected Value
     * @param targetElement
     * @param attribute
     * @param expectedValue
     */
    static async verifyAttributeValueNotToBe(targetElement: DfElement,
                                             attribute: string,
                                             expectedValue: string) {
        const actualValue = await ElementHelper.getAttributeValue(targetElement, attribute);
        StepLogger.subVerification(`${actualValue} should not be equal to  ${expectedValue} value`);
        await assert.notEqual(actualValue, expectedValue,
            ValidationsHelper.getNotEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that value is equal to other value
     * @param targetElement
     * @param actualValue
     * @param expectedValue
     */
    static async verifyStringValueEqualTo(targetElement: DfElement, actualValue: string,
                                          expectedValue: string) {
        const validationMessage = ValidationsHelper.getStringEqualValidationWithElementName(actualValue,
            expectedValue, targetElement.name);
        StepLogger.subVerification(validationMessage);
        await assert.equal(actualValue, expectedValue, validationMessage);
    }

    /**
     * Verify that value contains to other value
     * @param actualValue
     * @param expectedValue
     */
    static async verifyStringValueContain(actualValue: string, expectedValue: string) {
        StepLogger.subVerification(`'${actualValue}' should contains  '${expectedValue}' value`);
        await assert.include(actualValue, expectedValue,
            ValidationsHelper.getStringEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify string with 'or' operator
     * @param actualValue
     * @param expectedValues
     */
    static async verifyStringValueContainsWithOrOperator(actualValue: string, ...expectedValues: string[]) {
        StepLogger.subVerification(`'${actualValue}' should contain one of '${expectedValues.toString()}' value`);
        const matchedItems = expectedValues.filter((expected: string) => actualValue.includes(expected));
        await assert.include(actualValue, matchedItems[0],
            ValidationsHelper.getStringToContainInArray(actualValue, ...expectedValues));
    }

    /**
     * Verify that value not contains to other value
     * @param actualValue
     * @param expectedValue
     */
    static async verifyStringValueNotContain(actualValue: string, expectedValue: string) {
        StepLogger.subVerification(`'${actualValue}' should not contains '${expectedValue}' value`);
        await assert.notInclude(actualValue, expectedValue,
            ValidationsHelper.getStringToNotContain(actualValue, expectedValue));
    }

    /**
     * Verify that actual value contains expected value
     * @param actualValue
     * @param expectedValue
     */
    static async verifyActualValueContainsExpectedValue(actualValue: string, expectedValue: string) {
        StepLogger.subVerification(`${actualValue} should contain ${expectedValue} value`);
        await assert.include(actualValue, expectedValue.toLowerCase(),
            ValidationsHelper.getStringToContain(actualValue, expectedValue));
    }

    /**
     * Verify that element contains text
     * @param targetElement
     * @param expectedValue
     */
    static async verifyContainsText(targetElement: DfElement, expectedValue: string) {
        StepLogger.subVerification(`${targetElement.name} should have contains text as ${expectedValue} `);
        await WaitHelper.waitForElementToBeDisplayed(targetElement.item);
        await assert.include((await ElementHelper.getText(targetElement)).toLowerCase(), expectedValue.toLowerCase(),
            ValidationsHelper.getStringToContain(targetElement.name, expectedValue));
    }

    /**
     * Verify that value is not equal to other value
     * @param actualValue
     * @param expectedValue
     */
    static async verifyStringValueNotEqualTo(actualValue: string, expectedValue: string) {
        StepLogger.subVerification(`${actualValue} should be equal to  ${expectedValue} value`);
        await assert.notEqual(actualValue, expectedValue,
            ValidationsHelper.getNotEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that String is equal to other String
     * @param actualValue
     * @param expectedValue
     */
    static async verifyStringEqualTo(actualValue: string, expectedValue: string) {
        StepLogger.subVerification(`${actualValue} should be equal to  ${expectedValue} value`);
        await assert.equal(actualValue, expectedValue,
            ValidationsHelper.getStringEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that String is not equal to other String
     * @param actualValue
     * @param expectedValue
     */
    static async verifyStringNotEqualTo(actualValue: string, expectedValue: string) {
        StepLogger.subVerification(`${actualValue} should not be equal to  ${expectedValue} value`);
        await assert.notEqual(actualValue, expectedValue,
            ValidationsHelper.getStringNotEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that CSS values is equal to expected Value
     * @param targetElement
     * @param attribute
     * @param expectedValue
     */
    static async verifyCssAttributeValue(targetElement: DfElement, attribute: string, expectedValue: string) {
        const actualValue = await PageHelper.getCssValue(targetElement, attribute);
        StepLogger.subVerification(`${actualValue} should be equal to  ${expectedValue} value`);
        await assert.equal(actualValue, expectedValue,
            ValidationsHelper.getStringEqualToValidation(actualValue, expectedValue));
    }

    /**
     * Verify that attribute values contains expected Value
     * @param targetElement
     * @param attribute
     * @param expectedValue
     */
    static async verifyAttributeContains(targetElement: DfElement, attribute: string, expectedValue: string) {
        const actualValue = await ElementHelper.getAttributeValue(targetElement, attribute);
        StepLogger.subVerification(`${actualValue} should contain  ${expectedValue} value`);
        await assert.include(actualValue, expectedValue,
            ValidationsHelper.getStringToContain(actualValue, expectedValue));
    }

    /**
     * Verify that attribute values does not contain Value
     * @param targetElement
     * @param attribute
     * @param expectedValue
     */
    static async verifyAttributeNotContains(targetElement: DfElement, attribute: string, expectedValue: string) {
        const actualValue = await ElementHelper.getAttributeValue(targetElement, attribute);
        StepLogger.subVerification(`${actualValue} should be equal to  ${expectedValue} value`);
        await assert.notInclude(actualValue, expectedValue,
            ValidationsHelper.getStringToNotContain(actualValue, expectedValue));
    }

    static async verifyTextBoxHasValue(elementLocator: DfElement, locatorValue: string) {
        StepLogger.subVerification(`The ${locatorValue} values should display.`);
        await assert.equal(await TextBoxHelper.hasValue(elementLocator, locatorValue), true,
            ValidationsHelper.getFieldDisplayedValidation(locatorValue));
    }

    static async verifyAttributePresent(elementLocator: DfElement, attribute: string) {
        StepLogger.subVerification(`The ${attribute} must be present.`);
        await WaitHelper.waitForElement(elementLocator.item);
        const attr = await elementLocator.item.getAttribute(attribute);
        await assert.isNotNull(attr, ValidationsHelper.getDisplayedValidation(attribute));
    }

    static async verifyAttributeNotPresent(elementLocator: DfElement, attribute: string) {
        StepLogger.subVerification(`The ${attribute} must not be present.`);
        await WaitHelper.waitForElement(elementLocator.item);
        await assert.equal(await elementLocator.item.getAttribute(attribute), null,
            ValidationsHelper.getNotDisplayedValidation(attribute));
    }

    static async verifyElementsCountToBeEqualOrGreaterThan(targets: DfElements,
                                                           expectedCount: number) {
        const message = ValidationsHelper.getElementsCountToBeEqualOrGreaterThan(expectedCount);
        StepLogger.subVerification(message);
        await assert.equal(await WaitHelper.waitUntilElementsCountIsGreaterOrEqual(targets.item, expectedCount),
            true, message);
    }

    /**
     * Verify 'value' attribute of Dropdown option
     * @param selectElement
     * @param text
     * @param index
     */
    static async verifyValueAttributeOfDropdownOption(selectElement: DfElement,
                                                      { text, index }: DropdownField) {
        let actualValue = Constants.EMPTY_STRING;
        if (text) {

            actualValue = await CommonPage.getDropdownOptionByCssText(selectElement,
                text).getAtttribute(attributes.value);
            StepLogger.subVerification(ValidationsHelper.getDropdwonValueShouldBe(selectElement, actualValue));

        } else {

            const elements = CommonPage.getDropdownOptionsByText(selectElement, /\w+/).item;
            await WaitHelper.waitUntilElementsCountIsGreaterOrEqual(elements, 1);
            actualValue = await elements
                .get(index)
                .getAttribute(attributes.value);
            StepLogger.subVerification(ValidationsHelper.getDropdwonValueShouldBe(selectElement, actualValue));

        }
        await WaitHelper.waitUntilValueAttributeEqual(selectElement.item, actualValue);
        const expectedValue = await selectElement.getAtttribute(attributes.value);
        await ExpectationHelper.verifyStringValueEqualTo(selectElement,
            actualValue, expectedValue);
    }

    /**
     * Verify array contains expected string
     * @param actualValues
     * @param expected
     */
    static async verifyStringArrayContainsValue(actualValues: string[], expected: string) {
        StepLogger.subVerification(`Array should contain '${expected}' value`);
        const matchedItem = actualValues.includes(expected);
        await assert.isTrue(matchedItem, ValidationsHelper.getPresentValidation(expected));
    }

    static async verifyDisplayedElementFinder(targetElement: ElementFinder, name: string) {
        StepLogger.subVerification(ValidationsHelper.getDisplayedValidation(name));
        await assert.equal(await WaitHelper.waitForElementToBeDisplayed(targetElement),
            true, ValidationsHelper.getDisplayedValidation(name));
    }

    static async verifyDisplayedElementFinderArray(targetElement: DfElements) {
        StepLogger.subVerification(ValidationsHelper.getDisplayedValidation(targetElement.name));
        await ExpectationHelper.verifyElementsCountToBeEqualOrGreaterThan(targetElement,
            1);
        await targetElement.item.each(async (e: ElementFinder) => {
            await ExpectationHelper.verifyDisplayedElementFinder(e, targetElement.name);
        });
    }

    static async verifyAlertMessage(expectedValue: string) {
        const actualText = await AlertHelper.getText();
        const message = ValidationsHelper.getAlertMessageValidation(actualText, expectedValue);
        StepLogger.subVerification(message);
        await assert.equal(actualText, expectedValue, message);
    }

    static async verifyValueIsNumber(actualValue: string) {
        StepLogger.subVerification(`Value '${actualValue}' should be a number`);
        const isNumber = /^\d+$/.test(actualValue) ? true : false;
        await assert.isTrue(isNumber, ValidationsHelper.getTrueValidation(isNumber));
    }

    /**
     * Verify that Boolean is equal to other Boolean
     * @param actualValue
     * @param expectedValue
     */
    static async verifyBooleanEqualTo(actualValue: boolean, expectedValue: boolean) {
        StepLogger.subVerification(`${actualValue} should be equal to  ${expectedValue} value`);
        await assert.equal(actualValue, expectedValue,
            ValidationsHelper.getBooleanEqualToValidation(actualValue, expectedValue));
    }
}

import { browser, by, protractor, ElementFinder } from 'protractor';
import { ILocation, ISize } from 'selenium-webdriver';

import { StepLogger } from '../../../core/logger/step-logger';
import { Constants } from '../misc-utils/constants';
import { DfElement, DfElements } from '../misc-utils/df-elements-helper';
import { ElementType } from '../misc-utils/element-type';
import { ExpectationHelper } from '../misc-utils/expectation-helper';
import { HtmlHelper } from '../misc-utils/html-helper';

import { PageHelper } from './page-helper';
import { TextBoxHelper } from './textbox-helper';
import { WaitHelper } from './wait-helper';

export class ElementHelper {
    private static readonly EC = protractor.ExpectedConditions;

    private static async clickJs(targetElement: DfElement, eType: ElementType) {
        StepLogger.subStep(`Click '${targetElement.name}' ${eType}`);
        await this.clickUsingJs(targetElement);
    }

    private static async click(targetElement: DfElement, eType: ElementType) {
        StepLogger.subStep(`Click '${targetElement.name}' ${eType}`);
        await PageHelper.click(targetElement);
    }

    /**
     * Helps in selecting Nth element from the list of element by index
     * @param targetElement
     * @param eType
     * @param index
     */
    private static async clickNthElement(targetElement: DfElements, eType: ElementType, index = 0) {
        StepLogger.subStep(`Click '${targetElement.name}' ${eType}`);
        await WaitHelper.waitUntilElementsCountIsGreaterOrEqual(targetElement.item,
            1);
        await WaitHelper.waitForElementToBeDisplayed(targetElement.item.get(index));
        await targetElement.item.get(index).click();
    }

    static async getBrowser() {
        const capabilities = await browser.getCapabilities();
        return capabilities.get('browserName');
    }

    static async actionMouseMove(target: DfElement) {
        await WaitHelper.waitForElementToBeDisplayed(target.item);
        return browser.actions().mouseMove(target.item).perform();
    }

    static async actionMouseDown(target: DfElement) {
        StepLogger.subStep('Move mouse down');
        await WaitHelper.waitForElementToBeDisplayed(target.item);
        return browser.actions().mouseDown(target.item).perform();
    }

    /**
     * Helps in performing 'Mouse up' operation
     * @param target
     */
    static async actionMouseUp(target?: DfElement) {
        StepLogger.subStep('Move mouse up');
        if (target) {
            await WaitHelper.waitForElementToBeDisplayed(target.item);
            await browser.actions().mouseUp(target.item.getWebElement()).perform();
        } else {
            await browser.actions().mouseUp().perform();
        }
    }

    static async actionDragAndDrop(source: DfElement, destination: DfElement) {
        await WaitHelper.waitForElement(source.item);
        return browser.actions().dragAndDrop(source.item, destination.item).perform();
    }

    static async actionDoubleClick(optElementOrButton: ElementFinder | string, name: string) {
        StepLogger.subStep(`Double click: ${name}`);
        if (optElementOrButton instanceof ElementFinder) {
            await WaitHelper.waitForElementToBeClickable(optElementOrButton);
        }
        return browser.actions().doubleClick(optElementOrButton).perform();
    }

    static async actionClick(optElementOrButton?: ElementFinder | string, optButton?: string) {
        if (optElementOrButton) {
            return browser.actions().click(optElementOrButton).perform();
        }
        if (optButton) {
            return browser.actions().click(optButton).perform();
        }
    }

    static async actionHoverOver(target: DfElement) {
        StepLogger.subStep(`Hover over '${target.name}'`);
        await WaitHelper.waitForElementToBeDisplayed(target.item);
        await browser.actions().mouseMove(target.item).perform();
    }

    static async actionHoverOverAndClick(hoverOverLocator: DfElement, clickLocator = hoverOverLocator) {
        await WaitHelper.waitForElement(hoverOverLocator.item);
        await browser.actions().mouseMove(hoverOverLocator.item).click(clickLocator.item).perform();
    }

    static async getFocusedElement() {
        return browser
            .driver
            .switchTo()
            .activeElement();
    }

    static async getLocation(target: DfElement): Promise<ILocation> {
        StepLogger.subStep(`Get location of '${target.name}'`);
        await WaitHelper.waitForElement(target.item);
        const location = await target.item.getLocation();
        StepLogger.subStep(`Received location: '${JSON.stringify(location)}'`);
        return location;
    }

    static async getSize(target: DfElement): Promise<ISize> {
        StepLogger.subStep(`Get size of '${target.name}'`);
        await WaitHelper.waitForElement(target.item);
        const size = await target.item.getSize();
        StepLogger.subStep(`Received size: '${JSON.stringify(size)}'`);
        return size;
    }

    static async isVisible(target: DfElement) {
        return this.EC.visibilityOf(target.item);
    }

    static async isNotVisible(locator: DfElement) {
        return this.EC.invisibilityOf(locator.item);
    }

    static async inDom(locator: DfElement) {
        return this.EC.presenceOf(locator.item);
    }

    static async notInDom(locator: DfElement) {
        return this.EC.stalenessOf(locator.item);
    }

    static async isClickable(locator: DfElement) {
        return this.EC.elementToBeClickable(locator.item);
    }

    static async hasText(locator: DfElement, text: string) {
        return this.EC.textToBePresentInElement(locator.item, text);
    }

    static async titleIs(title: string) {
        return this.EC.titleIs(title);
    }

    static async hasClass(locator: DfElement, klass: string) {
        const classes = await locator.item.getAttribute('class') as string;
        return classes && classes.split(' ').indexOf(klass) !== -1;
    }

    static async hasClassRegex(locator: DfElement, klass: string) {
        const classAttribute = await locator.item.getAttribute('class');
        const pattern = new RegExp('(^|\\s)' + klass + '(\\s|$)');
        return pattern.test(classAttribute);
    }

    static async clickUsingJs(targetElement: DfElement) {
        await WaitHelper.waitForElementToBeClickable(targetElement.item);
        await this.clickUsingJsNoWait(targetElement);
    }

    static async clickUsingJsNoWait(target: DfElement) {
        StepLogger.subStep(`Click '${target.name}'`);
        await browser.executeScript('arguments[0].click();', await target.item.getWebElement());
    }

    static async selectDropDownByIndex(target: DfElement, optionNum: number) {
        if (optionNum) {
            const options = await target.item.findElements(by.tagName('option'));
            await options[optionNum].click();
        }
    }

    static async scrollToElement(target: DfElement) {
        await browser.executeScript('arguments[0].scrollIntoView();', target.item.getWebElement());
    }

    static async getAttributeValue(elem: DfElement, attribute: string) {
        await WaitHelper.waitForElement(elem.item);
        const value = await elem.item.getAttribute(attribute);
        return value.trim();
    }

    static async getText(elem: DfElement) {
        StepLogger.subStep(`Get text of element: '${elem.name}'`);
        await WaitHelper.waitForElementToHaveText(elem.item);
        let text = await elem.item.getText();
        text = text.trim();
        StepLogger.subStep(`Received text: '${text}'`);
        return text;
    }

    static async openLinkInNewTabUsingTarget(target: DfElement) {
        const script = 'const item = arguments[0];item.setAttribute("target", "_blank");item.click()';
        await browser.executeScript(script, await target.item.getWebElement());
    }

    static async openLinkInNewTabUsingWindowOpener(target: DfElement) {
        const script = 'return window.open(arguments[0].getAttribute("href"),"_blank")';
        await browser.executeScript(script, await target.item.getWebElement());
    }

    static async clickButtonJs(targetElement: DfElement) {
        await this.clickJs(targetElement, ElementType.Button);
    }

    static async clickLinkJs(targetElement: DfElement) {
        await this.clickJs(targetElement, ElementType.Link);
    }

    static async clickButton(targetElement: DfElement) {
        await this.click(targetElement, ElementType.Button);
    }

    static async clickLink(targetElement: DfElement) {
        await this.click(targetElement, ElementType.Link);
    }

    static async clickCheckbox(targetElement: DfElement) {
        await this.click(targetElement, ElementType.Checkbox);
    }

    static async clickFirstButton(targetElement: DfElements) {
        await this.clickNthElement(targetElement, ElementType.Button,
            Constants.number.zero);
    }

    static async clickNthButton(targetElement: DfElements, index: number) {
        await this.clickNthElement(targetElement, ElementType.Button,
            index);
    }

    static async clickElementWithOffset(targetElement: DfElement, offset: ILocation) {
        StepLogger.subStep(`Click '${targetElement.name}' with offset: ${JSON.stringify(offset)}`);
        await WaitHelper.waitForElementToBeDisplayed(targetElement.item);
        await browser.actions()
            .mouseMove(targetElement.item, offset)
            .click()
            .perform();
    }

    static async refreshAndClickButton(targetElement: DfElement) {
        await browser.refresh(PageHelper.DEFAULT_TIMEOUT);
        await this.click(targetElement, ElementType.Button);
    }

    static async waitAndClickButton(targetElement: DfElement, wait = PageHelper.timeout.xs) {
        await WaitHelper.waitForElementToBeDisplayed(targetElement.item);
        await WaitHelper.sleep(wait);
        try {
            await this.click(targetElement, ElementType.Button);
        } catch (e) {
            await this.clickJs(targetElement, ElementType.Button);
        }
    }

    static async actionMouseMoveAndClick(target: DfElement) {
        await WaitHelper.waitForElement(target.item);
        await browser.actions().mouseMove(target.item.getWebElement()).perform();
        await browser.actions().click().perform();
    }

    static async actionClickWithWait(target: DfElement) {
        await WaitHelper.waitForElementToBeDisplayed(target.item);
        await this.actionMouseMoveAndClick(target);
    }

    static async sendKeys(targetElement: DfElement, value: string, sendEnter = false) {
        StepLogger.subStep(`Enter '${value}' in '${targetElement.name}' textbox`);
        await TextBoxHelper.sendKeys(targetElement.item, value, sendEnter);
    }

    static async sendKeysIfTextIsDefined(targetElement: DfElement, value: string, sendEnter = false) {
        if (value) {
            await this.sendKeys(targetElement, value, sendEnter);
        }
    }

    static async clickViaCoordinates(location: ILocation) {
        const script = (x: number, y: number) => `document.elementFromPoint(${x}, ${y}).click();`;
        await browser.driver.executeScript(script(location.x, location.y));
    }

    static async verifyTextEntered(targetElement: DfElement, value: string) {
        const actual = await this.getAttributeValue(targetElement, HtmlHelper.attributes.value);
        await ExpectationHelper.verifyStringEqualTo(actual, value);
    }

    static async hoverMouseDownAndClickJS(target: DfElement) {
        await target.hoverOver();
        await ElementHelper.actionMouseDown(target);
        await ElementHelper.actionMouseUp();
        await target.clickButtonJs();
    }

    static async sendKeysIfPresent(targetElement: DfElement, value: string, sendEnter = false) {
        StepLogger.subStep(`Enter '${value}' in '${targetElement.name}' textbox`);
        await TextBoxHelper.sendKeysIfPresent(targetElement.item, value, sendEnter);
    }
}

import { ComponentHelpersFactory } from '@aurea/protractor-automation-helper';
import { by, element, By } from 'protractor';

import { Constants } from '../../../components/misc-utils/constants';
import { $, $$, DfElement } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { JsHelper } from '../../../components/misc-utils/js-helper';
import { xpath } from '../../../components/misc-utils/xpath-builder';
import { NewAccountPage } from '../new-account-page/new-account-page.po';
import { NewCasePageConstant } from '../new-case-page/new-case-page.constants';

import { CommonPageConstant } from './common-page.constant';

const { attributes: { labels, classes, id, src } } = CommonPageConstant;
const { tags, attributes } = HtmlHelper;

export class CommonPage {

    static getLocatorByPlaceHolder(value: string) {
        return by.css(`[${HtmlHelper.attributes.placeholder}='${value}']`);
    }

    static async currentSelectedOptionByText(text: string) {
        const selector = `//option[@selected="selected" and normalize-space(.)="${text}"]`;
        return element(By.xpath(selector));
    }

    static async getSelectedOption(target: DfElement) {
        return target.item.element(By.css('option[selected]'));
    }

    static getElementByText(text: string, name: string, isContains = false) {
        return $(By.xpath(`//*[${ComponentHelpersFactory.getXPathFunctionForText(text, isContains)}]`), name);
    }

    static getFirstElementByText(tag: string, text: string, name: string, isContains = false) {
        return $(By.xpath(`(//${tag}[${ComponentHelpersFactory.getXPathFunctionForText(text, isContains)}])[1]`), name);
    }

    static getElementByTextAndHref(href: string, text: string) {
        return $(xpath()
            .contains(HtmlHelper.attributes.href, href)
            .text(text)
            .buildByObject(), text);
    }

    static getElementByContainsTextAndHref(href: string, text: string) {
        return $(xpath()
            .contains(HtmlHelper.attributes.href, href)
            .textContains(text)
            .buildByObject(), text);
    }

    static getAnchorByClassAndText(className: string, text: string) {
        return element(xpath(HtmlHelper.tags.a)
            .contains(HtmlHelper.attributes.class, className)
            .text(text)
            .first()
            .buildByObject());
    }

    static getValidationMessage(name: string) {
        const { requiredFieldValidator } = NewCasePageConstant.attributes.id;
        const text = `${name.toUpperCase()} ${labels.isRequired}`;
        return $(by.cssContainingText(`[id$="${requiredFieldValidator}"]`,
            text),
            text);
    }

    static getDropdownOptionByCssText(target: DfElement, text: string | RegExp) {
        return $(by.cssContainingText(`${JsHelper.getLocatorValue(target)} ${tags.option}`,
            text), text.toString());
    }

    static getDropdownOptionsByText(target: DfElement, text: string | RegExp) {
        return $$(by.cssContainingText(`${JsHelper.getLocatorValue(target)} ${tags.option}`,
            text), text.toString());
    }

    static getElementByIdEndsWith(idValue: string, name: string) {
        return $(by.css(`[${HtmlHelper.attributes.id}$='${idValue}']`), name);
    }

    static getElementByIdContains(idValue: string, name: string) {
        return $(by.css(`[${HtmlHelper.attributes.id}*='${idValue}']`), name);
    }

    static getElementByNameEndsWith(nameValue: string, name: string) {
        return $(by.css(`[${HtmlHelper.attributes.name}*='${nameValue}']`), name);
    }

    static getElementByClassContains(className: string, name: string) {
        return $(by.css(`[${HtmlHelper.attributes.class}*='${className}']`), name);
    }

    static getElementByClassEndsWith(className: string, name: string) {
        return $(by.css(`[${HtmlHelper.attributes.class}$='${className}']`), name);
    }

    static getElementByClassStartsWith(className: string, name: string) {
        return $(by.css(`[${HtmlHelper.attributes.class}^='${className}']`), name);
    }

    static get contentIFrame() {
        return NewAccountPage.information.contentIFrame;
    }

    static get notesIFrame() {
        return this.getElementByIdEndsWith(id.noteFramesFrame,
            id.noteFramesFrame);
    }

    static get eventsIFrame() {
        return this.getElementByIdEndsWith(id.eventFramesFrame,
            id.eventFramesFrame);
    }

    static get tasksIFrame() {
        return this.getElementByIdEndsWith(id.taskFramesFrame,
            id.eventFramesFrame);
    }

    static get tasksFramesFrameIFrame() {
        return this.getElementByIdEndsWith(id.tasksFramesFrame,
            id.eventFramesFrame);
    }

    static get attachmentsIFrame() {
        return this.getElementByIdEndsWith(id.attachmentFramesFrame,
            id.attachmentFramesFrame);
    }

    static get contentIFrameOnModal() {
        return $(by.className(classes.contentFrame),
            classes.contentFrame);
    }

    static get contentIFrameVisibleOnModal() {
        return $(by.css(`.${classes.contentFrame}:not([${attributes.style}*='none'])`),
            classes.contentFrame);
    }

    static get contentIFrameOnAddAttendeeModal() {
        return $(by.css(`[${attributes.src}*='${src.attendeeEditor}'].${classes.contentFrame}`),
            classes.contentFrame);
    }

    static get insideFrame() {
        return $(by.id(id.insideFrame),
            id.insideFrame);
    }

    static get resourceOneIFrame() {
        return $(by.id(id.resourceOneIFrame),
            id.resourceOneIFrame);
    }

    static get componentIFrame() {
        return $(by.css(`${tags.iFrame}[id^='${id.component}']`),
            id.component);
    }

    static get contentAndInsideIFrames(): DfElement[] {
        return [this.contentIFrameOnModal, this.insideFrame];
    }

    static get xComponentsIFrame() {
        return $(By.css(`${tags.iFrame}.${classes.xComponentDefault}`),
            classes.xComponentDefault);
    }

    static get iframeStyleIFrame() {
        return $(By.className(`${classes.iframeStyle}`),
            classes.iframeStyle);
    }

    static get mainContentHolhderFrame() {
        return $(By.id(id.mainContentHolder),
            CommonPageConstant.attributes.labels.mainContentHolder);
    }

    static get contentFrame() {
        return $(By.css(`${tags.iFrame}.contentFrame`),
            CommonPageConstant.attributes.labels.contentFrame);
    }

    static get editorFrame() {
        return $(By.css(`${tags.iFrame}[id*="_qnEditor_contentIframe"]`),
            CommonPageConstant.attributes.labels.editorFrame);
    }

    static get richTextFrame() {
        return $(By.css(`${tags.iFrame}[title*="${CommonPageConstant.attributes.title.richTextEditor}"]`),
            CommonPageConstant.attributes.title.richTextEditor);
    }

    static get snapshotFrame() {
        return $(By.css('iframe[src*="entity/snapshot/opensnapshot"]'),
            CommonPageConstant.attributes.labels.contentFrame);
    }

    static get globalElements() {
        const names = CommonPageConstant.names;
        return {
            globalSearchButton: $(xpath(tags.span)
                .contains('class', classes.faSearch)
                .nthChild(Constants.number.one)
                .buildByObject(), names.globalSearchButton),
            globalTextField: $(xpath(tags.input)
                .contains('class', classes.formTextDefault)
                .nthChild(Constants.number.one)
                .buildByObject(), names.globalTextField),
            globalDropdown: $(by.css(`.${classes.searchbarButton}.${classes.searchbarTypebutton}`),
                names.globalDropdown),
            globalDropdownItemByText(item: string) {
                return $(xpath(tags.span)
                    .contains('class', classes.menuItemText)
                    .text(item)
                    .buildByObject(), item);
            },
        };
    }

    static get noteBoxContentIframe() {
        return $(By.css('iframe[id*="noteBox_contentIframe"]'),
            CommonPageConstant.attributes.labels.contentFrame);
    }

    static get casesFrame() {
        return $(By.css(`${tags.iFrame}[id*="frameCases_frame"]`),
            CommonPageConstant.attributes.labels.mainContentHolder);
    }
}

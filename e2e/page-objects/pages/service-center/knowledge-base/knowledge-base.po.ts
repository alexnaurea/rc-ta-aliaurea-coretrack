import { by, element } from 'protractor';
import { By } from 'selenium-webdriver';

import { $ } from '../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';

import { KnowledgeBase1Constant } from './knowledge-base.constants';

const { elementNames: eNames, classes, ids } = KnowledgeBase1Constant;
const { tags } = HtmlHelper;

export class KnowledgeBase1Page {

    static get title() {
        return $(by.cssContainingText(tags.label, eNames.pageTitle), eNames.pageTitle);
    }

    static get categoriesTitle() {
        return $(by.cssContainingText(classes.xBoxItem, eNames.categories), eNames.categories);
    }

    static get searchBox() {
        return $(by.css(`${tags.input}[id*=${ids.searchTextBox}]`), eNames.searchTextBox);
    }

    static get refreshButton() {
        return $(by.className(`${classes.refreshIcon}`), eNames.refreshIcon);
    }

    static get tiles() {
        return {
            tileCategory: (name: string) => $(
                by.cssContainingText(`${tags.li}.${classes.tileItem} ${tags.div}.${classes.name}`, name), name),
        };
    }

    static get articles() {
        return {
            title:  (name: string) => $(
                by.cssContainingText(`div[id*=${ids.categoryTitle}] ${tags.label}`, name), name),
            itemName: (name: string) => $(
                by.cssContainingText(`${tags.li}.${classes.articleItem} ${tags.div}.${classes.name} ${tags.span}`, name), name),
            itemDesc: (name: string) => $(
                by.cssContainingText(`${tags.li}.${classes.articleItem} ${tags.div}.${classes.description} ${tags.span}`, name), name),
            createdByUser: $(by.css(`${tags.div}.${classes.author} .${classes.createdUser}`), eNames.createdBy),
            createdDated: $(by.css(`${tags.div}.${classes.author} .${classes.createdTime}`), eNames.on),
        };
    }

    static get knowledgeBasePopup() {
        return {
            popup: $(by.css(`${tags.div}.${classes.popup}`), eNames.popup),
            title: (name: string) => $(
                by.cssContainingText(`div[id*=${ids.knowledgeBasePopupTitle}]`, name), name),
            description: (name: string) => $(
                by.cssContainingText(`div[id*=${ids.panel}]`, name), name),
            closeBtn: $(by.css(`${tags.div}.${classes.popup} span[id*=${ids.btnInner}]`), eNames.close),
            xBtn: $(by.className(`${classes.xTool}`), eNames.xButton),
        };
    }

    static get knowledgeBaseArticles() {
        return element.all(By.className(`${classes.articleItem}`));
    }

    static getKnowledgeBaseArticleCreatedOnDate(index: number) {
        return this.knowledgeBaseArticles.get(index - 1).element(by.css(`${tags.div}.${classes.author} .${classes.createdTime}`));
    }
}

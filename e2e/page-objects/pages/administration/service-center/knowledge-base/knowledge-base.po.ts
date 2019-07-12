import { by } from 'protractor';

import { $, $$ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';
import { xpath } from '../../../../../components/misc-utils/xpath-builder';

import { KnowledgeBaseConstant } from './knowledge-base.constants';

const { elementNames: eNames, classes: classes, ids: ids, messages: msg } = KnowledgeBaseConstant;
const { attributes, tags } = HtmlHelper;

export class KnowledgeBasePage {

    static get buttons() {
        return {
            addKnowledgeBase: $(by.css(`a[title="${eNames.addKnowledgeBase}"]`), eNames.addKnowledgeBase),
        };
    }

    static get title() {
        return $(by.cssContainingText(tags.label, eNames.pageTitle), eNames.pageTitle);
    }

    static get resourceOneIFrame() {
        return $(by.id(ids.resourceOneFrame), eNames.resourceOneFrame);
    }

    static get knowledgeBaseArticle() {
        return {
            dialogTitle: $(by.cssContainingText(`span#${ids.dialogId}.${classes.dialogTitle}`, eNames.knowledgeBaseArticle),
                eNames.knowledgeBaseArticle),
            title: $(by.css(`input[name$=${eNames.title}]`), eNames.title),
            description: $(by.css(`textarea[name*=${eNames.description}]`), eNames.description),
            keywords: $(by.css(`input[name*=${eNames.keywords}]`), eNames.keywords),
            category: $(by.css(`input[id*=${ids.categorySelector}]`), eNames.category),
            status: $(by.css(`select[name*=${eNames.statusCtl}]`), eNames.status),
            allStatusOptions: $$(by.css(KnowledgeBaseConstant.statusDropdown.option), eNames.status),
            statusOption: (name: string) => $(
                by.cssContainingText(KnowledgeBaseConstant.statusDropdown.option, name), name),
            active: $(by.css(`select[name*=${eNames.activeCtl}]`), eNames.active),
            allActiveOptions: $$(by.css(KnowledgeBaseConstant.activeDropdown.option), eNames.active),
            activeOption: (name: string) => $(
                by.cssContainingText(KnowledgeBaseConstant.activeDropdown.option, name), name),
            richEditorFrame: $(by.css(`iframe[id*=${ids.richEditorFrame}]`), eNames.richEditorFrame),
            editorTextArea: $(by.css(tags.body), eNames.editorArea),
            save: $(by.css(`input[value=${eNames.save}]`), eNames.save),
            cancel: $(by.css(`input[value=${eNames.cancel}]`), eNames.cancel),
            enterTitle: $(by.cssContainingText(tags.label, msg.enterTitle), msg.enterTitle),
            enterDescription: $(by.cssContainingText(tags.label, msg.enterDescription), msg.enterDescription),
            enterCategory: $(by.cssContainingText(tags.label, msg.enterCategory), msg.enterCategory),
            okButton: $(by.cssContainingText(`${tags.button}.${classes.uiButton}`, eNames.ok), eNames.ok),
            searchCategoryBtn: $(by.css(`button[id*=${ids.searchCategory}]`), eNames.search),
            categoryFrame: $(xpath(tags.iFrame)
                .where(attributes.class, classes.contentFrame)
                .last()
                .buildByObject(), eNames.category),
            firstCategory: $(xpath(tags.div)
                .descendant(tags.a)
                .descendant(tags.span)
                .first()
                .buildByObject(), eNames.category),
            selectCategory: $(by.css(`input#${ids.selectCategory}`), eNames.select),
            plusCategory: $(xpath(tags.img)
                .startsWith(attributes.id, ids.treeCategory)
                .first()
                .buildByObject(), eNames.plus),
            firstTreeChild: $(xpath(tags.div)
                .startsWith(attributes.id, ids.treeChild)
                .anywhere(tags.span)
                .first()
                .buildByObject(), eNames.treeChild),
            selectedCategory: $(by.css(`input#${ids.txtCategoryName}`), eNames.select),
            selectCategoryDialog: $(by.cssContainingText(`span#${ids.dialogId}.${classes.dialogTitle}`, eNames.selectCategory),
                eNames.selectCategory),
            cancelCategory: $(by.css(`input[value=${eNames.cancel}]`), eNames.cancel),
            clearBtn: $(by.css(`button[id*=${ids.clearButton}]`), eNames.clear),
        };
    }

    static get knowledgeBase() {
        return {
            item: (name: string) => $(
                by.cssContainingText(`${tags.td} ${tags.nobr}`, name), name),
            itemBookIcon: (name: string) => $(
                    by.xpath(`//tr[descendant::nobr[contains(text(),"${name}")]][contains(@class,"${classes.itemClass}")]//a`), name),
            createdBtn: $(by.cssContainingText(`${tags.th} ${tags.a}`, eNames.created), eNames.created),
            ascArrow: $(by.css(`th a[title="${eNames.clickToSort}"] + input[src*="${eNames.asc}"]`), eNames.asc),
            descArrow: $(by.css(`th a[title="${eNames.clickToSort}"] + input[src*="${eNames.desc}"]`), eNames.desc),
            titleBtn: $(by.cssContainingText(`${tags.th} ${tags.a}`, eNames.title), eNames.title),
        };
    }
}

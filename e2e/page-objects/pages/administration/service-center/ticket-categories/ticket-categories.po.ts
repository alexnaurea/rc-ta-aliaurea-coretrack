import { by } from 'protractor';

import { $, $$ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';
import { xpath } from '../../../../../components/misc-utils/xpath-builder';

import { TicketCategoriesConstant } from './ticket-categories.constants';

const { elementNames: eNames, ids, classes, messages: msg } = TicketCategoriesConstant;
const { attributes, tags } = HtmlHelper;

export class TicketCategoriesPage {

    static get buttons() {
        return {
            addTicketCategory: $(by.css(`a[title="${eNames.addTicketCategory}"]`), eNames.addTicketCategory),
            deleteTicketCategory: $(by.css(`a[title="${eNames.deleteSelectedTicket}"]`), eNames.deleteSelectedTicket),
        };
    }

    static get title() {
        return $(by.cssContainingText(tags.label, eNames.pageTitle), eNames.pageTitle);
    }

    static get resourceOneIFrame() {
        return $(by.id(ids.resourceOneFrame), eNames.resourceOneFrame);
    }

    static get ticketCategoryDialog() {
        return {
            dialogTitle: $(by.cssContainingText(`span#${ids.dialogId}.${classes.dialogTitle}`, eNames.ticketCategory),
                eNames.ticketCategory),
            title: $(by.css(`input[id*=${ids.txtTitle}]`), eNames.title),
            description: $(by.css(`textarea[id*=${ids.txtDescription}]`), eNames.description),
            status: $(by.css(`select[id*=${ids.ddlStatus}]`), eNames.status),
            allStatusOptions: $$(by.css(TicketCategoriesConstant.statusDropdown.option), eNames.status),
            statusOption: (name: string) => $(
                by.cssContainingText(TicketCategoriesConstant.statusDropdown.option, name), name),
            parent: $(by.css(`select[id*=${ids.ddlParentRoot}]`), eNames.parent),
            allParentOptions: $$(by.css(TicketCategoriesConstant.parentDropdown.option), eNames.parent),
            parentOption: (name: string) => $(
                by.cssContainingText(TicketCategoriesConstant.parentDropdown.option, name), name),
            save: $(by.css(`input[value=${eNames.save}]`), eNames.save),
            cancel: $(by.css(`input[value=${eNames.cancel}]`), eNames.cancel),
            enterName: $(by.cssContainingText(tags.label, msg.enterName), msg.enterName),
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
            selectCategoryTitle: $(by.cssContainingText(`span#${ids.dialogId}.${classes.dialogTitle}`, eNames.selectCategory), eNames.selectCategory),
            selectedCategory: $(by.css(`input#${ids.txtCategoryName}`), eNames.select),
            category: $(by.css(`input[id*=${ids.categorySelector}]`), eNames.category),
        };
    }

    static get manageTicketCategory() {
        return {
            item: (name: string) =>
                $(xpath(tags.td)
                    .descendant(tags.nobr)
                    .textContains(name)
                    .first()
                    .buildByObject(), eNames.category),
            itemPlusIcon: (name: string) => $(
                by.xpath(`//tr[descendant::nobr[contains(text(),"${name}")]][contains(@class,"${classes.itemClass}")]//input[@title="${eNames.expand}"]`),
                    name),
        };
    }

    static get deleteCategory() {
        return {
            enabledItem: (name: string) => $(
                by.xpath(`(//span[(contains(@class,"${classes.rtIn}"))][not(contains(@disabled,"${eNames.disabled}"))][not(contains(text(),"${name}"))])[1]`),
                    name),
            deleteBtn: $(by.css(`input[value="${eNames.deleteCategory}"]`), eNames.deleteCategory),
        };
    }
}

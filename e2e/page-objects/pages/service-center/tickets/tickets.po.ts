import { by } from 'protractor';

import { $ } from '../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';
import { xpath } from '../../../../components/misc-utils/xpath-builder';

import { TicketsConstant } from './tickets.constants';

const { elementNames: eNames, classes, ids, } = TicketsConstant;
const { attributes, tags } = HtmlHelper;

export class TicketsPage {

    static get title() {
        return $(by.cssContainingText(tags.label, eNames.pageTitle), eNames.pageTitle);
    }

    static get buttons() {
        return {
            addTicket: $(by.css(`a[title="${eNames.addTicket}"]`), eNames.addTicket),
        };
    }

    static get resourceOneIFrame() {
        return $(by.id(ids.resourceOneFrame), eNames.resourceOneFrame);
    }

    static get newTicketWindow() {
        return {
            title: $(by.cssContainingText(`div.${classes.header} h1`, eNames.newTicket), eNames.newTicket),
            searchCategoryBtn: $(by.css(`button[id*=${ids.searchCategory}]`), eNames.search),
            selectCategoryTitle: $(by.cssContainingText(`span#${ids.dialogId}.${classes.dialogTitle}`, eNames.selectCategory), eNames.selectCategory),
            categoryFrame: $(xpath(tags.iFrame)
                .where(attributes.class, classes.contentFrame)
                .last()
                .buildByObject(), eNames.category),
            categoryItem: (name: string) => $(
                by.cssContainingText(`${tags.div} ${tags.a} ${tags.span}`, name), name),
            selectCategory: $(by.css(`input#${ids.selectCategory}`), eNames.select),
            category: $(by.css(`input[id*=${ids.categorySelector}]`), eNames.category),
        };
    }
}

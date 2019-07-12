import { by } from 'protractor';

import { $, $$ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { xpath } from '../../../components/misc-utils/xpath-builder';

import { SessionsPageConstant } from './sessions-page.constants';

const { elementNames: eNames, attributes: { classes, name, id } } = SessionsPageConstant;
const { tags } = HtmlHelper;

export class SessionsPage {

    static get header() {
        return {
            title: $(by.css(`${tags.label}${classes.title}`),
                eNames.sessions),
        };
    }

    static get elements() {
        return {
            tableFirst: $(by.xpath(`(.//*[contains(@class,"${classes.rowFirst}")] //a)[1]`), name.user),
            details: $(by.css(`${classes.details}`), eNames.details),
            detailsSelected: $(by.css(`${classes.detailsSelected}`), eNames.details),
            logDropDown: $(by.css(`${classes.logDropDown}`), eNames.logDropDown),
            logListView: $(by.cssContainingText(tags.option, eNames.listView), eNames.listView),
            rowMode: $(by.css(`.${classes.rowFirst}`), eNames.rowMode),
            userIcon: $$(by.css(`.${classes.iconUser}`), eNames.userIcon),
            detailsListDataGrid: $(by.id(id.ctl00MainContentHolderGridDetails), eNames.detailsGrid),
            detailsReadDataGrid: $(by.id(id.ctl00MainContentHolderGridDetailsCtl01), eNames.detailsGrid),
            logReadView: $(by.cssContainingText(tags.option, eNames.readView), eNames.readView),
            closeButton: $(by.css(`${tags.input}[value=${eNames.close}]`), eNames.close),
            refreshButton: $(by.css(`${tags.span}.${classes.iconRefresh}`), eNames.refresh),
            grouping: $(by.css(`${tags.select}.${classes.viewDDLMenu}`), eNames.grouping),
        };
    }

    static get sessionColumns() {
        const column = SessionsPageConstant.sessionColumns;
        return {
            user: $(by.cssContainingText(tags.a, column.user), column.user),
            entry: $(by.cssContainingText(tags.a, column.entry), column.entry),
            date: $(by.cssContainingText(tags.a, column.date), column.date),
            started: $(by.cssContainingText(tags.a, column.started), column.started),
            expires: $(by.cssContainingText(tags.a, column.expires), column.expires),
            description: $(by.cssContainingText(tags.a, column.description), column.description),
            status: $(by.cssContainingText(tags.a, column.status), column.status),
            lastAccessed: $(by.cssContainingText(tags.a, column.lastAccessed), column.lastAccessed),
            ip: $(by.cssContainingText(tags.a, column.ip), column.ip),
        };
    }

    static getIconBesideColumn(columnName: string) {
        return {
            asc: $(xpath(tags.a)
                .textContains(columnName)
                .followingSibling(tags.input)
                .where('alt', SessionsPageConstant.sort.asc)
                .buildByObject(), eNames.columnIcon),
            desc: $(xpath(tags.a)
                .textContains(columnName)
                .followingSibling(tags.input)
                .where('alt', SessionsPageConstant.sort.desc)
                .buildByObject(), eNames.columnIcon),
        };
    }
}

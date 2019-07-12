import { by } from 'protractor';

import { Constants } from '../../../components/misc-utils/constants';
import { $, $$ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { xpath } from '../../../components/misc-utils/xpath-builder';

import { ReferralsConstant } from './referrals.constant';

const tags = HtmlHelper.tags;
const title = ReferralsConstant.titles;
const attr = ReferralsConstant.attributes;
const names = ReferralsConstant.names;

export class ReferralsPage {

    static get titles() {
        return {
            referrals: $(by.cssContainingText(tags.label, title.referrals), title.referrals),
        };
    }

    static get elements() {
        return {
            referralsRows: $$(by.css(`${tags.tr}.${attr.class.gridRowAptean}`), names.referralsRows),
            userFilterDropdown: $(by.name(attr.name.ctMenuHolderPageUserDD), names.userFilter),
            pagination: $(by.className(attr.class.gridPagerAptean), names.pagination),
            groupingDropdown: $(by.name(attr.class.ctMenuHolderPageGroupingSelector), names.grouping),
            addOpportunityButton: $(by.css(`.${attr.class.iconAdd}`), names.addOpportunity),
            groupingIcon: $(xpath(tags.div)
                .parent(tags.div)
                .parent(tags.div)
                .parent(tags.td)
                .precendingSibling(tags.td)
                .descendant(tags.input)
                .nthChild(Constants.number.one)
                .buildByObject(), names.groupingIcon),
            getColumnByName(columnName: string) {
                return $(xpath(tags.th)
                    .where('class', attr.class.gridHeaderAptean)
                    .descendant(tags.a)
                    .text(columnName)
                    .buildByObject(), columnName);
            },
            getColumnAscIcon(columnName: string) {
                return $(xpath(tags.th)
                    .where('class', attr.class.gridHeaderAptean)
                    .descendant(tags.a)
                    .text(columnName)
                    .followingSibling(tags.input)
                    .where('alt', names.sortedAsc)
                    .buildByObject(), names.sortIcon);
            },
            getColumnDescIcon(columnName: string) {
                return $(xpath(tags.th)
                    .where('class', attr.class.gridHeaderAptean)
                    .descendant(tags.a)
                    .text(columnName)
                    .followingSibling(tags.input)
                    .where('alt', names.sortedDesc)
                    .buildByObject(), names.sortIcon);
            },
            refresh: $(by.className(attr.class.iconRefresh), names.refresh),
            viewByAllOrUnreadOnly: $(by.css(`${tags.select}[id*="viewSelector"]`), names.viewByAllOrUnreadOnly),
            exportToExcel: $(by.css(`.${attr.class.fileExcel}`), names.exportToExcel),
            exportToWord: $(by.css(`.${attr.class.fileWord}`), names.exportToWord),
            iconOpportunity: $(xpath(tags.span)
                .where('class', attr.class.iconOpportunity)
                .nthChild(Constants.number.two)
                .buildByObject(), attr.class.iconOpportunity),
            pullButton: $(by.css(`${tags.input}[title="${names.pull}"]`), names.pull),
            firstOpportunityProductType: $(xpath(tags.td)
                .descendant(tags.nobr)
                .nthChild(Constants.number.one).buildByObject(), names.opportunityProductType),
            closeButton: $(by.className(attr.class.iconClose), names.close),
            activityCardByName(name: string) {
                return $(xpath(tags.li)
                    .contains('class', attr.class.entityCardItem)
                    .descendant(tags.div)
                    .descendant(tags.div)
                    .descendant(tags.span)
                    .textContains(name)
                    .buildByObject(), name);
            },
        };
    }

    static getGroupingIcon(groupingOption: string) {
        return $(xpath(tags.div)
            .textContains(groupingOption)
            .parent(tags.div)
            .parent(tags.div)
            .parent(tags.td)
            .precendingSibling(tags.td)
            .descendant(tags.input)
            .nthChild(Constants.number.one)
            .buildByObject(), groupingOption);
    }
}

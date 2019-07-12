import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';
import { CommonPage } from '../../../common/common.po';

import { ProcessingLogConstants } from './processing-log.constants';
const { tags } = HtmlHelper;
const { elementNames: eNames, ids, classes, titles } = ProcessingLogConstants;
export class ProcessingLogPage {
    static get applicationStatusPage() {
        return $(by.cssContainingText(tags.label, ProcessingLogConstants.pageTitle), ProcessingLogConstants.pageTitle);
    }

    static get filters() {
        return {
            timeDdl: CommonPage.getElementByIdEndsWith(ids.pageViewSelector, eNames.timeFilterDDL),
            timeFilterOption: (filter: string) => $(
                by.cssContainingText(`[id*="${ids.pageViewSelector}"][class="${classes.viewDdlMenu}"]`, filter), filter),
            timeFilterSelectedOption: (filter: string) => $(
                by.cssContainingText(`[id*="${ids.pageViewSelector}"][class="${classes.viewDdlMenu}"] option[selected="${eNames.selected}"]`,
                    filter),
                filter),
            groupingDdl: CommonPage.getElementByIdEndsWith(ids.pageGroupingSelector, eNames.timeFilterDDL),
            groupingFilterOption: (filter: string) => $(
                by.cssContainingText(`[id*="${ids.pageGroupingSelector}"][class="${classes.viewDdlMenu}"]`,
                    filter),
                filter),
            groupingSelectedOption: (filter: string) => $(
                by.cssContainingText(`[id*="${ids.pageGroupingSelector}"][class="${classes.viewDdlMenu}"] option[selected="${eNames.selected}"]`,
                    filter),
                filter),
        };
    }

    static readonly pagination = Object.freeze({
        get nextPage() {
            return $(
                by.cssContainingText(`${tags.a}[${tags.title}="${titles.nextPage}"]`, eNames.nextArrow),
                eNames.nextArrow
            );
        },
        get previousPage() {
            return $(
                by.cssContainingText(`${tags.a}[${tags.title}="${titles.previousPage}"]`, eNames.previousArrow),
                eNames.previousArrow
            );
        },
        pageNumberAnchor(pageNumber: string) {
            return $(by.cssContainingText(`.${classes.gridPagerAptean} ${tags.a}`,
                pageNumber),
                pageNumber);
        },
        pageNumberSelected(pageNumber: string) {
            return $(by.cssContainingText(
                `.${classes.gridPagerAptean} ${tags.td} ${tags.b} ${tags.span}`,
                pageNumber),
                pageNumber);
        },
    });

    static get buttons() {
        return {
            refresh: $(by.css('span.icon-refresh'), eNames.refresh),
        };
    }
}

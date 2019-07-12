import { by } from 'protractor';

import { $, $$, $cssContainingText } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';

import { HomePageConstant } from './home-page.constants';

const { tags } = HtmlHelper;

export class HomePageExtension {
    private static readonly names = HomePageConstant.elementNames;
    private static readonly attr = HomePageConstant.attributes;

    static get globalSearchToolbar() {
        return {
            get searchTerm() {
                return $(by.css(`.${HomePageExtension.attr.classes.globalSearchStats} ${tags.div}`),
                HomePageExtension.names.searchTerm);
            },
            get searchFilter() {
                return $(by.css(`.${HomePageExtension.attr.classes.searchFilterTrigger}`),
                HomePageExtension.names.searchFilter);
            },
            get showCardView() {
                return $(by.css(`[title="${HomePageExtension.names.showCardView}"]`),
                HomePageExtension.names.showCardView);
            },
            get showGridView() {
                return $(by.css(`[title="${HomePageExtension.names.showGridView}"]`),
                HomePageExtension.names.showGridView);
            },
            get refresh() {
                return $(by.css(`.${HomePageExtension.attr.classes.refreshIcon}`),
                HomePageExtension.names.refreshIcon);
            },
        };
    }

    static get searchFilterItems() {
        return {
            get all() {
                return $cssContainingText(`.${HomePageExtension.attr.classes.searchFilterItem}`,
                HomePageExtension.names.allFilterItem);
            },
            get retailContact() {
                return $cssContainingText(`.${HomePageExtension.attr.classes.searchFilterItem}`,
                HomePageExtension.names.retailContactFilterItem);
            },
            get caseOwnerUser() {
                return $cssContainingText(`.${HomePageExtension.attr.classes.searchFilterItem}`,
                HomePageExtension.names.caseOwnerUserFilterItem);
            },
        };
    }

    static get searchResultsInCardView() {
        return {
            searchResultsCardView: $$(by.css(`.${HomePageExtension.attr.classes.searchResultCardViewItem}`),
                HomePageExtension.names.searchResultsCardView),
        };
    }

    static get searchResultsInGridView() {
        return {
            searchResultsGridView: $$(by.css(`.${HomePageExtension.attr.classes.searchResultGridViewItem}`),
            HomePageExtension.names.searchResultsGridView),
        };
    }

    static get errorPopupMessage() {
        return {
            message: $(by.css(`.${HomePageExtension.attr.classes.errorPopMessage}`),
            HomePageExtension.names.errorPopMessage),
        };
    }

    static get contactPageHeaderDetails() {
        return {
            contactPageHeaderDetails: $(by.css(`.${HomePageExtension.attr.classes.pageHeader} ${tags.h1}`),
            HomePageExtension.names.pageHeader),
        };
    }
}

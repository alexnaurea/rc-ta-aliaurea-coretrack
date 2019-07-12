import { by } from 'protractor';

import { $ } from '../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';

import { MarketingListsConstants } from './marketing-lists.constants';

const { tags } = HtmlHelper;

export class MarketingListsPage {
    static get marketingListsPageTitle() {
        return $(
            by.cssContainingText(
                tags.label,
                MarketingListsConstants.pageTitle
            ),
            MarketingListsConstants.pageTitle
        );
    }
}

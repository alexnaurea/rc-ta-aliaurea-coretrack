import { by } from 'protractor';

import { $ } from '../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';

import { BrowseConstants } from './browse.constants';

const { tags } = HtmlHelper;

export class BrowsePage {
    static get browsePageTitle() {
        return $(
            by.cssContainingText(
                tags.label,
                BrowseConstants.pageTitle
            ),
            BrowseConstants.pageTitle
        );
    }
}

import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';

import { UnmatchedConstants } from './unmatched.constants';
const { tags } = HtmlHelper;

export class UnmatchedPage {

    static get unmatchedPageTitle() {
        return $(by.cssContainingText(tags.label, UnmatchedConstants.pageTitle), UnmatchedConstants.pageTitle);
    }
}

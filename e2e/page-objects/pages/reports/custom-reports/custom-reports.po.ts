import { by } from 'protractor';

import { $ } from '../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';

import { CustomReportsConstants } from './custom-reports.constants';

const { tags } = HtmlHelper;

export class CustomReportsPage {
    static get customReportsPageTitle() {
        return $(
            by.cssContainingText(
                tags.label,
                CustomReportsConstants.pageTitle
            ),
            CustomReportsConstants.pageTitle
        );
    }
}

import { by } from 'protractor';

import { $ } from '../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';

import { PendingReportsConstants } from './pending-reports.constants';

const { tags } = HtmlHelper;

export class PendingReportsPage {
    static get pendingReportsPageTitle() {
        return $(
            by.cssContainingText(
                tags.label,
                PendingReportsConstants.pageTitle
            ),
            PendingReportsConstants.pageTitle
        );
    }
}

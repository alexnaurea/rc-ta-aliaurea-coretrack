import { by } from 'protractor';

import { $ } from '../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';

import { QueuedCasesConstants } from './cases.constants';

const { tags } = HtmlHelper;

export class QueuedCasesPage {
    static get casesPageTitle() {
        return $(
            by.cssContainingText(
                tags.label,
                QueuedCasesConstants.pageTitle
            ),
            QueuedCasesConstants.pageTitle
        );
    }
}

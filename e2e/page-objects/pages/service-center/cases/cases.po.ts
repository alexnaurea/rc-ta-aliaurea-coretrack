import { by } from 'protractor';

import { $ } from '../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';

import { CasesConstants } from './cases.constants';

const { tags } = HtmlHelper;

export class CasesPage {
    static get casesPageTitle() {
        return $(
            by.cssContainingText(
                tags.label,
                CasesConstants.pageTitle
            ),
            CasesConstants.pageTitle
        );
    }
}

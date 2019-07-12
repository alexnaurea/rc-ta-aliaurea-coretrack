import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';

import { LostReasonsConstants } from './lost-reasons.constants';

const { tags } = HtmlHelper;

export class LostReasonsPage {
    static get lostReasonsPageTitle() {
        return $(
            by.cssContainingText(
                tags.label,
                LostReasonsConstants.pageTitle
            ),
            LostReasonsConstants.pageTitle
        );
    }
}

import { by } from 'protractor';

import { $ } from '../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';

import { LostConstants } from './lost.constants';

const { tags } = HtmlHelper;

export class LostPage {
    static get lostPageTitle() {
        return $(
            by.cssContainingText(
                tags.label,
                LostConstants.pageTitle
            ),
            LostConstants.pageTitle
        );
    }
}

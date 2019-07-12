import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';

import { DispositionsConstants } from './dispositions.constants';

const { tags } = HtmlHelper;

export class DispositionsPage {
    static get dispositionsPageTitle() {
        return $(
            by.cssContainingText(
                tags.label,
                DispositionsConstants.pageTitle
            ),
            DispositionsConstants.pageTitle
        );
    }
}

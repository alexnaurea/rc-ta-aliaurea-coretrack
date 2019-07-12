import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';

import { UserLabelsConstants } from './user-labels.constants';
const { tags } = HtmlHelper;

export class UserLabelsPage {

    static get userLabelsPageTitle() {
        return $(by.cssContainingText(tags.label, UserLabelsConstants.pageTitle), UserLabelsConstants.pageTitle);
    }
}

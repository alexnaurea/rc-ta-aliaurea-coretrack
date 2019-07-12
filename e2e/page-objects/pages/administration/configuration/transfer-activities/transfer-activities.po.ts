import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';

import { TransferActivitiesConstants } from './transfer-activities.constants';
const { tags } = HtmlHelper;

export class TransferActivitiesPage {

    static get transferActivitiesPageTitle() {
        return $(by.cssContainingText(tags.label, TransferActivitiesConstants.pageTitle), TransferActivitiesConstants.pageTitle);
    }
}

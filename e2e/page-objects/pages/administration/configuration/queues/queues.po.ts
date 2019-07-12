import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';

import { QueuesConstants } from './queues.constants';
const { tags } = HtmlHelper;

export class QueuesPage {

    static get queuesPageTitle() {
        return $(by.cssContainingText(tags.label, QueuesConstants.pageTitle), QueuesConstants.pageTitle);
    }
}

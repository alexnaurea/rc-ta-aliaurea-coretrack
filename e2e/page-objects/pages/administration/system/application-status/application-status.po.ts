import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';

import { ApplicationStatusConstants } from './application-status.constants';
const { tags } = HtmlHelper;

export class ApplicationStatusPage {

    static get applicationStatusPage() {
        return $(by.cssContainingText(tags.label, ApplicationStatusConstants.pageTitle), ApplicationStatusConstants.pageTitle);
    }
}

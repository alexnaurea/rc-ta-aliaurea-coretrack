import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';

import { SessionsConstants } from './sessions.constants';
const { tags } = HtmlHelper;

export class SessionsPage {

    static get sessionsPageTitle() {
        return $(by.cssContainingText(tags.label, SessionsConstants.pageTitle), SessionsConstants.pageTitle);
    }
}

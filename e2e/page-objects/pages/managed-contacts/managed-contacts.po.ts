import { by } from 'protractor';

import { $ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';

import { ManagedContactsConstants } from './managed-contacts.constants';

const { tags } = HtmlHelper;

export class ManagedContactsPage {
    static get managedContactsPageTitle() {
        return $(
            by.cssContainingText(
                tags.label,
                ManagedContactsConstants.pageTitle
            ),
            ManagedContactsConstants.pageTitle
        );
    }
}

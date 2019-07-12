import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';

import { EventTypesConstants } from './event-types.constants';

const { tags } = HtmlHelper;

export class EventTypesPage {
    static get eventTypesPageTitle() {
        return $(
            by.cssContainingText(
                tags.label,
                EventTypesConstants.pageTitle
            ),
            EventTypesConstants.pageTitle
        );
    }
}

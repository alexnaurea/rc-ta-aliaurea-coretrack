import { by } from 'protractor';

import { $ } from '../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';

import { OpportunitiesConstants } from './opportunities.constants';

const { tags } = HtmlHelper;

export class OpportunitiesPage {
    static get opportunitiesPageTitle() {
        return $(
            by.cssContainingText(
                tags.label,
                OpportunitiesConstants.pageTitle
            ),
            OpportunitiesConstants.pageTitle
        );
    }
}

import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';

import { RolesConstants } from './roles.constants';
const { tags } = HtmlHelper;

export class RolesPage {

    static get rolesPageTitle() {
        return $(by.cssContainingText(tags.label, RolesConstants.pageTitle), RolesConstants.pageTitle);
    }
}

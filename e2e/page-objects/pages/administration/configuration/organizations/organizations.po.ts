import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';

import { OrganizationsConstants } from './organizations.contants';
const { tags } = HtmlHelper;

export class OrganizationsPage {

    static get organizationsPageTitle() {
        return $(by.cssContainingText(tags.label, OrganizationsConstants.pageTitle), OrganizationsConstants.pageTitle);
    }
}

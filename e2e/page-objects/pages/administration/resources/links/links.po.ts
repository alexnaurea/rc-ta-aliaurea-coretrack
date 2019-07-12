import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';

import { LinksConstants } from './links.constants';
const { tags } = HtmlHelper;

export class LinksPage {

    static get linksPageTitle() {
        return $(by.cssContainingText(tags.label, LinksConstants.pageTitle), LinksConstants.pageTitle);
    }
}

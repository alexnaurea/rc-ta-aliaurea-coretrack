import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';

import { DocumentsConstants } from './documents.constants';
const { tags } = HtmlHelper;

export class DocumentsPage {

    static get documentsPageTitle() {
        return $(by.cssContainingText(tags.label, DocumentsConstants.pageTitle), DocumentsConstants.pageTitle);
    }
}

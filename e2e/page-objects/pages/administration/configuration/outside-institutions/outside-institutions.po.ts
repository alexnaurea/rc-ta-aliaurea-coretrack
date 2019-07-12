import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';

import { OutsideInstitutionConstants } from './outside-institutions.constant';

const { tags } = HtmlHelper;

export class OutsideInstitutionPage {

    static get manageOutsideInstitutionPage() {
        return $(by.cssContainingText(tags.label, OutsideInstitutionConstants.pageTitle), OutsideInstitutionConstants.pageTitle);
    }

    static get itemsInGrid() {
        const label = OutsideInstitutionConstants.itemsInGrid;
        return {
            institutionName: $(by.cssContainingText(tags.a, label.institutionName), label.institutionName),
            delete: $(by.cssContainingText(tags.th, label.delete), label.delete),
        };
    }

    static get buttons() {
        const label = OutsideInstitutionConstants.buttons;
        return {
            addOutsideInstitution: $(by.css('a[id*="MenuHolder"] .icon-outside-institution'), label.addOutsideInstitution),
            refresh: $(by.css('.icon-refresh'), label.refresh),
            exportToExcel: $(by.css('.fa-file-excel-o'), label.exportToExcel),
            exportToWord: $(by.css('.fa-file-word-o'), label.exportToWord),
        };
    }

    static get newOutsideInstitutionScreen() {
        return $(by.css('.ui-dialog-title'), OutsideInstitutionConstants.newOutsideInstitutionScreen);
    }

    static get newOutsideInstitutionWindowProperties() {
        const label = OutsideInstitutionConstants.newOutsideInstituionWindowProperties;
        const xpath = 'ancestor::div[contains(@class,"field-container")]';
        return {
            save: $(by.css(`input[value=${label.save}]`), label.save),
            cancel: $(by.css(`input[value=${label.cancel}]`), label.cancel),
            name: $(by.xpath(`//span[text()='${label.name}']/${xpath}//input`), label.name),
        };
    }

    static validationError(message: string) {
        return $(by.xpath(`//label[text()='${message}']`), message);
    }
}

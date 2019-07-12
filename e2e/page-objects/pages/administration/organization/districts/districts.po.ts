import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';
import { xpath } from '../../../../../components/misc-utils/xpath-builder';
import { ContactPageConstant } from '../../../contact-page/contact-page.constants';

import { DistrictsConstants } from './districts.constants';

const { tags, attributes } = HtmlHelper;
const { attributes: { classes: contactClasses } } = ContactPageConstant;

export class DistrictsPage {

    static get manageDistrictsPage() {
        const pageTitle = DistrictsConstants.pageTitle;
        return $(by.cssContainingText(tags.label, pageTitle), pageTitle);
    }

    static get districtsPageItemsGrid() {
        const label = DistrictsConstants.districtsPageItemsGrid;
        return {
            district: $(by.cssContainingText(tags.a, label.district), label.district),
            districtCode: $(by.cssContainingText(tags.a, label.districtCode), label.districtCode),
            active: $(by.cssContainingText(tags.a, label.active), label.active),
        };
    }

    static get buttons() {
        const label = DistrictsConstants.buttons;
        return {
            add: $(by.css('.menu-button .icon-district'), label.add),
            refresh: $(by.css('.icon-refresh'), label.refresh),
            exportToExcel: $(by.css('.fa-file-excel-o'), label.exportToExcel),
            exportToWord: $(by.css('.fa-file-word-o'), label.exportToWord),
            searchButton: $(by.css('.a-searchbar-searchbutton'), label.searchButton),
            searchBox: $(by.css('div[id*="inputWrap"]'), label.searchBox),
            editDistrict: $(by.css('.column-icon .icon-district'), label.editDistrict),
            districtEntry: (index: number) => $(xpath(tags.tBody)
                    .anywhere(tags.tr)
                    .containsAttributesWithOr([attributes.class, attributes.class],
                        [contactClasses.gridRowAptean, contactClasses.gridAltRowAptean])
                    .descendant(tags.td, 2)
                    .nthChild(index)
                    .buildByObject(),
                label.districtEntry),
        };
    }

    static get newDistrictsScreen() {
        return $(by.css('.ui-dialog-title'), DistrictsConstants.newDistrictsScreen);
    }

    static get newDistrictsScreenProperties() {
        const label = DistrictsConstants.newDistrictsScreenProperties;
        return {
            cancel: $(by.css(`input[value='${label.cancel}']`), label.cancel),
            save: $(by.css(`input[value='${label.save}']`), label.save),
            code: $(by.xpath(`//span[text()='${label.code}']//..//..//input`), label.code),
            name: $(by.xpath(`//span[text()='${label.name}']//..//..//input`), label.name),
            description: $(by.css(`textarea[name*='${label.description}']`), label.description),
            status: $(by.xpath(`//span[text()='${label.status}']/../..//select`), label.status),
            close: $(by.css('.ui-icon-closethick'), label.close),
        };
    }

    static statusSelected(status: string) {
        return $(by.xpath(`//option[text()='${status}']`), DistrictsConstants.newDistrictsScreenProperties.status);
    }

    static validationError(message: string) {
        return $(by.xpath(`//label[text()='${message}']`), message);
    }
}

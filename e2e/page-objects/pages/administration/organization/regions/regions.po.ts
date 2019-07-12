import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';
import { xpath } from '../../../../../components/misc-utils/xpath-builder';
import { ContactPageConstant } from '../../../contact-page/contact-page.constants';

import { RegionsConstants } from './regions.constants';

const { tags, attributes } = HtmlHelper;
const { attributes: { classes: contactClasses } } = ContactPageConstant;

export class RegionsPage {

    static get manageRegionsPage() {
        const pageTitle = RegionsConstants.pageTitle;
        return $(by.cssContainingText(tags.label, pageTitle), pageTitle);
    }

    static get regionsPageItemGrid() {
        const label = RegionsConstants.regionsPageItemGrid;
        return {
            region: $(by.cssContainingText(tags.a, label.region), label.region),
            regionCode: $(by.cssContainingText(tags.a, label.regionCode), label.regionCode),
            markets: $(by.cssContainingText(tags.a, label.markets), label.markets),
            active: $(by.cssContainingText(tags.a, label.active), label.active),
        };
    }

    static get buttons() {
        const label = RegionsConstants.buttons;
        return {
            addRegion: $(by.css('.menu-button .icon-region'), label.addRegion),
            refresh: $(by.css('.icon-refresh'), label.refresh),
            groupingDropDownList: $(by.css('select[name*="Menu"]'), label.groupingDropDownList),
            exportToExcel: $(by.css('.fa-file-excel-o'), label.exportToExcel),
            exportToWord: $(by.css('.fa-file-word-o'), label.exportToWord),
            editRegion: $(by.css('.column-icon .icon-region'), label.editRegion),
            regionEntry: (index: number) => $(xpath(tags.tBody)
                    .anywhere(tags.tr)
                    .containsAttributesWithOr([attributes.class, attributes.class],
                        [contactClasses.gridRowAptean, contactClasses.gridAltRowAptean])
                    .descendant(tags.td, 2)
                    .nthChild(index)
                    .buildByObject(),
                label.regionEntry),
        };
    }

    static get newRegionScreen() {
        return $(by.css('.ui-dialog-title'), RegionsConstants.newRegionScreen);
    }

    static get newRegionScreenProperties() {
        const label = RegionsConstants.newRegionScreenProperties;
        return {
            code: $(by.xpath(`//span[normalize-space(text())='${label.code}']//..//..//input`), label.code),
            name: $(by.xpath(`//span[normalize-space(text())='${label.name}']//..//..//input`), label.name),
            district: $(by.xpath(`//span[text()='${label.district}']/../..//select`), label.district),
            status: $(by.xpath(`//span[text()='${label.status}']/../..//select`), label.status),
            cancel: $(by.css(`input[value='${label.cancel}']`), label.cancel),
            save: $(by.css(`input[value='${label.save}']`), label.save),
            description: $(by.css(`textarea[name*='${label.description}']`), label.description),
            close: $(by.css('.ui-icon-closethick'), label.close),
        };
    }

    static validationError(message: string) {
        return $(by.xpath(`//label[text()='${message}']`), message);
    }

    static statusSelected(status: string) {
        return $(by.xpath(`//option[text()='${status}']`), status);
    }

    static districtSelected(district: string) {
        return $(by.xpath(`//option[text()='${district}']`), district);
    }
}

import { by } from 'protractor';

import { Constants } from '../../../../../components/misc-utils/constants';
import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';
import { xpath } from '../../../../../components/misc-utils/xpath-builder';

import { ProductsConstants } from './products.constants';
const { tags } = HtmlHelper;

export class ProductsPage {

    static get manageProductPage() {
        return $(by.cssContainingText(tags.label, ProductsConstants.pageTitle), ProductsConstants.pageTitle);
    }

    static get productPageItemsGrid() {
        const label = ProductsConstants.productPageItemsGrid;
        return {
            product: $(by.cssContainingText(tags.a, label.product), label.product),
            type: $(by.cssContainingText(tags.a, label.type), label.type),
            productCode: $(by.cssContainingText(tags.a, label.productCode), label.productCode),
            gen: $(by.cssContainingText(tags.a, label.gen), label.gen),
            ser: $(by.cssContainingText(tags.a, label.ser), label.ser),
            int: $(by.cssContainingText(tags.a, label.int), label.int),
            active: $(by.cssContainingText(tags.a, label.active), label.active),
            description: $(by.cssContainingText(tags.a, label.description), label.description),
        };
    }

    static get iframe() {
        return $(by.id('ResourceOneIFrame'), ProductsConstants.iframe);
    }

    static get buttons() {
        const label = ProductsConstants.buttons;
        return {
            refresh: $(by.css('.icon-refresh'), label.refresh),
            addProduct: $(by.css('a[id*="MenuHolder"] .icon-product'), label.addProduct),
            search: $(by.css('.icon-find'), label.refresh),
            grouping: $(by.css('select[name*="Menu"]'), label.grouping),
            exportToExcel: $(by.css('.fa-file-excel-o'), label.exportToExcel),
            exportToWord: $(by.css('.fa-file-word-o'), label.exportToWord),
            searchText: $(by.css('input[placeholder="Search"]'), label.search),
            editButton: $(by.css('.column-icon .icon-product'), label.edit),
        };
    }

    static get newProductScreen() {
        return $(by.css('.ui-dialog-title'), ProductsConstants.newProductScreen);
    }

    static enteredSearchValue() {
        return $(by.css('.search-container'), ProductsConstants.buttons.search);
    }

    static searchResults(value: string) {
        return $(by.xpath(`//nobr[contains(text(),'${value}')]`), ProductsConstants.buttons.search);
    }

    static get typeDropDown() {
        return $(by.css('select[id*="MainContentHolder"]'), ProductsConstants.buttons.typeDropDown);
    }

    static get newProductScreenProperties() {
        const label = ProductsConstants.newProductScreenProperties;
        return {
            save: $(by.css('.icon-save'), label.save),
            codeIdErrorMessage: $(by.css('span[id*="id_RequiredFieldValidator"]'), label.codeIdErrorMessage),
            nameErrorMEssage: $(by.css('span[id*="name_RequiredFieldValidator"]'), label.nameErrorMessage),
            descriptionErrorMessage: $(by.css('span[id*="description_RequiredFieldValidator"]'), label.descriptionErrorMessage),
            codeId: $(by.css('input[id*="externalkey_id"]'), label.codeId),
            name: $(by.css('input[id*="name"]'), label.name),
            description: $(by.css(tags.body), label.description),
            cancelButton: $(by.css('.icon-close'), label.close),
            warningMessagePopup: $(by.css('div[aria-describedby="confirmationDialog"]'), label.warningMessagePopup),
            okButtonOnWarning: $(by.xpath('//button[text()="OK"]'), label.okButtonOnWarning),
            genericButton: $(by.css(`div[id*="_generic_ctl00_cd"] div:nth-child(${Constants.number.one})`),
                label.generic),
            genericButtonLabelYes: $(xpath(tags.div)
                .contains('id', label.generic)
                .descendant(tags.div)
                .descendant(tags.label)
                .descendant(tags.span)
                .text(label.yes).buildByObject(), label.yes),
            genericButtonLabelNo: $(xpath(tags.div)
                .contains('id', label.generic)
                .descendant(tags.div)
                .descendant(tags.label)
                .descendant(tags.span)
                .text(label.no).buildByObject(), label.no),
        };
    }

    static enteredDescription(description: string) {
        return $(by.xpath(`//body[text()='${description}']`), ProductsConstants.newProductScreenProperties.description);
    }

    static get descriptionIframe() {
        return $(by.css('iframe[id*="control"]'), ProductsConstants.newProductScreenProperties.description);
    }

    static get title() {
        return {
            productEditionPage: $(xpath(tags.h1).textContains('Product:').buildByObject(),
                ProductsConstants.titles.product),
        };
    }
}

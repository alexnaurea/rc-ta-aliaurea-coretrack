import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';

import { RelationshipsConstants } from './relationships.constants';

const { tags } = HtmlHelper;

export class RelationshipsPage {

    static get manageRelationshipsPage() {
        return $(by.cssContainingText(tags.label, RelationshipsConstants.pageTitle), RelationshipsConstants.pageTitle);
    }

    static get relationshipsPageItemsGrid() {
        const label = RelationshipsConstants.relationshipsPageItemsGrid;
        return {
            code: $(by.cssContainingText(tags.a, label.code), label.code),
            description: $(by.cssContainingText(tags.a, label.description), label.description),
            primary: $(by.cssContainingText(tags.a, label.primary), label.primary),
            sortOrder: $(by.cssContainingText(tags.a, label.sortOrder), label.sortOrder),
            active: $(by.cssContainingText(tags.a, label.active), label.active),
        };
    }

    static get buttons() {
        const label = RelationshipsConstants.buttons;
        return {
            refresh: $(by.css('.icon-refresh'), label.refresh),
            addRelationship: $(by.css('a[id*="MenuHolder"] .icon-relationship'), label.addRelationship),
            exportToExcel: $(by.css('.fa-file-excel-o'), label.exportToExcel),
            exportToWord: $(by.css('.fa-file-word-o'), label.exportToWord),
        };
    }

    static get newRelationshipScreen() {
        return $(by.css('.ui-dialog-title'), RelationshipsConstants.newRelationshipScreen);
    }

    static get newRelationshipScreenProperties() {
        const label = RelationshipsConstants.newRelationShipScreenProperties;
        const xpath = 'ancestor::div[contains(@class,"field-container")]';
        return {
            save: $(by.css(`input[value='${label.save}']`), label.save),
            cancel: $(by.css(`input[value='${label.cancel}']`), label.cancel),
            code: $(by.xpath(`//span[text()='${label.code}']/${xpath}//input`), label.code),
            description: $(by.xpath(`//span[text()='${label.description}']/${xpath}//input`), label.description),
            status: $(by.xpath(`//span[text()='${label.status}']/${xpath}//select`), label.status),
            primaryIndicator: $(by.xpath(`//span[text()='${label.primaryIndicator}']`), label.primaryIndicator),
            sortOrder: $(by.xpath(`//span[text()='${label.sortOrder}']/${xpath}//input`), label.sortOrder),
        };
    }

    static validationError(message: string) {
        return $(by.xpath(`//label[text()='${message}']`), message);
    }

    static statusSelected(status: string) {
        return $(by.xpath(`//option[text()='${status}']`), RelationshipsConstants.newRelationShipScreenProperties.status);
    }

    static piSelected(pi: string) {
        return $(by.xpath(`//option[text()='${pi}']`), RelationshipsConstants.newRelationShipScreenProperties.primaryIndicator);
    }
}

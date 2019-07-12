import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';
import { xpath } from '../../../../../components/misc-utils/xpath-builder';
import { ContactPageConstant } from '../../../contact-page/contact-page.constants';

import { BranchesConstants } from './branches.constants';

const { tags, attributes } = HtmlHelper;
const { attributes: { classes: contactClasses } } = ContactPageConstant;

export class BranchesPage {

    static get manageBranchesPage() {
        const pageTitle = BranchesConstants.pageTitle;
        return $(by.cssContainingText(tags.label, pageTitle), pageTitle);
    }

    static get branchesPageItemsGrid() {
        const label = BranchesConstants.branchesPageItemsGrid;
        return {
            branch: $(by.cssContainingText(tags.a, label.branch), label.branch),
            branchCode: $(by.cssContainingText(tags.a, label.branchCode), label.branchCode),
            region: $(by.cssContainingText(tags.a, label.region), label.region),
            city: $(by.cssContainingText(tags.a, label.city), label.city),
            state: $(by.cssContainingText(tags.a, label.state), label.state),
            phone: $(by.cssContainingText(tags.a, label.phone), label.phone),
            active: $(by.cssContainingText(tags.a, label.active), label.active),
        };
    }

    static get buttons() {
        const label = BranchesConstants.buttons;
        return {
            addBranch: $(by.css('.menu-button .icon-branch'), label.addBranch),
            refresh: $(by.css('.icon-refresh'), label.refresh),
            groupingDropDownList: $(by.css('select[name*="Menu"]'), label.groupingDropDownList),
            exportToExcel: $(by.css('.fa-file-excel-o'), label.exportToExcel),
            exportToWord: $(by.css('.fa-file-word-o'), label.exportToWord),
            editBranch: $(by.css('.column-icon .icon-branch'), label.editBranch),
            branchEntry: (index: number) => $(xpath(tags.tBody)
                .anywhere(tags.tr)
                .containsAttributesWithOr([attributes.class, attributes.class],
                    [contactClasses.gridRowAptean, contactClasses.gridAltRowAptean])
                .descendant(tags.td, 2)
                .nthChild(index)
                .buildByObject(),
                label.branchEntry),
        };
    }

    static get newBranchScreen() {
        return $(by.css('.ui-dialog-title'), BranchesConstants.newBranchScreen);
    }

    static get newBranchScreenProperties() {
        const label = BranchesConstants.newBranchScreenProperties;
        return {
            status: $(by.xpath(`//span[text()='${label.status}']/../..//select`), label.status),
            code: $(by.xpath(`//span[normalize-space(text())='${label.code}']//..//..//input`), label.code),
            name: $(by.xpath(`//span[normalize-space(text())='${label.name}']//..//..//input`), label.name),
            save: $(by.css(`input[value='${label.save}']`), label.save),
            cancel: $(by.css(`input[value='${label.cancel}']`), label.cancel),
            address1: $(by.xpath(`//span[normalize-space(text())='${label.address1}']//..//..//input`), label.address1),
            address2: $(by.xpath(`//span[normalize-space(text())='${label.address2}']//..//..//input`), label.address2),
            city: $(by.xpath(`//span[normalize-space(text())='${label.city}']//..//..//input`), label.city),
            state: $(by.xpath(`//span[normalize-space(text())='${label.state}']//..//..//input`), label.state),
            zip: $(by.xpath(`//span[normalize-space(text())='${label.zip}']//..//..//input`), label.zip),
            country: $(by.xpath(`//span[normalize-space(text())='${label.country}']//..//..//input`), label.country),
            primaryPhone: $(by.xpath(`//span[normalize-space(text())='${label.primaryPhone}']//..//..//input`), label.primaryPhone),
            fax: $(by.xpath(`//span[normalize-space(text())='${label.fax}']//..//..//input`), label.fax),
            description: $(by.css(`textarea[name*='${label.description}']`), label.description),
            region: $(by.xpath(`//span[text()='${label.region}']/../..//select`), label.region),
            groupingOption: $(by.css(`option[value='${label.regionName}']`), label.regionName),
            closeIcon: $(by.css('.ui-icon-closethick'), label.close),
            closeButton: $(by.css(`input[value='${label.close}']`), label.close),
        };
    }

    static statusSelected(status: string) {
        return $(by.xpath(`//option[text()='${status}']`), status);
    }

    static regionSelected(region: string) {
        return $(by.xpath(`//option[text()='${region}']`), region);
    }

    static validationError(message: string) {
        return $(by.xpath(`//label[text()='${message}']`), message);
    }
}

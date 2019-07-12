import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';
import { xpath } from '../../../../../components/misc-utils/xpath-builder';
import { ContactPageConstant } from '../../../contact-page/contact-page.constants';

import { DepartmentsConstants } from './departments.constants';

const { tags, attributes } = HtmlHelper;
const { attributes: { classes: contactClasses } } = ContactPageConstant;

export class DepartmentsPage {

    static get manageDepartmentsPage() {
        const pageTitle = DepartmentsConstants.pageTitle;
        return $(by.cssContainingText(tags.label, pageTitle), pageTitle);
    }

    static get departmentsPageItemsGrid() {
        const label = DepartmentsConstants.departmentsPageItemsGrid;
        return {
            department: $(by.cssContainingText(tags.a, label.department), label.department),
            code: $(by.cssContainingText(tags.a, label.code), label.code),
            description: $(by.cssContainingText(tags.a, label.description), label.description),
            active: $(by.cssContainingText(tags.a, label.active), label.active),
        };
    }

    static get buttons() {
        const label = DepartmentsConstants.buttons;
        return {
            refresh: $(by.css('.icon-refresh'), label.refresh),
            addDepartment: $(by.css('.menu-button .icon-department'), label.addDepartment),
            exportToExcel: $(by.css('.fa-file-excel-o'), label.exportToExcel),
            exportToWord: $(by.css('.fa-file-word-o'), label.exportToWord),
            editDepartment: $(by.css('.column-icon .icon-department'), label.editDepartment),
            departmentEntry: (index: number) => $(xpath(tags.tBody)
                .anywhere(tags.tr)
                .containsAttributesWithOr([attributes.class, attributes.class],
                    [contactClasses.gridRowAptean, contactClasses.gridAltRowAptean])
                .descendant(tags.td, 2)
                .nthChild(index)
                .buildByObject(),
                label.departmentEntry),
            searchButton: $(by.css('.a-searchbar-searchbutton'), label.searchButton),
            searchBox: $(by.css('div[id*="inputWrap"]'), label.searchBox),

        };
    }

    static get newDepartmentScreen() {
        return $(by.css('.ui-dialog-title'), DepartmentsConstants.newDepartmentScreen);
    }

    static get newDepartmentScreenProperties() {
        const label = DepartmentsConstants.newDepartmentScreenProperties;
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
        return $(by.xpath(`//option[text()='${status}']`), DepartmentsConstants.newDepartmentScreenProperties.status);
    }

    static validationError(message: string) {
        return $(by.xpath(`//label[text()='${message}']`), message);
    }
}

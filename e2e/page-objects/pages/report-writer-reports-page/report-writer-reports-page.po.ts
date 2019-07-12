import { by, By } from 'protractor';

import { $, $$ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';

import { ReportWriterReportsConstant } from './report-writer-reports-page.constants';

const { elementNames: eNames, attributes: { classes, name, id } } = ReportWriterReportsConstant;
const { tags } = HtmlHelper;

export class ReportWriterReportsPage {

    static get header() {
        return {
            title: $(by.css(`${tags.label}${classes.title}`),
                eNames.reportWriterReports),
        };
    }

    static get elements() {
        return {
            firstEdit: $(by.xpath(`(//img[@title="${name.edit}"])[1]`), name.edit),
            general: $(by.cssContainingText(tags.span, name.general), name.general),
            sharing: $(by.cssContainingText(tags.span, name.sharing), name.sharing),
            conditionals: $(by.cssContainingText(tags.span, name.conditionals), name.conditionals),
            sharingSelected: $(by.xpath(`.//*[contains(@class,"${classes.selected}")]//*[text()="${name.sharing}"]`),
                name.sharing),
            conditionalsSelected: $(by.xpath(`.//*[contains(@class,"${classes.selected}")]//*[text()="${name.conditionals}"]`),
                name.conditionals),
            createAndEdit: $(by.cssContainingText(tags.div, name.createAndEdit), name.createAndEdit),
            createAndEditForm: $(by.cssContainingText(tags.h2, name.createAndEditForm), name.createAndEditForm),
            preview: $(by.css(`${classes.preview}`), eNames.preview),
            runReport: $(by.css(`a[id*="${id.runReport}"]`), name.runReport),
            addConditionals: $(by.css(`a[id*="${id.addConditionals}"]`), name.addConditionals),
            close: $(by.css(`a[id*="${id.close}"]`), name.close),
            editConditionals: $(by.css(`a[id*="${id.editConditionals}"]`), name.editConditionals),
            selectGroupCheckbox: $(by.css('span.sharing_checkbox_view input'), name.groups),
            selectGroupCheckboxAll: $(by.css('span.sharing_checkbox_view_all input'), name.groupsAll),
            editCheckboxAll: $(by.css('span.sharing_checkbox_edit_all input'), name.editAll),
            editCheckbox: $(by.css('span.sharing_checkbox_edit input'), name.edit),
            exportCheckbox: $(by.css('span.sharing_checkbox_export input'), name.export),
            exportCheckboxAll: $(by.css('span.sharing_checkbox_export_all input'), name.exportAll),
            newReport: $(by.xpath(`(//input[@value="${eNames.newReport}"])`), eNames.newReport),
            newUnionReport: $(by.xpath(`(//input[@value="${eNames.newUnionReport}"])`), eNames.newReport),
            reportName: $(by.cssContainingText(tags.label, eNames.reportName), eNames.reportName),
            columnSelection: $(by.cssContainingText(tags.span, name.columnSelection), name.columnSelection),
            tableRelationships: $(by.cssContainingText(tags.span, name.tableRelationships), name.tableRelationships),
            filtration: $(by.cssContainingText(tags.span, name.filtration), name.filtration),
            groupsSummaries: $(by.cssContainingText(tags.span, name.groupsSummaries), name.groupsSummaries),
            uiType: $(by.cssContainingText(tags.label, name.uIType), name.uIType),
            dropDown: $(by.cssContainingText(tags.li, name.dropDown), name.dropDown),
            checkboxes: $(by.cssContainingText(tags.li, name.checkboxes), name.checkboxes),
            uiTypeDropDown: $(by.css('input.rcbInput'), name.uIType),
            valueInput: $(by.xpath('//label[normalize-space(text())="Values:"]//following-sibling::input'), name.value),
            labelInput: $(by.xpath('//label[normalize-space(text())="Label:"]//following-sibling::input'), name.label),
            add: $(by.xpath(`(//input[@value="${name.add}"])`), name.add),
            selectedConditional: $(by.css('li.rlbItem.rlbActive.rlbSelected'), name.addConditionals),
            removeSelected: $(by.css(`input[value="${eNames.removeSelected}"]`), eNames.removeSelected),
            okCondition: $(by.css(`a[id*=${name.btnSave}]`), name.btnSave),
            editThisConditional: $(by.css(`input[title='${name.editThisConditional}']`), name.editThisConditional),
            makeCopy: $(by.css(`input[title='${name.makeCopy}']`), name.makeCopy),
            remove: $(by.css(`input[title='${name.remove}']`), name.remove),
            valueEntered: $$(by.css('span.rlbText'), name.conditionals),
            topArrow: $$(by.css('span.rlbButtonText'), eNames.top),
            topValue: $(by.xpath("//span[@class='rlbText'][1]"), name.conditionals),
            closeReport: $(by.css('input#btnClose_input'), name.close),
            refresh: $(by.css(`input[title="${eNames.refresh}"]`), eNames.refresh),
            sheetPage: $(by.css(`div[class*='${eNames.sheetPage}']`), eNames.sheetPage),
        };
    }

    static getSpanText(eName: string) {
        return $(by.cssContainingText(tags.span, eName), eName);
    }

    static getTdText(eName: string) {
        return $(by.cssContainingText(tags.td, eName), eName);
    }

    static getCoulumn(coulumnName: string) {
        return $(by.cssContainingText(tags.th, coulumnName), coulumnName);
    }

    static getDivText(coulumnName: string) {
        return $(By.cssContainingText(tags.div, coulumnName), coulumnName);
    }

    static getButtonUnderAction(text: string) {
        return $(by.xpath(`(//img[@title="${text}"])`), text);
    }

    static getButtonInputUnderAction(text: string) {
        return $(by.xpath(`(//input[@title="${text}"])`), text);
    }

    static getHeader(title: string) {
        return $(by.cssContainingText(tags.h2, title), title);
    }

    static getEditIcon(index: number) {
        return $(by.xpath(`(//img[@title="${name.edit}"])[${index}]`), name.edit);
    }

    static get arrowCollapse() {
        return $(By.css('input.rgCollapse'), eNames.collapse);
    }

    static get arrowExpand() {
        return $(By.css('input.rgExpand'), eNames.expand);
    }
}

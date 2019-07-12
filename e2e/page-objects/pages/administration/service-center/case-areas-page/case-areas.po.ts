import { by } from 'protractor';

import { $, $$ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';

import { CaseAreasConstant } from './case-areas.constants';

const { elementNames: eNames, ids, classes, messages: msg } = CaseAreasConstant;
const { tags } = HtmlHelper;

export class CaseAreasPage {

    static get buttons() {
        return {
            addCategory: $(by.css(`a[id$="${ids.addCategory}"]`), eNames.addCategory),
            addSubcategory: $(by.css(`a[id$="${ids.addSubcategory}"]`), eNames.addSubcategory),
        };
    }

    static get title() {
        return $(by.cssContainingText(tags.label, eNames.pageTitle), eNames.pageTitle);
    }

    static get resourceOneIFrame() {
        return $(by.id(ids.resourceOneFrame), eNames.resourceOneFrame);
    }

    static get categoryDialog() {
        return {
            dialogTitle: $(by.cssContainingText(`span[id*=${ids.dialogId}].${classes.dialogTitle}`,
                eNames.newCategory), eNames.newCategory),
            category: $(by.css(`input[id^=${ids.categoryInput}][type=${eNames.text}]`), eNames.category),
            status: $(by.css(`select[id^=${ids.status}]`), eNames.status),
            allStatusOptions: $$(by.css(CaseAreasConstant.statusDropdown.option), eNames.status),
            statusOption: (name: string) => $(
                by.cssContainingText(CaseAreasConstant.statusDropdown.option, name), name),
            save: $(by.css(`input[value=${eNames.save}]`), eNames.save),
            cancel: $(by.css(`input[value=${eNames.cancel}]`), eNames.cancel),
            enterName: $(by.cssContainingText(tags.label, msg.enterName), msg.enterName),
            okButton: $(by.cssContainingText(`${tags.button}.${classes.uiButton}`, eNames.ok), eNames.ok),
        };
    }

    static get subcategoryDialog() {
        return {
            dialogTitle: $(by.cssContainingText(`span[id*=${ids.dialogId}].${classes.dialogTitle}`,
                eNames.newSubcategory), eNames.newSubcategory),
            category: $(by.css(`select[id^=${ids.categoryInput}][id$=${ids.cs}]`), eNames.category),
            allCategoryOptions: $$(by.css(`select[id^=${ids.categoryInput}][id$=${ids.cs}] option`), eNames.category),
            categoryOption: (name: string) => $(
                by.cssContainingText(`select[id^=${ids.categoryInput}][id$=${ids.cs}] option`, name), name),
            subcategory: $(by.css(`input[id^=${ids.categoryInput}][id$=${ids.ps}][type=${eNames.text}]`),
                eNames.subcategory),
            status: $(by.css(`select[id^=${ids.status}][id$=${ids.as}]`), eNames.status),
            allStatusOptions: $$(by.css(CaseAreasConstant.statusDropdown.option), eNames.status),
            statusOption: (name: string) => $(
                by.cssContainingText(CaseAreasConstant.statusDropdown.option, name), name),
            dafaulQueue: $(by.css(`select[id^=${ids.status}][id$=${ids.qu}]`), eNames.defaultQueue),
            private: $(by.css(`select[id^=${ids.status}][id$=${ids.pub}]`), eNames.private),
            reminder: $(by.css(`input[id^=${ids.status}][id$=${ids.rm}][type=${eNames.text}]`), eNames.reminder),
            save: $(by.css(`input[value=${eNames.save}]`), eNames.save),
            cancel: $(by.css(`input[value=${eNames.cancel}]`), eNames.cancel),
            enterName: $(by.cssContainingText(tags.label, msg.enterSubcategoryName), msg.enterSubcategoryName),
            okButton: $(by.cssContainingText(`${tags.button}.${classes.uiButton}`, eNames.ok), eNames.ok),
            queueOption: (name: string) => $(
                by.cssContainingText(`select[id^=${ids.status}][id$=${ids.qu}] option`, name), name),
            privateOption: (name: string) => $(
                by.cssContainingText(`select[id^=${ids.status}][id$=${ids.pub}] option`, name), name),
        };
    }

    static get caseAreas() {
        return {
            nextPage: $(by.xpath(`//a[contains(text(),"${eNames.greater}")]`), eNames.nextPage),
            currentPage: (page: string) => $(
                by.cssContainingText(`tr.${classes.pager} ${tags.b} ${tags.span}`, page), eNames.page),
            item: (name: string) => $(
                by.cssContainingText(`${tags.td} ${tags.nobr}`, name), name),
            itemCategory: (name: string, category: string) => $(by.xpath(
                `//tr[descendant::nobr[contains(text(),"${name}")]][contains(@class,"${classes.itemClass}")]//nobr[contains(text(),"${category}")]`),
                name),
            itemBookIcon: (name: string) => $(by.xpath(
                `//tr[descendant::nobr[contains(text(),"${name}")]][contains(@class,"${classes.itemClass}")]//a`), name),
        };
    }
}

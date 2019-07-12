import { By } from 'protractor';

import { $ } from '../../../../components/misc-utils/df-elements-helper';

import { YearQuartersPageConstants } from './year-quarters-page.constants';

export class YearQuartersPage {

    static get newQuarter() {
        return $(By.xpath('//input[@value="New Quarter"]'), YearQuartersPageConstants.yearTableHeader.quarter);
    }

    static get duplicateYear() {
        return $(By.xpath('//input[@value="Duplicate Year"]'), YearQuartersPageConstants.yearTableHeader.duplicateYear);
    }

    static get pageSize() {
        return $(By.css('.rgPagerLabel'), YearQuartersPageConstants.yearTableHeader.pageSize);
    }

    static get pagination() {
        return $(By.css('.rgPagerCell.NextPrevAndNumeric'), YearQuartersPageConstants.yearTableHeader.pagination);
    }

    static get editIcon() {
        return $(By.xpath('//img[@src="public/images/icons/file_edit.png"]'), YearQuartersPageConstants.yearTableHeader.edit);
    }

    static get editForm() {
        return $(By.css('.inline-form-caption'), YearQuartersPageConstants.yearTableHeader.edit);
    }

    static get quarterDropDown() {
        return $(By.css('.inline-form-inner .rcbInputCellLeft'), YearQuartersPageConstants.yearTableHeader.quarter);
    }

    static getQuarter(quarter: string) {
        return $(By.xpath(`//li[@*='${quarter}']`), YearQuartersPageConstants.yearTableHeader.quarter);
    }

    static get startDate() {
        return $(By.css('input[id*="dateBegin_dateInput_text"]'), YearQuartersPageConstants.yearTableHeader.startDate);
    }

    static get endDate() {
        return $(By.css('input[id*="dateEnd_dateInput_text"]'), YearQuartersPageConstants.yearTableHeader.endDate);
    }

    static get cancelButton() {
        return $(By.css('input[id*="ctl00_MainSection_btnQuarterCancel_input"]'), YearQuartersPageConstants.yearTableHeader.cancel);
    }

    static get okButton() {
        return $(By.css('input[id*="ctl00_MainSection_btnQuarterOK_input"]'), YearQuartersPageConstants.yearTableHeader.ok
        );
    }

    static get yearField() {
        return $(By.css('input[id*="MainSection_txtYear_text"]'), YearQuartersPageConstants.yearTableHeader.year);
    }

    static getUpdatedYear(year: string) {
        return $(By.xpath(`//td[@*='${year}']`), YearQuartersPageConstants.yearTableHeader.year);
    }

    static get lastPage() {
        return $(By.xpath('//input[@title="Last Page"]'), YearQuartersPageConstants.yearTableHeader.lastPage);
    }

    static get deleteIcon() {
        return $(By.xpath('//img[@src="public/images/icons/trash.png"]'), YearQuartersPageConstants.yearTableHeader.delete);
    }

    static getitemsInPage(items: string) {
        return $(By.xpath(`//strong[@*='${items}']`), YearQuartersPageConstants.yearTableHeader.item);
    }

    static get firstPage() {
        return $(By.xpath('//input[@title="First Page"]'), YearQuartersPageConstants.yearTableHeader.firstPage);
    }

    static get previousPage() {
        return $(By.xpath('//input[@title="Previous Page"]'), YearQuartersPageConstants.yearTableHeader.previousPage);
    }

    static get nextPage() {
        return $(By.xpath('//input[@title="Next Page"]'), YearQuartersPageConstants.yearTableHeader.nextPage);
    }

    static get yearDuplicate() {
        return $(By.css('input[id*="cbYearToDuplicate_Inpu"]'), YearQuartersPageConstants.yearTableHeader.year);
    }

    static get cancelButtonDuplicate() {
        return $(By.css('input[id*="btnDuplicateCancel_input"]'), YearQuartersPageConstants.yearTableHeader.cancel);
    }

    static get okButtonDuplicate() {
        return $(By.css('input[id*="btnDuplicateOK_input"]'), YearQuartersPageConstants.yearTableHeader.ok);
    }

    static getYearToDuplicate(year: string) {
        return $(By.xpath(`//li[contains(text(),'${year}')]`), YearQuartersPageConstants.yearTableHeader.year);
    }

    static get duplicateYearDropDown() {
        return $(By.css('div[id*="cbYearToDuplicate_DropDown"]'), YearQuartersPageConstants.yearTableHeader.year);
    }

    static get newYear() {
        return $(By.css('input[id*="txtNewYear_text"]'), YearQuartersPageConstants.yearTableHeader.year);
    }
}

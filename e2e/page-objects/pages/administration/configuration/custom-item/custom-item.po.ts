import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';
import { CommonPage } from '../../../common/common.po';

import { CustomItemConstants } from './custom-item.constants';

const { tags } = HtmlHelper;
const { elementNames: eNames, ids, buttons, scope, table, classes } = CustomItemConstants;
export class CustomItemPage {

    static get customItemsPage() {
        return $(by.cssContainingText(tags.label, CustomItemConstants.pageTitle), CustomItemConstants.pageTitle);
    }

    static get buttons() {
        return {
            addItem: $(by.css('.menu-button .icon-add'), buttons.addItem),
            refresh: $(by.css('.icon-refresh'), buttons.refresh),
            groupingDropDownList: $(by.css('select[name*="Menu"]'), buttons.groupingDropDownList),
            exportToExcel: $(by.css('.fa-file-excel-o'), buttons.exportToExcel),
            exportToWord: $(by.css('.fa-file-word-o'), buttons.exportToWord),
            editItem: $(by.css(`.${classes.selectedRowAptean} .${classes.columnIcon} .${classes.iconDataElement}`),
                buttons.editItem),
            iconUp: $(by.className(classes.iconUp), eNames.iconUp),
            iconDown: $(by.className(classes.iconDown), eNames.iconDown),
        };
    }

    static get tableElements() {
        return {
            itemHeader: $(by.cssContainingText(`[scope="${scope.col}"]`, table.item), table.item),
            typeHeader: $(by.cssContainingText(`[scope="${scope.col}"]`, table.type), table.type),
            activeHeader: $(by.cssContainingText(`[scope="${scope.col}"]`, table.active), table.active),
            unselectedItemName:  (text: string) =>
                $(by.cssContainingText(`.${classes.gridRowAptean} ${tags.td} ${tags.nobr}`, text), text),
            activeCheckbox: $(by.css(`.${classes.selectedRowAptean} .${classes.gridCheckBox} ${tags.input}`),
                eNames.addItem),
            selectedItemName: (text: string) =>
                $(by.cssContainingText(`.${classes.selectedRowAptean} ${tags.td} ${tags.nobr}`, text), text),
        };
    }

    static get editItem() {
        return {
            editItemTitle: $(by.cssContainingText(`.${classes.uiDialogTitle}`, eNames.editItem), eNames.editItem),
            sortableItemTb: $(by.css(`[id*="${ids.sortableDataTxtBox}"]`), eNames.sortableDataTxtBox),
            itemTypeDdl: $(by.css(`[id*="${ids.sortableDataTypeDDL}"]`), eNames.itemType),
            itemTypeDdlOption: (itemType: string) =>
                $(by.cssContainingText(`[id*="${ids.sortableDataTypeDDL}"] ${tags.option}`, itemType), itemType),
            statusDdl: $(by.css(`select[id*="${ids.as}"]`), eNames.statusDdl),
            statusDdlOption: (status: string) =>
                $(by.cssContainingText(`select[id*="${ids.as}"] ${tags.option}`, status), status),
            save: CommonPage.getElementByIdEndsWith(ids.saveButton, eNames.save),
            cancel: $(by.css(`[value="${eNames.cancel}"]`), eNames.cancel),
            close: $(by.css(`${tags.span}.${ids.close}`), eNames.close),
        };
    }

    static get newItemScreen() {
        return $(by.css(`.${classes.uiDialogTitle}`), CustomItemConstants.newItemScreen);
    }
}

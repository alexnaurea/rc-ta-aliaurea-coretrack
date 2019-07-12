import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';
import { CommonPage } from '../../../common/common.po';

import { CustomItemTypesConstants } from './custom-item-types.constants';

const { tags } = HtmlHelper;
const { elementNames: eNames, ids, buttons, scope, table, classes } = CustomItemTypesConstants;
export class CustomItemTypesPage {

    static get customItemsTypesPage() {
        return $(by.cssContainingText(tags.label, CustomItemTypesConstants.pageTitle), CustomItemTypesConstants.pageTitle);
    }

    static get buttons() {
        const label = CustomItemTypesConstants.buttons;
        return {
            addItemType: $(by.css('.menu-button .icon-add'), label.addItemType),
            refresh: $(by.css('.icon-refresh'), buttons.refresh),
            groupingDropDownList: $(by.css('select[name*="Menu"]'), buttons.groupingDropDownList),
            exportToExcel: $(by.css('.fa-file-excel-o'), buttons.exportToExcel),
            exportToWord: $(by.css('.fa-file-word-o'), buttons.exportToWord),
            editItem: $(by.css(
                `.${classes.selectedRowAptean} .${classes.columnIcon} .${classes.iconDataElement}`),
                buttons.editItemType),
        };
    }

    static get tableElements() {
        return {
            itemTypeHeader: $(by.cssContainingText(`[scope="${scope.col}"]`, table.itemType), table.itemType),
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
            editItemTypeTitle: $(by.cssContainingText(`.${classes.uiDialogTitle}`, eNames.editItemType), eNames.editItemType),
            sortableItemTb: $(by.css(`[id*="${ids.sortableDataTxtBox}"]`), eNames.sortableDataTxtBox),
            statusDdl: $(by.css(`select[id*="${ids.as}"]`), eNames.statusDdl),
            statusDdlOption: (status: string) =>
                $(by.cssContainingText(`select[id*="${ids.as}"] ${tags.option}`, status), status),
            save: CommonPage.getElementByIdEndsWith(ids.saveButton, eNames.save),
            cancel: $(by.css(`[value="${eNames.cancel}"]`), eNames.cancel),
            close: $(by.css(`${tags.span}.${ids.close}`), eNames.close),
        };
    }

    static get newItemScreen() {
        return $(by.css('.ui-dialog-title'), CustomItemTypesConstants.newItemScreen);
    }
}

export class CustomItemTypesConstants {
    static readonly pageTitle = 'Manage Custom Item Types';
    static readonly newItemScreen = 'New Item Type';

    static get elementNames() {
        return {
            addItem: 'Add Item',
            sortableDataTxtBox: 'Sortable Data Textbox',
            itemType: 'Item Type',
            statusDdl: 'Status Dropdown list',
            editItemType: 'Edit Item Type',
            save: 'Save',
            cancel: 'Cancel',
            close: 'Close',
            sortableItem: 'Sortable Item',
            status: 'Status',
            activeCheckbox: 'Active Checkbox',
            open: 'OPEN',
            disposition: 'Disposition',
            active: 'Active',
            inactive: 'Inactive',
            iconUp: 'Icon up',
            iconDown: 'Icon down',
        };
    }

    static get buttons() {
        return {
            addItemType: 'Add Item Type',
            refresh: 'Refresh',
            groupingDropDownList: 'Grouping Drop down list',
            exportToExcel: 'Export to Excel',
            exportToWord: 'Export to Word',
            editItemType: 'Edit Item',
            itemEntry: 'Item Entry',
        };
    }

    static get table() {
        return {
            itemType: 'Item Type',
            active: 'Active',
            itemTypeName: 'Disposition',
        };
    }

    static get ids() {
        return {
            sortableDataTxtBox: 'sortableDataTxtBox',
            as: '_as',
            saveButton: 'saveButton',
            actionButton: 'action-button',
            close: 'ui-icon-closethick',
        };
    }

    static get classes() {
        return {
            uiDialogTitle: 'ui-dialog-title',
            gridRowAptean: 'GridRow_Aptean',
            selectedRowAptean: 'SelectedRow_Aptean',
            gridCheckBox: 'gridCheckBox',
            iconUp: 'icon-up',
            iconDown: 'icon-down',
            columnIcon: 'column-icon',
            iconDataElement: 'icon-data-element',
        };
    }

    static get scope() {
        return {
            col: 'col',
        };
    }
}

export class CustomItemConstants {
    static readonly pageTitle = 'Manage Custom Items';
    static readonly newItemScreen = 'New Item';

    static get elementNames() {
        return {
            addItem: 'Add Item',
            sortableDataTxtBox: 'Sortable Data Textbox',
            itemType: 'Item Type',
            statusDdl: 'Status Dropdown list',
            editItem: 'Edit Item',
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
            addItem: 'Add Item',
            refresh: 'Refresh',
            groupingDropDownList: 'Grouping Drop down list',
            exportToExcel: 'Export to Excel',
            exportToWord: 'Export to Word',
            editItem: 'Edit Item',
            itemEntry: 'Item Entry',
        };
    }

    static get table() {
        return {
            item: 'Item',
            type: 'Type',
            active: 'Active',
            itemName: 'Meeting cancelled',
        };
    }

    static get ids() {
        return {
            sortableDataTxtBox: 'sortableDataTxtBox',
            sortableDataTypeDDL: 'sortableDataTypeDDL',
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

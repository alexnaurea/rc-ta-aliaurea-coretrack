export class ProductsConstants {
    static readonly pageTitle = 'Manage Products';
    static readonly iframe = 'Iframe';
    static readonly newProductScreen = 'New Product Screen';
    static readonly searchValue = '1 Year';
    static readonly typeDownValue = 'SQL';

    static get productPageItemsGrid() {
        return {
            product: 'Product',
            type: 'Type',
            productCode: 'Product Code',
            gen: 'Gen',
            ser: 'Ser',
            int: 'Int',
            active: 'Active',
            description: 'Description',
        };
    }

    static get buttons() {
        return {
            refresh: 'Refresh',
            addProduct: 'Add Product',
            search: 'Search',
            grouping: 'Grouping',
            exportToExcel: 'Export to Excel',
            exportToWord: 'Export to Word',
            searchText: 'Search Text',
            typeDropDown: 'Type Drop Down',
            edit: 'Edit',
        };
    }

    static get newProductScreenProperties() {
        return {
            save: 'Save',
            codeIdErrorMessage: 'Code Id Error Message',
            nameErrorMessage: 'Name Error Message',
            descriptionErrorMessage: 'Description Error Message',
            codeId: 'Code/ID',
            name: 'Name',
            description: 'Description',
            close: 'Close',
            warningMessagePopup: 'Warning Message Popup',
            okButtonOnWarning: 'Ok Button On Warning',
            generic: 'generic',
            yes: 'Yes',
            no: 'No',
        };
    }

    static get titles() {
        return {
            product: 'Product',
        };
    }

    static get productCategory() {
        return {
            ira: 'IRA',
            insurance: 'INSURANCE',
            emailAddress: 'Email Address',
        };
    }
}

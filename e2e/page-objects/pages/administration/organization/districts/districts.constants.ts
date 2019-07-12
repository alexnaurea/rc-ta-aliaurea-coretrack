export class DistrictsConstants {
    static readonly pageTitle = 'Manage District';
    static readonly newDistrictsScreen = 'New Districts Screen';
    static readonly activeStatus = 'Active';
    static readonly inactiveStatus = 'Inactive';

    static get districtsPageItemsGrid() {
        return {
            district: 'Shop New Label',
            districtCode: 'Shop New Label Code',
            active: 'Active',
        };
    }

    static get buttons() {
        return {
            add: 'Add',
            refresh: 'Refresh',
            exportToExcel: 'Export to Excel',
            exportToWord: 'Export to Word',
            searchButton: 'Search Button',
            searchBox: 'Search Box',
            editDistrict: 'Edit District',
            districtEntry: 'District Entry',
        };
    }

    static get newDistrictsScreenProperties() {
        return {
            cancel: 'Cancel',
            save: 'Save',
            code: 'Code:',
            name: 'Name:',
            description: 'Description',
            status: 'Status:',
            close: 'Close',
        };
    }

    static get errorMessages() {
        return {
            name: 'Name is required.',
            code: 'Shop New Label Code is required.',
        };
    }
}

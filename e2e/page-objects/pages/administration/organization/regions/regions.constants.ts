export class RegionsConstants {
    static readonly pageTitle = 'Manage Regions';
    static readonly newRegionScreen = 'New Region Screen';
    static readonly activeStatus = 'Active';
    static readonly inactiveStatus = 'Inactive';
    static readonly district = 'QA';

    static get regionsPageItemGrid() {
        return {
            region: 'REGION',
            regionCode: 'REGION CODE',
            markets: 'MARKETS',
            active: 'Active',
        };
    }

    static get buttons() {
        return {
            addRegion: 'Add Region',
            refresh: 'Refresh',
            groupingDropDownList: 'Grouping Drop down list',
            exportToExcel: 'Export to Excel',
            exportToWord: 'Export to Word',
            editRegion: 'Edit Region',
            regionEntry: 'Region Entry',
        };
    }

    static get newRegionScreenProperties() {
        return {
            code: 'Code:',
            name: 'Name:',
            district: 'Shop New Label:',
            status: 'Status:',
            cancel: 'Cancel',
            save: 'Save',
            description: 'Description',
            close: 'Close',
        };
    }

    static get errorMessages() {
        return {
            code: 'Region Code is required.',
            name: 'Name is required.',
        };
    }
}

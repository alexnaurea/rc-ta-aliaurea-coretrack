export class BranchesConstants {
    static readonly pageTitle = 'Manage Branches';
    static readonly newBranchScreen = 'New Branch Screen';
    static readonly activeStatus = 'Active';
    static readonly inactiveStatus = 'Inactive';
    static readonly defaultRegion = 'Default Region';

    static get branchesPageItemsGrid() {
        return {
            branch: 'Branch',
            branchCode: 'Branch Code',
            region: 'Region',
            city: 'City',
            state: 'State',
            phone: 'Phone',
            active: 'Active',
        };
    }

    static get buttons() {
        return {
            addBranch: 'Add Branch',
            refresh: 'Refresh',
            groupingDropDownList: 'Grouping Drop down list',
            exportToExcel: 'Export to Excel',
            exportToWord: 'Export to Word',
            editBranch: 'Edit Branch',
            branchEntry: 'Branch Entry',
        };
    }

    static get newBranchScreenProperties() {
        return {
            status: 'Status:',
            code: 'Code:',
            name: 'Name:',
            save: 'Save',
            cancel: 'Cancel',
            address1: 'Address1:',
            address2: 'Address2:',
            city: 'City:',
            state: 'State:',
            zip: 'Zip:',
            country: 'Country:',
            primaryPhone: 'Primary Phone:',
            fax: 'Fax:',
            description: 'Description',
            region: 'Region:',
            regionName: 'Region_Name',
            close: 'Close',
        };
    }

    static get errorMessages() {
        return {
            code: 'Branch code is required.',
            name: 'Name is required.',
        };
    }
}

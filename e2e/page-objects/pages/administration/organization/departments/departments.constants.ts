export class DepartmentsConstants {
    static readonly pageTitle = 'Manage Departments';
    static readonly newDepartmentScreen = 'New Department Screen';
    static readonly activeStatus = 'Active';
    static readonly inactiveStatus = 'Inactive';

    static get departmentsPageItemsGrid() {
        return {
            department: 'Department',
            code: 'Code',
            active: 'Active',
            description: 'Description',
        };
    }

    static get buttons() {
        return {
            refresh: 'Refresh',
            addDepartment: 'Add Department',
            exportToExcel: 'Export to Excel',
            exportToWord: 'Export to Word',
            editDepartment: 'Edit Department',
            departmentEntry: 'Department Entry',
            searchButton: 'Search Button',
            searchBox: 'Search Box',
        };
    }

    static get newDepartmentScreenProperties() {
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
            name: 'Please enter a Name.',
            code: 'Please enter a Department code.',
        };
    }
}

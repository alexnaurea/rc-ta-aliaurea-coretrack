export class GoalsConstants {
    static readonly pageTitle = 'Manage Goals';
    static readonly newGoalsScreen = 'New Goals Screen';
    static readonly goal = 'Role';
    static readonly roles = 'Roles';
    static readonly users = 'Users';
    static readonly businessDevelopment = 'Business Development';
    static readonly production = 'Production';
    static readonly year = 'Year';
    static readonly quarter = 'Quarter';
    static readonly month = 'Month';
    static readonly dollars = 'Dollars';
    static readonly active = 'Active';
    static readonly inactive = 'Inactive';
    static readonly customizeUserGoalsPopup = 'Customize User Goals Popup';
    static readonly user = 'Adams, John';

    static get buttons() {
        return {
            addGoal: 'Add Goal',
            viewSelector: 'viewSelector',
            ownerSelector: 'OwnerSelector',
            goalEntry: 'Goal Entry',
            customizeUser: 'Customize User',
            refresh: 'Refresh',
            exportToExcel: 'Export to Excel',
            exportToWord: 'Export to Word',
        };
    }

    static get newGoalsScreenProperties() {
        return {
            cancel: 'Cancel',
            save: 'Save',
            delete: 'Delete',
            goal: 'Goal is for:',
            role: 'Role:',
            description: 'Description:',
            saveAndClose: 'Save and Close',
            status: 'Status:',
            deleteConfirmation: 'Delete Confirmation',
        };
    }

    static get customizeUserGoalsProperties() {
        return {
            selectTheUserToCustomize: 'Select the user to customize:',
            startWithRecordsFromThisRole: 'Start with records from this role',
            startWithRecordsFromThisUser: 'Start with records from this user',
            save: 'Save',
            cancel: 'Cancel',
            startWithACleanSlate: 'Start with a clean slate',
            preserve: 'Preserve',
            delete: 'Delete',
            close: 'Close',
        };
    }

    static get error() {
        return {
            periodType: 'Please select a Period Type/Detail.',
            role: 'Please select a Role/User/Branch.',
            targetType: 'Please select a Target Type.',
        };
    }

    static get goalsPageItemsGrid() {
        return {
            type: 'Type',
            description: 'Description',
            goalType: 'Goal Type',
            period: 'Period',
            target: 'Target',
            active: 'Active',
            replicate: 'Replicate',
        };
    }
}

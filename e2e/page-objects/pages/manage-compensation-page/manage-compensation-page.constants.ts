export class ManageCompensationPageConstant {
    static readonly roles = 'Roles';
    static readonly branch = 'Branch';
    static readonly businessDevelopment = 'Business Development';

    static get elementNames() {
        return {
            manageCompensation: 'Manage Compensation',
            dialogBox: 'Edit Compensation Plan',
            detailsDialogBox: 'Edit Compensation Plan Detail',
            plan: 'Compensation Plan',
            edit: 'Edit',
            saveButton: 'Save Button',
            addCompensation: 'Add Compensation',
            newCompensationPlan: 'New Compensation Plan',
            viewSelector: 'viewSelector',
            ownerSelector: 'OwnerSelector',
            compensationEntry: 'Compensation Entry',
            addACompDetail: 'Add a Comp Detail',
            compIsFor: 'Comp is for:',
        };
    }

    static get attributes() {
        return {
            classes: {
                title: '.toolbar-title',
                dialogTitle: '.ui-dialog-title',
                menuButton: '.menu-button',
                actionButton: '.action-button',
            },
            name: {
                existingCompDetails: 'Existing Comp Details:',
                compDetails: 'Comp Details:',
            },
            value: {
                saveValue: 'Save',
            },
        };
    }

    static get error() {
        return {
            compensationPlanType: 'Please select a Compensation Plan Type.',
            branch: 'Please select a Role/User/Branch.',
        };
    }
}

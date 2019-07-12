export class OutsideInstitutionConstants {
    static readonly pageTitle = 'Manage Outside Institutions';
    static readonly newOutsideInstitutionScreen = 'New Outside Institution Screen';

    static get itemsInGrid() {
        return {
            institutionName: 'Institution Name',
            delete: 'Delete',
        };
    }

    static get buttons() {
        return {
            addOutsideInstitution: 'Add Outside Institution',
            refresh: 'Refresh',
            exportToExcel: 'Export to Excel',
            exportToWord: 'Export to Word',
        };
    }

    static get newOutsideInstituionWindowProperties() {
        return {
            save: 'Save',
            cancel: 'Cancel',
            name: 'Name:',
        };
    }

    static get error() {
        return {
            name: 'Please enter a Outside Institution name.',
        };
    }
}

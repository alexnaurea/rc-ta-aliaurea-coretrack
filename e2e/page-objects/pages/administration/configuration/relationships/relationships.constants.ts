export class RelationshipsConstants {
    static readonly pageTitle = 'Manage Relationships';
    static readonly newRelationshipScreen = 'New Relationship Screen';
    static readonly activeStatus = 'Active';
    static readonly inactiveStatus = 'Inactive';
    static readonly piYes = 'Yes';
    static readonly piNo = 'No';

    static get relationshipsPageItemsGrid() {
        return {
            code: 'Code',
            description: 'Description',
            primary: 'Primary',
            sortOrder: 'Sort Order',
            active: 'Active',
        };
    }

    static get buttons() {
        return {
            refresh: 'Refresh',
            addRelationship: 'Add Relationship',
            exportToExcel: 'Export to Excel',
            exportToWord: 'Export to Word',
        };
    }

    static get newRelationShipScreenProperties() {
        return {
            save: 'Save',
            cancel: 'Cancel',
            code: 'Code:',
            description: 'Description:',
            status: 'Status:',
            primaryIndicator: 'Primary Indicator:',
            sortOrder: 'Sort Order:',
        };
    }

    static get errorMessages() {
        return {
            code: 'Please enter a Relationship code.',
            description: 'Please enter a Description.',
        };
    }
}

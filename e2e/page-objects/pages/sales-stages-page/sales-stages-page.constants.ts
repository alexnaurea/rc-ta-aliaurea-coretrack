export class SalesStagesPageConstant {

    static get elementNames() {
        return {
            manageSalesStages: 'Manage Sales Stages',
            addSalesStage: 'Add Sales Stage',
            newSalesStage: 'New Sales Stage',
            editSalesStage: 'Edit Sales Stage',
            saveButton: 'Save Button',
            firstSalesStageEntry: 'First Sales Stage Entry',
            firstSalesStageEntryStatus: 'First Sales Stage Entry Status',
            status: 'Status:',
        };
    }

    static get classes() {
        return {
            menuButton: 'menu-button',
            actionButton: 'action-button',
            fieldContainer: 'field-container',
            gridCheckBox: 'gridCheckBox',
            gridRowAptean: 'GridRow_Aptean',
        };
    }

    static get attributes() {
        return {
            saveValue: 'Save',
        };
    }

    static get values() {
        return {
            statusValues: {
                active: 'Active',
                inactive: 'Inactive',
            },
        };
    }

}

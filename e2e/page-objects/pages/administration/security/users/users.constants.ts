export class UsersConstants {
    static readonly pageTitle = 'Manage Users';

    static get elementNames() {
        return {
            user: 'User',
            dashboard: 'Dashboard',
            queues: 'Queues',
            pipelineBranch: 'Pipeline Branch',
            compensation: 'Compensation',
            branches: 'Branches',
            applicationStatus: 'Application Status',
            customItemTypes: 'Custom Item Types',
            caseAreas: 'Case Areas',
            corrections: 'Corrections',
            addNewRule: 'Add New Rule',
            customItems: 'Custom Items',
            addInstitution: 'Add Institution',
            ayan: 'Ayan',
            save: 'Save',
        };
    }

    static get classes() {
        return {
            tabStrip: 'vtabstrip',
            selected: 'selected',
            subSection: 'sub-section',
            treeNode: 'TreeNode',
            tab: 'innerWrap',
            gridRowAptean: 'GridRow_Aptean',
        };
    }

    static get ids() {
        return {
            saveButton: 'savebutton',
            contentCellPadded: 'contentCellPadded',
        };
    }

    static get leftPanel() {
        return {
            overview: 'Overview',
            permissions: 'Permissions',
        };
    }
}

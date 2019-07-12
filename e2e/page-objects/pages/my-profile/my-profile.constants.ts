export class MyProfilePageConstant {

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
        };
    }

    static get ids() {
        return {
            saveButton: 'savebutton',
        };
    }

    static get leftPanel() {
        return {
            overview: 'Overview',
            permissions: 'Permissions',
        };
    }
}

export class ManageUserPageConstant {

    static get elementNames() {
        return {
            manageUser: 'Manage Users',
            user: 'User',
            dialogBox: 'Edit Compensation Plan',
            detailsDialogBox: 'Edit Compensation Plan Detail',
            plan: 'Compensation Plan',
            usersList: 'User Lists',
            usersIcon: 'User Icon',
            edit: 'Edit',
        };
    }

    static get leftPanel() {
        return {
            overview: 'Overview',
            permissions: 'Permissions',
        };
    }

    static get attributes() {
        return {
            classes: {
                title: '.toolbar-title',
                tabStrip: 'vtabstrip',
                subSection: 'sub-section',
                tab: 'innerWrap',
                usersList: 'userslist',
                dialogTitle: '.ui-dialog-title',
            },
            name: {
                existingCompDetails: 'Existing Comp Details:',
                compDetails: 'Comp Details:',
            },
            placeHolder: {
                search: 'Search',
            },
        };
    }
}

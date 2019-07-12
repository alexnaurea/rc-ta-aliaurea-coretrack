export class BrowsePageConstant {

    static get elementNames() {
        return {
            browse: 'Standard Reports',
            signOff: 'Sign Off',
            selectedUser: 'Selected User',
            search: 'Search',
            select: 'Select',
            selectUser: 'Select User',
            userList: 'User List',
            userCheckBox: 'User Check Box',
            report: 'Report',
            categoryColumn: 'Click here to sort',
            category: 'Category',
            refresh: 'Refresh',
            excel: 'Excel',
            word: 'Word',
            noGrouping: '(No Grouping)',
            groupText: 'Category',
            collapseGroup: 'Collapse group',
            expandGroup: 'Expand group',
        };
    }

    static get lostReportItems() {
        return {
            search: '.icon-find',
            type: 'Type',
            runReport: 'Run Report',
        };
    }

    static get typeItems() {
        return {
            lostLeadByOwner: 'Lost Leads By Owner',
            lostAccountByOwner: 'Closed Accounts By Owner',
            lostLeadByReferrer: 'Lost Leads By Referrer',
            lostAccountByReferrer: 'Closed Accounts By Referrer',
        };
    }

    static get attributes() {
        return {
            classes: {
                title: '.toolbar-title',
                menu: 'menubutton',
                userDialogTitle: '.ui-dialog-title',
                reportIcon: 'icon-report',
            },
            id: {
                userList: 'gridUserListing_GridHeader',
            },
            name: {
                compensationInfo : 'Compensation Info',
                lost: 'Lost',
            },
            value: {
                runReport: 'Run Report',
                runInBackground : 'Run In Background',
            },
            alt: {
                ascending: 'Sorted asc',
                descending : 'Sorted desc',
            },
        };
    }
}

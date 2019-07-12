export class SessionsPageConstant {

    static get elementNames() {
        return {
            sessions: 'Sessions',
            details: 'Details',
            rowMode: 'Row Mode',
            logDropDown: 'Log DropDown',
            listView: 'Show log in list view',
            readView: 'Show log in read view',
            userIcon: 'User icon',
            detailsGrid: 'Details grid',
            columnIcon: 'Column icon',
            close: 'Close',
            refresh: 'Refresh',
            grouping: 'Grouping',
            role: 'Role',
        };
    }

    static get attributes() {
        return {
            classes: {
                title: '.toolbar-title',
                rowFirst: 'GridRow_Aptean',
                details: '.levelwrap .last .wrap',
                detailsSelected: '.levelwrap .last .selected',
                logDropDown: '.select-menu',
                iconUser: 'icon-user',
                iconRefresh: 'icon-refresh',
                viewDDLMenu: 'viewDDLMenu',
            },
            name: {
                user: 'User',
            },
            id: {
                ctl00MainContentHolderGridDetails: 'ctl00_MainContentHolder_gridDetails',
                ctl00MainContentHolderGridDetailsCtl01: 'ctl00_MainContentHolder_gridDetails_ctl01',
            },
        };
    }

    static get sessionColumns() {
        return {
            user: 'User',
            entry: 'Entry',
            date: 'Date',
            started: 'Started',
            expires: 'Expires',
            description: 'Description',
            status: 'Status',
            lastAccessed: 'Last Accessed',
            ip: 'IP',
        };
    }

    static get sort() {
        return {
            asc: 'Sorted asc',
            desc: 'Sorted desc',
        };
    }
}

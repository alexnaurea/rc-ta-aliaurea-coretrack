export class ReferralsConstant {

    static get names() {
        return {
            referrals: 'Referrals',
            referralsRows: 'Referrals rows',
            userFilter: 'User filter',
            pagination: 'Pagination',
            grouping: 'Grouping',
            addOpportunity: 'Add Opportunity',
            groupingIcon: 'Grouping icon',
            expandGroup: 'Expand group',
            collapseGroup: 'Collapse group',
            sortedAsc: 'Sorted asc',
            sortedDesc: 'Sorted desc',
            sortIcon: 'Sort icon',
            refresh: 'Refresh',
            viewByAllOrUnreadOnly: 'View by All or Unread Only ',
            searchByContact: 'Search by Contact ',
            exportToExcel: 'Export to Excel ',
            exportToWord: 'Export to Word',
            pull: 'Pull',
            opportunityProductType: 'Opportunity product type',
            close: 'Close',
            activityCard: 'Activity card',
        };
    }

    static get titles() {
        return {
            referrals: 'Referrals',
            referralsRows: 'Referrals rows',
        };
    }

    static get attributes() {
        return {
            class: {
                gridRowAptean: 'GridRow_Aptean',
                gridPagerAptean: 'GridPager_Aptean',
                ctMenuHolderPageGroupingSelector: 'ctl00$MenuHolder$ctl00$__Page_groupingSelector',
                iconAdd: 'icon-add',
                gridHeaderAptean: 'GridHeader_Aptean',
                iconRefresh: 'icon-refresh',
                fileExcel: 'fa-file-excel-o',
                fileWord: 'fa-file-word-o',
                iconOpportunity: 'icon-opportunity',
                iconClose: 'icon-close',
                entityCardItem: 'entity-card-item',
            },
            name: {
                ctMenuHolderPageUserDD: 'ctl00$MenuHolder$ctl00$__Page_userDD',
            },
        };
    }

    static get testData() {
        return {
            adminUser: 'Admin, R1',
        };
    }

    static get groupingOptions() {
        return {
            status: 'Status',
            outsideBusiness: 'Outside Business',
            noGrouping: '(No Grouping)',
        };
    }

    static get referralsColumns() {
        return {
            productType: 'Product Type',
            product: 'Product',
            contact: 'Contact',
            amount: 'Amount',
            status: 'Status',
            salesStage: 'Sales Stage',
            owner: 'Owner',
            outside: 'Outside',
            modified: 'Modified',
            qual: 'Qual',
        };
    }
}

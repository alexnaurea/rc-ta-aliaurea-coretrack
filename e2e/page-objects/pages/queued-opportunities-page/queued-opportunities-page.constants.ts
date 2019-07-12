export class QueuedOpportunitiesPageConstant {

    static get elementNames() {
        return {
            queuedOpportunities: 'Queued Opportunities',
            refresh: 'refresh',
            opportunityList: 'OpportunityList',
            noGrouping: '(No Grouping)',
            outsideBusiness: 'Outside Business',
            queueBranch: 'Queue Branch',
            owner: 'Owner',
            dollarSign: 'Dollar sign',
            queueFilter: 'Queue Filter',
            queueFilterOption: 'Queue Filter Option',
            queueList: 'Queue List',
        };
    }

    static get attributes() {
        return {
            id: {
                refresh: '___PagegridResetButton',
                queueFilter: '___Page_viewSelector',
            },
            classes: {
                gridDataDiv: 'GridDataDiv_Aptean',
                columnIcon: 'column-icon',
            },
        };
    }
}

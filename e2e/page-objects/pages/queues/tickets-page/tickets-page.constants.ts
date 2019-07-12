export class TicketsPageConstant {

    static get elementNames() {
        return {
            ticketQueue: 'Tickets Queue',
            selectUser: 'Select User',
            dialogBox: 'Dialog Box',
            selectQueue: 'Select Queue',
            ticketIcon: 'Tickets Icon',
            details: 'Details',
            queues: 'Queues',
            search: 'Search',
        };
    }

    static get attributes() {
        return {
            classes: {
                dialogTitle: '.ui-dialog-title',
                title: '.toolbar-title',
                select: 'selected',
                queues: '.icon-queues',
                search: '.icon-find',
            },
            id: {
                ownerSelector: 'ownerselector',
            },
            name: {
            },
        };
    }
}

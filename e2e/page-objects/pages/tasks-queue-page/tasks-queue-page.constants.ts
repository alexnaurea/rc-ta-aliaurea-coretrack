export class TasksQueuePageConstant {

    static get elementNames() {
        return {
            tasksQueue: 'Tasks Queue',
            noGrouping: '(No Grouping)',
        };
    }

    static get attributes() {
        return {
            classes: {
                tag: 'tag',
                iconAdd: 'icon-add',
                gridDataDiv: 'GridDataDiv',
                columnIcon: 'column-icon',
            },
            name: {
                grouping: '_groupingSelector',
            },
        };
    }
}

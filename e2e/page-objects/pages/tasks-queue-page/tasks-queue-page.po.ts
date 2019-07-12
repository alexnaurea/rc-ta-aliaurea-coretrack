import { by } from 'protractor';

import { $ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';

import { TasksQueuePageConstant } from './tasks-queue-page.constants';

const { elementNames: eNames, attributes: { classes , name } } = TasksQueuePageConstant;
const { tags, attributes } = HtmlHelper;

export class TasksQueuePage {

    static get pageTitle() {
        return $(by.cssContainingText(tags.label,
            eNames.tasksQueue),
            eNames.tasksQueue);
    }

    static get header() {
        return {
            addTaskIcon: $(by.css(`.${classes.iconAdd}.${classes.tag}`),
                eNames.tasksQueue),
            grouping: $(by.css(`${tags.select}[${attributes.name}$='${name.grouping}']`),
                eNames.noGrouping),
        };
    }

    static get queueTask() {
        return {
            specific: (subject: string) => $(by.cssContainingText(tags.nobr,
                subject),
                subject),
            queueTaskList: $(by.xpath(`(//${tags.div}[contains(@${attributes.class},'${classes.gridDataDiv}')]
                //${tags.tr}//${tags.td}[@${attributes.class}='${classes.columnIcon}'])[1]`), eNames.tasksQueue),
        };
    }

}

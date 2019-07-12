import { by } from 'protractor';

import { $ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { CommonPage } from '../common/common.po';

import { NewTaskPageConstant } from './new-task-page.constants';

const { elementNames: eNames, attributes: { id, classes, onclick } } = NewTaskPageConstant;
const { tags } = HtmlHelper;
export class NewTaskPage {

    static get form() {
        return {
            newTaskTitle: $(by.cssContainingText(tags.h1,
                eNames.newTask),
                eNames.newTask),
            subject: CommonPage.getElementByIdEndsWith(id.taskNameControl,
                eNames.subject),
            owner: CommonPage.getElementByIdEndsWith(id.ownerTypeSelector,
                eNames.owner),
            task: CommonPage.getElementByIdEndsWith(id.queueSelector,
                eNames.task),
            branch: CommonPage.getElementByIdEndsWith(id.queueBranchSelector,
                eNames.branch),
            status: CommonPage.getElementByIdEndsWith(id.statusChooser,
                eNames.status),
            dateStartLabel: $(by.css(`[id*='${id.startDate}'][id$='${id.controlDateInput}']`),
                eNames.dateStartLabel),
            dateDueLabel: $(by.css(`[id*='${id.dueDate}'][id$='${id.controlDateInput}']`),
                eNames.dateDueLabel),
            calender: {
                startDate: $(by.css(`.${classes.iconCalendar}[onclick*='${onclick.startDateControl}']`),
                    eNames.startDateCalender),
                dueDate: $(by.css(`.${classes.iconCalendar}[onclick*='${onclick.dueDateControl}']`),
                    eNames.dueDateCalender),
            },
            save: $(by.className(classes.iconSave),
                eNames.save),
            close: $(by.className(classes.iconClose),
                eNames.save),
            descriptionIframe: CommonPage.getElementByIdEndsWith(id.noteIframe,
                id.noteIframe),
            description: $(by.css(`${tags.body}`),
                eNames.description),
            saveAndClose: CommonPage.getElementByIdEndsWith(id.saveAndClose,
                id.saveAndClose),
            subjectIsRequired: CommonPage.getElementByIdEndsWith(id.taskNameValidator,
                eNames.subjectRequired),
            syncToOutlookOff: $(by.css(`${tags.div}[id*='${id.syncToOutlook}'] label.checkbox-off`),
                eNames.syncToOutlook),
            syncToOutlookOn: $(by.css(`${tags.div}[id*='${id.syncToOutlook}'] label.checkbox-on`),
                eNames.syncToOutlook),
            invalidStartDate: CommonPage.getElementByIdEndsWith(id.invalidStartDate,
                eNames.invalidStartDate),
            closeLink: CommonPage.getElementByIdEndsWith(id.close,
                eNames.close),
        };
    }

}

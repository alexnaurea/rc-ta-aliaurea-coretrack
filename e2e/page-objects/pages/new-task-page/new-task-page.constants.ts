import { Constants } from '../../../components/misc-utils/constants';
import { DropdownField } from '../models/dropdown-field';

function createDropdownField(text: string, index: number): DropdownField {
    return Object.freeze({ text, index });
}

const { zero } = Constants.number;

export class NewTaskPageConstant {
    static readonly queue = createDropdownField('Queue', zero);
    static readonly declined = createDropdownField('Declined', zero);
    static readonly taskQueueForEmail = createDropdownField('Task Queue for Email Notification', zero);
    static readonly cornell = createDropdownField('Cornell', zero);
    static readonly completed = createDropdownField('Completed', zero);
    static readonly undetermined = createDropdownField('Undetermined', zero);
    static readonly acceptedInProgress = createDropdownField('Accepted/In Progress', zero);

    static get elementNames() {
        return {
            newTask: 'New Task',
            subject: 'Subject',
            owner: 'Owner',
            task: 'Task',
            branch: 'Branch',
            startDateCalender: 'StartDate Calender',
            dueDateCalender: 'DueDate Calender',
            dateStartLabel: 'DateStart Label',
            dateDueLabel: 'DateDue Label',
            status: 'Status',
            save: 'Save',
            description: 'Description',
            subjectRequired: 'SUBJECT is required.',
            syncToOutlook: 'Sync To OutLook',
            invalidStartDate: 'Date Start is invalid.',
            close: 'close',
        };
    }

    static get attributes() {
        return {
            classes: {
                iconCalendar: 'icon-calendar',
                iconSave: 'icon-save',
                iconClose: 'icon-close',
            },
            id: {
                taskNameControl: 'task_name_control',
                ownerTypeSelector: 'ownerTypeSelector',
                queueSelector: 'queueSelector',
                queueBranchSelector: 'queueBranchSelector',
                controlDateInput: 'control_dateInput',
                statusChooser: 'statuschooser',
                startDate: 'start_date',
                dueDate: 'due_date',
                noteIframe: 'note_control_contentIframe',
                saveAndClose: '_saveandclosebutton',
                taskNameValidator: 'task_name_RequiredFieldValidator',
                syncToOutlook: '_tasksynctoext_',
                invalidStartDate: 'start_date_InvalidFieldValidator',
                close: '_closebutton',
            },
            onclick: {
                startDateControl: 'start_date_control',
                dueDateControl: 'due_date_control',
            },
        };
    }
}

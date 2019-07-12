import { By } from 'protractor';

import { $ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';

import { ToDoListPageConstant } from './to-do-list.constants';

const { elementNames: eNames } = ToDoListPageConstant;
const { tags } = HtmlHelper;

export class ToDoListPage {
    private static readonly names = ToDoListPageConstant.elementNames;
    private static readonly attributes = ToDoListPageConstant.attributes;
    private static readonly ids = ToDoListPageConstant.attributes.ids;
    private static readonly classes = ToDoListPageConstant.attributes.classes;
    private static readonly elementNames = ToDoListPageConstant.elementNames;

    static get pageTitle() {
        return $(By.cssContainingText(tags.label, eNames.toDoList), eNames.toDoList);
    }

    static get iframes() {
        const iframe = ToDoListPageConstant.elementNames.iframe;
        return {
            event: $(By.css(`[src*="${this.attributes.src.eventList}"]`), iframe),
            newEvent: $(By.css('.contentFrame'), iframe),
            taskList: $(By.css(`iframe[src*="${this.attributes.src.taskList}"]`), iframe),
            taskPage: $(By.css(`iframe[src*="${this.attributes.src.taskPage}"]`), iframe),
            noteDescription: $(By.css('.notes-container iframe.x-htmleditor-iframe'), iframe),
        };
    }

    static get filters() {
        return {
            myActivities: $(By.xpath('(//input[@aria-autocomplete="list"])[1]'), this.names.myActivities),
            overDue: $(By.xpath('(//input[@aria-autocomplete="list"])[2]'), this.names.overdue),
            activitiesListArrow: $(By.xpath(
                '(//div[contains(@class,"x-form-arrow-trigger-default")])[1]'), this.names.myActivities),
            overdueListArrow: $(By.xpath(
                '(//div[contains(@class,"x-form-arrow-trigger-default")])[2]'), this.names.overdue),
        };
    }

    static get search() {
        const search = this.names.search;
        return {
            inputBox: $(By.css(`input[placeholder='${search}']`), search),
            button: $(By.css(`[id*='${this.ids.triggerSearch}']`), search),
            close: $(By.css(`[id*='${this.ids.triggerClear}']`), search),
            refresh: $(By.css('.icon-refresh'), this.names.refresh),
            globalSearchButton: $(By.css('.a-searchbar-searchbutton .fa-search'), search),
            globalSearchTextbox: $(By.xpath(`(//input[@placeholder="${this.names.searchInContacts}"])[1]`), search),
        };
    }

    static get listElements() {
        const names = this.names;
        const classes = this.classes;
        return {
            editButton: $(By.css(`.${this.classes.selectedActivity} .${classes.iconPencil}`), names.editButton),
            selectedSubjectName: $(By.css(`.${classes.selectedActivity} .${classes.activityName}`), names.subject),
            completedTick: $(By.css(`.${classes.selectedActivity} .${classes.iconCheck}`), names.toDoList),
            searchTb: $(By.css(`input[id*="${this.ids.r1searchtextbox}"]`), names.search),
            attachIcon: $(By.css(`.${classes.selectedActivity} .${this.classes.attachTick}`), names.attachIcon),
        };
    }

    static get editEventDialog() {
        const editEvent = ToDoListPageConstant.editEvent;
        const editTb = this.names.editTb;
        return {
            save: $(By.cssContainingText(`span[data-ref="${this.attributes.dataRef.btnInnerEl}"]`,
                editEvent.save), editEvent.save),
            close: $(By.css('i.icon-delete'), editEvent.close),
            cancel: $(By.cssContainingText(
                `span[data-ref="${this.attributes.dataRef.btnInnerEl}"]`, editEvent.cancel), editEvent.cancel),
            today: $(By.cssContainingText(
                `span[data-ref="${this.attributes.dataRef.btnInnerEl}"]`,
                this.names.today), this.names.today),
            overview: $(By.cssContainingText(
                `span[data-ref="${this.attributes.dataRef.btnInnerEl}"]`, this.names.overview), this.names.overview),
            occuredCheckbox: $(By.css(`div[id*="${this.ids.fieldcontainer}"] span[id*="${this.ids.checkbox}"]`),
                this.names.occuredCheckbox),
            depositionDdl: $(By.xpath(
                `(//div[contains(@id, "${this.ids.triggerPicker}")])[9]`),
                this.attributes.placeholder.selectDisposition),
            depositionDdlElement: $(By.cssContainingText(
                `.${this.classes.xUnselectable} div[role="${this.attributes.role.option}"]`,
                this.names.leftMessage), this.names.leftMessage),
            depositionSelected: $(By.cssContainingText(
                `.${this.classes.boundlistSelected}`,
                this.names.leftMessage),
                this.names.leftMessage),
            subjectTextbox: $(By.xpath(`(//input[contains(@id,"${this.ids.textfield}")])[3]`), editTb),
            startTime: $(By.xpath(`(//input[@title="${this.attributes.title.timeFormat}"])[1]`), editTb),
            endTime: $(By.xpath(`(//input[@title="${this.attributes.title.timeFormat}"])[2]`), editTb),
            pickStartDate: $(By.xpath(`(//div[contains(@id, "${this.ids.datefield}")])[5]`), editTb),
            pickEndDate: $(By.xpath(`(//div[contains(@id, "${this.ids.datefield}")])[11]`), editTb),
            noteTitleTb: $(By.css(`input[name="${this.names.subjectLower}"]`), this.names.subjectLower),
            noteDescriptionTb: $(By.css(tags.body), this.names.subjectLower),
            endTimeTask: $(By.css(
                `input[id*="${this.ids.dueDateDontrolDateInput}"].datetime-input`), this.names.editTb),
            endDateTb: $(By.css(`input[id*="${this.ids.startDateDateInput}"]`), this.names.addEvent),
            statusDdl: $(By.css(
                `input[placeholder="${this.attributes.placeholder.selectStatus}"]`),
                this.attributes.placeholder.selectStatus),
        };
    }

    static get contact() {
        const testData = ToDoListPageConstant.testData;
        return {
            contactItem: $(By.css(`span[title="${testData.alec}"]`), this.names.contact),
            closeSnapshotIcon: $(By.css('.ui-icon-closethick'), this.names.contact),
            closeGlobalContactPage: $(By.css('.icon-close'), this.names.contact),
            okButton: $(By.css('.ui-dialog-buttonset button.ui-widget'), this.names.ok),
        };
    }

    static get event() {
        const addEvent = this.names.addEvent;
        return {
            addEvent: $(By.css(`.secondary-action-container a[title="${addEvent}"]`), addEvent),
            addTask: $(By.css(`.secondary-action-container a[title="${this.names.addTask}"]`), this.names.addTask),
            subjectTextbox: $(By.css(`input[id*="${this.ids.eventName}"]`), addEvent),
            subjectTaskTextbox: $(By.css(`input[id*="${this.ids.taskNameControl}"]`), this.names.addTask),
            endDateTb: $(By.css(`input[id*="${this.ids.startDateDateInput}"]`), addEvent),
            saveActivity: $(By.css(`[title="${ToDoListPageConstant.testData.save}"]`), this.names.saveEvent),
            saveTask: $(By.cssContainingText('span.x-btn-inner-default-small',
                ToDoListPageConstant.testData.save),
                this.names.saveTask),
            addNote: $(By.css(
                `[title="${this.attributes.title.addNote}"] .create-icon`),
                this.attributes.title.addNote),
            addedNote: $(By.css(`a[class="${this.classes.download}"]`), this.elementNames.notes),
            deleteNote: $(By.css('.icon-garbage-can'), this.elementNames.deleteNote),
        };
    }

    static getItemInDdl(item: string) {
        return $(By.cssContainingText(`[aria-hidden="false"] .${this.classes.xBoundListItem}`, item), item);
    }

    static get refreshIcon() {
        return $(By.css('.icon-refresh'), this.elementNames.refresh);
    }

    static getTabElement(tabName: string) {
        return $(By.cssContainingText('span.innerWrap', tabName), tabName);
    }

    static getEventElement(subjectName: string) {
        return $(By.cssContainingText('nobr', subjectName), subjectName);
    }

    static getActivityElement(subjectName: string) {
        return $(By.cssContainingText('.activity-name span', subjectName), subjectName);
    }

    static getUsernameElement(userName: string) {
        return $(By.cssContainingText('span.activity-assignedby-value', userName), userName);
    }

    static getDateInActivityList(dateTime: string) {
        return $(By.cssContainingText(
            `span[class="${this.classes.dateValue}"]`,
            dateTime), dateTime);
    }

    static getDayInCalendar(dayNumber: string) {
        return $(By.cssContainingText('.x-datepicker-date', dayNumber), dayNumber);
    }

    static getNotesTab(notesNumber: string = '0') {
        return $(By.cssContainingText('.x-tab-inner-default',
            `${this.elementNames.notes} (${notesNumber})`), this.elementNames.notes);
    }

    static getTaskPopupTitle(title: string) {
        return $(By.cssContainingText('.page-header h1', title), title);
    }

    static getFormField(title: string) {
        return $(By.cssContainingText('span.x-form-item-label-inner.x-form-item-label-inner-default', title), title);
    }

    static getFormFieldLabel(title: string) {
        return $(By.cssContainingText('label.x-form-cb-label-default', title), title);
    }
}

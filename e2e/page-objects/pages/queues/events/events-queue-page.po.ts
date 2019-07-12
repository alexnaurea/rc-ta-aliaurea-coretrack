import { by } from 'protractor';

import { Constants } from '../../../../components/misc-utils/constants';
import { $, $$ } from '../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';
import { xpath } from '../../../../components/misc-utils/xpath-builder';

import { EventsQueueConstant } from './events-queue-page.constants';

const { elementNames: eNames, ids, classes, messages: msg } = EventsQueueConstant;
const { attributes, tags } = HtmlHelper;

export class EventQueuePage {

    static get buttons() {
        return {
            addEvent: $(by.css(`a[id$="${ids.addEvent}"]`), eNames.addEvent),
            hidePastEvents: $(by.css(`input[id*="${ids.hidePastEvents}"]`), eNames.hidePastEvents),
        };
    }

    static get title() {
        return $(by.cssContainingText(tags.label, eNames.pageTitle), eNames.pageTitle);
    }

    static get eventsQueue() {
        return {
            resourceOneFrame: $(by.id(ids.resourceOneFrame), eNames.resourceOneFrame),
            pageSelectorOption: (name: string) => $(
                by.cssContainingText(`select[id$=${ids.pageViewSelector}] option`, name), name),
            nextPage: $(by.cssContainingText(tags.a, eNames.greater), eNames.nextPage),
            currentPage: (page: string) => $(
                by.cssContainingText(`tr.${classes.pager} ${tags.b} ${tags.span}`, page), eNames.page),
            record: (name: string) => $(
                by.cssContainingText(`${tags.td} ${tags.nobr}`, name), name),
            itemIcon: (name: string) => $(
                by.xpath(`(//tr[descendant::nobr[contains(text(),"${name}")]][contains(@class,"${classes.itemClass}")]//a)[1]`), name),
        };
    }

    static get eventDialog() {
        return {
            dialogTitle: $(by.cssContainingText(`span[id*=${ids.dialogId}].${classes.dialogTitle}`,
                eNames.event), eNames.event),
            subject: $(by.css(`input[id$=${ids.eventName}][type=${eNames.text}]`), eNames.subject),
            owner: $(by.css(`select[id$=${ids.ownerTypeSelector}]`), eNames.owner),
            ownerOption: (name: string) => $(
                by.cssContainingText(`select[id$=${ids.ownerTypeSelector}] option`, name), name),
            attendee: $(by.css(`textarea[id$=${ids.attendeeListSelector}]`), eNames.attendee),
            type: $(by.css(`select[id$=${ids.eventType}]`), eNames.type),
            startDate: $(by.css(`input[id$=${ids.startDateInput}]`), eNames.startDate),
            endDate: $(by.css(`input[id$=${ids.endDateInput}]`), eNames.endDate),
            startTime: $(by.css(`input[id$=${ids.startTime}]`), eNames.startTime),
            endTime: $(by.css(`input[id$=${ids.endTime}]`), eNames.endTime),
            allDayEvent: $(by.css(`div[id$=${ids.allDayEvent}] .${classes.checkboxOff}`), eNames.allDayEvent),
            allDayEventYes: $(
                by.cssContainingText(`div[id$=${ids.allDayEvent}] span`, eNames.yes),
                eNames.allDayEvent),
            ocurred: $(by.css(`div[id$=${ids.hasOccurred}] .${classes.checkboxOff}`), eNames.ocurred),
            ocurredYes: $(by.cssContainingText(`div[id$=${ids.hasOccurred}] span`, eNames.yes), eNames.ocurred),
            syncOutlook: $(by.css(`div[id$=${ids.syncToExt}] .${classes.checkboxOff}`), eNames.syncOutlook),
            syncOutlookYes: $(by.cssContainingText(`div[id$=${ids.syncToExt}] span`, eNames.yes), eNames.syncOutlook),
            iconMandatory: $$(by.css(`span.${classes.iconMandatory}`), eNames.requiredFields),
            save: $(by.css(`a[id$=${ids.saveButton}]`), eNames.save),
            close: $(by.css(`a[title="${eNames.close}"]`), eNames.close),
            saveAndClose: $(by.css(`a[title="${eNames.saveAndClose}"]`), eNames.close),
            unsavedChanges: $(by.cssContainingText(tags.label, msg.unsavedChanges), msg.unsavedChanges),
            okButton: $(by.cssContainingText(`${tags.button}.${classes.uiButton}`, eNames.ok), eNames.ok),
            eventNameRequired: $(by.cssContainingText(tags.span, msg.eventNameRequired), msg.eventNameRequired),
            task: $(by.css(`select[id$=${ids.queueSelector}]`), eNames.task),
            allTasks: $$(by.css(`select[id$=${ids.queueSelector}] option`), eNames.task),
            taskOption: (name: string) => $(
                by.cssContainingText(`select[id$=${ids.queueSelector}] option`, name), name),
            startDateCalendar: $(xpath(tags.span)
                .where(attributes.class, classes.iconCalendar)
                .first()
                .buildByObject(), eNames.startDate),
            endDateCalendar: $(xpath(tags.span)
                .where(attributes.class, classes.iconCalendar)
                .nthChild(Constants.number.two)
                .buildByObject(), eNames.endDate),
            todayStartDate:  $(by.css(`[id*=${ids.startDateCalendar}] td.${classes.rcSelected}`), eNames.today),
            todayEndDate:  $(by.css(`[id*=${ids.endDateCalendar}] td.${classes.rcSelected}`), eNames.today),
        };
    }
}

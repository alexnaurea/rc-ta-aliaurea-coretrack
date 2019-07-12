export class EventsQueueConstant {
    static get elementNames() {
        return {
            pageTitle: 'Events Queue',
            resourceOneFrame: 'ResourceOne IFrame',
            title: 'Title',
            description: 'Description',
            save: 'Save',
            cancel: 'Cancel',
            ok: 'OK',
            test: 'Test',
            addEvent: 'Add Event',
            event: 'Event',
            subject: 'Subject',
            text: 'text',
            owner: 'Owner',
            attendee: 'Attendee',
            type: 'Type',
            startDate: 'Start Date',
            endDate: 'End Date',
            allDayEvent: 'allDayEvent',
            ocurred: 'Ocurred',
            syncOutlook: 'syncOutlook',
            requiredFields: 'Required Fields',
            close: 'Close',
            saveAndClose: 'Save And Close',
            task: 'Task',
            today: 'Today',
            nextPage: 'Next Page',
            page: 'Page',
            greater: '>',
            hidePastEvents: 'Hide Past Events',
            yes: 'Yes',
            startTime: 'Start Time',
            endTime: 'End Time',
            csr: 'CSR',
        };
    }

    static get ids() {
        return {
            addEvent: 'addEventButton',
            resourceOneFrame: 'ResourceOneIFrame',
            dialogId: 'ui-id',
            eventName: 'eventName',
            ownerTypeSelector: 'ownerTypeSelector',
            attendeeListSelector: 'attendeeListSelector',
            eventType: 'eventType',
            startDateInput: 'startDate_dateInput',
            endDateInput: 'endDate_dateInput',
            startDate: 'startDate',
            endDate: 'endDate',
            allDayEvent: 'allDayEvent',
            hasOccurred: 'hasOccurred',
            syncToExt: 'SyncToExt',
            saveButton: 'savebutton',
            closeButton: '_closebutton"',
            queueSelector: 'queueSelector',
            startDateCalendar: 'startDate_calendar',
            endDateCalendar: 'endDate_calendar',
            pageViewSelector: 'Page_viewSelector',
            hidePastEvents: 'ctl05',
            startTime: 'startTime_dateInput',
            endTime: 'endTime_dateInput',
        };
    }

    static get classes() {
        return {
            dialogTitle: 'ui-dialog-title',
            contentFrame: 'contentFrame',
            iconMandatory: 'icon-mandatory',
            uiButton: 'ui-button',
            iconCalendar: 'icon-calendar',
            rcSelected: 'rcSelected',
            pager: 'GridPager_Aptean',
            itemClass: '_Aptean',
            checkboxOff: 'checkbox-off',
        };
    }

    static get messages() {
        return {
            unsavedChanges: 'Are you sure you want to leave this page? Unsaved changes will be lost',
            eventNameRequired: 'Event Name is required',
        };
    }

    static get ownerDropdown() {
        return {
            queue: 'Queue',
            user: 'User',
        };
    }
}

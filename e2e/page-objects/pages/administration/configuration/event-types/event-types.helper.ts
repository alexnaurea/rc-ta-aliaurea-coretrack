import { StepLogger } from '../../../../../../core/logger/step-logger';

import { EventTypesPage } from './event-types.po';

export class EventTypesHelper {

    static async verifyEventTypesPageDisplayed() {
        StepLogger.subVerification('Verify "Event Types" page displayed');
        await EventTypesPage.eventTypesPageTitle.verifyDisplayedStatus();
    }
}

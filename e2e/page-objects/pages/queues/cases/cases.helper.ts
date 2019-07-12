import { StepLogger } from '../../../../../core/logger/step-logger';

import { QueuedCasesPage } from './cases.po';

export class QueuedCasesHelper {
    static async verifyQueuedCasesPageDisplayed() {
        StepLogger.subVerification('Verify "Queued Cases" page displayed');
        await QueuedCasesPage.casesPageTitle.verifyDisplayedStatus();
    }
}

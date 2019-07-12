import { StepLogger } from '../../../../../core/logger/step-logger';

import { PendingReportsPage } from './pending-reports.po';

export class PendingReportsHelper {

    static async verifyPendingReportsPageDisplayed() {
        StepLogger.subVerification('Verify "Pending Reports" page displayed');
        await PendingReportsPage.pendingReportsPageTitle.verifyDisplayedStatus();
    }
}

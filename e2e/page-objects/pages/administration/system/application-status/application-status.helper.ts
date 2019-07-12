import { StepLogger } from '../../../../../../core/logger/step-logger';

import { ApplicationStatusPage } from './application-status.po';

export class ApplicationStatusHelper {

    static async verifyApplicationStatusPageDisplayed() {
        StepLogger.subVerification('Verify Application Status Page Displayed');
        await ApplicationStatusPage.applicationStatusPage.verifyDisplayedStatus();
    }
}

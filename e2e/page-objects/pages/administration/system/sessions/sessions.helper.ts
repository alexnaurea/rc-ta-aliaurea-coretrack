import { StepLogger } from '../../../../../../core/logger/step-logger';

import { SessionsPage } from './sessions.po';

export class SessionsHelper {

    static async verifySessionsPageDisplayed() {
        StepLogger.subVerification('Verify "Sessions" page displayed');
        await SessionsPage.sessionsPageTitle.verifyDisplayedStatus();
    }
}

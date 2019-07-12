import { StepLogger } from '../../../../../../core/logger/step-logger';

import { LostReasonsPage } from './lost-reasons.po';

export class LostReasonsHelper {

    static async verifyLostReasonsPageDisplayed() {
        StepLogger.subVerification('Verify "Lost Reasons" page displayed');
        await LostReasonsPage.lostReasonsPageTitle.verifyDisplayedStatus();
    }
}

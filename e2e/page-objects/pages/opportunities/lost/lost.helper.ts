import { StepLogger } from '../../../../../core/logger/step-logger';

import { LostPage } from './lost.po';

export class LostHelper {
    static async verifyLostPageDisplayed() {
        StepLogger.subVerification('Verify "Lost" page displayed');
        await LostPage.lostPageTitle.verifyDisplayedStatus();
    }
}

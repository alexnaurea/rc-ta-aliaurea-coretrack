import { StepLogger } from '../../../../../../core/logger/step-logger';

import { DispositionsPage } from './dispositions.po';

export class DispositionsHelper {

    static async verifyDispositionsPageDisplayed() {
        StepLogger.subVerification('Verify "Dispositions" page displayed');
        await DispositionsPage.dispositionsPageTitle.verifyDisplayedStatus();
    }
}

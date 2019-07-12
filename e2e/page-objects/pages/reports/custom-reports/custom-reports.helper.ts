import { StepLogger } from '../../../../../core/logger/step-logger';

import { CustomReportsPage } from './custom-reports.po';

export class CustomReportsHelper {

    static async verifyCustomReportsPageDisplayed() {
        StepLogger.subVerification('Verify "Custom Reports" page displayed');
        await CustomReportsPage.customReportsPageTitle.verifyDisplayedStatus();
    }
}

import { StepLogger } from '../../../../../../core/logger/step-logger';

import { TransferActivitiesPage } from './transfer-activities.po';

export class TransferActivitiesHelper {

    static async verifyTransferActivitiesPageDisplayed() {
        StepLogger.subVerification('Verify "Transfer Activities" page displayed');
        await TransferActivitiesPage.transferActivitiesPageTitle.verifyDisplayedStatus();
    }
}

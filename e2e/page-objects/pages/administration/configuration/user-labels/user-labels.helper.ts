import { StepLogger } from '../../../../../../core/logger/step-logger';

import { UserLabelsPage } from './user-labels.po';

export class UserLabelsHelper {

    static async verifyUserLabelsPageDisplayed() {
        StepLogger.subVerification('Verify "User Labels" page displayed');
        await UserLabelsPage.userLabelsPageTitle.verifyDisplayedStatus();
    }
}

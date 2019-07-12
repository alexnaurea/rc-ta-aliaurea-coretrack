import { StepLogger } from '../../../../../../core/logger/step-logger';

import { UnmatchedPage } from './unmatched.po';

export class UnmatchedHelper {

    static async verifyUnmatchedPageDisplayed() {
        StepLogger.subVerification('Verify "Unmatched" page displayed');
        await UnmatchedPage.unmatchedPageTitle.verifyDisplayedStatus();
    }
}

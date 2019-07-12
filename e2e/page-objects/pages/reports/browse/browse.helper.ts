import { StepLogger } from '../../../../../core/logger/step-logger';

import { BrowsePage } from './browse.po';

export class BrowseHelper {

    static async verifyBrowsePageDisplayed() {
        StepLogger.subVerification('Verify "Browse" page displayed');
        await BrowsePage.browsePageTitle.verifyDisplayedStatus();
    }
}

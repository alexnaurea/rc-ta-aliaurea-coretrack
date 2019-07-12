import { StepLogger } from '../../../../../core/logger/step-logger';

import { OpportunitiesPage } from './opportunities.po';

export class OpportunitiesHelper {

    static async verifyOpportunitiesPageDisplayed() {
        StepLogger.subVerification('Verify "Opportunities" page displayed');
        await OpportunitiesPage.opportunitiesPageTitle.verifyDisplayedStatus();
    }
}

import { StepLogger } from '../../../../../core/logger/step-logger';

import { MarketingListsPage } from './marketing-lists.po';

export class MarketingListsHelper {

    static async verifyMarketingListsPageDisplayed() {
        StepLogger.subVerification('Verify "Marketing Lists" page displayed');
        await MarketingListsPage.marketingListsPageTitle.verifyDisplayedStatus();
    }
}

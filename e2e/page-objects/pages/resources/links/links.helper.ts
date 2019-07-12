import { StepLogger } from '../../../../../core/logger/step-logger';

import { LinksPage } from './links.po';

export class LinksHelper {

    static async verifyLinksPageDisplayed() {
        StepLogger.subVerification('Verify "Links" page displayed');
        await LinksPage.linksPageTitle.verifyDisplayedStatus();
    }
}

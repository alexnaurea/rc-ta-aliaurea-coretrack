import { StepLogger } from '../../../../../../core/logger/step-logger';

import { OrganizationsPage } from './organizations.po';

export class OrganizationsHelper {

    static async verifyOrganizationsPageDisplayed() {
        StepLogger.subVerification('Verify "Organizations" page displayed');
        await OrganizationsPage.organizationsPageTitle.verifyDisplayedStatus();
    }
}

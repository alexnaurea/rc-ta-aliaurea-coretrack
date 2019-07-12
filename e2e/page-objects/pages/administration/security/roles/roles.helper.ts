import { StepLogger } from '../../../../../../core/logger/step-logger';

import { RolesPage } from './roles.po';

export class RolesHelper {

    static async verifyRolesPageDisplayed() {
        StepLogger.subVerification('Verify "Roles" page displayed');
        await RolesPage.rolesPageTitle.verifyDisplayedStatus();
    }
}

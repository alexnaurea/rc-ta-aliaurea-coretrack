import { StepLogger } from '../../../../core/logger/step-logger';

import { ManagedContactsPage } from './managed-contacts.po';

export class ManagedContactsHelper {
    static async verifyManagedContactsPageDisplayed() {
        StepLogger.subVerification('Verify "Managed Contacts" page displayed');
        await ManagedContactsPage.managedContactsPageTitle.verifyDisplayedStatus();
    }
}

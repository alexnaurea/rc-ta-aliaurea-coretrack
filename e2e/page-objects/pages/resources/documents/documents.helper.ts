import { StepLogger } from '../../../../../core/logger/step-logger';

import { DocumentsPage } from './documents.po';

export class DocumentsHelper {

    static async verifyDocumentsPageDisplayed() {
        StepLogger.subVerification('Verify "Documents" page displayed');
        await DocumentsPage.documentsPageTitle.verifyDisplayedStatus();
    }
}

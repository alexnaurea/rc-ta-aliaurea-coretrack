import { StepLogger } from '../../../../../../core/logger/step-logger';

import { QueuesPage } from './queues.po';

export class QueuesHelper {

    static async verifyQueuesPageDisplayed() {
        StepLogger.subVerification('Verify "Queues" page displayed');
        await QueuesPage.queuesPageTitle.verifyDisplayedStatus();
    }
}

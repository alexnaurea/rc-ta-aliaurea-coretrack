import { StepLogger } from '../../../../../../core/logger/step-logger';

import { TrainingModulesPage } from './training-modules.po';

export class TrainingModulesHelper {

    static async verifyTrainingModulesPageDisplayed() {
        StepLogger.subVerification('Verify "Training Modules" page displayed');
        await TrainingModulesPage.trainingModulesPageTitle.verifyDisplayedStatus();
    }
}

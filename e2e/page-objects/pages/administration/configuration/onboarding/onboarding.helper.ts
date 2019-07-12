import { StepLogger } from '../../../../../../core/logger/step-logger';

import { OnboardingPage } from './onboarding.po';

export class OnboardingHelper {

    static async verifyOnboardingPageDisplayed() {
        StepLogger.subVerification('Verify "Onboarding" page displayed');
        await OnboardingPage.onboardingPageTitle.verifyDisplayedStatus();
    }
}

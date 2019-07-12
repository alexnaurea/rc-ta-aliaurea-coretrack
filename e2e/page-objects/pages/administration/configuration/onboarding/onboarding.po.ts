import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';

import { OnboardingConstants } from './onboarding.constants';

const { tags } = HtmlHelper;

export class OnboardingPage {
    static get onboardingPageTitle() {
        return $(
            by.cssContainingText(
                tags.label,
                OnboardingConstants.pageTitle
            ),
            OnboardingConstants.pageTitle
        );
    }
}

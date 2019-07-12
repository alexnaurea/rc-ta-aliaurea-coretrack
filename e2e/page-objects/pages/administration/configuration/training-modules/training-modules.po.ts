import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';

import { TrainingModulesConstants } from './training-modules.constants';

const { tags } = HtmlHelper;

export class TrainingModulesPage {
    static get trainingModulesPageTitle() {
        return $(
            by.cssContainingText(
                tags.label,
                TrainingModulesConstants.pageTitle
            ),
            TrainingModulesConstants.pageTitle
        );
    }
}

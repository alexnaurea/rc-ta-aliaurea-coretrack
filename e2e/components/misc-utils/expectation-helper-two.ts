import { assert } from 'chai';

import { StepLogger } from '../../../core/logger/step-logger';
import { CheckboxHelper } from '../html/checkbox-helper';

import { DfElement } from './df-elements-helper';
import { ValidationsHelper } from './validation-helper';

export class ExpectationHelperTwo {

    /**
     * Verify whether an element is hidden or not
     * @param targetElement
     */
    static async verifyCheckboxIsNotChecked(targetElement: DfElement) {
        StepLogger.subVerification(`${targetElement.name} should be checked`);
        const checkBoxStatus = await CheckboxHelper.isCheckboxChecked(targetElement);
        await assert.equal(checkBoxStatus, false,
            ValidationsHelper.getCheckedValidation(targetElement.name));
    }
}

import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelperExtension } from '../../../components/html/page-helper-extended';
import { WaitHelper } from '../../../components/html/wait-helper';
import { EndpointHelper } from '../../../components/misc-utils/endpoint-helper';
import { BasePageHelper } from '../base-page.helper';
import { CommonPage } from '../common/common.po';

import { OutsideInstitutionsPage } from './outside-institutions-page.po';

export class OutsideInstitutionsPageHelper extends BasePageHelper {

    /**
     * Click on Add Outside Institutions displayed on the page
     */
    static async clickAddOutsideInstitutionsButton() {
        StepLogger.subStep('Click on Add Outside Institutions');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await OutsideInstitutionsPage.addOutsideInstitutionsButton.clickButton();
        });
    }

    /**
     * Verify Add Outside Institutions Window is displayed
     */
    static async verifyNewOutsideInstitutionsWindowDisplayed() {
        StepLogger.subVerification('Verify Add Outside Institutions Window is displayed.');
        await OutsideInstitutionsPage.uiDialogTitle.verifyDisplayedStatus();
    }

    /**
     * Verify Outside Institutions page is displayed, with the help of page title displayed on top of page
     */
    static async verifyOutsideInstitutionsPageDisplayed() {
        await WaitHelper.waitForPageToStable();
        StepLogger.subVerification('Verify Outside Institutions Page title displayed.');
        await OutsideInstitutionsPage.pageTitle.verifyDisplayedStatus();
    }

    url(): string {
        return EndpointHelper.outsideInstitutions;
    }
}

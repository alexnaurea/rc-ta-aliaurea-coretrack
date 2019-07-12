import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { DfElement } from '../../../../components/misc-utils/df-elements-helper';
import { CommonPage } from '../../common/common.po';
import { CampaignsPage } from '../../marketing/campaigns/campaigns.po';

import { CasesPage } from './cases.po';

export class CasesHelper {
    static async verifyCasesPageDisplayed() {
        StepLogger.subVerification('Verify "Cases" page displayed');
        await CasesPage.casesPageTitle.verifyDisplayedStatus();
    }

    static async verifyRecordsSortedDesc(columnName: string, toCloseAfterExecution = true) {
        await PageHelper.executeInNewTab(async () => {
            StepLogger.subStep(`Verify records are descending sorted by ${columnName}`);
            await PageHelper.switchToiFrame(CommonPage.casesFrame);
            await CampaignsPage.elements.columnIcon(columnName).sortDesc.scrollToElement();
            await CampaignsPage.elements.columnIcon(columnName).sortDesc.verifyDisplayedStatus();
            await PageHelper.switchToDefaultContent();
        }, 1, toCloseAfterExecution);
    }

    static async verifyRecordsSortedAsc(columnName: string, toCloseAfterExecution = true) {
        await PageHelper.executeInNewTab(async () => {
            StepLogger.subStep(`Verify records are ascendently sorted by ${columnName}`);
            await PageHelper.switchToiFrame(CommonPage.casesFrame);
            await CampaignsPage.elements.columnIcon(columnName).sortAsc.scrollToElement();
            await CampaignsPage.elements.columnIcon(columnName).sortAsc.verifyDisplayedStatus();
            await PageHelper.switchToDefaultContent();
        }, 1, toCloseAfterExecution);
    }

    static async clickOnColumnHeader(columnName: DfElement) {
        StepLogger.subStep('Click on Owner column');
        await PageHelper.switchToiFrame(CommonPage.casesFrame);
        await columnName.hoverOverAndClick();
        await PageHelper.switchToDefaultContent();
    }
}

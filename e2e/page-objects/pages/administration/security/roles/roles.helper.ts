import { browser } from 'protractor';

import { StepLogger } from '../../../../../../core/logger/step-logger';
import { AlertHelper } from '../../../../../components/html/alert-helper';
import { PageHelper } from '../../../../../components/html/page-helper';
import { PageHelperExtension } from '../../../../../components/html/page-helper-extended';
import { ExpectationHelper } from '../../../../../components/misc-utils/expectation-helper';
import { CommonPage } from '../../../common/common.po';
import { ReportWriterReportsPage } from '../../../report-writer-reports-page/report-writer-reports-page.po';
import { ReferralSourcesPage } from '../../configuration/referral-sources/referral-sources.po';
import { DistrictsPage } from '../../organization/districts/districts.po';

import { RolesConstants } from './roles.constants';
import { RolesPage } from './roles.po';

export class RolesHelper {

    static async verifyRolesPageDisplayed() {
        StepLogger.subVerification('Verify "Roles" page displayed');
        await RolesPage.rolesPageTitle.verifyDisplayedStatus();
    }

    static async verifyColumnReporterPage() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        StepLogger.subVerification(' description  should be displayed');
        await ReportWriterReportsPage.getCoulumn(RolesConstants.elementNames.description).verifyDisplayedStatus();
        StepLogger.subVerification(' role  should be displayed');
        await ReportWriterReportsPage.getCoulumn(RolesConstants.elementNames.role).verifyDisplayedStatus();
        StepLogger.subVerification(' active  should be displayed');
        await ReportWriterReportsPage.getCoulumn(RolesConstants.elementNames.active).verifyDisplayedStatus();
        StepLogger.subVerification(' Delete should be displayed');
        await ReportWriterReportsPage.getCoulumn(RolesConstants.elementNames.Delete).verifyDisplayedStatus();
    }

    static async verifyExportToExcel() {
        const label = DistrictsPage.buttons;
        StepLogger.subVerification('Verify export to excel');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await label.exportToExcel.verifyDisplayedStatus();
        });
    }

    static async verifyExportToWord() {
        const label = DistrictsPage.buttons;
        StepLogger.subVerification('Verify export to word');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await label.exportToWord.verifyDisplayedStatus();
        });
    }

    static async clickExportToExcel() {
        const label = DistrictsPage.buttons;
        StepLogger.subStep('click export to excel');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await label.exportToExcel.clickLink();
        });
    }

    static async verifyDownload(excelFileName: string) {
        StepLogger.subStep('verify linked file had .xls value');
        await PageHelper.goToUrl(RolesConstants.elementNames.downloadsLink);
        await AlertHelper.acceptAlertIfExists();
        const fileName = await browser.executeScript(`return document.querySelector('downloads-manager').shadowRoot.querySelector
            ('#downloadsList downloads-item').shadowRoot.querySelector('div#content #file-link').text`);
        await ExpectationHelper.verifyStringValueContain(fileName.toString(), excelFileName);
    }

    static async clickExportToWord() {
        const label = DistrictsPage.buttons;
        StepLogger.subStep('click export to word');
        await PageHelperExtension.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await label.exportToWord.clickLink();
        });
    }

    static async verifyAddRole() {
        StepLogger.subStep('verify Add Role');
        await RolesPage.addRoleButton.verifyDisplayedStatus();
    }

    static async clickAddRole() {
        StepLogger.subStep('click Add Role');
        await RolesPage.addRoleButton.clickLink();
    }

    static async verifyAddRolesPageDisplayed() {
        StepLogger.subVerification('Verify " add Roles" page displayed');
        await RolesPage.addRolesPageTitle.verifyDisplayedStatus();
    }
}

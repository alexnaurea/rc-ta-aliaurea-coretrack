import { StepLogger } from '../../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../../components/html/page-helper';
import { PageHelperExtension } from '../../../../../components/html/page-helper-extended';
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
}

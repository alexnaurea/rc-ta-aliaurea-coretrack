import { StepLogger } from '../../../../core/logger/step-logger';
import { WaitHelper } from '../../../components/html/wait-helper';
import { ProcessingLogConstants } from '../administration/system/processing-log/processing-log.constants';
import { ProcessingLogHelper } from '../administration/system/processing-log/processing-log.helper';
import { BasePageHelper } from '../base-page.helper';
import { CampaignsPageHelper } from '../marketing/campaigns/campaigns.helper';

import { DashboardPageConstant } from './dashboard/dashboard.constants';
import { DashboardPage } from './dashboard/dashboard.po';
import { HomePageConstant } from './home-page.constants';
import { HomePageHelper } from './home-page.helper';
import { HomePage } from './home-page.po';

export class HomePage1Helper extends BasePageHelper {

    /**
     * Click Districts Under Organization
     */
    static async clickDistrictsUnderOrganization() {
        StepLogger.subStep('Click Districts Under Organization');
        await WaitHelper.waitForElementToBeDisplayed(HomePage.organizationUnderAdministration.districts.item);
        await HomePage.organizationUnderAdministration.districts.clickLink();
    }

    /**
     * Click Branches Under Organization
     */
    static async clickBranchesUnderOrganization() {
        StepLogger.subStep('Click Branches Under Organization');
        await WaitHelper.waitForElementToBeDisplayed(HomePage.organizationUnderAdministration.branches.item);
        await HomePage.organizationUnderAdministration.branches.clickLink();
    }

    static async clickOnOpportunitiesMenu() {
        StepLogger.subStep('Click on Opportunities menu');
        await HomePage.sidebar.expanded.opportunities.hoverOverAndClick();
    }

    static async verifyOpportunitiesSubmenuOptions() {
        await HomePage.opportunities.pipeline.verifyDisplayedStatus();
        await HomePage.opportunities.production.verifyDisplayedStatus();
        await HomePage.opportunities.lost.verifyDisplayedStatus();
        await HomePage.opportunities.referrals.verifyDisplayedStatus();
    }

    static async clickOnProductionUnderOpportunities() {
        StepLogger.subStep('Click on Production option');
        await HomePage.opportunities.production.hoverOverAndClick();
    }

    static async verifyMenuOnRightOfPage() {
        StepLogger.subStep('Menu should be displayed at the top right of the page');
        await HomePage.plus.menu.verifyDisplayedStatus();
    }

    static async verifyPipeLineDisplay() {
        StepLogger.subStep('Verify Pipeline menu is available in the displayed menu');
        await HomePage.plus.pipeline.verifyDisplayedStatus();
    }

    static async verifyPipeLineWidgetDisplay() {
        StepLogger.subStep('Pipeline widget should be added to the newly created Dashboard successfully');
        await HomePage.plus.setting.verifyDisplayedStatus();
    }

    static async clickOnPositiveIcon() {
        StepLogger.subStep('Click on "+" icon on the top right of the page');
        await HomePage.plus.mainIcon.clickLinkJs();
    }

    static async clickOnPipelineMenu() {
        StepLogger.subStep('Click on the Pipeline menu');
        await HomePage.plus.pipeline.clickLinkJs();
    }

    static async clickOnRefresh() {
        StepLogger.subStep('Click on the refresh data within the top side of the widget menu');
        await HomePage.refreshButton().clickLinkJs();
    }

    /**
     * Verify Page Reloaded. Title and widget should display
     */

    static async verifyPageReloaded() {
        StepLogger.subStep('Data should be loaded successfully in the widget');
        await HomePage.refreshButton().verifyDisplayedStatus();
        await HomePage.plus.setting.verifyDisplayedStatus();
    }

    static async clickDateRangeDdlArrow() {
        await DashboardPage.dashboard.dateRangeArrow.clickButtonJs();
    }

    static async clickBranchDdlArrow() {
        await DashboardPage.dashboard.branchArrow.clickButtonJs();
    }

    static async clickScopeDdlArrow() {
        await DashboardPage.dashboard.scopeArrow.clickButtonJs();
    }

    static async hoverAndClickOnElement(elementName: string) {
        StepLogger.subStep('Hover and click on element.');
        await DashboardPage.getElementInDdl(elementName).clickButtonJs();
    }

    static async verifyDateRangeElementsDisplayed() {
        const elementNames = DashboardPageConstant.elementNames;
        StepLogger.subStep('Verify Date Range DDL elements displayed.');
        await DashboardPage.getElementInDdl(elementNames.dateRangeOptionOne).verifyDisplayedStatus();
        await DashboardPage.getElementInDdl(elementNames.dateRangeOptionTwo).verifyDisplayedStatus();
        await DashboardPage.getElementInDdl(elementNames.dateRangeOptionThree).verifyDisplayedStatus();
    }

    static async verifyBranchElementsDisplayed() {
        const elementNames = DashboardPageConstant.elementNames;
        StepLogger.subStep('Verify Branch DDL elements displayed.');
        await WaitHelper.waitForElementToBeDisplayed(DashboardPage.getElementInDdl(elementNames.branchOptionOne).item);
        await DashboardPage.getElementInDdl(elementNames.branchOptionOne).verifyDisplayedStatus();
        await WaitHelper.waitForElementToBeDisplayed(DashboardPage.getElementInDdl(elementNames.branchOptionTwo).item);
        await DashboardPage.getElementInDdl(elementNames.branchOptionTwo).verifyDisplayedStatus();
        await WaitHelper.waitForElementToBeDisplayed(DashboardPage.getElementInDdl(elementNames.branchOptionThree).item);
        await DashboardPage.getElementInDdl(elementNames.branchOptionThree).verifyDisplayedStatus();
    }

    static async verifyScopeElementsDisplayed() {
        const elementNames = DashboardPageConstant.elementNames;
        StepLogger.subStep('Verify Scope DDL elements displayed.');
        await WaitHelper.waitForElementToBeDisplayed(DashboardPage.getElementInDdl(elementNames.scopeOptionOne).item);
        await DashboardPage.getElementInDdl(elementNames.scopeOptionOne).verifyDisplayedStatus();
        await WaitHelper.waitForElementToBeDisplayed(DashboardPage.getElementInDdl(elementNames.scopeOptionTwo).item);
        await DashboardPage.getElementInDdl(elementNames.scopeOptionTwo).verifyDisplayedStatus();
        await WaitHelper.waitForElementToBeDisplayed(DashboardPage.getElementInDdl(elementNames.scopeOptionThree).item);
        await DashboardPage.getElementInDdl(elementNames.scopeOptionThree).verifyDisplayedStatus();
    }

    static async clickOnSettingIcon() {
        StepLogger.subStep('Click on the Settings icon within the top side of the widget menu');
        await HomePage.plus.setting.clickButton();
    }

    static async clickOnPiplineMenu() {
        StepLogger.subStep('Click "Pipeline".');
        await HomePage.opportunities.pipeline.hoverOverAndClick();
    }

    static async clickOnTicketLink() {
        const { queue } = HomePage;
        await queue.tickets.clickLink();
    }

    static async clickOncloseExpandPopup() {
        StepLogger.subStep('Click Expand Popup.');
        await HomePage.opportunities.pipeline.hoverOverAndClick();
    }

    static async clickOnReferralsMenu() {
        StepLogger.subStep('Click "Referrals".');
        await HomePage.opportunities.referrals.hoverOverAndClick();
    }

    static async verifySettingIcon() {
        StepLogger.subStep('Verify the Settings window button');
        await HomePage.plus.setting.verifyDisplayedStatus();
    }

    static async clickOnOkIcon() {
        StepLogger.subStep('Click OK icon on bottom right');
        await HomePage.plus.ok.clickLinkJs();
    }

    static async verifyDeleteAndSaveButton() {
        StepLogger.subStep('Following buttons should be displayed at the bottom right of the window\n' +
            '-Delete -Save');
        await HomePage1Helper.clickOnSettingIcon();
        await HomePage.plus.ok.verifyDisplayedStatus();
        await HomePage.plus.delete.verifyDisplayedStatus();
    }

    static async clickOnExpandIcon() {
        StepLogger.subStep('Click on the Expand icon within the top right side of the widget menu');
        await HomePage.plus.expandButton.clickLinkJs();
    }

    static async verifySettingPopup() {
        StepLogger.subStep('Settings window should be displayed for the pipeline widget');
        await HomePage.plus.settingPopup.verifyDisplayedStatus();
    }

    static async verifyReportItem() {
        await HomePage.sidebar.expanded.report.verifyDisplayedStatus();
    }

    static async verifyExpandWidget() {
        StepLogger.subStep('Pipeline widget should get expanded with charts in a new window');
        await HomePage.plus.expandWidget.verifyDisplayedStatus();
    }

    static async verifyDataGridColumnsDisplayed() {
        const elementNames = HomePageConstant.elementNames;
        StepLogger.subVerification('Verify Data grid columns displayed.');
        await HomePage.getChartDataGridColumn(elementNames.name).verifyDisplayedStatus();
        await HomePage.getChartDataGridColumn(elementNames.count).verifyDisplayedStatus();
        await HomePage.getChartDataGridColumn(elementNames.value).verifyDisplayedStatus();
        await HomePage.getChartDataGridColumn(elementNames.percentage).verifyDisplayedStatus();
    }

    static async closeExpandWidget() {
        await HomePage.plus.closeExpandWidget.clickLinkJs();
    }

    static async navigateToProductionPage() {
        await HomePage1Helper.clickOnOpportunitiesMenu();
        await HomePage1Helper.clickOnProductionUnderOpportunities();
    }

    /**
     * Click System under Administration submenu
     */
    static async clickSystemUnderAdministration() {
        await HomePage.administration.system.clickLink();
    }

    static async verifyOptionsUnderSystem() {
        const { systemUnderAdministration } = HomePage;
        await systemUnderAdministration.applicationStatus.verifyDisplayedStatus();
        await systemUnderAdministration.processingLog.verifyDisplayedStatus();
        await systemUnderAdministration.session.verifyDisplayedStatus();
        await systemUnderAdministration.unmatched.verifyDisplayedStatus();
    }

    static async clickSessionUnderAdministration() {
        await HomePage.systemUnderAdministration.session.clickLink();
    }

    static async clickCompensationAdministration() {
        await HomePage.administration.compensation.clickLink();
    }

    static async clickProcessingLog(filtered: boolean = true) {
        await HomePage.systemUnderAdministration.processingLog.clickLink();
        if (filtered) {
            await ProcessingLogHelper.setFilterTimeOption(ProcessingLogConstants.elementNames.withinAMonth);
        }
    }

    /**
     * Click Regions Under Organization
     */
    static async clickRegionsUnderOrganization() {
        await WaitHelper.waitForElementToBeDisplayed(HomePage.organizationUnderAdministration.regions.item);
        await HomePage.organizationUnderAdministration.regions.clickLink();
    }

    static async navigateToDistrictsPage() {
        StepLogger.subStep('Navigate To Districts Page');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickOrganizationUnderAdministration();
        await HomePage1Helper.clickDistrictsUnderOrganization();
    }

    static async navigateToDepartmentsPage() {
        StepLogger.subStep('Navigate To Departments Page');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickOrganizationUnderAdministration();
        await HomePageHelper.clickDepartmentsUnderOrganization();
    }

    static async navigateToBranchesPage() {
        StepLogger.subStep('Navigate To Branches Page');
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickOrganizationUnderAdministration();
        await HomePage1Helper.clickBranchesUnderOrganization();
    }

    /**
     * Click 'Report' link in sidebar
     */
    static async clickReportsLink() {
        await WaitHelper.waitForElementToBeDisplayed(HomePage.sidebar.expanded.report.item);
        await HomePage.sidebar.expanded.report.clickLink();
    }

    static async verifyOptionsReports() {
        const { systemUnderAdministration } = HomePage;
        await systemUnderAdministration.applicationStatus.verifyDisplayedStatus();
        await systemUnderAdministration.processingLog.verifyDisplayedStatus();
        await systemUnderAdministration.session.verifyDisplayedStatus();
        await systemUnderAdministration.unmatched.verifyDisplayedStatus();
    }

    static async verifyReportExpand() {
        await HomePage.reports.reportExpanded.verifyDisplayedStatus();
    }

    static async verifyReportWriterDisplay() {
        await HomePage.reports.reportWriter.verifyDisplayedStatus();
    }

    static async verifyReportItemDisplay() {
        await HomePage.reports.browse.verifyDisplayedStatus();
        await HomePage.reports.customReports.verifyDisplayedStatus();
        await HomePage.reports.reportWriter.verifyDisplayedStatus();
        await HomePage.reports.pendingReports.verifyDisplayedStatus();
    }

    static async clickSecurityCenterUnderAdministration() {
        await HomePage.administration.security.clickLink();
    }

    static async verifyOptionsUnderSecurity() {
        const { securityUnderAdministration } = HomePage;
        await securityUnderAdministration.securityExpanded.scrollToElement();
        await securityUnderAdministration.securityExpanded.verifyDisplayedStatus();
        await securityUnderAdministration.users.verifyDisplayedStatus();
        await securityUnderAdministration.roles.verifyDisplayedStatus();
    }

    static async clickOnBrowseButton() {
        await HomePage.reports.browse.clickLink();
    }

    static async clickOnUser() {
        await HomePage.securityUnderAdministration.users.clickLink();
    }

    static async clickReportWriterLink() {
        await HomePage.reports.reportWriter.clickLink();
    }

    static async navigateToReportWriterPage() {
        await WaitHelper.waitForElementToBeDisplayed(HomePage.sidebar.expanded.report.item);
        await HomePage.sidebar.expanded.report.clickLink();
        await HomePage.reports.reportWriter.clickLink();
    }

    static async verifyReportsLink() {
        await WaitHelper.waitForElementToBeDisplayed(HomePage.sidebar.expanded.report.item);
        await HomePage.sidebar.expanded.report.verifyDisplayedStatus();
    }

    /**
     * Click Relationships under Configuration
     */
    static async clickRelationshipsUnderConfiguration() {
        await WaitHelper.waitForElementToBeDisplayed(HomePage.configurationUnderAdministration.relationships.item);
        await HomePage.configurationUnderAdministration.relationships.clickLink();
    }

    /**
     * Click Outside Institutions under Configuration
     */
    static async clickOutsideInstitutionsUnderConfiguration() {
        await WaitHelper.waitForElementToBeDisplayed(HomePage.configurationUnderAdministration.outsideInstitutions.item);
        await HomePage.configurationUnderAdministration.outsideInstitutions.clickLink();
    }

    static async clickOnMarketingMenu() {
        StepLogger.subStep('Click on Marketing menu');
        await HomePage.sidebar.expanded.marketing.hoverOverAndClick();
    }

    static async verifyMarketingSubmenu() {
        await HomePage.marketing.campaigns.verifyDisplayedStatus();
        await HomePage.marketing.marketingLists.verifyDisplayedStatus();
    }

    static async clickOnCampaignsOption() {
        StepLogger.subStep('Click on Campaigns menu');
        await HomePage.marketing.campaigns.hoverOverAndClick();
    }

    static async verifyGoalsOptionUnderAdministration() {
        StepLogger.subVerification('Verify Goals Option Under Administration');
        await HomePage.administration.goals.verifyDisplayedStatus();
    }

    static async clickOnGoalsOptionUnderAdministration() {
        StepLogger.subStep('Click On Goals Option Under Administration');
        await HomePage.administration.goals.clickButton();
    }

    static async navigateConfigurationCustomItems() {
        await HomePageHelper.clickConfigurationUnderAdministration();
        await WaitHelper.waitForElementToBeDisplayed(HomePage.configurationUnderAdministration.customItem.item);
        await HomePage.configurationUnderAdministration.customItem.clickLink();
    }

    static async navigateConfigurationCustomItemTypes() {
        await HomePageHelper.clickConfigurationUnderAdministration();
        await WaitHelper.waitForElementToBeDisplayed(HomePage.configurationUnderAdministration.customItemType.item);
        await HomePage.configurationUnderAdministration.customItemType.clickLink();
    }

    static async navigateOrganizationBranches() {
        await HomePageHelper.clickOrganizationUnderAdministration();
        await WaitHelper.waitForElementToBeDisplayed(HomePage.organizationUnderAdministration.branches.item);
        await HomePage.organizationUnderAdministration.branches.clickLink();
    }

    static async navigateSystemApplicationStatus() {
        await this.clickSystemUnderAdministration();
        await WaitHelper.waitForElementToBeDisplayed(HomePage.systemUnderAdministration.applicationStatus.item);
        await HomePage.systemUnderAdministration.applicationStatus.clickLink();
    }

    static async navigateServiceCenterCaseAreas() {
        await HomePageHelper.clickServiceCenterUnderAdministration();
        await HomePageHelper.clickCaseAreasUnderServiceCenterUnderAdministration();
    }

    static async navigateConfigurationOutsideInstitutions() {
        await HomePageHelper.clickConfigurationUnderAdministration();
        await HomePageHelper.clickOutsideInstitutions();
    }

    static async navigateToMarketingCampaignsPage() {
        await HomePage1Helper.clickOnMarketingMenu();
        await HomePage1Helper.verifyMarketingSubmenu();
        await HomePage1Helper.clickOnCampaignsOption();
        await CampaignsPageHelper.verifyMarketingCampaignsPageDisplayed();
    }

    static async navigateToAdministrationSecurityUsers() {
        await HomePageHelper.clickAdministrationLink();
        await this.clickSecurityCenterUnderAdministration();
        await this.clickOnUser();
    }

    static async verifyCompensationOptionUnderAdministration() {
        StepLogger.subVerification('Verify Compensation Option Under Administration');
        await HomePage.administration.compensation.verifyDisplayedStatus();
    }

    static async navigateToPipelinePage() {
        await WaitHelper.waitForElementToBeDisplayed(HomePage.sidebar.expanded.report.item);
        await HomePage.sidebar.expanded.opportunities.clickLink();
        await HomePage.opportunities.pipeline.clickLink();
    }

    static async verifyReferralsOptionDisplated() {
        await HomePage.opportunities.referrals.verifyDisplayedStatus();
    }

    url(): string {
        throw new Error('Method not implemented.');
    }
}

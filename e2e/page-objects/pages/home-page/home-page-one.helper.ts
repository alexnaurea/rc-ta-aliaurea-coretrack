import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { CommonPage } from '../common/common.po';

import { HomePageExtension } from './home-page-extension.po';
import { HomePageConstant } from './home-page.constants';
import { HomePageHelper } from './home-page.helper';
import { HomePage } from './home-page.po';

const { executeInIFrame } = PageHelper;

export class HomePageOneHelper {

    static async verifyContinueWithNewProspect() {
        StepLogger.subVerification('Verify Continue With New Prospect');
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await ExpectationHelper.verifyDisplayedStatus(HomePage
                .checkExisitingContactModal.continueWithNewProspect);
        });
    }

    static async verifyGridMessage(switchBack = true) {
        StepLogger.subVerification('Verify Grid Message');
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await HomePage.checkExisitingContactModal.enterProspectInfo.verifyDisplayedStatus();
        }, switchBack);
    }

    static async verifyUseSelectedContact() {
        StepLogger.subVerification('Verify Use Selected Contact');
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await ExpectationHelper.verifyDisplayedStatus(HomePage
                .checkExisitingContactModal.useSelectedContact);
        });
    }

    static async verifyCancel() {
        StepLogger.subVerification('Verify Cancel');
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await ExpectationHelper.verifyDisplayedStatus(HomePage
                .checkExisitingContactModal.cancel);
        });
    }

    static async clickCrossButton() {
        StepLogger.subStep('Click X Button');
        await HomePage.checkExisitingContactModal.cross.clickButton();
    }

    static async verifyCheckExistingContactClosed() {
        StepLogger.subVerification('Verify Cancel');
        await HomePage.checkExisitingContactModal.checkExistingContactTitle.verifyHiddenStatus();
    }

    static async clickCancel() {
        StepLogger.subStep('Click Cancel');
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await HomePage.checkExisitingContactModal.cancel.clickButton();
        });
    }

    static async expandQueueAndClickTask() {
        StepLogger.subStep('Expand Queue and Click Task');
        await HomePageHelper.clickQueuesLink();
        await HomePageHelper.clickTasksUnderQueues();
    }

    static async verifyWorkAndHomePhone() {
        StepLogger.subVerification('Verify WorkPhone And Home Phone');
        await HomePage.cardDetail.workPhone.verifyDisplayedStatus();
        await HomePage.cardDetail.homePhone.verifyDisplayedStatus();
    }

    static async switchAndVerifyContactCard(uniqueName: string) {
        StepLogger.subVerification('Switch to firstTab and verify card');
        await PageHelper.switchToFirstTab();
        await HomePageHelper.verifyContactCardIsDisplayed(uniqueName);
    }

    /**
     * Get error popup message when search text has less than 3 characters
     */
    static async getErrorMsgWhenSearchTxtHasLessThanThreeCharacters() {
        StepLogger.subStep('Get error popup message when search text has less than 3 characters');
        return await HomePageExtension.errorPopupMessage.message.getText();
    }

    /**
     * Verify the error popup message when search text has less than 3 characters
     */
    static async verifyErrorMsgWhenSearchTxtHasLessThanThreeCharacters() {
        StepLogger.subVerification('Verify the error popup message when search text has less than 3 characters');
        await ExpectationHelper.verifyStringValueContain(await this.getErrorMsgWhenSearchTxtHasLessThanThreeCharacters(),
        HomePageConstant.alertMessages.enterMinThreeCharactersForSearch);
    }

    /**
     * Verify 'Sign Off' button displayed
     */
    static async verifySignOffButtonDisplayed() {
        StepLogger.subVerification('Verify "Sign Off" button displayed');
        await HomePage.sidebar.expanded.signOff.verifyDisplayedStatus();
    }

    /**
     * Click 'My Profile' sidebar menu button
     */
    static async clickMyProfile() {
        StepLogger.subStep('Click "My Profile" sidebar menu button');
        await HomePage.sidebar.expanded.myProfile.clickButton();
    }

    /**
     * Verify "Resources" menu displayed on the left-pane
     */
    static async verifyResourcesDisplayed() {
        StepLogger.subVerification('Verify "Resources" menu displayed on the left-pane');
        await HomePage.sidebar.expanded.resources.verifyDisplayedStatus();
    }

    /**
     * Click "Resources" menu on the left-pane
     */
    static async clickResources() {
        StepLogger.subStep('Click "Resources" menu on the left-pane');
        await HomePage.sidebar.expanded.resources.clickButton();
    }

    /**
     * Click "Documents" button under the "Resources" menu
     */
    static async clickDocumentsButtonUnderResourcesMenu() {
        StepLogger.subStep('Click "Documents" button under the "Resources" menu');
        await HomePage.resources.documents.clickButton();
    }

    /**
     * Click "Links" button under the "Resources" menu
     */
    static async clickLinksButtonUnderResourcesMenu() {
        StepLogger.subStep('Click "Links" button under the "Resources" menu');
        await HomePage.resources.links.clickButton();
    }

    /**
     * Verify "Administration" menu displayed on the left-pane
     */
    static async verifyAdministrationDisplayed() {
        StepLogger.subVerification('Verify "Administration" menu displayed on the left-pane');
        await HomePage.sidebar.expanded.administration.verifyDisplayedStatus();
    }

    /**
     * Click 'Unmatched' button under 'Administration>System' sub-menu
     */
    static async clickUnmatched() {
        StepLogger.subStep('Click "Unmaatched" button under Administration>System sub-menu');
        await HomePage.systemUnderAdministration.unmatched.clickButton();
    }

    /**
     * Click 'Roles' button under 'Administration>Security' sub-menu
     */
    static async clickOnRolesUnderSecuritySubmenuUnderAdministrationMenu() {
        StepLogger.subStep('Click on "Roles" button under "Administration>Security" sub-menu');
        await HomePage.securityUnderAdministration.roles.clickButton();
    }

    /**
     * Click 'Resources' button under 'Administration' menu
     */
    static async clickResourcesUnderAdministrationMenu() {
        StepLogger.subStep('Click "Resources" button under "Administration" menu');
        await HomePage.administration.resources.clickButton();
    }

    /**
     * Click 'Documents' button under 'Administration>Resources' sub-menu
     */
    static async clickDocumentsButtonUnderResourcesSubmenuUnderAdministrationMenu() {
        StepLogger.subStep('Click "Documents" button under "Administration>Resources" sub-menu');
        await HomePage.resourcesUnderAdministration.documents.clickButton();
    }

    /**
     * Click 'Links' button under 'Administration>Resources' sub-menu
     */
    static async clickLinksButtonUnderResourcesSubmenuUnderAdministrationMenu() {
        StepLogger.subStep('Click "Links" button under "Administration>Resources" sub-menu');
        await HomePage.resourcesUnderAdministration.links.clickButton();
    }

    /**
     * Verify 'Configuration' sub-menu displayed under 'Administration' menu
     */
    static async verifyConfigurationDisplayedUnderAdministration() {
        StepLogger.subVerification('Verify "Configuration" sub-menu displayed under "Administration" menu');
        await HomePage.administration.configuration.verifyDisplayedStatus();
    }

    /**
     * Click 'User Labels' button under 'Administration>Configuration' sub-menu
     */
    static async clickUserLabelsButtonUnderConfigurationSubmenuUnderAdministrationMenu() {
        StepLogger.subStep('Click "User Labels" button under "Administration>Configuration" sub-menu');
        await HomePage.configurationUnderAdministration.userLabels.clickButton();
    }

    /**
     * Click 'Transfer Activities' button under 'Administration>Configuration' sub-menu
     */
    static async clickTransferActivitiesButtonUnderConfigurationSubmenuUnderAdministrationMenu() {
        StepLogger.subStep('Click "Transfer Activities" button under "Administration>Configuration" sub-menu');
        await HomePage.configurationUnderAdministration.transferActivities.clickButton();
    }

    /**
     * Click 'Training Modules' button under 'Administration>Configuration' sub-menu
     */
    static async clickTrainingModulesButtonUnderConfigurationSubmenuUnderAdministrationMenu() {
        StepLogger.subStep('Click "Training Modules" button under "Administration>Configuration" sub-menu');
        await HomePage.configurationUnderAdministration.trainingModules.clickButton();
    }

    /**
     * Click 'Queues' button under 'Administration>Configuration' sub-menu
     */
    static async clickQueuesButtonUnderConfigurationSubmenuUnderAdministrationMenu() {
        StepLogger.subStep('Click "Queues" button under "Administration>Configuration" sub-menu');
        await HomePage.configurationUnderAdministration.queues.clickButton();
    }

    /**
     * Click 'Organizations' button under 'Administration>Configuration' sub-menu
     */
    static async clickOrganizationButtonUnderConfigurationSubmenuUnderAdministrationMenu() {
        StepLogger.subStep('Click "Organization" button under "Administration>Configuration" sub-menu');
        await HomePage.configurationUnderAdministration.organizations.clickButton();
    }

    /**
     * Click 'Onboarding' button under 'Administration>Configuration' sub-menu
     */
    static async clickOnboardingButtonUnderConfigurationSubmenuUnderAdministrationMenu() {
        StepLogger.subStep('Click "Onboarding" button under "Administration>Configuration" sub-menu');
        await HomePage.configurationUnderAdministration.onBoarding.clickButton();
    }

    /**
     * Click 'Lost Reasons' button under 'Administration>Configuration' sub-menu
     */
    static async clickLostReasonsButtonUnderConfigurationSubmenuUnderAdministrationMenu() {
        StepLogger.subStep('Click "Lost Reasons" button under "Administration>Configuration" sub-menu');
        await HomePage.configurationUnderAdministration.lostReasons.clickButton();
    }

    /**
     * Click 'Event Types' button under 'Administration>Configuration' sub-menu
     */
    static async clickEventTypesButtonUnderConfigurationSubmenuUnderAdministrationMenu() {
        StepLogger.subStep('Click "Event Types" button under "Administration>Configuration" sub-menu');
        await HomePage.configurationUnderAdministration.eventTypes.clickButton();
    }

    /**
     * Click 'Dispositions' button under 'Administration>Configuration' sub-menu
     */
    static async clickDispositionsButtonUnderConfigurationSubmenuUnderAdministrationMenu() {
        StepLogger.subStep('Click "Dispositions" button under "Administration>Configuration" sub-menu');
        await HomePage.configurationUnderAdministration.dispositions.clickButton();
    }

    /**
     * Click 'Pending Reports' button under the 'Reports' menu
     */
    static async clickPendingReportsButtonUnderReportsMenu() {
        StepLogger.subStep('Click "Pending Reports" button under the "Reports" menu');
        await HomePage.reports.pendingReports.clickButton();
    }

    /**
     * Click 'Custom Reports' button under the 'Reports' menu
     */
    static async clickCustomReportsButtonUnderReportsMenu() {
        StepLogger.subStep('Click "Custom Reports" button under the "Reports" menu');
        await HomePage.reports.customReports.clickButton();
    }

    /**
     * Click 'Marketing Lists' button under the 'Marketing' menu
     */
    static async clickMarketingListsButtonUnderMarketingMenu() {
        StepLogger.subStep('Click "Marketing Lists" button under the "Marketing" menu');
        await HomePage.marketing.marketingLists.clickButton();
    }

    /**
     * Verify 'Marketing' menu on left-pane
     */
    static async verifyMarketingMenu() {
        StepLogger.subVerification('Verify "Marketing" menu on left-pane');
        await HomePage.sidebar.expanded.marketing.verifyDisplayedStatus();
    }

    /**
     * Verify 'Service Center' menu on left-pane
     */
    static async verifyServiceCenterMenu() {
        StepLogger.subVerification('Verify "Service Center" menu on left-pane');
        await HomePage.sidebar.expanded.serviceCenter.verifyDisplayedStatus();
    }

    /**
     * Click 'Cases' button 'Service Center' menu
     */
    static async clickCasesButtonUnderServiceCenterMenu() {
        StepLogger.subStep('Click "Cases" button under "Service Center" menu');
        await HomePage.serviceCenter.cases.clickButton();
    }

    /**
     * Click 'Managed Contacts' button
     */
    static async clickManagedContactsButton() {
        StepLogger.subStep('Click "Managed Contacts" button');
        await HomePage.sidebar.expanded.managedContacts.clickButton();
    }

    /**
     * Click 'Cases' button under 'Queues' menu
     */
    static async clickCasesButtonUnderQueues() {
        StepLogger.subStep('Click "Cases" button under "Queues" menu');
        await HomePage.queue.cases.clickButton();
    }

    /**
     * Verify 'Queues' menu in the left-pane
     */
    static async verifyQueuesMenu() {
        StepLogger.subVerification('Verify "Queues" menu in the left-pane');
        await HomePage.sidebar.expanded.queues.verifyDisplayedStatus();
    }

    /**
     * Click 'Lost' button under 'Opportunities' menu
     */
    static async clickLostButtonUnderOpportunitiesMenu() {
        StepLogger.subStep('Click "Lost" button under "Opportunities" menu');
        await HomePage.opportunities.lost.clickButton();
    }

    /**
     * Verify 'Opportunities' menu displayed in the left-pane
     */
    static async verifyOpportunitiesMenuDisplayed() {
        StepLogger.subVerification('Verify "Opportunities" menu displayed in the left-pane');
        await HomePage.sidebar.expanded.opportunities.verifyDisplayedStatus();
    }

    /**
     * Verify 'New' menu displayed in the left-pane
     */
    static async verifyNewMenuDisplayed() {
        StepLogger.subVerification('Verify "New" menu displayed in the left-pane');
        await HomePage.sidebar.expanded.new.verifyDisplayedStatus();
    }

    /**
     * Verify 'Home' page displayed
     */
    static async verifyHomepageDisplayed() {
        StepLogger.subVerification('Verify "Home" page is displayed properly');
        await HomePage.pageTitle.verifyDisplayedStatus();
    }

    /**
     * Verify left-pane menu items displayed
     */
    static async verifyLeftPaneMenuItemsDisplayed() {
        StepLogger.subVerification('Verify left-pane menu items displayed');

        const { expanded } = HomePage.sidebar;

        await expanded.home.verifyDisplayedStatus();
        await expanded.new.verifyDisplayedStatus();
        await expanded.opportunities.verifyDisplayedStatus();
        await expanded.queues.verifyDisplayedStatus();
        await expanded.toDoList.verifyDisplayedStatus();
        await expanded.managedContacts.verifyDisplayedStatus();
        await expanded.serviceCenter.verifyDisplayedStatus();
        await expanded.marketing.verifyDisplayedStatus();
        await expanded.report.verifyDisplayedStatus();
        await expanded.resources.verifyDisplayedStatus();
        await expanded.administration.verifyDisplayedStatus();
        await expanded.myProfile.verifyDisplayedStatus();
        await expanded.signOff.verifyDisplayedStatus();
    }
}

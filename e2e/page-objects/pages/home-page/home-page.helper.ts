// Disabled max file line count rule as file has many relevant functions
/*tslint:disable:max-file-line-count */
import { ElementFinder } from 'protractor';

import { StepLogger } from '../../../../core/logger/step-logger';
import { AlertHelper } from '../../../components/html/alert-helper';
import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { CommonPage } from '../common/common.po';
import { DropdownField } from '../models/dropdown-field';

import { HomePageHelperExtension } from './home-page-extension.helper';
import { HomePage } from './home-page.po';

const { executeInIFrame } = PageHelper;

export class HomePageHelper extends HomePageHelperExtension {
    private static vInstance: HomePageHelper;
    private constructor() {
        super();
    }
    public static getInstance(): HomePageHelper {
        return this.vInstance || (this.vInstance = new this());
    }

    /**
     * Verify fields displayed under 'User' section
     */
    static async verifyUserOptions() {
        await HomePage.toolbar.environmentLabel.verifyDisplayedStatus();
        await HomePage.toolbar.environmentVersion.verifyDisplayedStatus();
        await HomePage.toolbar.sessionTimeLabel.verifyDisplayedStatus();
        await HomePage.toolbar.sessionTime.verifyDisplayedStatus();
        await HomePage.toolbar.about.verifyDisplayedStatus();
        await HomePage.toolbar.signOff.verifyDisplayedStatus();
    }

    /**
     * Click 'New' link in sidebar
     */
    static async clickNewLink() {
        await HomePage.sidebar.expanded.new.clickLink();
    }

    /**
     * Click 'Queues' link in sidebar
     */
    static async clickQueuesLink() {
        await HomePage.sidebar.expanded.queues.clickLink();
    }

    /**
     * Click 'Home' link in sidebar
     */
    static async clickHomeLink() {
        await HomePage.sidebar.expanded.home.clickLink();
    }

    /**
     * Click 'To Do List' link in sidebar
     */
    static async clickToDoListLabel() {
        await HomePage.sidebar.expanded.toDoList.clickLink();
        await WaitHelper.waitForPageToStable();
    }

    /**
     * Click 'To Do List' link in sidebar
     */
    static async verifyToDoListLinkDisplayed() {
        await HomePage.sidebar.expanded.toDoList.verifyDisplayedStatus();
    }

    /**
     * Verify opportunity, case, account, commercialProspect, retailProspect
     * are displayed under New dropdown
     */
    static async verifyOptionsUnderNew() {
        const { newItems } = HomePage;
        await newItems.opportunity.verifyDisplayedStatus();
        await newItems.case.verifyDisplayedStatus();
        await newItems.account.verifyDisplayedStatus();
        await newItems.commercialProspect.verifyDisplayedStatus();
        await newItems.retailProspect.verifyDisplayedStatus();
    }

    /**
     * Verify Account is displayed under New section
     */
    static async verifyAccountDisplayedUnderNew() {
        await HomePage.newItems.account.verifyDisplayedStatus();
    }

    /**
     * Click 'Commercial Prospect' under New section
     */
    static async clickCommercialProspectUnderNew() {
        await HomePage.newItems.commercialProspect.clickLink();
    }

    /**
     * Click 'Account' under New section
     */
    static async clickAccountUnderNew() {
        await HomePage.newItems.account.clickLink();
    }

    /**
     * Click 'Case' under New section
     */
    static async clickCaseUnderNew() {
        await HomePage.newItems.case.clickLink();
    }

    /**
     * Click 'Opportunities' under Queues section
     */
    static async clickOpportunitiesUnderQueues() {
        await HomePage.queue.opportunities.clickLink();
    }

    /**
     * Click 'Opportunity' under New section
     * It can also click on 'New' before clicking on 'Opportunity'
     * @param clickNew
     */
    static async clickOpportunityUnderNew(clickNew = false) {
        if (clickNew) {
            await this.clickNewLink();
        }
        await HomePage.newItems.opportunity.clickLink();
    }

    /**
     * Click 'Tasks' under Queues section
     */
    static async clickTasksUnderQueues() {
        await HomePage.queue.tasks.clickLink();
    }

    /**
     * Click 'Retail Prospect' under New section
     */
    static async clickRetailProspectUnderNew() {
        await HomePage.newItems.retailProspect.hoverOverAndClick();
    }

    /**
     * Verify 'Check Existing Contact' modal is displayed
     */
    static async verifyCheckExistingContactDisplayed() {
        await HomePage.checkExisitingContactModal.checkExistingContactTitle.verifyDisplayedStatus();
    }

    /**
     * Enter 'FirstName' on 'Check Existing Contact' modal
     * @param fName
     */
    static async enterFirstNameOnCheckExistingContactModal(fName: string) {
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await HomePage.checkExisitingContactModal.firstName
                .sendKeys(fName);
        });
    }

    /**
     * Verify 'FirstName'is entered properly on 'Check Existing Contact' modal
     * @param {string} fName
     */
    static async verifyFirstNameIsEnteredOnCheckExistingContactModal(fName: string) {
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await HomePage.checkExisitingContactModal.firstName.verifyTextEntered(fName);
        });
    }

    /**
     * Enter 'LastName' on 'Check Existing Contact' modal
     * @param lName
     */
    static async enterLastNameOnCheckExistingContactModal(lName: string) {
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await HomePage.checkExisitingContactModal.lastName.sendKeys(lName);
        });
    }

    /**
     * Verify 'LastName'is entered properly on 'Check Existing Contact' modal
     * @param {string} fName
     */
    static async verifyLastNameIsEnteredOnCheckExistingContactModal(fName: string) {
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await HomePage.checkExisitingContactModal.lastName.verifyTextEntered(fName);
        });
    }

    /**
     * Enter 'Company' name on 'Check Existing Contact' modal
     * @param company
     */
    static async enterCompanyOnCheckExistingContactModal(company: string) {
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await HomePage.checkExisitingContactModal.company.sendKeys(company);
        });
    }

    /**
     * Verify 'Company'is entered properly on 'Check Existing Contact' modal
     * @param {string} company
     */
    static async verifyCompanyIsEnteredOnCheckExistingContactModal(company: string) {
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await HomePage.checkExisitingContactModal.company.verifyTextEntered(company);
        });
    }

    /**
     * Select 'ReturnOption' on 'Check Existing Contact' modal
     * @param textOrIndex
     */
    static async selectReturnOptionOnCheckExistingContactModal(textOrIndex: DropdownField) {
        const { return: returnElement } = await HomePage.checkExisitingContactModal;
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await DropDownHelper.selectSpecificOrNthOptionByCss(returnElement,
                textOrIndex);
        });
    }

    /**
     * Verify 'ReturnOption'is selected properly on 'Check Existing Contact' modal
     * @param {DropdownField} textOrIndex
     */
    static async verifyReturnOptionIsSelectedOnCheckExistingContactModal(textOrIndex: DropdownField) {
        const { return: returnElement } = await HomePage.checkExisitingContactModal;
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await ExpectationHelper.verifyValueAttributeOfDropdownOption(returnElement,
                textOrIndex);
        });
    }

    /**
     * Click 'SearchContacts' on 'Check Existing Contact' modal
     */
    static async clickSearchContactsOnCheckExistingContactModal(switchBack = true) {
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await HomePage.checkExisitingContactModal.searchContacts.clickButton();
        }, switchBack);
    }

    /**
     * Verify 'ContinueWithNewProspect'is enabled on 'Check Existing Contact' modal
     */
    static async verifyContinueWithNewProspectIsEnabled() {
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await ExpectationHelper.verifyEnabledStatus(HomePage
                .checkExisitingContactModal.continueWithNewProspect);
        });
    }

    /**
     * Click 'ContinueWithNewProspect' button on 'Check Existing Contact' modal
     */
    static async clickContinueWithNewProspectButton() {
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await HomePage.checkExisitingContactModal.continueWithNewProspect.clickButton();
        });
    }

    /**
     * Verify 'Queues' menu is expanded
     */
    static async verifyQueuesMenuIsExpanded() {
        await HomePage.queue.queueExpanded.verifyDisplayedStatus();
    }

    /**
     * Verify Opportunities, Tasks, Tickets, Events and Cases
     * options are displayed under Queues section
     */
    static async verifyOptionsDisplayedUnderQueues() {
        const { queue } = HomePage;
        await queue.opportunities.verifyDisplayedStatus();
        await queue.tasks.verifyDisplayedStatus();
        await queue.tickets.verifyDisplayedStatus();
        await queue.events.verifyDisplayedStatus();
        await queue.cases.verifyDisplayedStatus();
    }

    /**
     * Click 'Goals' Menu Item in sidebar
     */
    static async clickGoalsUnderAdministration() {
        const { administration } = HomePage;
        StepLogger.subStep('Click Goals Menu Item Under Adminstration');
        await administration.goals.clickButton();
    }

    /**
     * Click 'Administration' link in sidebar
     */
    static async clickAdministrationLink() {
        await WaitHelper.waitForElementToBeDisplayed(HomePage.sidebar.expanded.administration.item);
        await HomePage.sidebar.expanded.administration.clickLink();
    }

    static async verifyOptionsUnderAdministration() {
        const { administration } = HomePage;
        await administration.system.scrollToElement();
        await administration.configuration.verifyDisplayedStatus();
        await administration.compensation.verifyDisplayedStatus();
        await administration.goals.verifyDisplayedStatus();
        await administration.organization.verifyDisplayedStatus();
        await administration.resources.verifyDisplayedStatus();
        await administration.serviceCenter.verifyDisplayedStatus();
        await administration.security.verifyDisplayedStatus();
        await administration.system.verifyDisplayedStatus();
    }

    /**
     * Click Service Center under Administration submenu
     */
    static async clickServiceCenterUnderAdministration() {
        await HomePage.administration.serviceCenter.clickLink();
    }

    static async verifyOptionsUnderServiceCenter() {
        const { serviceCenterUnderAdministration } = HomePage;
        await serviceCenterUnderAdministration.ticketCategories.scrollToElement();
        await serviceCenterUnderAdministration.caseAreas.verifyDisplayedStatus();
        await serviceCenterUnderAdministration.knowledgeBase.verifyDisplayedStatus();
        await serviceCenterUnderAdministration.ticketCategories.verifyDisplayedStatus();
    }

    /**
     * Click Sales Stages under Configuration submenu
     */
    static async clickSalesStagesUnderConfiguration() {
        const { configurationUnderAdministration } = HomePage;
        StepLogger.subStep('Clicking on the Sales Stages Sub menu item');
        await configurationUnderAdministration.salesStages.clickButton();
    }

    /**
     * Click Configuration under Administration submenu
     */
    static async clickConfigurationUnderAdministration() {
        await WaitHelper.waitForElementToBeDisplayed(HomePage.administration.configuration.item);
        await HomePage.administration.configuration.clickLink();
    }

    /**
    * Click Outside Institutions under Configuration submenu
    */
    static async clickOutsideInstitutions() {
        const { configurationUnderAdministration } = HomePage;
        await WaitHelper.waitForElementToBeDisplayed(configurationUnderAdministration.outsideInstitutions.item);
        await configurationUnderAdministration.outsideInstitutions.clickLink();
    }

    /**
     * Click Compensation under Administration submenu
     */
    static async clickCompensationUnderAdministration() {
        await WaitHelper.waitForElementToBeDisplayed(HomePage.administration.compensation.item);
        await HomePage.administration.compensation.clickLink();
    }

    static async verifyOptionsUnderConfiguration() {
        StepLogger.subVerification('Verify Options Under Configuration');
        const { configurationUnderAdministration } = HomePage;
        await configurationUnderAdministration.customItem.scrollToElement();
        await configurationUnderAdministration.customItemType.verifyDisplayedStatus();
        await configurationUnderAdministration.dispositions.verifyDisplayedStatus();
        await configurationUnderAdministration.eventTypes.verifyDisplayedStatus();
        await configurationUnderAdministration.lostReasons.verifyDisplayedStatus();
        await configurationUnderAdministration.onBoarding.verifyDisplayedStatus();
        await configurationUnderAdministration.organizations.verifyDisplayedStatus();
        await configurationUnderAdministration.outsideInstitutions.verifyDisplayedStatus();
        await configurationUnderAdministration.products.verifyDisplayedStatus();
        await configurationUnderAdministration.queues.verifyDisplayedStatus();
        await configurationUnderAdministration.referralSources.verifyDisplayedStatus();
        await configurationUnderAdministration.relationships.verifyDisplayedStatus();
        await configurationUnderAdministration.salesStages.verifyDisplayedStatus();
        await configurationUnderAdministration.trainingModules.verifyDisplayedStatus();
        await configurationUnderAdministration.transferActivities.verifyDisplayedStatus();
        await configurationUnderAdministration.userLabels.verifyDisplayedStatus();
    }

    /**
     * Click Organization under Administration submenu
     */
    static async clickOrganizationUnderAdministration() {
        StepLogger.subStep('Click Organization Under Adminstration');
        await WaitHelper.waitForElementToBeDisplayed(HomePage.administration.organization.item);
        await HomePage.administration.organization.clickLink();
    }

    static async optionsUnderOrganization() {
        StepLogger.subVerification('Verify Options Under Organization');
        const { organizationUnderAdministration } = HomePage;
        await organizationUnderAdministration.branches.scrollToElement();
        await organizationUnderAdministration.branches.verifyDisplayedStatus();
        await organizationUnderAdministration.departments.verifyDisplayedStatus();
        await organizationUnderAdministration.districts.verifyDisplayedStatus();
        await organizationUnderAdministration.regions.verifyDisplayedStatus();
    }

    /**
     * Click Departments Under Organization
     */
    static async clickDepartmentsUnderOrganization() {
        await WaitHelper.waitForElementToBeDisplayed(HomePage.organizationUnderAdministration.departments.item);
        await HomePage.organizationUnderAdministration.departments.clickLink();
    }

    /**
     * Click Product under Configuration
     */
    static async clickProductsUnderConfiguration() {
        await WaitHelper.waitForElementToBeDisplayed(HomePage.configurationUnderAdministration.products.item);
        await HomePage.configurationUnderAdministration.products.clickLink();
    }

    /**
     * Click 'Knowledge Base' submenu
     */
    static async clickKnowledgeBaseUnderServiceCenterUnderAdministration() {
        await HomePage.serviceCenterUnderAdministration.knowledgeBase.clickLink();
    }

    /**
     * Click 'Knowledge Base' submenu
     */
    static async clickTicketCategoriesUnderServiceCenterUnderAdministration() {
        await HomePage.serviceCenterUnderAdministration.ticketCategories.clickLink();
    }

    /**
     * Click 'Administration' link in sidebar
     */
    static async clickServiceCenterLink() {
        await HomePage.sidebar.expanded.serviceCenter.clickLink();
    }

    static async verifyOptionsUnderServiceCenterMenu() {
        const { serviceCenter } = HomePage;
        await serviceCenter.tickets.verifyDisplayedStatus();
        await serviceCenter.cases.verifyDisplayedStatus();
        await serviceCenter.knowledgeBase.verifyDisplayedStatus();
    }

    static async clickKnowledgeBaseUnderServiceCenter() {
        await HomePage.serviceCenter.knowledgeBase.clickLink();
    }

    /**
     * Click Tickets under Service Center
     */
    static async clickTicketsUnderServiceCenter() {
        await HomePage.serviceCenter.tickets.clickLink();
    }

    static async verifyEnterNewProspectOnCheckExistingContactModal() {
        StepLogger.subVerification('Verify "Enter the following new prospect information"');
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await HomePage.checkExisitingContactModal.enterNewProspect.verifyDisplayedStatus();
        });
    }

    /**
     * Enter 'Company' name on 'CheckExistingContact' modal and click 'Search' button
     * @param company
     */
    static async enterCompanyNameAndClickSearchButton(company: string) {
        await this.enterCompanyOnCheckExistingContactModal(company);
        await this.clickSearchContactsOnCheckExistingContactModal();
    }

    static async verifyContactsListIsDisplayed() {
        const { contactsList } = HomePage.checkExisitingContactModal;
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await ExpectationHelper.verifyElementsCountToBeEqualOrGreaterThan(contactsList,
                1);
            await contactsList.item.each(async (e: ElementFinder) => {
                await ExpectationHelper.verifyDisplayedElementFinder(e, contactsList.name);
            });
        });
    }

    static async verifyAlertText(expectedText: string) {
        StepLogger.subVerification('Verify Alert text');
        const alertText = await AlertHelper.getText();
        await ExpectationHelper.verifyStringValueContain(alertText.toLowerCase(), expectedText.toLowerCase());
    }

    static async verifySearchContactsOnCheckExistingContactModal(switchBack = true) {
        StepLogger.subVerification('Verify Search Contacts');
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await HomePage.checkExisitingContactModal.searchContacts.verifyDisplayedStatus();
        }, switchBack);
    }

    static async verifyReturnOptionOnCheckExistingContactModal() {
        StepLogger.subVerification('Verify Return option');
        const { return: returnElement } = await HomePage.checkExisitingContactModal;
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await returnElement.verifyDisplayedStatus();
        });
    }

    static async verifyContactGridHeader(switchBack = true) {
        StepLogger.subVerification('Verify grid Column Header');
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await HomePage.checkExisitingContactModal.nameHeader.verifyDisplayedStatus();
            await HomePage.checkExisitingContactModal.addressHeader.verifyDisplayedStatus();
            await HomePage.checkExisitingContactModal.workPhoneHeader.verifyDisplayedStatus();
            await HomePage.checkExisitingContactModal.homePhoneHeader.verifyDisplayedStatus();
            await HomePage.checkExisitingContactModal.taxIdHeader.verifyDisplayedStatus();
            await HomePage.checkExisitingContactModal.detailsHeader.verifyDisplayedStatus();
        }, switchBack);
    }

    static async verifyContactListCheckExistingContactModal(switchBack = true) {
        StepLogger.subVerification('Verify Contact list');
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await HomePage.checkExisitingContactModal.contactList.verifyDisplayedStatus();
        }, switchBack);
    }

    static async verifyOpportunitySubmenuDisplayed() {
        const { newItems } = HomePage;
        await newItems.opportunity.verifyDisplayedStatus();
    }
}

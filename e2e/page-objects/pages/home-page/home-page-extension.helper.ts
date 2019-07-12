import { protractor, ElementFinder } from 'protractor';

import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { TextBoxHelper } from '../../../components/html/textbox-helper';
import { EndpointHelper } from '../../../components/misc-utils/endpoint-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { BasePageHelper } from '../base-page.helper';
import { CommonPage } from '../common/common.po';
import { ReferralsPageHelper } from '../referrals/referrals.helper';

import { HomePageExtension } from './home-page-extension.po';
import { HomePageConstant } from './home-page.constants';
import { HomePageHelper } from './home-page.helper';
import { HomePage } from './home-page.po';
import { HomePage1Helper } from './home-page1.helper';

const { executeInIFrame } = PageHelper;

export class HomePageHelperExtension extends BasePageHelper {

    /**
     * Verify if 'Search' button is displayed
     */
    static async verifySearchButtonIsDisplayed() {
        await HomePage.widgets.caseByCategory.verifyDisplayedStatus();
        await HomePage.header.searchButton.verifyDisplayedStatus();
    }

    /**
     * Click 'Search' button
     */
    static async clickSearchButton() {
        await HomePage.header.searchButton.clickButton();
    }

    /**
     * Enter Search criteria for searching field
     * @param text
     */
    static async enterSearchCriteria(text: string) {
        StepLogger.subStep('Enter Search text');
        await HomePage.header.searchBox.hoverOverAndClick();
        await HomePage.header.searchBox.sendKeys(text);
    }

    static async verifySearchDropdownListAndInputFieldsAreDisplayed() {
        await HomePage.header.searchBox.verifyDisplayedStatus();
        await HomePage.header.searchDrodown.verifyDisplayedStatus();
        await HomePage.header.searchDrodown.clickButton();
        await HomePage.searchDropdownOptions.contacts.verifyDisplayedStatus();
        await HomePage.searchDropdownOptions.contactsByNumber.verifyDisplayedStatus();
        await HomePage.searchDropdownOptions.retailContacts.verifyDisplayedStatus();
        await HomePage.searchDropdownOptions.cases.verifyDisplayedStatus();
        await HomePage.searchDropdownOptions.commercialContacts.verifyDisplayedStatus();
        await HomePage.searchDropdownOptions.accounts.verifyDisplayedStatus();
    }

    /**
     * Verify search box is displayed
     * @param text
     */
    static async verifySearchCriteriaIsDisplayed() {
        await HomePage.header.searchBox.verifyDisplayedStatus();
    }

    /**
     * Verify text is entered properly into the search box
     * @param text
     */
    static async verifySearchCriteriaIsEntered(text: string) {
        await HomePage.header.searchBox.verifyTextEntered(text);
    }

    /**
     *
     * @param text
     */
    static async enterSearchCriteriaAndHitEnter(text: string) {
        await HomePage.header.searchBox.hoverOverAndClick();
        await TextBoxHelper.typeSlowly(HomePage.header.searchBox.item,
            `${text}${protractor.Key.ENTER}`);
    }

    /**
     * Verify if search results are displayed
     */
    static async verifySearchResultsAreDisplayed() {
        await ExpectationHelper.verifyElementsCountToBeEqualOrGreaterThan(HomePage.header.searchResults,
            1);
        await HomePage.header.searchResults.item.each(async (e: ElementFinder) => {
            await ExpectationHelper.verifyDisplayedElementFinder(e,
                HomePage.header.searchResults.name);
        });
    }

    /**
     * Verify contact card is displayed by given {contactName}
     * @param contactName
     */
    static async verifyContactCardIsDisplayed(contactName: string) {
        await HomePage.header.specificResult(contactName).verifyDisplayedStatus();
    }

    /**
     * Click on Search Result by given {searchText}
     * @param searchText
     */
    static async clickOnSearchResult(searchText: string) {
        await HomePage.header.specificResult(searchText).clickLink();
    }

    /**
     * Select 'Contacts' from Search dropdown
     */
    static async selectContactsFromSearchDropdown() {
        await HomePage.header.searchDrodown.clickButton();
        await HomePage.searchDropdownOptions.contacts.clickButton();
    }

    /**
     * Verify 'Contacts' option is selected in dropdown
     */
    static async verifyContactsOptionIsSelectedInDropdown() {
        await ExpectationHelper.verifyHiddenStatus(HomePage.searchDropdownOptions.contacts);
    }

    /**
     * Select 'Contacts By Number' from Search dropdown
     */
    static async selectContactsByNumberFromSearchDropdown() {
        StepLogger.subStep('Select "Contacts By Number" from Search dropdown');
        await HomePage.header.searchDrodown.clickButton();
        await HomePage.searchDropdownOptions.contactsByNumber.clickButton();
    }

    /**
     * Verify 'Contacts By Number' option is selected in dropdown
     */
    static async verifyContactsByNumberOptionIsSelectedInDropdown() {
        StepLogger.subVerification('Verify "Contacts By Number" option is selected in dropdown');
        await ExpectationHelper.verifyHiddenStatus(HomePage.searchDropdownOptions.contactsByNumber);
    }

    /**
     * Select 'Retail Contacts' from Search dropdown
     */
    static async selectRetailContactsFromSearchDropdown() {
        StepLogger.subStep('Select "Retail Contacts" from Search dropdown');
        await HomePage.header.searchDrodown.clickButton();
        await HomePage.searchDropdownOptions.retailContacts.clickButton();
    }

    /**
     * Verify 'Retail Contacts' option is selected in dropdown
     */
    static async verifyRetailContactsOptionIsSelectedInDropdown() {
        StepLogger.subVerification('Verify "Retail Contacts" option is selected in dropdown');
        await ExpectationHelper.verifyHiddenStatus(HomePage.searchDropdownOptions.retailContacts);
    }

    /**
     * Select 'Commercial Contacts' from Search dropdown
     */
    static async selectCommercialContactsFromSearchDropdown() {
        StepLogger.subStep('Select "Commercial Contacts" from search dropdown');
        await HomePage.header.searchDrodown.clickButton();
        await HomePage.searchDropdownOptions.commercialContacts.clickButton();
    }

    /**
     * Verify 'Commercial Contacts' option is selected in dropdown
     */
    static async verifyCommercialContactsOptionIsSelectedInDropdown() {
        StepLogger.subVerification('Verify "Commercial Contacts" option is selected in dropdown');
        await ExpectationHelper.verifyHiddenStatus(HomePage.searchDropdownOptions.commercialContacts);
    }

    /**
     * Select 'Cases' from Search dropdown
     */
    static async selectCasesFromSearchDropdown() {
        StepLogger.subStep('Select "Cases" from Search dropdown');
        await HomePage.header.searchDrodown.clickButton();
        await HomePage.searchDropdownOptions.cases.clickButton();
    }

    /**
     * Verify 'Cases' option is selected in dropdown
     */
    static async verifyCasesOptionIsSelectedInDropdown() {
        StepLogger.subVerification('Verify "Cases" option is selected in dropdown');
        await ExpectationHelper.verifyHiddenStatus(HomePage.searchDropdownOptions.cases);
    }

    /**
     * Select 'Accounts' from Search dropdown
     */
    static async selectAccountsFromSearchDropdown() {
        StepLogger.subStep('Select "Accounts" from Search dropdown');
        await HomePage.header.searchDrodown.clickButton();
        await HomePage.searchDropdownOptions.accounts.clickButton();
    }

    /**
     * Verify 'Accounts' option is selected in dropdown
     */
    static async verifyAccountsOptionIsSelectedInDropdown() {
        StepLogger.subVerification('Verify "Accounts" option is selected in dropdown');
        await ExpectationHelper.verifyHiddenStatus(HomePage.searchDropdownOptions.accounts);
    }

    /**
     * Get message displayed after sucessful search
     */
    static async getMessageDisplayedAfterSuccessfulSearch() {
        StepLogger.subStep('Get message displayed after successful search');
        return await HomePageExtension.globalSearchToolbar.searchTerm.getText();
    }

    /**
     * Verify the message displayed after successful search
     */
    static async verifyMessageDisplayedAfterSuccessfulSearch(searchText: string) {
        StepLogger.subVerification('Verify the message displayed after successful search');
        await ExpectationHelper.verifyStringValueContain(await this.getMessageDisplayedAfterSuccessfulSearch(),
        `${HomePageConstant.searchSuccessfulMessage.message}${searchText}`);
    }

    /**
     * Click search 'Filter' dropdown
     */
    static async clickSearchFilter() {
        StepLogger.subStep('Click search "Filter" dropdown');
        await HomePageExtension.globalSearchToolbar.searchFilter.clickButton();
    }

    /**
     * Verify if filter items are displayed
     */
    static async verifyFilterItemsDisplayed() {
        StepLogger.subVerification('Verify if filter items are displayed');
        await HomePageExtension.searchFilterItems.all.verifyDisplayedStatus();
    }

    /**
     * Select 'Retail Contact' from filter
     */
    static async selectRetailContactFromFilter() {
        StepLogger.subStep('Select "Retail Contact" from filter');
        await HomePageExtension.searchFilterItems.retailContact.clickButton();
    }

    /**
     * Select 'Case Owner - User' from filter
     */
    static async selectCaseOwnerUserFromFilter() {
        StepLogger.subStep('Select "Retail Contacts" from Search dropdown');
        await HomePageExtension.searchFilterItems.caseOwnerUser.clickButton();
    }

    /**
     * Verify 'Show Card View' button is displayed
     */
    static async verifyShowCardViewButtonIsDisplayed() {
        StepLogger.subVerification('Verify "Show Card View" button is displayed');
        await HomePageExtension.globalSearchToolbar.showCardView.verifyDisplayedStatus();
    }

    /**
     * Click 'Show Card View' button
     */
    static async clickShowCardView() {
        StepLogger.subStep('Click "Show Card View" button');
        await HomePageExtension.globalSearchToolbar.showCardView.hoverOverAndClick();
    }

    /**
     * Verify search results are displayed in Card View
     */
    static async verifySearchResultsAreDisplayedInCardView() {
        StepLogger.subVerification('Verify search results are displayed in Card View');
        await ExpectationHelper.verifyElementsCountToBeEqualOrGreaterThan(HomePageExtension.searchResultsInCardView
            .searchResultsCardView, 1);
    }

    /**
     * Verify 'Show Grid View' button is displayed
     */
    static async verifyShowGridViewButtonIsDisplayed() {
        StepLogger.subVerification('Verify "Show Grid View" button is displayed');
        await HomePageExtension.globalSearchToolbar.showGridView.verifyDisplayedStatus();
    }

    /**
     * Click 'Show Grid View' button
     */
    static async clickShowGridView() {
        StepLogger.subStep('Click "Show Grid View" button');
        await HomePageExtension.globalSearchToolbar.showGridView.hoverOverAndClick();
    }

    /**
     * Verify search results are displayed in Grid View
     */
    static async verifySearchResultsAreDisplayedInGridView() {
        StepLogger.subVerification('Verify search results are displayed in Grid View');
        await ExpectationHelper.verifyElementsCountToBeEqualOrGreaterThan(HomePageExtension.searchResultsInGridView
            .searchResultsGridView, 1);
    }

    /**
     * Verify Refresh button is displayed
     */
    static async verifyRefreshButtonIsDisplayed() {
        StepLogger.subVerification('Verify Refresh button is displayed');
        await HomePageExtension.globalSearchToolbar.refresh.verifyDisplayedStatus();
    }

    /**
     * Click Refresh button
     */
    static async clickRefreshButton() {
        StepLogger.subStep('Click Refresh button');
        await HomePageExtension.globalSearchToolbar.refresh.clickButton();
    }

    /**
     * Verify if search results were refreshed.
     */
    static async verifyIfSearchResultsAreRefreshed() {
        StepLogger.subStep('Verify if search results were refreshed');
        await ExpectationHelper.verifyElementsCountToBeEqualOrGreaterThan(HomePageExtension.searchResultsInCardView
            .searchResultsCardView, 1);
    }

    /**
     * Verify if user is redirected to the new tab
     */
    static async verifyIfUserRedirectedToNewTab() {
        StepLogger.subVerification('Verify if user is redirected to the new Tab');
        await ExpectationHelper.verifyValueGraterThan(await PageHelper.getTabsCount(), 1);
    }

    /**
     * Get page header details of Contacts page
     */
    static async getPageHeaderDetailsOfContactPage() {
        StepLogger.subStep('Get page header details of Contacts page');
        return await HomePageExtension.contactPageHeaderDetails.contactPageHeaderDetails.getText();
    }

    /**
     * Verify page header details in the new tab
     * @param toCloseAfterExecution
     */
    static async verifyPageHeaderDetailsInNewTab(expectedPageHeaderDetails: string, toCloseAfterExecution = false) {
        StepLogger.subVerification('Verify page header details in the new tab');
        await PageHelper.executeInNewTab(async () => {
            await ExpectationHelper.verifyStringValueContain(await this.getPageHeaderDetailsOfContactPage(),
            expectedPageHeaderDetails); }, 1, toCloseAfterExecution);
    }

    /*
     * Click 'Case Areas' submenu
     */
    static async clickCaseAreasUnderServiceCenterUnderAdministration() {
        await HomePage.serviceCenterUnderAdministration.caseAreas.clickLink();
    }

    /*
     * Click 'Next Page Arrow' link
     */
    static async clickOnNextArrow() {
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await HomePage.checkExisitingContactModal.nextPageArrow.clickLink();
        });
    }

    /*
     * Click 'Previous Page Arrow' link
     */
    static async clickOnPreviousArrow() {
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await HomePage.checkExisitingContactModal.previousPageArrow.clickLink();
        });
    }

    /*
     * Click 'Particular Page number' link
     */
    static async clickOnPageNumber(pageNumber: string) {
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await HomePage.getPageNumberLink(pageNumber).clickLink();
        });
    }

    /**
     * Verify Search box is displayed
     * @param text
    */
    static async verifyNavigatedToCorrectPage(pageNumber: string) {
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await HomePage.getPageNumberLink(pageNumber).verifyDisplayedStatus();
        });
    }

    static async navigateToProductsPage() {
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.clickConfigurationUnderAdministration();
        await HomePageHelper.clickProductsUnderConfiguration();
    }

    /**
     * Click 'Referral Sources' submenu
     */
    static async clickReferralSourcesUnderConfigurationUnderAdministration() {
        await HomePage.configurationUnderAdministration.referralSources.clickLink();
    }

    /**
     * Verify 'FirstName'is entered properly on 'Check Existing Contact' modal
     * @param {string} fName
     */
    static async verifyFirstNameIsDisplayedOnCheckExistingContactModal() {
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await HomePage.checkExisitingContactModal.firstName.verifyDisplayedStatus();
        });
    }

    /**
    * Verify 'LastName' is displayed on 'Check Existing Contact' modal
    * @param {string} fName
    */
    static async verifyLastNameIsDisplayedOnCheckExistingContactModal() {
        await executeInIFrame([CommonPage.componentIFrame], async () => {
            await HomePage.checkExisitingContactModal.lastName.verifyDisplayedStatus();
        });
    }

    static async verifyAlertError() {
        StepLogger.subStep('Comapny name is required Error is displayed in an Alert');
        await ExpectationHelper.verifyAlertMessage(HomePageConstant.alertMessages.companyNameIsRequired);
    }

    /**
     * Click 'Events' under Queues section
     */
    static async clickEventsUnderQueues() {
        await HomePage.queue.events.clickLink();
    }

    /* Click 'My Profile' link in sidebar
     */
    static async clickMyProfileLink() {
        await HomePage.sidebar.expanded.myProfile.clickLink();
    }

    /**
     * Verify 'My Profile' link in sidebar
     */
    static async verifyMyProfileLinkDisplayed() {
        await HomePage.sidebar.expanded.myProfile.verifyDisplayedStatus();
    }

    static async verifySearchBox() {
        StepLogger.subVerification('Verify Search TextBox');
        await HomePage.header.searchBox.verifyDisplayedStatus();
    }

    static async enterSearchTextAndClicksearch(uniqueName: string) {
        StepLogger.subStep('Enter search text and click search');
        await this.enterSearchCriteria(uniqueName);
        await this.clickSearchButton();
    }

    static async navigateToReferralsPage() {
        await HomePage1Helper.clickOnOpportunitiesMenu();
        await HomePage1Helper.clickOnReferralsMenu();
        await ReferralsPageHelper.verifyReferralsPageDisplayed();
    }

    static async verifyReferralsMenuDisplayed() {
        await HomePage.opportunities.referrals.verifyDisplayedStatus();
    }

    url(): string {
        return EndpointHelper.home;
    }
}

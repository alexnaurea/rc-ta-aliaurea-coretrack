import { browser, ElementFinder } from 'protractor';

import { StepLogger } from '../../../../core/logger/step-logger';
import { AlertHelper } from '../../../components/html/alert-helper';
import { CheckboxHelper } from '../../../components/html/checkbox-helper';
import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { EndpointHelper } from '../../../components/misc-utils/endpoint-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { ProductsPage } from '../administration/configuration/products/products.po';
import { BasePageHelper } from '../base-page.helper';
import { CommonPage } from '../common/common.po';
import { HomePage } from '../home-page/home-page.po';
import { ContactSelector } from '../models/contact.model';
import { NewCasePage } from '../new-case-page/new-case-page.po';

import { NewOpportunityPageConstant } from './new-opportunity-page.constants';
import { NewOpportunityPage } from './new-opportunity-page.po';

const { errorMessages } = NewOpportunityPageConstant;

export class NewOpportunityPageHelper extends BasePageHelper {

    /**
     * Verify 'NewOpportunity' page is displayed
     */
    static async verifyNewOpportunityPageIsDisplayed(toCloseAfterExecution = true) {
        await PageHelper.executeInNewTab(async () => {
            await NewOpportunityPage.header.title.verifyDisplayedStatus();
        }, 1, toCloseAfterExecution);
    }

    /**
     * Click 'Search Contact' Icon
     */
    static async clickSearchContactIcon() {
        await NewOpportunityPage.selectContact.selectContact.clickButton();
    }

    /**
     * Verify 'ContactSelector' modal is displayed
     */
    static async verifyContactSelectorModalIsDisplayed() {
        await NewOpportunityPage.selectContact.title.verifyDisplayedStatus();
    }

    /**
     * Helps in selecting contact on NewOpportunity page
     * {contact} is an optional argument, if specified, that specific contact will be searched
     * & selected.
     * Otherwise, a default contact will be select
     * Note: check 'ContactSelector.buildContact' for default contact values
     * To avoid passing data in different textboxes, pass blank strings
     * @param contact
     */
    static async enterSearchCriteriaAndClickSearchContacts(
        commercially: boolean, contact = ContactSelector.buildContact(commercially)): Promise<ContactSelector> {
        const { selectContact } = NewOpportunityPage;
        await PageHelper.executeInIFrame([CommonPage.xComponentsIFrame], async () => {
            await selectContact.firstName.sendKeys(contact.firstName);
            await selectContact.lastName.sendKeys(contact.lastName);
            await selectContact.company.sendKeys(contact.company);
            await DropDownHelper.selectOptionByCssText(selectContact.return,
                contact.return);
            await selectContact.searchContacts.clickButton();
        });
        return contact;
    }

    /**
     * Verify 'Contacts' checkboxes list is displayed
     */
    static async verifyContactResultsAreDisplayed() {
        const { contactsList } = HomePage.checkExisitingContactModal;
        await PageHelper.executeInIFrame([CommonPage.xComponentsIFrame], async () => {
            await ExpectationHelper.verifyElementsCountToBeEqualOrGreaterThan(contactsList,
                1);
            await contactsList.item.each(async (e: ElementFinder) => {
                await ExpectationHelper.verifyDisplayedElementFinder(e, contactsList.name);
            });
        });
    }

    /**
     * It selects contact checkbox based on the firstName and lastName of contact passed
     * Preference is given to firstName
     * @param contact
     */
    static async selectContactByFirstNameOrLastName(contact: ContactSelector) {
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await NewOpportunityPage.selectContact
                .contactCheckbox(contact.firstName || contact.lastName)
                .clickCheckbox();
        });
    }

    /**
     * Click 'UseSelectedContact' on 'Contact Selector' modal
     */
    static async clickUseSelectedContact() {
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await NewOpportunityPage.selectContact.useSelectedContact.clickButton();
        });
    }

    /**
     * Verify 'Verify Contact Leads' modal is displayed
     */
    static async verifyContactsLeadsModalIsDisplayed() {
        await NewOpportunityPage.verifyContactLeads.title.verifyDisplayedStatus();
    }

    /**
     * Click 'Return to New' button
     */
    static async clickReturnToNew() {
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await NewOpportunityPage.verifyContactLeads.returnToNew.clickButton();
        });
    }

    /**
     * Verify Contact is added on displayed on NewOpportunity page
     * @param contact
     */
    static async verifyContactIsAdded(contact: ContactSelector) {
        const { information: { contact: contactElement } } = NewOpportunityPage;
        await ExpectationHelper.verifyAttributeContains(contactElement,
            HtmlHelper.attributes.value,
            contact.firstName || contact.lastName);
    }

    /**
     * Click 'Save' button
     * @param acceptAlert
     */
    static async clickSaveButton(acceptAlert = false) {
        await NewCasePage.header.save.clickButton();
        if (acceptAlert) {
            await AlertHelper.acceptAlertIfExists();
        }
    }

    /**
     * Verify an alert is displayed with message: 'No owner is selected.'
     */
    static async verifyNoOwnerIsSelectedErrorIsDisplayed() {
        await ExpectationHelper.verifyAlertMessage(errorMessages.noOwnerIsSelected);
    }

    static async verifyNewOpportunityPageFields(tabNumber: number = Constants.number.one) {
        await PageHelper.switchToTab(tabNumber);
        await NewOpportunityPage.newOpportunityElements.contact.verifyDisplayedStatus();
        await NewOpportunityPage.newOpportunityElements.productDropdown.verifyDisplayedStatus();
        await NewOpportunityPage.newOpportunityElements.owner.verifyDisplayedStatus();
        await NewOpportunityPage.newOpportunityElements.referrer.verifyDisplayedStatus();
        await PageHelper.switchToiFrame(CommonPage.editorFrame);
        await NewOpportunityPage.newOpportunityElements.quickNotes.verifyDisplayedStatus();
        await PageHelper.switchToDefaultContent();
        await NewOpportunityPage.newOpportunityElements.referrerBranch.verifyDisplayedStatus();
        await NewOpportunityPage.newOpportunityElements.created.verifyDisplayedStatus();
        await NewOpportunityPage.newOpportunityElements.forecast.verifyDisplayedStatus();
        await NewOpportunityPage.newOpportunityElements.fundsSource.verifyDisplayedStatus();
        await NewOpportunityPage.newOpportunityElements.referralSource.verifyDisplayedStatus();
        await NewOpportunityPage.newOpportunityElements.referringContact.verifyDisplayedStatus();
        await NewOpportunityPage.newOpportunityElements.probability.verifyDisplayedStatus();
        await NewOpportunityPage.newOpportunityElements.conditional.verifyDisplayedStatus();
    }

    static async verifyNewOpportunityPageButtons() {
        await NewOpportunityPage.newOpportunityElements.save.verifyDisplayedStatus();
        await NewOpportunityPage.newOpportunityElements.saveAndAdd.verifyDisplayedStatus();
        await NewOpportunityPage.newOpportunityElements.close.verifyDisplayedStatus();
    }

    static async clickOnCloseButton() {
        StepLogger.subStep('Click on Close button');
        await NewOpportunityPage.newOpportunityElements.close.hoverOverAndClick();
    }

    static async verifyWarningMessageDisplayedAndAcceptIt(tabNumberToSwitchTo: number = Constants.number.zero) {
        await NewOpportunityPage.newOpportunityElements.warningPopupTitle.verifyDisplayedStatus();
        await browser.executeScript('ResourceOne.PopupManager.notifyCloseEvent(parent);');
        await PageHelper.switchToTab(tabNumberToSwitchTo);
    }

    static async verifyValidationMessageDisplayed() {
        await NewOpportunityPage.requiredFieldValidationMessage.verifyDisplayedStatus();
    }

    static async verifyTabClosed(expectedNumberOfTabs: number) {
        const numberOfTabs = await PageHelper.getTabsCount();
        await ExpectationHelper.verifyValueEqualTo(expectedNumberOfTabs, numberOfTabs);
    }

    static async verifySaveButtonDisplayed() {
        await NewOpportunityPage.newOpportunityElements.save.verifyDisplayedStatus();
    }

    static async clickOnCloseButtonAndCloseThePopupDisplayed() {
        await NewOpportunityPageHelper.clickOnCloseButton();
        await NewOpportunityPageHelper.verifyWarningMessageDisplayedAndAcceptIt();
        await PageHelper.switchToFirstTab();
    }

    static async searchARandomContact(criteria: string) {
        StepLogger.subStep(`Search for ${criteria}`);
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await NewOpportunityPage.selectContact.firstName.sendKeys(criteria);
            await NewOpportunityPage.selectContact.searchContacts.clickButton();
        });
    }

    static async getFirstContactDisplayed() {
        let contact: string;
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await NewOpportunityPage.selectContact.firstContactCheckbox.hoverOverAndClick();
            contact = await NewOpportunityPage.selectContact.firstContactName.getText();
            StepLogger.subStep(contact.trim());
        });
        return contact.trim();
    }

    static async verifyContactHasBeenSelected(expectedValue: string) {
        await PageHelper.switchToDefaultContent();
        await WaitHelper.waitForElementToBeDisplayed(NewOpportunityPage.newOpportunityElements.productRecomendationButton.item);
        await NewOpportunityPage.newOpportunityElements.productRecomendationButton.hoverOverAndClick();
        await PageHelper.switchToiFrame(CommonPage.snapshotFrame);
        await NewOpportunityPage.newOpportunityElements.subject.verifyContainsText(expectedValue);
        await PageHelper.switchToDefaultContent();
        await NewOpportunityPage.newOpportunityElements.recommendationCloseButton.verifyDisplayedStatus();
        await NewOpportunityPage.newOpportunityElements.recommendationCloseButton.clickLinkJsNoWait();
    }

    static async clickOnSelectMeIconBesideOwner() {
        StepLogger.subStep('Click on Select Me buttin');
        await NewOpportunityPage.newOpportunityElements.selectMeOwnerButton.hoverOverAndClick();
    }

    static async verifyOwnerFieldValue(expectedValue: string) {
        const value = await NewOpportunityPage.newOpportunityElements.owner.getAtttribute('value');
        await ExpectationHelper.verifyStringValueContain(value.toLowerCase(), expectedValue.toLowerCase());
    }

    static async verifyValidationAlertDisplayed() {
        await ExpectationHelper.verifyAlertMessage(
            NewOpportunityPageConstant.errorMessages.NoProductIsSelected);
    }

    static async markGenCkeckbox() {
        StepLogger.subStep('Click on Gen checkbox');
        await CheckboxHelper.markCheckbox(NewOpportunityPage.newOpportunityElements.genCheckbox, true);
    }

    static async verifyGenCkeckboxMarked() {
        const selected = await CheckboxHelper.isCheckboxChecked(NewOpportunityPage.newOpportunityElements.genCheckbox);
        await ExpectationHelper.verifyStringEqualTo(selected.toString(), true.toString());
    }

    static async selectProduct(type: string, productName: string) {
        await NewOpportunityPage.newOpportunityElements.productType.hoverOverAndClick();
        await NewOpportunityPage.newOpportunityElements.productTypeOption(type).hoverOverAndClick();
        await WaitHelper.sleepForTwoSeconds();
        await NewOpportunityPage.newOpportunityElements.productDropdown.verifyDisplayedStatus();
        await NewOpportunityPage.newOpportunityElements.productDropdown.hoverOverAndClick();
        await NewOpportunityPage.newOpportunityElements.productNameOption(productName).hoverOverAndClick();
    }

    static async verifySelectedProduc(productName: string) {
        const selected = await DropDownHelper.getTheSelectedOptionText(NewOpportunityPage.newOpportunityElements.productType);
        await ExpectationHelper.verifyStringEqualTo(selected, productName);
    }

    static async verifyDetailOpportunityPageIsDisplayed(toCloseAfterExecution = true) {
        StepLogger.subVerification('Verify detail Opportunity Page');
        await PageHelper.executeInNewTab(async () => {
            await NewOpportunityPage.header.opportunity.verifyDisplayedStatus();
        }, Constants.number.one, toCloseAfterExecution);
    }

    static async verifyPageClosed() {
        StepLogger.subVerification('Verify page  is closed');
        const handles = await PageHelper.getAllWindowHandles();
        await ExpectationHelper.verifyValueEqualTo(handles.length, Constants.number.one);
    }

    static async verifyContactResultsAreDisplayedFromContactDialog() {
        const { contactsList } = HomePage.checkExisitingContactModal;
        await PageHelper.executeInIFrame([CommonPage.contentFrame], async () => {
            await ExpectationHelper.verifyElementsCountToBeEqualOrGreaterThan(contactsList,
                1);
            await contactsList.item.each(async (e: ElementFinder) => {
                await ExpectationHelper.verifyDisplayedElementFinder(e, contactsList.name);
            });
        });
    }

    static async selectAProductType(productType: string) {
        StepLogger.subStep(`Select ${productType} as product type`);
        await NewOpportunityPage.newOpportunityElements.productType.hoverOverAndClick();
        await NewOpportunityPage.newOpportunityElements.productTypeOption(productType).hoverOverAndClick();
    }

    static async verifySelectedProductType(productType: string) {
        await NewOpportunityPage.newOpportunityElements.productType.verifyDisplayedStatus();
        await NewOpportunityPage.newOpportunityElements.productType.verifyTextEntered(productType);
        await WaitHelper.sleepForTwoSeconds();
    }

    static async selectAProductName(product: string) {
        StepLogger.subStep(`Select ${product} as product name`);
        await NewOpportunityPage.newOpportunityElements.productDropdown.hoverOverAndClick();
        await WaitHelper.waitForElementToBeDisplayed(
            NewOpportunityPage.newOpportunityElements.selectAProduct.item
        );
        await NewOpportunityPage.newOpportunityElements.productDropdown.hoverOverAndClick();
        await WaitHelper.waitForElementToBeDisplayed(
            NewOpportunityPage.newOpportunityElements.productNameOption(product).item
        );
        await NewOpportunityPage.newOpportunityElements.productNameOption(product).hoverOverAndClick();
    }

    static async verifySelectedProductName(productName: string) {
        await NewOpportunityPage.newOpportunityElements.productDropdown.verifyDisplayedStatus();
        await NewOpportunityPage.newOpportunityElements.productDropdown.verifyTextEntered(productName);
    }

    static async clickUseSelectedContactOptionAndClickReturnToNew() {
        await NewOpportunityPageHelper.clickUseSelectedContact();
        await NewOpportunityPageHelper.clickReturnToNew();
    }

    static async verifyNewOpportunityIsSaved(opportunityName: string) {
        const title = await NewOpportunityPage.header.opportunity.getText();
        await ExpectationHelper.verifyStringValueContain(title.toLowerCase(),
            opportunityName.toLowerCase());
    }

    static async clickSaveAndAddButton(acceptAlert = false) {
        await NewCasePage.header.saveAndAdd.clickButton();
        if (acceptAlert) {
            await AlertHelper.acceptAlertIfExists();
        }
    }

    static async verifyOpportunityIsCreatedAndNewOpportunityPageIsDisplayed(contactName: string) {
        await NewOpportunityPage.header.title.verifyDisplayedStatus();
        await this.clickReturnToNew();
        await this.verifyContactHasBeenSelected(contactName);
    }

    static async clickReturnToNewIfPresent() {
        // Wait For The Popup To Be Displayed
        await WaitHelper.sleepForTwoSeconds();
        if (await NewOpportunityPage.verifyContactLeads.header.item.isPresent()) {
            await NewOpportunityPageHelper.clickReturnToNew();
        }
    }

    static async verifyOpportunityPageIsDisplayed(toCloseAfterExecution = true) {
        await PageHelper.executeInNewTab(async () => {
            await NewOpportunityPage.header.opportunity.verifyDisplayedStatus();
        }, 1, toCloseAfterExecution);
    }

    static async clickOkOnWarningMessagePopup(tabNumber: number = Constants.number.zero) {
        StepLogger.subStep('Click Ok On Warning Message Popup');
        await ProductsPage.newProductScreenProperties.okButtonOnWarning.clickButton();
        await PageHelper.switchToTab(tabNumber);
    }

    url(): string {
        return EndpointHelper.newOpportunity;
    }
}

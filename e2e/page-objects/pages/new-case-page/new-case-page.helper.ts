import { StepLogger } from '../../../../core/logger/step-logger';
import { AlertHelper } from '../../../components/html/alert-helper';
import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { ElementHelper } from '../../../components/html/element-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { CommonPage } from '../common/common.po';
import { ContactSelector } from '../models/contact.model';
import { DropdownField } from '../models/dropdown-field';

import { NewCasePageHelperExtension } from './new-case-page.extension.helper';
import { NewCasePage } from './new-case-page.po';

const { executeInNewTab, executeInIFrame } = PageHelper;
const { attributes } = HtmlHelper;

export class NewCasePageHelper extends NewCasePageHelperExtension {

    /**
     * Verify new case page is displayed in new tab
     * @param closeWindow
     */
    static async verifyNewCasePageDisplayed(closeWindow = true) {
        await executeInNewTab(async () => {
            await NewCasePage.header.title.verifyDisplayedStatus();
        }, 1, closeWindow);
    }

    /**
     * Verify Save, Close and 'Save and Add' buttons are displayed
     */
    static async verifySaveCloseSaveAndAddButtonsDisplayed() {
        const { header } = NewCasePage;
        await header.save.verifyDisplayedStatus();
        await header.saveAndAdd.verifyDisplayedStatus();
        await header.close.verifyDisplayedStatus();
    }

    /**
     * Verify 'Case Data' and Resolution sections are displayed
     */
    static async verifyCaseDataAndResolutionDisplayed() {
        const { sections } = NewCasePage;
        await sections.caseData.verifyDisplayedStatus();
        await sections.resolution.verifyDisplayedStatus();
    }

    /**
     * Verify User, SelectUser, Contact, Account, Branch,
     * Language, ProductType, Product, Subject, Category,
     * SubCategory, ContactBy, Priority, Status, PrivacyByDept
     * Committed, CommittedCalender, Credit and Satisfaction
     * fields are displayed under 'Case Data' section
     */
    static async verifyOptionsDisplayedUnderCaseData() {
        const { caseData } = NewCasePage;
        await caseData.user.verifyDisplayedStatus();
        await caseData.selectUser.verifyDisplayedStatus();
        await caseData.contact.verifyDisplayedStatus();
        await caseData.account.verifyDisplayedStatus();
        await caseData.branch.verifyDisplayedStatus();
        await caseData.language.verifyDisplayedStatus();
        await caseData.productType.verifyDisplayedStatus();
        await caseData.product.verifyDisplayedStatus();
        await caseData.subject.verifyDisplayedStatus();
        await caseData.category.verifyDisplayedStatus();
        await caseData.subCategory.verifyDisplayedStatus();
        await caseData.contactBy.verifyDisplayedStatus();
        await caseData.priority.verifyDisplayedStatus();
        await caseData.status.verifyDisplayedStatus();
        await caseData.privacyByDept.verifyDisplayedStatus();
        await caseData.committed.verifyDisplayedStatus();
        await caseData.committedCalender.verifyDisplayedStatus();
        await caseData.credit.verifyDisplayedStatus();
        await caseData.satisfaction.verifyDisplayedStatus();
    }

    /**
     * Verify following error messages are displayed:
     * 1. CONTACT is required.
     * 2. SUBJECT is required.
     * 3. DESCRIPTION is required.
     * 4. A category must be selected
     */
    static async verifyValidationErrorMessagesDisplayed() {
        const { validationMessage } = NewCasePage;
        await validationMessage.contact.verifyDisplayedStatus();
        await validationMessage.subCategory.verifyDisplayedStatus();
        await validationMessage.description.verifyDisplayedStatus();
        await validationMessage.subject.verifyDisplayedStatus();
    }

    /**
     * Verify Normal, Escalated and Emergency dropdown fields are displayed
     * under Priority Dropdown
     */
    static async verifyNormalEscalatedAndEmergencyDisplayed() {
        const { priority } = NewCasePage;
        await priority.normal.verifyDisplayedStatus();
        await priority.emergency.verifyDisplayedStatus();
        await priority.escalated.verifyDisplayedStatus();
    }

    /**
     * Helps in selecting contact on NewCase page
     * {contact} is an optional argument, if specified, that specific contact will be searched
     * & selected.
     * Otherwise, a default contact will be select
     * Note: check 'ContactSelector.buildContact' for default contact values
     * @param {ContactSelector} contact [ContactSelector.buildContact]
     * @returns {ContactSelector}
     */
    static async selectContact(contact = ContactSelector.buildContact()): Promise<ContactSelector> {
        StepLogger.subStep('Search a contact and add.');
        const { selectContact, caseData: { contact: contactElement } } = NewCasePage;
        await NewCasePage.caseData.selectContact.clickButton();
        await executeInIFrame(CommonPage.contentAndInsideIFrames, async () => {
            await selectContact.firstName.sendKeys(contact.firstName);
            await selectContact.lastName.sendKeys(contact.lastName);
            await selectContact.company.sendKeys(contact.company);
            await DropDownHelper.selectOptionByCssText(selectContact.return,
                contact.return);
            await DropDownHelper.selectOptionByCssText(selectContact.prospect,
                contact.prospect);
            await selectContact.searchContacts.clickButton();
            await selectContact.contactCheckbox(contact.firstName || contact.lastName).clickCheckbox();
            await selectContact.useSelectedContact.clickButton();
            await ExpectationHelper.verifyAttributeContains(contactElement,
                attributes.value, contact.firstName || contact.lastName);
        });
        return contact;
    }

    /**
     * Verify selected contact is displayed in dropdown as currently selected field
     * @param {ContactSelector} contact
     */
    static async verifyContactIsSelected(contact: ContactSelector) {
        const { caseData: { contact: contactElement } } = NewCasePage;
        await ExpectationHelper.verifyAttributeContains(contactElement,
            attributes.value, contact.firstName || contact.lastName);
    }

    /**
     * Helps in sending text into the Subject textbox
     * @param {string} subject
     */
    static async enterSubject(subject: string) {
        await NewCasePage.caseData.subject.sendKeys(subject);
    }

    /**
     * Verify text is entered into the Subject textbox
     * @param {string} subject
     */
    static async verifySubjectIsEntered(subject: string) {
        await NewCasePage.caseData.subject.verifyTextEntered(subject);
    }

    /**
     * Helps in sending text into the Description textbox
     * @param {string} text
     */
    static async enterDescription(text: string) {
        await executeInIFrame([CommonPage.contentIFrame], async () => {
            await ElementHelper.actionMouseDown(NewCasePage.caseData.description);
            await ElementHelper.actionMouseUp(NewCasePage.caseData.description);
            await NewCasePage.caseData.description.sendKeys(text);
        });
    }

    /**
     * Verify text is entered into the Description textbox
     * @param {string} text
     */
    static async verifyDescriptionIsEntered(text: string) {
        await executeInIFrame([CommonPage.contentIFrame], async () => {
            await ExpectationHelper.verifyText(NewCasePage.caseData.description,
                text);
        });
    }

    /**
     * Helps in selecting Category's dropdown-option by either text or index
     * It uses named parameters for accessing text or index passed to the method
     * for selecting dropdown option by text, pass { text: 'SOME_TEXT'}
     * for selecting dropdown option by index, pass { index: SOME_NUMBER }
     * @param {DropdownField} textOrIndex
     */
    static async selectCategory(textOrIndex: DropdownField) {
        const { category } = NewCasePage.caseData;
        await DropDownHelper.selectSpecificOrNthOptionByCss(category, textOrIndex);
    }

    /**
     * Verify selected Category is displayed in dropdown as currently selected field
     * @param {DropdownField} textOrIndex
     */
    static async verifyCategoryIsSelected(textOrIndex: DropdownField) {
        const { category } = NewCasePage.caseData;
        await ExpectationHelper.verifyValueAttributeOfDropdownOption(category, textOrIndex);
    }

    /**
     * Helps in selecting SubCategory's dropdown-option by either text or index
     * It uses named parameters for accessing text or index passed to the method
     * for selecting dropdown option by text, pass { text: 'SOME_TEXT'}
     * for selecting dropdown option by index, pass { index: SOME_NUMBER }
     * @param {DropdownField} textOrIndex
     */
    static async selectSubCategory(textOrIndex: DropdownField) {
        const { subCategory } = NewCasePage.caseData;
        await DropDownHelper.selectSpecificOrNthOptionByCss(subCategory, textOrIndex);
    }

    /**
     * Verify selected Category is displayed in dropdown as currently selected field
     * @param {DropdownField} textOrIndex
     */
    static async verifySubCategoryIsSelected(textOrIndex: DropdownField) {
        const { subCategory } = NewCasePage.caseData;
        await ExpectationHelper.verifyValueAttributeOfDropdownOption(subCategory, textOrIndex);
    }

    /**
     * Helps in clicking 'Save' button
     */
    static async clickSave() {
        await NewCasePage.header.save.clickButton();
        await AlertHelper.acceptAlertIfExists();
    }

    /**
     * Helps in selecting Account's dropdown-option by either text or index
     * It uses named parameters for accessing text or index passed to the method
     * for selecting dropdown option by text, pass { text: 'SOME_TEXT'}
     * for selecting dropdown option by index, pass { index: SOME_NUMBER }
     * @param {DropdownField} textOrIndex
     */
    static async selectAccount(textOrIndex: DropdownField) {
        const { account } = NewCasePage.caseData;
        await DropDownHelper.selectSpecificOrNthOptionByCss(account, textOrIndex);
    }

    /**
     * Verify selected Account is displayed in dropdown as currently selected field
     * @param {DropdownField} textOrIndex
     */
    static async verifyAccountIsSelected(textOrIndex: DropdownField) {
        const { account } = NewCasePage.caseData;
        await ExpectationHelper.verifyValueAttributeOfDropdownOption(account, textOrIndex);
    }

    /**
     * Helps in selecting Branch's dropdown-option by either text or index
     * It uses named parameters for accessing text or index passed to the method
     * for selecting dropdown option by text, pass { text: 'SOME_TEXT'}
     * for selecting dropdown option by index, pass { index: SOME_NUMBER }
     * @param {DropdownField} textOrIndex
     */
    static async selectBranch(textOrIndex: DropdownField) {
        const { branch } = NewCasePage.caseData;
        await DropDownHelper.selectSpecificOrNthOptionByCss(branch, textOrIndex);
    }

    /**
     * Verify selected Branch is displayed in dropdown as currently selected field
     * @param {DropdownField} textOrIndex
     */
    static async verifyBranchIsSelected(textOrIndex: DropdownField) {
        const { branch } = NewCasePage.caseData;
        await ExpectationHelper.verifyValueAttributeOfDropdownOption(branch, textOrIndex);
    }

    /**
     * Helps in selecting Language's dropdown-option by either text or index
     * It uses named parameters for accessing text or index passed to the method
     * for selecting dropdown option by text, pass { text: 'SOME_TEXT'}
     * for selecting dropdown option by index, pass { index: SOME_NUMBER }
     * @param {DropdownField} textOrIndex
     */
    static async selectLanguage(textOrIndex: DropdownField) {
        const { language } = NewCasePage.caseData;
        await DropDownHelper.selectSpecificOrNthOptionByCss(language, textOrIndex);
    }

    /**
     * Verify selected Language is displayed in dropdown as currently selected field
     * @param {DropdownField} textOrIndex
     */
    static async verifyLanguageIsSelected(textOrIndex: DropdownField) {
        const { language } = NewCasePage.caseData;
        await ExpectationHelper.verifyValueAttributeOfDropdownOption(language, textOrIndex);
    }

    /**
     * Helps in selecting ProductType's dropdown-option by either text or index
     * It uses named parameters for accessing text or index passed to the method
     * for selecting dropdown option by text, pass { text: 'SOME_TEXT'}
     * for selecting dropdown option by index, pass { index: SOME_NUMBER }
     * @param {DropdownField} textOrIndex
     */
    static async selectProductType(textOrIndex: DropdownField) {
        const { productType } = NewCasePage.caseData;
        await DropDownHelper.selectSpecificOrNthOptionByCss(productType, textOrIndex);
    }

    /**
     * Verify selected ProductType is displayed in dropdown as currently selected field
     * @param {DropdownField} textOrIndex
     */
    static async verifyProductTypeIsSelected(textOrIndex: DropdownField) {
        const { productType } = NewCasePage.caseData;
        await ExpectationHelper.verifyValueAttributeOfDropdownOption(productType, textOrIndex);
    }

    /**
     * Helps in selecting Product's dropdown-option by either text or index
     * It uses named parameters for accessing text or index passed to the method
     * for selecting dropdown option by text, pass { text: 'SOME_TEXT'}
     * for selecting dropdown option by index, pass { index: SOME_NUMBER }
     * @param {DropdownField} textOrIndex
     */
    static async selectProduct(textOrIndex: DropdownField) {
        const { product } = NewCasePage.caseData;
        await DropDownHelper.selectSpecificOrNthOptionByCss(product, textOrIndex);
    }

    /**
     * Verify selected Product is displayed in dropdown as currently selected field
     * @param {DropdownField} textOrIndex
     */
    static async verifyProductIsSelected(textOrIndex: DropdownField) {
        const { product } = NewCasePage.caseData;
        await ExpectationHelper.verifyValueAttributeOfDropdownOption(product, textOrIndex);
    }

    /**
     * Helps in selecting ContactBy's dropdown-option by either text or index
     * It uses named parameters for accessing text or index passed to the method
     * for selecting dropdown option by text, pass { text: 'SOME_TEXT'}
     * for selecting dropdown option by index, pass { index: SOME_NUMBER }
     * @param {DropdownField} textOrIndex
     */
    static async selectContactBy(textOrIndex: DropdownField) {
        const { contactBy } = NewCasePage.caseData;
        await DropDownHelper.selectSpecificOrNthOptionByCss(contactBy, textOrIndex);
    }

    /**
     * Verify selected ContactBy is displayed in dropdown as currently selected field
     * @param {DropdownField} textOrIndex
     */
    static async verifyContactByIsSelected(textOrIndex: DropdownField) {
        const { contactBy } = NewCasePage.caseData;
        await ExpectationHelper.verifyValueAttributeOfDropdownOption(contactBy, textOrIndex);
    }

    /**
     * Helps in selecting Status's dropdown-option by either text or index
     * It uses named parameters for accessing text or index passed to the method
     * for selecting dropdown option by text, pass { text: 'SOME_TEXT'}
     * for selecting dropdown option by index, pass { index: SOME_NUMBER }
     * @param {DropdownField} textOrIndex
     */
    static async selectStatus(textOrIndex: DropdownField) {
        const { status } = NewCasePage.caseData;
        await DropDownHelper.selectSpecificOrNthOptionByCss(status, textOrIndex);
    }

    /**
     * Verify selected Status is displayed in dropdown as currently selected field
     * @param {DropdownField} textOrIndex
     */
    static async verifyStatusIsSelected(textOrIndex: DropdownField) {
        const { status } = NewCasePage.caseData;
        await ExpectationHelper.verifyValueAttributeOfDropdownOption(status, textOrIndex);
    }

    /**
     * Verify if Case is saved properly
     */
    static async verifyCaseIsSaved() {
        await ExpectationHelper.verifyPresentStatus(NewCasePage.viewState);
    }

    static async verifyCaseIsCreated(name: string) {
        await NewCasePage.header.caseTitle(name).verifyDisplayedStatus();
    }

    static async verifyOnlyOverviewPanel() {
        const { leftPanel } = NewCasePage;
        await leftPanel.overview.verifyDisplayedStatus();
        const count = await leftPanel.all.item.count();
        await ExpectationHelper.verifyValueEqualTo(count, Constants.number.one);
    }

    static async verifySelectedOwner(option: string) {
        const current = await NewCasePage.caseData.user.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(current, option);
    }

    static async clickSearchContact() {
        await NewCasePage.caseData.selectContact.clickButton();
    }

    static async verifyContactDialog() {
        await PageHelper.switchToDefaultContent();
        await NewCasePage.selectContact.dialogTitle.verifyDisplayedStatus();
    }

    static async enterContactNameAndSearch(contact = ContactSelector.buildContact()): Promise<ContactSelector> {
        const { selectContact } = NewCasePage;
        await executeInIFrame(CommonPage.contentAndInsideIFrames, async () => {
            await selectContact.firstName.sendKeys(contact.firstName);
            await selectContact.searchContacts.clickButton();
        }, false);

        return contact;
    }

    static async verifySearchedContact(contact = ContactSelector.buildContact()) {
        await NewCasePage.selectContact.contactCheckbox(contact.firstName).verifyDisplayedStatus();
    }

    static async selectSearchedContact(contact = ContactSelector.buildContact()) {
        await NewCasePage.selectContact.contactCheckbox(contact.firstName).clickCheckbox();
    }

    static async verifySearchedContactSelected(contact = ContactSelector.buildContact()) {
        await ExpectationHelper.verifyCheckboxIsChecked(NewCasePage.selectContact.contactCheckbox(contact.firstName));
    }

    static async clickUseSelectedContact() {
        await NewCasePage.selectContact.useSelectedContact.clickButton();
    }

    static async selectSubCategoryOption(option: string) {
        const opt = NewCasePage.caseData.subCategoryOption(option);
        await WaitHelper.waitForElementToBeDisplayed(opt.item);
        await opt.clickButton();
        StepLogger.subStep('Wait for subcategories to load');
        await WaitHelper.sleepForTwoSeconds();
    }

    static async selectCategoryOption(option: string) {
        await NewCasePage.caseData.categoryOption(option).clickButton();
        StepLogger.subStep('Wait for categories to load');
        await WaitHelper.sleepForTwoSeconds();
    }

    static async verifySubCategorySelectedOption(option: string) {
        const selected = await NewCasePage.caseData.subCategory.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, option);
    }

    static async verifyCategorySelectedOption(option: string) {
        const selected = await NewCasePage.caseData.category.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, option);
    }

    static async verifyStatusDropdown() {
        const { status } = NewCasePage;
        await status.openWaitingCustomer.verifyDisplayedStatus();
        await status.openWaitingUs.verifyDisplayedStatus();
        await status.resolved.verifyDisplayedStatus();
        await status.closedNoResolution.verifyDisplayedStatus();
        await status.closedWithoutResolution.verifyDisplayedStatus();
        await status.compliantOnly.verifyDisplayedStatus();
    }

    static async selectAccountOption() {
        StepLogger.subStep('Wait for accounts to load');
        await WaitHelper.sleepForTwoSeconds();
        StepLogger.subStep('Get all accounts');
        const options = await PageHelper.getTextOfElements(NewCasePage.caseData.allAccounts);
        const lastOption = options[options.length - Constants.number.one];
        await NewCasePage.caseData.accountOption(lastOption).clickButton();
        return lastOption;
    }

    static async verifySelectedAccount(account: string) {
        const selected = await NewCasePage.caseData.account.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, account);
    }

    static async selectBranchOption() {
        StepLogger.subStep('Get all branches');
        const options = await PageHelper.getTextOfElements(NewCasePage.caseData.allBranches);
        const lastOption = options[options.length - Constants.number.one];
        await NewCasePage.caseData.branchOption(lastOption).clickButton();
        return lastOption;
    }
}

import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { DfElement } from '../../../components/misc-utils/df-elements-helper';
import { EndpointHelper } from '../../../components/misc-utils/endpoint-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { RandomHelper } from '../../../components/misc-utils/random-helper';
import { BasePageHelper } from '../base-page.helper';
import { ContactPageOneHelper } from '../contact-page/contact-page-one.helper';
import { ContactPageHelper } from '../contact-page/contact-page.helper';
import { HomePageConstant } from '../home-page/home-page.constants';
import { HomePageHelper } from '../home-page/home-page.helper';
import { HomePage } from '../home-page/home-page.po';
import { LoginPageHelper } from '../login-page/login-page.helper';
import { Prospect } from '../models/prospect.model';

import { NewProspectPageConstant } from './new-prospect-page.constants';
import { NewProspectPage } from './new-prospect-page.po';

const { executeInNewTab } = PageHelper;

export class NewProspectPageHelper extends BasePageHelper {

    /**
     * Verify if NewProspect page is displayed
     * @param closeTab
     */
    static async verifyNewProspectPageIsDisplayed(closeTab = true) {
        await executeInNewTab(async () => {
            await NewProspectPage.header.title.verifyDisplayedStatus();
        }, 1, closeTab);
    }

    /**
     * Verify if NewProspect-Commercial page is displayed
     * @param closeTab
     */
    static async verifyNewProspectCommercialPageIsDisplayed(closeTab = true) {
        await executeInNewTab(async () => {
            await NewProspectPage.header.commercialTitle.verifyDisplayedStatus();
        }, 1, closeTab);
    }

    /**
     * Click Save button
     */
    static async clickSaveButton() {
        await NewProspectPage.header.save.clickButton();
    }

    /**
     * Verify if 'NewProspectRetail' is saved successfully
     */
    static async verifyNewProspectRetailIsSavedSuccessfully() {
        await NewProspectPage.header.admin.verifyDisplayedStatus();
    }

    /**
     * Helps in filling all the information on NewProspect page
     * @param {Prospect} prospect
     * @returns {Prospect}
     */
    static async fillNewProspectInformation(prospect = Prospect.buildProspect()) {
        const { form: { information }, header: { save } } = NewProspectPage;
        await information.firstName.sendKeys(prospect.firstName);
        await information.lastName.sendKeys(prospect.lastName);

        // use sendKeysIfTextIsDefined to enter data into optional fields
        await information.middle.sendKeysIfTextIsDefined(prospect.middle);

        await save.clickButton();
        return prospect;
    }

    static async clickSyncToOutLook() {
        StepLogger.subStep('Click Synch to OutLook');
        await NewProspectPage.form.information.syncToOutLook.clickButton();
    }

    static async verifySyncToOutLookEnabled() {
        StepLogger.subVerification('Verify Synch to OutLook');
        await ExpectationHelper.verifyEnabledStatus(NewProspectPage.form.information.syncToOutLook);
    }

    static async clickDoNotContactInCampaigns() {
        StepLogger.subStep('Click Do Not Contact In Campaign');
        await NewProspectPage.form.information.doNotContactInCampaigns.clickButton();
    }

    static async verifyDoNotContactInCampaigns() {
        StepLogger.subVerification('Verify Do Not Contact In Compaign');
        await ExpectationHelper.verifyEnabledStatus(NewProspectPage.form.information.doNotContactInCampaigns);
    }

    static async clickRelationShip() {
        StepLogger.subStep('Click RelationShip in left pane');
        await NewProspectPage.leftPane.relationShip.clickButton();
    }

    static async verifyRelationShipPage() {
        StepLogger.subVerification('Verify RelationShip screen');
        await NewProspectPage.page.relationShip.verifyDisplayedStatus();
    }

    static async clickEvents() {
        StepLogger.subStep('Click event in left pane');
        await NewProspectPage.leftPane.events.clickButton();
    }

    static async verifyEventsPage() {
        StepLogger.subVerification('Verify event screen');
        await NewProspectPage.page.events.verifyDisplayedStatus();
    }

    static async clickCases() {
        StepLogger.subStep('Click Case in left pane');
        await NewProspectPage.leftPane.cases.clickButton();
    }

    static async verifyCasesPage() {
        StepLogger.subVerification('Verify Case screen');
        await NewProspectPage.page.cases.verifyDisplayedStatus();
    }

    static async verifyNameSection() {
        StepLogger.subVerification('Verify Name Section');
        await NewProspectPage.form.information.firstName.verifyDisplayedStatus();
        await NewProspectPage.form.information.lastName.verifyDisplayedStatus();
        await NewProspectPage.form.information.middle.verifyDisplayedStatus();
        await NewProspectPage.form.information.companyName.verifyDisplayedStatus();
        await NewProspectPage.form.information.title.verifyDisplayedStatus();
    }

    static async clearLastNameAndClickSave() {
        StepLogger.subStep('Clear last name and Click Save');
        await NewProspectPage.form.information.lastName.clearText();
        await this.clickSaveButton();
    }

    static async clearFirstNameAndClickSave() {
        StepLogger.subStep('Clear First name and Click Save');
        await NewProspectPage.form.information.firstName.clearText();
        await this.clickSaveButton();
    }

    static async clickCloseButton() {
        StepLogger.subStep('Click Close Button');
        await NewProspectPage.header.close.clickButton();
    }

    static async verifyNewProspectPageClosed() {
        StepLogger.subVerification('Verify New Prospect Page is closed');
        const windowCount = await PageHelper.getWindowCount();
        await ExpectationHelper.verifyValueEqualTo(windowCount, Constants.number.one);
        await PageHelper.switchToFirstTab();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();
    }

    static async verifyIdentificationSection() {
        StepLogger.subVerification('Verify Identification section fields.');
        await NewProspectPage.form.information.dateOfBirth.verifyDisplayedStatus();
        await NewProspectPage.form.information.socialSecurityNumber.verifyDisplayedStatus();
        await NewProspectPage.form.information.driverLicenceState.verifyDisplayedStatus();
        await NewProspectPage.form.information.driversLicenceNumber.verifyDisplayedStatus();
        await NewProspectPage.form.information.driversLicenseExpiration.verifyDisplayedStatus();
    }

    static async verifyHeaderSection() {
        StepLogger.subVerification('Verify Header section fields.');
        await NewProspectPage.header.title.verifyDisplayedStatus();
        await NewProspectPage.header.save.verifyDisplayedStatus();
        await NewProspectPage.header.close.verifyDisplayedStatus();
    }

    static async verifyAddressSection() {
        StepLogger.subVerification('Verify Address section fields.');
        await NewProspectPage.form.information.address.verifyDisplayedStatus();
        await NewProspectPage.form.information.addressCont.verifyDisplayedStatus();
        await NewProspectPage.form.information.city.verifyDisplayedStatus();
        await NewProspectPage.form.information.state.verifyDisplayedStatus();
        await NewProspectPage.form.information.rego.verifyDisplayedStatus();
        await NewProspectPage.form.information.country.verifyDisplayedStatus();
        await NewProspectPage.form.information.zip.verifyDisplayedStatus();
    }

    static async verifyContactSection(retail: boolean = true) {
        StepLogger.subVerification('Verify Contact section fields.');
        const { information } = NewProspectPage.form;
        await information.homePhone.verifyDisplayedStatus();
        await information.emailOne.verifyDisplayedStatus();
        await information.emailTwo.verifyDisplayedStatus();
        await information.workPhone.verifyDisplayedStatus();
        await information.mobile.verifyDisplayedStatus();
        await information.pager.verifyDisplayedStatus();
        await information.fax.verifyDisplayedStatus();
        await information.communicationPref.verifyDisplayedStatus();
        await information.doNotContactInCampaigns.verifyDisplayedStatus();

        if (retail) {
            await information.syncToOutLook.verifyDisplayedStatus();
        }

    }

    static async verifyProspectHeaderSection(phoneExists: boolean = false) {
        StepLogger.subVerification('Verify Prospect Header section fields.');
        const { header } = NewProspectPage;
        await header.newTitle.verifyDisplayedStatus();
        await header.save.verifyDisplayedStatus();
        await header.close.verifyDisplayedStatus();
        await header.threeDots.verifyDisplayedStatus();
        await header.admin.verifyDisplayedStatus();
        await header.recommendation.verifyDisplayedStatus();
        await header.print.verifyDisplayedStatus();

        if (phoneExists) {
            await header.phone.verifyDisplayedStatus();
        }

    }

    static async verifyWorkPhoneValidationMsgDisplayed() {
        StepLogger.subStep('Verify Work Phone validation message is displayed');
        await NewProspectPage.form.information.workPhoneValidator.verifyDisplayedStatus();
    }

    static async verifyCompanyNameValidationMsgDisplayed() {
        StepLogger.subStep('Verify Company Name validation message is displayed');
        await NewProspectPage.form.information.companyValidator.verifyDisplayedStatus();
    }

    static async typeInPhoneTb(phoneNumber: string) {
        StepLogger.subStep(`Type ${phoneNumber} in workphone tb.`);
        await NewProspectPage.form.information.workPhone.sendKeys(phoneNumber);
    }

    static async typeInCompanyTb(companyName: string = '') {
        StepLogger.subStep(`Type ${companyName} in Company Name tb.`);
        await NewProspectPage.form.information.companyName.sendKeys(companyName);
    }

    static async verifyPhoneIsEnteredOnCheckExistingContactModal(phone: string) {
        StepLogger.subVerification(`Verify ${phone} entered in workphone tb.`);
        await NewProspectPage.form.information.workPhone.verifyTextEntered(phone);
    }

    static async fillCompanyAndPhoneAndSave() {
        const uniqueName = PageHelper.getUniqueId();
        StepLogger.subStep('Fill Company Name, Work Phone and Save');
        await this.typeInPhoneTb(
            NewProspectPageConstant.testData.newWorkPhone);
        await this.typeInCompanyTb(uniqueName);
        await this.clickSaveButton();
        return uniqueName;
    }

    static async verifySavedCompanyNameAndWorkphone(newCompanyName: string) {
        StepLogger.subVerification('Verify successfully filled Company Name and Work Phone');
        await this.verifyCompanyTitleDisplayed(newCompanyName, false);
        await this.verifyPhoneIsEnteredOnCheckExistingContactModal(
            NewProspectPageConstant.testData.newWorkPhone);
    }

    static async clickRelationShipTab(tabElement: DfElement) {
        StepLogger.subStep('Click Tab in RelationShip');
        await this.clickRelationShip();
        await this.verifyRelationShipPage();
        await tabElement.clickButton();
    }

    static async clickRelatedContactsTab(tabElement: DfElement) {
        StepLogger.subStep('Click Tab in Related Contacts');
        await NewProspectPage.leftPane.relatedContacts.clickButton();
        await NewProspectPage.page.relatedContactsPage.verifyDisplayedStatus();
        await tabElement.clickButton();
    }

    static async clickHouseHoldsTab() {
        StepLogger.subStep('Click Tab in Households tab');
        await NewProspectPage.leftPane.households.clickButton();
    }

    static async clickEventsTab() {
        StepLogger.subStep('Click Tab in Events tab');
        await NewProspectPage.leftPane.events.clickButton();
    }

    static async clickCasesTab() {
        StepLogger.subStep('Click Tab in Cases tab');
        await NewProspectPage.leftPane.cases.clickButton();
    }

    static async clickTasksTab() {
        StepLogger.subStep('Click Tab in Tasks tab');
        await NewProspectPage.leftPane.tasks.clickButton();
    }

    static async clickNotesTab() {
        StepLogger.subStep('Click Tab in Notes tab');
        await NewProspectPage.leftPane.notes.clickButton();
    }

    static async clickAttachmentTab() {
        StepLogger.subStep('Click Tab in Attachment tab');
        await NewProspectPage.leftPane.attachments.clickButton();
    }

    static async verifyCompanyTitleDisplayed(companyName: string, closeTab = true) {
        await executeInNewTab(async () => {
            StepLogger.subVerification(`Verify ${companyName} displayed`);
            return NewProspectPage.getCompanyTitle(companyName).verifyDisplayedStatus();
        }, 1, closeTab);
    }

    static async navigateAndAddExistingProspect(uniqueName: string, email = RandomHelper.getRandomEmail()) {
        StepLogger.subStep('Login and Add exitsing prospect');
        const { information } = NewProspectPage.form;
        await LoginPageHelper.loginAsAdmin();
        await HomePage.hamburgerIcon.verifyDisplayedStatus();
        await HomePageHelper.clickNewLink();
        await HomePageHelper.verifyOptionsUnderNew();
        await HomePageHelper.clickRetailProspectUnderNew();
        await HomePageHelper.verifyCheckExistingContactDisplayed();
        await HomePageHelper.enterFirstNameOnCheckExistingContactModal(uniqueName);
        await HomePageHelper.verifyFirstNameIsEnteredOnCheckExistingContactModal(uniqueName);
        await HomePageHelper.enterLastNameOnCheckExistingContactModal(uniqueName);
        await HomePageHelper.verifyLastNameIsEnteredOnCheckExistingContactModal(uniqueName);
        await HomePageHelper.enterCompanyOnCheckExistingContactModal(uniqueName);
        await HomePageHelper.verifyCompanyIsEnteredOnCheckExistingContactModal(uniqueName);
        await HomePageHelper.selectReturnOptionOnCheckExistingContactModal(HomePageConstant.retail);
        await HomePageHelper.verifyReturnOptionIsSelectedOnCheckExistingContactModal(HomePageConstant.retail);
        await HomePageHelper.clickSearchContactsOnCheckExistingContactModal();
        await HomePageHelper.verifyContinueWithNewProspectIsEnabled();
        await HomePageHelper.clickContinueWithNewProspectButton();
        await NewProspectPageHelper.verifyNewProspectPageIsDisplayed(false);
        await information.syncToOutlookOff.clickButton();
        await information.address.sendKeys(uniqueName);
        await information.emailOne.sendKeys(`${uniqueName}${email}`);
        await this.enterOrUpdatePhone(uniqueName);
        await information.socialSecurityNumber.sendKeys(uniqueName);
        await NewProspectPageHelper.verifySyncToOutLookEnabled();
        await NewProspectPageHelper.clickSaveButton();
        await NewProspectPageHelper.verifyNewProspectRetailIsSavedSuccessfully();
        await WaitHelper.waitForPageToStable();
        await PageHelper.switchToFirstTab();
    }

    static async navigateAndSearchProspect(uniqueName: string) {
        StepLogger.subStep('Login and search existing prospect');
        await this.navigateAndAddExistingProspect(uniqueName);
        await HomePageHelper.verifySearchButtonIsDisplayed();
        await HomePageHelper.clickSearchButton();
        await HomePageHelper.verifySearchBox();
        await HomePageHelper.enterSearchTextAndClicksearch(uniqueName);
        await HomePageHelper.verifyContactCardIsDisplayed(uniqueName);
    }

    static async enterOrUpdatePhone(uniqueName: string) {
        StepLogger.subStep('Enter Or Update Phone Number');
        const { information } = NewProspectPage.form;
        await information.workPhone.sendKeys(uniqueName);
        await information.homePhone.sendKeys(uniqueName);
        await information.mobile.sendKeys(uniqueName);
    }

    static async verifyPhone(uniqueName: string) {
        StepLogger.subVerification('Verify Phone Number');
        const { information } = NewProspectPage.form;
        await information.workPhone.verifyTextEntered(uniqueName);
        await information.homePhone.verifyTextEntered(uniqueName);
        await information.mobile.verifyTextEntered(uniqueName);
    }

    static async navigateAndAddExistingProspectWithAccount(uniqueName: string) {
        StepLogger.subStep('Login and Add existing prospect with Account');
        await this.navigateAndSearchProspect(uniqueName);
        await HomePageHelper.clickOnSearchResult(uniqueName);
        await ContactPageHelper.verifyOverviewIsDisplayed(false);
        await ContactPageHelper.clickProfileTab();
        await ContactPageHelper.verifyProfileTabIsDisplayed();
        await ContactPageHelper.verifyOutsideAccountsTableIsDisplayed();
        await ContactPageHelper.clickAddAccount();
        await ContactPageHelper.verifyNewOutsideAccountModalIsDisplayed();
        const selectedAccount = await ContactPageOneHelper.selectAccountType();
        await ContactPageOneHelper.verifySelectedAccountType(selectedAccount);
        const selectedInstitution = await ContactPageOneHelper.selectInstitution();
        await ContactPageOneHelper.verifySelectedInstitution(selectedInstitution);
        await ContactPageOneHelper.clickSave();
        await ContactPageHelper.verifyOutsideAccountsTableIsDisplayed();
        await WaitHelper.waitForPageToStable();
        await PageHelper.switchToFirstTab();
    }

    url(): string {
        return EndpointHelper.newProspect;
    }
}

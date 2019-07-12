import * as moment from 'moment';

import { StepLogger } from '../../../../core/logger/step-logger';
import { ElementHelper } from '../../../components/html/element-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { DateHelper } from '../../../components/misc-utils/date-helper';
import { EndpointHelper } from '../../../components/misc-utils/endpoint-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { BasePageHelper } from '../base-page.helper';
import { CommonPage } from '../common/common.po';
import { HomePage } from '../home-page/home-page.po';
import { NewProspectPage } from '../new-prospect-page/new-prospect-page.po';

import { NewAccountPageConstant } from './new-account-page.constants';
import { NewAccountPage } from './new-account-page.po';

const { executeInIFrame, executeInNewTab } = PageHelper;

export class NewAccountPageHelper extends BasePageHelper {

    /**
     * Verify new account page is displayed in new tab
     * @param closeWindow
     */
    static async verifyNewAccountPageDisplayed(closeWindow = true, windowIndex = 1) {
        await executeInNewTab(async () => {
            await NewAccountPage.title.verifyDisplayedStatus();
        }, windowIndex, closeWindow);
    }

    /**
     * Verify Information and ProductDetails are displayed
     */
    static async verifyInformationAndProductDetailsDisplayed() {
        const { sections } = NewAccountPage;
        await sections.information.verifyDisplayedStatus();
        await sections.productDetails.verifyDisplayedStatus();
    }

    /**
     * Verify Contact, Product, Owner, Description, Status,
     * Acct, Created, ForeCast, FundsSource, ReferralSource
     * under Information section
     */
    static async verifyOptionsDisplayedUnderInformationSection() {
        const { information } = NewAccountPage;
        await information.contact.verifyDisplayedStatus();
        await information.product.verifyDisplayedStatus();
        await information.owner.verifyDisplayedStatus();
        await executeInIFrame([information.contentIFrame], async () => {
            await information.description.verifyDisplayedStatus();
        });
        await information.status.verifyDisplayedStatus();
        await information.acct.verifyDisplayedStatus();
        await information.created.verifyDisplayedStatus();
        await information.forecast.verifyDisplayedStatus();
        await information.fundsSource.verifyDisplayedStatus();
        await information.referralSource.verifyDisplayedStatus();
    }

    /**
     * Verify Inside and Outside are displayed under FundsSource
     */
    static async verifyFundsSourceOptions() {
        const { fundsSourceOptions } = NewAccountPage;
        await fundsSourceOptions.inside.verifyDisplayedStatus();
        await fundsSourceOptions.outside.verifyDisplayedStatus();
    }

    /**
     * Helps in clicking calender icon
     */
    static async clickCalenderIcon() {
        await NewAccountPage.information.calendarIcon.hoverOverAndClick();
    }

    /**
     * Pick date on Created Calender
     * Date can be selected from two ways inRange or OutOfRange
     * @param date
     * @param inRange
     */
    static async pickDateOnCreatedCalender(date = DateHelper.getCurrentDate(),
                                           inRange = true) {
        if (inRange) {
            await NewAccountPage.calendar.inRangeDate(date.date()).clickLink();
        } else {
            await NewAccountPage.calendar.outOfRangeDate(date.date()).clickLink();
        }
        return date;
    }

    /**
     * Verify Selected date is displayed in created field
     * @param expectedDate
     */
    static async verifySelectedDateIsDisplayedInCreatedField(expectedDate: moment.Moment) {
        const { value } = HtmlHelper.attributes;
        const timeStamp = await NewAccountPage.information.created.getAtttribute(value);
        const actualDate = timeStamp.split(Constants.separators.space)[0];
        await ExpectationHelper.verifyStringValueEqualTo(NewAccountPage.information.created,
            actualDate, expectedDate.format(Constants.dateFormats.M_D_YYYY));
    }

    /**
     * Click clock icon
     */
    static async clickClockIcon() {
        await NewAccountPage.information.clockIcon.clickButton();
    }

    /**
     * Select Time in Clock
     * @param timeStamp
     */
    static async selectTimeInClock(timeStamp = DateHelper.getCurrentDate()) {
        await NewAccountPage.clock.selectTime(timeStamp
            .format(Constants.dateFormats.H_00_A)).clickLink();
        return timeStamp;
    }

    /**
     * Verify Selected time is displayed under 'Created'
     * @param expectedTime
     */
    static async verifySelectedTimeIsDisplayedInCreatedField(expectedTime: moment.Moment) {
        const { value } = HtmlHelper.attributes;
        const timeStamp = await NewAccountPage.information.created.getAtttribute(value);
        const actualDateArray = timeStamp.split(Constants.separators.space);
        const actualTime = `${actualDateArray[1]} ${actualDateArray[2]}`;
        await ExpectationHelper.verifyStringValueEqualTo(NewAccountPage.information.created,
            actualTime, expectedTime.format(Constants.dateFormats.H_00_A));
    }

    static async verifySaveAndCloseOptions() {
        StepLogger.subVerification('Verify Save And Close Button');
        const { links } = NewAccountPage;
        await links.save.verifyDisplayedStatus();
        await links.close.verifyDisplayedStatus();
    }

    static async clickSave() {
        StepLogger.subStep('Click Save Option');
        const { links } = NewAccountPage;
        await ElementHelper.waitAndClickButton(links.save);
    }

    static async clickClose() {
        StepLogger.subStep('Click Close Option');
        const { links } = NewAccountPage;
        await ElementHelper.waitAndClickButton(links.close);
    }

    static async verifyConfirmWindow() {
        StepLogger.subVerification('Verify Confirm Dialog window');
        const { dialogBox } = NewAccountPage;
        await dialogBox.window.verifyDisplayedStatus();
    }

    static async clickDialogOk() {
        StepLogger.subStep('Click Dialog Ok Option');
        const { dialogBox } = NewAccountPage;
        await dialogBox.okButton.clickButton();
    }

    static async clickDialogCancel() {
        StepLogger.subStep('Click Dialog Cancel Option');
        const { dialogBox } = NewAccountPage;
        await dialogBox.cancelButton.clickButton();
    }

    static async verifyOverViewTabAndLeftPane() {
        StepLogger.subVerification('Verify OverView Tab');
        await NewAccountPage.leftPane.overView.verifyDisplayedStatus();
        await NewAccountPage.topTab.overView.verifyDisplayedStatus();
    }

    static async verifyMandatoryMessage() {
        StepLogger.subVerification('Verify Mandatory Field Message');
        const { errorMessage } = NewAccountPage;
        await errorMessage.accNumberRequired.verifyDisplayedStatus();
        await errorMessage.contactRequired.verifyDisplayedStatus();
    }

    static async verifyProductOptions() {
        StepLogger.subVerification('Verify Product Option');
        const { information } = NewAccountPage;
        await information.brokerage.verifyPresentStatus();
        await information.commercialChecking.verifyPresentStatus();
        await information.creditCard.verifyPresentStatus();
        await information.mutualFunds.verifyPresentStatus();
    }

    static async verifyStatusOptions() {
        StepLogger.subVerification('Verify Status Option');
        const { information } = NewAccountPage;
        await information.openedAccount.verifyPresentStatus();
        await information.closedAccount.verifyPresentStatus();
    }

    static async verifyTabClosed() {
        StepLogger.subVerification('Verify Tab is closed');
        const windowCount = await PageHelper.getWindowCount();
        await ExpectationHelper.verifyValueEqualTo(windowCount, Constants.number.one);
        await PageHelper.switchToFirstTab();
        await HomePage.pageTitle.verifyDisplayedStatus();
    }

    static async verifyReferralSourceOptions() {
        StepLogger.subVerification('Verify Referral Source Option');
        const { information } = NewAccountPage;
        const referralCount = await information.referralSourceOption.item.count();
        await ExpectationHelper.verifyValueGraterThan(referralCount, Constants.number.zero);
        await information.callCenter.verifyPresentStatus();
        await information.emailLead.verifyPresentStatus();
        await information.directMail.verifyPresentStatus();
        await information.conventions.verifyPresentStatus();
    }

    static async selectProduct() {
        StepLogger.subStep('Select Product');
        const { information } = NewAccountPage;
        await information.product.clickLink();
        await information.brokerage.clickLink();
    }

    static async verifySelectedProduct() {
        StepLogger.subVerification('Verify Selected Product');
        const { information } = NewAccountPage;
        const { elementNames: eNames } = NewAccountPageConstant;
        await ExpectationHelper.verifyAttributeValue(information.product, HtmlHelper.attributes.value, eNames.brokerage);
    }

    static async verifyProductDetail() {
        StepLogger.subVerification('Verify Product Detail Option');
        const { information } = NewAccountPage;
        const productDetailOption = await information.productDetailOption.item.count();
        await ExpectationHelper.verifyValueGraterThan(productDetailOption, Constants.number.zero);
    }

    static async pickCreatedDate(date = DateHelper.getCurrentDate()) {
        StepLogger.subStep('Pick the created Date');
        await this.pickDateOnCreatedCalender(date);
        const { value } = HtmlHelper.attributes;
        const timeStamp = await NewAccountPage.information.created.getAtttribute(value);
        const createdDate = timeStamp.split(Constants.separators.space)[0];
        return createdDate;
    }

    static async verifyCreatedDate(expectedDate: string) {
        StepLogger.subStep('Verify Created Date');
        const { value } = HtmlHelper.attributes;
        const timeStamp = await NewAccountPage.information.created.getAtttribute(value);
        const actualDate = timeStamp.split(Constants.separators.space)[0];
        await ExpectationHelper.verifyStringValueEqualTo(NewAccountPage.information.created,
            actualDate, expectedDate);
    }

    static async verifySelectedStatus() {
        StepLogger.subVerification('Verify Selected Product');
        const { information } = NewAccountPage;
        const { elementNames: eNames } = NewAccountPageConstant;
        const selectedText = await information.status.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selectedText,  eNames.openedAccount);
    }

    static async enterFirstName(fName: string) {
        StepLogger.subStep('Enter the First Name');
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await HomePage.checkExisitingContactModal.firstName
                .sendKeys(fName);
        });
    }

    static async verifyFirstName(fName: string) {
        StepLogger.subVerification('Verify the First Name');
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await HomePage.checkExisitingContactModal.firstName.verifyTextEntered(fName);
        });
    }

    static async enterLastName(lName: string) {
        StepLogger.subStep('Enter the Last Name');
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await HomePage.checkExisitingContactModal.lastName.sendKeys(lName);
        });
    }

    static async verifyLastName(fName: string) {
        StepLogger.subVerification('Verify the Last Name');
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await HomePage.checkExisitingContactModal.lastName.verifyTextEntered(fName);
        });
    }

    static async clickSearchContacts(switchBack = true) {
        StepLogger.subStep('Search the Contact');
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await HomePage.checkExisitingContactModal.searchContacts.clickButton();
        }, switchBack);
    }

    static async clickOnSearchResult() {
        StepLogger.subStep('Click Searched Contact');
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await NewAccountPage.information.searchContactList.clickCheckbox();
        });
    }

    static async clickUseSearchResult() {
        StepLogger.subStep('Click Use Search Contact');
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await HomePage.checkExisitingContactModal.useSelectedContact.clickButton();
        });
    }

    static async verifyContactText(name: string) {
        StepLogger.subVerification('Verify the Contact');
        const contactText = await NewAccountPage.information.contact.getAtttribute(HtmlHelper.attributes.value) ;
        await ExpectationHelper.verifyStringValueContain(contactText.toLowerCase(), name.toLowerCase());
    }

    static async searchAndAddContact(name: string) {
        StepLogger.subStep('Search And Add Contact');
        await NewAccountPage.information.searchContact.clickButton();
        await executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await HomePage.checkExisitingContactModal.firstName.sendKeys(name);
            await HomePage.checkExisitingContactModal.firstName.verifyTextEntered(name);
            await HomePage.checkExisitingContactModal.lastName.sendKeys(name);
            await HomePage.checkExisitingContactModal.lastName.verifyTextEntered(name);
            await HomePage.checkExisitingContactModal.searchContacts.clickButton();
            await NewAccountPage.information.searchContactList.clickCheckbox();
            await HomePage.checkExisitingContactModal.useSelectedContact.clickButton();
        });
    }

    static async selectProductDetail() {
        StepLogger.subStep('Select the Product');
        await NewAccountPageHelper.selectProduct();
        await NewAccountPageHelper.verifySelectedProduct();
        await ElementHelper.waitAndClickButton(NewAccountPage.information.productDetail);
        await WaitHelper.waitForElementToBeClickable(NewAccountPage.information.productDetailOptions.item.last());
        await NewAccountPage.information.productDetailOptions.item.last().click();
    }

    static async selectSubProduct(optionName: string) {
        await ElementHelper.waitAndClickButton(NewAccountPage.information.productDetail);
        await NewAccountPage.information.productDetailSpecificOption(optionName).clickLink();
    }

    static async verifySubProductIsSelectedProperly(optionName: string) {
        const { productDetail } =  NewAccountPage.information;
        await ExpectationHelper.verifyAttributeContains(productDetail,
            HtmlHelper.attributes.value, optionName);
    }

    static async selectStatus() {
        StepLogger.subStep('Select the Status');
        await NewAccountPage.information.status.clickButton();
        await ElementHelper.waitAndClickButton(NewAccountPage.information.openedAccount);
    }

    static async verifyAccountSaved(toCloseTab = false) {
        StepLogger.subVerification('Verify Account is saved');
        await NewProspectPage.header.threeDots.verifyDisplayedStatus();
        if (toCloseTab) {
            await PageHelper.closeCurrentTab();
        }
    }

    static async enterAcct(acct: string) {
        await NewAccountPage.information.acct.sendKeys(acct);
    }

    static async verifyAcctIsEnteredProperly(acct: string) {
        await NewAccountPage.information.acct.verifyTextEntered(acct);
    }

    static async enterPotentialInvestment(value: string) {
        await NewAccountPage.productDetails.potentialInvestment.sendKeys(value);
    }

    static async verifyPotentialInvestmentIsMarkedMandatory() {
        await NewAccountPage.productDetails.mandatoryIcons.potentialInvestment.verifyDisplayedStatus();
    }

    static async enterPotentialInvestmentAndSave(value: string) {
        await this.enterPotentialInvestment(value);
        await this.clickSave();
    }

    static async enterDetailAndSave(name: string, acctText: string) {
        StepLogger.subStep('Enter Detail and Save');
        const { acct } = NewAccountPage.information;
        await this.searchAndAddContact(name);
        await this.verifyContactText(name);
        await this.selectProductDetail();
        await this.verifySelectedProduct();
        await this.selectStatus();
        await this.verifySelectedStatus();
        await WaitHelper.waitForElementToBeClickable(acct.item);
        await acct.sendKeys(acctText);
        await this.clickSave();
    }

    static async verifyLeftPanel() {
        StepLogger.subVerification('Verify Left panel');
        const { leftPane: leftPaneAcc } = NewAccountPage;
        const { leftPane } = NewProspectPage;
        await leftPaneAcc.household.verifyDisplayedStatus();
        await leftPane.cases.verifyDisplayedStatus();
        await leftPane.notes.verifyDisplayedStatus();
        await leftPane.events.verifyDisplayedStatus();
        await leftPane.tasks.verifyDisplayedStatus();
        await leftPane.attachments.verifyDisplayedStatus();
    }

    static async verifyTopOption() {
        StepLogger.subVerification('Verify Top Option');
        const { topMenu } = NewAccountPage;
        await topMenu.name.verifyDisplayedStatus();
        await topMenu.email.verifyDisplayedStatus();
        await topMenu.phone.verifyDisplayedStatus();
    }

    static async addContactAcctAndSave(name: string, acct: string) {
        StepLogger.subStep('Add Contact, Acct And Click Save');
        await this.searchAndAddContact(name);
        await NewAccountPage.information.acct.sendKeys(acct);
        await this.clickSave();
    }

    url(): string {
        return EndpointHelper.newAccount;
    }
}

import { StepLogger } from '../../../../core/logger/step-logger';
import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { EndpointHelper } from '../../../components/misc-utils/endpoint-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { CommonPage } from '../common/common.po';
import { HomePageHelper } from '../home-page/home-page.helper';
import { NewAccountPageHelper } from '../new-account-page/new-account-page.helper';
import { NewAccountPage } from '../new-account-page/new-account-page.po';
import { NewOpportunityPage } from '../new-opportunity-page/new-opportunity-page.po';
import { NewProspectPage } from '../new-prospect-page/new-prospect-page.po';

import { ContactPageConstant } from './contact-page.constants';
import { ContactPageHelper } from './contact-page.helper';
import { ContactPage } from './contact-page.po';

export class ContactPageOneHelper {

    static async verifyLostOpportunitiesSection() {
        StepLogger.subVerification('Verify Lost Opportunity Section');
        const { sections } = ContactPage.relationship;
        await sections.lostOpportunitiesSection.verifyDisplayedStatus();
    }

    static async clickCollapse() {
        StepLogger.subStep('Click Collapse');
        const { sections } = ContactPage.relationship;
        await sections.collapseIcon.clickButton();
    }

    static async verifyCollapsedResult() {
        StepLogger.subVerification('Verify Collapsed Section');
        const { sections } = ContactPage.relationship;
        await sections.expandIcon.verifyDisplayedStatus();
    }

    static async clickExpand() {
        StepLogger.subStep('Click Expand');
        const { sections } = ContactPage.relationship;
        await sections.expandIcon.clickButton();
    }

    static async verifyExpandedResult() {
        StepLogger.subVerification('Verify Expanded Section');
        const { sections } = ContactPage.relationship;
        await sections.expandIcon.verifyHiddenStatus();
    }

    static async clickAddAccountOnSummaryTab() {
        StepLogger.subStep('Click Add Account on summary Tab');
        const { sections } = ContactPage.relationship;
        await sections.addAccount.clickButton();
    }

    static async verifyNewAccountPageDisplayed(closeWindow = true) {
        StepLogger.subVerification('Verify New Account Page');
        await PageHelper.executeInNewTab(async () => {
            await NewAccountPage.title.verifyDisplayedStatus();
        }, Constants.number.two, closeWindow);
    }

    static async clickAddOpportunityOnSummaryTab() {
        StepLogger.subStep('Click Add Opportunity');
        const { sections } = ContactPage.relationship;
        await sections.addOpportunity.clickButton();
    }

    static async verifyNewOppurtunityPageDisplayed(closeWindow = true) {
        StepLogger.subVerification('Verify New Oppurtunity Page');
        await PageHelper.executeInNewTab(async () => {
                await NewOpportunityPage.header.title.verifyDisplayedStatus();
        }, Constants.number.two, closeWindow);
    }

    static async selectAccountType() {
        StepLogger.subStep('Select Account type');
        let selectedOption: string;
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            selectedOption = await ContactPage.newOutsideAccount.accountTypeOptions.item.last().getText();
            await DropDownHelper.selectOptionByCssText(ContactPage.newOutsideAccount.accountType, selectedOption);
        });
        return selectedOption;
    }

    static async verifySelectedAccountType(expectedoption: string, switchBack = true) {
        StepLogger.subVerification('Verify Selected Account type');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            const selectedOption = await ContactPage.newOutsideAccount.accountType.getSelectedOptionText();
            await ExpectationHelper.verifyStringEqualTo(selectedOption.toLowerCase(), expectedoption.toLowerCase() );
        }, switchBack);
    }

    static async selectInstitution() {
        StepLogger.subStep('Select institution');
        let selectedOption: string;
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            selectedOption = await ContactPage.newOutsideAccount.institutionOptions.item.last().getText();
            await DropDownHelper.selectOptionByCssText(ContactPage.newOutsideAccount.institution, selectedOption);
        });
        return selectedOption;
    }

    static async verifySelectedInstitution(expectedoption: string, switchBack = true) {
        StepLogger.subVerification('Verify Selected Institution');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            const selectedOption = await ContactPage.newOutsideAccount.institution.getSelectedOptionText();
            await ExpectationHelper.verifyStringEqualTo(selectedOption.toLowerCase(), expectedoption.toLowerCase() );
        }, switchBack);
    }

    static async clickSave(switchBack = true) {
        StepLogger.subStep('Click Save');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ContactPage.newOutsideAccount.save.clickButton();
        }, switchBack);
    }

    static async clickCancel() {
        StepLogger.subStep('Click Cancel');
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ContactPage.newOutsideAccount.cancel.clickButton();
        });
    }

    static async clickAccountRow() {
        StepLogger.subStep('Click Account Row');
        const { outsideAccountsTableData } = ContactPage.overview.profile;
        await outsideAccountsTableData.clickButton();
    }

    static async verifyNewOutsideAccountModalClosed() {
        StepLogger.subVerification('Verify Modal window is closed ');
        await ContactPage.newOutsideAccount.title.verifyHiddenStatus();
    }

    static async verifyContactPageTabs() {
        StepLogger.subVerification('Verify Tabs');
        const { sidebar } = ContactPage;
        await sidebar.overview.verifyDisplayedStatus();
        await sidebar.relationship.verifyDisplayedStatus();
        await sidebar.relatedContacts.verifyDisplayedStatus();
        await sidebar.notes.verifyDisplayedStatus();
        await sidebar.events.verifyDisplayedStatus();
        await sidebar.attachments.verifyDisplayedStatus();
        await sidebar.tasks.verifyDisplayedStatus();
    }

    static async verifyAccountTypeAndInstitutionRequired() {
        StepLogger.subVerification('Verify Error message ');
        await HomePageHelper.verifyAlertText(ContactPageConstant.elementNames.accoutTypeAndInstitutionRequired);
    }

    static async clickCloseAndOK() {
        StepLogger.subStep('Click Close and ok');
        await NewAccountPageHelper.clickClose();
        await NewAccountPageHelper.verifyConfirmWindow();
        await NewAccountPageHelper.clickDialogOk();
    }

    static async verifyOverViewAndFirstName(firstName: string) {
        StepLogger.subVerification('Verify OverView tab and firstName');
        await ContactPageHelper.verifyOverviewIsDisplayed(false);
        await NewProspectPage.form.information.firstName.verifyTextEntered(firstName);
    }

    url(): string {
        return EndpointHelper.contact;
    }
}

import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';

import { CommonPage } from '../common/common.po';
import { HomePageHelper } from '../home-page/home-page.helper';

import { Prospect } from '../models/prospect.model';

import { NewCasePageConstant } from './new-case-page.constants';
import { NewCasePageHelper } from './new-case-page.helper';
import { NewCasePage } from './new-case-page.po';

const { attributes } = HtmlHelper;

export class NewCasePageHelperExtension {

    static async verifySelectedBranch(branch: string) {
        const selected = await NewCasePage.caseData.branch.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, branch);
    }

    static async selectLanguageOption() {
        StepLogger.subStep('Get all languages');
        const options = await PageHelper.getTextOfElements(NewCasePage.caseData.allLanguages);
        const lastOption = options[options.length - Constants.number.one];
        await NewCasePage.caseData.languageOption(lastOption).clickButton();
        return lastOption;
    }

    static async verifySelectedLanguage(language: string) {
        const selected = await NewCasePage.caseData.language.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, language);
    }

    static async selectProductTypeOption() {
        StepLogger.subStep('Get all products');
        const options = await PageHelper.getTextOfElements(NewCasePage.caseData.allProductTypes);
        const lastOption = options[options.length - Constants.number.one];
        await NewCasePage.caseData.productTypeOption(lastOption).clickButton();
        StepLogger.subStep('Wait for products to load');
        await WaitHelper.sleepForTwoSeconds();
        return lastOption;
    }

    static async verifySelectedProductType(product: string) {
        const selected = await NewCasePage.caseData.productType.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, product);
    }

    static async selectCategoryAndSubcategory(category: string, subCategory: string) {
        await NewCasePageHelper.selectCategoryOption(category);
        await NewCasePageHelper.selectSubCategoryOption(subCategory);
    }

    static async verifyCategoryAndSubcategory(category: string, subCategory: string) {
        await NewCasePageHelper.verifyCategorySelectedOption(category);
        await NewCasePageHelper.verifySubCategorySelectedOption(subCategory);
    }

    static async selectContactByOption(option: string) {
        await NewCasePage.caseData.contactByOption(option).clickButton();
    }

    static async verifySelectedContactBy(option: string) {
        const selected = await NewCasePage.caseData.contactBy.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, option);
    }

    static async selectNormalPriority() {
        await NewCasePage.priority.normal.clickButton();
    }

    static async verifySelectedPriority(option: string) {
        const selected = await NewCasePage.caseData.priority.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, option);
    }

    static async selectStatusOption(option: string) {
        await NewCasePage.caseData.statusOption(option).clickButton();
    }

    static async verifySelectedStatus(option: string) {
        const selected = await NewCasePage.caseData.status.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, option);
    }

    static async clickCloseButton() {
        await NewCasePage.header.close.clickButton();
    }

    static async verifyWarningDialog() {
        await NewCasePage.warningDialog.dialogTitle.verifyDisplayedStatus();
    }

    static async clickOkWarningDialog() {
        try {
            await NewCasePage.warningDialog.okBtn.clickButton();
            await PageHelper.switchToTab(Constants.number.zero);
        } catch (error) {}
    }

    static async verifyNewCasePageClosed() {
        const handles = await PageHelper.getAllWindowHandles();
        await ExpectationHelper.verifyValueEqualTo(handles.length, Constants.number.one);
    }

    static async createCase(subject: string) {
        const contact = await NewCasePageHelper.selectContact();
        await NewCasePageHelper.verifyContactIsSelected(contact);
        await NewCasePageHelper.enterSubject(subject);
        await NewCasePageHelper.verifySubjectIsEntered(subject);
        await NewCasePageHelper.enterDescription(subject);
        await NewCasePageHelper.verifyDescriptionIsEntered(subject);
        const option = NewCasePageConstant.dropdownOptions.onlineBanking;
        await NewCasePageHelper.selectCategoryOption(option);
        await NewCasePageHelper.verifyCategorySelectedOption(option);
        const subOption = NewCasePageConstant.dropdownOptions.atmDebit;
        await NewCasePageHelper.selectSubCategoryOption(subOption);
        await NewCasePageHelper.verifySubCategorySelectedOption(subOption);
        await NewCasePageHelper.clickSave();
    }

    static async verifyLeftPanel() {
        const { leftPanel } = NewCasePage;
        await leftPanel.overview.verifyDisplayedStatus();
        await leftPanel.log.verifyDisplayedStatus();
        await leftPanel.notes.verifyDisplayedStatus();
        await leftPanel.events.verifyDisplayedStatus();
        await leftPanel.tasks.verifyDisplayedStatus();
        await leftPanel.attachments.verifyDisplayedStatus();
    }

    static async verifyHeadingNumberAndSubject(name: string) {
        await NewCasePage.header.caseTitle(name).verifyDisplayedStatus();
        const title = await NewCasePage.header.createdTitle.getText();
        const pattern = new RegExp(NewCasePageConstant.elementNames.regex);
        const id = pattern.exec(title)[Constants.number.one];
        await ExpectationHelper.verifyValueIsNumber(id);
    }

    static async verifyCaseIsCreatedAndNewCase(name: string) {
        await NewCasePage.header.title.verifyDisplayedStatus();
        await PageHelper.switchToFirstTab();
        await PageHelper.switchToDefaultContent();
        await NewCasePage.searchCase.searchBtn.clickButton();
        await NewCasePage.searchCase.dropdown.clickButtonJs();
        await NewCasePage.searchCase.cases.clickButton();
        await NewCasePage.searchCase.input.sendKeys(name);
        await NewCasePage.searchCase.searchBox.clickButton();
        await NewCasePage.searchCase.caseItem(name).verifyDisplayedStatus();
    }

    static async clickSaveAndAdd() {
        await NewCasePage.header.saveAndAdd.clickButton();
    }

    static async clickCreateNewProspect() {
        await NewCasePage.selectContact.continueWithNewProspect.clickButton();
    }

    static async verifyNewProspectDialog() {
        await PageHelper.switchToDefaultContent();
        await NewCasePage.prospectDialog.dialogTitle.verifyDisplayedStatus();
    }

    static async fillNewProspectInformation(prospect = Prospect.buildProspect()) {
        const { prospectDialog, header } = NewCasePage;
        await PageHelper.switchToDefaultContentAndIFrame(prospectDialog.dialogFrame);
        await prospectDialog.firstName.sendKeys(prospect.firstName);
        await prospectDialog.lastName.sendKeys(prospect.lastName);
        await header.save.clickButton();
        return prospect;
    }

    static async verifyProspectIsSelected(prospect: Prospect) {
        const { caseData: { contact: contactElement } } = NewCasePage;
        await PageHelper.switchToDefaultContent();
        await ExpectationHelper.verifyAttributeContains(contactElement,
            attributes.value, prospect.firstName || prospect.lastName);
    }

    static async selectCasesInSearch() {
        await PageHelper.switchToDefaultContent();
        await NewCasePage.searchCase.searchBtn.clickButton();
        await NewCasePage.searchCase.dropdown.clickButtonJs();
        await NewCasePage.searchCase.cases.clickButton();
    }

    static async verifyCasesSelectedInSearch() {
        await NewCasePage.searchCase
            .selectedIcon(NewCasePageConstant.attributes.classes.iconBriefcase)
            .verifyDisplayedStatus();
    }

    static async clickSearchText() {
        await NewCasePage.searchCase.input.clickLink();
    }

    static async enterSearchText(text: string, toClickSearch: boolean = true) {
        await NewCasePage.searchCase.input.sendKeys(text);
        if (toClickSearch) {
            await NewCasePage.searchCase.searchBox.clickButton();
        }
    }

    static async verifySearchText(text: string) {
        await NewCasePage.searchCase.input.verifyTextBoxContains(text);
    }

    static async clickSearchTextButton() {
        await NewCasePage.searchCase.searchBox.clickButton();
    }

    static async verifyCasesListDisplayed() {
        await WaitHelper.waitForElementToBeDisplayed(NewCasePage.searchCase.caseList.item,
            PageHelper.timeout.m);
        const count = await NewCasePage.searchCase.caseListItems.item.count();
        await ExpectationHelper.verifyValueGraterThan(count, Constants.number.zero);
    }

    static async clickFirstCard() {
        const item = await NewCasePage.searchCase.caseFirstItem.getText();
        const pattern = new RegExp(NewCasePageConstant.elementNames.regexId);
        const name = pattern.exec(item)[Constants.number.two];
        const id = pattern.exec(item)[Constants.number.one];
        await NewCasePage.searchCase.caseItem(item).clickButton();
        return { name, id };
    }

    static async verifyReviewCasePageDisplayed(name: string, closeWindow = true) {
        await PageHelper.executeInNewTab(async () => {
            await NewCasePage.header.reviewTitle(name).verifyDisplayedStatus();
        }, Constants.number.one, closeWindow);
    }

    static async verifyHeaderItems(name: string, id: string) {
        const title = await NewCasePage.header.createdTitle.getText();
        await ExpectationHelper.verifyStringValueContain(title.toLowerCase(), name.toLowerCase());
        await ExpectationHelper.verifyStringValueContain(title, id);
        await NewCasePageHelper.verifySaveCloseSaveAndAddButtonsDisplayed();
    }

    static async clickOverviewTab() {
        await NewCasePage.leftPanel.overview.clickButton();
    }

    static async clickLogTab() {
        await NewCasePage.leftPanel.log.clickButton();
    }

    static async clickNotesTab() {
        await NewCasePage.leftPanel.notes.clickButton();
    }

    static async clickEventsTab() {
        await NewCasePage.leftPanel.events.clickButton();
    }

    static async clickTasksTab() {
        await NewCasePage.leftPanel.tasks.clickButton();
    }

    static async clickAttachmentsTab() {
        await NewCasePage.leftPanel.attachments.clickButton();
    }

    static async verifyTabDisplayed(tab: string) {
        await NewCasePage.leftPanel.selectedTab(tab).verifyDisplayedStatus();
    }

    static async verifyCaseDataSearchFields() {
        const { caseData } = NewCasePage;
        await caseData.searchUser.verifyDisplayedStatus();
        await caseData.selectContact.verifyDisplayedStatus();
        await caseData.selectAccount.verifyDisplayedStatus();
    }

    static async verifyCaseDataMandatoryFields() {
        const { caseData } = NewCasePage;
        await caseData.user.verifyDisplayedStatus();
        await caseData.selectUser.verifyDisplayedStatus();
        await caseData.contact.verifyDisplayedStatus();
        await caseData.subject.verifyDisplayedStatus();
        await caseData.category.verifyDisplayedStatus();
        await caseData.priority.verifyDisplayedStatus();
        await caseData.status.verifyDisplayedStatus();
        await PageHelper.switchToiFrame(caseData.richEditorFrame);
        await caseData.description.verifyDisplayedStatus();
    }

    static async verifyPrivateDeptButton() {
        await NewCasePage.caseData.privacyByDept.verifyDisplayedStatus();
    }

    static async verifyDescriptionArea() {
        const { caseData } = NewCasePage;
        await PageHelper.switchToiFrame(caseData.richEditorFrame);
        await caseData.description.verifyDisplayedStatus();
    }

    static async verifyDropdownFields() {
        const { caseData } = NewCasePage;
        await caseData.user.verifyDisplayedStatus();
        await caseData.branch.verifyDisplayedStatus();
        await caseData.language.verifyDisplayedStatus();
        await caseData.productType.verifyDisplayedStatus();
        await caseData.category.verifyDisplayedStatus();
        await caseData.contactBy.verifyDisplayedStatus();
        await caseData.priority.verifyDisplayedStatus();
        await caseData.status.verifyDisplayedStatus();
    }

    static async clickCommittedCalendar() {
        await NewCasePage.caseData.committedCalender.clickButton();
    }

    static async verifyDatePickerCalendar() {
        await NewCasePage.caseData.committedCalender.verifyDisplayedStatus();
    }

    static async clickMenuButton() {
        await NewCasePage.header.dottedMenu.clickButton();
    }

    static async clickCompanyCard(companyName: string) {
        return NewCasePage.getCompanyCardByName(companyName).clickLinkJs();
    }

    static async verifyMenuOptions() {
        const { header } = NewCasePage;
        await header.copyLink.verifyDisplayedStatus();
        await header.emailLink.verifyDisplayedStatus();
        await header.history.verifyDisplayedStatus();
    }

    static async navigateToCasesAndCreateCase(subject: string) {
        await HomePageHelper.clickNewLink();
        await HomePageHelper.verifyOptionsUnderNew();
        await HomePageHelper.clickCaseUnderNew();
        await NewCasePageHelper.verifyNewCasePageDisplayed(false);
        await this.createCase(subject);
        await NewCasePage.header.caseTitle(subject).verifyDisplayedStatus();
        await PageHelper.switchToFirstTab();
    }

    static async verifyCaseNumberAndSubject(name: string, id: string) {
        const { header } = NewCasePage;
        await header.caseTitle(name).verifyDisplayedStatus();
        const title = await header.createdTitle.getText();
        const pattern = new RegExp(NewCasePageConstant.elementNames.regexIdName);
        const currentName = pattern.exec(title)[Constants.number.two];
        const currentId = pattern.exec(title)[Constants.number.one];
        await ExpectationHelper.verifyStringValueContain(currentName.toLowerCase(), name.toLowerCase());
        await ExpectationHelper.verifyStringValueContain(currentId, id);
    }

    static async navigateToNotesTab(subject: string) {
        await NewCasePageHelper.selectCasesInSearch();
        await NewCasePageHelper.verifyCasesSelectedInSearch();
        await NewCasePageHelper.enterSearchText(subject);
        await NewCasePageHelper.verifyCasesListDisplayed();
        await NewCasePageHelper.clickFirstCard();
        await NewCasePageHelper.verifyReviewCasePageDisplayed(subject, false);
        await NewCasePageHelper.clickNotesTab();
        await NewCasePageHelper.verifyTabDisplayed(NewCasePageConstant.leftPanel.notes);
    }

    static async verifyNotesButtons() {
        const { notesTab } = NewCasePage;

        await PageHelper.switchToDefaultContentAndIFrame(notesTab.notesFrame);
        await notesTab.addNoteButton.verifyDisplayedStatus();
        await notesTab.refreshNotesButton.verifyDisplayedStatus();
        await notesTab.selectView.verifyDisplayedStatus();
        await notesTab.groupingView.verifyDisplayedStatus();
        await notesTab.exportToExcel.verifyDisplayedStatus();
        await notesTab.exportToWord.verifyDisplayedStatus();
    }

    static async verifyNotesGrid() {
        const { notesTab } = NewCasePage;

        await notesTab.noteHeader.verifyDisplayedStatus();
        await notesTab.relatedEntityHeader.verifyDisplayedStatus();
        await notesTab.deleteHeader.verifyDisplayedStatus();
    }

    static async clickAddNote(toSwitch: boolean = false) {
        const { notesTab } = NewCasePage;

        if (toSwitch) {
            await PageHelper.switchToDefaultContentAndIFrame(notesTab.notesFrame);
        }

        await notesTab.addNoteButton.clickButton();
    }

    static async verifyNewNoteDialog() {
        await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        await NewCasePage.notesTab.newNoteTitle.verifyDisplayedStatus();
    }

    static async verifyNewNoteDialogFields() {
        const { notesTab } = NewCasePage;

        await notesTab.subject.verifyDisplayedStatus();
        await notesTab.privateControl.verifyDisplayedStatus();
        await notesTab.saveBtn.verifyDisplayedStatus();
        await notesTab.closeBtn.verifyDisplayedStatus();
        await PageHelper.switchToiFrame(notesTab.richEditorFrame);
        await notesTab.textBody.verifyDisplayedStatus();
    }

    static async clickCloseNoteButton() {
        await NewCasePage.notesTab.closeBtn.clickButton();
    }

    static async clickSaveNoteButton(toSwitch: boolean = false) {
        const { notesTab } = NewCasePage;
        if (toSwitch) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await notesTab.saveBtn.clickButton();
    }

    static async verifyNewNoteDialogClosed() {
        await NewCasePage.notesTab.newNoteTitle.verifyHiddenStatus();
    }

    static async verifyValidationErrorMessagesNotesDisplayed() {
        const { validationMessage } = NewCasePage;
        await validationMessage.subject.verifyDisplayedStatus();
        await validationMessage.text.verifyDisplayedStatus();
    }

    static async enterSubjectNote(note: string) {
        await NewCasePage.notesTab.subject.sendKeys(note);
    }

    static async verifySubjectNote(note: string) {
        await NewCasePage.notesTab.subject.verifyTextBoxContains(note);
    }

    static async verifyValidationErrorTextDisplayed() {
        await NewCasePage.validationMessage.text.verifyDisplayedStatus();
    }

    static async verifyValidationErrorSubjectDisplayed() {
        await NewCasePage.validationMessage.subject.verifyDisplayedStatus();
    }

    static async enterTextNote(note: string) {
        const { notesTab } = NewCasePage;

        await PageHelper.switchToiFrame(notesTab.richEditorFrame);
        await notesTab.textBody.sendKeys(note);
    }

    static async verifyTextNote(note: string) {
        await NewCasePage.notesTab.textBody.verifyContainsText(note);
    }

    static async clickSaveAndCloseNoteButton(toSwitch: boolean = false) {
        const { notesTab } = NewCasePage;
        if (toSwitch) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await notesTab.saveAndCloseBtn.clickButton();
    }

    static async verifyNoteSaved(note: string) {
        const { notesTab } = NewCasePage;

        await PageHelper.switchToDefaultContentAndIFrame(notesTab.notesFrame);
        await notesTab.noteItem(note).verifyDisplayedStatus();
    }

    static async selectPrivateNote(toSwitch: boolean = false) {
        const { notesTab } = NewCasePage;
        if (toSwitch) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await notesTab.privateControl.clickButton();
    }

    static async verifyPrivateNoteOn() {
        await NewCasePage.notesTab.privateOn.verifyDisplayedStatus();
    }
}

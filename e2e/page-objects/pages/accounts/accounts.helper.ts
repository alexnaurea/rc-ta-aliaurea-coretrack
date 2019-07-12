import { browser } from 'protractor';

import { StepLogger } from '../../../../core/logger/step-logger';
import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { RandomHelper } from '../../../components/misc-utils/random-helper';
import { CommonPage } from '../common/common.po';
import { HomePage1Helper } from '../home-page/home-page1.helper';

import { AccountConstants } from './accounts.constant';
import { AccountsPage } from './accounts.po';

export class AccountsPageHelper {

    static async verifyAccountsListDisplayed() {
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        await AccountsPage.accountsElements.accountsListTable.verifyDisplayedStatus();
    }

    static async clickOnAnAccount() {
        StepLogger.subStep('Click on an icon account');
        const href = AccountsPage.accountsElements.iconAccount.getAtttribute('href');
        await AccountsPage.accountsElements.iconAccount.hoverOverAndClick();
        return href;
    }

    static async verifyAccountDetailsPageDisplayed() {
        await PageHelper.executeInNewTab(async () => {
            await AccountsPage.titles.accountDetails.verifyDisplayedStatus();
        }, 1, false);
    }

    static async getProductName(href: string) {
        await PageHelper.switchToTab(Constants.number.zero);
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        return await AccountsPage.accountsElements.getProductFromTheList(href).getText();
    }

    static async getContactName(href: string) {
        await PageHelper.switchToTab(Constants.number.zero);
        await PageHelper.switchToiFrame(CommonPage.xComponentsIFrame);
        return await AccountsPage.accountsElements.getContactNameFromTheList(href).getText();
    }

    static async verifyAccountDetailsPageTitle(product: string, contact: string, tabNumber: number = Constants.number.one) {
        await PageHelper.switchToTab(tabNumber);
        const title = await AccountsPage.titles.accountDetails.getText();
        await ExpectationHelper.verifyStringValueContain(title.toUpperCase(), product.toUpperCase());
        await ExpectationHelper.verifyStringValueContain(title.toUpperCase(), contact.toUpperCase());
    }

    static async clickOnCasesTab() {
        StepLogger.subStep('Switch to tab number one');
        await PageHelper.switchToTab(Constants.number.one);
        StepLogger.subStep('Click on Cases tab');
        await AccountsPage.sidebarMenu.cases.hoverOverAndClick();
    }

    static async verifyCasesListDisplayed() {
        await PageHelper.switchToiFrame(CommonPage.iframeStyleIFrame);
        await AccountsPage.accountsElements.casesListTable.verifyDisplayedStatus();
    }

    static async verifyCasesPageButtons() {
        await AccountsPage.casePageElements.addCaseButton.verifyDisplayedStatus();
        await AccountsPage.casePageElements.refreshButton.verifyDisplayedStatus();
        await AccountsPage.casePageElements.grouping.verifyDisplayedStatus();
        await AccountsPage.casePageElements.exportToExcel.verifyDisplayedStatus();
        await AccountsPage.casePageElements.exportToWord.verifyDisplayedStatus();
    }

    static async verifyCasesTableColumns() {
        await AccountsPage.casePageElements.caseTableColumns.category.scrollToElement();
        await AccountsPage.casePageElements.caseTableColumns.category.verifyDisplayedStatus();
        await AccountsPage.casePageElements.caseTableColumns.committed.scrollToElement();
        await AccountsPage.casePageElements.caseTableColumns.committed.verifyDisplayedStatus();
        await AccountsPage.casePageElements.caseTableColumns.contact.scrollToElement();
        await AccountsPage.casePageElements.caseTableColumns.contact.verifyDisplayedStatus();
        await AccountsPage.casePageElements.caseTableColumns.opened.scrollToElement();
        await AccountsPage.casePageElements.caseTableColumns.opened.verifyDisplayedStatus();
        await AccountsPage.casePageElements.caseTableColumns.owner.scrollToElement();
        await AccountsPage.casePageElements.caseTableColumns.owner.verifyDisplayedStatus();
        await AccountsPage.casePageElements.caseTableColumns.priority.scrollToElement();
        await AccountsPage.casePageElements.caseTableColumns.priority.verifyDisplayedStatus();
        await AccountsPage.casePageElements.caseTableColumns.queue.scrollToElement();
        await AccountsPage.casePageElements.caseTableColumns.queue.verifyDisplayedStatus();
        await AccountsPage.casePageElements.caseTableColumns.queueBranch.scrollToElement();
        await AccountsPage.casePageElements.caseTableColumns.queueBranch.verifyDisplayedStatus();
        await AccountsPage.casePageElements.caseTableColumns.status.scrollToElement();
        await AccountsPage.casePageElements.caseTableColumns.status.verifyDisplayedStatus();
        await AccountsPage.casePageElements.caseTableColumns.subCategory.scrollToElement();
        await AccountsPage.casePageElements.caseTableColumns.subCategory.verifyDisplayedStatus();
        await AccountsPage.casePageElements.caseTableColumns.subject.scrollToElement();
        await AccountsPage.casePageElements.caseTableColumns.subject.verifyDisplayedStatus();
        await AccountsPage.casePageElements.caseTableColumns.submitter.scrollToElement();
        await AccountsPage.casePageElements.caseTableColumns.submitter.verifyDisplayedStatus();
        await AccountsPage.casePageElements.caseTableColumns.acct.scrollToElement();
        await AccountsPage.casePageElements.caseTableColumns.acct.verifyDisplayedStatus();
    }

    static async clickOnAddCaseButton() {
        StepLogger.subStep('Click on Add Case button');
        await AccountsPage.casePageElements.addCaseButton.hoverOverAndClick();
    }

    static async navigateToNewCasePage() {
        await HomePage1Helper.navigateToProductionPage();
        await AccountsPageHelper.verifyAccountsListDisplayed();
        await AccountsPageHelper.clickOnAnAccount();
        await AccountsPageHelper.verifyAccountDetailsPageDisplayed();
        await AccountsPageHelper.clickOnCasesTab();
        await AccountsPageHelper.verifyCasesListDisplayed();
        await AccountsPageHelper.verifyCasesPageButtons();
        await AccountsPageHelper.clickOnAddCaseButton();
    }

    static async verifyNewCasePageTitle(tabNumber: number = Constants.number.two) {
        StepLogger.subStep(`Switch to tab ${tabNumber}`);
        await PageHelper.switchToTab(tabNumber);
        await AccountsPage.titles.newCase.verifyDisplayedStatus();
    }

    static async navigateToProductionTabAndOpenAnAccount() {
        await HomePage1Helper.navigateToProductionPage();
        await AccountsPageHelper.verifyAccountsListDisplayed();
        await AccountsPageHelper.clickOnAnAccount();
        await AccountsPageHelper.verifyAccountDetailsPageDisplayed();
    }

    static async clickOnSaveButton() {
        StepLogger.subStep('Click on Save button');
        await AccountsPage.casePageElements.saveButton.hoverOverAndClick();
    }

    static async verifyValidationRequiredFieldMessageDisplayed() {
        await AccountsPage.requiredFieldValidationMessage.verifyDisplayedStatus();
    }

    static async typeCaseSubject(subject: string) {
        StepLogger.subStep(`Type ${subject} in Subject field`);
        await AccountsPage.casePageElements.subject.clearText();
        await AccountsPage.casePageElements.subject.sendKeys(subject);
    }

    static async verifyCaseSubject(subject: string) {
        await AccountsPage.casePageElements.subject.verifyTextBoxContains(subject);
    }

    static async typeDescription(description: string) {
        StepLogger.subStep(`Type ${description} in Description field`);
        await PageHelper.switchToiFrame(CommonPage.mainContentHolhderFrame);
        await AccountsPage.casePageElements.description.clearText();
        await AccountsPage.casePageElements.description.sendKeys(description);
        await PageHelper.switchToDefaultContent();
    }

    static async verifyDescription(description: string) {
        await PageHelper.switchToiFrame(CommonPage.mainContentHolhderFrame);
        const desc = await AccountsPage.casePageElements.description.item.getText();
        await ExpectationHelper.verifyStringEqualTo(desc, description);
        await PageHelper.switchToDefaultContent();
    }

    static async selectCategoryByIndex(index: number) {
        await PageHelper.switchToDefaultContent();
        await AccountsPage.casePageElements.categoryDropdown.scrollToElement();
        await AccountsPage.casePageElements.categoryDropdown.hoverOverAndClick();
        const cat = await AccountsPage.casePageElements.categoryDropdownOptionByIndex(index).getText();
        await AccountsPage.casePageElements.categoryDropdownOptionByIndex(index).hoverOverAndClick();
        return cat;
    }

    static async verifySelectedCategory(expectedValue: string) {
        await AccountsPage.casePageElements.categoryDropdown.verifyDisplayedStatus();
        const selected = await DropDownHelper.getTheSelectedOptionText(AccountsPage.casePageElements.categoryDropdown);
        await ExpectationHelper.verifyStringEqualTo(expectedValue, selected);
    }

    static async selectSubCategoryByIndex(index: number) {
        await PageHelper.switchToDefaultContent();
        StepLogger.subStep(`Select subcategory number ${index}`);
        await AccountsPage.casePageElements.subCategoryDropdown.scrollToElement();
        await AccountsPage.casePageElements.subCategoryDropdown.hoverOverAndClick();
        await AccountsPage.casePageElements.subCategoryDropdownOptionByIndex(index).verifyDisplayedStatus();
        const cat = await AccountsPage.casePageElements.subCategoryDropdownOptionByIndex(index).getText();
        await AccountsPage.casePageElements.subCategoryDropdownOptionByIndex(index).hoverOverAndClick();
        return cat;
    }

    static async verifySelectedSubCategory(expectedValue: string) {
        await AccountsPage.casePageElements.subCategoryDropdown.verifyDisplayedStatus();
        const selected = await DropDownHelper.getTheSelectedOptionText(AccountsPage.casePageElements.subCategoryDropdown);
        await ExpectationHelper.verifyStringValueContain(selected, expectedValue);
    }

    static async selectPriority(priority: string) {
        StepLogger.subStep(`Select ${priority} as Priority`);
        await AccountsPage.casePageElements.priorityDropdown.scrollToElement();
        await AccountsPage.casePageElements.priorityDropdown.verifyDisplayedStatus();
        await DropDownHelper.selectOptionByText(AccountsPage.casePageElements.priorityDropdown, priority);
    }

    static async verifySelectedPriority(priority: string) {
        const selected = await DropDownHelper.getTheSelectedOptionText(AccountsPage.casePageElements.priorityDropdown);
        await ExpectationHelper.verifyStringEqualTo(priority, selected);
    }

    static async selectStatus(status: string) {
        StepLogger.subStep(`Select ${status} as status`);
        await AccountsPage.casePageElements.statusDropdown.scrollToElement();
        await DropDownHelper.selectOptionByText(AccountsPage.casePageElements.statusDropdown, status);
    }

    static async verifySelectedStatus(status: string) {
        const selected = await DropDownHelper.getTheSelectedOptionText(AccountsPage.casePageElements.statusDropdown);
        await ExpectationHelper.verifyStringEqualTo(status, selected);
    }

    static async verifyNoValidationRequiredFieldMessageDisplayed() {
        await AccountsPage.requiredFieldValidationMessage.verifyHiddenStatus();
    }

    static async verifyCaseFromCasesPageDisplayed(subject: string) {
        await PageHelper.switchToTab(Constants.number.one);
        await PageHelper.refreshPage();
        await AccountsPage.sidebarMenu.cases.verifyDisplayedStatus();
        await AccountsPageHelper.clickOnCasesTab();
        await AccountsPageHelper.verifyCasesListDisplayed();
        await AccountsPage.casePageElements.getCaseFromTheListBySubject(subject).verifyDisplayedStatus();
    }

    static async createCase() {
        await AccountsPageHelper.navigateToProductionTabAndOpenAnAccount();
        await AccountsPageHelper.clickOnCasesTab();
        await AccountsPageHelper.verifyCasesListDisplayed();
        await AccountsPageHelper.clickOnAddCaseButton();
        await AccountsPageHelper.verifyNewCasePageTitle();
        const subject = RandomHelper.getRandomString();
        await AccountsPageHelper.typeCaseSubject(subject);
        await AccountsPageHelper.verifyCaseSubject(subject);
        await AccountsPageHelper.typeDescription(RandomHelper.getRandomString());
        await AccountsPageHelper.selectCategoryByIndex(Constants.number.two);
        await AccountsPageHelper.selectSubCategoryByIndex(Constants.number.two);
        await AccountsPageHelper.selectPriority(AccountConstants.priorityValues.escalated);
        await AccountsPageHelper.selectStatus(AccountConstants.status.openWaitingOnUs);
        await AccountsPageHelper.clickOnSaveButton();
        await AccountsPageHelper.verifyNoValidationRequiredFieldMessageDisplayed();
        await AccountsPageHelper.verifyCaseFromCasesPageDisplayed(subject);
        return subject;
    }

    static async verifyGroupingDropdownDisplayed() {
        await AccountsPage.casePageElements.grouping.verifyDisplayedStatus();
    }

    static async selectGroupingOption(option: string) {
        await DropDownHelper.selectOptionByText(AccountsPage.casePageElements.grouping, option);
    }

    static async verifyRecordsGrouped() {
        await AccountsPage.casePageElements.grouptingHeader.verifyDisplayedStatus();
    }

    static async verifyRecordsUngrouped() {
        await AccountsPage.casePageElements.grouptingHeader.verifyHiddenStatus();
    }

    static async clickOnSaveAndAddButton() {
        StepLogger.subStep('Click on Save and Add button');
        await AccountsPage.casePageElements.saveAndAddButton.hoverOverAndClick();
    }

    static async clickOnCloseButton() {
        StepLogger.subStep('Click on Close button');
        await AccountsPage.casePageElements.closeButton.hoverOverAndClick();
    }

    static async verifyWarningMessageDisplayedAndAcceptIt() {
        await AccountsPage.warningMessage.title.verifyDisplayedStatus();
        await browser.executeScript('ResourceOne.PopupManager.notifyCloseEvent(parent);');
        await PageHelper.switchToTab(Constants.number.zero);
    }

    static async verifyPageClosed(expectedNumberOfTabs: number) {
        const num = await PageHelper.getTabsCount();
        await ExpectationHelper.verifyValueEqualTo(num, expectedNumberOfTabs);
    }

    static async selectContactBy(contactBy: string) {
        StepLogger.subStep(`Select ${contactBy} as Contact By`);
        await AccountsPage.casePageElements.contactByDropdown.scrollToElement();
        await DropDownHelper.selectOptionByText(AccountsPage.casePageElements.contactByDropdown, contactBy);
    }

    static async verifySelectedContactByValue(contact: string) {
        const selected = await DropDownHelper.getTheSelectedOptionText(AccountsPage.casePageElements.contactByDropdown);
        await ExpectationHelper.verifyStringEqualTo(contact, selected);
    }

    static async OpenCase() {
        StepLogger.subStep('Open a case');
        await AccountsPage.casePageElements.caseIcon.clickButton();
    }

    static async navigateToCasesPage() {
        await HomePage1Helper.navigateToProductionPage();
        await AccountsPageHelper.verifyAccountsListDisplayed();
        await AccountsPageHelper.clickOnAnAccount();
        await AccountsPageHelper.verifyAccountDetailsPageDisplayed();
        await AccountsPageHelper.clickOnCasesTab();
    }

    static async verifyCasesDisplayedInEditableMode() {
        await PageHelper.switchToTab(Constants.number.two);
        const editable = await AccountsPage.form.getAtttribute('action');
        await ExpectationHelper.verifyStringValueContain(editable, 'PageMethod=Edit');
    }

    static async createCaseAndSwithToFirstBab() {
        await AccountsPageHelper.createCase();
        await PageHelper.switchToFirstTab();
    }

    static async createACaseAndGroupTheCases() {
        await AccountsPageHelper.createCaseAndSwithToFirstBab();
        await AccountsPageHelper.navigateToProductionTabAndOpenAnAccount();
        await AccountsPageHelper.clickOnCasesTab();
        await AccountsPageHelper.verifyCasesListDisplayed();
        await AccountsPageHelper.verifyGroupingDropdownDisplayed();
        await AccountsPageHelper.selectGroupingOption(AccountConstants.groupingOptions.status);
        await AccountsPageHelper.verifyRecordsGrouped();
    }

    static async clickOnCollapseGroupIcon() {
        StepLogger.subStep('Click on Collapse Group icon');
        await AccountsPage.casePageElements.collapseIcon.hoverOverAndClick();
    }

    static async verifygroupCollapsed() {
        await AccountsPage.casePageElements.expandIcon.verifyDisplayedStatus();
    }

    static async clickOnExpandGroupIcon() {
        StepLogger.subStep('Click on Collapse Group icon');
        await AccountsPage.casePageElements.expandIcon.hoverOverAndClick();
    }

    static async verifyAllGroupsExpanded() {
        await AccountsPage.casePageElements.expandIcon.verifyHiddenStatus();
    }

    /**
     * Click 'Tasks' in sidebar on Accounts page
     */
    static async clickTasksInSidebar() {
        await AccountsPage.sidebarMenu.tasks.hoverOverAndClick();
    }

    /**
     * Verify 'Tasks' rows are displayed
     */
    static async verifyTasksAreDisplayed() {
        await PageHelper.executeInIFrame([CommonPage.tasksFramesFrameIFrame], async () => {
            await ExpectationHelper.verifyDisplayedElementFinderArray(AccountsPage.tasks.taskRows);
        });
    }

    /**
     * Click 'Edit' icon on nth task
     * @param index
     */
    static async clickEditIconOnNthTask(index = 0) {
        await PageHelper.executeInIFrame([CommonPage.tasksFramesFrameIFrame], async () => {
            await AccountsPage.tasks.editIcons.clickNthButton(index);
        });
    }

    /**
     * Verify 'Task: *' modal is displayed
     */
    static async verifyEditTaskModalIsDisplayed() {
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await AccountsPage.editTaskModal.title.verifyDisplayedStatus();
        });
    }

    /**
     * Click on 'three dots' icon on EditTask modal
     */
    static async clickOnThreeDotsOnEditTaskModal() {
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await AccountsPage.editTaskModal.threeDots.hoverOverAndClick();
        });
    }

    /**
     * Verify 'History' and 'Delete' buttons are displayed on EditTask modal
     */
    static async verifyHistoryAndDeleteButtonsAreDisplayedOnEditTaskModal() {
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await AccountsPage.editTaskModal.history.verifyDisplayedStatus();
            await AccountsPage.editTaskModal.delete.verifyDisplayedStatus();
        });
    }

    /**
     * Click 'History' on EditTask modal
     */
    static async clickHistoryButtonOnEditTaskModal() {
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await AccountsPage.editTaskModal.history.clickButton();
        });
    }

    /**
     * Verify 'History' modal is displayed
     */
    static async verifyHistoryModalIsDisplayed() {
        await AccountsPage.historyModal.historyTitle.verifyDisplayedStatus();
    }
}

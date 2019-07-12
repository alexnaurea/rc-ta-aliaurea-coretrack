import { StepLogger } from '../../../../core/logger/step-logger';
import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { CommonPage } from '../common/common.po';
import { ContactPage } from '../contact-page/contact-page.po';
import { TasksQueuePage } from '../tasks-queue-page/tasks-queue-page.po';

import { AccountsPage } from './accounts.po';
const cElement = AccountsPage.closeAccount;
export class AccountsTwoPageHelper {

    static async verifyNotesButton() {
        StepLogger.subVerification('Verify Notes page option');
        await PageHelper.executeInIFrame([CommonPage.notesIFrame], async () => {
            await TasksQueuePage.header.grouping.verifyDisplayedStatus();
            await ContactPage.notes.header.addNote.verifyDisplayedStatus();
            await AccountsPage.casePageElements.refreshButton.verifyDisplayedStatus();
            await AccountsPage.casePageElements.exportToExcel.verifyDisplayedStatus();
            await AccountsPage.casePageElements.exportToWord.verifyDisplayedStatus();
            await AccountsPage.noteWindow.viewSelector.verifyDisplayedStatus();
        });
    }

    static async verifySelectView() {
        StepLogger.subVerification('Verify select View');
        await PageHelper.executeInIFrame([CommonPage.notesIFrame], async () => {
            await AccountsPage.noteWindow.viewSelector.verifyDisplayedStatus();
        });
    }

    static async selectViewOption(viewText: string) {
        StepLogger.subStep(`Select ${viewText} View Option`);
        await PageHelper.executeInIFrame([CommonPage.notesIFrame], async () => {
            await DropDownHelper.selectOptionByCssText(AccountsPage.noteWindow.viewSelector, viewText);
        });
    }

    static async verifySelectedViewOption(viewText: string) {
        StepLogger.subVerification(`Verify Selected ${viewText} View Option`);
        await PageHelper.executeInIFrame([CommonPage.notesIFrame], async () => {
            const selectedOption = await DropDownHelper.getTheSelectedOptionText(AccountsPage.noteWindow.viewSelector);
            await ExpectationHelper.verifyStringEqualTo(selectedOption.toLowerCase(), viewText.toLowerCase());
        });
    }

    static async verifyNotesColumn() {
        StepLogger.subVerification('Verify Notes Column');
        await PageHelper.executeInIFrame([CommonPage.notesIFrame], async () => {
            await AccountsPage.noteWindow.note.verifyDisplayedStatus();
            await AccountsPage.noteWindow.relatedEntity.verifyDisplayedStatus();
            await AccountsPage.noteWindow.delete.verifyDisplayedStatus();
        });
    }

    static async verifySelectViewOption() {
        StepLogger.subVerification('Verify View Option');
        await PageHelper.executeInIFrame([CommonPage.notesIFrame], async () => {
            await AccountsPage.noteWindow.viewSelector.verifyDisplayedStatus();
            await AccountsPage.noteWindow.readView.verifyPresentStatus();
            await AccountsPage.noteWindow.listView.verifyPresentStatus();
        });
    }

    static async clickOnCollapseGroupIcon() {
        StepLogger.subStep('Click on Collapse icon');
        await PageHelper.executeInIFrame([CommonPage.notesIFrame], async () => {
            await AccountsPage.casePageElements.collapseIcon.hoverOverAndClick();
        });
    }

    static async verifyGroupCollapsed() {
        StepLogger.subVerification('Verify collapsed group');
        await PageHelper.executeInIFrame([CommonPage.notesIFrame], async () => {
            await AccountsPage.casePageElements.expandIcon.verifyDisplayedStatus();
        });
    }

    static async clickOnExpandGroupIcon() {
        StepLogger.subStep('Click on Expand icon');
        await PageHelper.executeInIFrame([CommonPage.notesIFrame], async () => {
            await AccountsPage.casePageElements.expandIcon.hoverOverAndClick();
        });
    }

    static async verifyGroupExpanded() {
        StepLogger.subVerification('Verify Expanded group');
        await PageHelper.executeInIFrame([CommonPage.notesIFrame], async () => {
            await AccountsPage.casePageElements.expandIcon.verifyHiddenStatus();
        });
    }

    static async clickAccount() {
        await cElement.account.clickLink();
    }
}

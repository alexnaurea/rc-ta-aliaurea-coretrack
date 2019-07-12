import { ElementFinder } from 'protractor';

import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { EndpointHelper } from '../../../components/misc-utils/endpoint-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { CommonPage } from '../common/common.po';
import { Attendee } from '../models/attendee.model';

import { ContactPageHelperExtension } from './contact-page-extension.helper';
import { ContactPage } from './contact-page.po';

export class ContactPageHelper extends ContactPageHelperExtension {

    /**
     * Verify if Contact page is displayed
     * @param toCloseAfterExecution
     * @param clickCloseSnapshot
     */
    static async verifyContactPageIsDisplayed(toCloseAfterExecution = true,
                                              clickCloseSnapshot = false) {
        await PageHelper.executeInNewTab(async () => {
            await ContactPage.overview.information.title.verifyDisplayedStatus();
            if (clickCloseSnapshot) {
                await ContactPage.snapshot.close.clickButton();
            }
        }, 1, toCloseAfterExecution);
    }

    /**
     * Verify if 'Overview' tab is displayed
     */
    static async verifyOverviewTabIsDisplayed() {
        await ContactPage.overview.overviewTab.verifyDisplayedStatus();
    }

    /**
     * Click 'Save' button
     */
    static async clickSaveButton() {
        await ContactPage.header.save.clickButton();
    }

    /**
     * Click 'Profile' tab
     * @param clickCloseSnapshot
     */
    static async clickProfileTab(clickCloseSnapshot = false) {
        if (clickCloseSnapshot) {
            await this.closeSnapshotModal();
        }
        await ContactPage.overview.profile.profileTab.clickLink();
    }

    /**
     * Verify if Snapshot modal is displayed
     * @param toCloseAfterExecution
     */
    static async verifySnapshotModalIsDisplayed(toCloseAfterExecution = true) {
        await PageHelper.executeInNewTab(async () => {
            await ContactPage.snapshot.title.verifyDisplayedStatus();
        }, 1, toCloseAfterExecution);

    }

    /**
     * Click 'X' to close Snapshot modal
     */
    static async closeSnapshotModal() {
        await ContactPage.snapshot.close.clickButton();
    }

    /**
     * Verify if 'Profile' tab is displayed
     */
    static async verifyProfileTabIsDisplayed() {
        await ContactPage.overview.profile.outsideAccounts.verifyDisplayedStatus();
    }

    /**
     * Verify 'OutsideAccounts' table is displayed
     */
    static async verifyOutsideAccountsTableIsDisplayed() {
        const { outsideAccountsTableRows } = ContactPage.overview.profile;
        await ExpectationHelper.verifyElementsCountToBeEqualOrGreaterThan(outsideAccountsTableRows,
            1);
        await outsideAccountsTableRows.item.each(async (e: ElementFinder) => {
            await ExpectationHelper.verifyDisplayedElementFinder(e, outsideAccountsTableRows.name);
        });
    }

    /**
     * Click 'Add Account' button on Overview tab
     */
    static async clickAddAccount() {
        await ContactPage.overview.profile.addAccount.clickButton();
    }

    /**
     * Verify if 'NewOutsideAccount' modal is displayed
     */
    static async verifyNewOutsideAccountModalIsDisplayed() {
        await ContactPage.newOutsideAccount.title.verifyDisplayedStatus();
    }

    /**
     * Click 'Relationship' tab
     */
    static async clickRelationshipTab() {
        await ContactPage.sidebar.relationship.clickButton();
    }

    /**
     * Verify 'Relationship' tab is displayed
     */
    static async verifyRelationshipTabIsDisplayed() {
        const { topBar } = ContactPage.relationship;
        await topBar.lostAccounts.verifyDisplayedStatus();
        await topBar.lostPipelines.verifyDisplayedStatus();
        await topBar.pipelines.verifyDisplayedStatus();
        await topBar.products.verifyDisplayedStatus();
        await topBar.services.verifyDisplayedStatus();
        await topBar.summary.verifyDisplayedStatus();
    }

    /**
     * Verify Summary tab is selected on Relationship pane
     */
    static async verifySummaryTabIsSelected() {
        const classValue = await ContactPage.relationship.topBar.summary
            .getAtttribute(HtmlHelper.attributes.class);
        await ExpectationHelper.verifyStringValueContain(classValue,
            HtmlHelper.attributes.selected);
    }

    /**
     * Verify options displayed under Summary tab in Relationship pane
     */
    static async verifySummaryTabOptionsDisplayedInRelationshipPane() {
        const { sections } = ContactPage.relationship;
        await sections.opportunities.verifyDisplayedStatus();
        await sections.accounts.verifyDisplayedStatus();
        await sections.services.verifyDisplayedStatus();
        await sections.lostOpportunities.verifyDisplayedStatus();
        await sections.closedAccounts.verifyDisplayedStatus();
        await sections.overviewOptions.verifyDisplayedStatus();
    }

    /**
     * Verify table headers displayed under 'AccountsAndOpportunities' section of Summary tab
     */
    static async verifyAccountsAndOpportunitiesOptionsUnderSummaryTab() {
        const { tableHead } = ContactPage.relationship.summary.accountAndOpportunities.opportunities;
        await tableHead.tools.verifyDisplayedStatus();
        await tableHead.productType.verifyDisplayedStatus();
        await tableHead.product.verifyDisplayedStatus();
        await tableHead.amount.verifyDisplayedStatus();
        await tableHead.owner.verifyDisplayedStatus();
        await tableHead.status.verifyDisplayedStatus();
        await tableHead.forecast.verifyDisplayedStatus();
        await tableHead.referrer.verifyDisplayedStatus();
        await tableHead.outside.verifyDisplayedStatus();
        await tableHead.modified.verifyDisplayedStatus();
    }

    /**
     * Click 'Related Contacts' tab in sidebar
     */
    static async clickRelatedContactsTabInSidebar() {
        await ContactPage.sidebar.relatedContacts.hoverOverAndClick();
    }

    /**
     * verify if 'RelatedContacts' page is displayed
     */
    static async verifyRelatedContactsPageIsDisplayed() {
        const { header } = ContactPage.relatedContacts;
        await header.relatedContactsTab.verifyDisplayedStatus();
        await header.portfolio.verifyDisplayedStatus();
    }

    /**
     * Click 'Notes' tab in sidebar
     */
    static async clickNotesTabInSidebar() {
        await ContactPage.sidebar.notes.hoverOverAndClick();
    }

    /**
     * Verify if 'Notes' page is displayed
     */
    static async verifyNotesPageIsDisplayed() {
        await PageHelper.executeInIFrame([CommonPage.notesIFrame], async () => {
            await ContactPage.notes.header.addNote.verifyDisplayedStatus();
        });
    }

    /**
     * Click 'Events' tab in sidebar
     */
    static async clickEventsTabInSidebar() {
        await ContactPage.sidebar.events.hoverOverAndClick();
    }

    /**
     * Verify if 'Events' page is displayed
     */
    static async verifyEventsPageIsDisplayed() {
        await PageHelper.executeInIFrame([CommonPage.eventsIFrame], async () => {
            await ContactPage.events.header.addEvent.verifyDisplayedStatus();
        });
    }

    /**
     * Click 'Tasks' tab in sidebar
     */
    static async clickTasksTabInSidebar() {
        await ContactPage.sidebar.tasks.hoverOverAndClick();
    }

    /**
     * Verify if 'Tasks' page is displayed
     */
    static async verifyTasksPageIsDisplayed() {
        await PageHelper.executeInIFrame([CommonPage.tasksIFrame], async () => {
            await ContactPage.tasks.header.addTask.verifyDisplayedStatus();
        });
    }

    /**
     * Click 'Attachments' tab in sidebar
     */
    static async clickAttachmentsTabInSidebar() {
        await ContactPage.sidebar.attachments.hoverOverAndClick();
    }

    /**
     * Verify if 'Attachments' page is displayed
     */
    static async verifyAttachmentsPageIsDisplayed() {
        await PageHelper.executeInIFrame([CommonPage.attachmentsIFrame], async () => {
            await ContactPage.attachments.header.addAttachments.verifyDisplayedStatus();
        });
    }

    /**
     * Click 'Add Note' under opportunities
     * @param index
     */
    static async clickAddNoteUnderOpportunities(index?: number) {
        const { addNoteButtons } = ContactPage.relationship.summary.opportunities;
        if (index) {
            await addNoteButtons.clickNthButton(index);
        } else {
            await addNoteButtons.clickFirstButton();
        }
    }

    /**
     * Verify if 'New Note' modal is displayed
     */
    static async verifyNewNoteModalIsDisplayed() {
        await ContactPage.newNoteModal.newNoteTitle.verifyDisplayedStatus();
    }

    /**
     * Enter subject on 'New Note' modal
     * @param text
     * @param sendEnter
     */
    static async enterSubjectOnNewNoteModal(text: string, sendEnter: boolean = false) {
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ContactPage.newNoteModal.subject.sendKeys(text, sendEnter);
        });
    }

    /**
     * Enter text on 'New Note' modal
     * @param text
     * @param sendEnter
     */
    static async enterTextOnNewNoteModal(text: string, sendEnter: boolean = false) {
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal, CommonPage.contentIFrame], async () => {
            await ContactPage.newNoteModal.text.sendKeys(text, sendEnter);
        });
    }

    /**
     * Click 'Save' on 'New Note' modal
     */
    static async clickSaveOnNewNoteModal() {
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ContactPage.newNoteModal.save.clickButton();
        });
    }

    /**
     * Click 'SaveAndClose' on 'New Note' modal
     */
    static async clickSaveAndCloseOnNewNoteModal() {
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ContactPage.newNoteModal.saveAndClose.clickButton();
        });
    }

    /**
     * Verify Note is saved and modal is closed
     */
    static async verifyNoteIsSavedAndModalIsClosed() {
        await ExpectationHelper.verifyHiddenStatus(ContactPage.newNoteModal.subject);
    }

    /**
     * Click 'AddEvent' under Opportunities section
     * @param index
     */
    static async clickAddEventUnderOpportunities(index?: number) {
        const { addEventButtons } = ContactPage.relationship.summary.opportunities;
        if (index) {
            await addEventButtons.clickNthButton(index);
        } else {
            await addEventButtons.clickFirstButton();
        }
    }

    /**
     * Verify 'NewEvent' modal is displayed
     */
    static async verifyNewEventModalIsDisplayed() {
        await ContactPage.newEventModal.newEventTitle.verifyDisplayedStatus();
    }

    /**
     * Click 'AttendeeSelect' on NewEvent modal
     */
    static async clickAttendeeSelectOnNewEventModal() {
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnModal], async () => {
            await ContactPage.newEventModal.addAttendee.addAttendeeButton.clickButton();
        });
    }

    /**
     * Verify 'AddAttendee' page is displayed
     */
    static async verifyAddAttendeePageIsDisplayed() {
        await ContactPage.newEventModal.addAttendee.addAttendeeModal.verifyDisplayedStatus();
    }

    /**
     * Enter search criteria on AddAttendee modal
     * @param attendee
     */
    static async enterSearchCriteriaOnAddAttendeeModal(attendee: Attendee = Attendee.buildAttendee()) {
        const { addAttendee } = ContactPage.newEventModal;
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnAddAttendeeModal], async () => {
            await addAttendee.firstName.sendKeysIfTextIsDefined(attendee.firstName);
            await addAttendee.lastName.sendKeysIfTextIsDefined(attendee.lastName);
        });
    }

    /**
     * Click 'Search' on AddAttendee modal
     */
    static async clickSearchOnAddAttendeeModal() {
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnAddAttendeeModal], async () => {
            await ContactPage.newEventModal.addAttendee.search.clickButton();
        });
    }

    /**
     * Verify Search results are returned by specific criteria
     */
    static async verifySearchResultsOnAddAttendeeModal() {
        const { availableAttendees } = ContactPage.newEventModal.addAttendee;
        await PageHelper.executeInIFrame([CommonPage.contentIFrameOnAddAttendeeModal], async () => {
            await ExpectationHelper.verifyElementsCountToBeEqualOrGreaterThan(availableAttendees,
                1);
        });
    }

    /**
     * Click 'AddTask' under Opportunities section
     * @param index
     */
    static async clickAddTaskUnderOpportunities(index?: number) {
        const { addTaskButtons } = ContactPage.relationship.summary.opportunities;
        if (index) {
            await addTaskButtons.clickNthButton(index);
        } else {
            await addTaskButtons.clickFirstButton();
        }
    }

    /**
     * Verify NewTask modal is displayed
     */
    static async verifyNewTaskModalIsDisplayed() {
        await ContactPage.newTaskModal.newTaskTitle.verifyDisplayedStatus();
    }

    static async verifyOverviewIsDisplayed(toCloseAfterExecution = true) {
        StepLogger.subVerification('Verify OverView Tab');
        await PageHelper.executeInNewTab(async () => {
            await ContactPage.overview.overviewTab.verifyDisplayedStatus();
        }, 1, toCloseAfterExecution);
    }

    static async verifySnapshotModal(toCloseAfterExecution = true) {
        StepLogger.subVerification('Verify SnapShot Modal');
        let isPresent = false;
        await PageHelper.executeInNewTab(async () => {
            // wait for page to load;
            await WaitHelper.sleep(PageHelper.timeout.m);
            isPresent = await ContactPage.snapshot.close.item.isPresent();
            if (isPresent) {
                await ContactPage.snapshot.title.verifyDisplayedStatus();
            }
        }, 1, toCloseAfterExecution);
        return isPresent;
    }

    static async closeSnapshot(isPresent = true) {
        StepLogger.subStep('Click Close');
        if (isPresent) {
            await ContactPage.snapshot.close.clickButton();
        }
    }

    static async verifyAccountSection() {
        StepLogger.subVerification('Verify Account Section');
        const { sections } = ContactPage.relationship;
        await sections.accountSection.verifyPresentStatus();
    }

    static async verifyOpportunitiesSection() {
        StepLogger.subVerification('Verify Opportunites Section');
        const { sections } = ContactPage.relationship;
        await sections.opportunitiesSection.verifyDisplayedStatus();
    }

    static async verifyServiceSection() {
        StepLogger.subVerification('Verify Service Section');
        const { sections } = ContactPage.relationship;
        await sections.servicesSection.verifyDisplayedStatus();
    }

    static async verifyClosedAccountsSection() {
        StepLogger.subVerification('Verify Closed Account Section');
        const { sections } = ContactPage.relationship;
        await sections.closedAccountsSection.verifyDisplayedStatus();
    }

    static async verifyOverviewOptionsSection() {
        StepLogger.subVerification('Verify OverView Section');
        const { sections } = ContactPage.relationship;
        await sections.overviewOptions.verifyDisplayedStatus();
    }

    /**
     * Click 'Add Account' button on Relationship tab beside 'Accounts' section
     */
    static async clickAddAccountOnRelationshiptab() {
        await ContactPage.relationship.summary.accounts.addAccount.clickButton();
    }

    /**
     * Verify Cell is displayed in Accounts table on Relationship window
     * @param acctNumber
     * @param toCloseAfterExecution
     */
    static async verifyNewlyCreatedAccountDisplayedUnderAccountsSection(acctNumber: string, toCloseAfterExecution = true, ) {
        await PageHelper.executeInNewTab(async () => {
            await ContactPage.relationship.summary.accounts.specificCell(acctNumber).verifyDisplayedStatus();
        }, 1, toCloseAfterExecution);
    }

    url(): string {
        return EndpointHelper.contact;
    }
}

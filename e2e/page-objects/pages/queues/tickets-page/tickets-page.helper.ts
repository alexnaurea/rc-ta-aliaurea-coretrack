import { TicketsPageConstant } from './tickets-page.constants';
import { TicketsPage } from './tickets-page.po';

const { elementNames: eNames } = TicketsPageConstant;

export class TicketsPageHelper {

    /**
     * Verify 'Ticket Queue' page is displayed
     */
    static async verifyTicketQueuePageIsDisplayed() {
        await TicketsPage.header.title.verifyContainsText(eNames.ticketQueue);
    }

    static async verifySearchUserDialogIsDisplayed() {
        await TicketsPage.header.dialogTitle.verifyContainsText(eNames.selectUser);
    }

    static async clickOnFirstTicket() {
        await TicketsPage.firstTicket.clickLink();
    }

    static async clickOwnerSearch() {
        await TicketsPage.ownerSearch.clickLink();
    }

    static async verifySearchQueueDialogIsDisplayed() {
        await TicketsPage.header.dialogTitle.verifyContainsText(eNames.selectQueue);
    }

    static async clickOwnerQueues() {
        await TicketsPage.ownerQueues.clickLink();
    }

    static async verifyDetailsTabSelected() {
        await TicketsPage.selectedDetailsTab.verifyDisplayedStatus();
    }
}

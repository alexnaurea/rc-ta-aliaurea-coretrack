import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { ExpectationHelper } from '../../../../components/misc-utils/expectation-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';
import { TicketCategoriesHelper } from '../../administration/service-center/ticket-categories/ticket-categories.helper';
import { HomePageHelper } from '../../home-page/home-page.helper';

import { TicketsPage } from './tickets.po';

const { executeInNewTab } = PageHelper;

export class TicketsHelper {

    static async verifyTicketsPageDisplayed() {
        await TicketsPage.title.verifyDisplayedStatus();
    }

    static async clickAddTicket(switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(TicketsPage.resourceOneIFrame);
        }

        await TicketsPage.buttons.addTicket.clickButton();
    }

    static async verifyNewTicketPage() {
        await executeInNewTab(async () => {
            await TicketsPage.newTicketWindow.title.verifyDisplayedStatus();
        }, 1, false);
    }

    static async clickSearchCategory() {
        await TicketsPage.newTicketWindow.searchCategoryBtn.clickButton();
    }

    static async verifySelectCategoryDialog() {
        await PageHelper.switchToDefaultContent();
        await TicketsPage.newTicketWindow.selectCategoryTitle.verifyDisplayedStatus();
    }

    static async selectCategoryAndClickSelect(category: string) {
        const { newTicketWindow } = TicketsPage;

        await PageHelper.switchToiFrame(newTicketWindow.categoryFrame);
        await newTicketWindow.categoryItem(category).clickButton();
        await newTicketWindow.selectCategory.clickButton();
        return category;
    }

    static async verifySelectedCategory(category: string, switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContent();
        }
        const current = await TicketsPage.newTicketWindow.category.getAtttribute(HtmlHelper.attributes.value);
        await ExpectationHelper.verifyStringValueContain(current, category);
    }

    static async navigateToTicketCategories() {
        StepLogger.subStep('Navigate to Ticket Categories');
        await PageHelper.switchToFirstTab();
        await PageHelper.switchToDefaultContent();
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.verifyOptionsUnderAdministration();
        await HomePageHelper.clickServiceCenterUnderAdministration();
        await HomePageHelper.verifyOptionsUnderServiceCenter();
        await HomePageHelper.clickTicketCategoriesUnderServiceCenterUnderAdministration();
        await TicketCategoriesHelper.verifyTicketCategoriesPageDisplayed();
    }
}

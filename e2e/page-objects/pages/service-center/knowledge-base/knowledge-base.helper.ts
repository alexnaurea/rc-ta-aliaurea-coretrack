import { StepLogger } from '../../../../../core/logger/step-logger';
import { ExpectationHelper } from '../../../../components/misc-utils/expectation-helper';

import { KnowledgeBase1Page } from './knowledge-base.po';

export class KnowledgeBase1Helper {

    static async verifyKnowledgeBasePageDisplayed() {
        await KnowledgeBase1Page.title.verifyDisplayedStatus();
    }

    static async verifyCategoriesPageTitleDisplayed() {
        StepLogger.subVerification('Verify Categories page title displayed');
        await KnowledgeBase1Page.categoriesTitle.verifyDisplayedStatus();
    }

    static async clickBaseCategory(category: string) {
        await KnowledgeBase1Page.tiles.tileCategory(category).clickButton();
    }

    static async verifyBaseCategory(category: string) {
        StepLogger.subVerification('Verify base category tile displayed');
        await KnowledgeBase1Page.tiles.tileCategory(category).verifyDisplayedStatus();
    }

    static async verifyKnowledgeBaseRecord(name: string, category: string, description: string) {
        const { articles } = KnowledgeBase1Page;
        await articles.title(category).verifyDisplayedStatus();
        await articles.itemName(name).verifyDisplayedStatus();
        await articles.itemDesc(description).verifyDisplayedStatus();
        await articles.createdByUser.verifyDisplayedStatus();
        await articles.createdDated.verifyDisplayedStatus();
    }

    static async clickKnowledgeBase(name: string) {
        await KnowledgeBase1Page.articles.itemName(name).clickButton();
    }

    static async verifyKnowledgeBasePopup(title: string, description: string) {
        const { knowledgeBasePopup } = KnowledgeBase1Page;
        await knowledgeBasePopup.title(title).verifyDisplayedStatus();
        await knowledgeBasePopup.description(description).verifyDisplayedStatus();
    }

    static async clickCloseKnowledgeBasePopup() {
        await KnowledgeBase1Page.knowledgeBasePopup.closeBtn.clickButton();
    }

    static async clickXButtonToClosePopup() {
        StepLogger.subStep('Click "x" button to close the popup');
        await KnowledgeBase1Page.knowledgeBasePopup.xBtn.clickButton();
    }

    static async verifyPopupClosedAndCategoryPage(category: string) {
        await KnowledgeBase1Page.knowledgeBasePopup.popup.verifyDisplayedStatus();
        await KnowledgeBase1Page.articles.title(category).verifyDisplayedStatus();
    }

    static async verifyInactiveKnowledgeBaseRecord(name: string, category: string) {
        await KnowledgeBase1Helper.clickBaseCategory(category);
        await KnowledgeBase1Page.articles.itemName(name).verifyHiddenStatus();
    }

    static async verifySearchTextBoxDisplayed() {
        StepLogger.subVerification('Verify Search Text Box displayed');
        await KnowledgeBase1Page.searchBox.verifyDisplayedStatus();

        const searchBoxPlaceholder = await KnowledgeBase1Page.searchBox.getAtttribute('placeholder');
        await ExpectationHelper.verifyStringEqualTo(searchBoxPlaceholder, 'Search');
    }

    static async search(searchCriteria: string) {
        StepLogger.subStep(`Perform Search for search criteria: ${searchCriteria}`);
        await KnowledgeBase1Page.searchBox.sendKeys(searchCriteria, true);
    }

    static async clickRefreshButton() {
        StepLogger.subStep('Click refresh button');
        await KnowledgeBase1Page.refreshButton.clickButton();
    }

    static async getTotalKnowledgeBaseRecord() {
        StepLogger.subStep('Get total knowledge base record count');
        return await KnowledgeBase1Page.knowledgeBaseArticles.count();
    }

    static async getCreatedDateFromKnowledgeBaseRecords() {
        StepLogger.subStep('Get "Created on date" of all the knowledge base records');

        const totalKnowledgeBaseRecord = await this.getTotalKnowledgeBaseRecord();
        const createdOnDateMonth: number[] = [];

        for (let i = 0; i < totalKnowledgeBaseRecord; i++) {
            const createdOnDateString = await KnowledgeBase1Page.getKnowledgeBaseArticleCreatedOnDate(i).getText();
            const createdDateString = createdOnDateString.split(' ')[1];
            const month = createdDateString.split('/')[0];
            createdOnDateMonth.push(+month);
        }

        return createdOnDateMonth;
    }

    static async verifyKnowledgeBaseRecordsAreSortedInCreatedOnDateAscendingOrder() {
        StepLogger.subVerification('Verify if knowledge base records are sorted in an ascending order of Created date');

        let flag = true;
        const createdOnDateMonthArray = await this.getCreatedDateFromKnowledgeBaseRecords();

        for (let i = 1; i < createdOnDateMonthArray.length; i++) {
              if (createdOnDateMonthArray[i] > createdOnDateMonthArray[i + 1]) {
                flag = false;
                break;
              }
        }

        await ExpectationHelper.verifyBooleanEqualTo(flag, true);
    }
}

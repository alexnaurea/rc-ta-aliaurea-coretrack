import { DropDownHelper } from '../../../../../components/html/dropdown-helper';
import { PageHelper } from '../../../../../components/html/page-helper';
import { WaitHelper } from '../../../../../components/html/wait-helper';
import { ExpectationHelper } from '../../../../../components/misc-utils/expectation-helper';
import { CommonPage } from '../../../common/common.po';

import { ProcessingLogPage } from './processing-log.po';

export class ProcessingLogHelper {
    static async verifyProcessingLogPageDisplayed() {
        await ProcessingLogPage.applicationStatusPage.verifyDisplayedStatus();
    }

    static async clickTimeFilterDdl() {
        await PageHelper.executeInIFrame([CommonPage.xComponentsIFrame], async () => {
            await ProcessingLogPage.filters.timeDdl.clickLink();
        });
    }

    static async setFilterTimeOption(filterOption: string) {
        await this.clickTimeFilterDdl();
        await this.clickOnTimeFilterOption(filterOption);
    }

    static async clickOnTimeFilterOption(filterOption: string) {
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await WaitHelper.waitForElementToBeDisplayed(
                ProcessingLogPage.filters.timeFilterOption(filterOption).item);
            await DropDownHelper.selectOptionByText(
                ProcessingLogPage.filters.timeFilterOption(filterOption), filterOption);
        });
    }

    static async verifyTimeFilterOptionSelected(filterOption: string) {
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            const optionName = await DropDownHelper.getTheSelectedOptionText(ProcessingLogPage.filters.timeDdl);
            await ExpectationHelper.verifyStringEqualTo(optionName, filterOption);
        });
    }

    static async clickGroupingFilterDdl() {
        await ProcessingLogPage.filters.groupingDdl.clickLink();
    }

    static async setFilterGroupingOption(filterOption: string) {
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await WaitHelper.waitForElementToBeDisplayed(
                ProcessingLogPage.filters.groupingFilterOption(filterOption).item);
            await DropDownHelper.selectOptionByText(
                ProcessingLogPage.filters.groupingFilterOption(filterOption),
                filterOption);
        });
    }

    static async verifyGroupingFilterOptionSelected(filterOption: string) {
        await PageHelper.executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            const optionName = await DropDownHelper.getTheSelectedOptionText(ProcessingLogPage.filters.groupingDdl);
            await ExpectationHelper.verifyStringEqualTo(optionName, filterOption);
        });
    }

    static async clickNextArrow() {
        await PageHelper.executeInIFrame([CommonPage.xComponentsIFrame], async () => {
            await ProcessingLogPage.pagination.nextPage.clickLink();
        });
    }

    static async clickPreviousArrow() {
        await PageHelper.executeInIFrame([CommonPage.xComponentsIFrame], async () => {
            await ProcessingLogPage.pagination.previousPage.clickLink();
        });
    }

    static async clickPageNumber(pageNumber: string) {
        await PageHelper.executeInIFrame([CommonPage.xComponentsIFrame], async () => {
            await ProcessingLogPage.pagination.pageNumberAnchor(pageNumber).clickLink();
        });
    }

    static async clickOnRefresh() {
        await PageHelper.executeInIFrame([CommonPage.xComponentsIFrame], async () => {
            await ProcessingLogPage.buttons.refresh.clickLink();
        });
    }

    static async verifySelectedPageNumber(selectedPageNumber: string) {
        await PageHelper.executeInIFrame([CommonPage.xComponentsIFrame], async () => {
            await ProcessingLogPage.pagination.pageNumberSelected(selectedPageNumber).verifyDisplayedStatus();
        });
    }
}

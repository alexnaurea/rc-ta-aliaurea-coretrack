import { StepLogger } from '../../../../../core/logger/step-logger';
import { AlertHelper } from '../../../../components/html/alert-helper';
import { PageHelper } from '../../../../components/html/page-helper';
import { Constants } from '../../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../../components/misc-utils/expectation-helper';
import { ReferralSourcesPage } from '../../administration/configuration/referral-sources/referral-sources.po';
import { ProcessingLogPage } from '../../administration/system/processing-log/processing-log.po';
import { HomePage } from '../../home-page/home-page.po';
import { ReportWriterReportsPage } from '../report-writer-reports-page.po';

import { YearQuartersPageConstants } from './year-quarters-page.constants';
import { YearQuartersPage } from './year-quarters-page.po';

export class YearQuartersPageHelper {

    static async clickYearlyQuarter() {
        StepLogger.subStep('Click On Year Quarter');
        await PageHelper.click(ReportWriterReportsPage.getDivText(YearQuartersPageConstants.yearTableHeader.yearlyQuarters));
    }

    static async verifyYearlyQuarterDisplaced() {
        StepLogger.subVerification('Verify Year Quarter Displayed');
        await ReportWriterReportsPage.getDivText(YearQuartersPageConstants.yearTableHeader.yearlyQuarters).verifyDisplayedStatus();
    }

    static async verifyYearColumnReporterPage() {
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        StepLogger.subVerification(' Action  should be displayed');
        await ReportWriterReportsPage.getCoulumn(YearQuartersPageConstants.yearTableHeader.action).verifyDisplayedStatus();
        StepLogger.subVerification(' year  should be displayed');
        await ReportWriterReportsPage.getCoulumn(YearQuartersPageConstants.yearTableHeader.year).verifyDisplayedStatus();
        StepLogger.subVerification(' quarter  should be displayed');
        await ReportWriterReportsPage.getCoulumn(YearQuartersPageConstants.yearTableHeader.quarter).verifyDisplayedStatus();
        StepLogger.subVerification(' begin should be displayed');
        await ReportWriterReportsPage.getCoulumn(YearQuartersPageConstants.yearTableHeader.begin).verifyDisplayedStatus();
        StepLogger.subVerification(' end should be displayed');
        await ReportWriterReportsPage.getCoulumn(YearQuartersPageConstants.yearTableHeader.end).verifyDisplayedStatus();
    }

    static async verifyTableButtons() {
        StepLogger.subVerification('verify tab Buttons');
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        StepLogger.subVerification('verify tab new quarter');
        await YearQuartersPage.newQuarter.verifyDisplayedStatus();
        StepLogger.subVerification('verify tab duplicate');
        await YearQuartersPage.duplicateYear.verifyDisplayedStatus();
    }

    static async verifyPaginationDisplayed() {
        StepLogger.subVerification('verify Pagination displayed');
        await YearQuartersPage.pagination.verifyDisplayedStatus();
    }

    static async verifyPageSizeDisplayed() {
        StepLogger.subVerification('verify PageSize displayed');
        await YearQuartersPage.pageSize.verifyDisplayedStatus();
    }

    static async verifyEditDisplayed() {
        StepLogger.subVerification('verify edit displayed');
        await YearQuartersPage.editIcon.verifyDisplayedStatus();
    }

    static async clickEdit() {
        StepLogger.subStep('click edit button');
        await YearQuartersPage.editIcon.clickLink();
    }

    static async verifyEditFormisplayed() {
        StepLogger.subVerification('verify edit form button');
        await YearQuartersPage.editForm.verifyDisplayedStatus();
    }

    static async verifyQuarterDropDisplayed() {
        StepLogger.subVerification('verify Quarter Drop displayed');
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        await YearQuartersPage.quarterDropDown.verifyDisplayedStatus();
    }

    static async selectValueFromQuarterDrop() {
        StepLogger.subStep('Select Q2 value from drop down');
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        await YearQuartersPage.quarterDropDown.clickLink();
        await YearQuartersPage.getQuarter(YearQuartersPageConstants.yearTableHeader.Q2);
    }

    static async verifyStartDateDisplayed() {
        StepLogger.subVerification('verify start date displayed');
        await YearQuartersPage.startDate.verifyDisplayedStatus();
        StepLogger.subVerification('verify end date displayed');
        await YearQuartersPage.endDate.verifyDisplayedStatus();
    }

    static async setStartAndEndDate() {
        const today = new Date();
        const startDate = new Date(today.setDate(today.getDate() + Constants.number.two)).toLocaleDateString();
        const endDate = new Date(today.setDate(today.getDate() + Constants.number.four)).toLocaleDateString();
        StepLogger.subStep('set start date');
        await YearQuartersPage.startDate.sendKeys(startDate, true);
        StepLogger.subStep('set end date');
        await YearQuartersPage.endDate.sendKeys(endDate, true);
    }

    static async clickCancelButton() {
        StepLogger.subStep('click Cancel Button');
        await YearQuartersPage.cancelButton.clickLink();
    }

    static async verifyEditFormNotDisplayed() {
        StepLogger.subVerification('verify edit form displayed');
        await YearQuartersPage.editForm.verifyHiddenStatus();
    }

    static async verifyYearFieldDisplayed() {
        StepLogger.subVerification('verify year field displayed');
        await YearQuartersPage.yearField.verifyDisplayedStatus();
    }

    static async setYearField() {
        StepLogger.subStep('set year value');
        const today = new Date();
        await YearQuartersPage.yearField.sendKeys(`${today.getFullYear() + Constants.number.two}`);
    }

    static async clickOkButton() {
        StepLogger.subStep('click ok Button');
        await YearQuartersPage.okButton.clickLink();
    }

    static async verifyYearUpdated() {
        StepLogger.subVerification('Year Updated Successfully');
        const today = new Date();
        await YearQuartersPage.lastPage.clickLink();
        await YearQuartersPage.getUpdatedYear(`${today.getFullYear() + Constants.number.two}`).verifyHiddenStatus();
    }

    static async verifyQuarterUpdated(quarter: string) {
        StepLogger.subVerification('Year Updated Successfully');
        await YearQuartersPage.lastPage.clickLink();
        await YearQuartersPage.getUpdatedYear(quarter).verifyHiddenStatus();
    }

    static async setBeginDate() {
        StepLogger.subStep('set begin date');
        const today = new Date();
        const startDate = new Date(today.setDate(today.getDate() + Constants.number.two)).toLocaleDateString();
        await YearQuartersPage.startDate.sendKeys(startDate, true);
    }

    static async verifyBeginDateSet() {
        StepLogger.subStep('verify begin date updated');
        const today = new Date();
        const startDate = new Date(today.setDate(today.getDate() + Constants.number.two)).toLocaleDateString();
        await YearQuartersPage.getUpdatedYear(startDate).verifyHiddenStatus();
    }

    static async setEndDate() {
        StepLogger.subStep('set end date');
        const today = new Date();
        const endDate = new Date(today.setDate(today.getDate() + Constants.number.four)).toLocaleDateString();
        await YearQuartersPage.endDate.sendKeys(endDate, true);
    }

    static async verifyEndDateSet() {
        StepLogger.subStep('verify end date updated');
        const today = new Date();
        const endDate = new Date(today.setDate(today.getDate() + Constants.number.four)).toLocaleDateString();
        await YearQuartersPage.getUpdatedYear(endDate).verifyHiddenStatus();
    }

    static async verifyDeleteIconDisplayed() {
        StepLogger.subVerification('verify delete displayed');
        await YearQuartersPage.deleteIcon.verifyDisplayedStatus();
    }

    static async clickDeleteIcon() {
        StepLogger.subStep('click delete displayed');
        await YearQuartersPage.deleteIcon.clickLink();
    }

    static async verifyDeletePopUp() {
        StepLogger.subVerification('delete popup displayed');
        await ExpectationHelper.verifyBooleanEqualTo(await AlertHelper.isAlertPresent(), true);
    }

    static async cancelDeleteMessage() {
        StepLogger.subStep('Cancel delete Message');
        await AlertHelper.cancelAlert();
    }

    static async verifyMessageDismissed() {
        StepLogger.subVerification('delete popup not displayed');
        await ExpectationHelper.verifyBooleanEqualTo(await AlertHelper.isAlertPresent(), false);
    }

    static async acceptDeleteMessage() {
        StepLogger.subStep('accept delete Message');
        await AlertHelper.acceptAlert();
    }

    static async verifyCountIsDeceased() {
        StepLogger.subVerification('get Item Count');
        await YearQuartersPage.getitemsInPage(Constants.number.four.toString());
    }

    static async verifyPaginationButtons() {
        StepLogger.subVerification('Verify All Pagination Buttons');
        await YearQuartersPage.lastPage.verifyDisplayedStatus();
        await YearQuartersPage.firstPage.verifyDisplayedStatus();
        await YearQuartersPage.nextPage.verifyDisplayedStatus();
        await YearQuartersPage.previousPage.verifyDisplayedStatus();
    }

    static async clickLastPage() {
        StepLogger.subStep('Click Last Page');
        await YearQuartersPage.lastPage.verifyDisplayedStatus();
    }

    static async clickFirstPage() {
        StepLogger.subStep('Click First Page');
        await YearQuartersPage.firstPage.verifyDisplayedStatus();
    }

    static async clickNextPage() {
        StepLogger.subStep('Click Next Page');
        await YearQuartersPage.nextPage.verifyDisplayedStatus();
    }

    static async clickPreviousPage() {
        StepLogger.subStep('Click Previous Page');
        await YearQuartersPage.previousPage.verifyDisplayedStatus();
    }

    static async clickPageNumber(selectedPageNumber: string) {
        StepLogger.subStep('Click number Page Page');
        await HomePage.getPageNumberLink(selectedPageNumber).clickLink();
    }

    static async verifySelectedPage(selectedPageNumber: string) {
        StepLogger.subVerification('verify Selected Page');
        await ProcessingLogPage.pagination.pageNumberSelected(selectedPageNumber).verifyDisplayedStatus();
    }

    static async clickNewQuarter() {
        StepLogger.subStep('Click new quarter');
        await YearQuartersPage.newQuarter.clickLink();
    }

    static async verifyCancelButton() {
        StepLogger.subStep('Verify Cancel Button');
        await YearQuartersPage.cancelButton.verifyDisplayedStatus();
    }

    static async verifyOkButton() {
        StepLogger.subStep('verify ok Button');
        await YearQuartersPage.okButton.verifyDisplayedStatus();
    }

    static async clickDuplicateButton() {
        StepLogger.subStep('Click Duplicate Button');
        await YearQuartersPage.duplicateYear.clickLink();
    }

    static async verifyYearDuplicateDisplayed() {
        StepLogger.subVerification('verify Duplicate Drop');
        await YearQuartersPage.yearDuplicate.verifyDisplayedStatus();
    }

    static async verifyDuplicateCancelButton() {
        StepLogger.subVerification('verify Duplicate Cancel');
        await YearQuartersPage.cancelButtonDuplicate.verifyDisplayedStatus();
    }

    static async verifyDuplicateOkButton() {
        StepLogger.subVerification('verify Duplicate OK');
        await YearQuartersPage.okButtonDuplicate.verifyDisplayedStatus();
    }

    static async clickYearDuplicate() {
        StepLogger.subStep('click Duplicate Drop');
        await YearQuartersPage.duplicateYearDropDown.doubleClick();
    }

    static async setYearToDuplicate(year: string) {
        StepLogger.subStep('Click year to duplicate from Drop');
        await YearQuartersPage.getYearToDuplicate(year).clickLink();
    }

    static async fillNewYearValue(year: string) {
        StepLogger.subStep('Fill new year Value');
        await YearQuartersPage.newYear.sendKeys(year);
    }

    static async clickDuplicateCancelButton() {
        StepLogger.subStep('click Duplicate Cancel');
        await YearQuartersPage.cancelButtonDuplicate.clickLink();
    }

    static async clickDuplicateOkButton() {
        StepLogger.subStep('click Duplicate Ok');
        await YearQuartersPage.okButtonDuplicate.clickLink();
    }
}

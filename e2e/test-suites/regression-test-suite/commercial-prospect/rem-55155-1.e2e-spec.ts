import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { CommonPageConstant } from '../../../page-objects/pages/common/common-page.constant';
import { CommonPageHelper } from '../../../page-objects/pages/common/common-page.helper';
import { ContactPageHelper } from '../../../page-objects/pages/contact-page/contact-page.helper';
import { LoginPageHelper } from '../../../page-objects/pages/login-page/login-page.helper';
import { CampaignsConstant } from '../../../page-objects/pages/marketing/campaigns/campaigns.constants';
import { CampaignsPage } from '../../../page-objects/pages/marketing/campaigns/campaigns.po';
import { NewProspectPageHelper } from '../../../page-objects/pages/new-prospect-page/new-prospect-page.helper';
import { ReferralsPageHelper } from '../../../page-objects/pages/referrals/referrals.helper';
import { CasesHelper } from '../../../page-objects/pages/service-center/cases/cases.helper';
import { SuiteNames } from '../../helpers/suite-names';

describe(SuiteNames.regressionSuite, () => {
    let loginPageHelper: LoginPageHelper;

    beforeAll(async () => {
        loginPageHelper = LoginPageHelper.getInstance();
        await PageHelper.maximiseBrowser();
    });

    beforeAll(async () => {
        await loginPageHelper.goTo();
        await LoginPageHelper.loginAsAdmin();
    });

    // Jira References - COTRAC-2439
    it('Verify user can sort the data in Sub Category column in ascending order - [22980569]', async () => {
        // Auto generated by aurea-automation - util on Fri, 28 Jun 2019 06:33:22 GMT

        StepLogger.caseId = 22980569;
        StepLogger.stepId(1);
        StepLogger.step('Click on global search button.');
        await CommonPageHelper.clickOnGlobalSearchButton();
        StepLogger.verification('The Search text field is displayed.');
        await CommonPageHelper.verifyGlobalTextboxDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Select Contacts from the dropdown next to search text field.');
        await CommonPageHelper.selectItemFromGlobalDropdown(CommonPageConstant.names.contact);
        StepLogger.verification('The Contacts option is selected from the dropdown.');
        await CommonPageHelper.verifySelectedItemFromGlobalDropdown(CommonPageConstant.names.contact);

        StepLogger.stepId(3);
        StepLogger.step(`Enter the name of the Commercial Prospect/Contact (Company) on the search
        bar and click on the search button e.g. Manpasand Beverages Ltd`);
        await CommonPageHelper.typeValueInGlobalTextFieldAndClickSearchIcon(CommonPageConstant.testData.manpasandBeveragesLtd);
        StepLogger.verification('The Contact card is displayed on the screen.');
        await ReferralsPageHelper.verifyActivityCardDisplayed(CommonPageConstant.testData.manpasandBeveragesLtd);

        StepLogger.stepId(4);
        StepLogger.step('Click on the Commercial Prospect/Contact (Company) Contact card.');
        await ReferralsPageHelper.clickOnActivityCard(CommonPageConstant.testData.manpasandBeveragesLtd);
        StepLogger.verification('The snapshot window is displayed for the Commercial Prospect/Contact (Company)');
        await ContactPageHelper.verifySnapshotModalIsDisplayed(false);

        StepLogger.stepId(5);
        StepLogger.step('Click on close button on the snapshot window.');
        await ContactPageHelper.closeSnapshotModal();
        StepLogger.verification('The detail of the contact is displayed on a new page with overview tab displayed as default.');
        await ContactPageHelper.verifyContactPageIsDisplayed(false);

        StepLogger.stepId(6);
        StepLogger.step('Click on Cases button in the left side navigation pane.');
        await NewProspectPageHelper.clickCases();
        StepLogger.verification('The screen is refreshed and the Cases information is displayed on the right side pane.');
        await NewProspectPageHelper.verifyCasesPage();

        StepLogger.stepId(7);
        StepLogger.step('Click on Sub Category column to sort the data');
        await CasesHelper.clickOnColumnHeader(CampaignsPage.elements.marketingColumns.subCategory);
        StepLogger.verification('The data in Sub Category column is sorted in ascending order');
        await CasesHelper.verifyRecordsSortedAsc(CampaignsConstant.elementNames.marketingColumns.subCategory);
    });

    // Jira References - COTRAC-2439
    it('Verify user can sort the data in Sub Category column in descending order - [22980581]', async () => {
        // Auto generated by aurea-automation - util on Fri, 28 Jun 2019 06:44:16 GMT

        StepLogger.caseId = 22980581;
        StepLogger.stepId(1);
        StepLogger.step('Click on global search button.');
        await CommonPageHelper.clickOnGlobalSearchButton();
        StepLogger.verification('The Search text field is displayed.');
        await CommonPageHelper.verifyGlobalTextboxDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Select Contacts from the dropdown next to search text field.');
        await CommonPageHelper.selectItemFromGlobalDropdown(CommonPageConstant.names.contact);
        StepLogger.verification('The Contacts option is selected from the dropdown.');
        await CommonPageHelper.verifySelectedItemFromGlobalDropdown(CommonPageConstant.names.contact);

        StepLogger.stepId(3);
        StepLogger.step(`Enter the name of the Commercial Prospect/Contact (Company) on the search
        bar and click on the search button e.g. Manpasand Beverages Ltd`);
        await CommonPageHelper.typeValueInGlobalTextFieldAndClickSearchIcon(CommonPageConstant.testData.manpasandBeveragesLtd);
        StepLogger.verification('The Contact card is displayed on the screen.');
        await ReferralsPageHelper.verifyActivityCardDisplayed(CommonPageConstant.testData.manpasandBeveragesLtd);

        StepLogger.stepId(4);
        StepLogger.step('Click on the Commercial Prospect/Contact (Company) Contact card.');
        await ReferralsPageHelper.clickOnActivityCard(CommonPageConstant.testData.manpasandBeveragesLtd);
        StepLogger.verification('The snapshot window is displayed for the Commercial Prospect/Contact (Company)');
        await ContactPageHelper.verifySnapshotModalIsDisplayed(false);

        StepLogger.stepId(5);
        StepLogger.step('Click on close button on the snapshot window.');
        await ContactPageHelper.closeSnapshotModal();
        StepLogger.verification('The detail of the contact is displayed on a new page with overview tab displayed as default.');
        await ContactPageHelper.verifyContactPageIsDisplayed(false);

        StepLogger.stepId(6);
        StepLogger.step('Click on Cases button in the left side navigation pane.');
        await NewProspectPageHelper.clickCases();
        StepLogger.verification('The screen is refreshed and the Cases information is displayed on the right side pane.');
        await NewProspectPageHelper.verifyCasesPage();

        StepLogger.stepId(7);
        StepLogger.step('Click on Sub Category column to sort the data');
        await CasesHelper.clickOnColumnHeader(CampaignsPage.elements.marketingColumns.subCategory);
        StepLogger.verification('The data in Sub Category column is sorted in ascending order');
        await CasesHelper.verifyRecordsSortedAsc(CampaignsConstant.elementNames.marketingColumns.subCategory, false);

        StepLogger.stepId(8);
        StepLogger.step('Click on Sub Category column to sort the data');
        await CasesHelper.clickOnColumnHeader(CampaignsPage.elements.marketingColumns.subCategory);
        StepLogger.verification('The data in Sub Category column is sorted in descending order');
        await CasesHelper.verifyRecordsSortedAsc(CampaignsConstant.elementNames.marketingColumns.subCategory);
    });
});

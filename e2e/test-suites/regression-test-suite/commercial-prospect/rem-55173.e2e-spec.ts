import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { CommonPageConstant } from '../../../page-objects/pages/common/common-page.constant';
import { CommonPageHelper } from '../../../page-objects/pages/common/common-page.helper';
import { ContactPageHelper } from '../../../page-objects/pages/contact-page/contact-page.helper';
import { LoginPageHelper } from '../../../page-objects/pages/login-page/login-page.helper';
import { CampaignsPageHelper } from '../../../page-objects/pages/marketing/campaigns/campaigns.helper';
import { NewCasePageHelperExtension } from '../../../page-objects/pages/new-case-page/new-case-page.extension.helper';
import { ReferralsPageHelper } from '../../../page-objects/pages/referrals/referrals.helper';
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

    // Jira References - COTRAC-2291
    it('Verify if user shall be able to close the Print modal clicking on "X" button - [22958277]', async () => {
        // Auto generated by aurea-automation - util on Tue, 25 Jun 2019 10:16:11 GMT

        StepLogger.caseId = 22958277;
        StepLogger.stepId(1);
        StepLogger.step('Select Contact in the search dropdown list.');
        await CommonPageHelper.clickOnGlobalSearchButton();
        await CommonPageHelper.selectItemFromGlobalDropdown(CommonPageConstant.names.contact);
        StepLogger.verification('Contact should be selected properly.');
        await CommonPageHelper.verifySelectedItemFromGlobalDropdown(CommonPageConstant.names.contact);

        StepLogger.stepId(2);
        StepLogger.step('Fill the Search input field with text "Manpasand Beverages Ltd" and hit "Enter" button in the keyboard.');
        await CommonPageHelper.typeValueInGlobalTextFieldAndClickSearchIcon(CommonPageConstant.testData.manpasandBeveragesLtd);
        StepLogger.verification('Should display the company contact properly.');
        await ReferralsPageHelper.verifyActivityCardDisplayed(CommonPageConstant.testData.manpasandBeveragesLtd);

        StepLogger.stepId(3);
        StepLogger.step('Click on "Manpasand Beverages Ltd" company card.');
        await ReferralsPageHelper.clickOnActivityCard(CommonPageConstant.testData.manpasandBeveragesLtd);
        StepLogger.verification('Should display the company details screen in a new tab.');
        await ContactPageHelper.verifySnapshotModalIsDisplayed(false);

        StepLogger.stepId(4);
        StepLogger.step('Click on Three Dots menu button.');
        await ContactPageHelper.closeSnapshotModal();
        await NewCasePageHelperExtension.clickMenuButton();
        StepLogger.verification('Should display the options list:-Copy Link To Page-Email Link To Page-Print-History');
        await CampaignsPageHelper.verifyHistoryOptionFromTheDropdown();

        StepLogger.stepId(5);
        StepLogger.step('Click on Print menu button.');
        await CampaignsPageHelper.clickPrint();
        StepLogger.verification('Should display the Print modal screen properly.');
        await CampaignsPageHelper.verifyPrintModalIsDisplayed(false);

        StepLogger.stepId(6);
        StepLogger.step('Click on "X" button.');
        await ContactPageHelper.closeSnapshotModal();
        StepLogger.verification('Should close the Print modal screen properly.');
        await CampaignsPageHelper.verifyPrintModalIsNotDisplayed(true);
    });

    // Jira References - COTRAC-2291
    it('Verify if user shall be able to Print a file with Overview checkboxes checked - [22958285]', async () => {
        // Auto generated by aurea-automation - util on Wed, 26 Jun 2019 07:38:08 GMT

        StepLogger.caseId = 22958285;
        StepLogger.stepId(1);
        StepLogger.step('Select Contact in the search dropdown list.');
        await CommonPageHelper.clickOnGlobalSearchButton();
        await CommonPageHelper.selectItemFromGlobalDropdown(CommonPageConstant.names.contact);
        StepLogger.verification('Contact should be selected properly.');
        await CommonPageHelper.verifySelectedItemFromGlobalDropdown(CommonPageConstant.names.contact);

        StepLogger.stepId(2);
        StepLogger.step('Fill the Search input field with text "Manpasand Beverages Ltd" and hit "Enter" button in the keyboard.');
        await CommonPageHelper.typeValueInGlobalTextFieldAndClickSearchIcon(CommonPageConstant.testData.manpasandBeveragesLtd);
        StepLogger.verification('Should display the company contact properly.');
        await ReferralsPageHelper.verifyActivityCardDisplayed(CommonPageConstant.testData.manpasandBeveragesLtd);

        StepLogger.stepId(3);
        StepLogger.step('Click on "Manpasand Beverages Ltd" company card.');
        await ReferralsPageHelper.clickOnActivityCard(CommonPageConstant.testData.manpasandBeveragesLtd);
        StepLogger.verification('Should display the company details screen in a new tab.');
        await ContactPageHelper.verifySnapshotModalIsDisplayed(false);

        StepLogger.stepId(4);
        StepLogger.step('Click on Three Dots menu button.');
        await ContactPageHelper.closeSnapshotModal();
        await NewCasePageHelperExtension.clickMenuButton();
        StepLogger.verification('Should display the options list:-Copy Link To Page-Email Link To Page-Print-History');
        await CampaignsPageHelper.verifyHistoryOptionFromTheDropdown();

        StepLogger.stepId(5);
        StepLogger.step('Click on Print menu button.');
        await CampaignsPageHelper.clickPrint();
        StepLogger.verification('Should display the Print modal screen properly.');
        await CampaignsPageHelper.verifyPrintModalIsDisplayed(false);

        StepLogger.stepId(6);
        StepLogger.step('Check the checkbox:-Profile');
        await CampaignsPageHelper.checkProfileBox(false);
        StepLogger.verification('Profile Checkbox should be checked properly.');
        await CampaignsPageHelper.verifyCheckProfileBox(false);

        StepLogger.stepId(7);
        StepLogger.step('Click on Print button.');
        await ContactPageHelper.closeSnapshotModal();
        await NewCasePageHelperExtension.clickMenuButton();
        await CampaignsPageHelper.clickPrint();
        StepLogger.verification('Should display the Print screen with the options selected by user.');
        await CampaignsPageHelper.verifyPrintModalIsDisplayed(true);
    });

    // Jira References - COTRAC-2291
    it('Verify if user shall be able to Print a file with Relationship checkboxes checked - [22958287]', async () => {
        // Auto generated by aurea-automation - util on Wed, 26 Jun 2019 09:07:15 GMT

        StepLogger.caseId = 22958287;
        StepLogger.stepId(1);
        StepLogger.step('Select Contact in the search dropdown list.');
        await CommonPageHelper.clickOnGlobalSearchButton();
        await CommonPageHelper.selectItemFromGlobalDropdown(CommonPageConstant.names.contact);
        StepLogger.verification('Contact should be selected properly.');
        await CommonPageHelper.verifySelectedItemFromGlobalDropdown(CommonPageConstant.names.contact);

        StepLogger.stepId(2);
        StepLogger.step('Fill the Search input field with text "Manpasand Beverages Ltd" and hit "Enter" button in the keyboard.');
        await CommonPageHelper.typeValueInGlobalTextFieldAndClickSearchIcon(CommonPageConstant.testData.manpasandBeveragesLtd);
        StepLogger.verification('Should display the company contact properly.');
        await ReferralsPageHelper.verifyActivityCardDisplayed(CommonPageConstant.testData.manpasandBeveragesLtd);

        StepLogger.stepId(3);
        StepLogger.step('Click on "Manpasand Beverages Ltd" company card.');
        await ReferralsPageHelper.clickOnActivityCard(CommonPageConstant.testData.manpasandBeveragesLtd);
        StepLogger.verification('Should display the company details screen in a new tab.');
        await ContactPageHelper.verifySnapshotModalIsDisplayed(false);

        StepLogger.stepId(4);
        StepLogger.step('Click on Three Dots menu button.');
        await ContactPageHelper.closeSnapshotModal();
        await NewCasePageHelperExtension.clickMenuButton();
        StepLogger.verification('Should display the options list:-Copy Link To Page-Email Link To Page-Print-History');
        await CampaignsPageHelper.verifyHistoryOptionFromTheDropdown();
        await CampaignsPageHelper.verifyEmailOptionFromTheDropdown();

        StepLogger.stepId(5);
        StepLogger.step('Click on Print menu button.');
        await CampaignsPageHelper.clickPrint();
        StepLogger.verification('Should display the Print modal screen properly.');
        await CampaignsPageHelper.verifyPrintModalIsDisplayed(false);

        StepLogger.stepId(6);
        StepLogger.step('Check the checkbox:-Relationship');
        await CampaignsPageHelper.checkRelationshipBox(false);
        StepLogger.verification('Should check all checkboxes under Relationship checkbox properly.');
        await CampaignsPageHelper.verifyCheckRelationshipBox(false);

        StepLogger.stepId(7);
        StepLogger.step('Click on Print button.');
        await ContactPageHelper.closeSnapshotModal();
        await NewCasePageHelperExtension.clickMenuButton();
        await CampaignsPageHelper.clickPrint();
        StepLogger.verification('Should display the Print screen with the options selected by user.');
        await CampaignsPageHelper.verifyPrintModalIsDisplayed(true);
    });

    // Jira References - COTRAC-2291
    it('Verify if user shall be able to Print a file with Related Contacts checkboxes checked - [22958288]', async () => {
        // Auto generated by aurea-automation - util on Wed, 26 Jun 2019 09:30:18 GMT

        StepLogger.caseId = 22958288;
        StepLogger.stepId(1);
        StepLogger.step('Select Contact in the search dropdown list.');
        await CommonPageHelper.clickOnGlobalSearchButton();
        await CommonPageHelper.selectItemFromGlobalDropdown(CommonPageConstant.names.contact);
        StepLogger.verification('Contact should be selected properly.');
        await CommonPageHelper.verifySelectedItemFromGlobalDropdown(CommonPageConstant.names.contact);

        StepLogger.stepId(2);
        StepLogger.step('Fill the Search input field with text "Manpasand Beverages Ltd" and hit "Enter" button in the keyboard.');
        await CommonPageHelper.typeValueInGlobalTextFieldAndClickSearchIcon(CommonPageConstant.testData.manpasandBeveragesLtd);
        StepLogger.verification('Should display the company contact properly.');
        await ReferralsPageHelper.verifyActivityCardDisplayed(CommonPageConstant.testData.manpasandBeveragesLtd);

        StepLogger.stepId(3);
        StepLogger.step('Click on "Manpasand Beverages Ltd" company card.');
        await ReferralsPageHelper.clickOnActivityCard(CommonPageConstant.testData.manpasandBeveragesLtd);
        StepLogger.verification('Should display the company details screen in a new tab.');
        await ContactPageHelper.verifySnapshotModalIsDisplayed(false);

        StepLogger.stepId(4);
        StepLogger.step('Click on Three Dots menu button.');
        await ContactPageHelper.closeSnapshotModal();
        await NewCasePageHelperExtension.clickMenuButton();
        StepLogger.verification('Should display the options list:-Copy Link To Page-Email Link To Page-Print-History');
        await CampaignsPageHelper.verifyHistoryOptionFromTheDropdown();
        await CampaignsPageHelper.verifyEmailOptionFromTheDropdown();

        StepLogger.stepId(5);
        StepLogger.step('Click on Print menu button.');
        await CampaignsPageHelper.clickPrint();
        StepLogger.verification('Should display the Print modal screen properly.');
        await CampaignsPageHelper.verifyPrintModalIsDisplayed(false);

        StepLogger.stepId(6);
        StepLogger.step('Check the checkbox:-Related Contacts');
        await CampaignsPageHelper.checkRelatedContactsBox(false);
        StepLogger.verification('Should check all checkboxes under Related Contacts checkbox properly.');
        await CampaignsPageHelper.verifyCheckRelatedContactsBox(false);

        StepLogger.stepId(7);
        StepLogger.step('Click on Print button.');
        await ContactPageHelper.closeSnapshotModal();
        await NewCasePageHelperExtension.clickMenuButton();
        await CampaignsPageHelper.clickPrint();
        StepLogger.verification('Should display the Print screen with the options selected by user.');
        await CampaignsPageHelper.verifyPrintModalIsDisplayed(true);
    });

    // Jira References - COTRAC-2291
    it('Verify if user shall be able to Print a file with Household checkbox checked - [22958289]', async () => {
        // Auto generated by aurea-automation - util on Wed, 26 Jun 2019 09:41:49 GMT

        StepLogger.caseId = 22958289;
        StepLogger.stepId(1);
        StepLogger.step('Select Contact in the search dropdown list.');
        await CommonPageHelper.clickOnGlobalSearchButton();
        await CommonPageHelper.selectItemFromGlobalDropdown(CommonPageConstant.names.contact);
        StepLogger.verification('Contact should be selected properly.');
        await CommonPageHelper.verifySelectedItemFromGlobalDropdown(CommonPageConstant.names.contact);

        StepLogger.stepId(2);
        StepLogger.step('Fill the Search input field with text "Manpasand Beverages Ltd" and hit "Enter" button in the keyboard.');
        await CommonPageHelper.typeValueInGlobalTextFieldAndClickSearchIcon(CommonPageConstant.testData.manpasandBeveragesLtd);
        StepLogger.verification('Should display the company contact properly.');
        await ReferralsPageHelper.verifyActivityCardDisplayed(CommonPageConstant.testData.manpasandBeveragesLtd);

        StepLogger.stepId(3);
        StepLogger.step('Click on "Manpasand Beverages Ltd" company card.');
        await ReferralsPageHelper.clickOnActivityCard(CommonPageConstant.testData.manpasandBeveragesLtd);
        StepLogger.verification('Should display the company details screen in a new tab.');
        await ContactPageHelper.verifySnapshotModalIsDisplayed(false);

        StepLogger.stepId(4);
        StepLogger.step('Click on Three Dots menu button.');
        await ContactPageHelper.closeSnapshotModal();
        await NewCasePageHelperExtension.clickMenuButton();
        StepLogger.verification('Should display the options list:-Copy Link To Page-Email Link To Page-Print-History');
        await CampaignsPageHelper.verifyHistoryOptionFromTheDropdown();
        await CampaignsPageHelper.verifyEmailOptionFromTheDropdown();

        StepLogger.stepId(5);
        StepLogger.step('Click on Print menu button.');
        await CampaignsPageHelper.clickPrint();
        StepLogger.verification('Should display the Print modal screen properly.');
        await CampaignsPageHelper.verifyPrintModalIsDisplayed(false);

        StepLogger.stepId(6);
        StepLogger.step('Check the checkbox:-Household');
        await CampaignsPageHelper.checkHouseholdsBox(false);
        StepLogger.verification('The Household checkbox should be checked properly.');
        await CampaignsPageHelper.verifyCheckHouseholdsBox(false);

        StepLogger.stepId(7);
        StepLogger.step('Click on Print button.');
        await ContactPageHelper.closeSnapshotModal();
        await NewCasePageHelperExtension.clickMenuButton();
        await CampaignsPageHelper.clickPrint();
        StepLogger.verification('Should display the Print screen with the options selected by user.');
        await CampaignsPageHelper.verifyPrintModalIsDisplayed(true);
    });

    // Jira References - COTRAC-2291
    it('Verify if user shall be able to Print a file with Cases checkbox checked - [22958290]', async () => {
        // Auto generated by aurea-automation - util on Wed, 26 Jun 2019 10:02:41 GMT

        StepLogger.caseId = 22958290;
        StepLogger.stepId(1);
        StepLogger.step('Select Contact in the search dropdown list.');
        await CommonPageHelper.clickOnGlobalSearchButton();
        await CommonPageHelper.selectItemFromGlobalDropdown(CommonPageConstant.names.contact);
        StepLogger.verification('Contact should be selected properly.');
        await CommonPageHelper.verifySelectedItemFromGlobalDropdown(CommonPageConstant.names.contact);

        StepLogger.stepId(2);
        StepLogger.step('Fill the Search input field with text "Manpasand Beverages Ltd" and hit "Enter" button in the keyboard.');
        await CommonPageHelper.typeValueInGlobalTextFieldAndClickSearchIcon(CommonPageConstant.testData.manpasandBeveragesLtd);
        StepLogger.verification('Should display the company contact properly.');
        await ReferralsPageHelper.verifyActivityCardDisplayed(CommonPageConstant.testData.manpasandBeveragesLtd);

        StepLogger.stepId(3);
        StepLogger.step('Click on "Manpasand Beverages Ltd" company card.');
        await ReferralsPageHelper.clickOnActivityCard(CommonPageConstant.testData.manpasandBeveragesLtd);
        StepLogger.verification('Should display the company details screen in a new tab.');
        await ContactPageHelper.verifySnapshotModalIsDisplayed(false);

        StepLogger.stepId(4);
        StepLogger.step('Click on Three Dots menu button.');
        await ContactPageHelper.closeSnapshotModal();
        await NewCasePageHelperExtension.clickMenuButton();
        StepLogger.verification('Should display the options list:-Copy Link To Page-Email Link To Page-Print-History');
        await CampaignsPageHelper.verifyHistoryOptionFromTheDropdown();
        await CampaignsPageHelper.verifyEmailOptionFromTheDropdown();

        StepLogger.stepId(5);
        StepLogger.step('Click on Print menu button.');
        await CampaignsPageHelper.clickPrint();
        StepLogger.verification('Should display the Print modal screen properly.');
        await CampaignsPageHelper.verifyPrintModalIsDisplayed(false);

        StepLogger.stepId(6);
        StepLogger.step('Check the checkbox:-Cases');
        await CampaignsPageHelper.checkCaseBox(false);
        StepLogger.verification('The Cases checkbox should be checked properly.');
        await CampaignsPageHelper.verifyCaseBox(false);

        StepLogger.stepId(7);
        StepLogger.step('Click on Print button.');
        await ContactPageHelper.closeSnapshotModal();
        await NewCasePageHelperExtension.clickMenuButton();
        await CampaignsPageHelper.clickPrint();
        StepLogger.verification('Should display the Print screen with the options selected by user.');
        await CampaignsPageHelper.verifyPrintModalIsDisplayed(true);
    });

    // Jira References - COTRAC-2291
    it('Verify if user shall be able to Print a file with Events checkbox checked - [22958291]', async () => {
        // Auto generated by aurea-automation - util on Thu, 27 Jun 2019 07:37:57 GMT

        StepLogger.caseId = 22958291;
        StepLogger.stepId(1);
        StepLogger.step('Select Contact in the search dropdown list.');
        await CommonPageHelper.clickOnGlobalSearchButton();
        await CommonPageHelper.selectItemFromGlobalDropdown(CommonPageConstant.names.contact);
        StepLogger.verification('Contact should be selected properly.');
        await CommonPageHelper.verifySelectedItemFromGlobalDropdown(CommonPageConstant.names.contact);

        StepLogger.stepId(2);
        StepLogger.step('Fill the Search input field with text "Manpasand Beverages Ltd" and hit "Enter" button in the keyboard.');
        await CommonPageHelper.typeValueInGlobalTextFieldAndClickSearchIcon(CommonPageConstant.testData.manpasandBeveragesLtd);
        StepLogger.verification('Should display the company contact properly.');
        await ReferralsPageHelper.verifyActivityCardDisplayed(CommonPageConstant.testData.manpasandBeveragesLtd);

        StepLogger.stepId(3);
        StepLogger.step('Click on "Manpasand Beverages Ltd" company card.');
        await ReferralsPageHelper.clickOnActivityCard(CommonPageConstant.testData.manpasandBeveragesLtd);
        StepLogger.verification('Should display the company details screen in a new tab.');
        await ContactPageHelper.verifySnapshotModalIsDisplayed(false);

        StepLogger.stepId(4);
        StepLogger.step('Click on Three Dots menu button.');
        await ContactPageHelper.closeSnapshotModal();
        await NewCasePageHelperExtension.clickMenuButton();
        StepLogger.verification('Should display the options list:-Copy Link To Page-Email Link To Page-Print-History');
        await CampaignsPageHelper.verifyHistoryOptionFromTheDropdown();
        await CampaignsPageHelper.verifyEmailOptionFromTheDropdown();

        StepLogger.stepId(5);
        StepLogger.step('Click on Print menu button.');
        await CampaignsPageHelper.clickPrint();
        StepLogger.verification('Should display the Print modal screen properly.');
        await CampaignsPageHelper.verifyPrintModalIsDisplayed(false);

        StepLogger.stepId(6);
        StepLogger.step('Check the checkbox:-Events');
        await CampaignsPageHelper.checkEventBox(false);
        StepLogger.verification('The Events checkbox should be checked properly.');
        await CampaignsPageHelper.verifyEventBox(false);

        StepLogger.stepId(7);
        StepLogger.step('Click on Print button.');
        await ContactPageHelper.closeSnapshotModal();
        await NewCasePageHelperExtension.clickMenuButton();
        await CampaignsPageHelper.clickPrint();
        StepLogger.verification('Should display the Print screen with the options selected by user.');
        await CampaignsPageHelper.verifyPrintModalIsDisplayed(true);
    });

    // Jira References - COTRAC-2291
    it('Verify if user shall be able to Print a file with Tasks checkbox checked - [22958292]', async () => {
        // Auto generated by aurea-automation - util on Thu, 27 Jun 2019 07:52:01 GMT

        StepLogger.caseId = 22958292;
        StepLogger.stepId(1);
        StepLogger.step('Select Contact in the search dropdown list.');
        await CommonPageHelper.clickOnGlobalSearchButton();
        await CommonPageHelper.selectItemFromGlobalDropdown(CommonPageConstant.names.contact);
        StepLogger.verification('Contact should be selected properly.');
        await CommonPageHelper.verifySelectedItemFromGlobalDropdown(CommonPageConstant.names.contact);

        StepLogger.stepId(2);
        StepLogger.step('Fill the Search input field with text "Manpasand Beverages Ltd" and hit "Enter" button in the keyboard.');
        await CommonPageHelper.typeValueInGlobalTextFieldAndClickSearchIcon(CommonPageConstant.testData.manpasandBeveragesLtd);
        StepLogger.verification('Should display the company contact properly.');
        await ReferralsPageHelper.verifyActivityCardDisplayed(CommonPageConstant.testData.manpasandBeveragesLtd);

        StepLogger.stepId(3);
        StepLogger.step('Click on "Manpasand Beverages Ltd" company card.');
        await ReferralsPageHelper.clickOnActivityCard(CommonPageConstant.testData.manpasandBeveragesLtd);
        StepLogger.verification('Should display the company details screen in a new tab.');
        await ContactPageHelper.verifySnapshotModalIsDisplayed(false);

        StepLogger.stepId(4);
        StepLogger.step('Click on Three Dots menu button.');
        await ContactPageHelper.closeSnapshotModal();
        await NewCasePageHelperExtension.clickMenuButton();
        StepLogger.verification('Should display the options list:-Copy Link To Page-Email Link To Page-Print-History');
        await CampaignsPageHelper.verifyHistoryOptionFromTheDropdown();
        await CampaignsPageHelper.verifyEmailOptionFromTheDropdown();

        StepLogger.stepId(5);
        StepLogger.step('Click on Print menu button.');
        await CampaignsPageHelper.clickPrint();
        StepLogger.verification('Should display the Print modal screen properly.');
        await CampaignsPageHelper.verifyPrintModalIsDisplayed(false);

        StepLogger.stepId(6);
        StepLogger.step('Check the checkbox:-Tasks');
        await CampaignsPageHelper.checkTaskBox(false);
        StepLogger.verification('The Tasks checkbox should be checked properly.');
        await CampaignsPageHelper.verifyTaskBox(false);

        StepLogger.stepId(7);
        StepLogger.step('Click on Print button.');
        await ContactPageHelper.closeSnapshotModal();
        await NewCasePageHelperExtension.clickMenuButton();
        await CampaignsPageHelper.clickPrint();
        StepLogger.verification('Should display the Print screen with the options selected by user.');
        await CampaignsPageHelper.verifyPrintModalIsDisplayed(true);
    });

    // Jira References - COTRAC-2291
    it('Verify if user shall be able to Print a file with Attachments checkbox checked - [22958293]', async () => {
        // Auto generated by aurea-automation - util on Thu, 27 Jun 2019 08:06:17 GMT

        StepLogger.caseId = 22958293;
        StepLogger.stepId(1);
        StepLogger.step('Select Contact in the search dropdown list.');
        await CommonPageHelper.clickOnGlobalSearchButton();
        await CommonPageHelper.selectItemFromGlobalDropdown(CommonPageConstant.names.contact);
        StepLogger.verification('Contact should be selected properly.');
        await CommonPageHelper.verifySelectedItemFromGlobalDropdown(CommonPageConstant.names.contact);

        StepLogger.stepId(2);
        StepLogger.step('Fill the Search input field with text "Manpasand Beverages Ltd" and hit "Enter" button in the keyboard.');
        await CommonPageHelper.typeValueInGlobalTextFieldAndClickSearchIcon(CommonPageConstant.testData.manpasandBeveragesLtd);
        StepLogger.verification('Should display the company contact properly.');
        await ReferralsPageHelper.verifyActivityCardDisplayed(CommonPageConstant.testData.manpasandBeveragesLtd);

        StepLogger.stepId(3);
        StepLogger.step('Click on "Manpasand Beverages Ltd" company card.');
        await ReferralsPageHelper.clickOnActivityCard(CommonPageConstant.testData.manpasandBeveragesLtd);
        StepLogger.verification('Should display the company details screen in a new tab.');
        await ContactPageHelper.verifySnapshotModalIsDisplayed(false);

        StepLogger.stepId(4);
        StepLogger.step('Click on Three Dots menu button.');
        await ContactPageHelper.closeSnapshotModal();
        await NewCasePageHelperExtension.clickMenuButton();
        StepLogger.verification('Should display the options list:-Copy Link To Page-Email Link To Page-Print-History');
        await CampaignsPageHelper.verifyHistoryOptionFromTheDropdown();
        await CampaignsPageHelper.verifyEmailOptionFromTheDropdown();

        StepLogger.stepId(5);
        StepLogger.step('Click on Print menu button.');
        await CampaignsPageHelper.clickPrint();
        StepLogger.verification('Should display the Print modal screen properly.');
        await CampaignsPageHelper.verifyPrintModalIsDisplayed(false);

        StepLogger.stepId(6);
        StepLogger.step('Check the checkbox:-Attachments');
        await CampaignsPageHelper.checkAttachmentsBox(false);
        StepLogger.verification('The Attachments checkbox should be checked properly.');
        await CampaignsPageHelper.verifyAttachmentsBox(false);

        StepLogger.stepId(7);
        StepLogger.step('Click on Print button.');
        await ContactPageHelper.closeSnapshotModal();
        await NewCasePageHelperExtension.clickMenuButton();
        await CampaignsPageHelper.clickPrint();
        StepLogger.verification('Should display the Print screen with the options selected by user.');
        await CampaignsPageHelper.verifyPrintModalIsDisplayed(true);
    });
});

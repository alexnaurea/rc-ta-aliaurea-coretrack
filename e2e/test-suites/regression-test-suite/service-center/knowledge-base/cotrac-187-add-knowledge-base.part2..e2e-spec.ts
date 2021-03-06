import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { Constants } from '../../../../components/misc-utils/constants';
import { KnowledgeBaseConstant } from '../../../../page-objects/pages/administration/service-center/knowledge-base/knowledge-base.constants';
import { KnowledgeBaseHelper } from '../../../../page-objects/pages/administration/service-center/knowledge-base/knowledge-base.helper';
import { HomePageHelper } from '../../../../page-objects/pages/home-page/home-page.helper';
import { LoginPageHelper } from '../../../../page-objects/pages/login-page/login-page.helper';
import { KnowledgeBase1Helper } from '../../../../page-objects/pages/service-center/knowledge-base/knowledge-base.helper';
import { SuiteNames } from '../../../helpers/suite-names';

describe(SuiteNames.regressionSuite, () => {
    let loginPageHelper: LoginPageHelper;
    const kBaseName = `${KnowledgeBaseConstant.elementNames.test}${PageHelper.getUniqueId()}`;
    const kBaseInactiveName = `${KnowledgeBaseConstant.elementNames.test}${PageHelper.getUniqueId()}`;
    let kBaseCategory = Constants.EMPTY_STRING;
    let kBaseInactiveCategory = Constants.EMPTY_STRING;

    beforeAll(async () => {
        loginPageHelper = LoginPageHelper.getInstance();
        await PageHelper.maximiseBrowser();
    });

    beforeEach(async () => {
        await PageHelper.restartBrowser();
        await loginPageHelper.goTo();
        await LoginPageHelper.loginAsAdmin();
    });

    // Jira References - COTRAC-2750
    it('Verify that the user can open Select Category window to add Category in New Knowledge Base - [22429611]', async () => {
        // Auto generated by aurea-automation - util on Mon, 18 Mar 2019 09:04:42 GMT
        StepLogger.caseId = 22429611;

        StepLogger.stepId(1);
        StepLogger.step('Click Administration menu from the to the left menu panel');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Administration menu should get expanded');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click Service Center menu under Administrator section');
        await HomePageHelper.clickServiceCenterUnderAdministration();
        StepLogger.verification('Service Center menu should get expanded');
        await HomePageHelper.verifyOptionsUnderServiceCenter();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Knowledge Base menu');
        await HomePageHelper.clickKnowledgeBaseUnderServiceCenterUnderAdministration();
        StepLogger.verification('Manage Knowledge Base page should be displayed as below');
        await KnowledgeBaseHelper.verifyKnowledgeBasePageDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on the Add Knowledge Base (Book icon) button on top left of the page');
        await KnowledgeBaseHelper.clickAddKnowledgeBaseButton();
        StepLogger.verification('New Knowledge Base Article page should be displayed');
        await KnowledgeBaseHelper.verifyKnowledgeBaseArticle();

        StepLogger.stepId(5);
        StepLogger.step('Click the search icon next to Category field');
        await KnowledgeBaseHelper.clickSearchCategory();
        StepLogger.verification('SELECT CATEGORY window should get opened');
        await KnowledgeBaseHelper.verifySelectCategoryDialog();

        StepLogger.stepId(6);
        StepLogger.step('Click the "+" icon to expand the category into subcategories in Category tree');
        await KnowledgeBaseHelper.clickPlusIconCategory();
        StepLogger.verification('Category tree should get expanded');
        await KnowledgeBaseHelper.verifyCategoryTreeExpanded();

        StepLogger.stepId(7);
        StepLogger.step('Click on the Name of the Category to be selected');
        const category = await KnowledgeBaseHelper.selectCategoryChild();
        StepLogger.verification('Selected Category should be displayed in the bottom label of the window');
        await KnowledgeBaseHelper.verifySelectedCategoryInDialog(category);

        StepLogger.stepId(8);
        StepLogger.step('Click SELECT button');
        await KnowledgeBaseHelper.clickSelectCategoryDialog();
        StepLogger.verification(`1. SELECT CATEGORY window should get closed
            2. Selected Category should be displayed in the Category field in New Knowledge Base Article page`);
        await KnowledgeBaseHelper.verifyCategoryDialogClosedAndSelected(category);
    });

    // Jira References - COTRAC-2751
    it('Verify that the user can Cancel Selected Category in Select Category page - [22429627]', async () => {
        // Auto generated by aurea-automation - util on Mon, 18 Mar 2019 10:16:25 GMT
        StepLogger.caseId = 22429627;

        StepLogger.stepId(1);
        StepLogger.step('Click Administration menu from the to the left menu panel');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Administration menu should get expanded');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click Service Center menu under Administrator section');
        await HomePageHelper.clickServiceCenterUnderAdministration();
        StepLogger.verification('Service Center menu should get expanded');
        await HomePageHelper.verifyOptionsUnderServiceCenter();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Knowledge Base menu');
        await HomePageHelper.clickKnowledgeBaseUnderServiceCenterUnderAdministration();
        StepLogger.verification('Manage Knowledge Base page should be displayed as below');
        await KnowledgeBaseHelper.verifyKnowledgeBasePageDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on the Add Knowledge Base (Book icon) button on top left of the page');
        await KnowledgeBaseHelper.clickAddKnowledgeBaseButton();
        StepLogger.verification('New Knowledge Base Article page should be displayed');
        await KnowledgeBaseHelper.verifyKnowledgeBaseArticle();

        StepLogger.stepId(5);
        StepLogger.step('Click the search icon next to Category field');
        await KnowledgeBaseHelper.clickSearchCategory();
        StepLogger.verification('SELECT CATEGORY window should get opened');
        await KnowledgeBaseHelper.verifySelectCategoryDialog();

        StepLogger.stepId(6);
        StepLogger.step('Click on the Name of the Category to be selected');
        const category = await KnowledgeBaseHelper.selectCategory();
        StepLogger.verification('Selected Category should be displayed in the bottom label of the window');
        await KnowledgeBaseHelper.verifySelectedCategoryInDialog(category);

        StepLogger.stepId(7);
        StepLogger.step('Click CANCEL button');
        await KnowledgeBaseHelper.clickCancelCategoryDialog();
        StepLogger.verification(`1. SELECT CATEGORY window should get closed
            2. Selected Category should NOT be displayed in the Category field in New Knowledge Base Article page`);
        await KnowledgeBaseHelper.verifyCategoryDialogClosedAndNotSelected(category);
    });

    // Jira References - COTRAC-2752
    it('Verify that the user can Cancel Selected Category in New Knowledge Base - [22429629]', async () => {
        // Auto generated by aurea-automation - util on Mon, 18 Mar 2019 10:28:32 GMT
        StepLogger.caseId = 22429629;

        StepLogger.stepId(1);
        StepLogger.step('Click Administration menu from the to the left menu panel');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Administration menu should get expanded');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click Service Center menu under Administrator section');
        await HomePageHelper.clickServiceCenterUnderAdministration();
        StepLogger.verification('Service Center menu should get expanded');
        await HomePageHelper.verifyOptionsUnderServiceCenter();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Knowledge Base menu');
        await HomePageHelper.clickKnowledgeBaseUnderServiceCenterUnderAdministration();
        StepLogger.verification('Manage Knowledge Base page should be displayed as below');
        await KnowledgeBaseHelper.verifyKnowledgeBasePageDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on the Add Knowledge Base (Book icon) button on top left of the page');
        await KnowledgeBaseHelper.clickAddKnowledgeBaseButton();
        StepLogger.verification('New Knowledge Base Article page should be displayed');
        await KnowledgeBaseHelper.verifyKnowledgeBaseArticle();

        StepLogger.stepId(5);
        StepLogger.step('Click the search icon next to Category field');
        await KnowledgeBaseHelper.clickSearchCategory();
        StepLogger.verification('SELECT CATEGORY window should get opened');
        await KnowledgeBaseHelper.verifySelectCategoryDialog();

        StepLogger.stepId(6);
        StepLogger.step('Click the "+" icon to expand the category into subcategories in Category tree');
        await KnowledgeBaseHelper.clickPlusIconCategory();
        StepLogger.verification('Category tree should get expanded');
        await KnowledgeBaseHelper.verifyCategoryTreeExpanded();

        StepLogger.stepId(7);
        StepLogger.step('Click on the Name of the Category to be selected');
        const category = await KnowledgeBaseHelper.selectCategoryChild();
        StepLogger.verification('Selected Category should be displayed in the bottom label of the window');
        await KnowledgeBaseHelper.verifySelectedCategoryInDialog(category);

        StepLogger.stepId(8);
        StepLogger.step('Click SELECT button');
        await KnowledgeBaseHelper.clickSelectCategoryDialog();
        StepLogger.verification(`1. SELECT CATEGORY window should get closed
            2. Selected Category should be displayed in the Category field in New Knowledge Base Article page`);
        await KnowledgeBaseHelper.verifyCategoryDialogClosedAndSelected(category);

        StepLogger.stepId(9);
        StepLogger.step('Click x icon next to Category field');
        await KnowledgeBaseHelper.clickClearCategory();
        StepLogger.verification('Selected Category value should be cleared from the Category field');
        await KnowledgeBaseHelper.verifySelectedCategory(Constants.EMPTY_STRING);

        StepLogger.stepId(10);
        StepLogger.step('Click Cancel in New Knowledge Base Article page');
        await KnowledgeBaseHelper.clickCancelBaseArticle();
        StepLogger.verification('New Knowledge Base Article page should get closed');
        await KnowledgeBaseHelper.verifyKnowledgeBaseArticleHidden();
    });

    // Jira References - COTRAC-2725
    it('Verify whether user can Add a new Active Knowledge Base successfully - [22429635]', async () => {
        // Auto generated by aurea-automation - util on Mon, 18 Mar 2019 10:54:33 GMT
        StepLogger.caseId = 22429635;

        StepLogger.stepId(1);
        StepLogger.step('Click Administration menu from the to the left menu panel');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Administration menu should get expanded');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click Service Center menu under Administrator section');
        await HomePageHelper.clickServiceCenterUnderAdministration();
        StepLogger.verification('Service Center menu should get expanded');
        await HomePageHelper.verifyOptionsUnderServiceCenter();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Knowledge Base menu');
        await HomePageHelper.clickKnowledgeBaseUnderServiceCenterUnderAdministration();
        StepLogger.verification('Manage Knowledge Base page should be displayed as below');
        await KnowledgeBaseHelper.verifyKnowledgeBasePageDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on the Add Knowledge Base (Book icon) button on top left of the page');
        await KnowledgeBaseHelper.clickAddKnowledgeBaseButton();
        StepLogger.verification('New Knowledge Base Article page should be displayed');
        await KnowledgeBaseHelper.verifyKnowledgeBaseArticle();

        StepLogger.stepId(5);
        StepLogger.step('Enter values for TITLE and DESCRIPTION and text');
        await KnowledgeBaseHelper.enterTitleDescriptionText(kBaseName);
        StepLogger.verification('Entered values should be displayed');
        await KnowledgeBaseHelper.verifyTitleDescriptionText(kBaseName);

        StepLogger.stepId(6);
        StepLogger.step('Select values for CATEGORY, STATUS and ACTIVE(select Active) fields');
        kBaseCategory = await KnowledgeBaseHelper.enterCategoryStatusActive();
        StepLogger.verification('Selected values should be displayed');
        await KnowledgeBaseHelper.verifyCategoryStatusActive(kBaseCategory);

        StepLogger.stepId(7);
        StepLogger.step('Click Save');
        await KnowledgeBaseHelper.clickArticleSaveButton();
        StepLogger.verification(`1. New Knowledge Base Article page should get closed
            2. Added Knowledge Base should be displayed in the MANAGE KNOWLEDGE BASE page`);
        await KnowledgeBaseHelper.verifyBaseArticleClosedAndCreated(kBaseName);
    });

    // Jira References - COTRAC-2726
    it('Verify newly added Active Knowledge Base in Manage Knowledge Base page - [22429648]', async () => {
        // Auto generated by aurea-automation - util on Mon, 18 Mar 2019 11:23:09 GMT
        StepLogger.caseId = 22429648;

        StepLogger.stepId(1);
        StepLogger.step('Click Administration menu from the to the left menu panel');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Administration menu should get expanded');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click Service Center menu under Administrator section');
        await HomePageHelper.clickServiceCenterUnderAdministration();
        StepLogger.verification('Service Center menu should get expanded');
        await HomePageHelper.verifyOptionsUnderServiceCenter();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Knowledge Base menu');
        await HomePageHelper.clickKnowledgeBaseUnderServiceCenterUnderAdministration();
        StepLogger.verification('Manage Knowledge Base page should be displayed as below');
        await KnowledgeBaseHelper.verifyKnowledgeBasePageDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on the book icon for Added Knowledge Base record in the precondition 4');
        await KnowledgeBaseHelper.clickItemAddKnowledgeBaseButton(kBaseName);
        StepLogger.verification('Edit Knowledge Base Article page should be displayed with values added when creating the Knowledge Base');
        await KnowledgeBaseHelper.verifyEditKnowledgeBaseArticle(kBaseName, kBaseCategory);

        StepLogger.stepId(5);
        StepLogger.step('Click Cancel');
        await KnowledgeBaseHelper.clickCancelBaseArticle();
        StepLogger.verification(`1. Edit Knowledge Base Article page should get closed
            2. Knowledge Base should be displayed in the MANAGE KNOWLEDGE BASE page`);
        await KnowledgeBaseHelper.verifyKnowledgeBaseArticleHidden();
    });

    // Jira References - COTRAC-2753
    it('Verify whether user view Added new Active Knowledge Base - [22429645]', async () => {
        // Auto generated by aurea-automation - util on Mon, 18 Mar 2019 14:26:07 GMT
        StepLogger.caseId = 22429645;

        StepLogger.stepId(1);
        StepLogger.step('Click Service Center menu from the to the left menu panel');
        await HomePageHelper.clickServiceCenterLink();
        StepLogger.verification('Service Center menu should get expanded');
        await HomePageHelper.verifyOptionsUnderServiceCenterMenu();

        StepLogger.stepId(2);
        StepLogger.step('Click on the Knowledge Base menu');
        await HomePageHelper.clickKnowledgeBaseUnderServiceCenter();
        StepLogger.verification('Knowledge Base page should be displayed as below');
        await KnowledgeBase1Helper.verifyKnowledgeBasePageDisplayed();

        StepLogger.stepId(3);
        StepLogger.step(`Click on the Added Knowledge Base category in the precondition 4 from the Knowledge Base page
            ex: Lost Debit Card`);
        await KnowledgeBase1Helper.clickBaseCategory(kBaseCategory);
        StepLogger.verification('Knowledge Base record should be displayed with Title, description, Created by user with Date in the respective category');
        await KnowledgeBase1Helper.verifyKnowledgeBaseRecord(kBaseName, kBaseCategory, kBaseName);

        StepLogger.stepId(4);
        StepLogger.step('Click on the Knowledge Base');
        await KnowledgeBase1Helper.clickKnowledgeBase(kBaseName);
        StepLogger.verification('Knowledge Base should be displayed with available information');
        await KnowledgeBase1Helper.verifyKnowledgeBasePopup(kBaseName, kBaseName);

        StepLogger.stepId(5);
        StepLogger.step('Click Close button');
        await KnowledgeBase1Helper.clickCloseKnowledgeBasePopup();
        StepLogger.verification(`1. Knowledge Base Article should get closed
            2. Knowledge Base page should be displayed for the selected Category`);
        await KnowledgeBase1Helper.verifyPopupClosedAndCategoryPage(kBaseCategory);
    });

    // Jira References - COTRAC-2754
    it('Verify whether user can Add a new Inactive Knowledge Base successfully - [22429661]', async () => {
        // Auto generated by aurea-automation - util on Mon, 18 Mar 2019 12:37:25 GMT
        StepLogger.caseId = 22429661;

        StepLogger.stepId(1);
        StepLogger.step('Click Administration menu from the to the left menu panel');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Administration menu should get expanded');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click Service Center menu under Administrator section');
        await HomePageHelper.clickServiceCenterUnderAdministration();
        StepLogger.verification('Service Center menu should get expanded');
        await HomePageHelper.verifyOptionsUnderServiceCenter();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Knowledge Base menu');
        await HomePageHelper.clickKnowledgeBaseUnderServiceCenterUnderAdministration();
        StepLogger.verification('Manage Knowledge Base page should be displayed as below');
        await KnowledgeBaseHelper.verifyKnowledgeBasePageDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on the Add Knowledge Base (Book icon) button on top left of the page');
        await KnowledgeBaseHelper.clickAddKnowledgeBaseButton();
        StepLogger.verification('New Knowledge Base Article page should be displayed');
        await KnowledgeBaseHelper.verifyKnowledgeBaseArticle();

        StepLogger.stepId(5);
        StepLogger.step('Enter values for TITLE and DESCRIPTION and text');
        await KnowledgeBaseHelper.enterTitleDescriptionText(kBaseInactiveName, false);
        StepLogger.verification('Entered values should be displayed');
        await KnowledgeBaseHelper.verifyTitleDescriptionText(kBaseInactiveName, false);

        StepLogger.stepId(6);
        StepLogger.step('Select values for CATEGORY, STATUS and ACTIVE(select Inactive) fields');
        kBaseInactiveCategory = await KnowledgeBaseHelper.enterCategoryStatusActive(KnowledgeBaseConstant.activeDropdown.inactive);
        StepLogger.verification('Selected values should be displayed');
        await KnowledgeBaseHelper.verifyCategoryStatusActive(kBaseInactiveCategory, true, KnowledgeBaseConstant.activeDropdown.inactive);

        StepLogger.stepId(7);
        StepLogger.step('Click Save');
        await KnowledgeBaseHelper.clickArticleSaveButton();
        StepLogger.verification(`1. New Knowledge Base Article page should get closed
            2. Added Knowledge Base should be displayed in the MANAGE KNOWLEDGE BASE page`);
        await KnowledgeBaseHelper.verifyBaseArticleClosedAndCreated(kBaseInactiveName);
    });

    // Jira References - COTRAC-2755
    it('Verify whether user view Added new Inactive Knowledge Base - [22429667]', async () => {
        // Auto generated by aurea-automation - util on Mon, 18 Mar 2019 15:53:36 GMT
        StepLogger.caseId = 22429667;

        StepLogger.stepId(1);
        StepLogger.step('Click Service Center menu from the to the left menu panel');
        await HomePageHelper.clickServiceCenterLink();
        StepLogger.verification('Service Center menu should get expanded');
        await HomePageHelper.verifyOptionsUnderServiceCenterMenu();

        StepLogger.stepId(2);
        StepLogger.step('Click on the Knowledge Base menu');
        await HomePageHelper.clickKnowledgeBaseUnderServiceCenter();
        StepLogger.verification('Knowledge Base page should be displayed as below');
        await KnowledgeBase1Helper.verifyKnowledgeBasePageDisplayed();

        StepLogger.stepId(3);
        StepLogger.step(`Verify the Added Inactive Knowledge Base category in the precondition 4 from the Knowledge Base page
            ex: Order Office Supplies`);
        StepLogger.verification('Inactive Knowledge Base record should not be displayed in the respective category');
        await KnowledgeBase1Helper.verifyInactiveKnowledgeBaseRecord(kBaseInactiveName, kBaseInactiveCategory);
    });
});

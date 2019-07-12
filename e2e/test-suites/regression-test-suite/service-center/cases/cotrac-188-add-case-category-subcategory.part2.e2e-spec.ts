import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import {
    CaseAreasConstant
} from '../../../../page-objects/pages/administration/service-center/case-areas-page/case-areas.constants';
import {
    CaseAreasHelper
} from '../../../../page-objects/pages/administration/service-center/case-areas-page/case-areas.helper';
import { HomePageHelper } from '../../../../page-objects/pages/home-page/home-page.helper';
import { LoginPageHelper } from '../../../../page-objects/pages/login-page/login-page.helper';
import { NewCasePageHelper } from '../../../../page-objects/pages/new-case-page/new-case-page.helper';
import { SuiteNames } from '../../../helpers/suite-names';

describe(SuiteNames.regressionSuite, () => {
    let loginPageHelper: LoginPageHelper;
    const category = `${CaseAreasConstant.elementNames.test}${PageHelper.getUniqueId()}${PageHelper.getUniqueId()}`;
    const subCategory = `${CaseAreasConstant.elementNames.subcategory}${PageHelper.getUniqueId()}`;
    const categoryInactive = `${CaseAreasConstant.statusDropdown.inactive}${PageHelper.getUniqueId()}${PageHelper.getUniqueId()}`;

    beforeAll(async () => {
        loginPageHelper = LoginPageHelper.getInstance();
        await PageHelper.maximiseBrowser();
    });

    beforeEach(async () => {
        await PageHelper.restartBrowser();
        await loginPageHelper.goTo();
        await LoginPageHelper.loginAsAdmin();
    });

    // Jira References - COTRAC-3238
    it('Verify that User can add a Subcategory by entering data in all fields - [22935597]', async () => {
        // Auto generated by aurea-automation - util on Tue, 26 Mar 2019 08:21:27 GMT
        StepLogger.caseId = 22935597;

        StepLogger.preCondition('Create Category');
        await CaseAreasHelper.createCategory(category);

        // Step 1 has been covered in preCondition
        StepLogger.stepId(1);
        StepLogger.step('Click Administration menu from the left menu panel');
        StepLogger.verification('Administration menu should get expanded');

        // Step 2 has been covered in preCondition
        StepLogger.stepId(2);
        StepLogger.step('Click Service Center menu under Administrator section');
        StepLogger.verification('Service Center menu should get expanded');

        // Step 3 has been covered in preCondition
        StepLogger.stepId(3);
        StepLogger.step('Click on the Case Areas menu');
        StepLogger.verification('Manage Case Areas page should be displayed');

        StepLogger.stepId(4);
        StepLogger.step('Click on the Add Subcategory icon from the top left icon section');
        await CaseAreasHelper.clickAddSubcategoryButton();
        StepLogger.verification('New Subcategory page should be displayed');
        await CaseAreasHelper.verifySubcategoryDialog();

        StepLogger.stepId(5);
        StepLogger.step('Click on the Category drop down and select Category saved in Precondition 3');
        await CaseAreasHelper.selectCategory(category, true);
        StepLogger.verification('Selected category should be displayed in Category drop down');
        await CaseAreasHelper.verifySelectedCategory(category);

        StepLogger.stepId(6);
        StepLogger.step('Enter details for Sub category Name');
        await CaseAreasHelper.enterSubcategoryName(subCategory);
        StepLogger.verification('Entered Name should be displayed properly');
        await CaseAreasHelper.verifySubcategoryName(subCategory);

        StepLogger.stepId(7);
        StepLogger.step('Select Queue value from dropdown and set Status as Active');
        await CaseAreasHelper.selectQueueAndStatus();
        StepLogger.verification('Queue and Status value should be displayed');
        await CaseAreasHelper.verifyQueueAndStatus();

        StepLogger.stepId(8);
        StepLogger.step('Set Private option to No and Add a value for reminder');
        await CaseAreasHelper.setPrivateAndReminder(subCategory);
        StepLogger.verification('Updated values should be displayed properly');
        await CaseAreasHelper.verifyPrivateAndReminder(subCategory);

        StepLogger.stepId(9);
        StepLogger.step('Click Save');
        await CaseAreasHelper.clickSaveSubcategoryDialog();
        StepLogger.verification(`1. New Subcategory page should get closed
            2. Subcategory should get saved with the selected Category and displayed in the Manage Case Areas page`);
        await CaseAreasHelper.verifyDialogClosedAndSubcategoryCreated(category, subCategory);
    });

    // Jira References - COTRAC-3235
    it('Verify that User can review added Subcategory from Manage Case Areas page - [22935210]', async () => {
        // Auto generated by aurea-automation - util on Tue, 26 Mar 2019 09:27:18 GMT
        StepLogger.caseId = 22935210;

        StepLogger.stepId(1);
        StepLogger.step('Click Administration menu from the left menu panel');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Administration menu should get expanded');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click Service Center menu under Administrator section');
        await HomePageHelper.clickServiceCenterUnderAdministration();
        StepLogger.verification('Service Center menu should get expanded');
        await HomePageHelper.verifyOptionsUnderServiceCenter();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Case Areas menu');
        await HomePageHelper.clickCaseAreasUnderServiceCenterUnderAdministration();
        StepLogger.verification('Manage Case Areas page should be displayed');
        await CaseAreasHelper.verifyCaseAreasPageDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Search and select added Subcategory added in Pre condition 3 (Navigate via pagination options)');
        await CaseAreasHelper.searchSubcategory(subCategory);
        StepLogger.verification('Subcategory should be displayed in the Manage Case Areas page');
        await CaseAreasHelper.verifySubcategoryCreated(category, subCategory);

        StepLogger.stepId(5);
        StepLogger.step('Click on the Subcategory');
        await CaseAreasHelper.clickSubcategory(subCategory);
        StepLogger.verification('Edit Subcategory page should be displayed with all details for the selected Subcategory');
        await CaseAreasHelper.verifyEditSubcategoryDialog(category, subCategory);

        StepLogger.stepId(6);
        StepLogger.step('Click Cancel');
        await CaseAreasHelper.clickCancelSubcategory();
        StepLogger.verification('Edit Subcategory page should get closed');
        await CaseAreasHelper.verifyDialogClosedAndCaseAreas();
    });

    // Jira References - COTRAC-3236
    it('Verify the successful creation of a Category and SubCategory for a Case - [22935244]', async () => {
        // Auto generated by aurea-automation - util on Tue, 26 Mar 2019 09:49:05 GMT
        StepLogger.caseId = 22935244;

        StepLogger.stepId(1);
        StepLogger.step('Click New menu from the left menu panel');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('New+ menu should get expanded');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click on Cases menu');
        await HomePageHelper.clickCaseUnderNew();
        StepLogger.verification('New Case page should be displayed in a new page');
        await NewCasePageHelper.verifyNewCasePageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Navigate to the CATEGORY drop-down and verify created Category and SubCategory in Precondition 3 and 4');
        StepLogger.verification('Created Category and Subcategory should be displayed in Category and Sub category drop down lists');
        await CaseAreasHelper.verifyCategoryAndSubcategoryInDropdowns(category, subCategory);
    });

    // Jira References - COTRAC-3239
    it('Verify that User can add an Inactive Category - [22936152]', async () => {
        // Auto generated by aurea-automation - util on Tue, 26 Mar 2019 10:08:58 GMT
        StepLogger.caseId = 22936152;

        StepLogger.stepId(1);
        StepLogger.step('Click Administration menu from the left menu panel');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Administration menu should get expanded');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click Service Center menu under Administrator section');
        await HomePageHelper.clickServiceCenterUnderAdministration();
        StepLogger.verification('Service Center menu should get expanded');
        await HomePageHelper.verifyOptionsUnderServiceCenter();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Case Areas menu');
        await HomePageHelper.clickCaseAreasUnderServiceCenterUnderAdministration();
        StepLogger.verification('Manage Case Areas page should be displayed');
        await CaseAreasHelper.verifyCaseAreasPageDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on the Add Category icon on the top left of the icon section');
        await CaseAreasHelper.clickAddCategoryButton(true);
        StepLogger.verification('New Category page should be displayed');
        await CaseAreasHelper.verifyCategoryDialog();

        StepLogger.stepId(5);
        StepLogger.step('Enter details for Category');
        await CaseAreasHelper.enterCategoryName(categoryInactive, true);
        StepLogger.verification('Entered details should be displayed');
        await CaseAreasHelper.verifyCategoryName(categoryInactive);

        StepLogger.stepId(6);
        StepLogger.step('Select Status as Inactive from the drop down');
        await CaseAreasHelper.selectStatusOption(CaseAreasConstant.statusDropdown.inactive);
        StepLogger.verification('Status value should be selected as Inactive');
        await CaseAreasHelper.verifyStatusSelectedOption(CaseAreasConstant.statusDropdown.inactive);

        StepLogger.stepId(7);
        StepLogger.step('Click Save');
        await CaseAreasHelper.clickSaveCategoryDialog();
        StepLogger.verification('New Category page should get closed and Manage Case Areas page should be displayed');
        await CaseAreasHelper.verifyDialogClosedAndCaseAreas();
    });

    // Jira References - COTRAC-3240
    it('Verify Inactive category is displayed when adding Subcategory - [22936164]', async () => {
        // Auto generated by aurea-automation - util on Tue, 26 Mar 2019 10:16:52 GMT
        StepLogger.caseId = 22936164;

        StepLogger.stepId(1);
        StepLogger.step('Click Administration menu from the left menu panel');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Administration menu should get expanded');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click Service Center menu under Administrator section');
        await HomePageHelper.clickServiceCenterUnderAdministration();
        StepLogger.verification('Service Center menu should get expanded');
        await HomePageHelper.verifyOptionsUnderServiceCenter();

        StepLogger.stepId(3);
        StepLogger.step('Click on the Case Areas menu');
        await HomePageHelper.clickCaseAreasUnderServiceCenterUnderAdministration();
        StepLogger.verification('Manage Case Areas page should be displayed');
        await CaseAreasHelper.verifyCaseAreasPageDisplayed();

        StepLogger.stepId(4);
        StepLogger.step('Click on the Add Subcategory icon from the top left icon section');
        await CaseAreasHelper.clickAddSubcategoryButton();
        StepLogger.verification('New Subcategory page should be displayed');
        await CaseAreasHelper.verifySubcategoryDialog();

        StepLogger.stepId(5);
        StepLogger.step('Click on the Category drop down and verify Inactive Category saved in Precondition 3');
        await CaseAreasHelper.clickCategoryDropdown(true);
        StepLogger.verification('Inactive category should be displayed in the Category dropdown');
        await CaseAreasHelper.verifySavedCategoryInDropdown(categoryInactive, true, true);
    });

    // Jira References - COTRAC-3241
    it('Verify Inactive Category is not displayed in Category field when adding new Case - [22941000]', async () => {
        // Auto generated by aurea-automation - util on Tue, 26 Mar 2019 10:22:21 GMT
        StepLogger.caseId = 22941000;

        StepLogger.stepId(1);
        StepLogger.step('Click New menu from the left menu panel');
        await HomePageHelper.clickNewLink();
        StepLogger.verification('New+ menu should get expanded');
        await HomePageHelper.verifyOptionsUnderNew();

        StepLogger.stepId(2);
        StepLogger.step('Click on Cases menu');
        await HomePageHelper.clickCaseUnderNew();
        StepLogger.verification('New Case page should be displayed in a new page');
        await NewCasePageHelper.verifyNewCasePageDisplayed(false);

        StepLogger.stepId(3);
        StepLogger.step('Navigate to the CATEGORY drop-down and verify created Inactive Category');
        StepLogger.verification('Created Inactive Category should NOT be displayed in Category drop down list');
        await CaseAreasHelper.verifyCategoryNotDisplayedInDropdown(categoryInactive);
    });
});

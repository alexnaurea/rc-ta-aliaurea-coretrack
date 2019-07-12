import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { ProductsConstants } from '../../../../page-objects/pages/administration/configuration/products/products.constants';
import { ProductsHelper } from '../../../../page-objects/pages/administration/configuration/products/products.helper';
import { HomePageHelper } from '../../../../page-objects/pages/home-page/home-page.helper';
import { LoginPageHelper } from '../../../../page-objects/pages/login-page/login-page.helper';
import { SuiteNames } from '../../../helpers/suite-names';

describe(SuiteNames.regressionSuite, () => {
    let loginPageHelper: LoginPageHelper;

    beforeAll(async () => {
        loginPageHelper = LoginPageHelper.getInstance();
        await PageHelper.maximiseBrowser();
    });

    beforeEach(async () => {
        await loginPageHelper.goTo();
        await LoginPageHelper.loginAsAdmin();
    });

    it('To verify that the user is able to navigate to Manage Products page. - [22415453]', async () => {
        // Auto generated by aurea-automation - util on Tue, 19 Mar 2019 16:54:46 GMT

        StepLogger.caseId = 22415453;
        StepLogger.stepId(1);
        StepLogger.step('Click "Administration" link displayed in the left panel.');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Option available under administration section should be displayed.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Click "Configuration" displayed under administration.');
        await HomePageHelper.clickConfigurationUnderAdministration();
        StepLogger.verification('Item available under configuration should be displayed.');
        await HomePageHelper.verifyOptionsUnderConfiguration();

        StepLogger.stepId(3);
        StepLogger.step('Goto Configuration ->Products');
        await HomePageHelper.clickProductsUnderConfiguration();
        StepLogger.verification('Manage products page should be displayed.');
        await ProductsHelper.verifyProductsManagePageDisplayed();
    });

    it('To verify the list of Items in Grid on Manage Products Page - [22415460]', async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Mar 2019 05:44:26 GMT

        StepLogger.caseId = 22415460;
        StepLogger.stepId(1);
        StepLogger.step('Click Administration -> Configuration displayed under administration.');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Item available under configuration should be displayed.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Goto Configuration ->Products');
        await HomePageHelper.clickConfigurationUnderAdministration();
        await HomePageHelper.clickProductsUnderConfiguration();
        StepLogger.verification('Manage products page should be displayed.');
        await ProductsHelper.verifyProductsManagePageDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Verify the Items displayed in the grid.');
        StepLogger.verification(`Following items should be displayed in the grid:
        1. Product
        2. Type
        3. Product Code
        4. GEN
        5.  SER
        6.  INT
        7. ACTIVE
        7. Description`);
        await ProductsHelper.verifyProductPageItemsGrid();
    });

    it('To verify the buttons available on "Manage Products page". - [22415463]', async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Mar 2019 07:43:10 GMT

        StepLogger.caseId = 22415463;
        StepLogger.stepId(1);
        StepLogger.step('Click Administration -> Configuration displayed under administration.');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Item available under configuration should be displayed.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Goto Configuration ->Products');
        await HomePageHelper.clickConfigurationUnderAdministration();
        await HomePageHelper.clickProductsUnderConfiguration();
        StepLogger.verification('Manage products page should be displayed.');
        await ProductsHelper.verifyProductsManagePageDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Verify the buttons available on the Manage Product Page');
        StepLogger.verification(`Following options should be displayed.
        1. Refresh
        2. Add Product
        3. Search
        4. Grouping
        5. Export to Excel
        6. Export to Word`);
        await ProductsHelper.verifyButtons();
    });

    it('To verify that user is able to navigate to "New Product" page. - [22415485]', async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Mar 2019 08:23:23 GMT

        StepLogger.caseId = 22415485;

        StepLogger.stepId(1);
        StepLogger.step('Click Administration -> Configuration displayed under administration.');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Item available under configuration should be displayed.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Goto Configuration ->Products');
        await HomePageHelper.clickConfigurationUnderAdministration();
        await HomePageHelper.clickProductsUnderConfiguration();
        StepLogger.verification('Manage products page should be displayed.');
        await ProductsHelper.verifyProductsManagePageDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click Add product button.');
        await ProductsHelper.clickOnAddProduct();
        StepLogger.verification('User should be navigated to new product screen.');
        await ProductsHelper.verifyNewProductScreen();
    });

    it('To verify the functionality of search field. - [22415645]', async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Mar 2019 09:32:56 GMT

        StepLogger.caseId = 22415645;
        const value = ProductsConstants.searchValue;

        StepLogger.stepId(1);
        StepLogger.step('Click Administration -> Configuration displayed under administration.');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Item available under configuration should be displayed.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Goto Configuration ->Products');
        await HomePageHelper.clickConfigurationUnderAdministration();
        await HomePageHelper.clickProductsUnderConfiguration();
        StepLogger.verification('Manage products page should be displayed.');
        await ProductsHelper.verifyProductsManagePageDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Enter some text in the search field.');
        await ProductsHelper.enterValuesInSearchText(value);
        StepLogger.verification('Text should be entered.');
        await ProductsHelper.verifyEnteredValueInSearchText();

        StepLogger.stepId(4);
        StepLogger.step('Click the search icon displayed in the search field.');
        await ProductsHelper.clickOnSearchIcon();
        StepLogger.verification('Search results based on search text should be entered.');
        await ProductsHelper.verifySearchResults(value);
    });

    it('To verify the type drop down on New Product page. - [22415489]', async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Mar 2019 11:26:19 GMT

        StepLogger.caseId = 22415489;
        StepLogger.stepId(1);
        StepLogger.step('Click Administration -> Configuration displayed under administration.');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Item available under configuration should be displayed.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Goto Configuration ->Products');
        await HomePageHelper.clickConfigurationUnderAdministration();
        await HomePageHelper.clickProductsUnderConfiguration();
        StepLogger.verification('Manage products page should be displayed.');
        await ProductsHelper.verifyProductsManagePageDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click Add product button.');
        await ProductsHelper.clickOnAddProduct();
        StepLogger.verification('User should be navigated to new product screen.');
        await ProductsHelper.verifyNewProductScreen();

        StepLogger.stepId(4);
        StepLogger.step('Verify the type dropdown on the New product field.');
        StepLogger.verification('Dropdown should be displayed:');
        await ProductsHelper.verifyTypeDropDown();
    });

    it('To verify the validation Error message is displayed when user clicks save leaving all the mandatory fields blank. - [22415488]', async () => {
        // Auto generated by aurea-automation - util on Wed, 20 Mar 2019 12:14:51 GMT

        StepLogger.caseId = 22415488;
        StepLogger.stepId(1);
        StepLogger.step('Click Administration -> Configuration displayed under administration.');
        await HomePageHelper.clickAdministrationLink();
        StepLogger.verification('Item available under configuration should be displayed.');
        await HomePageHelper.verifyOptionsUnderAdministration();

        StepLogger.stepId(2);
        StepLogger.step('Goto Configuration ->Products');
        await HomePageHelper.clickConfigurationUnderAdministration();
        await HomePageHelper.clickProductsUnderConfiguration();
        StepLogger.verification('Manage products page should be displayed.');
        await ProductsHelper.verifyProductsManagePageDisplayed();

        StepLogger.stepId(3);
        StepLogger.step('Click Add product button.');
        await ProductsHelper.clickOnAddProduct();
        StepLogger.verification('User should be navigated to new product screen.');
        await ProductsHelper.verifyNewProductScreen();

        StepLogger.stepId(4);
        StepLogger.step('Click save leaving all the fields blank.');
        await ProductsHelper.clickOnSaveOnNewProductScreen();
        StepLogger.verification('Validation error messages should be displayed besides each mandatory fields.');
        await ProductsHelper.verifyValidationErrorMessages();
    });
});

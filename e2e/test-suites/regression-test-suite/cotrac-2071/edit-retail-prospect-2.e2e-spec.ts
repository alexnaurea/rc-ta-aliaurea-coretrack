import { StepLogger } from '../../../../core/logger/step-logger';
import { PageHelper } from '../../../components/html/page-helper';
import { ContactPageOneHelper } from '../../../page-objects/pages/contact-page/contact-page-one.helper';
import { ContactPageHelper } from '../../../page-objects/pages/contact-page/contact-page.helper';
import { HomePageOneHelper } from '../../../page-objects/pages/home-page/home-page-one.helper';
import { HomePageHelper } from '../../../page-objects/pages/home-page/home-page.helper';
import { LoginPageHelper } from '../../../page-objects/pages/login-page/login-page.helper';
import { NewAccountPageHelper } from '../../../page-objects/pages/new-account-page/new-account-page.helper';
import { NewAccountPage } from '../../../page-objects/pages/new-account-page/new-account-page.po';
import { NewProspectPageHelper } from '../../../page-objects/pages/new-prospect-page/new-prospect-page.helper';
import { NewProspectPage } from '../../../page-objects/pages/new-prospect-page/new-prospect-page.po';
import { SuiteNames } from '../../helpers/suite-names';

describe(SuiteNames.regressionSuite, () => {
    let loginPageHelper: LoginPageHelper;

    beforeAll(async () => {
        loginPageHelper = LoginPageHelper.getInstance();
        await PageHelper.maximiseBrowser();
    });

    beforeEach(async () => {
        await PageHelper.restartBrowser();
        await loginPageHelper.goTo();
    });

    // Jira References - COTRAC-2071
    it('Verify user clicks on close button and clicks cancel OK on warning popup. - [22998346]', async () => {
        // Auto generated by aurea-automation - util on Fri, 05 Apr 2019 07:39:41 GMT

        StepLogger.caseId = 22998346;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        const uniqueName = PageHelper.getUniqueId();
        await NewProspectPageHelper.navigateAndAddExistingProspect(uniqueName);

        StepLogger.stepId(1);
        StepLogger.step('Verify Search button is appearing on the top right side of the page.');
        StepLogger.verification('Search button should be appearing on the top right side of the home page');
        await HomePageHelper.verifySearchButtonIsDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Verify user clicks on Search button.');
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('Search criteria should be entered.');
        await HomePageHelper.verifySearchBox();

        StepLogger.stepId(3);
        StepLogger.step('Verify user clicks on the search button');
        await HomePageHelper.enterSearchTextAndClicksearch(uniqueName);
        StepLogger.verification('Search result should be returned.');
        await HomePageHelper.verifyContactCardIsDisplayed(uniqueName);

        StepLogger.stepId(4);
        StepLogger.step('Click on the Search result');
        await HomePageHelper.clickOnSearchResult(uniqueName);
        StepLogger.verification(`A new page should open in a  new tab and contact name heading
            should be appearing on the top of the page. Overview tab should be open.`);
        await ContactPageHelper.verifyOverviewIsDisplayed(false);

        StepLogger.stepId(5);
        StepLogger.step('Click on OK button present on the top right side of the page');
        await ContactPageOneHelper.clickCloseAndOK();
        StepLogger.verification('The contact window should close and user should navigate back to search page');
        await NewAccountPageHelper.verifyTabClosed();
    });

    // Jira References - COTRAC-2071
    it('Verify user reopens the the contact  and verify changes are present. - [22998328]', async () => {
        // Auto generated by aurea-automation - util on Fri, 05 Apr 2019 07:39:41 GMT

        StepLogger.caseId = 22998328;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        const uniqueName = PageHelper.getUniqueId();
        await NewProspectPageHelper.navigateAndAddExistingProspect(uniqueName);
        const editText = PageHelper.getUniqueId();

        StepLogger.stepId(1);
        StepLogger.step('Verify Search button is appearing on the top right side of the page.');
        StepLogger.verification('Search button should be appearing on the top right side of the home page');
        await HomePageHelper.verifySearchButtonIsDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Verify user clicks on Search button.');
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('Search criteria should be entered.');
        await HomePageHelper.verifySearchBox();

        StepLogger.stepId(3);
        StepLogger.step('Verify user clicks on the search button');
        await HomePageHelper.enterSearchTextAndClicksearch(uniqueName);
        StepLogger.verification('Search result should be returned.');
        await HomePageHelper.verifyContactCardIsDisplayed(uniqueName);

        StepLogger.stepId(4);
        StepLogger.step('Click on the Search result');
        await HomePageHelper.clickOnSearchResult(uniqueName);
        StepLogger.verification(`A new page should open in a  new tab and contact name heading
            should be appearing on the top of the page. Overview tab should be open.`);
        await ContactPageHelper.verifyOverviewIsDisplayed(false);

        StepLogger.stepId(5);
        StepLogger.step('Update First Name');
        await NewProspectPage.form.information.firstName.sendKeys(editText);
        StepLogger.verification('First Name should be updated.');
        await NewProspectPage.form.information.firstName.verifyTextEntered(editText);

        StepLogger.stepId(6);
        StepLogger.step('Click on the Save button');
        await NewProspectPageHelper.clickSaveButton();
        StepLogger.verification('Screen should refresh and first name should update.');
        await NewProspectPage.form.information.firstName.verifyTextEntered(editText);

        StepLogger.stepId(7);
        StepLogger.step('Click on Close button');
        await NewAccountPageHelper.clickClose();
        StepLogger.verification('Warning pop up should appear');
        await NewAccountPageHelper.verifyConfirmWindow();

        StepLogger.stepId(8);
        StepLogger.step('Click on OK button on the Warning pop up');
        await NewAccountPageHelper.clickDialogOk();
        StepLogger.verification('user should return to the search screen');
        await HomePageOneHelper.switchAndVerifyContactCard(uniqueName);

        StepLogger.stepId(9);
        StepLogger.step('Click again on the search result.');
        await HomePageHelper.clickOnSearchResult(uniqueName);
        StepLogger.verification('Contact should open in new tab and updated First name should be present');
        await ContactPageOneHelper.verifyOverViewAndFirstName(editText);
    });

    // Jira References - COTRAC-2071
    it('Verify user is able to update First Name and save the contact. - [22998304]', async () => {
        // Auto generated by aurea-automation - util on Fri, 05 Apr 2019 07:39:41 GMT

        StepLogger.caseId = 22998304;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        const uniqueName = PageHelper.getUniqueId();
        await NewProspectPageHelper.navigateAndAddExistingProspect(uniqueName);
        const editText = PageHelper.getUniqueId();

        StepLogger.stepId(1);
        StepLogger.step('Verify Search button is appearing on the top right side of the page.');
        StepLogger.verification('Search button should be appearing on the top right side of the home page');
        await HomePageHelper.verifySearchButtonIsDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Verify user clicks on Search button.');
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('SEarch criteria should be entered.');
        await HomePageHelper.verifySearchBox();

        StepLogger.stepId(3);
        StepLogger.step('Verify user clicks on the search button');
        await HomePageHelper.enterSearchTextAndClicksearch(uniqueName);
        StepLogger.verification('Search result should be returned.');
        await HomePageHelper.verifyContactCardIsDisplayed(uniqueName);

        StepLogger.stepId(4);
        StepLogger.step('Click on the Search result');
        await HomePageHelper.clickOnSearchResult(uniqueName);
        StepLogger.verification(`A new page should open in a  new tab and contact name heading
            should be appearing on the top of the page. Overview tab should be open.`);
        await ContactPageHelper.verifyOverviewIsDisplayed(false);

        StepLogger.stepId(5);
        StepLogger.step('Update First Name');
        await NewProspectPage.form.information.firstName.sendKeys(editText);
        StepLogger.verification('First Name should be updated.');
        await NewProspectPage.form.information.firstName.verifyTextEntered(editText);

        StepLogger.stepId(6);
        StepLogger.step('Click on the Save button');
        await NewProspectPageHelper.clickSaveButton();
        StepLogger.verification('Screen should refresh and first name should update.');
        await NewProspectPage.form.information.firstName.verifyTextEntered(editText);
    });

    // Jira References - COTRAC-2071
    it('Verify user updates the WorkPhone, Home Phone and mobile information. - [22998307]', async () => {
        // Auto generated by aurea-automation - util on Fri, 05 Apr 2019 07:39:41 GMT

        StepLogger.caseId = 22998307;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        const uniqueName = PageHelper.getUniqueId();
        await NewProspectPageHelper.navigateAndAddExistingProspect(uniqueName);
        const editText = PageHelper.getUniqueId();

        StepLogger.stepId(1);
        StepLogger.step('Verify Search button is appearing on the top right side of the page.');
        StepLogger.verification('Search button should be appearing on the top right side of the home page');
        await HomePageHelper.verifySearchButtonIsDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Verify user clicks on Search button.');
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('SEarch criteria should be entered.');
        await HomePageHelper.verifySearchBox();

        StepLogger.stepId(3);
        StepLogger.step('Verify user clicks on the search button');
        await HomePageHelper.enterSearchTextAndClicksearch(uniqueName);
        StepLogger.verification('Search result should be returned.');
        await HomePageHelper.verifyContactCardIsDisplayed(uniqueName);

        StepLogger.stepId(4);
        StepLogger.step('Click on the Search result');
        await HomePageHelper.clickOnSearchResult(uniqueName);
        StepLogger.verification(`A new page should open in a  new tab and contact name heading
            should be appearing on the top of the page. Overview tab should be open.`);
        await ContactPageHelper.verifyOverviewIsDisplayed(false);

        StepLogger.stepId(5);
        StepLogger.step('Update  WorkPhone, Home Phone and mobile information');
        await NewProspectPageHelper.enterOrUpdatePhone(editText);
        StepLogger.verification('WorkPhone, Home Phone and mobile information should be updated.');
        await NewProspectPageHelper.verifyPhone(editText);

        StepLogger.stepId(6);
        StepLogger.step('Click on the Save button');
        await NewProspectPageHelper.clickSaveButton();
        StepLogger.verification('Screen should refresh and first name should update.');
        await NewProspectPageHelper.verifyPhone(editText);
    });

    // Jira References - COTRAC-2071
    it('Verify user clicks on close  button and clicks cancel button on warning popup. - [22998344]', async () => {
        // Auto generated by aurea-automation - util on Fri, 05 Apr 2019 07:39:41 GMT

        StepLogger.caseId = 22998344;
        StepLogger.preCondition('Execute C22395398 to login as an administrator');
        const uniqueName = PageHelper.getUniqueId();
        await NewProspectPageHelper.navigateAndAddExistingProspect(uniqueName);

        StepLogger.stepId(1);
        StepLogger.step('Verify Search button is appearing on the top right side of the page.');
        StepLogger.verification('Search button should be appearing on the top right side of the home page');
        await HomePageHelper.verifySearchButtonIsDisplayed();

        StepLogger.stepId(2);
        StepLogger.step('Verify user clicks on Search button.');
        await HomePageHelper.clickSearchButton();
        StepLogger.verification('Search criteria should be entered.');
        await HomePageHelper.verifySearchBox();

        StepLogger.stepId(3);
        StepLogger.step('Verify user clicks on the search button');
        await HomePageHelper.enterSearchTextAndClicksearch(uniqueName);
        StepLogger.verification('Search result should be returned.');
        await HomePageHelper.verifyContactCardIsDisplayed(uniqueName);

        StepLogger.stepId(4);
        StepLogger.step('Click on the Search result');
        await HomePageHelper.clickOnSearchResult(uniqueName);
        StepLogger.verification(`A new page should open in a  new tab and contact name heading
            should be appearing on the top of the page. Overview tab should be open.`);
        await ContactPageHelper.verifyOverviewIsDisplayed(false);

        StepLogger.stepId(5);
        StepLogger.step('Click on Close button present on the top right side of the page');
        await NewProspectPageHelper.clickCloseButton();
        StepLogger.verification('Warning pop up should appear with Heading "Warning"  and OK and Cancel buttons');
        await NewAccountPageHelper.verifyConfirmWindow();

        StepLogger.stepId(6);
        StepLogger.step('Click on the Cancel button on warning pop up');
        await NewAccountPageHelper.clickDialogCancel();
        StepLogger.verification('Warning pop up should close.');
        await NewAccountPage.dialogBox.window.verifyHiddenStatus();
    });
});

import { StepLogger } from '../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../components/html/page-helper';
import { RandomHelper } from '../../../../components/misc-utils/random-helper';
import { DistrictsConstants } from '../../../../page-objects/pages/administration/organization/districts/districts.constants';
import { DistrictsHelper } from '../../../../page-objects/pages/administration/organization/districts/districts.helper';
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

    it('To verify user able to edit mandatory fields Code and Name of existing district - [22460559]', async () => {
        // Auto generated by aurea-automation - util on Tue, 02 Apr 2019 08:36:49 GMT

        StepLogger.caseId = 22460559;
        const value = await PageHelper.getUniqueId();

        StepLogger.preCondition('Execute C22460555 to open district window');
        await DistrictsHelper.navigateToEditDistrictPage();

        StepLogger.stepId(1);
        StepLogger.step('Edit the Code field');
        await DistrictsHelper.enterCode(value);
        StepLogger.verification('User is able to edit code field');
        await DistrictsHelper.verifyEnteredCode(value);

        StepLogger.stepId(2);
        StepLogger.step('Edit the Name of District');
        await DistrictsHelper.enterName(value);
        StepLogger.verification('User is able to edit Name');
        await DistrictsHelper.verifyEnteredName(value);

        StepLogger.stepId(3);
        StepLogger.step('Click Save button at bottom of district edit window');
        await DistrictsHelper.clickOnSaveButton();
        StepLogger.verification('Window is closed and changes are saved');
        await DistrictsHelper.verifyNewDistrictsScreenClosed();
    });

    it('To verify user able to edit Description of existing district - [22460563]', async () => {
        // Auto generated by aurea-automation - util on Tue, 02 Apr 2019 08:53:02 GMT

        StepLogger.caseId = 22460563;
        const value = await PageHelper.getUniqueId();
        const value1 = await RandomHelper.getRandomNumber(5);

        StepLogger.preCondition('Execute C22460555 to open district window');
        await DistrictsHelper.navigateToEditDistrictPage();

        StepLogger.stepId(1);
        StepLogger.step('Enter some value in description field');
        await DistrictsHelper.enterDescription(value);
        StepLogger.verification('User is able to enter value in description field');
        await DistrictsHelper.verifyEnteredDescription(value);

        StepLogger.stepId(2);
        StepLogger.step('Enter numeric value in description field');
        await DistrictsHelper.enterDescription(value1);
        StepLogger.verification('User is able to enter numeric value');
        await DistrictsHelper.verifyEnteredDescription(value1);

        StepLogger.stepId(3);
        StepLogger.step('Click Save button at bottom of district edit window');
        await DistrictsHelper.clickOnSaveButton();
        StepLogger.verification('Window is closed and changes are saved');
        await DistrictsHelper.verifyNewDistrictsScreenClosed();
    });

    it('To verify user able to change status of an inactive district to active - [22460565]', async () => {
        // Auto generated by aurea-automation - util on Tue, 02 Apr 2019 09:06:43 GMT

        StepLogger.caseId = 22460565;
        const activeStatus = DistrictsConstants.activeStatus;
        const inactiveStatus = DistrictsConstants.inactiveStatus;

        StepLogger.preCondition('Execute C22460555 to open district window');
        await DistrictsHelper.navigateToEditDistrictPage();

        StepLogger.stepId(1);
        StepLogger.step('Click on drop-down of Status field');
        await DistrictsHelper.clickOnStatusDropDown();
        StepLogger.verification('Active and Inactive values are displayed in the drop-down');
        await DistrictsHelper.verifyStatusSelected(activeStatus);
        await DistrictsHelper.verifyStatusSelected(inactiveStatus);

        StepLogger.stepId(2);
        StepLogger.step('Select Active value');
        await DistrictsHelper.selectAStatusFromDropDown(activeStatus);
        StepLogger.verification('User is able to select active value for drop-down Status');
        await DistrictsHelper.verifyStatusSelected(activeStatus);

        StepLogger.stepId(3);
        StepLogger.step('Click Save button at bottom of district edit window');
        await DistrictsHelper.clickOnSaveButton();
        StepLogger.verification('Window is closed and changes are saved');
        await DistrictsHelper.verifyNewDistrictsScreenClosed();
    });

    it('To verify user able to change status of an active district to inactive - [22460564]', async () => {
        // Auto generated by aurea-automation - util on Tue, 02 Apr 2019 09:34:38 GMT

        StepLogger.caseId = 22460564;
        const activeStatus = DistrictsConstants.activeStatus;
        const inactiveStatus = DistrictsConstants.inactiveStatus;

        StepLogger.preCondition('Execute C22460555 to open district window');
        await DistrictsHelper.navigateToEditDistrictPage();
        StepLogger.stepId(1);
        StepLogger.step('Click on drop-down of Status field');
        await DistrictsHelper.clickOnStatusDropDown();
        StepLogger.verification('Active and Inactive values are displayed in the drop-down');
        await DistrictsHelper.verifyStatusSelected(activeStatus);
        await DistrictsHelper.verifyStatusSelected(inactiveStatus);

        StepLogger.stepId(2);
        StepLogger.step('Select Inactive value');
        await DistrictsHelper.selectAStatusFromDropDown(inactiveStatus);
        StepLogger.verification('User is able to select Inactive value for drop-down Status');
        await DistrictsHelper.verifyStatusSelected(inactiveStatus);

        StepLogger.stepId(3);
        StepLogger.step('Click Save button at bottom of district edit window');
        await DistrictsHelper.clickOnSaveButton();
        StepLogger.verification('Window is closed and changes are saved');
        await DistrictsHelper.verifyNewDistrictsScreenClosed();
    });

    it('To verify Cancel button functionality on Edit District window - [22460570]', async () => {
        // Auto generated by aurea-automation - util on Tue, 02 Apr 2019 11:32:26 GMT

        StepLogger.caseId = 22460570;
        const value = await PageHelper.getUniqueId();
        const inactive = DistrictsConstants.inactiveStatus;

        StepLogger.preCondition('Execute C22460555 to open district window');
        await DistrictsHelper.navigateToEditDistrictPage();

        StepLogger.stepId(1);
        StepLogger.step('Edit the Code field');
        await DistrictsHelper.enterCode(value);
        StepLogger.verification('User is able to Edit code field');
        await DistrictsHelper.verifyEnteredCode(value);

        StepLogger.stepId(2);
        StepLogger.step('Change Status to Inactive');
        await DistrictsHelper.selectAStatusFromDropDown(inactive);
        StepLogger.verification('User is able to change status to inactive');
        await DistrictsHelper.verifyStatusSelected(inactive);

        StepLogger.stepId(3);
        StepLogger.step('Click Cancel button');
        await DistrictsHelper.clickOnCancelButton();
        StepLogger.verification('Edit district window is closed and changes are not saved');
        await DistrictsHelper.verifyNewDistrictsScreenClosed();
    });
});

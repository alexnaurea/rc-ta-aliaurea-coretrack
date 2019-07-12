import { StepLogger } from '../../../../../../core/logger/step-logger';
import { CheckboxHelper } from '../../../../../components/html/checkbox-helper';
import { PageHelper } from '../../../../../components/html/page-helper';
import { DfElement } from '../../../../../components/misc-utils/df-elements-helper';
import { ExpectationHelper } from '../../../../../components/misc-utils/expectation-helper';
import { CommonPage } from '../../../common/common.po';
import { HomePage1Helper } from '../../../home-page/home-page1.helper';

import { UsersConstants } from './users.constants';
import { UsersPage } from './users.po';
export class UsersHelper {

    static async verifyUsersPageDisplayed() {
        StepLogger.subVerification('Verify Application Status Page Displayed');
        await UsersPage.applicationStatusPage.verifyDisplayedStatus();
    }

    static async clickPermissionsTab() {
        await PageHelper.executeInNewTab(async () => {
            await UsersPage.leftPanel.permissions.clickButton();
        }, 1, false);
    }

    static async clickSaveButton() {
        await UsersPage.header.saveBtn.clickButton();
    }

    static async verifyPermissionTab() {
        await UsersPage.permissionsTab.title.verifyDisplayedStatus();
    }

    static async revertToCheckPermission(checkboxElement: DfElement) {
        await this.checkPermission(checkboxElement);
        await this.clickSaveButton();
    }

    static async checkPermission(checkboxElement: DfElement) {
        const checked = await CheckboxHelper.isCheckboxChecked(checkboxElement);
        if (!checked) {
            await checkboxElement.clickCheckbox();
        }
    }

    static async uncheckPermission(checkboxElement: DfElement) {
        const checked = await CheckboxHelper.isCheckboxChecked(checkboxElement);
        if (checked) {
            await checkboxElement.clickCheckbox();
        }
    }

    static async verifyPermissionIsUncheched(checkboxElement: DfElement) {
        await ExpectationHelper.verifyCheckBoxNotSelected(checkboxElement);
    }

    static async navigateToUsersAndSelectOneInPermissionsTab() {
        await HomePage1Helper.navigateToAdministrationSecurityUsers();
        await PageHelper.executeInIFrame([CommonPage.xComponentsIFrame], async () => {
            await UsersPage.userItemElements.userItem(UsersConstants.elementNames.ayan).clickLink();
            await UsersPage.userItemElements.userItem(UsersConstants.elementNames.ayan).doubleClick();
            await UsersHelper.clickPermissionsTab();
        });
    }
}

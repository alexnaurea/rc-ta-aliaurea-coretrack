import { CheckboxHelper } from '../../../components/html/checkbox-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { HomePageHelper } from '../home-page/home-page.helper';

import { MyProfilePage } from './my-profile.po';

const { executeInNewTab } = PageHelper;

export class MyProfilePageHelper {

    static async verifyNewCasePageDisplayed(closeWindow = true) {
        await executeInNewTab(async () => {
            await MyProfilePage.header.title.verifyDisplayedStatus();
        }, Constants.number.one, closeWindow);
    }

    static async clickPermissionsTab() {
        await MyProfilePage.leftPanel.permissions.clickButton();
    }

    static async verifyPermissionTab() {
        await MyProfilePage.permissionsTab.title.verifyDisplayedStatus();
    }

    static async verifyDashboardPermissions() {
        await MyProfilePage.permissionsTab.dashboard.verifyDisplayedStatus();
    }

    static async selectQueuesPermission() {
        const checked = await CheckboxHelper.isCheckboxChecked(MyProfilePage.permissionsTab.queues);
        if (!checked) {
            await MyProfilePage.permissionsTab.queues.clickCheckbox();
        }
    }

    static async selectPipelinePermission() {
        const checked = await CheckboxHelper.isCheckboxChecked(MyProfilePage.permissionsTab.pipeline);
        if (!checked) {
            await MyProfilePage.permissionsTab.pipeline.clickCheckbox();
        }
    }

    static async verifyQueuesSelected() {
        await ExpectationHelper.verifyCheckboxIsChecked(MyProfilePage.permissionsTab.queues);
    }

    static async verifyPipelineSelected() {
        await ExpectationHelper.verifyCheckboxIsChecked(MyProfilePage.permissionsTab.pipeline);
    }

    static async clickSaveButton() {
        await MyProfilePage.header.saveBtn.clickButton();
    }

    static async searchDashboard() {
        await MyProfilePage.permissionsTab.dashboard.scrollToElement();
    }

    static async navigateToPermissionsTab() {
        await HomePageHelper.verifyMyProfileLinkDisplayed();
        await HomePageHelper.clickMyProfileLink();
        await MyProfilePageHelper.verifyNewCasePageDisplayed(false);
        await MyProfilePageHelper.clickPermissionsTab();
        await MyProfilePageHelper.verifyPermissionTab();
    }

    static async navigateToHomePage() {
        await PageHelper.switchToFirstTab();
    }
}

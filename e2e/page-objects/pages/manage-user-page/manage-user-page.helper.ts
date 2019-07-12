import { PageHelper } from '../../../components/html/page-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { MyProfilePage } from '../my-profile/my-profile.po';

import { ManageUserPageConstant } from './manage-user-page.constants';
import { ManageUserPage } from './manage-user-page.po';

const { elementNames: eNames } = ManageUserPageConstant;
const { executeInNewTab } = PageHelper;

export class ManageUserPageHelper {

    /**
     * Verify 'Manage User' page is displayed
     */
    static async verifyManageUserPageDisplayed() {
        await ManageUserPage.header.title.verifyContainsText(eNames.manageUser);
    }

    static async verifyUserScreenPageDisplayed(closeWindow = true) {
        await executeInNewTab(async () => {
            await MyProfilePage.header.title.verifyDisplayedStatus();
        }, Constants.number.one, closeWindow);
    }

    static async verifyUserListDisplayed() {
        await ManageUserPage.userList.verifyDisplayedStatus();
    }

    static async clickOnPermissionsTab() {
        await ManageUserPage.leftPanel.permissions.clickLink();
    }

    static async verifyPermissionTab() {
        await ManageUserPage.leftPanel.permissionsTitle.verifyDisplayedStatus();
    }

    static async clickOnContactIcon(name: string) {
        await ManageUserPage.userIcon(name).clickLink();
    }

    static async enterUserName(name: string) {
        await ManageUserPage.searchTextBox.sendKeys(name);
    }

    static async clickOnSearch() {
        await ManageUserPage.searchButton.clickLink();
    }
}

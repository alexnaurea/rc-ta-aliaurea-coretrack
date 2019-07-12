import { StepLogger } from '../../../../../../core/logger/step-logger';
import { PageHelper } from '../../../../../components/html/page-helper';
import { WaitHelper } from '../../../../../components/html/wait-helper';
import { Constants } from '../../../../../components/misc-utils/constants';
import { ExpectationHelper } from '../../../../../components/misc-utils/expectation-helper';
import { CommonPage } from '../../../common/common.po';
import { HomePageHelper } from '../../../home-page/home-page.helper';

import { ReferralSourcesPage } from './referral-sources.po';

export class ReferralSourcesHelper {

    static async verifyReferralSourcesPageDisplayed() {
        await ReferralSourcesPage.title.verifyDisplayedStatus();
    }

    static async clickAddReferralSource(switchToFrame: boolean = true) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        }

        await ReferralSourcesPage.buttons.addReferralSource.clickButton();
    }

    static async verifyReferralSourceDialog() {
        await PageHelper.switchToDefaultContent();
        await ReferralSourcesPage.referralSourceDialog.dialogTitle.verifyDisplayedStatus();
    }

    static async navigateToReferralSources() {
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.verifyOptionsUnderAdministration();
        await HomePageHelper.clickConfigurationUnderAdministration();
        await HomePageHelper.verifyOptionsUnderConfiguration();
        await HomePageHelper.clickReferralSourcesUnderConfigurationUnderAdministration();
        await ReferralSourcesHelper.verifyReferralSourcesPageDisplayed();
    }

    static async verifyIconMandatory(switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await ReferralSourcesPage.referralSourceDialog.iconMandatory.verifyDisplayedStatus();
    }

    static async clickSaveReferralSourceDialog(switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await ReferralSourcesPage.referralSourceDialog.save.clickButton();
    }

    static async verifyEnterNameDialog(toSwitch: boolean = false) {
        if (toSwitch) {
            await PageHelper.switchToiFrame(CommonPage.contentIFrameOnModal);
        }

        await ReferralSourcesPage.referralSourceDialog.enterName.verifyDisplayedStatus();
    }

    static async verifyCloseIcon() {
        await PageHelper.switchToDefaultContent();
        await ReferralSourcesPage.referralSourceDialog.closeButton.verifyDisplayedStatus();
    }

    static async clickCloseIcon() {
        await ReferralSourcesPage.referralSourceDialog.closeButton.clickButton();
    }

    static async verifyReferralSourceDialogClosed() {
        await ReferralSourcesPage.referralSourceDialog.dialogTitle.verifyHiddenStatus();
    }

    static async enterReferralName(name: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await ReferralSourcesPage.referralSourceDialog.inputName.sendKeys(name);
    }

    static async verifyReferralName(name: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await ReferralSourcesPage.referralSourceDialog.inputName.verifyTextBoxContains(name);
    }

    static async selectStatusOption(option: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await ReferralSourcesPage.referralSourceDialog.statusOption(option).clickButton();
    }

    static async verifyStatusSelectedOption(option: string, switchToFrame: boolean = false) {
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        const selected = await ReferralSourcesPage.referralSourceDialog.status.getSelectedOptionText();
        await ExpectationHelper.verifyStringEqualTo(selected, option);
    }

    static async verifyDialogClosedAndReferralSaved(referral: string) {
        await this.verifyReferralSourceDialogClosed();
        await this.searchReferral(referral);
        await ReferralSourcesPage.referralSources.item(referral).verifyDisplayedStatus();
    }

    static async searchReferral(referral: string) {
        const { referralSources } = ReferralSourcesPage;
        let page = Constants.number.one;
        await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        StepLogger.subStep('Wait for page number to display');
        await WaitHelper.waitForElementToBeDisplayed(referralSources.currentPage(page.toString()).item);
        StepLogger.subStep('Check if referral is present');
        let isVisible = await referralSources.item(referral).item.isPresent();

        while (!isVisible) {
            page++;
            await referralSources.nextPage.clickButton();
            StepLogger.subStep('Wait for page number to display');
            await WaitHelper.waitForElementToBeDisplayed(referralSources.currentPage(page.toString()).item);
            StepLogger.subStep('Check if subcategory is present');
            isVisible = await referralSources.item(referral).item.isPresent();
            if (isVisible) {
                break;
            }
        }
    }

    static async verifyReferralSaved(referral: string) {
        await ReferralSourcesPage.referralSources.item(referral).verifyDisplayedStatus();
    }

    static async verifyReferralNameAndStatus(referral: string, isActive: boolean = true) {
        await ReferralSourcesPage.referralSources.item(referral).verifyDisplayedStatus();
        if (isActive) {
            await ExpectationHelper.verifyCheckboxIsChecked(ReferralSourcesPage.referralSources.itemCheckbox(referral));
        } else {
            await ExpectationHelper.verifyCheckBoxNotSelected(ReferralSourcesPage.referralSources.itemCheckbox(referral));
        }
    }

    static async verifyPageButtons(switchToFrame: boolean = true) {
        const { buttons } = ReferralSourcesPage;
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(ReferralSourcesPage.resourceOneIFrame);
        }

        await buttons.addReferralSource.verifyDisplayedStatus();
        await buttons.refresh.verifyDisplayedStatus();
        await buttons.exportToExcel.verifyDisplayedStatus();
        await buttons.exportToWord.verifyDisplayedStatus();
    }

    static async verifyReferralDialogFields(switchToFrame: boolean = true) {
        const { referralSourceDialog } = ReferralSourcesPage;
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await referralSourceDialog.inputName.verifyDisplayedStatus();
        await referralSourceDialog.status.verifyDisplayedStatus();
    }

    static async verifyReferralDialogButtons(switchToFrame: boolean = true) {
        const { referralSourceDialog } = ReferralSourcesPage;
        if (switchToFrame) {
            await PageHelper.switchToDefaultContentAndIFrame(CommonPage.contentIFrameOnModal);
        }

        await referralSourceDialog.save.verifyDisplayedStatus();
        await referralSourceDialog.cancel.verifyDisplayedStatus();
    }

    static async navigateToAdministration() {
        await HomePageHelper.clickAdministrationLink();
        await HomePageHelper.verifyOptionsUnderAdministration();
    }
}

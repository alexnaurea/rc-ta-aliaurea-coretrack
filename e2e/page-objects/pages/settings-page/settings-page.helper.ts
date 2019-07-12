import { EndpointHelper } from '../../../components/misc-utils/endpoint-helper';
import { BasePageHelper } from '../base-page.helper';

import { SettingsPage } from './settings-page.po';

export class SettingsPageHelper extends BasePageHelper {

    /**
     * Verify fields displayed under Settings page
     */
    static async verifyFieldsDisplayed() {
        const form = SettingsPage.form;
        await form.url.verifyDisplayedStatus();
        await form.save.verifyDisplayedStatus();
        await form.back.verifyDisplayedStatus();
    }

    url(): string {
        return EndpointHelper.login;
    }
}

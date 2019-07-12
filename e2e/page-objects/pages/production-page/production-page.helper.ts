import { EndpointHelper } from '../../../components/misc-utils/endpoint-helper';
import { BasePageHelper } from '../base-page.helper';

import { ProductionPage } from './production-page.po';

export class ProductionPageHelper extends BasePageHelper {

    /**
     * Verify 'Production' page is displayed
     */
    static async verifyProductionPageIsDisplayed() {
        await ProductionPage.title.verifyDisplayedStatus();
    }

    url(): string {
        return EndpointHelper.production;
    }
}

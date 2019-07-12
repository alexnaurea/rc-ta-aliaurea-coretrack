import { WaitHelper } from '../../../components/html/wait-helper';

import { PipelinePage } from './pipeline.po';

export class PipelinePageHelper {

    static async verifyPipelinePageDisplayed() {
        await PipelinePage.titles.pipeline.verifyDisplayedStatus();
    }

    static async waitForOpportunitiesContainerToLoad() {
        await WaitHelper.waitForElementToBeDisplayed(PipelinePage.elements.opportunitiesContainer.item);
    }
}

import { StepLogger } from '../../../../core/logger/step-logger';
import { DropDownHelper } from '../../../components/html/dropdown-helper';
import { PageHelper } from '../../../components/html/page-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { Constants } from '../../../components/misc-utils/constants';
import { EndpointHelper } from '../../../components/misc-utils/endpoint-helper';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { AccountsPage } from '../accounts/accounts.po';
import { BasePageHelper } from '../base-page.helper';
import { CommonPage } from '../common/common.po';
import { TasksQueuePage } from '../tasks-queue-page/tasks-queue-page.po';

import { QueuedOpportunitiesPage } from './queued-opportunities-page.po';

const { executeInIFrame } = PageHelper;

export class QueuedOpportunitiesPageHelper extends BasePageHelper {
    /**
     * Verify is 'QueuedOpportunities' page is displayed
     */
    static async verifyQueuedOpportunitiesPageDisplayed() {
        await QueuedOpportunitiesPage.title.verifyDisplayedStatus();
    }

    static async clickRefresh() {
        StepLogger.subStep('Click Refresh');
        await executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await QueuedOpportunitiesPage.buttons.refresh.clickButton();
        });
    }

    static async clickDollar() {
        StepLogger.subStep('Click Dollar');
        await executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await QueuedOpportunitiesPage.opportunities.dollarSign.clickButton();
        });
    }

    static async selectGroupingOption(groupingText: string) {
        StepLogger.subStep(`Select ${groupingText} Grouping Option`);
        await executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await DropDownHelper.selectOptionByCssText(TasksQueuePage.header.grouping, groupingText);
        });
    }

    static async verifySelectedGroupingOption(groupingText: string) {
        StepLogger.subVerification(`Verify Select ${groupingText} Grouping Option`);
        await executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            const selectedOption = await DropDownHelper.getTheSelectedOptionText(TasksQueuePage.header.grouping);
            await ExpectationHelper.verifyStringEqualTo(selectedOption.toLowerCase(), groupingText.toLowerCase());
        });
    }

    static async verifyQueueList() {
        StepLogger.subVerification('Verify Queue List');
        await executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            const queueCount = await QueuedOpportunitiesPage.opportunities.queueList.item.count();
            await ExpectationHelper.verifyValueGraterThan(queueCount, Constants.number.zero);
        });
    }

    static async clickOnCollapseGroupIcon() {
        StepLogger.subStep('Click on Collapse Group icon');
        await executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await AccountsPage.casePageElements.collapseIcon.hoverOverAndClick();
        });
    }

    static async verifyGroupCollapsed() {
        StepLogger.subVerification('Verify collapsed group');
        await executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await AccountsPage.casePageElements.expandIcon.verifyDisplayedStatus();
        });
    }

    static async clickOnExpandGroupIcon() {
        StepLogger.subStep('Click on Expand Group icon');
        await executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await AccountsPage.casePageElements.expandIcon.hoverOverAndClick();
        });
    }

    static async verifyGroupExpanded() {
        StepLogger.subVerification('Verify Expanded group');
        await executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            await AccountsPage.casePageElements.expandIcon.verifyHiddenStatus();
        });
    }

    static async clickQueueFilter() {
        StepLogger.subStep('Click Queue Filter');
        let selectedOption: string;
        await executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            selectedOption = await QueuedOpportunitiesPage.opportunities.queueFilterOptions.item.last().getText();
            await WaitHelper.waitForPageToStable();
            await DropDownHelper.selectOptionByCssText(QueuedOpportunitiesPage.opportunities.queueFilter, selectedOption);
       });
        return selectedOption;
    }

    static async verifySelectedQueueOption(expectedoption: string, switchBack = true) {
        StepLogger.subVerification('Verify Selected Queue option');
        await executeInIFrame([CommonPage.resourceOneIFrame], async () => {
            const selectedOption = await QueuedOpportunitiesPage.opportunities.queueFilter.getSelectedOptionText();
            await ExpectationHelper.verifyStringEqualTo(selectedOption.toLowerCase(), expectedoption.toLowerCase() );
        }, switchBack);
    }

    url(): string {
        return EndpointHelper.queuedOpportunites;
    }
}

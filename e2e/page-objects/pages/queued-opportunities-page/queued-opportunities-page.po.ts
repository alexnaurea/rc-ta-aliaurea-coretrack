import { by } from 'protractor';

import { $, $$ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { CommonPage } from '../common/common.po';

import { QueuedOpportunitiesPageConstant } from './queued-opportunities-page.constants';

const { elementNames: eNames, attributes: { id, classes } } = QueuedOpportunitiesPageConstant;
const { tags } = HtmlHelper;

export class QueuedOpportunitiesPage {

        static get title() {
            return $(by.cssContainingText(tags.label,
                eNames.queuedOpportunities),
                eNames.queuedOpportunities);
        }

        static get buttons() {
            return {
                refresh: CommonPage.getElementByIdEndsWith(id.refresh,
                    eNames.refresh),
            };
        }

        static get opportunities() {
            return {
                dollarSign: $(by.css(`${tags.td}.${classes.columnIcon} ${tags.a}[href*='${eNames.opportunityList}']`),
                eNames.dollarSign),
                queueList: $$(by.css(`${tags.div}.${classes.gridDataDiv} ${tags.tr}`),
                    eNames.queueList),
                queueFilterOptions: $$(by.css(`${tags.select}[id$=${id.queueFilter}] ${tags.option}`),
                    eNames.queueFilterOption),
                queueFilter: $(by.css(`select[id$=${id.queueFilter}]`),
                    eNames.queueFilter),
            };
        }
}

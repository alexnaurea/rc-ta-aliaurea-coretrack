import { by } from 'protractor';

import { $ } from '../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';

import { TicketsPageConstant } from './tickets-page.constants';

const { elementNames: eNames, attributes: { classes, id } } = TicketsPageConstant;
const { tags } = HtmlHelper;

export class TicketsPage {

    static get header() {
        return {
            title: $(by.css(`${tags.label}${classes.title}`),
                eNames.ticketQueue),
            dialogTitle: $(by.css(`${tags.span}${classes.dialogTitle}`),
                eNames.dialogBox),
        };
    }

    static get firstTicket() {
        return  $(by.xpath('(//*[@class="entity-button"] //span)[1]'),
                eNames.ticketIcon);
    }

    static get ownerSearch() {
        return  $(by.css(`[id*="${id.ownerSelector}"] ${classes.search}`),
            eNames.search);
    }

    static get ownerQueues() {
        return  $(by.css(`[id*="${id.ownerSelector}"] ${classes.queues}`),
            eNames.queues);
    }

    static get selectedDetailsTab() {
        return  $(by.xpath(`//*[@class="${classes.select}"] //*[text()="${eNames.details}"]`),
            eNames.details);
    }
}

import { By } from 'protractor';

import { $ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';

import { SalesStagesPageConstant } from './sales-stages-page.constants';

const { elementNames: eNames, classes, attributes } = SalesStagesPageConstant;
const { tags } = HtmlHelper;

export class SalesStagesPage {

    static get firstSalesStageEntry() {
        return $(By.xpath(`//${tags.tr}[contains(@class, ${classes.gridRowAptean})]//${tags.nobr}`), eNames.firstSalesStageEntry);
    }

    static get firstSalesStageEntryStatus() {
        return $(By.css(`${tags.td}.${classes.gridCheckBox}`), eNames.firstSalesStageEntryStatus);
    }
    static get saveButton() {
        return $(By.css(`${tags.input}.${classes.actionButton}[value="${attributes.saveValue}"]`), eNames.saveButton);
    }

    static get addSalesStage() {
        return $(By.css(`${tags.a}.${classes.menuButton}[title="${eNames.addSalesStage}"]`), eNames.addSalesStage);
    }

    static get uiDialogTitle() {
        return $(By.cssContainingText(tags.span, eNames.newSalesStage), eNames.newSalesStage);
    }

    static get editDialogTitle() {
        return $(By.cssContainingText(tags.span, eNames.editSalesStage), eNames.editSalesStage);
    }

    static get pageTitle() {
        return $(By.cssContainingText(tags.label, eNames.manageSalesStages), eNames.manageSalesStages);
    }

    static get statusDropdown() {
        return $(By.xpath(
            `//${tags.span}[text()='${eNames.status}']//ancestor::${tags.div}[contains(@class, '${classes.fieldContainer}')]//${tags.select}`),
            eNames.status);
    }

}

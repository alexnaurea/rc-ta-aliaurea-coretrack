import { by, By } from 'protractor';

import { $ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { xpath } from '../../../components/misc-utils/xpath-builder';
import { CommonPage } from '../common/common.po';
import { ContactPageConstant } from '../contact-page/contact-page.constants';

import { ManageCompensationPageConstant } from './manage-compensation-page.constants';

const { elementNames: eNames, attributes: { value, classes, name, } } = ManageCompensationPageConstant;
const { tags, attributes } = HtmlHelper;
const { attributes: { classes: contactClasses } } = ContactPageConstant;

export class ManageCompensationPage {

    static get addCompensation() {
        return $(By.css(`${tags.a}${classes.menuButton}[title="${eNames.addCompensation}"]`), eNames.addCompensation);

    }

    static get uiDialogTitle() {
        return $(By.cssContainingText(tags.span, eNames.newCompensationPlan), eNames.newCompensationPlan);
    }

    static get editDialogTitle() {
        return $(By.cssContainingText(tags.span, eNames.dialogBox), eNames.dialogBox);
    }

    static get saveButton() {
        return $(By.css(`${tags.input}${classes.actionButton}[value="${value.saveValue}"]`), eNames.saveButton);
    }

    static get header() {
        return {
            title: $(by.css(`${tags.label}${classes.title}`),
                eNames.manageCompensation),
        };
    }

    static compensationName(item: string) {
        const parentTr = '//parent::td //parent::tr';
        return $(by.xpath(`//nobr[contains(text(),"${item}")] ${parentTr} //a`),
            eNames.plan);
    }

    static get dialogBox() {
        const ancestorTable = 'MainContentHolder_pdg';
        return {
            title: $(by.css(`${tags.span}${classes.dialogTitle}`),
                eNames.dialogBox),
            existingCompDetails: CommonPage.getElementByText(
                name.existingCompDetails, name.existingCompDetails),
            compDetails: $(by.css(`[id*="${ancestorTable}"] .GridDataDiv_Aptean`),
                name.compDetails),
            firstEdit: $(By.xpath('(.//span[@class="icon-edit"])[1]'), eNames.edit),
            detailsTitle: $(by.css(`${tags.span}${classes.dialogTitle}`),
                eNames.detailsDialogBox),
        };
    }

    static validationError(message: string) {
        return $(by.xpath(`//label[text()='${message}']`), message);
    }

    static get elements() {
        const label = ManageCompensationPageConstant.elementNames;
        const xpath1 = 'ancestor::div[contains(@class,"field-container")]';
        return {
            firstFilter: $(by.css(`select[id*='${label.viewSelector}']`), label.viewSelector),
            secondFilter: $(by.css(`select[id*='${label.ownerSelector}']`), label.ownerSelector),
            compensationEntry: (index: number) => $(xpath(tags.tBody)
                .anywhere(tags.tr)
                .containsAttributesWithOr([attributes.class, attributes.class],
                    [contactClasses.gridRowAptean, contactClasses.gridAltRowAptean])
                .descendant(tags.td, 2)
                .nthChild(index)
                .buildByObject(),
                label.compensationEntry),
            addACompDetailButton: $(by.css(`input[value='${label.addACompDetail}']`), label.addACompDetail),
            branch: $(by.xpath(`//span[text()='${label.compIsFor}']/${xpath1}//select`), label.compIsFor),
        };
    }
}

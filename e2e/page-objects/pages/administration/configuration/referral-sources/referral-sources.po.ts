import { by } from 'protractor';

import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';
import { xpath } from '../../../../../components/misc-utils/xpath-builder';

import { ReferralSourcesConstant } from './referral-sources.constants';

const { elementNames: eNames, ids, classes, messages: msg } = ReferralSourcesConstant;
const { tags, attributes } = HtmlHelper;

export class ReferralSourcesPage {

    static get buttons() {
        return {
            addReferralSource:  $(by.css(`a[id$="${ids.addReferralSource}"]`), eNames.addReferralSource),
            refresh:  $(by.css(`a[id$="${ids.refresh}"]`), eNames.refresh),
            exportToExcel:  $(by.css(`a[id$="${ids.exportToExcel}"]`), eNames.exportToExcel),
            exportToWord:  $(by.css(`a[id$="${ids.exportToWord}"]`), eNames.exportToWord),
        };
    }

    static get title() {
        return $(by.cssContainingText(tags.label, eNames.pageTitle), eNames.pageTitle);
    }

    static get resourceOneIFrame() {
        return $(by.id(ids.resourceOneFrame), eNames.resourceOneFrame);
    }

    static get reportOneIFrame() {
        return $(by.id(eNames.reportFrame), eNames.reportFrame);
    }

    static get referralSourceDialog() {
        return {
            dialogTitle: $(by.cssContainingText(`span[id*=${ids.dialogId}].${classes.dialogTitle}`,
                eNames.referralSource), eNames.referralSource),
            iconMandatory: $(xpath(tags.div)
                .contains(attributes.class, classes.fieldContainer)
                .anywhere(tags.span)
                .contains(attributes.class, classes.iconMandatory)
                .first()
                .buildByObject(), eNames.asterisk),
            inputName: $(by.css(`input[id*=${ids.nameInput}][id$=${ids.ps}]`), eNames.referralSource),
            status: $(by.css(`select[id*=${ids.nameInput}]`), eNames.status),
            statusOption: (name: string) => $(
                by.cssContainingText(`select[id*=${ids.nameInput}] option`, name), name),
            save: $(by.css(`input[value=${eNames.save}]`), eNames.save),
            cancel: $(by.css(`input[value=${eNames.cancel}]`), eNames.cancel),
            enterName: $(by.cssContainingText(tags.label, msg.enterReferralName), msg.enterReferralName),
            closeButton: $(by.css(`span.${classes.closeIcon}`), eNames.close),
        };
    }

    static get referralSources() {
        return {
            nextPage: $(by.cssContainingText(tags.a, eNames.greater), eNames.nextPage),
            currentPage: (page: string) => $(
                by.cssContainingText(`tr.${classes.pager} ${tags.b} ${tags.span}`, page), eNames.page),
            item: (name: string) => $(
                by.cssContainingText(`${tags.td} ${tags.nobr}`, name), name),
            itemCheckbox: (name: string) => $(by.xpath(
                `//tr[descendant::nobr[contains(text(),"${name}")]][contains(@class,"${classes.itemClass}")]//input`), name),
        };
    }
}

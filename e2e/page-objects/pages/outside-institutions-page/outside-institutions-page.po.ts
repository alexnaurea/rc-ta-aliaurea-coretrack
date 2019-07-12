import { by, By } from 'protractor';

import { $ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';

import { OutsideInstitutionsConstant } from './outside-institutions.constants';

const { elementNames: eNames, classes } = OutsideInstitutionsConstant;
const { tags } = HtmlHelper;

export class OutsideInstitutionsPage {
    static get pageTitle() {
        return $(By.cssContainingText(tags.label, eNames.manageOutsideInstitutions), eNames.manageOutsideInstitutions);
    }

    static get addOutsideInstitutionsButton() {
        return $(by.css(`${tags.a}.${classes.menuButton}[title="${eNames.addOutsideInstitution}"]`), eNames.addOutsideInstitution);
    }

    static get uiDialogTitle() {
        return $(By.cssContainingText(tags.span, eNames.newOutsideInstitution), eNames.newOutsideInstitution);
    }
}

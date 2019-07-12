import { by } from 'protractor';

import { Constants } from '../../../components/misc-utils/constants';
import { $, $cssContainingText } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { xpath } from '../../../components/misc-utils/xpath-builder';
import { CommonPage } from '../common/common.po';
import { NewCasePageConstant } from '../new-case-page/new-case-page.constants';
import { NewCasePage } from '../new-case-page/new-case-page.po';

import { NewOpportunityPageConstant } from './new-opportunity-page.constants';

const { elementNames: eNames, attributes: { id, classes } } = NewOpportunityPageConstant;
const { attributes, tags } = HtmlHelper;

export class NewOpportunityPage {

    static get header() {
        return {
            title: $cssContainingText(tags.h1,
                eNames.newOpportunity),
            opportunity: $cssContainingText(tags.h1,
                eNames.opportunity),
        };
    }

    static get information() {
        return {
            contact: $(by.css(`.${classes.entityButton} + [${attributes.id}$='${id.activityDetailsControl}']`),
                eNames.contact),
        };
    }

    static get selectContact() {
        const { selectContact } = NewCasePage;
        return {
            title: selectContact.title,
            selectContact: CommonPage.getElementByIdEndsWith(id.activityDetailsContactSelectButton,
                NewCasePageConstant.elementNames.selectContact),
            firstName: selectContact.firstName,
            lastName: selectContact.lastName,
            company: selectContact.company,
            return: selectContact.return,
            prospect: selectContact.prospect,
            searchContacts: selectContact.searchContacts,
            contactCheckbox: (fname: string) => selectContact.contactCheckbox(fname),
            contactCheckboxList: selectContact.contactCheckboxList,
            useSelectedContact: selectContact.useSelectedContact,
            continueWithNewProspect: selectContact.continueWithNewProspect,
            firstContactCheckbox: selectContact.firstContactCheckbox,
            firstContactName: selectContact.firstContactName,
        };
    }

    static get verifyContactLeads() {
        return {
            title: $cssContainingText(`.${classes.uiDialogTitle}`,
                eNames.verifyContactLeads),
            returnToNew: $(by.css(`[${attributes.value}='${eNames.returnToNew}']`),
                eNames.returnToNew),
            header: $(by.css(`div.${classes.uiWidgetHeader}`), eNames.verifyContactLeads),
        };
    }

    static get newOpportunityElements() {
        return {
            contact: $(by.css('input[id*="_ctl00_activitydetails_control"]'), eNames.contact),
            contactSearchIcon: $(by.css('input[id*="activitydetails_contactselectbutton"]'), eNames.searchIcon),
            productDropdown: $(by.css('input[id*="_selectorproductSelector_Input"]'), eNames.product),
            owner: $(by.css('input[id*="ownerSelector_ctl00_activitydetails_control"]'), eNames.owner),
            referrer: $(by.css('div[id*="_userselector_ctl00_userselectorsl_dpbx"]'), eNames.referrer),
            quickNotes: $(by.css('body'), eNames.quickNotes),
            referrerBranch: $(by.css('div[id*="_ddlreferrerbranch_ctl00_cd"]'), eNames.referrerBranch),
            created: $(by.css('div[id*="s_ctl16_ctl00_cd"]'), eNames.created),
            forecast: $(by.css('input[id*="_forecast_date_control_dateInput"]'), eNames.forecast),
            fundsSource: $(by.css('select[id*="_outside_business_ctl00_outside_business_control"]'),
                eNames.fundsSource),
            referralSource: $(by.css('select[id*="referral_source_id_ctl00_referral_source_id_control"]'),
                eNames.referralSource),
            referringContact: $(by.css('input[id*="_referring_contact_control"]'), eNames.referringContact),
            salesStage: $(by.css('select[id*="sales_stage_ctl00_sales_stage_control"]'), eNames.salesStage),
            probability: $(by.css('input[id*="probability_ctl00_probability_control"]'), eNames.probability),
            conditional: $(by.css('div[id*="conditionalcheckbox_ctl00_cd"]'), eNames.conditional),
            save: $(by.css(`a[title="${eNames.save}`), eNames.save),
            saveAndAdd: $(by.css(`a[title="${eNames.saveAndAdd}`), eNames.saveAndAdd),
            close: $(by.css(`a[title="${eNames.close}`), eNames.close),
            warningPopupTitle: $(by.cssContainingText(tags.span, eNames.warning), eNames.warning),
            productRecomendationButton: $(xpath(tags.a)
                .contains('id', 'productRecommedationButton')
                .nthChild(Constants.number.one)
                .buildByObject(), eNames.recommendationIcon),
            subject: $(by.css('span.subject'), eNames.subject),
            recommendationCloseButton: $(by.css('span.ui-icon-closethick'), eNames.recommendationCloseIcon),
            selectMeOwnerButton: $(by.css('span.icon-select-me'), eNames.selectMe),
            genCheckbox: $(by.css('input[id*="selectorgenericCheckBox"]'), eNames.selectMe),
            productType: $(by.css('input[id*="selectorproductTypeSelector_Input"]'), eNames.productType),
            productTypeOption(option: string) {
                return $(xpath(tags.div)
                    .contains('id', 'selectorproductTypeSelector_DropDown')
                    .descendant(tags.div).descendant(tags.ul)
                    .descendant(tags.li)
                    .textContains(option)
                    .buildByObject(), option);
            },
            productNameOption(option: string) {
                return $(xpath(tags.div)
                    .contains('id', 'selectorproductSelector_DropDown')
                    .descendant(tags.div).descendant(tags.ul)
                    .descendant(tags.li)
                    .textContains(option)
                    .buildByObject(), option);
            },
            selectAProduct: $(by.css(`${tags.input}[value="${eNames.selectAProduct}"]`), eNames.selectAProduct),
        };
    }

    static get requiredFieldValidationMessage() {
        return $(xpath(tags.span).contains('style', 'color: red').buildByObject(), eNames.requiredFieldMessage);
    }
}

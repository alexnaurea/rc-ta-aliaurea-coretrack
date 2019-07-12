import { by } from 'protractor';

import { $, $$, $cssContainingText } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { xpath } from '../../../components/misc-utils/xpath-builder';
import { CommonPage } from '../common/common.po';
import { NewProspectPage } from '../new-prospect-page/new-prospect-page.po';

import { NewAccountPageConstant } from './new-account-page.constants';

const { elementNames: eNames, attributes: { name, classes, id } } = NewAccountPageConstant;
const { tags, attributes } = HtmlHelper;

export class NewAccountPage {

    static get title() {
        return $(by.cssContainingText(tags.h1,
            eNames.newAccount),
            eNames.newAccount);
    }

    static get sections() {
        return {
            information: $(by.cssContainingText(`.${classes.subSection}`,
                eNames.information),
                eNames.information),
            productDetails: $(by.cssContainingText(`.${classes.subSection}`,
                eNames.productDetails),
                eNames.productDetails),
        };
    }

    static get information() {
        return {
            contact: $(by.css(`[id$='${id.openContact}'] + [name$='${name.accountDetailsControl}']`),
                eNames.information),
            product: $(by.css(`[name$='${name.productTypeSelector}']`),
                eNames.information),
            owner: $(by.css(`[id$='${id.userDisplayTable}'] [name$='${name.accountDetailsControl}']`),
                eNames.owner),
            status: $(by.css(`[name$='${name.activityStatusDD}']`),
                eNames.status),
            acct: $(by.css(`[name$='${name.externalKeyID}']`),
                eNames.acct),
            contentIFrame: $(by.css(`[id$='${id.contentIframe}']`),
                eNames.contentIFrame),
            description: $(by.css(tags.body),
                eNames.description),
            created: $(xpath(tags.input)
                .contains(attributes.name, name.dateInput)
                .first()
                .buildByObject(), eNames.created),
            forecast: $(xpath(tags.input)
                .contains(attributes.name, name.dateInput)
                .nthChild(2)
                .buildByObject(), eNames.forecast),
            fundsSource: $(by.css(`[name$='${name.outsideBusinessControl}']`),
                eNames.fundsSource),
            referralSource: $(by.css(`[name$='${name.referralSourceIdControl}']`),
                eNames.referralSource),
            calendarIcon: $(by.className(classes.iconCalendar),
                eNames.calendarIcon),
            clockIcon: $(by.className(classes.clockIcon),
                eNames.clockIcon),
            calenderPopUp: $(by.css(`${tags.table}[class*='${classes.calendarPopUp}']`), eNames.calendarPopUp),
            timePopUp: $(by.css(`${tags.table}[class*='${classes.timePopUp}']`), eNames.timePicker),
            productOption: $$(by.css(`div[id$='${name.productTypeSelector}'] ul li`), eNames.product),
            brokerage: $(by.cssContainingText(`div[id*='${name.productTypeSelector}'] ul li`, eNames.brokerage), eNames.brokerage),
            commercialChecking: $(by.cssContainingText(`div[id*='${name.productTypeSelector}'] ul li`, eNames.commercialChecking), eNames.commercialChecking),
            creditCard: $(by.cssContainingText(`div[id*='${name.productTypeSelector}'] ul li`, eNames.creditCard), eNames.creditCard),
            mutualFunds: $(by.cssContainingText(`div[id*='${name.productTypeSelector}'] ul li`, eNames.mutualFunds), eNames.mutualFunds),
            openedAccount: $(by.cssContainingText(`[name$='${name.activityStatusDD}'] option`, eNames.openedAccount), eNames.openedAccount),
            closedAccount: $(by.cssContainingText(`[name$='${name.activityStatusDD}'] option`, eNames.closedAccount), eNames.closedAccount),
            referralSourceOption: $$(by.css(`[name$='${name.referralSourceIdControl}'] option`), eNames.referralSource),
            callCenter: $(by.cssContainingText(`[name$='${name.referralSourceIdControl}'] option`, eNames.callCenter), eNames.callCenter),
            emailLead: $(by.cssContainingText(`[name$='${name.referralSourceIdControl}'] option`, eNames.emailLead), eNames.emailLead),
            conventions: $(by.cssContainingText(`[name$='${name.referralSourceIdControl}'] option`, eNames.conventions), eNames.conventions),
            directMail: $(by.cssContainingText(`[name$='${name.referralSourceIdControl}'] option`, eNames.directMail), eNames.directMail),
            productDetailOption: $$(by.css(`div[id$='${name.selectProductSelector}'] ul li`), eNames.information),
            searchContact: $(by.css(`button[id*='${id.seachContact}']`), eNames.searchContact),
            searchContactList: $(by.xpath(`(//div[contains(@id,'${id.gridData}')]//td[@class='${classes.gridCheckBox}']//input)[1]`), eNames.searchContact),
            productDetailOptions: $$(by.css(`div[id*='${name.selectProductSelector}'] ul li`), eNames.productDetails),
            productDetail: $(by.css(`div[id$='${name.selectProductSelector}']`), eNames.productDetails),
            productDetailSpecificOption: (option: string) => $cssContainingText(`div[id*='${name.selectProductSelector}'] ul li`,
                option),
        };
    }

    static get productDetails() {
        return {
            potentialInvestment: $(xpath()
                .contains(attributes.id, id.numericValidator)
                .precendingSibling(tags.input)
                .buildByObject(), eNames.potentialInvestment),
            mandatoryIcons: {
                potentialInvestment: $(xpath()
                    .contains(attributes.class, classes.iconMandatory)
                    .precendingSibling(tags.span)
                    .textContains(eNames.potentialInvestment)
                    .buildByObject(), eNames.potentialInvestment),
            },
        };
    }

    static get clock() {
        return {
            selectTime: (time: string) => $(xpath(tags.table)
                    .contains(attributes.id, id.timeViewTdl)
                    .anywhere(tags.td)
                    .descendant(tags.a)
                    .text(time)
                    .buildByObject(),
                time),
        };
    }

    static get calendar() {
        return {
            outOfRangeDate: (date: number) => $(xpath(tags.td)
                .contains(attributes.class, classes.rcOtherMonth)
                .anywhere(tags.a)
                .text(String(date))
                .first()
                .buildByObject(),
                eNames.calenderDateOutOfRange),
            inRangeDate: (date: number) => $(xpath(tags.td)
                .not()
                .contains(attributes.class, classes.rcOtherMonth, true)
                .anywhere(tags.a)
                .text(String(date))
                .first()
                .buildByObject(),
                eNames.calenderDateInRange),
        };
    }

    static get fundsSourceOptions() {
        return {
            inside: $(xpath(tags.select)
                    .contains(attributes.name, name.outsideBusinessControl)
                    .descendant(tags.option)
                    .text(eNames.inside)
                    .buildByObject(),
                eNames.inside),
            outside: $(xpath(tags.select)
                .contains(attributes.name, name.outsideBusinessControl)
                .descendant(tags.option)
                .text(eNames.outside)
                .buildByObject(),
                eNames.outside),
        };
    }

    static get links() {
        return {
            save: CommonPage.getElementByIdEndsWith(id.saveButton, eNames.save),
            close: CommonPage.getElementByIdEndsWith(id.closeButton, eNames.close),
        };
    }

    static get leftPane() {
        return {
            overView: $(by.cssContainingText(`td.${classes.cellNavigation} span`, eNames.overView), eNames.overView),
            household: NewProspectPage.getLeftPane(eNames.household),
        };
    }

    static get topTab() {
        return {
            overView: $(by.cssContainingText(`td.${classes.cellContents} div[class*='${classes.tabStrip}'] span`, eNames.overView), eNames.overView),
        };
    }

    static get errorMessage() {
        return {
            contactRequired: CommonPage.getElementByIdEndsWith(id.requiredFieldValidator, eNames.contactRequired),
            accNumberRequired: CommonPage.getElementByIdEndsWith(id.accIdValidator, eNames.accNumberRequired),
        };
    }

    static get dialogBox() {
        return {
            window: $(by.css(`div#${id.confirmDialog}`), eNames.confirmDialog),
            title: $(by.css(`.${classes.uiDialogTitle}`), eNames.confirmDialogTitle),
            cancelButton: $(by.cssContainingText(`div.${classes.uiDialogButtonSet} button`, eNames.cancel), eNames.cancel),
            okButton: $(by.cssContainingText(`div.${classes.uiDialogButtonSet} button`, eNames.ok), eNames.ok),
        };
    }

    static get topMenu() {
        return {
            name: $(by.css(`div[id*='${id.topMenu}'] span.${classes.displayName}`), eNames.name),
            email: $(by.css(`div[id*='${id.topMenu}'] span.${classes.entityInfo}`), eNames.email),
            phone: $(by.css(`div[id*='${id.topMenu}'] span.${classes.headerLabel}.${classes.phone}`), eNames.phone),
        };
    }
}

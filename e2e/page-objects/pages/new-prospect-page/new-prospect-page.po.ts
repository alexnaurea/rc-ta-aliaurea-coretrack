import { by } from 'protractor';

import { $ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { CommonPage } from '../common/common.po';
import { NewCasePage } from '../new-case-page/new-case-page.po';

import { NewProspectPageConstant } from './new-prospect-page.constants';

const { elementNames: eNames, attributes: { id, classes } } = NewProspectPageConstant;
const { tags } = HtmlHelper;

export class NewProspectPage {

    static get header() {
        const { header } = NewCasePage;
        return {
            title: $(by.cssContainingText(tags.h1,
                eNames.newProspectDefault),
                eNames.newProspectDefault),
            commercialTitle: $(by.cssContainingText(tags.h1,
                eNames.newProspectCommercial),
                eNames.newProspectCommercial),
            save: header.save,
            close: header.close,
            admin: CommonPage.getElementByIdEndsWith(id.mainMenuM1,
                eNames.admin),
            threeDots: CommonPage.getElementByIdEndsWith(id.threeDots,
                eNames.threeDots),
            recommendation: CommonPage.getElementByIdEndsWith(id.recommendation,
                eNames.recommendation),
            print: CommonPage.getElementByIdEndsWith(id.print,
                eNames.print),
            newTitle: CommonPage.getElementByIdEndsWith(id.header,
                eNames.title),
            phone: CommonPage.getElementByClassContains(classes.phone,
                eNames.workPhone),
        };
    }

    static get form() {
        return {
            information: {
                firstName: CommonPage.getElementByIdEndsWith(id.firstNameControl,
                    eNames.firstName),
                lastName: CommonPage.getElementByIdEndsWith(id.lastNameControl,
                    eNames.lastName),
                middle: CommonPage.getElementByIdContains(id.middleNameControl,
                    eNames.middle),
                syncToOutLook: $(by.css(`div[id*='${id.syncToOutLook}']`),
                    eNames.syncToOutLook),
                doNotContactInCampaigns: $(by.css(`div[id*='${id.doNotContactInCampaigns}']`),
                    eNames.doNotContactInCampaigns),
                companyName: CommonPage.getElementByIdEndsWith(id.companyNameControl,
                    eNames.companyName),
                title: CommonPage.getElementByIdEndsWith(id.titleControl,
                    eNames.title),
                firstNameRequired: CommonPage.getElementByIdEndsWith(id.firstNameRequired,
                    eNames.firstNameRequired),
                lastNameRequired: CommonPage.getElementByIdEndsWith(id.lastNameRequired,
                    eNames.lastNameRequired),
                dateOfBirth: CommonPage.getElementByIdContains(id.dateOfBirth,
                    eNames.dateOfBirth),
                driversLicenceNumber: CommonPage.getElementByIdEndsWith(id.driversLicenceNumber,
                    eNames.driversLicenceNumber),
                driverLicenceState: CommonPage.getElementByIdEndsWith(id.driverLicenceState,
                    eNames.driversLicenceState),
                driversLicenseExpiration: CommonPage.getElementByIdContains(id.driversLicenseExpiration,
                    eNames.driversLicenceExpiration),
                socialSecurityNumber: CommonPage.getElementByIdEndsWith(id.socialSecurityNumber,
                    eNames.socialSecurityNumber),
                address: CommonPage.getElementByIdEndsWith(id.address,
                    eNames.address),
                addressCont: CommonPage.getElementByIdEndsWith(id.addressCont,
                    eNames.addressCont),
                city: CommonPage.getElementByIdEndsWith(id.city,
                    eNames.city),
                state: CommonPage.getElementByIdEndsWith(id.state,
                    eNames.state),
                rego: CommonPage.getElementByIdEndsWith(id.rego,
                    eNames.regO),
                country: CommonPage.getElementByIdEndsWith(id.country,
                    eNames.country),
                zip: CommonPage.getElementByIdEndsWith(id.zip,
                    eNames.zip),
                homePhone: CommonPage.getElementByIdEndsWith(id.homePhone,
                    eNames.homePhone),
                workPhone: CommonPage.getElementByIdEndsWith(id.workPhone,
                    eNames.workPhone),
                emailOne: CommonPage.getElementByIdEndsWith(id.emailOne,
                    eNames.emailOne),
                emailTwo: CommonPage.getElementByIdEndsWith(id.emailTwo,
                    eNames.emailTwo),
                mobile: CommonPage.getElementByIdEndsWith(id.mobile,
                    eNames.mobile),
                pager: CommonPage.getElementByIdEndsWith(id.pager,
                    eNames.pager),
                fax: CommonPage.getElementByIdEndsWith(id.fax,
                    eNames.fax),
                communicationPref: CommonPage.getElementByIdEndsWith(id.communicationPref,
                    eNames.communicationPref),
                workPhoneValidator: CommonPage.getElementByIdEndsWith(id.workPhoneValidator, eNames.workPhoneValidator),
                companyValidator: CommonPage.getElementByIdEndsWith(id.companyValidator, eNames.companyNameValidator),
                syncToOutlookOff: $(by.css(`${tags.div}[id*='${id.syncToOutLook}'] ${tags.label}.${classes.checkOff}`),
                    eNames.syncToOutLookOff),
                syncToOutlookOn: $(by.css(`${tags.div}[id*='${id.syncToOutLook}'] ${tags.label}.${classes.checkOn}`),
                    eNames.syncToOutLookOn),
            },
        };
    }

    static get leftPane() {
        return {
            relationShip: this.getLeftPane(eNames.relationShip),
            events: this.getLeftPane(eNames.events),
            cases: this.getLeftPane(eNames.cases),
            relatedContacts: this.getLeftPane(eNames.relatedContacts),
            attachments: this.getLeftPane(eNames.attachments),
            notes: this.getLeftPane(eNames.notes),
            households: this.getLeftPane(eNames.households),
            tasks: this.getLeftPane(eNames.tasks),
        };
    }

    static getLeftPane(elementName: string) {
        return $(by.cssContainingText(`td.${classes.cellNavigation} span.${classes.innerWrap}`, elementName), elementName);
    }

    static get page() {
        return {
            relationShip: this.getRightScreen(id.relationShipPage, eNames.relationShip),
            events: this.getRightScreen(id.eventPage, eNames.events),
            cases: this.getRightScreen(id.casesPage, eNames.cases),
            pipeline: this.getRightScreen(id.pipeline, eNames.pipeline),
            relatedContactsPage: this.getRightScreen(id.relatedContacts, eNames.relatedContacts),
            services: this.getRightScreen(id.services, eNames.services),
            lostAccounts: this.getRightScreen(id.lostAccounts, eNames.lostAccounts),
            summary: this.getRightScreen(id.summary, eNames.summary),
            accounts: this.getRightScreen(id.accounts, eNames.accounts),
            lostPipeline: this.getRightScreen(id.lostPipeline, eNames.lostPipeline),
            attachments: this.getRightScreen(id.attachments, eNames.attachments),
            notes: this.getRightScreen(id.notes, eNames.notes),
            portfolio: this.getRightScreen(id.portfolio, eNames.portfolio),
            households: this.getRightScreen(id.households, eNames.households),
            tasks: this.getRightScreen(id.tasks, eNames.tasks),
        };
    }

    static getRightScreen(idText: string, elementName: string) {
        return $(by.css(`td.${classes.cellContents} div[id*='${idText}']`), elementName);
    }

    static get tabs() {
        return {
            pipeline: this.getTab(id.pipeline, eNames.pipeline),
            services: this.getTab(id.services, eNames.services),
            lostAccounts: this.getTab(id.lostAccounts, eNames.lostAccounts),
            lostPipeline: this.getTab(id.lostPipeline, eNames.lostPipeline),
            summary: this.getTab(id.summary, eNames.summary),
            accounts: this.getTab(id.accounts, eNames.accounts),
            portfolio: this.getTab(id.portfolio, eNames.portfolio),
        };
    }

    static getTab(elementId: string, elementName: string) {
        return $(by.css(`td.${classes.cellContents}  a[id*='${elementId}']`), elementName);
    }

    static getCompanyTitle(companyName: string) {
        return $(by.cssContainingText(tags.h1,
            `${eNames.prospect} ${companyName}`),
            `${eNames.prospect} ${companyName}`);
    }
}

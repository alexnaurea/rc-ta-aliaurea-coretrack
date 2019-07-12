import { by, By } from 'protractor';

import { $, $$, $cssContainingText } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { xpath } from '../../../components/misc-utils/xpath-builder';
import { CommonPage } from '../common/common.po';
import { NewCasePage } from '../new-case-page/new-case-page.po';

import { HomePageConstant } from './home-page.constants';

const { attributes, tags, additionalAttributes } = HtmlHelper;

export class HomePage {

    static get pageTitle() {
        return $(xpath(tags.label)
            .text(this.names.actionCenter)
            .contains(HtmlHelper.attributes.class, this.attr.classes.toolbarTitle)
            .buildByObject(), this.names.actionCenter);
    }

    static get searchDropdownOptions() {
        return {
            contacts: $cssContainingText(`.${this.attr.classes.aSearchtypeContacts} ${tags.span}`,
                new RegExp(`^${this.names.contacts}$`)),
            contactsByNumber: $cssContainingText(`.${this.attr.classes.aSearchtypeContacts} ${tags.span}`,
                this.names.contactsByNumber),
            commercialContacts: $cssContainingText(`.${this.attr.classes.aSearchTypeCommercial} ${tags.span}`,
                this.names.commercialContacts),
            retailContacts: $cssContainingText(`.${this.attr.classes.aSearchTypeRetail} ${tags.span}`,
                this.names.retailContacts),
            cases: $cssContainingText(`.${this.attr.classes.aSearchTypeCases} ${tags.span}`,
                this.names.cases),
            accounts: $cssContainingText(`.${this.attr.classes.aSearchTypeAccounts} ${tags.span}`,
                this.names.accounts),
        };
    }

    static get widgets() {
        return {
            eBusinessDeposit: $(by.cssContainingText(`[id^='${this.attr.id.productionCarousel}'] ${tags.span}`,
                this.names.eBusinessDeposit),
                this.names.eBusinessDeposit),
            caseByCategory: $(by.css(`[id^='${this.attr.id.caseByCategoryTile}'][id$='${tags.body}']`),
                this.names.caseByCategory),
            salesStage: $(by.css(this.attr.classes.salesStage), this.names.salesStages),
        };
    }

    static get hamburgerIcon() {
        return $(by.className(this.attr.classes.toolButtonLeft), this.names.hamburger);
    }

    static get sidebar() {
        const cssClass = this.attr.classes;
        return {
            expanded: {
                home: CommonPage.getElementByClassContains(this.names.home,
                    this.names.home),
                new: CommonPage.getElementByClassContains(this.names.new,
                    this.names.new),
                opportunities: CommonPage.getElementByClassContains(this.names.opportunities,
                    this.names.opportunities),
                queues: $(by.cssContainingText(`.${this.attr.classes.iconSortAzDescending} + ${tags.div}`,
                    this.names.queues),
                    this.names.queues),
                toDoList: CommonPage.getElementByClassContains(this.names.toDoList,
                    this.names.toDoList),
                managedContacts: CommonPage.getElementByClassContains(this.names.managedContacts,
                    this.names.managedContacts),
                marketing: CommonPage.getElementByClassContains(this.attr.classes.marketing,
                    this.names.marketing),
                serviceCenter: CommonPage.getElementByClassContains(this.attr.classes.serviceCenter,
                    this.names.serviceCenter),
                administration: CommonPage.getElementByClassContains(this.names.administration,
                    this.names.administration),
                resources: CommonPage.getElementByClassContains(this.names.resources,
                        this.names.resources),
                report: CommonPage.getElementByClassContains(this.names.reports,
                    this.names.reports),
                myProfile: CommonPage.getElementByClassContains(this.names.myProfile,
                    this.names.myProfile),
                signOff: $(by.css(`${tags.i}.${cssClass.faSignOut}`), this.names.signOff),

            },
            collapsed: {
                home: $(by.css(`.${cssClass.itemTool}.${cssClass.iconHome}`), this.names.home),
                new: $(by.css(`.${cssClass.itemTool}.${cssClass.iconAdd}`), this.names.new),
            },
        };
    }

    static get newItems() {
        return {
            opportunity: $(by.cssContainingText(`.${this.attr.classes.xTreelistItemText}`,
                this.names.opportunity),
                this.names.opportunity),
            account: $(by.cssContainingText(`.${this.attr.classes.xTreelistItemText}`,
                this.names.account),
                this.names.account),
            case: $(xpath(tags.div)
                .contains(attributes.class, this.attr.classes.xTreelistItemText)
                .text(this.names.case)
                .buildByObject(),
                this.names.case),
            commercialProspect: $(by.cssContainingText(`.${this.attr.classes.xTreelistItemText}`,
                this.names.commercialProspect),
                this.names.commercialProspect),
            retailProspect: $(by.cssContainingText(`.${this.attr.classes.xTreelistItemText}`,
                this.names.retailProspect),
                this.names.retailProspect),
        };
    }

    static get queue() {
        const expanded = this.attr.classes.xTreelistItemExpanded;
        return {
            queueExpanded: $(by.css(`.${expanded}[${attributes.class}*='${this.names.queues}']`),
                this.names.queueExpanded),
            opportunities: this.getSubMenuItemInSideBar(this.names.queues,
                this.names.opportunities),
            cases: this.getSubMenuItemInSideBar(this.names.queues,
                this.names.cases),
            tasks: this.getSubMenuItemInSideBar(this.names.queues,
                this.names.tasks),
            events: this.getSubMenuItemInSideBar(this.names.queues,
                this.names.events),
            tickets: this.getSubMenuItemInSideBar(this.names.queues,
                this.names.tickets),
        };
    }

    static get reports() {
        const expanded = this.attr.classes.xTreelistItemExpanded;
        return {
            reportExpanded: $(by.css(`.${expanded}[${attributes.class}*='${this.names.reports}']`),
                this.names.reportExpanded),
            browse: this.getSubMenuItemInSideBar(this.names.reports,
                this.names.browse),
            customReports: this.getSubMenuItemInSideBar(this.names.reports,
                this.names.customReports),
            reportWriter: this.getSubMenuItemInSideBar(this.names.reports,
                this.names.reportWriter),
            pendingReports: this.getSubMenuItemInSideBar(this.names.reports,
                this.names.pendingReports),
        };
    }

    static get toolbar() {
        return {
            username: $(by.className(this.attr.classes.toolbarMenuUser), this.names.username),
            environmentLabel: $(by.cssContainingText(tags.label, this.names.environment),
                this.names.environment),
            environmentVersion: $(xpath(tags.label)
                .textContains(this.names.environment)
                .parent(tags.div)
                .descendant(tags.label)
                .last()
                .buildByObject(), this.names.environmentVersion),
            sessionTimeLabel: $(by.cssContainingText(tags.label, this.names.sessionTime),
                this.names.sessionTime),
            sessionTime: $(xpath(tags.label)
                .textContains(this.names.sessionTime)
                .parent(tags.div)
                .descendant(tags.label)
                .last()
                .buildByObject(), this.names.sessionTime),
            about: $(xpath(tags.span)
                .text(this.names.about)
                .where(HtmlHelper.additionalAttributes.dataRef, this.attr.dataRef.textEl)
                .buildByObject(), this.names.about),
            signOff: $(xpath(tags.span)
                .text(this.names.signOff)
                .where(HtmlHelper.additionalAttributes.dataRef, this.attr.dataRef.textEl)
                .buildByObject(), this.names.signOff),
        };
    }

    static get checkExisitingContactModal() {
        const { selectContact } = NewCasePage;
        return {
            checkExistingContactTitle: $(xpath(tags.div)
                .where(additionalAttributes.dataRef, this.attr.dataRef.textEl)
                .text(this.names.checkExistingContact)
                .buildByObject(),
                this.names.checkExistingContact),
            firstName: selectContact.firstName,
            lastName: selectContact.lastName,
            company: selectContact.company,
            return: selectContact.return,
            searchContacts: selectContact.searchContacts,
            contactsList: selectContact.contactCheckboxList,
            contactCheckbox: (fname: string) => selectContact.contactCheckbox(fname),
            continueWithNewProspect: selectContact.continueWithNewProspect,
            enterNewProspect: $(by.cssContainingText(`${tags.div}.${this.attr.classes.infoPanel} ${tags.td}`, this.names.enterNewProspect),
                this.names.enterNewProspect),
            nameHeader: this.getCheckExisitingContactModalHeader(this.names.name),
            addressHeader: this.getCheckExisitingContactModalHeader(this.names.address),
            workPhoneHeader: this.getCheckExisitingContactModalHeader(this.names.workPhone),
            homePhoneHeader: this.getCheckExisitingContactModalHeader(this.names.homePhone),
            taxIdHeader: this.getCheckExisitingContactModalHeader(this.names.taxId),
            detailsHeader: this.getCheckExisitingContactModalHeader(this.names.details),
            contactList: $(by.css(`${tags.div}[id*='${this.attr.id.gridListing}']`), this.names.contactList),
            enterProspectInfo: $(by.cssContainingText(`${tags.div}[id*='${this.attr.id.gridListing}'] tr td `, this.names.enterProspectInfo),
                this.names.enterProspectInfo),
            useSelectedContact: selectContact.useSelectedContact,
            cancel: CommonPage.getElementByIdEndsWith(this.attr.id.cancel,
                this.names.cancel),
            cross: CommonPage.getElementByClassContains(this.attr.classes.xTool,
                this.names.cross),
            nextPageArrow: $(by.cssContainingText(tags.a, this.names.greater), this.names.nextPage),
            previousPageArrow: $(by.cssContainingText(tags.a, this.names.less), this.names.previousPage),
        };
    }

    static get resources() {
        return {
            get documents() {
                return HomePage.getSubMenuItemInSideBar(HomePage.names.resources,
                    HomePage.names.documents);
            },
            get links() {
                return HomePage.getSubMenuItemInSideBar(HomePage.names.resources,
                    HomePage.names.links);
            },
        };
    }

    static get administration() {
        return {
            configuration: this.getSubMenuItemInSideBar(this.names.administration,
                this.names.configuration),
            compensation: this.getSubMenuItemInSideBar(this.names.administration,
                this.names.compensation),
            goals: this.getSubMenuItemInSideBar(this.names.administration,
                this.names.goals),
            organization: this.getSubMenuItemInSideBar(this.names.administration,
                this.names.organization),
            resources: this.getSubMenuItemInSideBar(this.names.administration,
                this.names.resources),
            security: this.getSubMenuItemInSideBar(this.names.administration,
                this.names.security),
            serviceCenter: this.getSubMenuItemInSideBar(this.names.administration,
                this.names.serviceCenter),
            system: this.getSubMenuItemInSideBar(this.names.administration,
                this.names.system),
        };
    }

    static get serviceCenterUnderAdministration() {
        const expanded = this.attr.classes.xTreelistItemExpanded;
        return {
            serviceCenterExpanded: $(by.css(`.${expanded}[${attributes.class}*='${this.attr.classes.serviceCenter}']`),
                this.names.serviceCenterExpanded),
            caseAreas: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.serviceCenter,
                this.names.caseAreas),
            knowledgeBase: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.serviceCenter,
                this.names.knowledgeBase),
            ticketCategories: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.serviceCenter,
                this.names.ticketCategories),
        };
    }

    static get securityUnderAdministration() {
        const expanded = this.attr.classes.xTreelistItemExpanded;
        return {
            securityExpanded: $(by.css(`.${expanded}[${attributes.class}*='${this.attr.classes.security}']`),
                this.names.security),
            users: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.security,
                this.names.users),
            roles: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.security,
                this.names.roles),
        };
    }

    static get resourcesUnderAdministration() {
        return {
            get documents() {
                return HomePage.getSubMenuItemInSubMenuInSideBar(HomePage.names.administration,
                    HomePage.attr.classes.resources, HomePage.names.documents);
            },
            get links() {
                return HomePage.getSubMenuItemInSubMenuInSideBar(HomePage.names.administration,
                    HomePage.attr.classes.resources, HomePage.names.links);
            },
        };
    }

    static get systemUnderAdministration() {
        return {
            applicationStatus: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.system,
                this.names.applicationStatus),
            processingLog: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.system,
                this.names.processingLog),
            session: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.system,
                this.names.session),
            unmatched: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.system,
                this.names.unmatched),
        };
    }

    static get configurationUnderAdministration() {
        return {
            customItem: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.configuration, this.names.customItem),
            customItemType: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.configuration, this.names.customItemTypes),
            dispositions: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.configuration, this.names.dispositions),
            eventTypes: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.configuration, this.names.eventTypes),
            lostReasons: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.configuration, this.names.lostReasons),
            onBoarding: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.configuration, this.names.onBoarding),
            organizations: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.configuration, this.names.organizations),
            outsideInstitutions: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.configuration,
                this.names.outsideInstitutions),
            products: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.configuration, this.names.products),
            queues: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.configuration, this.names.queues),
            referralSources: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.configuration, this.names.referralSources),
            relationships: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.configuration, this.names.relationships),
            salesStages: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.configuration, this.names.salesStages),
            trainingModules: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.configuration, this.names.trainingModules),
            transferActivities: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.configuration,
                this.names.transferActivities),
            userLabels: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.configuration, this.names.userLabels),
        };
    }

    static get organizationUnderAdministration() {
        return {
            branches: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.organization, this.names.branches),
            departments: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.organization, this.names.departments),
            districts: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.organization, this.names.districts),
            regions: this.getSubMenuItemInSubMenuInSideBar(this.names.administration, this.attr.classes.organization, this.names.regions),
        };
    }

    static get serviceCenter() {
        return {
            tickets: this.getSubMenuItemInSideBar(this.attr.classes.serviceCenter,
                this.names.tickets),
            cases: this.getSubMenuItemInSideBar(this.attr.classes.serviceCenter,
                this.names.cases),
            knowledgeBase: this.getSubMenuItemInSideBar(this.attr.classes.serviceCenter,
                this.names.knowledgeBase),
        };
    }

    static get plus() {
        return {
            mainIcon: $(by.css(this.attr.classes.plusIcon), this.names.plusIcon),
            menu: $(by.css(this.attr.classes.menu), this.names.menu),
            pipeline: $(by.css(this.attr.classes.pipeline), this.names.pipeline),
            setting: $(By.xpath(`(//*[contains(@id,"${this.attr.id.pipelineItem}")] //*[@aria-label="${this.attr.ariaLabel.setting}"])[1]`),
                this.names.pipeline),
            settingPopup: $(by.css(this.attr.classes.settingPopup), this.names.pipeline),
            ok: $(by.css(this.attr.classes.check), this.names.check),
            expandButton: $(By.xpath(`(//*[contains(@id,"${this.attr.id.pipelineItem}")] //*[@aria-label="${this.attr.ariaLabel.expand}"])[1]`),
                this.names.expand),
            expandWidget: $(by.css(this.attr.classes.expandWidget), this.names.expandWidget),
            closeExpandWidget: $(by.css(`[id*='${this.attr.classes.expandPopup}'] [aria-label="${this.attr.ariaLabel.close}"]`),
                this.names.searchButton),
            delete: $(by.css(this.attr.classes.delete), this.names.delete),
        };
    }

    static get opportunities() {
        return {
            pipeline: this.getSubMenuItemInSideBar(this.names.opportunities, this.names.pipeline),
            production: this.getSubMenuItemInSideBar(this.names.opportunities, this.names.production),
            lost: this.getSubMenuItemInSideBar(this.names.opportunities, this.names.lost),
            referrals: this.getSubMenuItemInSideBar(this.names.opportunities, this.names.referrals),
        };
    }

    static get cardDetail() {
        return {
            address: $(by.css(`${tags.div}.${this.attr.classes.address}`),
                this.names.address),
            email: $(by.css(`${tags.div}.${this.attr.classes.communication} ${tags.div}.${this.attr.classes.email}`),
                this.names.email),
            workPhone: $(by.css(`${tags.div}.${this.attr.classes.communication} ${tags.div}[${attributes.title}="${this.names.workPhoneNumber}"]`),
                this.names.workPhoneNumber),
            homePhone: $(by.css(`${tags.div}.${this.attr.classes.communication} ${tags.div}[${attributes.title}="${this.names.homePhoneNumber}"]`),
                this.names.homePhoneNumber),
            ssn: $(by.css(`${tags.div}.${this.attr.classes.ssn}`),
                this.names.ssn),
        };
    }

    static get marketing() {
        return {
            marketingLists: this.getSubMenuItemInSideBar(this.names.marketing, this.names.marketingLists),
            campaigns: this.getSubMenuItemInSideBar(this.names.marketing, this.names.campaigns),
        };
    }
    private static readonly names = HomePageConstant.elementNames;
    private static readonly attr = HomePageConstant.attributes;

    static readonly header = Object.freeze({
        get searchButton() {
            return $(
                by.css(`[id^='${HomePage.attr.id.searchBar}'] .${HomePage.attr.classes.faSearch}`),
                HomePage.names.searchButton
            );
        },
        get searchBox() {
            return $(
                by.css(`[id^='${HomePage.attr.id.searchBar}'] [placeholder*='${HomePage.attr.placeholder.searchIn}']`),
                HomePage.names.searchButton
            );
        },
        get searchDrodown() {
            return $(
                by.css(`[id^='${HomePage.attr.id.searchBar}'] .${HomePage.attr.classes.iconUsers3}`),
                HomePage.names.searchButton
            );
        },
        get searchResults() {
            return $$(
                by.css(`.${HomePage.attr.classes.header} [${attributes.title}]`),
                HomePage.names.searchResults
            );
        },
        specificResult: (text: string) => $(
            by.cssContainingText(`.${HomePage.attr.classes.header} [${attributes.title}]`, text),
            HomePage.names.searchResults
        ),
    });

    private static getSubMenuItemInSideBar(item: string, subItem: string) {
        return $(xpath(tags.li)
            .contains(attributes.class, item)
            .anywhere(tags.div)
            .contains(attributes.class, this.attr.classes.xTreelistItemText)
            .text(subItem)
            .buildByObject(),
            subItem);
    }

    private static getSubMenuItemInSubMenuInSideBar(parent: string, item: string, subItem: string) {
        return $(xpath(tags.li)
            .contains(attributes.class, parent)
            .anywhere(tags.li)
            .contains(attributes.class, item)
            .anywhere(tags.div)
            .contains(attributes.class, this.attr.classes.xTreelistItemText)
            .text(subItem)
            .buildByObject(),
            subItem);
    }

    static getCheckExisitingContactModalHeader(columnName: string) {
        return $(by.cssContainingText(`${tags.div}[id*='${this.attr.id.gridListing}'] div[id*='${this.attr.id.gridHeader}'] th`, columnName),
            columnName);
    }

    static refreshButton() {
        return $(by.css(this.attr.classes.refresh), this.names.refresh);
    }

    static title() {
        return $(by.css(this.attr.classes.title), this.names.title);
    }

    static getPageNumberLink(pageNumber: string) {
        return $(by.cssContainingText(tags.a, pageNumber), pageNumber);
    }

    static getChartDataGridColumn(columnName: string) {
        return $(by.cssContainingText(
            `.${this.attr.classes.columnHeader} .${this.attr.classes.columnHeaderText}`,
            columnName),
            columnName);
    }

    static getWidgetDataRow(textValue: string) {
        return $(by.cssContainingText(`.${this.attr.classes.loanValue}`, textValue), textValue);
    }
}

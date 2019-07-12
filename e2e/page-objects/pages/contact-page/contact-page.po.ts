import { by } from 'protractor';

import { Constants } from '../../../components/misc-utils/constants';
import { $, $$, $cssContainingText } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { xpath } from '../../../components/misc-utils/xpath-builder';
import { ProductsPage } from '../administration/configuration/products/products.po';
import { CommonPage } from '../common/common.po';

import { ContactPageConstant } from './contact-page.constants';

const { elementNames: eNames, attributes: { classes, id, name } } = ContactPageConstant;
const { tags, attributes } = HtmlHelper;

export class ContactPage {

    static get header() {
        return {
            save: ProductsPage.newProductScreenProperties.save,
            admin: $(by.cssContainingText('span.expandTop', eNames.admin), eNames.admin),
            correctionsUtility: CommonPage.getElementByText(eNames.correctionsUtility, eNames.correctionsUtility),
            refreshButton: $(by.className(classes.iconRefresh), eNames.refresh),
        };
    }

    static get sidebar() {
        return {
            overview: $(by.className(classes.iconOverview),
                eNames.overview),
            relationship: $(by.className(classes.iconRelatedEntities),
                eNames.relationship),
            relatedContacts: this.relatedContacts.relatedContactsPane,
            notes: this.notes.notesPane,
            events: this.events.eventsPane,
            tasks: this.tasks.tasksPane,
            attachments: this.attachments.attachmentsPane,
        };
    }

    static get overview() {
        return {
            overviewTab: $(by.className(classes.iconOverview),
                eNames.overview),
            information: {
                title: $(by.cssContainingText(tags.h1,
                    eNames.contact),
                    eNames.contact),
            },
            profile: {
                profileTab: CommonPage.getElementByIdEndsWith(id.profileTab,
                    eNames.profile),
                outsideAccounts: $(by.cssContainingText(`.${classes.subSection}`,
                    eNames.outsideAccounts),
                    eNames.outsideAccounts),
                outsideAccountsTableRows: $$(by.css(`${tags.table}[id*='${id.outsideAccount}'] ${tags.tr}`),
                    eNames.outsideAccounts),
                addAccount: CommonPage.getElementByIdEndsWith(id.btnAddOutsideAccount,
                    eNames.addAccount),
                outsideAccountsTableData: $(by.xpath(
                    `(//${tags.table}[contains(@id,'${id.outsideAccount}')]//${tags.tr}[contains(@onclick,'${eNames.openAccount}')]//td)[1]`),
                    eNames.outsideAccounts),
            },
        };
    }

    static get relationship() {
        return {
            topBar: {
                summary: CommonPage.getElementByIdEndsWith(id.summaryTab,
                    eNames.summary),
                pipelines: CommonPage.getElementByIdEndsWith(id.pipelinesTab,
                    eNames.pipelines),
                products: CommonPage.getElementByIdEndsWith(id.productsTab,
                    eNames.products),
                services: CommonPage.getElementByIdEndsWith(id.servicesTab,
                    eNames.services),
                lostAccounts: CommonPage.getElementByIdEndsWith(id.lostTab,
                    eNames.lostAccounts),
                lostPipelines: CommonPage.getElementByIdEndsWith(id.lostOppsTab,
                    eNames.lostPipelines),
            },
            summary: {
                accountAndOpportunities: {
                    opportunities: this.opportunities,
                },
                opportunities: {
                    addNoteButtons: $$(by.css(`[id$='${id.relovGrid0}']  [${attributes.title}="${eNames.addNote}"]`),
                        eNames.addNote),
                    addEventButtons: $$(by.css(`[id$='${id.relovGrid0}']  [${attributes.title}="${eNames.addEvent}"]`),
                        eNames.addEvent),
                    addTaskButtons: $$(by.css(`[id$='${id.relovGrid0}']  [${attributes.title}="${eNames.addTask}"]`),
                        eNames.addTask),
                },
                accounts: {
                    addAccount: $(by.css(`[${attributes.title}='${eNames.addAccount}']`),
                        eNames.addAccount),
                    specificCell: (value: string) => $cssContainingText(`[id*='${id.relovGridHolder}'] td`,
                        value),
                },
            },
            sections: {
                opportunities: $cssContainingText(`.${classes.overviewSectionHeadingTable} ${tags.h2}`,
                    new RegExp(`^${eNames.opportunities}$`)),
                accounts: $cssContainingText(`.${classes.overviewSectionHeadingTable} ${tags.h2}`,
                    new RegExp(`^${eNames.accounts}$`)),
                services: $cssContainingText(`.${classes.overviewSectionHeadingTable} ${tags.h2}`,
                    eNames.services),
                lostOpportunities: $cssContainingText(`.${classes.overviewSectionHeadingTable} ${tags.h2}`,
                    eNames.lostOpportunities),
                closedAccounts: $cssContainingText(`.${classes.overviewSectionHeadingTable} ${tags.h2}`,
                    eNames.closedAccounts),
                overviewOptions: $cssContainingText(`.${classes.overviewSectionHeadingTable} ${tags.h3}`,
                    eNames.overviewOptions),
                opportunitiesSection: this.getSection(eNames.opportunities),
                accountSection: this.getSection(eNames.accounts),
                servicesSection: this.getSection(eNames.services),
                closedAccountsSection: this.getSection(eNames.closedAccounts),
                lostOpportunitiesSection: this.getSection(eNames.lostOpportunities),
                collapseIcon: $(by.xpath(`(//${tags.span}[@${attributes.class}='${classes.expand}'])[1]`),
                    eNames.collapse),
                expandIcon: $(by.xpath(`(//${tags.span}[@${attributes.class}='${classes.collapse}'])[1]`),
                    eNames.expand),
                addAccount: $(by.css(`${tags.a}[${attributes.title}='${eNames.addAccount}']`),
                    eNames.addAccount),
                addOpportunity: $(by.css(`${tags.a}[${attributes.title}='${eNames.addOpportunity}']`),
                    eNames.addOpportunity),
            },
        };
    }

    private static get opportunities() {
        const theadLocator = `[id$='${id.relovGridHolder0}'] .${classes.simpleGridHeader} ${tags.td}`;
        return {
            tableHead: {
                tools: $cssContainingText(theadLocator,
                    eNames.tools),
                productType: $cssContainingText(theadLocator,
                    eNames.productType),
                product: $cssContainingText(theadLocator,
                    new RegExp(`^${eNames.product}$`)),
                amount: $cssContainingText(theadLocator,
                    eNames.amount),
                status: $cssContainingText(theadLocator,
                    eNames.status),
                owner: $cssContainingText(theadLocator,
                    eNames.owner),
                referrer: $cssContainingText(theadLocator,
                    eNames.referrer),
                forecast: $cssContainingText(theadLocator,
                    eNames.forecast),
                outside: $cssContainingText(theadLocator,
                    eNames.outside),
                modified: $cssContainingText(theadLocator,
                    eNames.modified),
            },
        };
    }

    static get snapshot() {
        return {
            close: $(by.className(classes.uiIconCloseThick),
                eNames.close),
            title: $(by.cssContainingText(`.${classes.uiDialogTitle}`,
                eNames.snapshot),
                eNames.snapshot),
        };
    }

    static readonly print = Object.freeze({
        get title() {
            return $(
                by.cssContainingText(
                    `.${classes.uiDialogTitle}`,
                    eNames.print
                ),
                eNames.print
            );
        },
    });

    static get newEventModal() {
        return {
            addEventButtons: this.relationship.summary.opportunities.addEventButtons,
            newEventTitle: $cssContainingText(`.${classes.uiDialogTitle}`,
                eNames.newEvent),
            addAttendee: {
                addAttendeeButton: CommonPage.getElementByIdEndsWith(id.addAttendeeButton,
                    eNames.addAttendee),
                addAttendeeModal: $cssContainingText(`.${classes.uiDialogTitle}`,
                    eNames.addAttendee),
                firstName: CommonPage.getElementByNameEndsWith(name.firstNameTxt,
                    eNames.firstName),
                lastName: CommonPage.getElementByNameEndsWith(name.lastNameTxt,
                    eNames.lastName),
                search: CommonPage.getElementByNameEndsWith(name.searchBtn,
                    eNames.search),
                moveRight: CommonPage.getElementByNameEndsWith(name.moveRight,
                    eNames.moveRight),
                save: CommonPage.getElementByIdEndsWith(id.saveBtn,
                    eNames.save),
                availableAttendees: $$(xpath(tags.tBody)
                    .anywhere(tags.tr)
                    .containsAttributesWithOr([attributes.class, attributes.class],
                        [classes.gridRowAptean, classes.gridAltRowAptean])
                    .buildByObject(),
                    eNames.availableAttendees),
            },
        };
    }

    static get newNoteModal() {
        return {
            addNoteButtons: this.relationship.summary.opportunities.addNoteButtons,
            newNoteTitle: $cssContainingText(`.${classes.uiDialogTitle}`,
                eNames.newNote),
            subject: CommonPage.getElementByNameEndsWith(name.subjectControl,
                eNames.subject),
            text: $(by.css(tags.body),
                eNames.text),
            save: $(by.css(`#${id.entityDialog} + ${tags.div} [id$='${id.saveButton}']`),
                eNames.save),
            saveAndClose: $(by.css(`#${id.entityDialog} + ${tags.div} [id$='${id.saveAndCloseButton}']`),
                eNames.saveAndClose),
        };
    }

    static get newTaskModal() {
        return {
            addTaskButtons: this.relationship.summary.opportunities.addTaskButtons,
            newTaskTitle: $cssContainingText(`.${classes.uiDialogTitle}`,
                eNames.newTask),
        };
    }

    static get newOutsideAccount() {
        return {
            title: $(by.css(`.${classes.uiDialogTitle}`), eNames.newOutsideAccount),
            accountType: CommonPage.getElementByIdEndsWith(id.accountType, eNames.accountType),
            accountTypeOptions: $$(by.css(`${tags.select}[id$=${id.accountType}] ${tags.option}`), eNames.accountTypeOptions),
            institution: CommonPage.getElementByIdEndsWith(id.institution, eNames.institution),
            institutionOptions: $$(by.css(`${tags.select}[id$=${id.institution}] ${tags.option}`), eNames.institutionOptions),
            save: $(by.css(`${tags.input}[${attributes.value}=${eNames.save}]`), eNames.save),
            cancel: $(by.css(`${tags.input}[${attributes.value}=${eNames.cancel}]`), eNames.cancel),
        };
    }

    static get relatedContacts() {
        return {
            relatedContactsPane: CommonPage.getElementByIdEndsWith(id.pagePortfolioTab,
                eNames.relatedContacts),
            header: {
                relatedContactsTab: CommonPage.getElementByIdEndsWith(id.tabRelatedTab,
                    eNames.relatedContacts),
                portfolio: CommonPage.getElementByIdEndsWith(id.tabPortTab,
                    eNames.portfolio),
            },
        };
    }

    static get notes() {
        return {
            notesPane: CommonPage.getElementByIdEndsWith(id.pageNotesTab,
                eNames.notes),
            header: {
                addNote: CommonPage.getElementByIdEndsWith(id.addNoteButton,
                    eNames.addNote),
            },
        };
    }

    static get events() {
        return {
            eventsPane: CommonPage.getElementByIdEndsWith(id.pageEventsTab,
                eNames.events),
            header: {
                addEvent: CommonPage.getElementByIdEndsWith(id.addEventButton,
                    eNames.addEvent),
            },
        };
    }

    static get tasks() {
        return {
            tasksPane: CommonPage.getElementByIdEndsWith(id.pageTasksTab,
                eNames.tasks),
            header: {
                addTask: CommonPage.getElementByIdEndsWith(id.addTaskButton,
                    eNames.addTask),
            },
        };
    }

    static get attachments() {
        return {
            attachmentsPane: CommonPage.getElementByIdEndsWith(id.pageAttachmentsTab,
                eNames.attachments),
            header: {
                addAttachments: CommonPage.getElementByIdEndsWith(id.addAttachmentButton,
                    eNames.addAttachments),
            },
            getColumnByName(columnName: string) {
                return $(xpath(tags.th).descendant(tags.a).text(columnName).buildByObject(), columnName);
            },
            detailsColumn: $(
                by.cssContainingText(tags.th, eNames.attachmentsColumns.details
                ),
                eNames.attachmentsColumns.details),
            sortAscIcon(columnName: string) {
                return $(xpath(tags.th)
                    .where('class', classes.gridHeaderAptean)
                    .descendant(tags.a)
                    .text(columnName)
                    .followingSibling(tags.input)
                    .where('alt', eNames.sortedAsc)
                    .buildByObject(), eNames.sortedAsc);
            },
            sortDescIcon(columnName: string) {
                return $(xpath(tags.th)
                    .where('class', classes.gridHeaderAptean)
                    .descendant(tags.a)
                    .text(columnName)
                    .followingSibling(tags.input)
                    .where('alt', eNames.sortedDesc)
                    .buildByObject(), eNames.sortedDesc);
            },
            getSortIcon(columnName: string) {
                return $(xpath(tags.th)
                    .where('class', classes.gridHeaderAptean)
                    .descendant(tags.a)
                    .text(columnName)
                    .followingSibling(tags.input)
                    .buildByObject(), eNames.sortedDesc);
            },
            description: $(xpath(tags.link)
                .where('id', id.radEditorStylesheetZero)
                .parent(tags.head)
                .followingSibling(tags.body)
                .buildByObject(), eNames.description),
            chooseFileButton: $(by.css(`${tags.input}[type="${eNames.file}"]`), eNames.chooseFile),
            firstAttachmentIcon: $(xpath(tags.span)
                .where('class', classes.iconAttachment)
                .nthChild(Constants.number.two)
                .buildByObject(), eNames.attachments),
        };
    }

    private static getSection(sectionHeading: string) {
        return $(by.xpath(`(//${tags.div}[@${attributes.class}='${classes.sectionPanel}' and
            contains(normalize-space(.),'${sectionHeading}')]//${tags.div})[1]`),
            sectionHeading);
    }

    static get grouping() {
        return {
            dropdown: $(by.id(id.grouping), eNames.grouping),
            firstGroupingIcon: $(xpath(tags.input)
                .where('type', 'image')
                .contains('src', 'Single')
                .nthChild(Constants.number.one)
                .buildByObject(), eNames.groupingIcon),
            getGroupingIconByColumnName(columnName: string) {
                return $(xpath(tags.div)
                    .textContains(columnName)
                    .parent(tags.div)
                    .parent(tags.div)
                    .parent(tags.td)
                    .precendingSibling(tags.td)
                    .descendant(tags.input)
                    .contains('src', 'Single')
                    .nthChild(Constants.number.one)
                    .buildByObject(), eNames.groupingIcon);
            },
        };
    }

    static get newAttachmentModal() {
        return {
            title: $(by.cssContainingText(tags.span, eNames.newAttachment), eNames.newAttachment),
            nameField: $(by.css(`${tags.input}[id*="attachmentName"]`), eNames.name),
        };
    }

    static getValidationMessageByText(text: string) {
        return $(by.css(`${tags.span}[id*="FieldValidator"]`), text);
    }
}

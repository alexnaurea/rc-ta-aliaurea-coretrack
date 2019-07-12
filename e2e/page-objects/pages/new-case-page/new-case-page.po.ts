import { by } from 'protractor';

import { Constants } from '../../../components/misc-utils/constants';
import { $, $$, $cssContainingText } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { xpath } from '../../../components/misc-utils/xpath-builder';
import { CommonPage } from '../common/common.po';

import { NewCasePageConstant } from './new-case-page.constants';

const { elementNames: eNames, attributes: { name, classes, id, labels }, leftPanel, dropdownOptions } = NewCasePageConstant;
const { tags, attributes } = HtmlHelper;

export class NewCasePage {

    static get header() {
        return {
            title: $(by.cssContainingText(tags.h1,
                eNames.newCase),
                eNames.newCase),
            save: CommonPage.getElementByIdEndsWith(id.savebutton,
                eNames.save),
            saveAndAdd: $(by.className(classes.iconAdd),
                eNames.saveAndAdd),
            close: $(by.className(classes.iconClose),
                eNames.close),
            caseTitle: (caseName: string) => $(
                by.cssContainingText(tags.h1, caseName), caseName),
            createdTitle: $(by.css(tags.h1), eNames.title),
            reviewTitle: (caseName: string) => $(
                by.cssContainingText(tags.h1, caseName), caseName),
            dottedMenu: $(by.css(`a[id*="${id.mainMenu}"].${classes.menuPopup}`), eNames.menu),
            copyLink: $(by.cssContainingText(tags.span, eNames.copyLinkToPage), eNames.copyLinkToPage),
            emailLink: $(by.cssContainingText(tags.span, eNames.emailLinkToPage), eNames.emailLinkToPage),
            history: $(by.cssContainingText(tags.span, eNames.history), eNames.history),
        };
    }

    static get sections() {
        return {
            caseData: $(by.cssContainingText(`.${classes.subSection}`,
                eNames.caseData),
                eNames.caseData),
            resolution: $(by.cssContainingText(`.${classes.subSection}`,
                eNames.resolution),
                eNames.resolution),
        };
    }

    static get caseData() {
        return {
            user: $(by.css(`[name*='${name.ownerType}']`),
                eNames.user),
            selectUser: $(by.css(`[id$='${id.userSelectorDpbx}']`),
                eNames.selectUser),
            searchUser: $(by.css(`[id$='${id.userSelectorSel}']`),
                eNames.searchUser),
            contact: $(by.css(`[name$='${name.contactSelectorControl}']`),
                eNames.contact),
            selectContact: $(by.css(`[id$='${id.contactSelectButton}']`),
                eNames.contact),
            account: $(by.css(`[name$='${name.contactSelectOrddac}']`),
                eNames.account),
            branch: $(by.css(`[name$='${name.ddlBranchControl}']`),
                eNames.branch),
            language: $(by.css(`[name$='${name.caseLanguage1Control}']`),
                eNames.language),
            description: $(by.css(tags.body),
                eNames.description),
            productType: $(by.css(`[name*='${name.productSelector}'][name$='${name.productType}']`),
                eNames.productType),
            product: $(by.css(`[name*='${name.productSelector}'][name$='${name.product}']`),
                eNames.product),
            subject: $(by.css(`[name*='${name.subjectControl}']`),
                eNames.subject),
            category: $(by.css(`[name*='${name.categorySelector}'][name$='${name.productType}']`),
                eNames.category),
            subCategory: $(by.css(`[name*='${name.categorySelector}'][name$='${name.product}']`),
                eNames.subCategory),
            contactBy: $(by.css(`[name*='${name.contactMethod1}']`),
                eNames.contactBy),
            priority: $(by.css(`[name*='${name.casePriority1}']`),
                eNames.priority),
            status: $(by.css(`[name*='${name.caseStatusSelectorControl}']`),
                eNames.status),
            privacyByDept: $(by.className(classes.checkboxHandle),
                eNames.privacyByDept),
            committedCalender: $(by.className(classes.iconCalendar),
                eNames.committedCalender),
            committed: $(by.className(classes.datetimeInput),
                eNames.committed),
            credit: $(by.css(`[name*='${name.creditAmountId}']`),
                eNames.credit),
            satisfaction: $(by.css(`[name*='${name.clientSatisfaction1}']`),
                eNames.satisfaction),
            categoryOption: (option: string) => $(
                by.cssContainingText(dropdownOptions.categoryOption, option), option),
            subCategoryOption: (option: string) => $(
                by.cssContainingText(dropdownOptions.subCategoryOption, option), option),
            selectAccount: $(by.css(`[id$='${id.selectAccount}']`),
                eNames.account),
            allAccounts: $$(by.css(`select[name$='${name.contactSelectOrddac}'] option`),
                eNames.account),
            accountOption: (option: string) => $(
                by.cssContainingText(`select[name$='${name.contactSelectOrddac}'] option`, option), option),
            allBranches: $$(by.css(`select[name$='${name.ddlBranchControl}'] option`),
                eNames.branch),
            branchOption: (option: string) => $(
                by.cssContainingText(`select[name$='${name.ddlBranchControl}'] option`, option), option),
            allLanguages: $$(by.css(`select[name$='${name.caseLanguage1Control}'] option`),
                eNames.language),
            languageOption: (option: string) => $(
                by.cssContainingText(`select[name$='${name.caseLanguage1Control}'] option`, option), option),
            allProductTypes: $$(by.css(`[name*='${name.productSelector}'][name$='${name.productType}'] option`),
                eNames.productType),
            productTypeOption: (option: string) => $(
                by.cssContainingText(`[name*='${name.productSelector}'][name$='${name.productType}'] option`, option), option),
            contactByOption: (option: string) => $(
                by.cssContainingText(`[name*='${name.contactMethod1}'] option`, option), option),
            statusOption: (option: string) => $(
                by.cssContainingText(`select[name$='${name.caseStatusSelectorControl}'] option`, option), option),
            richEditorFrame: $(by.css(`iframe[id*=${id.editorFrame}]`), name.editorFrame),
            calendar: $(by.css(`[id*='${id.calendar}']`), eNames.calendar),
        };
    }

    static get validationMessage() {
        return {
            contact: CommonPage.getValidationMessage(eNames.contact),
            subject: CommonPage.getValidationMessage(eNames.subject),
            description: CommonPage.getValidationMessage(eNames.description),
            text: CommonPage.getValidationMessage(eNames.text),
            subCategory: $(by.cssContainingText(`[id$='${id.requiredFieldValidator}']`,
                labels.aCategoryMustBeSelected),
                labels.aCategoryMustBeSelected),
        };
    }

    static get priority() {
        const { priority } = NewCasePage.caseData;
        return {
            normal: CommonPage.getDropdownOptionByCssText(priority,
                eNames.normal),
            escalated: CommonPage.getDropdownOptionByCssText(priority,
                eNames.escalated),
            emergency: CommonPage.getDropdownOptionByCssText(priority,
                eNames.emergency),
        };
    }

    static get selectContact() {
        return {
            title: $cssContainingText(`.${classes.uiDialogTitle}`,
                eNames.contactSelector),
            firstName: CommonPage.getElementByIdEndsWith(id.txtFirstName,
                eNames.firstName),
            lastName: CommonPage.getElementByIdEndsWith(id.txtLastName,
                eNames.lastName),
            company: CommonPage.getElementByIdEndsWith(id.txtCompanyName,
                eNames.company),
            return: CommonPage.getElementByIdEndsWith(id.filterOnContactType,
                eNames.return),
            prospect: CommonPage.getElementByNameEndsWith(name.newProspectTypeSelector,
                eNames.prospect),
            searchContacts: CommonPage.getElementByIdEndsWith(id.searchButton,
                eNames.searchContacts),
            contactCheckbox: (fname: string) => $(xpath(tags.nobr)
                .textContains(fname)
                .ancestor(tags.tr)
                .contains(attributes.class, classes.gridRowAptean)
                .anywhere(tags.input)
                .contains(attributes.id, id.columnSelectCheckBox)
                .first()
                .buildByObject(),
                fname),
            contactCheckboxList: $$(by.css(`[${attributes.id}$='${id.columnSelectCheckBox}']`),
                eNames.contactCheckboxList),
            useSelectedContact: CommonPage.getElementByIdEndsWith(id.btnUseSelected,
                eNames.useSelectedContact),
            continueWithNewProspect: CommonPage.getElementByIdEndsWith(id.btnNewProspect,
                eNames.continueWithNewProspect),
            dialogTitle: $(by.cssContainingText(`span#${id.dialogTitle}.${classes.dialogTitle}`, eNames.contactSelector),
                eNames.contactSelector),
            firstContactCheckbox:
                $(xpath(tags.nobr)
                    .ancestor(tags.tr)
                    .contains(attributes.class, classes.gridRowAptean)
                    .anywhere(tags.input)
                    .contains(attributes.id, id.columnSelectCheckBox)
                    .first()
                    .buildByObject(), eNames.contact),
            firstContactName: $(xpath(tags.td)
                .where('class', classes.gridCheckBox)
                .parent(tags.tr)
                .descendant(tags.td)
                .nthChild(Constants.number.three)
                .descendant(tags.nobr).first()
                .buildByObject(), eNames.contact),
        };
    }

    static get viewState() {
        return $(by.name(name.viewState), eNames.viewState);
    }

    static get leftPanel() {
        return {
            overview: $(by.cssContainingText(`${tags.div}.${classes.tabStrip} ${tags.li} ${tags.span}.${classes.tab}`,
                leftPanel.overview), leftPanel.overview),
            all: $$(by.css(`${tags.div}.${classes.tabStrip} ${tags.li}`), eNames.leftPanel),
            log: $(by.cssContainingText(`${tags.div}.${classes.tabStrip} ${tags.li} ${tags.span}.${classes.tab}`,
                leftPanel.log), leftPanel.log),
            notes: $(by.cssContainingText(`${tags.div}.${classes.tabStrip} ${tags.li} ${tags.span}.${classes.tab}`,
                leftPanel.notes), leftPanel.notes),
            events: $(by.cssContainingText(`${tags.div}.${classes.tabStrip} ${tags.li} ${tags.span}.${classes.tab}`,
                leftPanel.events), leftPanel.events),
            tasks: $(by.cssContainingText(`${tags.div}.${classes.tabStrip} ${tags.li} ${tags.span}.${classes.tab}`,
                leftPanel.tasks), leftPanel.tasks),
            attachments: $(by.cssContainingText(`${tags.div}.${classes.tabStrip} ${tags.li} ${tags.span}.${classes.tab}`,
                leftPanel.attachments), leftPanel.attachments),
            selectedTab: (tab: string) => $(
                by.cssContainingText(`a.${classes.selected} ${tags.span}`, tab), tab),
        };
    }

    static get status() {
        const { status } = NewCasePage.caseData;
        return {
            openWaitingCustomer: CommonPage.getDropdownOptionByCssText(status,
                dropdownOptions.openWaitingCustomer),
            openWaitingUs: CommonPage.getDropdownOptionByCssText(status,
                dropdownOptions.openWaitingUs),
            resolved: CommonPage.getDropdownOptionByCssText(status,
                dropdownOptions.resolved),
            compliantOnly: CommonPage.getDropdownOptionByCssText(status,
                dropdownOptions.compliantOnly),
            closedNoResolution: CommonPage.getDropdownOptionByCssText(status,
                dropdownOptions.closedNoResolution),
            closedWithoutResolution: CommonPage.getDropdownOptionByCssText(status,
                dropdownOptions.closedWithoutResolution),
        };
    }

    static get warningDialog() {
        return {
            dialogTitle: $(by.cssContainingText(`span#${id.dialogTitle}.${classes.dialogTitle}`, eNames.warning),
                eNames.warning),
            okBtn: $(by.cssContainingText(`div.${classes.buttonsDialog} button`, eNames.ok), eNames.ok),
        };
    }

    static get searchCase() {
        return {
            searchBtn: $(by.css(`a.${classes.search} span[id$="${id.btnEl}"]`), eNames.search),
            input: $(by.css(`div.${classes.searchField} input[data-ref="${id.inputEl}"]`), eNames.input),
            searchBox: $(by.css(`a.${classes.searchButton} span[id$="${id.btnEl}"]`), eNames.search),
            dropdown: $(by.css(`a.${classes.typeButton} span[id$="${id.btnWrap}"]`), eNames.dropdown),
            cases: $(by.cssContainingText(`span[data-ref="${eNames.textEl}"]`, eNames.cases), eNames.cases),
            caseItem: (item: string) => $(by.cssContainingText(tags.span, item), item),
            selectedIcon: (type: string) => $(
                by.css(`a.${classes.typeButton} span[data-ref="${eNames.btnIconEl}"][class*="${type}"]`), type),
            caseList: $(by.css(`ul.${classes.entityCards}`), eNames.list),
            caseFirstItem: $(by.xpath('(//li//span)[1]'), eNames.card),
            caseListItems: $$(by.css(`ul.${classes.entityCards} ${tags.li}`), eNames.list),
        };
    }

    static get prospectDialog() {
        return {
            dialogTitle: $(by.cssContainingText(`span[id^=${id.idDialog}].${classes.dialogTitle}`, eNames.newProspect),
                eNames.newProspect),
            dialogFrame: $(xpath(tags.iFrame)
                .where(attributes.class, classes.contentFrame)
                .last()
                .buildByObject(), eNames.category),
            firstName: CommonPage.getElementByIdEndsWith(id.firstNameControl,
                eNames.firstName),
            lastName: CommonPage.getElementByIdEndsWith(id.lastNameControl,
                eNames.lastName),
        };
    }

    static get notesTab() {
        return {
            notesFrame: $(by.css(`iframe[id$=${id.notesFrame}]`), eNames.notesFrame),
            addNoteButton: $(by.css(`a[id$=${id.addNoteButton}]`), eNames.addNote),
            refreshNotesButton: $(by.css(`a[id$=${id.refreshNotesButton}]`), eNames.refreshNotes),
            selectView: $(by.css(`select[id$=${id.selectView}]`), eNames.selectView),
            groupingView: $(by.css(`select[id$=${id.groupingView}]`), eNames.groupingView),
            exportToExcel: $(by.css(`a[id$=${id.exportToExcel}]`), eNames.exportToExcel),
            exportToWord: $(by.css(`a[id$=${id.exportToWord}]`), eNames.exportToWord),
            noteHeader:  $(by.cssContainingText(`${tags.th} ${tags.a}`, eNames.note), eNames.note),
            relatedEntityHeader:  $(by.cssContainingText(`${tags.th} ${tags.a}`, eNames.relatedEntity),
                eNames.relatedEntity),
            deleteHeader:  $(by.cssContainingText(tags.th, eNames.delete), eNames.delete),
            newNoteTitle:  $(by.cssContainingText(tags.h1, eNames.newNote), eNames.newNote),
            subject: $(by.css(`input[id$=${id.subjectNote}]`), eNames.subject),
            richEditorFrame: $(by.css(`iframe[id$=${id.textNoteFrame}]`), name.editorFrame),
            privateControl: $(by.css(`div[id*=${id.notePrivate}] label.${classes.checkboxOff}`), name.privateNote),
            privateOn: $(by.css(`div[id*=${id.notePrivate}] label.${classes.checkboxOn}`), name.privateOn),
            saveBtn: CommonPage.getElementByIdEndsWith(id.savebutton, eNames.save),
            saveAndCloseBtn: CommonPage.getElementByIdEndsWith(id.saveCloseButton, eNames.save),
            closeBtn: CommonPage.getElementByIdEndsWith(id.closeButton, eNames.close),
            textBody: $(by.css(tags.body), tags.body),
            noteItem: (note: string) => $(
                by.cssContainingText(`${tags.div}.${classes.noteSubject}`, note), note),
        };
    }

    static getCompanyCardByName(companyName: string) {
        return $(by.css(`span[title="${companyName}"]`), companyName);
    }
}

import { by } from 'protractor';
import { By } from 'selenium-webdriver';

import { Constants } from '../../../components/misc-utils/constants';
import { $, $$, $cssContainingText } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { xpath } from '../../../components/misc-utils/xpath-builder';
import { CommonPage } from '../common/common.po';

import { AccountConstants } from './accounts.constant';

const tag = HtmlHelper.tags;
const names = AccountConstants.elementNames;
const attr = AccountConstants.attributes;

const { attributes, tags } = HtmlHelper;
const { id } = AccountConstants.attributes;
export class AccountsPage {

    static get accountsElements() {
        return {
            accountsListTable: $(xpath
                (tag.table)
                .contains('id', 'ProductionList.aspx')
                .buildByObject(), names.accountsList),
            casesListTable: $(xpath
                (tag.table)
                .contains('id', 'CaseList.aspx')
                .buildByObject(), names.casesList),
            iconAccount: $(by.css(`${tag.a}[title="${names.lickToOpenAccount}"]`), names.iconAccount),
            getProductFromTheList(href: string) {
                return $(xpath(tag.a)
                    .where('href', href)
                    .parent(tag.td)
                    .parent(tag.tr)
                    .descendant(tag.td)
                    .nthChild(Constants.number.four)
                    .buildByObject(), names.product);
            },
            getContactNameFromTheList(href: string) {
                return $(xpath(tag.a)
                    .where('href', href)
                    .parent(tag.td)
                    .parent(tag.tr)
                    .descendant(tag.td)
                    .nthChild(Constants.number.five)
                    .buildByObject(), names.contact);
            },
        };
    }

    static get casePageElements() {
        const column = AccountConstants.casesTableColumns;
        return {
            addCaseButton: $(by.css(`${tag.a}[title="${names.addCase}"]`), names.addCase),
            refreshButton: $(by.css(`${tag.a}[title="${names.refresh}"]`), names.refresh),
            grouping: $(xpath(tag.select).contains('id', 'groupingSelector').buildByObject(), names.grouping),
            exportToExcel: $(by.css(`${tag.a}[title="${names.exportToExcel}"]`), names.exportToExcel),
            exportToWord: $(by.css(`${tag.a}[title="${names.exportToWord}"]`), names.exportToWord),
            caseTableColumns: {
                opened: $(by.cssContainingText(tag.a, column.opened), column.opened),
                subject: $(by.cssContainingText(tag.a, column.subject), column.subject),
                contact: $(by.cssContainingText(tag.a, column.contact), column.contact),
                acct: $(by.cssContainingText(tag.a, column.acct), column.acct),
                committed: $(by.cssContainingText(tag.a, column.committed), column.committed),
                priority: $(by.cssContainingText(tag.a, column.priority), column.priority),
                status: $(by.cssContainingText(tag.a, column.status), column.status),
                owner: $(by.cssContainingText(tag.a, column.owner), column.owner),
                queue: $(by.cssContainingText(tag.a, column.queue), column.queue),
                queueBranch: $(by.cssContainingText(tag.a, column.queueBranch), column.queueBranch),
                submitter: $(by.cssContainingText(tag.a, column.submitter), column.submitter),
                category: $(xpath(tag.a).contains('href', 'CaseList.aspx').buildByObject(), column.category),
                subCategory: $(by.cssContainingText(tag.a, column.subCategory), column.subCategory),
            },
            saveButton: $(by.css(`${tag.a}[title="${names.save}"]`), names.save),
            saveAndAddButton: $(by.css(`${tag.a}[title="${names.saveAndAdd}"]`), names.saveAndAdd),
            closeButton: $(by.css(`${tag.a}[title="${names.close}"]`), names.close),
            subject: $(by.id(attr.id.subjectFieldId), names.subject),
            description: $(xpath(tag.link)
                .where('id', attr.id.radeditorStyleSheet0)
                .parent(tag.head)
                .followingSibling(tag.body)
                .buildByObject(), names.description),
            categoryDropdown: $(by.id(attr.id.productTypeDropDownId),
                names.category),
            categoryDropdownOptionByIndex(index: number) {
                return $(xpath(tag.select)
                    .where('id', attr.id.productTypeDropDownId)
                    .descendant(tag.option)
                    .nthChild(index)
                    .buildByObject(), names.categoryOption);
            },
            subCategoryDropdown: $(by.id(attr.id.productDropdownId),
                names.subCategory),
            subCategoryDropdownOptionByIndex(index: number) {
                return $(xpath(tag.select)
                    .where('id', attr.id.productDropdownId)
                    .descendant(tag.option)
                    .nthChild(index)
                    .buildByObject(), names.categoryOption);
            },
            priorityDropdown: $(by.id(attr.id.priorityDropdownId),
                names.priority),
            statusDropdown: $(by.id(attr.id.statusDropdownId),
                names.status),
            getCaseFromTheListBySubject(subject: string) {
                return $(xpath(tag.nobr).textContains(subject).buildByObject(), subject);
            },
            grouptingHeader: $(by.css(`${tag.tr}.${attr.class.groupHeader_Aptean}`), names.grouping),
            contactByDropdown: $(by.id(attr.id.contactByDropdownId),
                names.contactBy),
            caseIcon: $(xpath(tag.a).contains('href', 'CaseList.aspx').descendant(tag.span).buildByObject(), names.caseIcon),
            collapseIcon: $(By.css(`${tag.input}[title="${names.collapseGroup}"]`), names.collapseGroup),
            expandIcon: $(By.css(`${tag.input}[title="${names.expandGroup}"]`), names.expandGroup),
            printPage: $(by.css(`${tag.a}[title="${names.printPage}"]`), names.printPage),
            saveAndClose: $(by.css(`${tag.a}[title="${names.saveAndClose}"]`), names.saveAndClose),
        };
    }

    static get titles() {
        return {
            accountDetails: $(xpath(tag.h1)
                .textContains('Acct')
                .buildByObject(), names.accountDetails),
            newCase: $(by.cssContainingText(tag.h1, names.newCase), names.newCase),
            case: $(by.cssContainingText(tag.h1, 'Case #'), names.case),
        };
    }

    static get sidebarMenu() {
        return {
            cases: $(xpath(tag.a)
                .contains('id', attr.id.pageCases_tab)
                .buildByObject(), names.cases),
            tasks: $(by.css(`.${attr.class.iconTask}.${attr.class.image}`),
                names.tasks),
            notes: $(by.css(`.${attr.class.icoNote}.${attr.class.image}`),
                names.notes),
        };
    }

    static get requiredFieldValidationMessage() {
        return $(xpath(tag.span).contains('style', 'color: red').buildByObject(), names.requiredFieldMessage);
    }

    static get warningMessage() {
        return {
            title: $(by.cssContainingText(tag.span, names.warning), names.warning),
        };
    }

    static get form() {
        return $(By.css(`${tag.form}#aspnetForm`), names.form);
    }

    static get historyModal() {
        return {
            historyTitle: $cssContainingText(`.${attr.class.uiDialogTitle}`,
                names.history),
        };
    }

    static get editTaskModal() {
        return {
            title: $cssContainingText(`[${attributes.id}$='${id.headingUpdatePanel}'] ${tags.h1}`,
                names.task),
            threeDots: $(by.className(attr.class.apteanIconMenu),
                names.threeDots),
            history: $cssContainingText(`[${attributes.id}$='${id.mainMenuM0M0}'] ${tags.span}`,
                names.historyThreeDots),
            delete: $cssContainingText(`[${attributes.id}$='${id.mainMenuM0M2}'] ${tags.span}`,
                names.delete),
        };
    }

    static get tasks() {
        return {
            taskRows: $$(by.css(`[id$='${id.gridHolderUpGridHolder}'] .${attr.class.gridRowAptean}`),
                names.tasksRows),
            editIcons: $$(by.css(`[id$='${id.gridHolderUpGridHolder}'] .${attr.class.gridRowAptean} .${attr.class.columnIcon}`),
                names.editIcons),
        };
    }

    static get tasksIFrame() {
        return CommonPage.getElementByIdEndsWith(attr.id.tasksFramesFrame,
            attr.id.tasksFramesFrame);
    }

    static get taskTable() {
        return {
            status: $(by.cssContainingText(tag.a, names.status), names.status),
            task: $(by.cssContainingText(tag.a, names.taskHeader), names.taskHeader),
            assignedBy: $(by.cssContainingText(tag.a, names.assignedBy), names.assignedBy),
            due: $(by.cssContainingText(tag.a, names.due), names.due),
            editTask: (subject: string) => $(by.xpath(
                `(//${tag.div}[contains(@class,'${attr.class.gridDataDiv}')]
                //${tag.tr}[contains((.),'${subject}')]//${tag.span}[@class='${attr.class.iconTask}'])[1]`), names.editTask),
        };
    }

    static get taskWindow() {
        return {
            overview: this.getTaskTabs(names.overview),
            notes: this.getTaskTabs(names.notes),
            subtask: this.getTaskTabs(names.subtask),
            attachments: this.getTaskTabs(names.attachments),
            delete: $(by.cssContainingText(tag.span, names.delete),
                names.delete),
            dialogTitle: $(by.css(`${tag.span}.${attr.class.uidialogTitle}`),
                names.delete),
            summary: this.getTaskTabs(names.summary),
            details: this.getTaskTabs(names.details),
            createdDate: CommonPage.getElementByIdEndsWith(attr.id.addDate,
                attr.id.addDate),
            createdBy: CommonPage.getElementByIdEndsWith(attr.id.addUserBy,
                attr.id.addUserBy),
            modifiedDate: CommonPage.getElementByIdEndsWith(attr.id.modifiedDate,
                attr.id.modifiedDate),
            modifiedUserBy: CommonPage.getElementByIdEndsWith(attr.id.modifiedUserBy,
                attr.id.modifiedUserBy),
            closeButton: $(by.css(`${tag.input}[value="${names.close}"]`),
                names.close),
            historyFrame: $(by.css(`[src*='${names.history}'].${attr.class.contentFrame}`),
                names.history),
            detailPanel: CommonPage.getElementByIdEndsWith(attr.id.detailPanel,
                attr.id.detailPanel),
            showLogDropDown:  $(by.css(`${tag.div}[id$='${attr.id.detailPanel}'] ${tag.select}`),
                names.details),
            showLogInReadView:  $(by.cssContainingText(`${tag.div}[id$='${attr.id.detailPanel}'] ${tag.option}`, names.showLogInReadView),
                names.showLogInReadView),
            showLogInListView:  $(by.cssContainingText(`${tag.div}[id$='${attr.id.detailPanel}'] ${tag.option}`, names.showLogInListView),
                names.showLogInListView),
            listView: $(by.css(`${tag.div}[class$='${attr.class.aptean}'][id$='${attr.id.gridData}']`),
                names.showLogInListView),
            readView: $(by.css(`${tag.div}[class$="${attr.class.apteanFlexRow}"][id$="${attr.id.gridData}"]`),
                names.showLogInReadView),
            exportToWord: $(by.css(`${tag.a}[title="${names.exportWord}"]`),
                names.exportWord),
        };
    }

    static getTaskTabs(tabText: string) {
        return $(by.cssContainingText(`div[class*='${attr.class.tabStrip}'] span.${attr.class.innerWrap}`, tabText), tabText);
    }

    static get newNoteWindow() {
        return {
            newNoteTitle: $(by.cssContainingText(tags.h1, names.newNote),
                names.newNote),
            privateOff: $(by.css(`${tags.div}[id*='${attr.id.private}'] ${tags.label}.${attr.class.checkboxOff}`),
                names.private),
            privateOn: $(by.css(`${tags.div}[id*='${id.private}'] ${tags.label}.${attr.class.checkboxOn}`),
                names.private),
            subjectRequiredValidator: CommonPage.getElementByIdEndsWith(attr.id.subjectRequiredValidator,
                 names.subject),
            textRequiredValidator: CommonPage.getElementByIdEndsWith(attr.id.textRequiredValidator,
                attr.id.textRequiredValidator),
        };
    }

    static get noteWindow() {
        return {
            viewSelector: $(by.css(`${tags.select}[${attributes.name}$='${names.viewSelector}']`),
                names.viewSelector),
            readView: $(by.cssContainingText(`${tags.select}[${attributes.name}$='${names.viewSelector}'] option`, names.readView),
                names.readView),
            listView: $(by.cssContainingText(`${tags.select}[${attributes.name}$='${names.viewSelector}']  option` , names.listView),
                names.listView),
            note: $(by.cssContainingText(tag.a, names.note),
                names.note),
            relatedEntity: $(by.cssContainingText(tag.a, names.relatedEntity),
                names.relatedEntity),
            delete: $(by.cssContainingText(tag.th, names.delete),
                names.delete),
        };
    }

    static get closeAccount() {
        const labels = AccountConstants.closeAccount;
        return {
            account: $(by.css('li.pipeline-tile-item.no-forecast-date div'), labels.account),
        };
    }
}

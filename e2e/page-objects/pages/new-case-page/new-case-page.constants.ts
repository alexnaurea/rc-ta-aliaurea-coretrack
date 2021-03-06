import { NewAccountPageConstant } from '../new-account-page/new-account-page.constants';

export class NewCasePageConstant {

    static get elementNames() {
        return {
            save: 'Save',
            newCase: 'New Case',
            saveAndAdd: 'Save and Add',
            close: 'close',
            caseData: 'Case Data',
            resolution: 'Resolution',
            user: 'User',
            selectUser: 'Select User',
            contact: 'Contact',
            contactSelector: 'Contact Selector',
            selectContact: 'Select Contact',
            account: 'Account',
            branch: 'Branch',
            language: 'Language',
            description: 'Description',
            productType: 'Product Type',
            product: 'Product',
            subject: 'Subject',
            category: 'Category',
            subCategory: 'Sub Category',
            contactBy: 'Contact By',
            priority: 'priority',
            status: 'status',
            privacyByDept: 'Privacy By Dept',
            committed: 'Committed',
            committedCalender: 'Committed Calender',
            credit: 'Credit',
            satisfaction: 'Satisfaction',
            normal: 'Normal',
            escalated: 'Escalated',
            emergency: 'Emergency',
            all: 'All',
            retail: 'Retail',
            commercial: 'Commercial',
            aurea: 'Aurea',
            daron: 'Daron',
            allen: 'Allen',
            firstName: 'First Name',
            lastName: 'Last Name',
            company: 'Company',
            return: 'Return',
            searchContacts: 'Search Contacts',
            contactCheckbox: 'Contact Checkbox',
            prospect: 'Prospect',
            useSelectedContact: 'Use Selected Contact',
            contactCheckboxList: 'Contact Checkbox List',
            generalInformation: 'General Information',
            branchInfo: 'Branch Info',
            viewState: 'View State',
            continueWithNewProspect: 'Continue With New Prospect',
            test: 'Test',
            leftPanel: 'Left Panel',
            search: 'Search',
            warning: 'Warning',
            ok: 'OK',
            caseNumber: 'Case #',
            title: 'Title',
            regex: '^CASE #(\\d+):',
            dropdown: 'Dropdown',
            cases: 'Cases',
            textEl: 'textEl',
            input: 'Input',
            newProspect: 'New Prospect',
            btnIconEl: 'btnIconEl',
            list: 'List',
            card: 'Card',
            qa: 'QA_',
            regexId: '(\\d+) - (.+)',
            calendar: 'Calendar',
            menu: 'Menu',
            copyLinkToPage: 'Copy Link to Page',
            emailLinkToPage: 'Email Link to Page',
            history: 'History...',
            searchUser: 'Search User',
            regexIdName: '(\\d+): (.+)',
            notesFrame: 'Notes frame',
            addNote: 'Add Note',
            refreshNotes: 'Refresh Notes',
            selectView: 'Select View',
            groupingView: 'Grouping View',
            exportToExcel: 'Export to Excel',
            exportToWord: 'Export to Word',
            relatedEntity: 'Related Entity',
            note: 'Note',
            delete: 'Delete',
            newNote: 'New Note',
            text: 'Text',
        };
    }

    static get attributes() {
        return {
            id: {
                userSelectorDpbx: 'userSelector_dpbx',
                requiredFieldValidator: 'RequiredFieldValidator',
                contactSelectButton: 'contactselectbutton',
                txtFirstName: 'txtFirstName',
                txtLastName: 'txtLastName',
                txtCompanyName: 'txtCompanyName',
                filterOnContactType: 'filterOnContactType',
                searchButton: 'searchButton',
                columnSelectCheckBox: 'columnSelectCheckBox',
                btnUseSelected: 'btnUseSelected',
                btnNewProspect: 'btnNewProspect',
                savebutton: 'savebutton',
                dialogTitle: 'ui-id-1',
                selectAccount: 'contactselector_selectaccountbutton',
                accountSearch: 'btnShowReps',
                btnEl: 'btnEl',
                inputEl: 'inputEl',
                btnWrap: 'btnWrap',
                idDialog: 'ui-id-',
                firstNameControl: 'first_name_control',
                lastNameControl: 'last_name_control',
                logFrame: 'logframes_frame',
                editorFrame: 'txtDescription_control_contentIframe',
                calendar: 'datecommittedid_control_calendar',
                mainMenu: 'mainMenu',
                userSelectorSel: 'userSelector_sel',
                notesFrame: 'noteframes_frame',
                addNoteButton: 'addNoteButton',
                refreshNotesButton: 'PagegridResetButton',
                selectView: 'Page_viewSelector',
                groupingView: 'Page_groupingSelector',
                exportToExcel: 'ExportToExcel',
                exportToWord: 'ExportToWord',
                subjectNote: 'subject_control',
                textNoteFrame: 'note_text_control_contentIframe',
                notePrivate: 'detailsInfo_isprivate',
                closeButton: '_closebutton',
                saveCloseButton: 'saveandclosebutton',
            },
            name: {
                ownerType: 'ownerType',
                contactSelectorControl: 'contactselector_control',
                contactSelectOrddac: 'contactselectorddac',
                ddlBranchControl: 'ddlbranch_control',
                caseLanguage1Control: 'caselanguage1_control',
                productSelector: 'productselector',
                product: '_product',
                subjectControl: 'subjectcontrol',
                categorySelector: 'categoryselector',
                productType: '_producttype',
                contactMethod1: 'contactmethod1',
                casePriority1: 'casepriority1',
                caseStatusSelectorControl: 'casestatusselector_control',
                creditAmountId: 'creditamountid',
                clientSatisfaction1: 'clientsatisfaction1',
                dateInput: '_dateInput',
                newProspectTypeSelector: 'newProspectTypeSelector',
                viewState: '__VIEWSTATE',
                editorFrame: 'Editor frame',
                privateNote: 'Private Note',
                privateOn: 'Private Note ON',
            },
            classes: {
                iconSave: 'icon-save',
                iconAdd: 'icon-add',
                gridRowAptean: 'GridRow_Aptean',
                iconClose: 'icon-close',
                iconCalendar: 'icon-calendar',
                checkboxHandle: 'checkbox-handle',
                datetimeInput: 'datetime-input',
                uiDialogTitle: 'ui-dialog-title',
                subSection: NewAccountPageConstant.attributes.classes.subSection,
                tabStrip: 'vtabstrip',
                dialogTitle: 'ui-dialog-title',
                buttonsDialog: 'ui-dialog-buttonset',
                tab: 'innerWrap',
                search: 'a-searchbar-searchbutton',
                searchField: 'a-searchbar-searchfield',
                searchButton: 'a-searchbar-searchbutton',
                typeButton: 'a-searchbar-typebutton',
                contentFrame: 'contentFrame',
                iconBriefcase: 'icon-briefcase',
                entityCards: 'entity-cards',
                selected: 'selected',
                menuPopup: 'menu-popup',
                gridCheckBox: 'gridCheckBox',
                checkboxOff: 'checkbox-off',
                checkboxOn: 'checkbox-on',
                noteSubject: 'note-subject',
            },
            labels: {
                aCategoryMustBeSelected: 'A category must be selected',
            },
        };
    }

    static get dropdownOptions() {
        return {
            onlineBanking: 'Online Banking',
            atmDebit: 'ATM/Debit',
            user: 'User',
            categoryOption: 'select[name*="categoryselector"][name$="_producttype"] option',
            subCategoryOption: 'select[name*="categoryselector"][name$="_product"] option',
            openWaitingCustomer: 'Open - Waiting on Customer',
            openWaitingUs: 'Open - Waiting on us',
            resolved: 'Resolved',
            closedWithoutResolution: 'Closed without Resolution',
            compliantOnly: 'Complaint Only - Not Actionable',
            closedNoResolution: 'Closed - No Resolution Offered',
            email: 'Email',
        };
    }

    static get leftPanel() {
        return {
            overview: 'Overview',
            log: 'Log',
            notes: 'Notes',
            events: 'Events',
            tasks: 'Tasks',
            attachments: 'Attachments',
        };
    }

    static get messages() {
        return {
            subjectRequired: 'SUBJECT is required',
            textRequired: 'TEXT is required',
        };
    }
}

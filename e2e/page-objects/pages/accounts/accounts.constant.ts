export class AccountConstants {

    static get elementNames() {
        return {
            accountsList: 'Accounts list',
            casesList: 'Cases list',
            lickToOpenAccount: 'Click to open this retail account.',
            iconAccount: 'Icon account',
            accountDetails: 'Account details',
            product: 'Product',
            contact: 'Contact',
            cases: 'Cases',
            addCase: 'Add Case',
            refresh: 'Refresh',
            grouping: 'Grouping',
            exportToExcel: 'Export to Excel',
            exportToWord: 'Export to Word',
            newCase: 'New Case',
            save: 'Save',
            saveAndAdd: 'Save and Add',
            requiredFieldMessage: 'Required fiel message',
            subject: 'Subject',
            description: 'Description',
            category: 'Category',
            categoryOption: 'Category option',
            subCategory: 'Sub category',
            subCategoryOption: 'Sub category option',
            priority: 'Priority',
            status: 'Status',
            warning: 'Warning',
            close: 'Close',
            ok: 'OK',
            contactBy: 'Contact by',
            caseIcon: 'Case icon',
            case: 'Case',
            form: 'Form',
            collapseGroup: 'Collapse group',
            expandGroup: 'Expand group',
            tasks: 'Tasks',
            tasksRows: 'Tasks Rows',
            editIcons: 'Edit Icons',
            task: 'Task:',
            threeDots: 'Three Dots',
            historyThreeDots: 'History...',
            history: 'History',
            delete: 'Delete',
            overview: 'Overview',
            notes: 'Notes',
            subtask: 'Subtasks',
            attachments: 'Attachments',
            printPage: 'Print Page',
            saveAndClose: 'Save And Close',
            summary: 'Summary',
            details: 'Details',
            exportWord: 'Export To Word',
            deleteMessage: 'Are you sure you want to delete',
            assignedBy: 'Assigned By',
            due: 'Due',
            editTask: 'Edit Task',
            detailsPanelDropDown: 'Details Panel Drop Down',
            showLogInReadView: 'Show log in read view',
            showLogInListView: 'Show log in list view',
            taskHeader: 'Task',
            newNote: 'New Note',
            private: 'private',
            relatedEntity: 'Related Entity',
            viewSelector: 'viewSelector',
            note: 'Note',
            readView: 'Read View',
            listView: 'List View',
        };
    }

    static get attributes() {
        return {
            class: {
                iconAccount: 'icon-account',
                iconCase: 'icon-case',
                groupHeader_Aptean: 'GroupHeader_Aptean',
                toolbarTitle: 'toolbar-title',
                iconTask: 'icon-task',
                image: 'image',
                apteanIconMenu: 'aptean-icon-menu',
                uiDialogTitle: 'ui-dialog-title',
                gridRowAptean: 'GridRow_Aptean',
                columnIcon: 'column-icon',
                tabStrip: 'tabstrip',
                innerWrap: 'innerWrap',
                uidialogTitle: 'ui-dialog-title',
                contentFrame: 'contentFrame',
                gridDataDiv: 'GridDataDiv',
                aptean: '_Aptean',
                apteanFlexRow: '_ApteanFlexRow',
                icoNote: 'icon-note',
                checkboxOff: 'checkbox-off',
                checkboxOn: 'checkbox-on',
            },
            id: {
                tasksFramesFrame: 'tasksframes_frame',
                gridHolderUpGridHolder: '_GridHolder_upGridHolder',
                mainMenuM0M0: 'mainMenu_m0_m0',
                mainMenuM0M2: 'mainMenu_m0_m2',
                headingUpdatePanel: 'headingUpdatePanel',
                radeditorStyleSheet0: 'RADEDITORSTYLESHEET0',
                confirmationDialog: 'confirmationDialog',
                pageCases_tab: 'pageCases_tab',
                statusDropdownId:
                    'ctl01_MainContentHolder_ctl01_myBody_ctl00_detailsInfo_casestatusselector_ctl00_casestatusselector_control',
                priorityDropdownId:
                    'ctl01_MainContentHolder_ctl01_myBody_ctl00_detailsInfo_casepriority1_ctl00_casepriority1_control',
                productDropdownId:
                    'ctl01_MainContentHolder_ctl01_myBody_ctl00_detailsInfo_categoryselector__product',
                productTypeDropDownId:
                    'ctl01_MainContentHolder_ctl01_myBody_ctl00_detailsInfo_categoryselector__producttype',
                subjectFieldId:
                    'ctl01_MainContentHolder_ctl01_myBody_ctl00_detailsInfo_subjectcontrol_ctl00_subjectcontrol_control',
                contactByDropdownId:
                    'ctl01_MainContentHolder_ctl01_myBody_ctl00_detailsInfo_contactmethod1_ctl00_contactmethod1_control',
                addDate: '_txtAddDate',
                addUserBy: '_txtAddUser',
                modifiedDate: '_txtModDate',
                modifiedUserBy: '_txtModUser',
                detailPanel: '_detailsPanel',
                gridData: '_GridData',
                private: '_isprivate',
                subjectRequiredValidator: '_subject_RequiredFieldValidator',
                textRequiredValidator: '_note_text_RequiredFieldValidator',
            },
        };
    }

    static get casesTableColumns() {
        return {
            opened: 'Opened',
            subject: 'Subject',
            contact: 'Contact',
            acct: 'Acct',
            committed: 'Committed',
            priority: 'Priority',
            status: 'Status',
            owner: 'Owner',
            queue: 'Queue',
            queueBranch: 'Queue Branch',
            submitter: 'Submitter',
            category: 'Category',
            subCategory: 'Sub Category',
        };
    }

    static get priorityValues() {
        return {
            escalated: 'Escalated',
            normal: 'Normal',
            emergency: 'Emergency',
        };
    }

    static get status() {
        return {
            openWaitingOnUs: 'Open - Waiting on us',
            closedNoResolutionOffered: 'Closed - No Resolution Offered',
            closedWithoutResolution: 'Closed without Resolution',
            openWaitingOnCustomer: 'Open - Waiting on Customer',
            resolved: 'Resolved',
            complaintOnlyNotActionable: 'Complaint Only - Not Actionable',
        };
    }

    static get groupingOptions() {
        return {
            status: 'Status',
            priority: 'Priority',
            noGrouping: '(No Grouping)',
        };
    }

    static get contactBy() {
        return {
            fax: 'Fax',
        };
    }

    static get closeAccount() {
        return {
            account: 'Account',
        };
    }
}

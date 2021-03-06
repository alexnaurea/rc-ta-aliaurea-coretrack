import { Constants } from '../../../components/misc-utils/constants';
import { DropdownField } from '../models/dropdown-field';

export class HomePageConstant {
    static readonly retail: DropdownField = Object.freeze({ text: 'Retail', index: Constants.number.zero, });
    static readonly commercial: DropdownField = Object.freeze({ text: 'Commercial', index: Constants.number.one, });

    static readonly elementNames = Object.freeze({
            browse: 'Browse',
            customReports: 'Custom Reports',
            reportExpanded: 'Report Expanded',
            reportWriter: 'Report Writer',
            pendingReports: 'Pending Reports',
            actionCenter: 'Action Center',
            hamburger: 'Hamburger Icon',
            home: 'Home',
            new: 'New',
            opportunities: 'Opportunities',
            plusIcon: 'Plus Icon',
            refresh: 'Refresh',
            queues: 'Queues',
            title: 'Title',
            toDoList: 'ToDoList',
            managedContacts: 'ManagedContacts',
            signOff: 'SignOff',
            environment: 'Environment',
            environmentVersion: 'Environment Version',
            sessionTime: 'Session Time',
            about: 'About',
            serviceCenter: 'Service Center',
            username: 'Username',
            opportunity: 'Opportunity',
            queueExpanded: 'Queue Expanded',
            account: 'Account',
            accounts: 'Accounts',
            case: 'Case',
            commercialProspect: 'Commercial Prospect',
            retailProspect: 'Retail Prospect',
            checkExistingContact: 'Check Existing Contact',
            cases: 'Cases',
            tasks: 'Tasks',
            events: 'Events',
            tickets: 'Tickets',
            administration: 'Administration',
            reports: 'Reports',
            administrationExpanded: 'Administration Expanded',
            configuration: 'Configuration',
            compensation: 'Compensation',
            goals: 'Goals',
            organization: 'Organization',
            resources: 'Resources',
            documents: 'Documents',
            links: 'Links',
            security: 'Security',
            system: 'System',
            serviceCenterExpanded: 'Service Center Expanded',
            users: 'Users',
            roles: 'Roles',
            caseAreas: 'Case Areas',
            knowledgeBase: 'Knowledge Base',
            ticketCategories: 'Ticket Categories',
            products: 'Products',
            customItem: 'Custom Item',
            customItemTypes: 'Custom Item Types',
            dispositions: 'Dispositions',
            eventTypes: 'Event Types',
            lostReasons: 'Lost Reasons',
            onBoarding: 'Onboarding',
            organizations: 'Organizations',
            outsideInstitutions: 'Outside Institutions',
            referralSources: 'Referral Sources',
            relationships: 'Relationships',
            salesStages: 'Sales Stages',
            trainingModules: 'Training Modules',
            transferActivities: 'Transfer Activities',
            userLabels: 'User Labels',
            searchButton: 'Search Button',
            searchBox: 'Search Box',
            searchDrodown: 'Search Drodown',
            searchResults: 'Search Results',
            searchResultsGridView: 'Search Results in Grid View',
            searchResultsCardView: 'Search Results in Card View',
            searchTerm: 'Search Term',
            searchFilter: 'Search Filter',
            allFilterItem: 'All',
            retailContactFilterItem: 'Retail Contact',
            caseOwnerUserFilterItem: 'Case Owner - User',
            showCardView: 'Show Card View',
            showGridView: 'Show Grid View',
            refreshIcon: 'Refresh Icon',
            pageHeader: 'Page Header',
            errorPopMessage: 'Error Popup Message',
            eBusinessDeposit: 'eBusiness Deposit',
            caseByCategory: 'Case By Category',
            enterNewProspect: 'Enter the following new prospect information to confirm that the prospect does not already exist.',
            lastNameRequired: 'Last Name is required',
            firstNameRequired: 'First Name is required',
            test: 'test',
            delete: 'delete',
            menu: 'menu',
            name: 'Name',
            address: 'Address',
            workPhone: 'Work Phone',
            homePhone: 'Home Phone',
            settingPopup: 'Setting Popup',
            taxId: 'Tax ID',
            expand: 'Expand',
            details: 'Details',
            contactList: 'Contact List',
            branches: 'Branches',
            departments: 'Departments',
            districts: 'Districts',
            regions: 'Regions',
            enterProspectInfo: 'Please enter prospect information above.',
            cancel: 'Cancel',
            cross: 'Cross',
            expandWidget: 'Expand Widget',
            contacts: 'Contacts',
            contactsByNumber: 'Contacts by Number',
            commercialContacts: 'Commercial Contacts',
            retailContacts: 'Retail Contacts',
            pipeline: 'Pipeline',
            production: 'Production',
            check: 'Check',
            lost: 'Lost',
            referrals: 'Referrals',
            applicationStatus: 'Application Status',
            processingLog: 'Processing Log',
            session: 'Sessions',
            unmatched: 'Unmatched',
            greater: '>',
            less: '<',
            nextPage: 'Next Page',
            previousPage: 'Previous Page',
            one: '1',
            two: '2',
            pageOne: 'Page One',
            pageTwo: 'Page Two',
            myProfile: 'MyProfile',
            edit: 'Edit',
            email: 'Email',
            workPhoneNumber: 'Work Phone Number',
            homePhoneNumber: 'Home Phone Number',
            ssn: 'SSN',
            marketing: 'Marketing',
            marketingLists: 'Marketing Lists',
            campaigns: 'Campaigns',
            count: 'Count',
            value: 'Value',
            percentage: 'Percentage',
    });

    static readonly attributes = Object.freeze({
            classes: {
                toolbarTitle: 'toolbar-title',
                toolButtonLeft: 'tool-button-left',
                toolbarMenuUser: 'a-toolbar-menu-user',
                faSignOut: 'fa-sign-out',
                settingPopup: '.pipeline-settings',
                expandWidget: '.baseexpandpanel-default.pipeline-popup',
                check: '.icon-check',
                expandPopup: 'loansourcepipelinepopup',
                delete: '.icon-garbage-can',
                faSearch: 'fa-search',
                itemTool: 'x-treelist-item-tool',
                iconHome: 'icon-home',
                plusIcon: '.a-dashboard-bar-menubutton-widgets',
                pipeline: '.a-dashboardbar-menu-item-Pipeline',
                menu: '.a-dashboardbar-menu.x-layer',
                refresh: '.fa-refresh',
                title: '.toolbar-title',
                iconAdd: 'icon-add',
                xTreelistItemText: 'x-treelist-item-text',
                xTreelistItemExpanded: 'x-treelist-item-expanded',
                iconSortAzDescending: 'icon-sort-az-descending',
                serviceCenter: 'ServiceCenter',
                security: 'Security',
                system: 'System',
                resources: 'Resources',
                configuration: 'Configuration',
                infoPanel: 'infoPanel',
                organization: 'Organization',
                iconUsers3: 'icon-users3',
                header: 'header',
                xTool: 'x-tool',
                aSearchtypeContacts: 'a-searchtype-Contacts',
                address: 'address',
                communication: 'communication',
                email: 'email',
                ssn: 'ssn',
                marketing: 'Marketing',
                aSearchTypeCommercial: 'a-searchtype-Commercial',
                aSearchTypeRetail: 'a-searchtype-Retail',
                aSearchTypeCases: 'a-searchtype-Cases',
                aSearchTypeAccounts: 'a-searchtype-Accounts',
                columnHeader: 'x-column-header',
                loanValue: 'loan-value',
                itemSelected: 'x-item-selected',
                columnHeaderText: 'x-column-header-text',
                salesStage: '.sales-stage',
                globalSearchStats: 'globalsearch-stats',
                searchFilterTrigger: 'x-form-trigger',
                searchFilterItem: 'x-boundlist-item',
                refreshIcon: 'icon-refresh',
                searchResultCardViewItem: 'entity-card-item',
                searchResultGridViewItem: 'x-grid-item',
                errorPopMessage: 'errorpop-message',
                pageHeader: 'page-header',
            },
            dataRef: {
                textEl: 'textEl',
            },
            id: {
                gridListing: 'gridListing',
                gridHeader: 'GridHeader',
                pipelineItem: 'loansourcepipelinetile',
                searchBar: 'searchbar',
                productionCarousel: 'productioncarousel',
                caseByCategoryTile: 'casebycategorytile',
                cancel: 'btnCancel',
                gridcolumn: 'gridcolumn',
            },
            ariaLabel: {
                setting: 'Settings',
                expand: 'Expand',
                close: 'Close',
            },
            placeholder: {
                searchIn: 'Search in',
            },
    });

    static get alertMessages() {
        return {
            companyNameIsRequired: 'Please review the following errors:\nCompany name is required.',
            enterMinThreeCharactersForSearch: 'Enter minimum 3 characters for search',
        };
    }

    static get searchSuccessfulMessage() {
        return {
            message: 'YOU SEARCHED FOR: ',
        };
    }

    static get testData() {
        return {
            alec: 'Alec Baldwin',
            ALEC: 'ALEC BALDWIN',
            test: 'Test',
            TEST: 'TEST',
        };
    }
}

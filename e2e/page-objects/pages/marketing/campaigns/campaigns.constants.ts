export class CampaignsConstant {

    static get titles() {
        return {
            marketingCampaigns: 'Marketing Campaigns',
            newCampaign: 'New Campaign',
            campaign: 'Campaign:',
            warning: 'Warning',
            deleteConfirmation: 'Delete Confirmation',
        };
    }

    static get attributes() {
        return {
            class: {
                logDropDown: '.select-menu',
                threeDots: '.aptean-icon-menu',
                columnIcon: 'column-icon',
                iconCampaign: 'icon-campaign',
                iconRefresh: 'icon-refresh',
                iconAdd: 'icon-add',
                iconMandatory: 'icon-mandatory',
                iconClose: 'icon-close',
                uiDialogButtonPane: 'ui-dialog-buttonpane',
                iconEdit: 'icon-edit',
                uiDialogTitle: 'ui-dialog-title',
                headerContainer: 'header-container',
                innerWrap: 'innerWrap',
                gridPagerAptean: 'GridPager_Aptean',
                horizontal: 'horizontal',
                rootGroup: 'rootGroup',
                slide: 'slide',
                gridCheckBox: 'gridCheckBox',
                closethick: 'ui-icon-closethick',
            },
            name: {
                history: 'History...',
                print: 'Print...',
                delete: 'Delete (Including Distributed Items)',
                ok: 'OK',
                cancel: 'Cancel',
                name1: 'NAME1:',
                emailToPage: 'Email Link to Page',
            },
            id: {
                mainMenuM0: 'mainMenu_m0',
                confirmationDialog: 'confirmationDialog',
                mainMenuM0M0: 'mainMenu_m0_m0',
                gridView: 'gridview',
                page3Tab: 'page3_tab',
                mainContentHolderTabStrip: 'MainContentHolder_tabStrip',
                menuHolderPageGroupingSelector: 'ctl00_MenuHolder_ctl00___Page_groupingSelector',
                addAttachmentButton: 'addAttachmentButton',
                detailsInfoCampaignName:
                    'ctl00_MainContentHolder_ctl01_myBody_ctl00_detailsInfo_campaign_name_ctl00_campaign_name_control',
                detailsInfoListTypeControl:
                    'ctl00_MainContentHolder_ctl01_myBody_ctl00_detailsInfo_ddllist_type_ctl00_ddllist_type_control',
                detailsInfoCampaignCostControl:
                    'ctl00_MainContentHolder_ctl01_myBody_ctl00_detailsInfo_campaign_cost_ctl00_campaign_cost_control',
                radEditorStylesheetOne: 'RADEDITORSTYLESHEET1',
                campaignDistributionControlTxtDistributedDate:
                    'ctl00_MainContentHolder_ctl01_myBody_ctl00_distributionDetails_campaigndistributioncontrol_txtDistributedDate',
                campaignDistributionControlBtnLaunch:
                    'ctl00_MainContentHolder_ctl01_myBody_ctl00_distributionDetails_campaigndistributioncontrol_btnLaunch',
                campaignDistributionControlTxtCountContacts:
                    'ctl00_MainContentHolder_ctl01_myBody_ctl00_distributionDetails_campaigndistributioncontrol_txtCountContacts',
                campaignDistributionControlTxtCountUsers:
                    'ctl00_MainContentHolder_ctl01_myBody_ctl00_distributionDetails_campaigndistributioncontrol_txtCountUsers',
                campaignDistributionDontrolTxtCountPipelines:
                    'ctl00_MainContentHolder_ctl01_myBody_ctl00_distributionDetails_campaigndistributioncontrol_txtCountPipelines',
                campaignDistributionControlTxtCountEvents:
                    'ctl00_MainContentHolder_ctl01_myBody_ctl00_distributionDetails_campaigndistributioncontrol_txtCountEvents',
                campaignDistributionControlDdlDistributionMethod:
                    'ctl00_MainContentHolder_ctl01_myBody_ctl00_distributionDetails_campaigndistributioncontrol_ddlDistributionMethod',
                campaignDistributionControlTxtCountProducts:
                    'ctl00_MainContentHolder_ctl01_myBody_ctl00_distributionDetails_campaigndistributioncontrol_txtCountProducts',
                campaignDistributioncontrolDdlPopupDistribution:
                    'ctl00_MainContentHolder_ctl01_myBody_ctl00_distributionDetails_campaigndistributioncontrol_ddlPopupDistribution',
                campaignDistributionControlDdlActive:
                    'ctl00_MainContentHolder_ctl01_myBody_ctl00_distributionDetails_campaigndistributioncontrol_ddlActive',
                campaignDistributionControlDdlRefreshRate:
                    'ctl00_MainContentHolder_ctl01_myBody_ctl00_distributionDetails_campaigndistributioncontrol_ddlRefreshRate',
                campaignDistributionControlDdlMarketingList:
                    'ctl00_MainContentHolder_ctl01_myBody_ctl00_distributionDetails_campaigndistributioncontrol_ddlMarketingList',
                list_type_control: 'ctl00_MainContentHolder_ctl01_myBody_ctl00_detailsInfo_list_type_ctl00_list_type_control',
            },
        };
    }

    static get elementNames() {
        return {
            refresh: 'Refresh',
            grouping: 'Grouping',
            expandGroup: 'Expand group',
            infoTable: 'Entry Table',
            readView: 'Show log in read view',
            listView: 'Show log in list view',
            date: 'Date',
            entry: 'Entry',
            user: 'User',
            description1: 'Description',
            logDropDown: 'Log DropDown',
            collapseGroup: 'Collapse group',
            marketingColumns: {
                campaign: 'Campaign',
                type: 'Type',
                owner: 'Owner',
                created: 'Created',
                active: 'Active',
                queue: 'Queue',
                queueBranch: 'Queue Branch',
                submitter: 'Submitter',
                category: 'Category',
                subCategory: 'Sub Category',
            },
            cancel: 'Cancel',
            sortedAsc: 'Sorted asc',
            sortedDesc: 'Sorted desc',
            addCampaign: 'Add Campaign',
            nameOne: 'NAME',
            type: 'TYPE',
            cost: 'COST',
            description: 'DESCRIPTION',
            contact: 'Contact',
            save: 'Save',
            digitalMailer: 'Digital Mailer',
            lauchedOn: 'Lauched On',
            launchButton: 'Launch button',
            totalNumberOfActivitiesContactsTargetedInThisCampaign: 'Total number of activities/contacts targeted in this campaign:',
            numberOfUsersIncludedInCampaign: 'Number of users included in campaign',
            numberOfPipelinesIncludedInCampaign: 'Number of pipelines included in campaign',
            numberOfEventsIncludedInCampaign: 'Number of events included in campaign',
            distributePipelinesAndEventsToUsersOrQueues: 'Distribute pipelines and events to users or queues?',
            numberOfProductsRecommendedInThisCampaign: 'Number of products recommended in this campaign',
            showRecommendedProductsToAllUsersOrOnlyToDistributionList: 'Show recommended products to all users, or only to distribution list',
            isCampaignCurrentlyActive: 'Is campaign currently active?',
            refreshDistributionListAutomatically: 'Refresh distribution list automatically?',
            refreshUsing: 'Refresh using',
            close: 'Close',
            ok: 'OK',
            name: 'Name1',
            campaignLogo: 'Campaign Logo',
            overview: 'Overview',
            distribution: 'Distribution',
            campaignItems: 'Campaign Items',
            notes: 'Notes',
            attachments: 'Attachments',
            addAttachments: 'Add Attachments',
            newAttachment: 'New Attachment',
            campaignStats: 'Campaign Stats',
            threeDots: 'Three Dots',
            threeDotsExpand: 'Three Dots Expanded',
            history: 'History',
            delete: 'Delete',
            details: 'Details',
            viewDropdown: 'View Dropdown',
            groupingIcon: 'Grouping icon',
            page: 'Page',
            currentPage: 'Current page',
            nextPage: 'Next page',
            previousPage: 'Previous page',
            nextPageSign: '>',
            previousPageSign: '<',
            campaignIcon: 'Campaign icon',
            tabs: {
                campaignItems: 'Campaign Items',
                distribution: 'Distribution',
                overview: 'Overview',
                notes: 'Notes',
                attachments: 'Attachments',
                campaignStats: 'Campaign Stats',
            },
            requireFieldValidationMessage: 'Required Field validation message',
            threeDotsFloatingmenu: 'Three dots floating menu',
            emailLinkToPage: 'Email Link to Page',
            yes: 'Yes',
            no: 'No',
            activeColumnValue: 'Active column value',
        };
    }

    static get groupingOptions() {
        return {
            active: 'Active',
            noGrouping: '(No Grouping)',
            owner: 'Owner',
        };
    }

    static get testData() {
        return {
            textValue: 'ABC',
            activity: 'Activity',
            cost: '3.00',
        };
    }

    static get messages() {
        return {
            pleaseEnterAValidNumber: 'Please enter a valid number',
            unsavedChanges: 'Are you sure you want to leave this page? Unsaved changes will be lost',
            delete: 'Are you sure you want to delete this campaign and all pipelines and events that it has distributed?',
            descriptionRequired: 'DESCRIPTION is required.',
            nameRequired: 'NAME1 is required.',
        };
    }
}

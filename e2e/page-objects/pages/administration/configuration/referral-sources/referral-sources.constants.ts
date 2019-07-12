export class ReferralSourcesConstant {

    static get elementNames() {
        return {
            pageTitle: 'Manage Referral Sources',
            resourceOneFrame: 'ResourceOne IFrame',
            reportFrame: 'ctl03ReportFrame',
            title: 'Title',
            save: 'Save',
            cancel: 'Cancel',
            ok: 'OK',
            test: 'Test',
            search: 'Search',
            select: 'Select',
            status: 'Status',
            text: 'text',
            nextPage: 'Next Page',
            page: 'Page',
            greater: '>',
            addReferralSource: 'Add Referral Source',
            referralSource: 'Referral Source',
            asterisk: 'Asterisk',
            close: 'Close',
            refresh: 'Refresh',
            exportToExcel: 'Export to Excel',
            exportToWord: 'Export to Word',
        };
    }

    static get ids() {
        return {
            resourceOneFrame: 'ResourceOneIFrame',
            dialogId: 'ui-id',
            addReferralSource: 'PageAddReferralSources',
            nameInput: 'MainContentHolder',
            ps: 'ps',
            refresh: 'PagegridResetButton',
            exportToExcel: 'ExportToExcel',
            exportToWord: 'ExportToWord',
        };
    }

    static get classes() {
        return {
            dialogTitle: 'ui-dialog-title',
            contentFrame: 'contentFrame',
            pager: 'GridPager_Aptean',
            itemClass: '_Aptean',
            fieldContainer: 'field-container',
            iconMandatory: 'icon-mandatory',
            closeIcon: 'ui-icon-closethick',
        };
    }

    static get messages() {
        return {
            enterReferralName: 'Please enter a Referral Source name',
        };
    }

    static get statusDropdown() {
        return {
            active: 'Active',
            inactive: 'Inactive',
            option: 'select[id*=ctl00_MainContentHolder][id$=as] option',
        };
    }
}

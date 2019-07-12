export class CaseAreasConstant {

    static get elementNames() {
        return {
            pageTitle: 'Manage Case Areas',
            resourceOneFrame: 'ResourceOne IFrame',
            title: 'Title',
            description: 'Description',
            category: 'category',
            save: 'Save',
            cancel: 'Cancel',
            ok: 'OK',
            test: 'Test',
            search: 'Search',
            select: 'Select',
            addCategory: 'Add Category',
            addSubcategory: 'Add Subcategory',
            newCategory: 'New Category',
            newSubcategory: 'New SubCategory',
            status: 'Status',
            text: 'text',
            subcategory: 'Subcategory',
            defaultQueue: 'Default Queue',
            private: 'private',
            reminder: 'Reminder',
            nextPage: 'Next Page',
            page: 'Page',
            greater: '>',
        };
    }

    static get ids() {
        return {
            resourceOneFrame: 'ResourceOneIFrame',
            dialogId: 'ui-id',
            addCategory: 'PageAdd Category',
            addSubcategory: 'PageAdd Subcategory',
            categoryInput: 'ctl00_MainContentHolder',
            status: 'ctl00_MainContentHolder',
            cs: 'cs',
            as: 'as',
            qu: 'qu',
            pub: 'pub',
            rm: 'rm',
            ps: 'ps',
        };
    }

    static get classes() {
        return {
            dialogTitle: 'ui-dialog-title',
            uiButton: 'ui-button',
            contentFrame: 'contentFrame',
            pager: 'GridPager_Aptean',
            itemClass: '_Aptean',
        };
    }

    static get statusDropdown() {
        return {
            active: 'Active',
            inactive: 'Inactive',
            option: 'select[id*=ctl00_MainContentHolder][id$=as] option',
        };
    }

    static get messages() {
        return {
            enterName: 'Please enter a Category name',
            enterSubcategoryName: 'Please enter a SubCategory name',
        };
    }

    static get queueDropdown() {
        return {
            fraudAlert: 'Fraud Alert',
            serviceCenterQueue: 'Service Center Queue',
            emailNotification: 'Case Queue For Email Notification',
        };
    }

    static get privateDropdown() {
        return {
            no: 'No',
            yes: 'Yes',
        };
    }
}

export class TicketCategoriesConstant {

    static get elementNames() {
        return {
            pageTitle: 'Manage Ticket Categories',
            title: 'Title',
            description: 'Description',
            category: 'category',
            save: 'Save',
            cancel: 'Cancel',
            ok: 'OK',
            test: 'Test',
            addTicketCategory: 'Add Ticket Category',
            resourceOneFrame: 'ResourceOne IFrame',
            ticketCategory: 'Ticket Category',
            status: 'Status',
            parent: 'Parent',
            deleteSelectedTicket: 'Delete Selected Ticket Category',
            disabled: 'disabled',
            deleteCategory: 'Delete Category',
            search: 'Search',
            selectCategory: 'Select Category',
            select: 'Select',
            expand: 'Expand',
        };
    }

    static get ids() {
        return {
            resourceOneFrame: 'ResourceOneIFrame',
            dialogId: 'ui-id-1',
            txtTitle: 'txtTitle',
            txtDescription: 'txtDescription',
            ddlStatus: 'ddlstatus',
            ddlParentRoot: 'ddlParentRoot',
            searchCategory: 'selectbutton',
            title: 'ui-id-3',
            selectCategory: 'btnSelect',
            txtCategoryName: 'txtCategoryName',
            categorySelector: 'categoryselector_control',
        };
    }

    static get classes() {
        return {
            dialogTitle: 'ui-dialog-title',
            rtIn: 'rtIn',
            contentFrame: 'contentFrame',
            itemClass: '_Aptean',
        };
    }

    static get statusDropdown() {
        return {
            active: 'Active',
            inactive: 'Inactive',
            option: 'select[id*=ddlstatus] option',
        };
    }

    static get parentDropdown() {
        return {
            rootCategory: 'Root Category',
            subCategory: 'Sub Category',
            option: 'select[id*=ddlParentRoot] option',
        };
    }

    static get messages() {
        return {
            enterName: 'Name cannot be empty',
        };
    }
}

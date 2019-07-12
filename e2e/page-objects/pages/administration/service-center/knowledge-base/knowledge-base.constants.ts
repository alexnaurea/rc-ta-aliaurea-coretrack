export class KnowledgeBaseConstant {

    static get elementNames() {
        return {
            pageTitle: 'Manage Knowledge Base',
            addKnowledgeBase: 'Add Knowledge Base',
            resourceOneFrame: 'ResourceOne IFrame',
            knowledgeBaseArticle: 'Knowledge Base Article',
            title: 'Title',
            description: 'Description',
            keywords: 'Keywords',
            category: 'category',
            statusCtl: 'ctl20',
            status: 'Status',
            active: 'Active',
            activeCtl: 'ctl21',
            richEditorFrame: 'Rich Editor iFrame',
            editorArea: 'Editor area',
            save: 'Save',
            cancel: 'Cancel',
            ok: 'OK',
            test: 'Test',
            search: 'Search',
            select: 'Select',
            plus: 'Plus',
            treeChild: 'Tree Child',
            selectCategory: 'Select Category',
            clear: 'Clear',
            created: 'Created',
            clickToSort: 'Click here to sort',
            asc: 'Asc',
            desc: 'Desc',
        };
    }

    static get ids() {
        return {
            resourceOneFrame: 'ResourceOneIFrame',
            dialogId: 'ui-id-1',
            richEditorFrame: 'PageqnEditor_contentIframe',
            categorySelector: 'categoryselector_control',
            searchCategory: 'selectbutton',
            selectCategory: 'btnSelect',
            treeCategory: 'treeCategoryList_t',
            treeChild: 'GtreeCategoryList_t',
            txtCategoryName: 'txtCategoryName',
            clearButton: 'clearbutton',
        };
    }

    static get classes() {
        return {
            dialogTitle: 'ui-dialog-title',
            uiButton: 'ui-button',
            contentFrame: 'contentFrame',
            itemClass: '_Aptean',
        };
    }

    static get statusDropdown() {
        return {
            pending: 'Pending',
            approved: 'Approved',
            option: 'select[name*=ctl20] option',
        };
    }

    static get activeDropdown() {
        return {
            inactive: 'Inactive',
            active: 'Active',
            option: 'select[name*=ctl21] option',
        };
    }

    static get messages() {
        return {
            enterTitle: 'Please enter a Title',
            enterDescription: 'Please enter a Description',
            enterCategory: 'Please select a Category',
        };
    }
}

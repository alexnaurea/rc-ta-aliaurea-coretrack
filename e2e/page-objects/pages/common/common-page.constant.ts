export class CommonPageConstant {
    static readonly one = '1';

    static get attributes() {
        return {
            labels: {
                isRequired: 'is required.',
                mainContentHolder: 'Main Content Holder',
                contentFrame: 'Content frame',
                editorFrame: 'Editor frame',
            },
            classes: {
                contentFrame: 'contentFrame',
                iframeStyle: 'iframeStyle',
                xComponentDefault: 'x-component-default',
                btnIcon: 'x-btn-icon-el',
                btnIconDefaultSmall: 'x-btn-icon-el-default-small',
                faSearch: 'fa-search',
                xFormItemBody: 'x-form-item-body',
                xFormItemBodyDefault: 'x-form-item-body-default',
                searchbarButton: 'searchbar-button',
                searchbarTypebutton: 'a-searchbar-typebutton',
                menuItemText: 'x-menu-item-text',
                formEmptyFieldDefault: 'x-form-empty-field-default',
                formText: 'x-form-text',
                formField: 'x-form-field',
                formTextDefault: 'x-form-text-default',
            },
            id: {
                insideFrame: 'insideFrame',
                noteFramesFrame: 'noteframes_frame',
                eventFramesFrame: 'eventframes_frame',
                taskFramesFrame: 'taskframes_frame',
                tasksFramesFrame: 'tasksframes_frame',
                attachmentFramesFrame: 'attachmentframes_frame',
                component: 'component',
                resourceOneIFrame: 'ResourceOneIFrame',
                mainContentHolder: 'ctl01_MainContentHolder_ctl01_myBody_ctl00_detailsInfo_txtDescription_ctl00_txtDescription_control_contentIframe',
            },
            src: {
                attendeeEditor: 'AttendeeEditor',
            },
            title: {
                richTextEditor: 'Rich text editor',
            },
        };
    }

    static get names() {
        return {
            globalSearchButton: 'Global search button',
            globalTextField: 'Global text field',
            globalDropdown: 'Global dropdown',
            contact: 'Contacts',
            attachmentFrame: 'Attachments frame',
        };
    }

    static readonly testData = Object.freeze({
        alecBaldwin: 'Alec Baldwin',
        manpasandBeveragesLtd: 'Manpasand Beverages Ltd',
    });
}

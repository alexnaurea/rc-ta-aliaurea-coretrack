export class NewOpportunityPageConstant {

    static get elementNames() {
        return {
            newOpportunity: 'New Opportunity',
            verifyContactLeads: 'Verify Contact Leads',
            returnToNew: 'Return to New',
            contact: 'Contact',
            product: 'Product',
            owner: 'Owner',
            referrer: 'Referrer',
            quickNotes: 'Quick Notes',
            referrerBranch: 'Referrer Branch',
            created: 'Created',
            forecast: 'Forecast',
            fundsSource: 'Funds Source',
            referralSource: 'Referral Source',
            referringContact: 'Referring Contact',
            salesStage: 'Sales Stage',
            probability: 'Probability',
            conditional: 'Conditional',
            save: 'Save',
            saveAndAdd: 'Save and Add',
            close: 'Close',
            searchIcon: 'Search icon',
            warning: 'Warning',
            requiredFieldMessage: 'Required field message',
            recommendationIcon: 'Recomendation icon',
            recommendationCloseIcon: 'Recomendation Close icon',
            subject: 'Subject',
            selectMe: 'Select Me',
            gen: 'Gen',
            productType: 'Product type',
            opportunity: 'Opportunity',
            selectAProduct: 'Select a product',
        };
    }

    static get attributes() {
        return {
            classes: {
                uiDialogTitle: 'ui-dialog-title',
                entityButton: 'entity-button',
                uiDialogTitlebar: 'ui-dialog-titlebar',
                uiWidgetHeader: 'ui-widget-header',
            },
            id: {
                activityDetailsContactSelectButton: 'activitydetails_contactselectbutton',
                activityDetailsControl: 'activitydetails_control',
            },
        };
    }

    static get testData() {
        return {
            companyA: 'a',
            companyName: 'ABC Company',
            validateP1: 'Validate-p1',
            criteriaB: 'b',
        };
    }

    static get errorMessages() {
        return {
            noOwnerIsSelected: 'No owner is selected.',
            NoProductIsSelected: 'No product is selected.',
        };
    }

    static get user() {
        return {
            admin: 'Admin',
        };
    }
}

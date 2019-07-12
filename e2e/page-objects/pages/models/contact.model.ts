import { Constants } from '../../../components/misc-utils/constants';
import { NewCasePageConstant } from '../new-case-page/new-case-page.constants';

const { daron, allen, aurea } = NewCasePageConstant.elementNames;

export class ContactSelector {
    firstName: string;
    lastName: string;
    company: string;
    return: Return;
    prospect: Prospect;

    static buildContact(isCommercially: boolean = false) {
        const contactSelector = new ContactSelector();
        contactSelector.firstName = daron;
        contactSelector.lastName = allen;
        if (isCommercially) {
            contactSelector.company = aurea;
            contactSelector.return = Return.commercial;
            contactSelector.prospect = Prospect.newCommercialProspect;
        } else {
            contactSelector.company = Constants.EMPTY_STRING;
            contactSelector.return = Return.retail;
            contactSelector.prospect = Prospect.newRetailProspect;
        }
        return contactSelector;
    }
}

export enum Return {
    all = 'All',
    retail = 'Retail',
    commercial = 'Commercial',
}

export enum Prospect {
    newRetailProspect = 'New Retail Prospect',
    newCommercialProspect = 'New Commercial Prospect',
}

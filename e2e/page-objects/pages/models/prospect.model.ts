import moment = require('moment');

import { NewCasePageConstant } from '../new-case-page/new-case-page.constants';

const { daron, allen } = NewCasePageConstant.elementNames;

export class Prospect {

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    firstName: string;
    lastName: string;
    middle?: string;
    company?: string;
    title?: string;
    homePhone?: string;
    email1?: string;
    email2?: string;
    workPhone?: string;
    mobile?: string;
    pager?: string;
    fax?: string;
    communicationPreference?: string;
    doNotContactInMarketingCampaigns: boolean;
    syncToOutlook: boolean;
    address?: string;
    addressCont?: string;
    city?: string;
    regO?: string;
    state?: string;
    country?: string;
    zip?: string;
    dob?: moment.Moment;
    ssn?: string;
    driversLicense?: string;
    ddlState?: string;
    ddlExpires?: moment.Moment;

    static buildProspect() {
        return new Prospect(daron, allen);
    }
}

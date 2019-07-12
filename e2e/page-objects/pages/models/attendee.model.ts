import { Constants } from '../../../components/misc-utils/constants';
import { KnowledgeBaseConstant } from '../administration/service-center/knowledge-base/knowledge-base.constants';

import { DropdownField } from './dropdown-field';

const { test } = KnowledgeBaseConstant.elementNames;

export class Attendee {

    constructor(public firstName: string, public lastName: string) {

    }

    type: DropdownField;
    branch: DropdownField;
    department: DropdownField;
    role: DropdownField;

    static buildAttendee() {
        return new Attendee(test, Constants.EMPTY_STRING);
    }

    /**
     * Add more attendees here according to your need
     */
}

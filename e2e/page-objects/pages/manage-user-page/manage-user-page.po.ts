import { by } from 'protractor';

import { $ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';

import { ManageUserPageConstant } from './manage-user-page.constants';

const { elementNames: eNames, attributes: { classes, placeHolder }, leftPanel } = ManageUserPageConstant;
const { tags } = HtmlHelper;

export class ManageUserPage {

    static get header() {
        return {
            title: $(by.css(`${tags.label}${classes.title}`),
                eNames.manageUser),
            userPageTitle: $(by.cssContainingText(tags.h1, eNames.user), eNames.user),
        };
    }

    static get leftPanel() {
        return {
            permissions: $(by.cssContainingText(`${tags.div}.${classes.tabStrip} ${tags.li} ${tags.span}.${classes.tab}`,
                leftPanel.permissions), leftPanel.permissions),
            permissionsTitle: $(by.cssContainingText(`${tags.h2}.${classes.subSection}`,
                leftPanel.permissions), leftPanel.permissions),
        };
    }

    static get searchTextBox() {
        return $(by.css(`input[Placeholder="${placeHolder.search}"]`),
            placeHolder.search);
    }

    static get userList() {
        return $(by.css(`.MasterTable_Aptean[class*="${classes.usersList}"] .GridRow_Aptean`),
            eNames.usersList);
    }

    static userIcon(name: string) {
        const parentTr = '//parent::td //parent::tr';
        return $(by.xpath(`//nobr[contains(text(),"${name}")] ${parentTr} //span[@class="icon-user"]`),
            eNames.usersIcon);
    }

    static get searchButton() {
        return $(by.css('[id*="btnRunSearch"]'),
            placeHolder.search);
    }
}

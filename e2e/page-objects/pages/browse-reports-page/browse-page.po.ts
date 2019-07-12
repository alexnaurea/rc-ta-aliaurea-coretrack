import { by, element } from 'protractor';

import { $, $$ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { CommonPage } from '../common/common.po';

import { BrowsePageConstant } from './browse-page.constants';

const { elementNames: eNames, attributes: { classes, name, value, id, alt } } = BrowsePageConstant;
const { tags } = HtmlHelper;

export class BrowsePage {

    static get header() {
        return {
            title: $(by.css(`${tags.label}${classes.title}`), eNames.browse),
            userDialogTitle: $(by.css(`${tags.span}${classes.userDialogTitle}`), eNames.selectUser),
            userDialogTitleElm: element(by.css(`${tags.span}${classes.userDialogTitle}`)),
            compensationInfoTitle: CommonPage.getFirstElementByText(HtmlHelper.tags.div, name.compensationInfo,
                name.compensationInfo),
        };
    }

    static compensationInfoReport() {
        const parentTr = '//parent::td //parent::tr';
        return $(by.xpath(`//nobr[contains(text(),"${name.compensationInfo}")] ${parentTr} //a`),
            name.compensationInfo);
    }

    static get buttons() {
        return {
            runReport: $(by.css(`[value="${value.runReport}"]`),
                value.runReport),
            runInBackground: $(by.css(`[value="${value.runInBackground}"]`),
                value.runInBackground),
        };
    }

    static get lostReportItems() {
        return {
            search: $(by.css(`${tags.span}${BrowsePageConstant.lostReportItems.search}`), eNames.search),
            searchButton: $(by.css('[name="btnShowReps"]'), eNames.search),
            selectButton: $(by.css('[name="btnSelect"]'), eNames.select),
        };
    }

    static get typeDropDown() {
        return {
            main: $(by.css('select[id*="status"]'), BrowsePageConstant.lostReportItems.type),
            lostLeadByOwner: $(by.css('[value="Lost Lead By Owner"]'), BrowsePageConstant.typeItems.lostLeadByOwner),
            lostAccountByOwner: $(by.css('[value="Lost Account By Owner"]'), BrowsePageConstant.typeItems.lostAccountByOwner),
            lostLeadByReferrer: $(by.css('[value="Lost Lead By Referrer"]'), BrowsePageConstant.typeItems.lostLeadByReferrer),
            lostAccountByReferrer: $(by.css('[value="Lost Account By Referrer"]'), BrowsePageConstant.typeItems.lostAccountByReferrer),
        };
    }

    static get selectedUser() {
        return $(by.css('.comselDspTxt div'), eNames.selectUser);
    }

    static get runReportButton() {
        const item = BrowsePageConstant.lostReportItems.runReport;
        return $(by.css(`[value="${item}"]`), item);
    }

    static get signOff() {
        return $(by.css(`[id*="${classes.menu}"].x-box-item`), eNames.signOff);
    }

    static get lostReport() {
        const parentTr = '//parent::td //parent::tr';
        return $(by.xpath(`.//*[contains(text(),"${name.lost}")] ${parentTr} //span[@class="${classes.reportIcon}"]`), name.lost);
    }

    static get reportHeading() {
        return CommonPage.getElementByText(eNames.report, eNames.report);
    }

    static get categoryHeading() {
        return CommonPage.getElementByText(eNames.category, eNames.category);
    }

    static get categoryDropdown() {
        return $(by.css('div.mainview-action-container select.viewDDLMenu'), eNames.category);
    }

    static userCheckbox(user: string) {
        const parentTr = '//parent::td //parent::tr';
        return $(by.xpath(`.//*[text()="${user}"] ${parentTr} //*[contains(@id,"columnSelectCheckBox")]`), eNames.userCheckBox);
    }

    static get lostForm() {
        return $(by.xpath(`.//*[@class="sub-section"] //*[text()="${name.lost}"]`), name.lost);
    }

    static get userList() {
        return $(by.id(id.userList), eNames.userList);
    }

    static get ascendingAndDescending() {
        return {
            ascending: $(by.css(`[alt="${alt.ascending}"]`),
                alt.ascending),
            descending: $(by.css(`[alt="${alt.descending}"]`),
                alt.descending),
        };
    }

    static getLinkText(text: string) {
        return $$(by.css(`a[title='${text}']`), text);
    }

    static get getGroupText() {
        return $(by.cssContainingText(tags.div, eNames.groupText), eNames.groupText);
    }

    static get browseControl() {
        return {
            refresh: $(by.css('span.icon-refresh'), eNames.refresh),
            excel: $(by.css('span.fa.fa-file-excel-o'), eNames.excel),
            word: $(by.css('span.fa.fa-file-word-o'), eNames.word),
            collapseGroup: $(by.css(`[alt="${eNames.collapseGroup}"]`), eNames.collapseGroup),
            expandGroup: $(by.css(`[alt="${eNames.expandGroup}"]`), eNames.expandGroup),
        };
    }
}

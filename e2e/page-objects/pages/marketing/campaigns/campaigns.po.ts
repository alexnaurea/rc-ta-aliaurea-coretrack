import { by } from 'protractor';

import { Constants } from '../../../../components/misc-utils/constants';
import { $, $$, $cssContainingText } from '../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';
import { xpath } from '../../../../components/misc-utils/xpath-builder';
import { CommonPage } from '../../common/common.po';

import { CampaignsConstant } from './campaigns.constants';

const title = CampaignsConstant.titles;
const tag = HtmlHelper.tags;
const names = CampaignsConstant.elementNames;
const messages = CampaignsConstant.messages;
const attr = CampaignsConstant.attributes;
const column = CampaignsConstant.elementNames.marketingColumns;
const { id, class: klass } = HtmlHelper.attributes;
const { additionalAttributes, tags } = HtmlHelper;

export class CampaignsPage {

    static get titles() {
        return {
            marketingCampaigns: $(by.cssContainingText(tag.label, title.marketingCampaigns), title.marketingCampaigns),
            newCampaign: $(by.cssContainingText(tag.h1, title.newCampaign), title.newCampaign),
            campaign: $(by.cssContainingText(tag.h1, title.campaign), title.campaign),
            warning: $(by.cssContainingText(tag.span, title.warning), title.warning),
            history: $(by.cssContainingText(tag.span, names.history), names.history),
            deleteConfirmation: $(by.cssContainingText(tag.span, title.deleteConfirmation), title.deleteConfirmation),
        };
    }

    static get elements() {
        return {
            refreshButton: $(by.css(`${tag.span}.${attr.class.iconRefresh}`), names.refresh),
            groupingDropdown: $(by.id(attr.id.menuHolderPageGroupingSelector), names.grouping),
            firstGroupingIcon(groupingOption: string) {
                return $(xpath(tag.div)
                    .textContains(groupingOption)
                    .parent(tag.div)
                    .parent(tag.div)
                    .parent(tag.td)
                    .precendingSibling(tag.td)
                    .descendant(tag.input)
                    .nthChild(Constants.number.one)
                    .buildByObject(), groupingOption);
            },
            marketingColumns: {
                campaign: $(by.cssContainingText(tag.a, column.campaign), column.campaign),
                type: $(by.cssContainingText(tag.a, column.type), column.type),
                owner: $(by.cssContainingText(tag.a, column.owner), column.owner),
                created: $(by.cssContainingText(tag.a, column.created), column.created),
                active: $(by.cssContainingText(tag.a, column.active), column.active),
                queue: $(by.cssContainingText(tag.a, column.queue), column.queue),
                queueBranch: $(by.cssContainingText(tag.a, column.queueBranch), column.queueBranch),
                submitter: $(by.cssContainingText(tag.a, column.submitter), column.submitter),
                category: $(by.cssContainingText(tag.a, column.category), column.category),
                subCategory: $(by.cssContainingText(tag.a, column.subCategory), column.subCategory),
            },
            columnIcon(colunmName: string) {
                return {
                    sortAsc: $(xpath(tag.a)
                        .textContains(colunmName)
                        .followingSibling(tag.input)
                        .where('alt', names.sortedAsc)
                        .buildByObject(), names.sortedAsc),
                    sortDesc: $(xpath(tag.a)
                        .textContains(colunmName)
                        .followingSibling(tag.input)
                        .where('alt', names.sortedDesc)
                        .buildByObject(), names.sortedDesc),
                };
            },
            unsavedChanges: $(by.cssContainingText(tags.label, messages.unsavedChanges), messages.unsavedChanges),
            addCampaign: $(by.css(`.${attr.class.iconAdd}`), names.addCampaign),
            nameOne: $(by.id(attr.id.detailsInfoCampaignName), names.nameOne),
            type: $(by.id(attr.id.detailsInfoListTypeControl), names.type),
            cost: $(by.id(attr.id.detailsInfoCampaignCostControl), names.cost),
            description: $(xpath(tag.link)
                .where('id', attr.id.radEditorStylesheetOne)
                .parent(tag.head)
                .followingSibling(tag.body)
                .buildByObject(), names.description),
            labelMandatoryFieldIcon(labelText: string) {
                return $(xpath(tag.label)
                    .textContains(labelText)
                    .parent(tag.div)
                    .descendant(tag.span)
                    .where('class', attr.class.iconMandatory)
                    .buildByObject(), labelText);
            },
            saveButton: $(by.css(`${tag.a}[title="${names.save}"]`), names.save),
            closeButton: $(by.className(attr.class.iconClose), names.close),
            lauchedOn: $(by.id(attr.id.campaignDistributionControlTxtDistributedDate),
                names.lauchedOn),
            launchButton: $(by.id(attr.id.campaignDistributionControlBtnLaunch),
                names.launchButton),
            totalNumberOfActivitiesContactsTargetedInThisCampaign:
                $(by.id(attr.id.campaignDistributionControlTxtCountContacts),
                    names.totalNumberOfActivitiesContactsTargetedInThisCampaign),
            numberOfUsersIncludedInCampaign:
                $(by.id(attr.id.campaignDistributionControlTxtCountUsers),
                    names.numberOfUsersIncludedInCampaign),
            numberOfPipelinesIncludedInCampaign:
                $(by.id(attr.id.campaignDistributionDontrolTxtCountPipelines),
                    names.numberOfPipelinesIncludedInCampaign),
            numberOfEventsIncludedInCampaign:
                $(by.id(attr.id.campaignDistributionControlTxtCountEvents),
                    names.numberOfEventsIncludedInCampaign),
            distributePipelinesAndEventsToUsersOrQueues:
                $(by.id(attr.id.campaignDistributionControlDdlDistributionMethod),
                    names.distributePipelinesAndEventsToUsersOrQueues),
            numberOfProductsRecommendedInThisCampaign:
                $(by.id(attr.id.campaignDistributionControlTxtCountProducts),
                    names.numberOfProductsRecommendedInThisCampaign),
            showRecommendedProductsToAllUsersOrOnlyToDistributionList:
                $(by.id(attr.id.campaignDistributioncontrolDdlPopupDistribution),
                    names.showRecommendedProductsToAllUsersOrOnlyToDistributionList),
            isCampaignCurrentlyActive:
                $(by.id(attr.id.campaignDistributionControlDdlActive),
                    names.isCampaignCurrentlyActive),
            refreshDistributionListAutomatically:
                $(by.id(attr.id.campaignDistributionControlDdlRefreshRate),
                    names.refreshDistributionListAutomatically),
            refreshUsing:
                $(by.id(attr.id.campaignDistributionControlDdlMarketingList),
                    names.launchButton),
            warningPopupOkButton: $(by.css(
                `div.${attr.class.uiDialogButtonPane} div button:nth-child(${Constants.number.one})`)
                , names.ok),
            tabs: {
                overview: $(by.cssContainingText(tag.span, names.overview), names.overview),
                distribution: $(by.cssContainingText(tag.span, names.distribution), names.distribution),
                campaignItems: $(by.cssContainingText(tag.span, names.campaignItems), names.campaignItems),
                notes: $(by.cssContainingText(tag.span, names.notes), names.notes),
                attachments: $(by.cssContainingText(tag.span, names.attachments), names.attachments),
                campaignStats: $(by.cssContainingText(tag.span, names.campaignStats), names.campaignStats),
                attachmentsNew: $(xpath()
                    .contains(id, attr.id.page3Tab)
                    .anywhere(tag.span)
                    .contains(klass, attr.class.innerWrap)
                    .text(names.attachments)
                    .buildByObject(), names.attachments),
            },
            groupingIcon: $(xpath(tag.div)
                .parent(tag.div)
                .parent(tag.div)
                .parent(tag.td)
                .precendingSibling(tag.td)
                .descendant(tag.input)
                .buildByObject(), names.groupingIcon),
            pagination: {
                pageNumberLink(pageNumber: number) {
                    return $(xpath(tag.tr)
                        .where('class', attr.class.gridPagerAptean)
                        .descendant(tag.td)
                        .descendant(tag.b)
                        .descendant(tag.a)
                        .textContains(pageNumber.toString())
                        .buildByObject(), names.page + ' ' + pageNumber);
                },
                currentPage: $(by.css(`tr.${attr.class.gridPagerAptean} td`), names.currentPage),
                nextPage: $(xpath(tag.tr)
                    .where('class', attr.class.gridPagerAptean)
                    .descendant(tag.td)
                    .descendant(tag.b)
                    .descendant(tag.a)
                    .textContains(names.nextPageSign)
                    .buildByObject(), names.nextPage),
                previousPage: $(xpath(tag.tr)
                    .where('class', attr.class.gridPagerAptean)
                    .descendant(tag.td)
                    .descendant(tag.b)
                    .descendant(tag.a)
                    .textContains(names.previousPageSign)
                    .buildByObject(), names.previousPage),
            },
            firstIconCampaing: $(xpath(tag.span)
                .where('class', attr.class.iconCampaign)
                .nthChild(Constants.number.two)
                .buildByObject(), names.campaignIcon),
            getTabByName(name: string) {
                return $(xpath(tag.a)
                    .contains('id', '_tab')
                    .descendant(tag.span)
                    .descendant(tag.span)
                    .textContains(name)
                    .buildByObject(), name);
            },
            warningPopupCancelButton: $(by.css(
                `div.${attr.class.uiDialogButtonPane} div button:nth-child(${Constants.number.two})`)
                , names.cancel),
            threeDotsFloatingMenu: $(by.css(`.${attr.class.horizontal}.${attr.class.rootGroup} .${attr.class.slide}`),
                names.threeDotsFloatingmenu),
            threeDotsFloatingMenuOptionByText(text: string) {
                return $(xpath(tags.div).where('class', attr.class.slide)
                    .descendant(tags.ul)
                    .descendant(tags.li)
                    .descendant(tags.a)
                    .descendant(tags.span)
                    .textContains(text)
                    .buildByObject(), text);
            },
            firstRecordFromTheGridValues: {
                active: $(xpath(tag.td)
                    .where('class', attr.class.gridCheckBox)
                    .nthChild(Constants.number.one)
                    .buildByObject(), names.activeColumnValue),
            },
            typeField: $(by.id(attr.id.list_type_control), names.type),
            firstCampaignName: $(xpath(tag.td)
                .descendant(tag.nobr)
                .nthChild(Constants.number.one)
                .buildByObject(), names.name),
            closeButtonFromMessagePopup: $(by.css(`.${attr.class.closethick}`), names.close),
            getCampaignByName(name: string) {
                return $(xpath(tag.td)
                    .descendant(tag.nobr)
                    .text(name)
                    .buildByObject(), name);
            },
        };
    }

    static get attachments() {
        return {
            addAttachment: CommonPage.getElementByIdEndsWith(attr.id.addAttachmentButton,
                names.addAttachments),
            editButtons: $$(by.className(attr.class.iconEdit),
                names.addAttachments),
            newAttachment: {
                title: $cssContainingText(`.${attr.class.uiDialogTitle}`,
                    names.newAttachment),
            },
            editAttachment: {
                title: $cssContainingText(`.${attr.class.headerContainer} ${tag.h1}`,
                    names.attachments.slice(0, -1)),
                threeDots: CommonPage.getElementByIdEndsWith(attr.id.mainMenuM0,
                    names.threeDots),
                history: CommonPage.getElementByIdEndsWith(attr.id.mainMenuM0M0,
                    names.history),
            },
        };
    }

    static get campaignData() {
        return {
            threeDots: $(by.css(`${attr.class.threeDots}`), names.threeDots),
            threeDotsExpanded: $(by.css(`${attr.class.threeDots}.expanded`), names.threeDotsExpand),
            history: CommonPage.getElementByText(attr.name.history,
                names.history),
            delete: CommonPage.getElementByText(attr.name.delete,
                names.delete),
            deleteMessage: $(by.cssContainingText(tags.p, messages.delete), messages.delete),
            name1: $(by.xpath(`.//*[@class="field-label"]//*[text()="${attr.name.name1}"]`), names.name),
            ok: $(by.xpath(`.//*[@id="${attr.id.confirmationDialog}"]//parent::div //*[text()="${attr.name.ok}"]`), names.ok),
            cancel: $(by.xpath(`.//*[@id="${attr.id.confirmationDialog}"]//parent::div //*[text()="${attr.name.cancel}"]`), names.cancel),
        };
    }

    static get history() {
        return {
            title: $cssContainingText(`.${attr.class.uiDialogTitle}`,
                names.history),
            logDropDown: $(by.css(`${attr.class.logDropDown}`), names.logDropDown),
            logReadView: $(by.cssContainingText(tags.option, names.readView), names.readView),
            logListView: $(by.cssContainingText(tags.option, names.listView), names.listView),
            date: $(by.cssContainingText(tags.a, names.date), names.date),
            user: $(by.cssContainingText(tags.a, names.user), names.user),
            description1: $(by.cssContainingText(tags.a, names.description1), names.description1),
            entry: $(by.cssContainingText(tags.a, names.entry), names.entry),
            logReadViewSelected: $(by.xpath(`.//*[text()="${names.readView}" and @selected]`), names.readView),
            columnListView: $(by.css('.RadGrid_Aptean.full-height-grid'), names.infoTable),
            logListViewSelected: $(by.xpath(`.//*[text()="${names.listView}" and @selected]`), names.listView),
            details: {
                detailsTab: $cssContainingText(`[id$='${attr.id.mainContentHolderTabStrip}'] .${attr.class.innerWrap}`,
                    names.details),
                viewDropdown: CommonPage.getElementByIdEndsWith(attr.id.gridView,
                    names.viewDropdown),
                viewDropdownTd: $(xpath(tag.select)
                    .contains(id, attr.id.gridView)
                    .ancestor(tag.td)
                    .where(additionalAttributes.vAlign)
                    .buildByObject(),
                    names.viewDropdown),
            },
        };
    }

    static getCampaignFromTheListByName(name: string) {
        return $(by.cssContainingText(tag.nobr, name), name);
    }

    static getFirstCampaignLogo() {
        return $(by.xpath(`(.//*[@class="${attr.class.columnIcon}"] //*[@class="${attr.class.iconCampaign}"])[1]`)
            , names.campaignLogo);
    }

    static getValidationMessage(messageText: string) {
        return $(by.cssContainingText(tag.span,
            messageText),
            messageText);
    }

    static get profileCheckBox() {
        return $(by.id('ctl00_MainContentHolder_ctl24'), names.viewDropdown);
    }

    static get relationshipCheckBox() {
        return $(by.id('ctl00_MainContentHolder_ctl26'), names.campaignStats);
    }

    static get relatedContactsCheckBox() {
        return $(by.id('ctl00_MainContentHolder_ctl39'), names.details);
    }

    static get householdsCheckBox() {
        return $(by.id('ctl00_MainContentHolder_ctl46'), names.history);
    }

    static get caseCheckBox() {
        return $(by.id('ctl00_MainContentHolder_ctl48'), names.campaignStats);
    }

    static get eventCheckBox() {
        return $(by.id('ctl00_MainContentHolder_ctl52'), names.distributePipelinesAndEventsToUsersOrQueues);
    }

    static get taskCheckBox() {
        return $(by.id('ctl00_MainContentHolder_ctl54'), names.details);
    }

    static get attachmentsCheckBox() {
        return $(by.id('ctl00_MainContentHolder_ctl56'), names.attachments);
    }

    static get noteCheckBox() {
        return $(by.id('ctl00_MainContentHolder_ctl50'), names.notes);
    }
}

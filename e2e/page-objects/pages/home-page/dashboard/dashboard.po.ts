import { by } from 'protractor';

import { Constants } from '../../../../components/misc-utils/constants';
import { $, $$ } from '../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';
import { xpath } from '../../../../components/misc-utils/xpath-builder';

import { DashboardPageConstant } from './dashboard.constants';

const { elementNames: eNames, classes, ids, roles } = DashboardPageConstant;
const { attributes, tags } = HtmlHelper;

export class DashboardPage {
    static get buttons() {
        return {
            arrowIcon: $(xpath(tags.div)
                .contains(attributes.class, classes.dashboardbar)
                .anywhere(tags.span)
                .contains(attributes.id, ids.btnWrap)
                .where(eNames.dataRef, ids.btnWrap)
                .first()
                .buildByObject(), eNames.presentation),
            addWidget: $(by.cssContainingText(`.${classes.basewidgetDragPlaceholder}`, eNames.addWidget), eNames.addWidget),
            plusIcon: $(xpath(tags.div)
                .contains(attributes.class, classes.dashboardbar)
                .anywhere(tags.span)
                .contains(attributes.id, ids.btnWrap)
                .where(eNames.dataRef, ids.btnWrap)
                .nthChild(Constants.number.three)
                .buildByObject(), eNames.presentation),
        };
    }

    static get dashboard() {
        return {
            menu: $(by.css(`div.${classes.dashboardMenu}[data-ref="${eNames.body}"]`), eNames.dashboard),
            addBtn: $(by.cssContainingText(`${tags.span}.${classes.defaultToolbarSmall}`, eNames.add), eNames.add),
            saveBtn: $(by.cssContainingText(`${tags.span}.${classes.defaultToolbarSmall}`, eNames.save), eNames.save),
            closeBtn: $(by.css(`.${classes.settings} .${classes.closeIcon}`), eNames.closeIcon),
            dashboardName: (name: string) => $(
                by.cssContainingText(`span[id$="${ids.btnInnerEl}"]`, name), name),
            dashboardDropdown: (name: string) => $(
                by.cssContainingText(`span[id$="${ids.textEl}"]`, name), name),
            newDashboard: $(xpath(tags.td)
                .contains(attributes.id, 'ext-element')
                .last()
                .buildByObject(), eNames.newDashboard),
            newDashboardInput: $(by.css(`input[name=${eNames.dashboardName}]`), eNames.newDashboard),
            addWidgetMenu: $(xpath(tags.div)
                .contains(attributes.class, classes.dashboardMenu)
                .where(eNames.dataRef, eNames.body)
                .last()
                .buildByObject(), eNames.addWidget),
            pipeline: $(by.cssContainingText(tags.span, eNames.pipeline), eNames.pipeline),
            pipelineSummaryWidget: $(by.cssContainingText(tags.div, eNames.pipeline), eNames.pipeline),
            queueSummary: $(by.cssContainingText(tags.span, eNames.queueSummary), eNames.queueSummary),
            queueSummaryWidget: $(by.cssContainingText(tags.div, eNames.myPipeline), eNames.myPipeline),
            widgetRefresh: $(by.css(`div.${classes.widgetRefresh}`), eNames.refresh),
            queueColumn: $(by.cssContainingText(`div.${classes.queueHeader} span`, eNames.queue), eNames.queue),
            itemsColumn: $(by.cssContainingText(`div.${classes.queueHeader} span`, eNames.items), eNames.items),
            widgetWheel: $(by.css(`div.${classes.widgetWheel}`), eNames.wheel),
            delete: $(by.css(`span.${classes.garbage}`), eNames.delete),
            deleteWidget: $(by.cssContainingText(`div.${classes.settingPanel}`, eNames.deleteWidget), eNames.deleteWidget),
            activity: $(by.cssContainingText(`div.${classes.entityName}`, eNames.activity), eNames.activity),
            case: $(by.cssContainingText(`div.${classes.entityName}`, eNames.case), eNames.case),
            event: $(by.cssContainingText(`div.${classes.entityName}`, eNames.event), eNames.event),
            task: $(by.cssContainingText(`div.${classes.entityName}`, eNames.task), eNames.task),
            allRecords: $$(by.css(`tr[class$=${classes.rowAptean}]`), eNames.record),
            activityDetails: (name: string) => $(
                by.cssContainingText(`tr.${classes.groupHeader} ${tags.div}`, name), name),
            settingsDialog: $(by.css(`div.${classes.settings}[id^=${ids.queueSummarySettings}]`), eNames.settings),
            okBtn: $(by.css(`span.${classes.iconCheck}`), eNames.ok),
            record:  (name: string) => $(xpath(tags.div)
                .textContains(name)
                .parent(tags.ul)
                .anywhere(tags.li)
                .anywhere(tags.span)
                .first()
                .buildByObject(), eNames.record),
            sectionSelected: $(by.css(`select[id$=${ids.viewSelector}]`), eNames.section),
            collapseSection: (name: string) => $(xpath(tags.div)
                .textContains(name)
                .anywhere(tags.span)
                .first()
                .buildByObject(), eNames.collapse),
            dateRangeArrow: $(by.xpath(`(//div[contains(@class,"${classes.arrow}")])[1]`), eNames.dateRange),
            dateRangeInput: $(by.xpath(`(//input[@role="${roles.combobox}"])[1]`), eNames.dateRange),
            branchInput: $(by.xpath(`(//input[@role="${roles.combobox}"])[2]`), eNames.branch),
            branchArrow: $(by.xpath(`(//div[contains(@class,"${classes.arrow}")])[2]`), eNames.branch),
            scopeInput: $(by.xpath(`(//input[@role="${roles.combobox}"])[3]`), eNames.scope),
            scopeArrow: $(by.xpath(`(//div[contains(@class,"${classes.arrow}")])[3]`), eNames.scope),
            rightArrow: $(by.className(classes.iconNavigateRight), eNames.rightArrow),
            leftArrow: $(by.className(classes.iconNavigateLeft), eNames.leftArrow),
            selectedItem: $(by.className(classes.itemSelected), eNames.selectedItem),
        };
    }

    static get resourceOneIFrame() {
        return $(by.id(ids.resourceOneFrame), eNames.resourceOneFrame);
    }

    static getSettingParam(param: string) {
        return $(by.cssContainingText(`.${classes.pipelineSettings} span.${classes.innerDefault}`, param), param);
    }

    static getElementInDdl(elementName: string) {
        return $(by.cssContainingText(`div.${classes.boundListItem}`, elementName), elementName);
    }
}

import { by } from 'protractor';

import { Constants } from '../../../../../components/misc-utils/constants';
import { $ } from '../../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../../components/misc-utils/html-helper';
import { xpath } from '../../../../../components/misc-utils/xpath-builder';

import { UsersConstants } from './users.constants';

const { elementNames: eNames, leftPanel, classes, ids } = UsersConstants;
const { tags } = HtmlHelper;

export class UsersPage {

    static get applicationStatusPage() {
        return $(by.cssContainingText(tags.label, UsersConstants.pageTitle), UsersConstants.pageTitle);
    }

    static get header() {
        return {
            title: $(by.cssContainingText(tags.h1, eNames.user), eNames.user),
            saveBtn: $(by.css(`a[id$=${ids.saveButton}]`), eNames.save),
        };
    }

    static get leftPanel() {
        return {
            permissions: $(by.cssContainingText(`${tags.div}.${classes.tabStrip} ${tags.li} ${tags.span}.${classes.tab}`,
                leftPanel.permissions), leftPanel.permissions),
            selectedTab: (tab: string) => $(
                by.cssContainingText(`a.${classes.selected} ${tags.span}`, tab), tab),
        };
    }

    static get permissionsTab() {
        return {
            title: $(by.cssContainingText(`${tags.h2}.${classes.subSection}`,
                leftPanel.permissions), leftPanel.permissions),
            dashboard: $(by.cssContainingText(`${tags.span}.${classes.treeNode}`,
                eNames.dashboard), eNames.dashboard),
            queues: $(xpath(tags.span)
                .textContains(eNames.queues)
                .nthChild(Constants.number.two)
                .parent(tags.div)
                .descendant(tags.input)
                .buildByObject(), eNames.queues),
            pipeline: $(xpath(tags.span)
                .textContains(eNames.pipelineBranch)
                .nthChild(Constants.number.two)
                .parent(tags.div)
                .descendant(tags.input)
                .buildByObject(), eNames.pipelineBranch),
            compensation: $(xpath(tags.span)
                .textContains(eNames.compensation)
                .nthChild(Constants.number.two)
                .parent(tags.div)
                .descendant(tags.input)
                .buildByObject(), eNames.compensation),
            branches: $(xpath(tags.span)
                .textContains(eNames.compensation)
                .nthChild(Constants.number.two)
                .parent(tags.div)
                .descendant(tags.input)
                .buildByObject(), eNames.compensation),
            applicationStatus: $(xpath(tags.span)
                .textContains(eNames.compensation)
                .nthChild(Constants.number.two)
                .parent(tags.div)
                .descendant(tags.input)
                .buildByObject(), eNames.compensation),
            customItemTypes: $(xpath(tags.span)
                .textContains(eNames.compensation)
                .nthChild(Constants.number.two)
                .parent(tags.div)
                .descendant(tags.input)
                .buildByObject(), eNames.compensation),
            caseAreas: $(xpath(tags.span)
                .textContains(eNames.caseAreas)
                .nthChild(Constants.number.one)
                .parent(tags.div)
                .descendant(tags.input)
                .buildByObject(), eNames.caseAreas),
            corrections: $(xpath(tags.span)
                .textContains(eNames.corrections)
                .nthChild(Constants.number.one)
                .parent(tags.div)
                .descendant(tags.input)
                .buildByObject(), eNames.corrections),
            customItems: $(xpath(tags.span)
                .textContains(eNames.customItems)
                .nthChild(Constants.number.one)
                .parent(tags.div)
                .descendant(tags.input)
                .buildByObject(), eNames.customItems),
            addInstitution: $(xpath(tags.span)
                .textContains(eNames.addInstitution)
                .nthChild(Constants.number.one)
                .parent(tags.div)
                .descendant(tags.input)
                .buildByObject(), eNames.addInstitution),
        };
    }

    static get userItemElements() {
        return {
            userItem: (userName: string) => $(
                by.cssContainingText(
                    `#${ids.contentCellPadded} ${tags.tBody} ${tags.tr} .${classes.gridRowAptean} ${tags.td} ${tags.nobr}`,
                    userName),
                userName),
        };
    }
}

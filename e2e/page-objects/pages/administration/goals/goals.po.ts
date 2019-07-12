import { by } from 'protractor';

import { $ } from '../../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../../components/misc-utils/html-helper';
import { xpath } from '../../../../components/misc-utils/xpath-builder';
import { ContactPageConstant } from '../../contact-page/contact-page.constants';

import { GoalsConstants } from './goals.constants';

const { tags, attributes } = HtmlHelper;
const { attributes: { classes: contactClasses } } = ContactPageConstant;

export class GoalsPage {

    static get manageGoalsPage() {
        const pageTitle = GoalsConstants.pageTitle;
        return $(by.cssContainingText(tags.label, pageTitle), pageTitle);
    }

    static get buttons() {
        const label = GoalsConstants.buttons;
        return {
            addGoals: $(by.css('.menu-button .aptean-icon-dartboard'), label.addGoal),
            firstFilter: $(by.css(`select[id*='${label.viewSelector}']`), label.addGoal),
            secondFilter: $(by.css(`select[id*='${label.ownerSelector}']`), label.ownerSelector),
            goalEntry: (index: number) => $(xpath(tags.tBody)
                .anywhere(tags.tr)
                .containsAttributesWithOr([attributes.class, attributes.class],
                    [contactClasses.gridRowAptean, contactClasses.gridAltRowAptean])
                .descendant(tags.td, 2)
                .nthChild(index)
                .buildByObject(),
                label.goalEntry),
            customizeUser: $(by.css('.menu-button .icon-user'), label.customizeUser),
            refresh: $(by.css('.icon-refresh'), label.refresh),
            exportToExcel: $(by.css('.fa-file-excel-o'), label.exportToExcel),
            exportToWord: $(by.css('.fa-file-word-o'), label.exportToWord),
        };
    }

    static get newGoalsScreen() {
        return $(by.css('.ui-dialog-title'), GoalsConstants.newGoalsScreen);
    }

    static get newGoalsScreenProperties() {
        const label = GoalsConstants.newGoalsScreenProperties;
        const xpath1 = 'ancestor::div[contains(@class,"field-container")]';
        return {
            cancel: $(by.css(`input[value='${label.cancel}']`), label.cancel),
            role: $(by.xpath(`//span[text()='${label.role}']/${xpath1}//select`), label.role),
            goalType: $(by.xpath(`//span[text()='${label.goal}']/${xpath1}//select`), label.goal),
            save: $(by.css(`input[value='${label.save}']`), label.save),
            delete: $(by.css(`input[value='${label.delete}']`), label.delete),
            saveAndClose: $(by.css(`input[value='${label.saveAndClose}']`), label.saveAndClose),
            description: $(by.xpath(`//span[text()='${label.description}']/${xpath1}//input`), label.description),
            status: $(by.xpath(`//span[text()='${label.status}']/${xpath1}//select`), label.status),
            deleteConfirmationDialog: $(by.xpath(`//span[text()='${label.deleteConfirmation}']`), label.deleteConfirmation),
            deleteOnConfirmation: $(by.xpath(`//button[text()='${label.delete}']`), label.delete),
        };
    }

    static get customizeUserGoalsProperties() {
        const label = GoalsConstants.customizeUserGoalsProperties;
        return {
            selectTheUserToCustomize: $(by.css('select[name*="customUserCombo"]'), label.selectTheUserToCustomize),
            startWithRecordsFromThisRole: $(by.css('select[name*="roleCombo"]'), label.selectTheUserToCustomize),
            startWithRecordsFromThisUser: $(by.css('select[name*="userCombo"]'), label.selectTheUserToCustomize),
            save: $(by.css(`input[value='${label.save}']`), label.save),
            cancel: $(by.css(`input[value='${label.cancel}']`), label.cancel),
            startWithACleanSlateRadio: $(by.css('input[id*="startWithNone"]'), label.startWithACleanSlate),
            startWithRecordsFromThisRoleRadio: $(by.css('input[id*="startWithRole"]'), label.startWithRecordsFromThisRole),
            startWithRecordsFromThisUserRadio: $(by.css('input[id*="startWithUser"]'), label.startWithRecordsFromThisUser),
            preserveRadio: $(by.css('input[id*="preserve"]'), label.preserve),
            deleteRadio: $(by.css('input[id*="delete"]'), label.delete),
            closeIcon: $(by.css('.ui-icon-closethick'), label.close),
        };
    }

    static goalSelected(goal: string) {
        return $(by.xpath(`//option[text()='${goal}']`), goal);
    }

    static validationError(message: string) {
        return $(by.xpath(`//label[text()='${message}']`), message);
    }

    static get customizeUserGoalsPopup() {
        return $(by.css('.ui-dialog-title'), GoalsConstants.customizeUserGoalsPopup);
    }

    static get goalsPageItemsGrid() {
        const label = GoalsConstants.goalsPageItemsGrid;
        return {
            type: $(by.cssContainingText(tags.a, label.type), label.type),
            description: $(by.cssContainingText(tags.a, label.description), label.description),
            goalType: $(by.cssContainingText(tags.a, label.goalType), label.goalType),
            period: $(by.cssContainingText(tags.a, label.period), label.period),
            target: $(by.cssContainingText(tags.a, label.target), label.target),
            active: $(by.cssContainingText(tags.a, label.active), label.active),
            replicate: $(by.cssContainingText(tags.a, label.replicate), label.replicate),
        };
    }
}

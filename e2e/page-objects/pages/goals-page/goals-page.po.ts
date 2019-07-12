import { by, By } from 'protractor';

import { $ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';

import { GoalsConstant } from './goals.constants';

const { elementNames: eNames, classes } = GoalsConstant;
const { tags } = HtmlHelper;

export class GoalsPage {
    static getSelectBySpanText(text: string) {
        return $(by.xpath(`//${tags.span}[text()='${text}']//ancestor::${tags.div}[contains(@class, '${classes.fieldContainer}')]//${tags.select}`), text);
    }

    static getTextFieldBySpanText(text: string) {
        return $(by.xpath(`//${tags.span}[text()='${text}']//ancestor::${tags.div}[contains(@class, '${classes.fieldContainer}')]//${tags.input}`), text);
    }

    static get dropDown() {
        return {
            role: this.getSelectBySpanText(eNames.role),
            periodType: this.getSelectBySpanText(eNames.periodType),
            goalIsFor: this.getSelectBySpanText(eNames.goalIsFor),
            targetType: this.getSelectBySpanText(eNames.targetType),
            goalType: this.getSelectBySpanText(eNames.goalType),
        };
    }

    static get saveButton() {
        return $(by.css(`input[value=${eNames.save}]`), eNames.save);
    }

    static get textField() {
        return {
            targetValue: this.getTextFieldBySpanText(eNames.targetValue),
            description: this.getTextFieldBySpanText(eNames.description),
            displayOrder: this.getTextFieldBySpanText(eNames.displayOrder),
        };
    }

    static get pageTitle() {
        return $(By.cssContainingText(tags.label, eNames.manageGoals), eNames.manageGoals);
    }

    static get addGoalButton() {
        return $(by.css(`${tags.a}.${classes.menuButton}[title="${eNames.addGoal}"]`), eNames.addGoal);
    }

    static get uiDialogTitle() {
        return $(By.cssContainingText(tags.span, eNames.newGoal), eNames.newGoal);
    }
}

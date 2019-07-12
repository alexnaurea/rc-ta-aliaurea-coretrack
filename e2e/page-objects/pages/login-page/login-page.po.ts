import { by } from 'protractor';

import { $ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { xpath } from '../../../components/misc-utils/xpath-builder';
import { CommonPage } from '../common/common.po';

import { LoginPageConstant } from './login-page.constants';

export class LoginPage {
    private static readonly names = LoginPageConstant.elementNames;
    private static readonly attr = LoginPageConstant.attributes;
    private static readonly eMessages = LoginPageConstant.errorMessages;

    static get loginForm() {
        return {
            username: $(CommonPage.getLocatorByPlaceHolder(this.names.username),
                this.names.username),
            password: $(CommonPage.getLocatorByPlaceHolder(this.names.password),
                this.names.password),
            environment: $(CommonPage.getLocatorByPlaceHolder(this.names.environment),
                this.names.environment),
            language: $(CommonPage.getLocatorByPlaceHolder(this.names.language),
                this.names.language),
            signIn: $(xpath(HtmlHelper.tags.span)
                .text(this.names.signIn)
                .where(HtmlHelper.additionalAttributes.dataRef, this.attr.dataRef.btnInnerEl)
                .buildByObject(), this.names.signIn),
            settings: $(by.className(this.attr.classes.settings),
                this.names.settings),
        };
    }

    static get popUpModal() {
        return {
            pleaseFillAllFields: $(xpath(HtmlHelper.tags.div)
                .text(this.eMessages.pleaseFillAllFields)
                .contains(HtmlHelper.attributes.class, this.attr.classes.errorPopMessage)
                .buildByObject(), this.eMessages.pleaseFillAllFields),
            incorrectLoginPassword: $(xpath(HtmlHelper.tags.div)
                .text(this.eMessages.incorrectLoginPassword)
                .contains(HtmlHelper.attributes.class, this.attr.classes.errorPopMessage)
                .buildByObject(), this.eMessages.incorrectLoginPassword),
            ok: $(xpath(HtmlHelper.tags.span)
                .text(this.names.ok)
                .where(HtmlHelper.additionalAttributes.dataRef, this.attr.dataRef.btnInnerEl)
                .buildByObject(), this.names.ok),
        };
    }
}

import { $ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { xpath } from '../../../components/misc-utils/xpath-builder';
import { CommonPage } from '../common/common.po';

import { SettingsPageConstant } from './settings-page.constants';

export class SettingsPage {
    private static readonly names = SettingsPageConstant.elementNames;
    private static readonly attr = SettingsPageConstant.attributes;

    static get form() {
        return {
            url: $(CommonPage.getLocatorByPlaceHolder(this.names.url), this.names.url),
            back: $(xpath(HtmlHelper.tags.span)
                    .text(this.names.back)
                    .where(HtmlHelper.additionalAttributes.dataRef, this.attr.dataRef.btnInnerEl)
                    .buildByObject(), this.names.url),
            save: $(xpath(HtmlHelper.tags.span)
                    .text(this.names.save)
                    .where(HtmlHelper.additionalAttributes.dataRef, this.attr.dataRef.btnInnerEl)
                    .buildByObject(), this.names.url),
        };
    }
}

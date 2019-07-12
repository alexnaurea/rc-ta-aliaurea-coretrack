import { Constants } from '../../../components/misc-utils/constants';
import { $, $$, $cssContainingText } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';
import { xpath } from '../../../components/misc-utils/xpath-builder';

import { ProductionPageConstant } from './production-page.constants';

const { elementNames: eNames, attributes: { classes } } = ProductionPageConstant;
const { attributes, tags } = HtmlHelper;

export class ProductionPage {

    static get title() {
        return $cssContainingText(`.${classes.toolbarTitle}`,
            eNames.production);
    }

    static get table() {
        return {
            account: {
                accounts: $$(xpath(tags.tr)
                        .containsAttributesWithOr([attributes.class, attributes.class],
                            [classes.gridRowAptean, classes.gridAltRowAptean])
                        .descendant(tags.td, Constants.number.two)
                        .buildByObject(), eNames.accountRows),
                specificAccount: (index: number) => $(xpath(tags.tr)
                        .containsAttributesWithOr([attributes.class, attributes.class],
                            [classes.gridRowAptean, classes.gridAltRowAptean])
                        .descendant(tags.td, Constants.number.two)
                        .nthChild(index)
                        .buildByObject(), `${eNames.accountRows}:${index}`),
            },
        };
    }

}

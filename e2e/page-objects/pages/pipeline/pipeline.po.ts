import { by } from 'protractor';

import { $ } from '../../../components/misc-utils/df-elements-helper';
import { HtmlHelper } from '../../../components/misc-utils/html-helper';

import { PipelineConstant } from './pipeline.constant';

const tags = HtmlHelper.tags;
const title = PipelineConstant.titles;
const names = PipelineConstant.names;
const attr = PipelineConstant.attributes;

export class PipelinePage {

    static get titles() {
        return {
            pipeline: $(by.cssContainingText(tags.label, title.pipeline), title.pipeline),
        };
    }

    static get elements() {
        return {
            opportunitiesContainer:
                $(by.css(
                    `div[id*="${attr.id.pipelineopportunitycontainer}"][role="${attr.role.presentation}"][data-ref="innerCt"]`),
                    names.opportunitiesContainer),
        };
    }
}

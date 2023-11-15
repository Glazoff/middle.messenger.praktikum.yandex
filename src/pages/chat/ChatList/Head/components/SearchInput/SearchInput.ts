import { Component } from "../../../../../../service/Component";
import { Props } from "../../../../../../service/Component/types";
import { template } from "./template";

export class SearchInput extends Component {
    constructor(props: Props = {}) {
        
        props.id = 'search-input';
        props.classInput = 'search-input';
        props.classLabel = 'search-label';

        props.attribute = {
            class: 'chat-list__search-input'
        }

        super('div', props)
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

import { Component } from "../../../../service/Component";
import { Props } from "../../../../service/Component/types";
import { ButtonProfile } from "./components/ButtonProfile";
import { SearchInput } from "./components/SearchInput";
import { template } from "./template";

export class Head extends Component {
    constructor(props: Props = {}) {
        props.buttonProfile = new ButtonProfile();
        props.searchInput = new SearchInput();

        props.attribute = {
            class: 'chat-list__head'
        }

        super('div', props)
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}
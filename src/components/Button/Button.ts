import { Component } from "../../service/Component";
import { Props } from "../../service/Component/types";

export default class Button extends Component {
    constructor(props: Props) {
        super('button', props);
    }

    public render(): DocumentFragment {
        return this.compile('{{ text }}', this.props)
    };
};
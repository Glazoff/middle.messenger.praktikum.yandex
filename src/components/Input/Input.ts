import { Component } from "../../service/Component";
import { Props } from "../../service/Component/types";
import { template } from "./template";

export class Input extends Component {
    constructor(props: Props) {
        props.attribute = {
            class: 'input-wrapper',
        };

        super('div' ,props)
    }

    render() {
        return this.compile(template, this.props);
    }

}

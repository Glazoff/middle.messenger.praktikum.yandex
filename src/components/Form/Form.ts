import { Component } from "../../service/Component";
import { Props } from "../../service/Component/types";
import { template } from "./template";

export default class Form extends Component{
    constructor(props: Props) {
        const {content} = props;

        props.content = content;

        super('form', props)
    }

    public render() {
        return this.compile(template, this.props);
    }
}

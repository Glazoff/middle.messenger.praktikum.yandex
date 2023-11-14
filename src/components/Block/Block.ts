import { Component } from "../../service/Component";
import { Props } from "../../service/Component/types";
import { template } from "./template";

export class Block extends Component{
    constructor(props: Props) {
        super('div', props)
    }

    public render() {
        return this.compile(template, this.props);
    }
}
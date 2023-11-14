import { Component } from "../../service/Component";
import { Props } from "../../service/Component/types";

export default class Img extends Component{
    constructor(props: Props = {}) {
        super('img', props);
    }

    public render(): DocumentFragment {
        return this.compile(``, this.props)
    }
} 
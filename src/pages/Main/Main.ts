import { Component } from "../../service/Component";
import { Props } from "../../service/Component/types";
import { template } from "./template";

// не стал декомпозировать компонент тк он временный, для навигации по страницам
export default class Main extends Component {
    constructor(props: Props) {
        super('nav', props);
    };

    render() {
        return this.compile(template, this.props)
    };
};
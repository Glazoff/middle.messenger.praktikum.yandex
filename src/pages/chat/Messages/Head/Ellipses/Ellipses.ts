import Img from "../../../../../components/Img";
import { Component } from "../../../../../service/Component";
import { Props } from "../../../../../service/Component/types";

export class Ellipses extends Component {
    constructor(props: Props = {}){

        props.img = new Img({attribute: {src: '/img/ellipses.svg'}})

        props.attribute = {
            class: 'ellipses-button'
        }

        super('button' ,props)

    }

    public render(): DocumentFragment {
        return this.compile(`{{{ img }}}`, this.props);
    }
}
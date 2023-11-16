import Img from "../../../../../../components/Img";
import { Component } from "../../../../../../service/Component";
import { Props } from "../../../../../../service/Component/types";

export class Clip extends Component {
    constructor(props: Props = {}){

        props.img = new Img({attribute: {src: '/img/clip.svg'}})

        props.attribute = {
            class: 'clip'
        }
        super('button', props)
    }

    public render(): DocumentFragment {
        return this.compile(`{{{ img }}}`, this.props)
    }
}
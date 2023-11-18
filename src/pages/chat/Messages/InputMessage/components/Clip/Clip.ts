import Img from "../../../../../../components/Img";
import { Component } from "../../../../../../service/Component";
import { Props } from "../../../../../../service/Component/types";
import clip from '/img/clip.svg';

export class Clip extends Component {
    constructor(props: Props = {}){

        props.img = new Img({attribute: {src: clip}})

        props.attribute = {
            class: 'clip'
        }
        super('button', props)
    }

    public render(): DocumentFragment {
        return this.compile(`{{{ img }}}`, this.props)
    }
}
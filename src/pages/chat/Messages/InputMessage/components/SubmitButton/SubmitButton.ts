import Img from "../../../../../../components/Img";
import { Component } from "../../../../../../service/Component";
import { Props } from "../../../../../../service/Component/types";

export class SubmitButton extends Component {
    constructor(props: Props = {}) {

        props.img = new Img({attribute: {src: '/img/button-submit.svg'}})

        props.attribute = {
            class: 'submit-button'
        }
        super('button', props)
    }

    public render(): DocumentFragment {
        return this.compile('{{{ img }}}', this.props)
    }
}

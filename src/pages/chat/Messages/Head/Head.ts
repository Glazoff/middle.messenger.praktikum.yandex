import { Block } from "../../../../components/Block";
import Img from "../../../../components/Img";
import Title from "../../../../components/Title";
import { Component } from "../../../../service/Component";
import { Props } from "../../../../service/Component/types";
import { Ellipses } from "./Ellipses";
import { template } from "./template";

export class Head extends Component{
    constructor(props: Props = {}) {

        props.userInfo = new Block({
            content: [
                new Img({attribute: {src: '/img/Ellipse 17.svg', name: 'avatar', class: 'avatar'}}),
                new Title({text: 'Андрей', attribute: {class: 'user-name'}})
            ],
            attribute: { class: 'user-profile'}
        })

        props.button = new Ellipses()

        props.attribute = {
            class: 'head-messages'
        }

        super('div', props)
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}
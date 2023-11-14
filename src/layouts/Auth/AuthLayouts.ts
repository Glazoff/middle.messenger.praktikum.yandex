import { Component } from "../../service/Component";
import { Props } from "../../service/Component/types";

import Title from "../../components/Title";
import Form from "../../components/Form";
import { template } from "./template";
import { Block } from "../../components/Block";

export class AuthLayouts extends Component {
    constructor(props: Props) {
        const {title} = props;

        props.title = new Title({text: title, attribute: {class: 'title'}});

        props.form = new Form({content:
            new Block({content: '', attribute: {class: 'blok-auth__inputs'}})
        })

        props.attribute = {
            class: 'blok-auth'
        }

        super('div', props);
    }

    render() {
        return this.compile(template, this.props);  
    }
}

import { Component } from "../../../../service/Component";
import { Props } from "../../../../service/Component/types";
import { Clip } from "./components/Clip";
import { Input } from "./components/Input";
import { SubmitButton } from "./components/SubmitButton";
import { template } from "./template";


export class InputMessage extends Component{
    constructor(props: Props = {}){

        props.submitButton = new SubmitButton();

        props.input = new Input();

        props.attachButton = new Clip();


        props.attribute = {
            class: 'block-input-message',
        }

        super('div' ,props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}
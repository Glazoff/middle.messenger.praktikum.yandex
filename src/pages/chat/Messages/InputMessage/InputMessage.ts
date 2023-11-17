import { Component } from "../../../../service/Component";
import { Props } from "../../../../service/Component/types";
import { Clip } from "./components/Clip";
import { Input } from "./components/Input";
import { SubmitButton } from "./components/SubmitButton";
import { template } from "./template";
import {checkSubmitValidation, checkFocusoutValidation} from '../../../../utils/checkValidation';


export class InputMessage extends Component{
    constructor(props: Props = {}){



        props.submitButton = new SubmitButton();

        props.input = new Input();

        props.attachButton = new Clip();


        props.attribute = {
            class: 'block-input-message',
        }

        props.events = {
            'submit': (e) => {
                e.preventDefault();
                checkSubmitValidation(e);
            },
            'focusout': (e) => {
                e.preventDefault();
                checkFocusoutValidation(e);          
            }
        }

        super('form' ,props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}
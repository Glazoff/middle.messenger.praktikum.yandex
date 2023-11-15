import { Block } from "../../../../../components/Block";
import Img from "../../../../../components/Img";
import Textarea from "../../../../../components/Textarea";
import Title from "../../../../../components/Title";
import { Component } from "../../../../../service/Component";
import { Props } from "../../../../../service/Component/types";
import { CountUnread } from "./component";
import { template } from "./template";

export class ListItem extends Component {
    constructor(props: Props = {}){ 

        props.img = new Img({attribute: {src: '/img/Ellipse 17.svg', name: 'avatar', class: 'avatar'}})

        props.infoMessage = new Block({
            content: [
                new Title({text: 'Андрей', attribute: {class: 'user-name'}}),
                new Textarea({text: 'Слышал песню "Привет Андрей?"', attribute: {class: 'message'}})
            ]
        });

        props.time = new Textarea({text: '15:12', attribute: {class: 'time'}})

        props.countUnread = new CountUnread({count: '2',});

        props.attribute = {
            class: 'lsit-item'
        }
        super('div', props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}

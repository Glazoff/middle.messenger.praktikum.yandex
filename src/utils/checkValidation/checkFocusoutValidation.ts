import {INPUT, Inputs} from './const';

export const checkFocusoutValidation = (e: Event) => {
    const input: HTMLInputElement = e.target as HTMLInputElement;
    if(input.tagName === INPUT) {
        const {value, name} = input;

        if(name in Inputs) {
            Inputs[name].test(value) ? input.style.color = 'inherit': input.style.color = 'red';
        }
    }
}

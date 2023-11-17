import {INPUT, Inputs} from './const';

export const checkSubmitValidation = (e: Event) => {
    const form = e.target as HTMLFormElement; 
    const elements = Array.from(form.elements);
    const res: Record<string, string> = {};

    elements.forEach((e) => {
        if(e.tagName === INPUT) {
            const input: HTMLInputElement = e as HTMLInputElement;
            const {value, name} = input;

            if(name in Inputs) {
                Inputs[name].test(value) ? input.style.color = 'inherit': input.style.color = 'red';
                res[name] = value
            }
        }
    })

    console.log(res);
};

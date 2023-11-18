import { INPUT, Inputs } from './const';

const checkFocusoutValidation = (e: Event) => {
  const input: HTMLInputElement = e.target as HTMLInputElement;
  if (input.tagName === INPUT) {
    const { value, name } = input;

    if (name in Inputs) {
      if (Inputs[name].test(value)) {
        input.style.color = 'inherit';
      } else {
        input.style.color = 'red';
      }
    }
  }
};

export default checkFocusoutValidation;

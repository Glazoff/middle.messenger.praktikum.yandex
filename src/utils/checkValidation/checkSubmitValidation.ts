import { INPUT, Inputs } from './const';

const checkSubmitValidation = (e: Event) => {
  const form = e.target as HTMLFormElement;
  const elements = Array.from(form.elements);
  const res: Record<string, string> = {};

  // eslint-disable-next-line @typescript-eslint/no-shadow
  elements.forEach((e) => {
    if (e.tagName === INPUT) {
      const input: HTMLInputElement = e as HTMLInputElement;
      const { value, name } = input;

      if (name in Inputs) {
        if (Inputs[name].test(value)) {
          input.style.color = 'inherit';
        } else {
          input.style.color = 'red';
        }
        res[name] = value;
      }
    }
  });

  console.log(res);
};

export default checkSubmitValidation;

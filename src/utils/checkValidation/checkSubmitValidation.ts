import Component from '../../service/Component';
import { INPUT, Inputs, TextError } from './const';
import { Res } from './types';

const checkSubmitValidation = (e: Event, inputs: Component[]) => {
  const form = e.target as HTMLFormElement;
  const elements = Array.from(form.elements);
  const resForConsole: Record<string, string> = {};
  const res: Res = {};

  // eslint-disable-next-line @typescript-eslint/no-shadow
  elements.forEach((e) => {
    if (e.tagName === INPUT) {
      const input: HTMLInputElement = e as HTMLInputElement;
      const { value, name } = input;

      if (name in Inputs) {
        res[name] = {
          value: '',
          isValid: true,
          errorText: '',
        };

        if (Inputs[name].test(value)) {
          res[name].isValid = true;
          res[name].errorText = '';
        } else {
          res[name].errorText = TextError[name as keyof typeof TextError];
          res[name].isValid = false;
        }

        resForConsole[name] = value;
        res[name].value = value;
      }
    }
  });

  Object.entries(inputs).forEach(([, value]) => {
    const { props: { name } } = value;
    if (name as string in res) {
      const currentInput = res[name as string];

      value.setProps({
        isValid: currentInput.isValid,
        textError: currentInput.errorText,
        value: currentInput.value,
      });
    }
  });

  console.log(resForConsole);
  return resForConsole;
};

export default checkSubmitValidation;

import Component from '../../service/Component';
import { INPUT, Inputs, TextError } from './const';
import { Res } from './types';

const checkFocusoutValidation = (e: Event, inputs: Component[]) => {
  const input: HTMLInputElement = e.target as HTMLInputElement;
  const res: Res = {};

  if (input.tagName === INPUT) {
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

      res[name].value = value;
    }
  }

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
};

export default checkFocusoutValidation;

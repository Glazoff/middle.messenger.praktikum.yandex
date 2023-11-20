const template = `
    <input id="{{ id }}" class="input" placeholder="{{ placeholder }}" type="{{ type }}" name="{{ name }}" value="{{ value }}"></input>
    <label for="{{ id }}" class="placeholder">{{ placeholder }}</label>
    {{#unless isValid}}
        <p class="error-text"> {{ textError }} </p>
    {{/unless}}
`;
export default template;

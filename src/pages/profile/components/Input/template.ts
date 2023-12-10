const template = `
    <input 
        id="{{ id }}" 
        class="input" 
        placeholder="{{ placeholder }}" 
        type="{{ type }}" 
        value="{{ value }}" 
        name="{{ name }}"

        {{#if isDisabled}}
        disabled
        {{/if}}

    ></input>
    <label for="{{ id }}" class="placeholder">{{ placeholder }}</label>
    {{#unless isValid}}
        <p class="error-text"> {{ textError }} </p>
    {{/unless}}
`;

export default template;

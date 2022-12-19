export const INITIAL_VALUE_input = ""; //start point value for initial MyComponent.return.inputValue
export const INITIAL_VALUE_output = ""; //start point value for initial MyComponent.return.outputValue

export function handleChange(event, setInputValue) {
  setInputValue(event.target.value);
}

export function handleClick(inputValue, setOutputValue) {
  setOutputValue(inputValue);
}

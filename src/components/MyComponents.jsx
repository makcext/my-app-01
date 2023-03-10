import React, { useState } from "react";

import {
  handleChange,
  handleClick,
  INITIAL_VALUE_input,
  INITIAL_VALUE_output,
} from "./Functions";

function MyComponent() {
  const [inputValue, setInputValue] = useState(INITIAL_VALUE_input);
  const [outputValue, setOutputValue] = useState(INITIAL_VALUE_output);

  return (
    <div>
      <label>Enter text:</label>
      <br />
      <input
        value={inputValue}
        onChange={(event) => handleChange(event, setInputValue)}
      />
      <br />
      <button onClick={() => handleClick(inputValue, setOutputValue)}>
        Ok
      </button>
      <br />
      <label>Hello: {outputValue}</label>
    </div>
  );
}

export default MyComponent;

import PropTypes from "prop-types";
import { useState } from "react";
import { FormContainer } from "./Input.style";

const NumberInput = ({ label, onSubmit }) => {
  const SUBMIT_TEXT = "Select";

  const [inputValue, setInputValue] = useState(null);

  const handleOnChange = (event) => {
    const value = +event.target.value;

    if (typeof value !== "number" && value < 1 && value > 6) {
      return;
    }

    setInputValue(value);
  };

  const handleNumberOfDices = (event) => {
    event.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <>
      {label}
      <FormContainer className="form" onSubmit={handleNumberOfDices}>
        <input
          className="form-input"
          type="number"
          onChange={handleOnChange}
          min="1"
        />

        <button className="form-button" type="submit" disabled={!inputValue}>
          {SUBMIT_TEXT}
        </button>
      </FormContainer>
    </>
  );
};

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default NumberInput;

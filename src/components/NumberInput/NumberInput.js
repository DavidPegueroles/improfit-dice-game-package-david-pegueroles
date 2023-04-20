import PropTypes from "prop-types";
import { useState } from "react";
import { FormContainer } from "./NumberInput.style";

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
      <FormContainer className="form" onSubmit={handleNumberOfDices}>
        <label className="form-label" htmlFor="dice-number">
          {label}
        </label>

        <div>
          <input
            className="form-input"
            id="dice-number"
            min="1"
            onChange={handleOnChange}
            type="number"
          />

          <button className="form-button" type="submit" disabled={!inputValue}>
            {SUBMIT_TEXT}
          </button>
        </div>
      </FormContainer>
    </>
  );
};

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default NumberInput;

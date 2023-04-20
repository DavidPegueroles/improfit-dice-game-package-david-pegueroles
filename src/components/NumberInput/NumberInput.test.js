import NumberInput from "./NumberInput";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given a NumberInput component", () => {
  const LABEL = "Input";

  describe("When it does not receive an input", () => {
    it("Then it should have the button disabled", () => {
      const onSubmit = jest.fn();

      render(<NumberInput label={LABEL} onSubmit={onSubmit} />);

      const submitButton = screen.getByRole("button", { name: /select/i });

      expect(submitButton).toBeDisabled();
    });
  });

  describe("When it receives an input", () => {
    it("Then it should not have the button disabled", () => {
      const NUMBER = "7";
      const onSubmit = jest.fn();

      render(<NumberInput label={LABEL} onSubmit={onSubmit} />);

      const numberInput = screen.getByLabelText(/input/i);

      userEvent.type(numberInput, NUMBER);

      const submitButton = screen.getByRole("button", { name: /select/i });

      expect(submitButton).not.toBeDisabled();
      expect(numberInput.value).toBe(NUMBER);
    });
  });

  describe("When it receives an input and the user submits", () => {
    it("Then it should call the onSubmit fn with the given input", () => {
      const NUMBER = "7";
      const EXPECTED_NUMBER = 7;
      const onSubmit = jest.fn();

      render(<NumberInput label={LABEL} onSubmit={onSubmit} />);

      const numberInput = screen.getByLabelText(/input/i);

      userEvent.type(numberInput, NUMBER);

      const submitButton = screen.getByRole("button", { name: /select/i });

      userEvent.click(submitButton);

      expect(onSubmit).toHaveBeenCalledWith(EXPECTED_NUMBER);
    });
  });
});

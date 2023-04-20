import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it's rendered with the text 'This is a button'", () => {
    it("Then it should display a button with the text 'This is a button'", () => {
      const TEXT = "This is a button";
      const onClick = () => {};

      const ACCESSIBLE_TEXT = /this is a button/i;

      render(<Button onClick={onClick}>{TEXT}</Button>);

      const buttonText = screen.getByRole("button", {
        name: ACCESSIBLE_TEXT,
      });

      expect(buttonText).toBeInTheDocument();
    });
  });

  describe("When it's rendered with an action on click, and the user clicks the button", () => {
    it("Then the action should be called", () => {
      const TEXT = "This is a button";
      const onClick = jest.fn();

      const ACCESSIBLE_TEXT = /this is a button/i;

      render(<Button onClick={onClick}>{TEXT}</Button>);

      const button = screen.getByRole("button", {
        name: ACCESSIBLE_TEXT,
      });

      userEvent.click(button);

      expect(onClick).toHaveBeenCalled();
    });
  });
});

import { render, screen } from "@testing-library/react";
import Dice from "./Dice";

describe("Given a Dice component", () => {
  const DOT_TEST_ID = "dice-dot";

  describe("When it is rendered with a number of 3", () => {
    it("Then it should display 3 dots", () => {
      const DOTS = 3;
      const EXPECTED_DOTS = 3;

      render(<Dice number={DOTS} />);

      const dots = screen.getAllByTestId(DOT_TEST_ID);

      expect(dots.length).toBe(EXPECTED_DOTS);
    });
  });

  describe("When it is rendered without a number", () => {
    it("Then it should display no dots", () => {
      const DOTS = 0;
      const EXPECTED_DOTS = 0;

      render(<Dice number={DOTS} />);

      const dots = screen.queryAllByTestId(DOT_TEST_ID);

      expect(dots.length).toBe(EXPECTED_DOTS);
    });
  });
});

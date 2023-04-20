import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("Given a Modal component", () => {
  describe("When it's rendered with the text 'This is a modal' as title and 'children'", () => {
    it("Then it should display the modal with the text 'This is a modal' and 'children'", () => {
      const TEXT = "This is a modal";
      const CHILDREN = "children";

      const ACCESSIBLE_TEXT = /this is a modal/i;
      const ACCESSIBLE_BODY = /children/i;

      render(
        <Modal show={true} title={TEXT}>
          {CHILDREN}
        </Modal>
      );

      const titleElement = screen.getByRole("heading", {
        name: ACCESSIBLE_TEXT,
      });
      const bodyElement = screen.getByText(ACCESSIBLE_BODY);

      expect(titleElement).toBeInTheDocument();
      expect(titleElement).toHaveTextContent(TEXT);
      expect(bodyElement).toBeInTheDocument();
      expect(bodyElement).toHaveTextContent(CHILDREN);
    });
  });
});

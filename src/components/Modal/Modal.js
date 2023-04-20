import { ModalContainer, ModalContent } from "./Modal.style";
import PropTypes from "prop-types";

const Modal = ({ show, title, children }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalContainer>
      <ModalContent>
        {title && <h2>{title}</h2>}
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;

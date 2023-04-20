import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  row-gap: 0.5rem;

  .form-input {
    border: 2px solid rgba(18, 98, 138, 1);
    padding: 0.4rem;
  }

  .form-button {
    background-color: rgba(18, 98, 138, 1);
    color: rgba(255, 255, 255, 1);
    font-weight: "bold";
    padding: 0.4rem;
    width: fit-content;
    border: none;
    font-size: 1rem;

    &:disabled {
      background-color: rgba(18, 98, 138, 0.5);
      color: rgba(18, 98, 138, 1);
    }
  }
`;

import styled from "styled-components";

export const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .board-section {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 2rem;
    flex-wrap: wrap;

    &__dices {
      gap: 1rem;
    }
  }
`;

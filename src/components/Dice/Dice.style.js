import styled from "styled-components";

export const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10%;

  width: 10rem;
  height: 10rem;

  background-color: rgba(0, 0, 0, 1);
  border-radius: 8%;

  animation: roll 0.5s linear 1;
  @keyframes roll {
    0% {
      transform: rotate(-180deg);
    }
    50% {
      transform: rotate(120deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }

  .dice-dot {
    width: 20%;
    height: 20%;

    background-color: rgba(255, 255, 255, 1);
    border-radius: 50%;

    flex-shrink: 0;
  }

  &.dot-2 {
    .dice-dot {
      &:nth-child(1) {
        transform: translateX(-80%);
      }
      &:nth-child(2) {
        transform: translateX(80%);
      }
    }
  }

  &.dot-3 {
    .dice-dot {
      &:nth-child(1) {
        transform: translateX(-150%);
      }
      &:nth-child(3) {
        transform: translateX(150%);
      }
    }
  }

  &.dot-4 {
    flex-wrap: wrap;
    gap: 25%;
  }

  &.dot-5 {
    .dice-dot {
      &:nth-child(1) {
        transform: translateX(-150%) translateY(150%);
      }
      &:nth-child(2) {
        transform: translateX(150%);
      }
      &:nth-child(4) {
        transform: translateX(-150%);
      }
      &:nth-child(5) {
        transform: translateX(150%) translateY(-150%);
      }
    }
  }

  &.dot-6 {
    flex-wrap: wrap;
  }
`;

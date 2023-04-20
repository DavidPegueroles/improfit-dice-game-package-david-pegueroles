import useDiceGame from "../../utils/hooks/useDiceGame";
import Board from "../Board/Board";
import Modal from "../../components/Modal/Modal";
import NumberInput from "../../components/NumberInput/NumberInput";
import Button from "../../components/Button/Button";
import { StyledInputSection } from "./Game.style";

const Game = () => {
  const {
    diceNumbers,
    gameState,
    handlePlayGame,
    handleResetGame,
    handleRollingDice,
    rollResult,
  } = useDiceGame();

  const INPUT_LABEL = "Please, select a number of dices to begin with.";

  const winModalBody = () => {
    const title = "Congratulations!!";
    const bodyText = "You just won!";
    const buttonText = "Try again";

    return (
      <Modal show={gameState.currentState === "won"} title={title}>
        <p>{bodyText}</p>
        <Button onClick={handleResetGame}>{buttonText}</Button>
      </Modal>
    );
  };

  return (
    <>
      {gameState.currentState === "ready" && (
        <StyledInputSection>
          <NumberInput label={INPUT_LABEL} onSubmit={handlePlayGame} />
        </StyledInputSection>
      )}

      {gameState.currentState !== "ready" && (
        <Board
          diceNumbers={diceNumbers}
          gameState={gameState}
          handleRollingDice={handleRollingDice}
          rollResult={rollResult}
        />
      )}

      {gameState.currentState === "won" && winModalBody()}
    </>
  );
};

export default Game;

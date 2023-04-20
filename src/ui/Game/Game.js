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
  const MODAL_TITLE = "Congratulations!!";
  const NODAL_BODY = "You just won!";
  const MODAL_BUTTON_TEXT = "Try again";

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

      {gameState.currentState === "won" && (
        <Modal show={gameState.currentState === "won"} title={MODAL_TITLE}>
          <p>{NODAL_BODY}</p>
          <Button onClick={handleResetGame}>{MODAL_BUTTON_TEXT}</Button>
        </Modal>
      )}
    </>
  );
};

export default Game;

import PropTypes from "prop-types";
import Button from "../../components/Button/Button";
import Dice from "../../components/Dice/Dice";
import { StyledBoard } from "./Board.style";

const Board = ({ diceNumbers, gameState, handleRollingDice, rollResult }) => {
  const { currentState, highScore, numberOfDices, numberOfRolls, targetScore } =
    gameState;

  const HIGHEST_SCORE = `Highest score with ${numberOfDices} dices is ${highScore}`;
  const TIMES_ROLLED = `Times rolled: ${numberOfRolls}`;
  const TOTAL_VALUE = `Total value: ${rollResult}`;
  const TARGET_SCORE = `The total number to beat is: ${targetScore}`;
  const BUTTON_TEXT = "Roll the dices";

  const dices = (numberOfDices) =>
    Array.from({ length: numberOfDices }, (_, index) =>
      diceNumbers[index] ? (
        <Dice key={index} number={diceNumbers[index]} />
      ) : null
    );

  return (
    <StyledBoard>
      <section className="board-section">
        <p>{TARGET_SCORE}</p>
        <p>{TOTAL_VALUE}</p>
      </section>

      <section className="board-section board-section__dices">
        {numberOfDices && dices(numberOfDices)}
      </section>

      <section className="board-section">
        <p>{TIMES_ROLLED}</p>

        <p>{HIGHEST_SCORE}</p>
      </section>

      {currentState !== "won" && (
        <section className="board-section">
          <Button onClick={() => handleRollingDice(numberOfDices)}>
            {BUTTON_TEXT}
          </Button>
        </section>
      )}
    </StyledBoard>
  );
};

Board.propTypes = {
  diceNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  gameState: PropTypes.shape({
    currentState: PropTypes.string.isRequired,
    highScore: PropTypes.number.isRequired,
    numberOfDices: PropTypes.number.isRequired,
    numberOfRolls: PropTypes.number.isRequired,
    targetScore: PropTypes.number.isRequired,
  }).isRequired,
  handleRollingDice: PropTypes.func.isRequired,
  rollResult: PropTypes.number.isRequired,
};

export default Board;

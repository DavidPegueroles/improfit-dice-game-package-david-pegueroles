import PropTypes from "prop-types";
import { DiceContainer } from "./Dice.style";

const Dice = ({ number }) => {
  const DiceContainerCx = (number) => number && `dot-${number}`;

  const dots = (number) =>
    Array.from({ length: number }, (_, index) => (
      <div key={index} className="dice-dot"></div>
    ));

  return (
    <>
      <DiceContainer className={DiceContainerCx(number)}>
        {number && dots(number)}
      </DiceContainer>
    </>
  );
};

Dice.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Dice;

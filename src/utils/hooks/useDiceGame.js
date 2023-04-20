import { useCallback, useEffect, useMemo, useState } from "react";

const useDiceGame = () => {
  const DEFAULT_DICE_NUMBERS = [1];
  const DEFAULT_ROLL_RESULT = 0;
  const DEFAULT_GAME_STATE = {
    currentState: "ready",
    numberOfDices: 0,
    highScore: 0,
    targetScore: 0,
    numberOfRolls: 0,
  };
  const DEFAULT_TOAST = useMemo(() => ({ message: "", visible: false }), []);

  const [diceNumbers, setDiceNumbers] = useState(DEFAULT_DICE_NUMBERS);
  const [rollResult, setRollResult] = useState(DEFAULT_ROLL_RESULT);
  const [gameState, setGameState] = useState(DEFAULT_GAME_STATE);
  const [toast, setToast] = useState(DEFAULT_TOAST);

  const getTargetScore = (numberOfDices) => {
    const minValue = numberOfDices;
    const maxValue = numberOfDices * 6;

    return Math.floor(Math.random() * (maxValue - minValue) + minValue);
  };

  const handlePlayGame = useCallback((numberOfDices) => {
    setGameState((gameState) => ({
      ...gameState,
      currentState: "started",
      numberOfDices,
      targetScore: getTargetScore(numberOfDices),
    }));
  }, []);

  const getRandomDiceNumber = () => Math.floor(Math.random() * 6) + 1;

  const handleRollingDice = useCallback(
    (numberOfDices) => {
      if (!numberOfDices) {
        return;
      }

      const rollingDicesResult = Array.from({ length: numberOfDices }, () =>
        getRandomDiceNumber()
      );
      setDiceNumbers(rollingDicesResult);

      const totalFromRolls = rollingDicesResult.reduce(
        (total, diceNumber) => total + diceNumber
      );
      setRollResult(totalFromRolls);

      const hasWon = totalFromRolls > gameState.targetScore;

      if (hasWon) {
        setGameState((gameState) => ({
          ...gameState,
          currentState: "won",
          highScore: Math.max(totalFromRolls, gameState.highScore),
          numberOfRolls: gameState.numberOfRolls + 1,
        }));
      } else {
        setGameState((gameState) => ({
          ...gameState,
          highScore: Math.max(totalFromRolls, gameState.highScore),
          numberOfRolls: gameState.numberOfRolls + 1,
        }));
      }
    },
    [gameState.targetScore]
  );

  useEffect(() => {
    gameState.numberOfDices && handleRollingDice(gameState.numberOfDices);
  }, [gameState.numberOfDices, handleRollingDice]);

  const handleResetGame = () => {
    setDiceNumbers(DEFAULT_DICE_NUMBERS);
    setRollResult(DEFAULT_ROLL_RESULT);
    setGameState(DEFAULT_GAME_STATE);
  };

  return {
    diceNumbers,
    gameState,
    handlePlayGame,
    handleResetGame,
    handleRollingDice,
    rollResult,
    setToast,
    toast,
  };
};

export default useDiceGame;

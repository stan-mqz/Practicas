export const getAnswer = (result, answer) => {
  const userAnswer = Number(answer);

  if (result === userAnswer) {
    return true;
  } else {
    return false;
  }
};




export const validateAnswer = (isCorrect, streak, playerPoints) => {
  
  if (isCorrect) {
    playerPoints += 1;
    streak += 1;
  } else {
    streak = 0;
  }

  if (streak % 3 === 0 && streak !== 0) {
    playerPoints += 5;
  }

  return {isCorrect, playerPoints, streak}
};

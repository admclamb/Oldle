const yellowGuess = import.meta.env.VITE_GUESS_DIFF_YELLOW;
const greenGuess = import.meta.env.VITE_GUESS_DIFF_GREEN;

export const calculateGuess = (guess: string, answer: string): string => {
  const guessDate = new Date(guess);
  const answerDate = new Date(answer);
  const diffTime = Math.abs(guessDate.getFullYear() - answerDate.getFullYear());
  console.log("diff: ", diffTime);
  if (diffTime === 0) {
    return "🟦";
  } else if (diffTime <= parseInt(greenGuess)) {
    return "🟩";
  } else if (diffTime <= parseInt(yellowGuess)) {
    return "🟨";
  } else {
    return "🟥";
  }
};

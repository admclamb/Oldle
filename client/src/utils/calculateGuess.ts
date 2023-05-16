const yellowGuess = import.meta.env.VITE_GUESS_DIFF_YELLOW;
const greenGuess = import.meta.env.VITE_GUESS_DIFF_GREEN;

export const calculateGuess = (guess: string, answer: string): string => {
  const guessDate = new Date(guess);
  const answerDate = new Date(answer);
  const diffTime = Math.abs(guessDate.valueOf() - answerDate.valueOf());
  const diffInDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  let score;
  switch (diffInDays) {
    case 0:
      score = "🟦";
      break;
    case parseInt(greenGuess):
      score = "🟩";
      break;
    case parseInt(yellowGuess):
      score = "🟨";
      break;
    default:
      score = "🟥";
  }
  return score;
};

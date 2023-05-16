import React, { useState } from "react";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import Image from "../Image/Image";
import TimelineInput from "../Input/TimelineInput/TimelineInput";
import { Day } from "../../ts/types/Day";
import dayjs from "dayjs";
import { calculateGuess } from "../../utils/calculateGuess";
type Props = {
  day: Day | null;
};

const DayQuiz = ({ day }: Props) => {
  const [inputTime, setInputTime] = useState<string>("1923");
  const [attempts, setAttempts] = useState<string[]>([]);
  const isOver = attempts.length >= 5;
  if (!day) {
    return null;
  }
  const { picture } = day;
  const formattedCorrectDate = dayjs(picture.date).format("YYYY");
  console.log(isOver);

  const submitGuess = () => {
    if (!isOver) {
      console.log(inputTime, formattedCorrectDate);
      setAttempts((curr) => [...curr, inputTime]);
      if (inputTime === formattedCorrectDate) {
        console.log("CORRECT DATE");
      }
    }
  };
  return (
    <>
      <div>
        <ImageWrapper>
          <Image url={picture.image} description="old photo" />
        </ImageWrapper>
        <div className="flex justify-center py-2 px-4">
          <div className="flex gap-2 justify-center flex-wrap">
            <p className="w-7 h-7 text-center bg-slate-600 rounded">1</p>
            {attempts.map((attempt, index) => {
              return (
                index < 4 && (
                  <p
                    key={`${attempt}-${index}`}
                    className="w-7 h-7 text-center bg-slate-600 rounded"
                  >
                    {index + 2}
                  </p>
                )
              );
            })}
          </div>
        </div>
      </div>
      {attempts.length > 0 && (
        <div className="py-4 px-4 border-t border-slate-50/[0.06] flex flex-col-reverse gap-1">
          {attempts.map((guess) => {
            return (
              <p
                key={guess}
                className="p-1 border rounded border-slate-50/[0.06]"
              >
                {calculateGuess(guess, formattedCorrectDate)}
                <span>{guess}</span>
              </p>
            );
          })}
        </div>
      )}
      <div className="py-2  px-4 flex flex-col gap-2 border-t border-slate-50/[0.06] py-4">
        <TimelineInput value={inputTime} setValue={setInputTime} />
        <div className="flex justify-center">
          <button
            className="border rounded p-2 w-20 border-slate-50/[0.06]"
            onClick={submitGuess}
          >
            Enter
          </button>
        </div>
      </div>
      <div className="text-center border-t border-slate-50/[0.06]">
        <p className="uppercase py-4">
          {5 - attempts.length} Guesses Remaining
        </p>
      </div>
    </>
  );
};

export default DayQuiz;

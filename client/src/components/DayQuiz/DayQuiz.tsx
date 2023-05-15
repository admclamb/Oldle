import React, { useState } from "react";
import ImageWrapper from "../ImageWrapper/ImageWrapper";
import Image from "../Image/Image";
import TimelineInput from "../Input/TimelineInput/TimelineInput";
import { Day } from "../../ts/types/Day";
import dayjs from "dayjs";
type Props = {
  day: Day | null;
};

const DayQuiz = ({ day }: Props) => {
  const [inputTime, setInputTime] = useState<string>("1923");
  const [attempts, setAttempts] = useState<[]>([]);
  const [isOver, setIsOver] = useState(false);
  if (!day) {
    return null;
  }
  const { picture } = day;
  const formattedCorrectDate = dayjs(picture.date).format("YYYY");
  console.log(formattedCorrectDate);
  const submitGuess = () => {
    console.log(inputTime, formattedCorrectDate);
    if (inputTime === formattedCorrectDate) {
      console.log("CORRECT DATE");
    }
  };
  return (
    <>
      <ImageWrapper>
        <Image url={picture.image} description="old photo" />
      </ImageWrapper>
      <div className="flex justify-center p-2">
        <button className="py-1 px-2 bg-slate-600 rounded">1</button>
      </div>
      <div className="py-2 flex flex-col gap-2">
        <TimelineInput value={inputTime} setValue={setInputTime} />
        <div className="flex justify-center" onClick={submitGuess}>
          <button className="border rounded p-2 w-20 border-slate-700">
            Enter
          </button>
        </div>
      </div>
    </>
  );
};

export default DayQuiz;

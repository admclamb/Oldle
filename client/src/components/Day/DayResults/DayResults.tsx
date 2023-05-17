import React from "react";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";
import Image from "../../Image/Image";
import { Day } from "../../../ts/types/Day";

type Props = {
  day: Day | null;
  attempts: string[];
};

const DayResults = ({ day, attempts }: Props) => {
  if (!day) {
    return null;
  }
  const { picture } = day;
  return (
    <>
      <div>
        <ImageWrapper>
          <Image url={picture.image} description="old photo" />
        </ImageWrapper>
        <div className="text-center py-2">
          <h4 className="text-3xl font-bold">You Did It!</h4>
          <p className="text-lg font-semibold">Date: {day.date.toString()}</p>
        </div>
        <div className="flex justify-center py-2 px-4"></div>
      </div>
    </>
  );
};

export default DayResults;

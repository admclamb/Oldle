import React, { useState } from "react";
import DayForm from "../Form/DayForm/DayForm";
import { Day } from "../../ts/types/Day";
import dayjs from "dayjs";
type Props = {
  day: Day | null;
  setDay: React.Dispatch<React.SetStateAction<Day | null>>;
};

const CreateDay = ({ day, setDay }: Props) => {
  console.log(day);
  return (
    <div className="border rounded border-slate-50/[0.06] p-3">
      <h3 className="text-xl font-bold">Current Day</h3>
      {day ? (
        <div>
          <p>
            <span className="font-semibold">Date:</span>
            {dayjs(day.date).format("DD-MM-YYYY")}
          </p>
          <p>Picture: </p>
          {day.picture ? (
            <div className="flex flex-col gap-3">
              <p className="font-semibold">{day.picture.title}</p>
              <img src={day.picture.image} alt="Oldle image of the day" />
              <p>
                <span className="font-semibold">Hint: </span>
                {day.picture.hint}
              </p>
              <div>
                <p className="font-semibold">Alternate Image: </p>
                <img
                  src={day.picture.alternateImage}
                  alt="Oldle alternate image"
                />
              </div>
            </div>
          ) : (
            <p>No Picture has been selected</p>
          )}
        </div>
      ) : (
        <p>No day has been selected</p>
      )}
    </div>
  );
};

export default CreateDay;

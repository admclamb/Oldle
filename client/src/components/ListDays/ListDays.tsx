import React, { useEffect, useState } from "react";
import { DayApi } from "../../api/DayApi";
import { Day } from "../../ts/types/Day";
import dayjs from "dayjs";
type Props = {
  setCurrDay: React.Dispatch<React.SetStateAction<Day | null>>;
};

const ListDays = ({ setCurrDay }: Props) => {
  const [days, setDays] = useState<Day[]>([]);

  useEffect(() => {
    (async () => {
      const controller = new AbortController();
      try {
        const response = await DayApi.getInstance().listDays();
        setDays(response);
      } catch (error) {
        console.log(error);
      }
      return () => controller.abort();
    })();
  }, []);

  return (
    <div className="border rounded border-slate-50/[0.06] p-3">
      <h3 className="text-xl font-bold">List Of Days</h3>
      {days.length > 0 ? (
        <ul>
          {days.map((day) => {
            const { picture = null, date } = day;
            const formattedDate = dayjs(date);
            return (
              <li
                key={day._id}
                className="flex flex-col gap-3 border-b border-slate-50/[0.06] py-3"
              >
                {picture && (
                  <div>
                    <img src={picture.image} alt="Olde image of the day" />
                  </div>
                )}
                <p>
                  <span className="font-semibold">Date: </span>
                  {formattedDate.format("DD-MM-YYYY")}
                </p>
                <div>
                  <button
                    className="px-3 py-2 border rounded border-slate-50/[0.06]"
                    onClick={() => setCurrDay(day)}
                  >
                    Select Day
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No Days have been created</p>
      )}
    </div>
  );
};

export default ListDays;

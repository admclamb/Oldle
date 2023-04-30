import React, { useEffect, useState } from "react";
import { DayApi } from "../../api/DayApi";
import { Day } from "../../ts/types/Day";
type Props = {};

const ListDays = (props: Props) => {
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
      <h3 className="text-xl">List Of Days</h3>
      <ul>
        {days.map((day) => {
          return (
            <li key={day._id}>
              <img src={day.image_url} alt="Day Image" />
              <p>Date: {day.date}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListDays;

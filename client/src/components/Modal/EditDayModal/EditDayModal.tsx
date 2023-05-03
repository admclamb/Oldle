import React from "react";
import { Day } from "../../../ts/types/Day";

type Props = {
  day: Day | null;
  setDay: React.Dispatch<React.SetStateAction<Day | null>>;
};

const EditDayModal = ({ day, setDay }: Props) => {
  return (
    day && (
      <>
        <div className="modal-backdrop w-1/2 bg-slate-800 border rounded"></div>
        <article className="fixed">
          <h3>Edit Day</h3>
        </article>
      </>
    )
  );
};

export default EditDayModal;

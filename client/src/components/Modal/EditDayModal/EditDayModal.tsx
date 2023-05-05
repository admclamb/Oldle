import React, { useEffect, useState } from "react";
import { Day } from "../../../ts/types/Day";

type Props = {
  day: Day;
  setDay: React.Dispatch<React.SetStateAction<Day | null>>;
};

const EditDayModal = ({ day, setDay }: Props) => {
  const {
    picture: { _id: picture_id, title, image, date, hint, alternateImage },
    _id,
  } = day;
  console.log(day);
  const [dayEdit, setDayEdit] = useState<any>({
    title: "",
    date: "",
    hint: "",
    image: new Date(),
    alternateImage: "",
  });

  useEffect(() => {
    setDayEdit(day);
  }, [JSON.stringify(day)]);

  const changeDay = ({ target: { value, id } }) => {
    setDayEdit((curr) => {
      return { ...curr, id: value };
    });
  };
  console.log(date);
  return (
    <>
      <div className="modal-backdrop"></div>
      <article className=" left-1/2 -translate-x-1/2 max-h-[90%] top-5 w-11/12 sm:w-10/12 md:w-8/12 max-w-3xl fixed bg-slate-800 border rounded border-slate-50/[0.06] overflow-y-scroll">
        <header className="flex justify-between items-center border-b border-slate-50/[0.06] p-3">
          <h3>Edit Day</h3>
          <button
            className="px-3 py-2 border rounded border-slate-50/[0.06]"
            onClick={() => setDay(null)}
          >
            Close
          </button>
        </header>
        <section>
          <form className="p-3 flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="title" className="capitalize">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="border rounded border-slate-50/[0.06] bg-inherit brightness-90 p-2"
                placeholder="Title..."
                value={title}
                onChange={changeDay}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="datetime-local" className="capitalize">
                date
              </label>

              <input
                type="date"
                id="date"
                placeholder="Date..."
                className="border rounded border-slate-50/[0.06] bg-inherit brightness-90 p-2"
                value={date}
                onChange={changeDay}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="hint" className="capitalize">
                hint
              </label>
              <textarea
                id="hint"
                placeholder="Hint..."
                className="border rounded border-slate-50/[0.06] bg-inherit brightness-90 p-2"
                value={hint}
                rows={6}
                onChange={changeDay}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="image" className="capitalize">
                Image
              </label>
              <img src={image} />
              <button
                id="image"
                className=" border rounded border-slate-50/[0.06] bg-inherit px-3 py-2"
              >
                Choose Different Image
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="alt-image" className="capitalize">
                Alternate Image
              </label>
              <button
                id="alt-image"
                className=" border rounded border-slate-50/[0.06] bg-inherit px-3 py-2"
              >
                Choose Different Image
              </button>
            </div>
          </form>
        </section>
      </article>
    </>
  );
};

export default EditDayModal;

import React, { useEffect, useState } from "react";
import { DayApi } from "../../api/DayApi";
import { PictureApi } from "../../api/PictureApi";
import { Picture } from "../../ts/types/Picutre";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
type Props = {};

const ListPictures = (props: Props) => {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [error, setError] = useState<any>(null);
  const [page, setPage] = useState<number>(1);
  const [isOpenArray, setIsOpenArray] = useState<number[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await PictureApi.getInstance().list(`${page}`);
        console.log(response);
        setPictures(response);
      } catch (err) {
        console.error(err);
        setError(err);
      }
    })();
  }, []);

  return pictures.length > 0 ? (
    <div className="border rounded border-slate-50/[0.06] p-3">
      <h3 className="text-xl font-bold">List of Pictures</h3>
      <ul>
        {pictures.map((picture, index) => {
          const { title, image, date, hint, alternateImage, _id } = picture;
          const day = dayjs(date);
          return (
            <li
              className="border-b border-slate-50/[0.06] py-3"
              data-index={index}
              key={title + index}
            >
              <div>
                <img src={image} alt="Oldle Image of the day" />
              </div>
              <h4 className="text-lg font-semibold">{title}</h4>
              <div className="flex justify-between">
                <p>
                  <span className="font-semibold">Date:</span>{" "}
                  {day.format("DD-MM-YYYY")}
                </p>
              </div>
              <ul>
                <li>
                  <p>
                    <span className="font-semibold">Hint: </span>
                    {hint}
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Alternate Image: </p>
                  <div>
                    <img src={alternateImage} alt="No alternate image" />
                  </div>
                </li>
                <li>
                  <p>
                    <span className="font-semibold">Id: </span>
                    {_id}
                  </p>
                </li>
              </ul>
              <button className="px-3 py-2 border rounded border-slate-50/[0.06] mt-3">
                Select Image
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <div className="border rounded border-slate-50/[0.06] p-3">
      <h3 className="text-xl">List of Pictures</h3>
      <p>No Pictures can be provided</p>
    </div>
  );
};

export default ListPictures;

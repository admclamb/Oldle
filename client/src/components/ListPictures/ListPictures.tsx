import React, { useEffect, useState } from "react";
import { DayApi } from "../../api/DayApi";
import { PictureApi } from "../../api/PictureApi";
import { Picture } from "../../ts/types/Picutre";
type Props = {};

const ListPictures = (props: Props) => {
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [error, setError] = useState<any>(null);
  const [page, setPage] = useState<number>(1);
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
      <h3 className="text-xl">List of Pictures</h3>
      <ul>{}</ul>
    </div>
  ) : (
    <div className="border rounded border-slate-50/[0.06] p-3">
      <h3 className="text-xl">List of Pictures</h3>
      <p>No Pictures can be provided</p>
    </div>
  );
};

export default ListPictures;

import React, { useEffect, useState } from "react";
import { DayApi } from "../../api/DayApi";
import { PictureApi } from "../../api/PictureApi";

type Props = {};

const ListPictures = (props: Props) => {
  const [pictures, setPictures] = useState([]);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await PictureApi.getInstance().list();
        console.log(response);
        setPictures(response);
      } catch (err) {
        console.error(err);
        setError(err);
      }
    })();
  }, []);
  return (
    pictures.length > 0 && (
      <div className="border rounded border-slate-50/[0.06]">
        <h3 className="text-xl">List of Pictures</h3>
        <ul>{}</ul>
      </div>
    )
  );
};

export default ListPictures;

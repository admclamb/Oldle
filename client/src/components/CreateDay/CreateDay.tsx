import React, { useState } from 'react';
import DayForm from '../Form/DayForm/DayForm';

type Props = {};

const CreateDay = (props: Props) => {
  const [pictures, setPictures] = useState<any[]>([]);
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="border rounded border-slate-50/[0.06] p-3">
      <h3 className="text-xl mb-3">Create A Day</h3>
      <DayForm />
      <h3 className="text-xl mb-3">List of Picture from Day</h3>
      {pictures.length > 0 ? (
        <ul>
          {pictures.map((picture) => {
            <img src={picture.url} alt={picture.description} />;
          })}
        </ul>
      ) : (
        <p>No pictures have been selected...</p>
      )}
    </div>
  );
};

export default CreateDay;

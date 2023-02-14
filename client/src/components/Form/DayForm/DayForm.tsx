import React, { useState } from 'react';
import PictureUpload from './PictureUpload/PictureUpload';

type Props = {};

const DayForm = (props: Props) => {
  const [currDay, setCurrDay] = useState<string>('2018-07-22');
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const handleChange = ({ target: { value } }) => {
    setCurrDay(value);
  };

  return (
    <form className="flex flex-col gap-6 mb-3">
      <div className="flex flex-col gap-2">
        <label htmlFor="date">New Day Date</label>
        <input
          type="date"
          id="date"
          min="1823-01-01"
          max="2023-12-31"
          value={currDay}
          onChange={handleChange}
          className="bg-slate-900 border rounded border-slate-50/[0.06] p-2 brightness-90 hover:cursor-pointer"
        />
      </div>
      <PictureUpload
        selectedImages={selectedImages}
        setSelectedImages={setSelectedImages}
      />
    </form>
  );
};

export default DayForm;

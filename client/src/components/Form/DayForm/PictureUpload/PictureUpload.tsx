import React from 'react';

type Props = {};

const PictureUpload = (props: Props) => {
  return (
    <div className="flex flex-col gap-2 ">
      <label htmlFor="image-uploader">Upload Image</label>
      <input
        id="image-uploader"
        type="file"
        accept="image/jpeg, image/png, image/jpg"
        className="bg-slate-900 border rounded border-slate-50/[0.06] p-2"
      />
    </div>
  );
};

export default PictureUpload;

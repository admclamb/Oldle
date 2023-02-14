import React, { useEffect, useState } from 'react';
import ImageModal from '../../../Modal/ImageModal/ImageModal';

type Props = {
  selectedImages: File[];
  setSelectedImages: (arg0: File[]) => void;
};

const PictureUpload = ({ selectedImages, setSelectedImages }: Props) => {
  const [openedImage, setOpenedImage] = useState<File | null>();

  const handleChange = (event) => {
    if (event.target.files) {
      setSelectedImages((curr) => [...curr, event.target.files[0]]);
    }
  };

  const deleteImage = (event) => {
    event.preventDefault();
    const { id } = event.target;
    setSelectedImages((curr) => curr.filter((_, i) => i !== id));
  };

  const openImage = (event) => {
    event.preventDefault();
    const selectedImage = selectedImages[event.target.id];
    console.log(selectedImage);
    if (selectedImage) {
      setOpenedImage(URL.createObjectURL(selectedImage));
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <ImageModal image={openedImage} setImage={setOpenedImage} />
      <label htmlFor="image-uploader">Upload Image</label>
      <input
        id="image-uploader"
        type="file"
        accept="image/jpeg, image/png, image/jpg"
        className="bg-slate-900 border rounded border-slate-50/[0.06] p-2"
        onChange={handleChange}
      />
      <div className="grid grid-cols-3 gap-3">
        {selectedImages.length > 0 &&
          selectedImages.map((image, i) => {
            return (
              <div
                className="border rounded border-slate-50/[0.06] flex flex-col"
                key={i}
              >
                <div className="flex p-1">
                  <button
                    className="p-2 hover:bg-slate-800 rounded"
                    id={i + ''}
                    onClick={openImage}
                  >
                    <i
                      className="fa-solid fa-expand"
                      id={i + ''}
                      onClick={openImage}
                    ></i>
                  </button>
                  <button
                    className=" ml-auto p-2  hover:bg-slate-800 rounded"
                    id={i + ''}
                    onClick={deleteImage}
                  >
                    <i className="fa-solid fa-trash" id={i + ''}></i>
                  </button>
                </div>

                <img
                  src={URL.createObjectURL(image)}
                  alt={image.name}
                  className="my-auto"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PictureUpload;

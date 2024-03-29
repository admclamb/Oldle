import React, { useEffect, useState } from "react";
import { PictureApi } from "../../api/PictureApi";
import ImageModal from "../Modal/ImageModal/ImageModal";
type Props = {
  setError: (arg0: any) => void;
};

const CreatePicture = ({ setError }: Props) => {
  const [file, setFile] = useState<File | null>(null);
  const [date, setDate] = useState<Date>(new Date());
  const [openedImage, setOpenedImage] = useState<File | null>();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>("");
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDateChange = ({ target: { value } }) => {
    setDate(new Date(value));
  };

  const handleImageUrlChange = ({ target: { value } }) => {
    setImageUrl(value);
  };

  const submitSelectedImageUrl = (event) => {
    setSelectedImageUrl(imageUrl);
  };

  const deleteImage = () => {
    setFile(null);
  };

  const openImage = (event) => {
    event.preventDefault();
    setOpenedImage(URL.createObjectURL(file));
  };

  const uploadPicutre = async () => {
    try {
      (async () => {
        console.log(file);
        const response = await PictureApi.getInstance().create({ file, date });
        console.log(response);
      })();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="border rounded border-slate-50/[0.06] p-3 flex flex-col gap-3">
      <h3 className="text-xl mb-3">Create A Picture</h3>
      <div className="flex flex-col gap-2">
        <label htmlFor="image-uploader">Upload Image</label>
        <input
          id="image-uploader"
          type="file"
          accept="image/jpeg, image/png, image/jpg"
          className="bg-slate-900 border rounded border-slate-50/[0.06] p-2 brightness-90"
          onChange={handleFileChange}
        />
        {file && (
          <>
            <ImageModal image={openedImage} setImage={setOpenedImage} />
            <div className="border rounded border-slate-50/[0.06] flex flex-col">
              <div className="flex p-1">
                <button
                  className="p-2 hover:bg-slate-800 rounded"
                  onClick={openImage}
                >
                  <i className="fa-solid fa-expand" onClick={openImage}></i>
                </button>
                <button
                  className=" ml-auto p-2  hover:bg-slate-800 rounded"
                  onClick={deleteImage}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>

              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="my-auto"
              />
            </div>
          </>
        )}
      </div>
      <h3>OR</h3>
      <div className="flex flex-col  gap-2">
        {selectedImageUrl && (
          <ImageModal image={selectedImageUrl} setImage={setSelectedImageUrl} />
        )}
        <label htmlFor="image-url">Image URL</label>
        <input
          id="image-url"
          type="text"
          value={imageUrl}
          onChange={handleImageUrlChange}
          className="bg-slate-900 border rounded border-slate-50/[0.06] p-2 brightness-90"
        />
        <div>
          <button
            className="border rounded border-slate-50/[0.06] p-2"
            onClick={setSelectedImageUrl}
          >
            Set Selected Url
          </button>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2">
        <label htmlFor="image-uploader">Image Date</label>
        <input
          id="year"
          type="number"
          className="bg-slate-900 border rounded border-slate-50/[0.06] p-2 brightness-90"
          onChange={handleDateChange}
        />
      </div>
      <div>
        <button
          className="border rounded border-slate-50/[0.06] p-2"
          onClick={uploadPicutre}
        >
          Upload Image
        </button>
      </div>
    </div>
  );
};

export default CreatePicture;

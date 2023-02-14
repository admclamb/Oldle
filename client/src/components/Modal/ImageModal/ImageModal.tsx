import React from 'react';

type Props = {
  image: URL | string;
  setImage: (arg0: File | string) => void;
};

const ImageModal = ({ image, setImage }: Props) => {
  const closeImage = (event) => {
    event.preventDefault();
    setImage(null);
  };
  return image ? (
    <>
      <div className="modalBackdrop"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border rounded border-slate-50/[0.06] bg-slate-900">
        <img src={image} alt="Image Preview" />
        <div className="flex p-2">
          <button
            onClick={closeImage}
            className="p-2 hover:bg-slate-800 rounded ml-auto"
          >
            Close
          </button>
        </div>
      </div>
    </>
  ) : null;
};

export default ImageModal;

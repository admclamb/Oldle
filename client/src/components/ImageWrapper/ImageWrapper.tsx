import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ImageWrapper = ({ children }: Props) => {
  return <div className="image-wrapper flex justify-center">{children}</div>;
};

export default ImageWrapper;

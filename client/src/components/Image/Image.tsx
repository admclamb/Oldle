import React from 'react';

type Props = {
  url: string;
  description: string;
};

const Image = ({ url, description }: Props) => {
  return <img src={url} alt={description} />;
};

export default Image;

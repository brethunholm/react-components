/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const ImageList = (props) => {
  const images = props.images.map((image) => (
    <img src={image.urls.regular} alt="pic" />
  ));
  return <div>{images}</div>;
};

export default ImageList;

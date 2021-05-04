/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

const ImageList = (props) => {
  const images = props.images.map((image) => (
    <img src={image.urls.regular} alt="image.alt_description" />
  ));
  return <div>{images}</div>;
};

export default ImageList;

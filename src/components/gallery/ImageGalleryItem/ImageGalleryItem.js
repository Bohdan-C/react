import React from 'react';

const ImageGalleryItem = ({ data, showModal }) => (
  <li className="ImageGalleryItem">
    <img
      onClick={() => showModal(data.largeImageURL)}
      src={data.webformatURL}
      alt=""
      className="ImageGalleryItem-image"
    />
  </li>
);

export default ImageGalleryItem;

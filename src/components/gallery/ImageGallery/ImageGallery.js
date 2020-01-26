import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ data, showModal }) => (
  <div>
    <ul className="ImageGallery">
      {data.map(img => (
        <ImageGalleryItem showModal={showModal} data={img} key={img.id} />
      ))}
    </ul>
  </div>
);

export default ImageGallery;

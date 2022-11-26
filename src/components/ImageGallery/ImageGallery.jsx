import PropTypes from 'prop-types';

import style from './ImageGallery.module.css';

const ImageGallery = ({ images, imageOnClick}) => {
  return (
    <ul className={style.ImageGallery}>
      {images.map(image => (
        <li className={style.ImageGalleryItem} key={image.id}>
          <img
            className={style.image}
            src={image.webformatURL}
            alt={image.tags} 
            onClick={() => imageOnClick(image.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
    
};
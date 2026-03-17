import css from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  id,
  onImageClick,
}) => {
  return (
    <li
      onClick={() => onImageClick(largeImageURL)}
      className={css.ImageGalleryItem}
      id={id}
    >
      <img
        className={css.ImageGalleryItemImage}
        src={webformatURL}
        alt={largeImageURL}
      />
    </li>
  );
};

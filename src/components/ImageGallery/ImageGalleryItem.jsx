import css from './ImageGallery.module.css';

export const ImageGalleryItem = ({ id, tags, webformatURL, largeImageURL, openModal }) => {
    
    return (
        <li className={css.galleryItem}
            onClick={() => openModal({id, tags, largeImageURL})}
            id={id}>
            <img
                src={webformatURL}
                alt={tags}
            />
        </li>
    )
}
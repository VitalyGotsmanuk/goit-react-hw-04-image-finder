import { ImageGalleryItem } from './ImageGalleryItem';

import css from './ImageGallery.module.css';

export const ImageGallery = ({
    pictures,
    openModal
    }) => {

    return (
        <ul className={css.gallery}>
            {pictures
                .map(pictures => (
                    <ImageGalleryItem
                        key={pictures.id}
                        id={pictures.id}
                        tags = {pictures.tags}
                        webformatURL={pictures.webformatURL}
                        largeImageURL={pictures.largeImageURL}
                        openModal={openModal}
                    />
            ))}
        </ul>
    )
}
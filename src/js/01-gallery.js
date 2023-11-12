// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('beforeend', makeListItems(galleryItems));

function makeListItems(images) {
    return images.map(({ preview, original, description }) => 
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image"
                    src="${preview}"
                    alt="${description}" 
                    />
            </a>
        </li>`
    ).join('');
};

var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});

console.log(galleryItems);

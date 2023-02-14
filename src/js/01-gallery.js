// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from '/node_modules/simplelightbox/dist/simple-lightbox.modules';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryWrapEl = document.querySelector('.gallery');

galleryWrapEl.innerHTML = createGalleryImgMarkup(galleryItems);

const lightboxGallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function createGalleryImgMarkup(imgInfo) {
  return imgInfo
    .map(img => {
      return `
        <a class='gallery__item'
           href=${img.original}>
          <img
            class="gallery__image"
            src="${img.preview}"
            alt="${img.description}" />
        </a>`;
    })
    .join('');
}

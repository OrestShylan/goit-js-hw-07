import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery  = document.querySelector('.gallery');

const createGalleryMarkup = creatsImgGellery(galleryItems);

gallery.insertAdjacentHTML('beforeend', createGalleryMarkup);

function creatsImgGellery(galleryItems){
    return galleryItems.map(({preview, original, description}) => {
        return  `
        <a class="gallery__item" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    `;
}).join( ' ');
    }


    var lightbox = new SimpleLightbox('.gallery a', { 
        captions: true,
        captionDelay: 250,
        captionsData: 'alt',
     });


import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


onst gallery  = document.querySelector('.gallery');

const galleryMarkup = creatsImgGellery(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function creatsImgGellery(galleryItems){
    return galleryItems.map(({preview, original, description}) => {
        return  `
        <div class="gallery__item"> <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a> 
        </div>
    `;
}).join( ' ');
    }

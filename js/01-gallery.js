import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery  = document.querySelector('.gallery');
const galleryMarkup = creatsImgGellery(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);
gallery.addEventListener('click', onImageClick);


function creatsImgGellery(array){
    return array.map(({preview, original, description}) => {
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





    function onImageClick(evt){

        evt.preventDefault();

        
    
    const originalImg = evt.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${originalImg}">`)
    console.log(originalImg);

instance.show()

    }



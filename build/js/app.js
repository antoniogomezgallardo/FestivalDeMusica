document.addEventListener('DOMContentLoaded', function () {
    addGaleria();
})

function addGaleria() {

    const divGaleria = document.querySelector('.contenido-galeria')
    const NUMERO_DE_FOTOS = 16;

    for (let i = 1; i <= NUMERO_DE_FOTOS; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `src/gallery/full/${i}.jpg`
        imagen.alt = 'Imagen de la galeria'

        divGaleria.appendChild(imagen)
    }



}
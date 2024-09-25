document.addEventListener('DOMContentLoaded', function () {
    barraNavegacionFija();
    insertarGaleria();
    resaltarNavLink();
})

function insertarGaleria() {

    const divGaleria = document.querySelector('.contenido-galeria')
    const NUMERO_DE_FOTOS = 16;

    for (let i = 1; i <= NUMERO_DE_FOTOS; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `src/gallery/full/${i}.jpg`
        imagen.alt = 'Imagen de la galeria'

        //Event handler
        imagen.onclick = function () {
            mostrarModal(i)
        }

        divGaleria.appendChild(imagen)
    }

}

function mostrarModal(i) {

    // Crear Modal
    const divModal = document.createElement('DIV');
    divModal.classList.add('modal')

    // Añadir imagen a la modal
    const imagen = document.createElement('IMG')
    imagen.src = `src/gallery/full/${i}.jpg`
    imagen.alt = 'Imagen de la galeria'

    divModal.appendChild(imagen)

    // Añadir Boton para cerrar modal

    const button = document.createElement('button')
    button.textContent = 'X'

    divModal.appendChild(button)

    // Agregarlo al HTML
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden')
    body.appendChild(divModal)

    // Cerrar modal
    divModal.onclick = function () {
        cerrarModal();
    }

}

function cerrarModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('fadeOut')


    setTimeout(() => {
        modal?.remove()
        const body = document.querySelector('body');
        body.classList.remove('overflow-hidden')
    }, 500);

}

function barraNavegacionFija() {
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.contenido-festival')

    document.addEventListener('scroll', function () {
        if (sobreFestival.getBoundingClientRect().bottom < 1)
            header.classList.add('fixed')
        else
            header.classList.remove('fixed')
    })
}

function resaltarNavLink() {
    document.addEventListener('scroll', function () {

        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion a')

        let actual = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight

            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                actual = section.id;
            }

        })

        navLinks.forEach(link => {
            link.classList.remove('active')
            if(link.getAttribute('href') === '#'+ actual){
                link.classList.add('active')
            }
        })
    })

}
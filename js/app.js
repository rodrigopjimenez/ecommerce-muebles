//Selecciono el div con el id modal-imagen
const modalImagen = document.querySelector('#modal-imagen');

if(modalImagen){
    //Codigo para dar clic sobre la imagen y que se abra y agregue al .modal-body
modalImagen.addEventListener('show.bs.modal',function(event){ // show.bs.modal es parte de Bootstrap se puede ver en la consola al buscar Bootstrap
    const enlace = event.relatedTarget;
    const rutaImagen = enlace.getAttribute('data-bs-imagen'); //data-bs-img es el atributo personalizado de mis img para ponerles la ruta de la imagen

    //Construir la imagen
    const imagen = document.createElement('IMG');// Va en mayuscula
    imagen.src = `img/${rutaImagen}.jpg`; //Ojo con las comillas para combinar texto con variables
    imagen.classList.add('img-fluid');
    imagen.alt = 'Imagen Galeria';

    const contenidoModal = document.querySelector('.modal-body');
    contenidoModal.appendChild(imagen);
})

//Codigo para limpiar el body del modal y no se agreguen imagenes
modalImagen.addEventListener('hidden.bs.modal',function(){ //hidden.bs.modal es un evento de Bootstrap ya programado
    const contenidoModal = document.querySelector('.modal-body');
    contenidoModal.textContent = '';
})
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


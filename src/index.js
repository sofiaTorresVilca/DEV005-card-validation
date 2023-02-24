import validator from './validator.js';
// Declarando  mis variables
const nombre = document.getElementById('nombre');
const cardNumber = document.getElementById('cardNumber');
const btn = document.getElementById('btn');
const texto = document.getElementById('texto');
const texto2 = document.getElementById('texto2');
const imagen = document.getElementById('imagen');
const mascaraContent = document.getElementById('contenedorMascara');
const agregar = document.getElementById('textoMascara');


// Declarando mi evento
btn.addEventListener('click', validate);


//Declarando mi funcion y sus condiciones
function validate() {
  const valorNombre = nombre.value;
  const valorNumero = cardNumber.value;
  const luhm = validator.isValid(valorNumero);
  const mostrarMascara  = validator.maskify(valorNumero);


  //Condicion para el input del nombre
  if (valorNombre === '') {   
    texto2.innerHTML = ' Este campo es obligatorio'
    nombre.style.border = '1px solid red'       
      
  } else {
    texto2.innerHTML = '';
    nombre.style.border = '1px solid green'  
  }


  //Condicion para el input de la tarjeta
  if (valorNumero === '') {
    texto.innerHTML = ' Este campo es obligatorio'
    cardNumber.style.border = '1px solid red'
      
  }else if(luhm) { //Aqui validamos si cumple el algoritmo 
    texto.innerHTML = 'Tarjeta válida'
    cardNumber.style.border = '1px solid green'


  }else if (luhm === false && valorNumero.length < 5 ) {
    texto.innerHTML = ' Error de validacion'
    cardNumber.style.border = '1px solid red'
    agregar.innerHTML = valorNumero;

  } else {
    texto.innerHTML = ' Error de validacion'
    cardNumber.style.border = '1px solid red'  
  }
 
  if (valorNombre !=='' && valorNumero !== '') {
    mostrarMascara;
    agregar.innerHTML = mostrarMascara;
    imagen.style.display = 'none';
    mascaraContent.style.display = 'grid';
  } 
}


// console.log(validator);
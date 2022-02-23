const formulario = document.querySelector('#formulario');
const textInput = document.querySelector('#textInput');
const textComent = document.querySelector('#textComent');
let texts = [];

formulario.addEventListener('submit', e =>{
   e.preventDefault();
   texts = textInput.value.split(' ');
   while(textComent.firstElementChild){
    textComent.removeChild(textComent.firstElementChild)}
   const cantidad = document.createElement('p');
   cantidad.innerHTML=`La cantidad de palabras de tu frase es: ${texts.length}`
   textComent.append(cantidad);
   formulario.reset();
});
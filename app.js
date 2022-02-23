const formulario = document.querySelector('#formulario');
const textInput = document.querySelector('#textInput');
const textComent = document.querySelector('#textComent');


formulario.addEventListener('submit', e =>{
   e.preventDefault();
   const palabra = document.createElement('p');
   if(textInput.value.length > 8){
       palabra.classList.add('resaltar');
   }
   palabra.innerHTML=`${textInput.value}`
   textComent.append(palabra);
   formulario.reset();
});
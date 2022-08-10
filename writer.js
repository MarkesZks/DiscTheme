function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ''
  textoArray.forEach((letra,i) => {
setTimeout(()=> elemento.innerHTML += letra,75 * i);
})
}

const titulo = document.querySelector('h1')
const paragrafo = document.querySelector('#writer-p')
typeWrite(titulo);
typeWriteParagrafo(paragrafo);

function typeWriteParagrafo(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ''
  textoArray.forEach((letra,i) => {
setTimeout(()=> elemento.innerHTML += letra, 45 * i);
})
}
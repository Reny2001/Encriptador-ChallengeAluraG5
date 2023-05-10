const textArea = document.querySelector(".ingresarTexto");
const mensaje = document.querySelector(".textoDecodificado");
const copiar = document.querySelector(".copiar");

function encriptar(stringEncriptado) {
  const matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  
  stringEncriptado = stringEncriptado.toLowerCase();
  
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  
  return stringEncriptado;
}

function botonEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
  copiar.style.display = "inline-block";
}

function desencriptar(stringDesencriptado) {
  const matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes(matrizCodigo[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  
  return stringDesencriptado;
}

function botonDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensaje.value = textoDesencriptado;
  textArea.value = "";
  copiar.style.display = "inline-block";
}

function copiarTexto() {
  var textarea = document.getElementById('miTextarea');
  textarea.select();

  var range = document.createRange();
  range.selectNodeContents(textarea);

  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  navigator.clipboard.writeText(textarea.value)
    .then(function() {
      console.log('Texto copiado al portapapeles');
      mostrarMensaje("Texto Copiado");
    })
    .catch(function(error) {
      console.error('Error al copiar el texto: ', error);
    });
}

const mensajeElement = document.getElementById('mensaje');

function mostrarMensaje(mensaje) {
  mensajeElement.innerText = mensaje;
  mensajeElement.classList.add('mensajeVisible');

  setTimeout(function() {
    mensajeElement.classList.remove('mensajeVisible');
  }, 3000);
}

let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 20;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento)
  elementoHTML.innerHTML = texto
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}! 🎉🎉`)
    document.querySelector('#reiniciar').removeAttribute('disabled')


  } else {

    // El usuario no acertó

    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'El numero secreto es menor')
    } else {
      asignarTextoElemento('p', 'El numero secreto es mayor')
    }
    intentos++
    limpiarCaja();
  }

  return
}


function limpiarCaja() {
  let valorCaja = document.querySelector('#valorUsuario')
  valorCaja.value = ''
}


function generarNumeroSecreo() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado)
  console.log(listaDeNumerosSorteados)
  //Si ya sorteamos todos los numeros
  if (listaDeNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles')
  }

  //Si el numero generado esta incluido en la lista
  if (listaDeNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreo();
  } else {
    listaDeNumerosSorteados.push(numeroGenerado)
    return numeroGenerado
  }

}

function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del numero Secreto');
  asignarTextoElemento('p', `Indica un numero del 1 al 10 ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreo();
  intentos = 1

}


function reiniciarJuego() {
  //limpiar la caja
  limpiarCaja();
  //indicar mensaje de intervalo de numeros
  //generar el numero aleatorio
  //inicializar el numero de intentos
  condicionesIniciales();
  //deshabilitar  el boton de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled', 'true')

}

condicionesIniciales();



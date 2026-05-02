// Ejercicio20.js — lógica principal del ejercicio 20
import {validarCampos,construirMensaje,obtenerValor} from "../js/Funciones20.js";

export const manejarEnvio = () => {
  const nombre   = obtenerValor("#nombre");
  const apellido = obtenerValor("#apellido");
  const libreta  = obtenerValor("#libreta");

  if (!validarCampos({ nombre, apellido, libreta })) {
    alert("Por favor, completá todos los campos antes de continuar.");
    return;
  }

  const mensaje = construirMensaje({ nombre, apellido, libreta });
  alert(mensaje);
};

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector("#datos");
  boton.addEventListener("click", manejarEnvio);
});
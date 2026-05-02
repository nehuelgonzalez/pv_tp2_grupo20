import * as obelisko from "/pv_tp2_grupo20/js/Funciones21.js";
// import { seleccionarCapital } from "./funcion21.js";
// import { seleccionarCapitalPrueba } from "./funcion21.js";
let oyentePais = document.getElementById("pais");
oyentePais.addEventListener("change", () => {
    // seleccionarCapital();
    obelisko.seleccionarCapitalPrueba();


});

let botonEstilo = document.getElementById("botonestilo");
botonEstilo.addEventListener("click", () => {
    obelisko.cambiarEstilo();
});
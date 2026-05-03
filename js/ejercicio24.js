import { imagenes, actualizarImagen, dispararAnimacion } from "./Funciones24.js";
const cajas = {
    //clavves               //estos son elmentos id del html
  "input-lenguaje1": document.querySelector("#caja1"),
  "input-lenguaje2": document.querySelector("#caja2"),
  "input-lenguaje3": document.querySelector("#caja3")
}

const inputs = document.querySelectorAll("input");
 
inputs.forEach((index) => {                     //ahi dos funciones
    index.addEventListener("change",() => { 
    
        console.log("value:", index.value)
        console.log("name:", index.name)

        const caja = cajas[index.name]       // agarra el NOMBRE de la caja del grupo 
        actualizarImagen(caja, imagenes[index.value]) // se elige como parametro a la caja con name="" y al value="" 
        dispararAnimacion(caja)
    });

})


export  const seleccionarCapital = () => {
    
    let oyentePais = document.getElementById("pais");
    
    let capital = document.getElementById("capital");

    // capital.innerHTML = "";
        let opcionSeleccionada = oyentePais.value;
        if (opcionSeleccionada == "argentina") {
            // capital.selectedIndex = 1;
            // capital.innerHTML += "<option selected>Buenos Aires</option>";
            capital.options[1].selected = true;
        } else if (opcionSeleccionada === "brasil") {
            capital.selectedIndex = 2;
            // capital.innerHTML += "<option selected>Brasilia</option>";
        } else if (opcionSeleccionada === "uruguay") {
            capital.selectedIndex = 3;
            // capital.innerHTML += "<option value='montevideo' disabled>Montevideo</option>";
        } else if (opcionSeleccionada === "colombia") {
            capital.selectedIndex = 4;
            // capital.innerHTML += "<option value='bogota' disabled>Bogota</option>";
        } else if (opcionSeleccionada === "paraguay") {
            capital.selectedIndex = 5;
            // capital.innerHTML += "<option value='asuncion' disabled>Asunción</option>";
        } else if (opcionSeleccionada === "ecuador") {
            capital.selectedIndex = 6;
            // capital.innerHTML += "<option value='quito' disabled>Quito</option>";
        }
        

}

export  const seleccionarCapitalPrueba = () => {
    
    let oyentePais = document.getElementById("pais");
    
    let capital = document.getElementById("capital");

    let opcionSeleccionada = oyentePais.value;

    let arregloCapitales = Array.from(capital.options).map(goku => goku.value);
    console.log(arregloCapitales);
    let ubicacion = arregloCapitales.indexOf(opcionSeleccionada);
    capital.selectedIndex = ubicacion;
}

export let cambiarEstilo = () => {
  const tema = document.getElementById("tema");

  if (tema.href.includes("/pv_tp2_grupo20/css/ejercicio21-tema2.css")) {
    tema.href = "/pv_tp2_grupo20/css/ejercicio21-tema1.css";
  } else {
    tema.href = "/pv_tp2_grupo20/css/ejercicio21-tema2.css";
  }
}
/*
if (tema.getAttribute("href") === "/pv_tp2_grupo20/css/ejercicio21-tema1.css") {
  tema.setAttribute("href", "/pv_tp2_grupo20/css/ejercicio21-tema2.css");
} else {
  tema.setAttribute("href", "/pv_tp2_grupo20/css/ejercicioprueba1.css");
}


*/ 
let boton = document.getElementById("btn");

let colores = ["red", "green", "lightblue"];

boton.addEventListener("click", () => {
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;

    console.log("Color cambiado a: " + colorAleatorio);
});
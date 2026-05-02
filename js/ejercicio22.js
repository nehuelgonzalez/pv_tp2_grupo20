    const leerInput=document.getElementById('input_text');
    const parrafo=document.getElementById('parrafo_text_22');
const AgregarParrafo=()=>{
    parrafo.textContent=leerInput.value;
}
    leerInput.addEventListener("input",AgregarParrafo)


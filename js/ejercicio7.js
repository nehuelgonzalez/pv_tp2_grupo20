/*Ejercicio7  Mostrar los nombres del array y obtener el nombre más largo del array nombres.  
Las cadenas de textos (String) son listas de caracteres y las listas tienen un largo (length) 
que indica su tamaño. */
const nombres=['Fernando', 'Nicolás','Pedro','leonel','Martin','Pablo'];
let contador_caracteres=nombres[0].length;
let indice_contador=0;
for(let i=0; i<nombres.length; i++){
    console.log(`El nombre es: ${nombres[i]}`);
    if(contador_caracteres<nombres[i].length){
        contador_caracteres=nombres[i].length;
        indice_contador=i;

    }
}
console.log(`el nombre ${nombres[indice_contador]} tiene ${contador_caracteres} caracteres`);
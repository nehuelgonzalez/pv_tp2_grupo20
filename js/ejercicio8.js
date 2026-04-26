const notas = [5,4,9,7,8,10,2,4,6,1]

//Recorrer y Mostrar cada nota
console.log(`Las notas son: `);
for (let i = 0; i < notas.length; i++) {
    console.log(`${notas[i]}`);
}

//Mostrar Notas Aprobadas
console.log(`Las notas aprobadas son:`);
for (let i = 0; i < notas.length; i++) {
    if (notas[i]>=6){
        console.log(`${notas[i]}`);
    }
}

//Mostrar Notas Desaprobadas
console.log(`Las notas desaprobadas son:`);
for (let i = 0; i < notas.length; i++) {
    if (notas[i]<6){
        console.log(`${notas[i]}`);
    }
}

//Calculo de Promedio
let suma = 0;
for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
}
const promedio = suma / notas.length;
console.log(`Promedio: ${promedio}`);

//Cantidad de Notas Aprobadas
let contador = 0;
for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 6) {
        contador++;
    }
}
console.log(`Cantidad de aprobadas: ${contador}`);
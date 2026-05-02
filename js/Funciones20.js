export const obtenerValor = (selector) => {
  const elemento = document.querySelector(selector);
  if (elemento !== null) {
    return elemento.value.trim();
} else {
    return "";
}
};

export const validarCampos = ({ nombre, apellido, libreta }) =>
  nombre !== "" && apellido !== "" && libreta !== "";

export const construirMensaje = ({ nombre, apellido, libreta }) =>
  "Los datos ingresados son:\n\n" +
  `Nombre: ${nombre}\n` +
  `Apellido: ${apellido}\n` +
  `Libreta Universitaria: ${libreta}`;

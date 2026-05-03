export const imagenes = {
  //clave     //elemento ruta de imagen
    "c++": "../js/img_de_24/cppimage.jpg",
    "rust": "../js/img_de_24/rustimage.jpg",
    "phyton": "../js/img_de_24/phiton.png",
    "r": "../js/img_de_24/Rimage.jpg",
    "sw": "../js/img_de_24/Swiftimage.jpg",
    "Kot": "../js/img_de_24/kotlinimage.jpg"
}


export function actualizarImagen(caja, src) {
  const img = caja.querySelector("img")// aca se busca al selecto img del html Pero USANDO un id que en este caso es caja PERO caja guardA UN name="identificador-atributo" esto SI es posible
  img.src = src;
}

export function dispararAnimacion(caja) {
  caja.classList.remove("animacion")//animacion es una propiedad de css
  void caja.offsetWidth
  caja.classList.add("animacion")/** se le agrega una clase implicitamente NO se ve pero si existe en caja */
  caja.style.display = "block"
}

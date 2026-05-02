let input = document.getElementById('texto');
let parrafo = document.getElementById('parrafo');

input.addEventListener('input', () => {
    parrafo.textContent = input.value;
    if (input.value.length > 20) {
        parrafo.style.backgroundColor = 'lightcoral';
    } else {
        parrafo.style.backgroundColor = 'transparent';
    }
});
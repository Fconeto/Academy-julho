
function aumentar(frutaNome) {
    const fruta = document.getElementById(frutaNome);

    const valor = +fruta.textContent;

    fruta.innerText = valor + 1;
}

function reduzir(frutaNome) {
    const fruta = document.getElementById(frutaNome);
    
    const valor = +fruta.textContent;

    fruta.innerText = valor - 1;
}
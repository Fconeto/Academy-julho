
    const cardCount = 5;
    const productCardWith = 220;
    const listContainer = document.querySelector(".lista-produtos");

/**
 * Gera na lista-produtos, elementos divs fantasmas de acordo a nescessidade.
*/
function addHiddenCards(){
    const cardsPerRow = Math.floor(
        listContainer.getBoundingClientRect().width / 220
    );
    const cardsToAdd = cardsPerRow - (cardCount % cardsPerRow);
    for(let i = 0; i < cardsToAdd; i++){
        const cardToAdd = document.createElement("div");

        cardToAdd.classList.add("produto");
        cardToAdd.classList.add("hidden");

        listContainer.appendChild(cardToAdd);
    }
}

/**
 * Remove os elementos div fantasmas gerados com a classe 'hidden'
 */
 function removeHiddenCards(){
    const hiddenCards = document.querySelectorAll(".hidden");

    for(let i = 0; i < hiddenCards.length; i++){
        const hiddenCard = hiddenCards[i];
        hiddenCard.remove();
    }
}

addHiddenCards();

/**
 * 
 */
function resizeHandler(){
    removeHiddenCards();
    addHiddenCards();
}

window.onresize = () => resizeHandlerWithDebounce(300);

let timer;

/**
 * Só será executar o throttling ao decorrer de um determinado periodo de tempo, por exemplo 500 milesegundos.
 * Qualquer evento mais rapido que o tempo determinado será ignorado, ou seja as chamadas a resizeHandler serão ignoradas.
 * 
 * A ideia que tive foi que com o timer criado, nós não reiniciamos o timer.
 */
function resizeHandlerWithTrottling(debounceTime){
    timer = setTimeout(() => {
        removeHiddenCards();
        addHiddenCards();
        timer = null;
    }, debounceTime);
}

/**
 * Será executado o debounce se passar o tempo sem ter um novo evento.
 * As chamadas ao resizeHandler serão executadas após um período de tempo sem ocorrencias de eventos
 */

function resizeHandlerWithDebounce(debounceTime){
    if(timer){
        clearTimeout(timer);
    }
    
    timer = setTimeout(() => {
        removeHiddenCards();
        addHiddenCards();
        timer = null;
    }, debounceTime);
}
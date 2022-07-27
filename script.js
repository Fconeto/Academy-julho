
    const cardCount = 5;
    const productCardWith = 220;
    const listContainer = document.querySelector(".lista-produtos");

// Cria divs fantasmas para preencher os espaços vazios
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

addHiddenCards();

// Remove as divs fantasmas criadas anteriormente caso aja alteração no tamaho da tela

 function removeHiddenCards(){
    const hiddenCards = document.querySelectorAll(".hidden");

    for(let i = 0; i < hiddenCards.length; i++){
        const hiddenCard = hiddenCards[i];
        hiddenCard.remove();
    }
}

function resizeHandler(){
    removeHiddenCards();
    addHiddenCards();
}

window.onresize = () => resizeHandlerWithThrottling(5000);

let timer;

// O Throttling vai executar a função apenas depois de ter passado x tempo que houver o evento resize
// Por exemplo: eu defini 1000 ms (1 segundo) para a execução do Throttling, portanto a partir do momento que eu
// modificar o tamanho da minha tela ele vai esperar 1 segundo para poder executar a função novamente quando eu
// der outro resize

function resizeHandlerWithThrottling(throttleTime){
    if(!timer){
        timer = setTimeout(() => {
            timer = null;
        }, throttleTime);
        removeHiddenCards();
        addHiddenCards();
        console.log("Teste");
    }
}

// O debounce é executado após passar x tempo sem ter um novo evento, com isso após
// modificar o tamanho da tela e parar a função será executada com base no último valor
// do resize

// function resizeHandlerWithDebounce(debounceTime){
//     if(timer){
//         clearTimeout(timer);
//     }
    
//     timer = setTimeout(() => {
//         removeHiddenCards();
//         addHiddenCards();
//         timer = null;
//     }, debounceTime);
// }
let pokemons = [];
let link = "https://pokeapi.co/api/v2/pokemon";
let pokemonsDaTela;

obterPokemons();
const listaPokemons = document.getElementById("lista-pokemons");

setInterval(() => {
  if(pokemons != pokemonsDaTela) {
    listaPokemons.innerHTML = "";
    pokemons.forEach(({nome}) => {
      const item = document.createElement("li");
      item.innerText = nome;
      listaPokemons.appendChild(item);
    })
    pokemonsDaTela = pokemons;
  }
},500)

async function obterPokemons() {
  const resultado = await fetch(link);
   
  const loading = document.createElement("li");
  loading.innerText = "Loading...";
  loading.id = "loading";
  listaPokemons.appendChild(loading);

  try {
    const { count, next, previus, results } = await resultado.json();
    console.log(next);
    document.getElementById("count").innerText = `Count: ${count}`;
    pokemons = [...pokemons,...results.map(({name}) => ({nome: name}))];
    link = next;
  } catch {
    alert("deu erro!");
  } finally {
    loading.remove();
  }
}

function limparPokemons() {
  pokemons = [];
  link = "https://pokeapi.co/api/v2/pokemon";
}
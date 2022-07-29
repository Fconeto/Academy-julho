let link = "https://pokeapi.co/api/v2/pokemon";
obterPokemons();

async function obterPokemons() {
  const listaPokemons = document.getElementById("lista-pokemons");
  console.log(link);
  const resultado = await fetch(link);
   
  const loading = document.createElement("li");
  loading.innerText = "Loading...";
  loading.id = "loading";
  listaPokemons.appendChild(loading);

  try {
    const { count, next, results } = await resultado.json();
    console.log(next);
    document.getElementById("count").innerText = `Count: ${count}`;
    results.forEach(async ({ name, url }) => {
      const detalhes = await fetch(url);
      const { types } = await detalhes.json();
      const [
        {
          type: { name: nameTipo },
        },
      ] = types;
      const item = document.createElement("li");
      item.innerText = `${name} - ${nameTipo}`;
      listaPokemons.appendChild(item);
      link = next;
    });
  } catch {
    alert("deu erro!");
  } finally {
    loading.remove();
  }
}
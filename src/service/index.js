import axios from "axios";

class requestdata {
  //busca a lista de Pokémon - nome e ID
  async fetchReposity(page) {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=30`
      );
      return response.data.results.map((pokemon, index) => ({
        id: page + index + 1,
        name: pokemon.name,
      }));
    } catch (err) {
      console.error("Erro ao buscar lista de Pokémon:", err);
    }
  }

  //buscar detalhes Pokémon
  async fetchReposityDetalis(id) {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      const data = response.data;

      return {
        id: data.id,
        name: data.name,
        types: data.types.map((type) => type.type.name),
        moves: data.moves.slice(0, 5).map((move) => move.move.name),
        sprites: {
          front: data.sprites.front_default,
          shinyFront: data.sprites.front_shiny,
        },
        games: data.game_indices.map((game) => game.version.name),
      };
    } catch (err) {
      console.error("Erro ao buscar detalhes do Pokémon:", err);
    }
  }

  //busca evolução
  async fetchEvolutionChain(id) {
    try {
      const speciesRes = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );
      const evoUrl = speciesRes.data.evolution_chain.url;
      const evoRes = await axios.get(evoUrl);

      const chain = [];
      let current = evoRes.data.chain;
      while (current) {
        chain.push(current.species.name);
        current = current.evolves_to[0];
      }

      return chain;
    } catch (err) {
      console.error("Erro ao buscar cadeia de evolução:", err);
    }
  }
}

export default requestdata;

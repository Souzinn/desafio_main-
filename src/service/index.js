import axios from "axios";

class requestdata {
  async fetchReposity(page) {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=30`
      );
      const data = response.data;
      return data;
    } catch (err) {
      console.error(err);
    }
  }
  async fetchReposityDetalis(id) {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      const data = response.data;
      return data;
    } catch (err) {
      console.error(err);
    }
  }
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
      console.error("Erro na evolução:", err);
    }
  }
}

export default requestdata;

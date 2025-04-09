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
}

export default requestdata;

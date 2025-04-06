import axios from "axios";

class requestdata {
  async fetchReposity(page) {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`
      );
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  }
}

const request = new requestdata();
request.fetchReposity(2); //test
export default requestdata;

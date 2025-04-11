# Serviços/API

Os serviços para chamadas à API estão localizados em `src/service/index.js`. Eles utilizam a biblioteca **Axios** para consumir a [PokéAPI](https://pokeapi.co/).

### Principais Métodos

- `fetchPokemonList(offset)`: Busca a lista de Pokémon com base no offset para paginação.
- `fetchPokemonDetails(id)`: Busca detalhes de um Pokémon específico.
- `fetchEvolutionChain(id)`: Busca a cadeia de evolução de um Pokémon.

Os serviços encapsulam a lógica de comunicação com a API, garantindo que os componentes e a store não precisem lidar diretamente com requisições HTTP.
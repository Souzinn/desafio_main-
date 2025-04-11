# Store Vuex

O gerenciamento de estado é feito com **Vuex**. A store está configurada em `src/store/modules/pokemon.js`.

### Estrutura

- **State**:
  - `pokemonsList`: Lista de Pokémon carregados.
  - `pokemonDetails`: Detalhes dos Pokémon.
  - `offset`: Controle de paginação.

- **Mutations**:
  - `incrementOffset`: Incrementa o offset para paginação.
  - `setPokemonsList`: Define a lista de Pokémon.
  - `setPokemonDetails`: Define os detalhes de um Pokémon.

- **Actions**:
  - `loadMorePokemons`: Carrega mais Pokémon com base no offset.
  - `fetchPokemonDetails`: Busca detalhes de um Pokémon específico.

### Fluxo de Dados

1. O componente despacha uma ação para a store.
2. A store realiza a chamada à API e atualiza o estado global.
3. Os componentes consomem o estado atualizado e reagem automaticamente.
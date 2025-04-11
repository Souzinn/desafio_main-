# Rotas

As rotas da aplicação são configuradas no arquivo `src/router/index.js`. Abaixo estão as principais rotas:

- `/`: Página inicial com introdução à Pokédex.
- `/pokemons`: Página principal com listagem e filtros de Pokémon.
- `/pokemons/:id`: Página de detalhes de um Pokémon específico.

O roteador utiliza o `createRouter` do Vue Router com o modo de histórico (`createWebHistory`).
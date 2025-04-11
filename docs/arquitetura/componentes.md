# Componentes

Os componentes são organizados em pastas para facilitar a reutilização e manutenção. Abaixo estão os principais componentes e suas responsabilidades:

- **`filtersPokemon.vue`**:
  - Permite filtrar Pokémon por nome, tipo ou ID.
  - Emite eventos para atualizar a lista de Pokémon.

- **`listPokemon.vue`**:
  - Exibe a lista de Pokémon com paginação infinita.
  - Consome o estado global da store.

- **`cardPokemon.vue`**:
  - Exibe informações básicas de um Pokémon, como nome, ID e sprite.

- **`modalPokemon.vue`**:
  - Modal que exibe detalhes completos de um Pokémon, incluindo tipos, habilidades e cadeia de evolução.

Os componentes seguem o padrão de composição do Vue 3, utilizando `script setup` para simplicidade e clareza.
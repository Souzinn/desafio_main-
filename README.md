# 📘 Pokédex - Projeto com Vue 3, Vuex e Vite

Este projeto é uma Pokédex moderna desenvolvida com Vue 3 e Vite, que permite buscar, filtrar e visualizar detalhes de Pokémon consumindo dados da PokéAPI. A arquitetura é modular e otimizada para performance e escalabilidade.

## 📐 Arquitetura

A aplicação segue uma arquitetura baseada em componentes reutilizáveis, separação de responsabilidades e carregamento sob demanda (lazy loading). A estrutura está organizada da seguinte forma:

```
src/
├── assets/               # Imagens e arquivos estáticos
├── components/           # Componentes reutilizáveis (List, Filter)
    ├── components/       # Componentes reutilizáveis (CardPokemon, Modal)
├── composables/          # Lógicas reutilizáveis (Filter, InfiniteScroll, Store)
├── router/               # Configuração do Vue Router
├── services/             # Comunicação com a PokéAPI
├── store/                # Vuex centralizado em um único arquivo
├── views/                # Páginas principais (Main, PokemonDetails)
├── test/                 # Testes
├── App.vue               # Componente raiz
├── main.js               # Ponto de entrada
```

Além disso, foi configurado CI básico com **GitHub Actions** para validação contínua do projeto.

## 🧪 Testes

- O projeto utiliza **Vitest** para testes unitários de funções e composables.

## ⚙️ Funcionalidades

- Listagem inicial com nome, tipos e ID dos Pokémon
- Detalhamento sob demanda (sprites, tipos, movimentos, evolução, games)
- Filtros por nome, ID e tipo
- Responsividade com **Bootstrap**
- Publicação via **Vercel**

## 🌿 Branches

O fluxo de desenvolvimento foi organizado da seguinte maneira:

- `main` – Branch principal com código pronto para produção
- `chore/full-refactor/` – Refatoração completa do projeto
- `feat/filter/` – Implementação do filtro
- `feat/pokemon-list/` – Implementação da tela de listagem

Commits seguem um padrão com emojis para indicar o tipo:

| Emoji | Tipo       | Exemplo                     |
|-------|------------|-----------------------------|
| ✨     | Feature    | `✨ add type filter`         |
| 🐛     | Bugfix     | `🐛 fix filter reset`         |
| 📝     | Docs       | `📝 update README`            |
| ♻️     | Refactor   | `♻️ refactor card component` |
| ✅     | Test       | `✅ add tests to composables`|

## ⏱️ Tempo investido

| Tarefa                                | Tempo Estimado |
|--------------------------------------|----------------|
| Estrutura inicial do projeto         | 2h             |
| Integração com PokéAPI               | 5,3h           |
| Componentes e layout responsivo      | 4h             |
| Filtros por nome, ID e tipo          | 5h             |
| Detalhamento sob demanda             | 3h             |
| Escrita de testes com Vitest         | 2h             |
| Configuração de CI com GitHub Actions| 1h             |
| Documentação e organização final     | 2h             |
| **Total aproximado**                 | **25h**        |

## 🔗 Publicação

A Pokédex está publicada na **Vercel** e acessível via link:

👉 [Link da aplicação](https://desafio-main.vercel.app/)

---

Desenvolvido por Souzinn
```
import { action, map } from "nanostores";
import type { Pokemon } from "../models/pokemon";

export const pokemonStore = map<Pokemon[]>([]);

export const pokemonSearchStore = map<Pokemon[]>([]);

export const searchPokemon = action(
  pokemonStore,
  "searchPokemon",
  (store, filter) => {
    pokemonSearchStore.set(
      store
        .get()
        .filter((pokemon) =>
          pokemon.name.french
            .toLowerCase()
            .includes(filter.target.value.toLowerCase())
        )
    );
  }
);

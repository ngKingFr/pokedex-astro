import React from "react";
import type { Pokemon } from "../models/pokemon";
import { getImgPokemon } from "../services/pokedex";
import { SearchBar } from "../components/SearchBar";
import { useStore } from "@nanostores/react";
import { pokemonSearchStore, pokemonStore } from "../stores/pokemon.store";

export const Home = ({ pokemons }: { pokemons: Pokemon[] }) => {
  let storeSearchPokemon = useStore(pokemonSearchStore);
  pokemonStore.set(pokemons);

  if (storeSearchPokemon.length === 0) {
    storeSearchPokemon = pokemons;
  }

  return (
    <main
      className="m-auto p-6"
      style={{
        maxWidth: "60ch",
      }}
    >
      <SearchBar />
      <ul
        role="list"
        className="link-card-grid grid gap-4 p-0"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(24ch, 1fr))",
        }}
      >
        {storeSearchPokemon &&
          storeSearchPokemon.map((pokemon: Pokemon) => (
            <li
              key={pokemon.id}
              className="LinkCard flex flex-col justify-center items-center max-w-max p-1 bg-white rounded-lg hover:bg-green-100 hover:font-bold"
            >
              <a
                className="w-full no-underline p-4 rounded-md bg-white"
                href={`/pokemon/${pokemon.id}`}
              >
                <h2 className="m-0 text-xl">{`${pokemon.name.french}`}</h2>

                <img
                  alt={pokemon.name.french}
                  width="200"
                  height="200"
                  src={getImgPokemon(+pokemon.id)}
                  decoding="async"
                  loading="lazy"
                />
                <p
                  className="mt-2 mb-0"
                  style={{
                    color: "#444",
                  }}
                >
                  Type: {pokemon.type}
                </p>
              </a>
            </li>
          ))}
      </ul>
    </main>
  );
};

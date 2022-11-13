import { SetStateAction, useEffect, useState } from "react";
import type { Pokemon } from "../models/pokemon";

const UseSearchPokemon = (pokemons: Pokemon[], initState = "") => {
  const [searchTerm, setSearchTerm] = useState(initState);
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const results = pokemons.filter((pokemon) =>
      pokemon.name.french.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return { searchResults, searchTerm, handleChange };
};
export default UseSearchPokemon;

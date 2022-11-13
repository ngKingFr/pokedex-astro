import type {Pokemon} from "../models/pokemon";

export const getAllPokemon: () => Promise<Pokemon[]> = async () => {
    return await fetch('https://raw.githubusercontent.com/ruizalexandre/pokedex/master/pokedex.json').then(
        (response) => response.json()
    ).then((result) => result as Pokemon[]);
}


export const getPokemonById: (id: number) => Promise<Pokemon> = async (id: number) => {
    return await getAllPokemon().then((pokemons) => {
        return pokemons[pokemons.findIndex(p => p.id === id)]
    });
}


export const getImgPokemon: (id: number) => string = (id: number) => {
    return `${'https://raw.githubusercontent.com/ruizalexandre/pokedex/master/images/' + (id <= 9 ? '00' + id : (id <= 99) ? '0' + id : id) + '.png'}`
}

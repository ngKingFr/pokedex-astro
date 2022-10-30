import type {Pokemon} from "../models/pokemon";

export const getAllPokemon: () => Promise<Pokemon[]> = async () => {
    return await fetch('https://raw.githubusercontent.com/ruizalexandre/pokedex/master/pokedex.json').then(
        (response) => response.json()
    ).then((result) => {
        return result as Pokemon[];
    })
}

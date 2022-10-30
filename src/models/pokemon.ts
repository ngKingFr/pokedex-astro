import type {PokemonType} from "./pokemon-type";

export interface Pokemon {
    "id": number;
    "name": {
        "english": string;
        "japanese": string;
        "chinese": string;
        "french": string;
    };
    "type": PokemonType[];
    "base": {
        "HP": number;
        "Attack": number;
        "Defense": number;
        "Sp. Attack": number;
        "Sp. Defense": number;
        "Speed": number;
    }
}

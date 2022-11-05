import type { Pokemon } from "@/models/pokemon.model";
import type { PokemonDetail } from "@/models/pokemon.model";
import axios from "axios";

export const getPokemons = () =>
  axios.get<Pokemon[]>("https://pokedex-workshop-api.vercel.app/api/pokemons");

export const getPokemonsNames = (name: string | string[]) =>
  axios.get<PokemonDetail>(
    "https://pokedex-workshop-api.vercel.app/api/pokemons/" + name
  );

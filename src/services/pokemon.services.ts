import type { Pokemon, PokemonDetail } from "@/models/pokemon.model";
import axios from "axios";

export const getPokemons = () =>
  axios.get<Pokemon[]>(`${import.meta.env.VITE_BASE_URL}/api/pokemons`);

export const getPokemonsNames = (name: string | string[]) =>
  axios.get<PokemonDetail>(
    `${import.meta.env.VITE_BASE_URL}/api/pokemons/${name}`
  );

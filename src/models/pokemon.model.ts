export interface Pokemon {
  img: string;
  name: string;
}
export interface PokemonDetail extends Pokemon {
  abilities: string[];
  // img: string; extends เข้ามาเอา
  // name: string; extends เข้ามาเอา
  types: string[];
}

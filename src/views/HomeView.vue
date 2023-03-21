<script setup lang="ts">
import PokemonCard from "@/components/PokemonCard.vue";
import { computed, onMounted, ref } from "vue";
import { getPokemons } from "@/services/pokemon.services";
import type { Pokemon } from "@/models/pokemon.model";
import { useRouter } from "vue-router";

const router = useRouter();

const pokemonList = ref<Pokemon[]>(); //ประกาศ type พร้อมนำ Interface ที่เป็น type มาใช้
const seachValue = ref();

onMounted(async () => {
  const result = await getPokemons();
  pokemonList.value = result.data;
});
// getPokemons().then((value) => (pokemonList.value = value.data));
// const onNavigateDetail = (name: string) => alert(name);
const onNavigateDetail = (name: string) =>
  router.push({ name: "detail", params: { name: name } });

const filterPokemon = computed(() => {
  if (!pokemonList.value) {
    return pokemonList.value;
  }
  return pokemonList.value?.filter((pokemon) =>
    pokemon.name.includes(seachValue.value)
  );
});
</script>
<template>
  <div class="flex justify-center form-control">
    <div class="input-group">
      <input
        v-model="seachValue"
        type="text"
        placeholder="Search…"
        class="input input-bordered"
      />
      <button class="btn btn-square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  </div>

  <div class="cardContainer mw-[1024px] mx-auto">
    <PokemonCard
      class="pokemonCard"
      v-for="(pokemon, index) of filterPokemon"
      :key="index"
      :img="pokemon.img"
      :name="pokemon.name"
      :buttonText="''"
      @clickbtn="onNavigateDetail($event)"
    />
  </div>
  <div class="cardContainer mw-[1024px] mx-auto">
    <PokemonCard
      class="pokemonCard"
      v-for="(pokemon, index) of filterPokemon"
      :key="index"
      :img="pokemon.img"
      :name="pokemon.name"
      :buttonText="''"
      @clickbtn="onNavigateDetail($event)"
    />
  </div>
</template>
<style scoped>
.cardContainer {
  display: flex; /* or inline-flex */
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.pokemonCard {
  margin: 10px;
}
</style>

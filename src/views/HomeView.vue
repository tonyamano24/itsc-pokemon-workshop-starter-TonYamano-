<script setup lang="ts">
import PokemonCard from "@/components/PokemonCard.vue";
import { onMounted, ref } from "vue";
import { getPokemons } from "@/services/pokemon.services";
import type { Pokemon } from "@/models/pokemon.model";
import { useRouter } from "vue-router";

const router = useRouter();

const pokemonList = ref<Pokemon[]>(); //ประกาศ type พร้อมนำ Interface ที่เป็น type มาใช้

onMounted(async () => {
  const result = await getPokemons();
  pokemonList.value = result.data;
});
// getPokemons().then((value) => (pokemonList.value = value.data));
// const onNavigateDetail = (name: string) => alert(name);
const onNavigateDetail = (name: string) =>
  router.push({ name: "detail", params: { name: name } });
</script>
<template>
  <div class="cardContainer mw-[1024px] mx-auto">
    <PokemonCard
      class="pokemonCard"
      v-for="(pokemon, index) of pokemonList"
      :key="index"
      :img="pokemon.img"
      :name="pokemon.name"
      :buttonText="'1234'"
      @clickbtn="onNavigateDetail($event)"
    />
  </div>
</template>
<style scoped>
.cardContainer {
  display: flex; /* or inline-flex */
  justify-content: space-between;
  flex-wrap: wrap;
}
.pokemonCard {
  margin: 10px;
}
</style>

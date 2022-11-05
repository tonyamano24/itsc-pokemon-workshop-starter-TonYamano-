<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import type { PokemonDetail } from "@/models/pokemon.model";
import { getPokemonsNames } from "@/services/pokemon.services";

const route = useRoute();
const pekemonName = route.params.name;

const pokemonDetail = ref<PokemonDetail>(); //ประกาศ type พร้อมนำ Interface ที่เป็น type มาใช้

onMounted(async () => {
  const result = await getPokemonsNames(pekemonName);
  pokemonDetail.value = result.data;
});
</script>
<template>
  <div>
    <h1>Detail view</h1>
    <br />
    <p>abilities:</p>
    <li v-for="(abilitie, index) of pokemonDetail?.abilities" :key="index">
      {{ abilitie }}
    </li>
    <br />

    <p>Img</p>
    <img :src="pokemonDetail?.img" alt="" />
    <br />

    <h2>Name: {{ pokemonDetail?.name }}</h2>
    <br />

    <p>types</p>
    <li v-for="(types, index) of pokemonDetail?.types" :key="index">
      {{ types }}
    </li>
    <br />
  </div>
</template>

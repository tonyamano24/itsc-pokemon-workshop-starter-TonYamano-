<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import type { PokemonDetail } from "@/models/pokemon.model";
import { getPokemonsNames } from "@/services/pokemon.services";
import { useRouter } from "vue-router";

const router = useRouter();

const route = useRoute();
const pekemonName = route.params.name;

const pokemonDetail = ref<PokemonDetail>(); //ประกาศ type พร้อมนำ Interface ที่เป็น type มาใช้

onMounted(async () => {
  const result = await getPokemonsNames(pekemonName);
  pokemonDetail.value = result.data;
});
const goBack = () => router.push({ name: "home" });
</script>
<template>
  <div class="bodycard">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <div class="badge badge-lg">
          {{ pokemonDetail?.name }}
        </div>
      </div>
      <figure>
        <img :src="pokemonDetail?.img" class="mask mask-circle" />
      </figure>
      <div class="mb-3 mx-5 items-start text-start">
        <div class="card card-bordered px-5 py-3">
          <p>abilities:</p>
          <li
            class="ml-4 text-sm font-light"
            v-for="(abilitie, index) of pokemonDetail?.abilities"
            :key="index"
          >
            {{ abilitie }}
          </li>

          <p>types:</p>
          <li
            class="ml-4 text-sm font-light"
            v-for="(types, index) of pokemonDetail?.types"
            :key="index"
          >
            {{ types }}
          </li>
        </div>
      </div>
      <div class="card-actions justify-center mb-5">
        <button
          class="btn btn-primary btn-wide btn-sm btn-outline"
          @click="goBack()"
        >
          Back
        </button>
      </div>
    </div>
  </div>

  <!-- <h1>Detail view</h1>
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
  </div> -->
</template>
<style scoped>
.bodycard {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

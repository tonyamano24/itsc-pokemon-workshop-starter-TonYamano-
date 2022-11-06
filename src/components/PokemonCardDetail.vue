<script setup lang="ts">
import type { PokemonDetail } from "@/models/pokemon.model";
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  pokemonDetail: PokemonDetail;
}>();

const emits = defineEmits<{
  (e: "clickbtn", name: string): void;
}>();

// const renderButtonText = props.buttonText ? props.buttonText : "View Detail";
</script>
<template lang="">
  <div class="mb-3 mx-5 items-start text-start">
    <div class="card card-bordered px-5 py-3">
      <p>abilities:</p>
      <li
        class="ml-4 text-sm font-light"
        v-for="(abilitie, index) of props.pokemonDetail?.abilities"
        :key="index"
      >
        {{ abilitie }}
      </li>

      <p>types:</p>
      <li
        class="ml-4 text-sm font-light"
        v-for="(types, index) of props.pokemonDetail?.types"
        :key="index"
      >
        {{ types }}
      </li>
    </div>
  </div>
</template>

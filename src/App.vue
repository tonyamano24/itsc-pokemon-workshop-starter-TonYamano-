<script setup lang="ts">
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <div class="navbar bg-sky-500 flex justify-center">
    <div class="text-2xl text-white">Pokedex</div>
  </div>
  <div
    class="body backdrop:p-4 lg:p-8 bg-base-300 rounded-b-box rounded-tr-box relative overflow-x-auto"
  >
    <RouterView></RouterView>
    <!-- <HomeView></HomeView> -->
  </div>
</template>
<style>
.body {
  min-height: 100vh;
}
</style>

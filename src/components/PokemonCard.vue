<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

// interface User {
//   firstname: string;
//   lastname: string;
// }

// const props = defineProps<{
//   img: string;
//   name: User[];
// }>();
//รับ Array

const props = defineProps<{
  img: string;
  name: string;
  buttonText?: string; // ส่งมาหรือไม่ส่งมาก็ได้
}>();

const emits = defineEmits<{
  (e: "clickbtn", name: string): void;
}>();

const renderButtonText = props.buttonText ? props.buttonText : "View Detail";
</script>
<template lang="">
  <div class="card w-96 bg-base-100 shadow-xl">
    <!-- <figure class="mt-5">
      <img :src="props.img" />
    </figure> -->
    <div class="avatar justify-center mt-8">
      <div
        class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
      >
        <img :src="props.img" />
      </div>
    </div>
    <div class="card-body">
      <div class="justify-center">
        <h2 class="card-title">{{ props.name }}</h2>
      </div>
      <div class="card-actions justify-end">
        <button
          class="btn btn-success btn-sm"
          @click="emits('clickbtn', props.name)"
        >
          {{ renderButtonText }}
        </button>
      </div>
    </div>
  </div>
</template>

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
    <figure>
      <img :src="props.img" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ props.name }}</h2>

      <div class="card-actions justify-end">
        <button class="btn btn-primary" @click="emits('clickbtn', props.name)">
          {{ renderButtonText }}
        </button>
      </div>
    </div>
  </div>
</template>

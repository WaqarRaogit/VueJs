<script setup>

import { defineProps } from 'vue';
    
    defineProps({
        title:  {
            type: String,
            default: "Become a Vue Dev"
        },
        subtitle:  {
            type: String,
            default: "Find the Vue job that fits your skills and needs"
        }
    });
</script>

<template>
    <section class="bg-success py-5 mb-4">
  <div class="container text-center">
    <div>
      <h1 class="display-4 text-white fw-extrabold">
        {{title}}
      </h1>
      <p class="my-4 fs-3 text-white">
        {{subtitle}}
      </p>
    </div>
  </div>
</section>

</template>
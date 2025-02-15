<template>
    <!-- <div :class="[isActive ? 'active' : 'inactive', 'common']" style="width: 800px; height: 600px;">

    </div>

    <button @click="isActive = !isActive">Click Me</button> -->

    <input type="text" v-model="colorInput" placeholder="Enter Color..."/>
    <p :style="{color: colorInput, fontSize: colorInput}">Applying Color to me</p>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const colorInput = ref({
    color: "red",
    fontSize: "50px"
  });

  </script>
  
  <style>

  </style>
  
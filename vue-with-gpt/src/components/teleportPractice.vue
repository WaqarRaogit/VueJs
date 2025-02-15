<template>
    <button @click="showModal = true">Open Modal</button>
  
    <Teleport to="body">
      <div v-if="showModal" class="modal">
        <h2>I'm a Modal!</h2>
        <button @click="showModal = false">Close</button>
      </div>
    </Teleport>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const showModal = ref(false);
  </script>
  
  <style>
  .modal { position: fixed; top: 30%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; }
  </style>
  
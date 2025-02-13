<script setup>

import {ref, reactive, computed, watch, onMounted, onBeforeMount, onBeforeUnmount, onUnmounted} from "vue";

import RegisterForm from "./RegisterForm.vue";
/*  const git = ref("")

  const isVisibleIf = ref(true);  
const isVisibleShow = ref(true); 


const toggleVisibilityIf = () => {
  isVisibleIf.value = !isVisibleIf.value;
};


const toggleVisibilityShow = () => {
  isVisibleShow.value = !isVisibleShow.value;
}; */

</script>

<template>
    <!-- <input v-model="git"/> -->

  <!-- <a v-bind:href="git">Click me if you want to visit github profile</a> -->

  <!-- <div>
    <button @click="toggleVisibilityIf">Toggle Message (v-if)</button>
    <div v-if="isVisibleIf">
      <h3>This message is conditionally rendered with v-if!</h3>
    </div>
    
    <hr>
    
    <button @click="toggleVisibilityShow">Toggle Message (v-show)</button>
    <div v-show="isVisibleShow">
      <h3>This message is conditionally rendered with v-show!</h3>
    </div>
  </div> -->

  <h1>User Register Form</h1>

  <RegisterForm />

</template>


<!-- v-bind
Common Use: Dynamically update attributes like href, src, class, etc.
-->
<!--  -->

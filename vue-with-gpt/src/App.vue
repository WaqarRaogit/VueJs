<script setup>

import {ref, reactive, computed, watch, onMounted, onBeforeMount, onBeforeUnmount, onUnmounted} from "vue";

import RegisterForm from "./RegisterForm.vue";
import binding from "./components/binding.vue";
import loop from "./components/loop.vue";
import events from "./components/events.vue";
import computedPractice from "./components/computedPractice.vue";
import child from "./components/child.vue";
import parent from "./components/parent.vue";
import Cart from "./components/Cart.vue";
import ProductList from "./components/ProductList.vue";
import teleportPractice from "./components/teleportPractice.vue";
import Navbar from "./components/Navbar.vue";
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

  <!-- <h1>User Register Form</h1> -->

  <!-- <RegisterForm /> -->

  <!-- <h3>Binding</h3> -->
  <!-- <binding /> -->
   <!-- <loop /> -->
  <!-- <events /> -->
   <!-- <computedPractice education="BSIT" cgpa=3.81 /> -->
    <!-- <parent /> -->
     <!-- <Cart /> -->
      <!-- <teleportPractice /> -->

    <Navbar />
    <router-view></router-view>

</template>


<!-- v-bind
Common Use: Dynamically update attributes like href, src, class, etc.
-->
<!--  -->

<script setup>
import { ref, defineEmits } from "vue";
import child from "./child.vue";

const greetings = ref("");

const handleMessage = (data) =>{
    greetings.value = data;
}

</script>
<template>
    <div>
        <h1>Parent Component</h1>
        <p>Parent component is here</p>
        <child @myEvent="handleMessage"/>
        <h2>{{greetings}}</h2>
    </div>
</template>
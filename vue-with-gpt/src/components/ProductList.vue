<script setup>
import { defineEmits, defineProps } from "vue";

const emit = defineEmits(["add-to-cart"]);

const props = defineProps({
  products: Array,
});

const emitEvent = (product) => {
    emit("add-to-cart", product);
}

</script>

<template>
    <ul v-for="product in products" :key="product">
        <div style="display: flex; flex-direction: row; gap: 10px; align-items: center; border: 2px solid orangered; padding: 20px; border-radius: 10px;
        box-shadow: 2px 2px 10px 5px gray;">
        <li>{{ product }}</li> 
        <button @click="emitEvent(product)">Select</button>
    </div>
    </ul>
</template>
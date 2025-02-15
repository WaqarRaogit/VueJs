<script setup>
    import ProductList from "./ProductList.vue";
    import {ref} from "vue";

    const cart = ref([]);

    const handleProducts = (product) => {
        if(!cart.value.includes(product)){
            cart.value.push(product);
        }
        else{
            alert("Product already exists in the cart");
        }
    }
</script>

<template>

    <ProductList :products="['Air Bag', 'Shoes', 'Watch']" @add-to-cart="handleProducts"/>
    <div>
        <h1>Cart</h1>
        <ul v-for="item in cart" :key="item"> 
            <li>{{ item }}</li>
        </ul>
    </div>
</template>
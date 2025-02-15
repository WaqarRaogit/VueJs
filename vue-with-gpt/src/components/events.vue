<script setup>
    import { ref } from 'vue';

    const counter = ref(0);

    const increment = () => {
        counter.value = customIncrement.value ? counter.value + parseInt(customIncrement.value) :
        counter.value++;
    }
    const reset = () => {
        counter.value = 0;
    }

    const customIncrement = ref('');
    
</script>

<template>
    <div class="events-container">
        <h1>🎉 Events</h1>

        <h4>{{ counter }}</h4>

        <button @click="increment">Increment</button>

        <button @click="reset">Reset</button>

        <input type="text" v-model="customIncrement" placeholder="Add Increment..."/>
        <p>{{ customIncrement}}</p>

    </div>  
</template>

<style scoped>
</style>
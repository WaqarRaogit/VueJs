<script setup>
    import { defineProps } from 'vue';

    defineProps({
        type: String,
        default: "bg-gray-100"
    })
</script>

<template>
    <div :class="`bg-light p-4 rounded-lg shadow-sm`"> 
        <slot></slot>
    </div>
</template>
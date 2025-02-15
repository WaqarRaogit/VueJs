<script setup>

    import {ref, reactive, computed, watch, onMounted, onBeforeMount, onBeforeUnmount, onUnmounted} from "vue";

    const firstName = ref("Waqar");
    const lastName = ref("Ahmed");

    const fullname = computed(() => {
       return firstName.value.split('').reverse().join('') + " " + lastName.value;
    })

    defineProps({
        education: {type: String, default: "BSCS"},
        cgpa: {type: Number, default: 3.8}
    });

</script>

<template>
    <h2>Full Name : {{ fullname }}</h2>
    <h3>Education: {{education}}</h3>
    <h4>CGPA: {{ cgpa }}</h4>

</template>

<style scoped></style>
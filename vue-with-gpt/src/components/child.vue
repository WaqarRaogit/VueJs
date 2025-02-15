<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["myEvent"]);

const sendMessage = () =>{
    emit("myEvent", "Hello DAD!");
}

</script>

<template>
    <div>
        <h1>Child Component</h1>
            <button @click="sendMessage">send message</button>
    </div>
</template>

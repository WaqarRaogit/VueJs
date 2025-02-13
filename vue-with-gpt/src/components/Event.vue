<!-- ChildComponent.vue -->
<template>
    <button @click="notifyParent">Click Me</button>
  </template>
  
  <script>
  export default {
    methods: {
      notifyParent() {
        this.$emit('notify', 'Hello from child');
      }
    }
  };
  </script>
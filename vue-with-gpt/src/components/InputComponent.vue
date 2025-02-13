<template>
    <div>
      <input
        :type="type"
        :placeholder="placeholder"
        :style="{ borderRadius: borderRadius, width: width, padding: padding }"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span v-if="errorMessage" class="error">{{ errorMessage }}</span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      type: {
        type: String,
        default: "text",
      },
      placeholder: {
        type: String,
        default: "",
      },
      borderRadius: {
        type: String,
        default: "4px",
      },
      width:{
        type: String,
        default: "250px",
      },
      padding:{
        type: String,
        default: "12px"
      },
      modelValue: {
        type: String,
        default: "",
      },
      errorMessage: {
        type: String,
        default: "",
      },
    },
    emits: ["update:modelValue"],
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
    font-size: 0.875rem;
  }
  </style>
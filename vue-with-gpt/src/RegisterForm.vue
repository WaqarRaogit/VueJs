<script>
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import InputComponent from "./components/InputComponent.vue";

export default {
  components: {
    InputComponent,
  },
  setup() {
    // Define validation schema using Yup
    const schema = yup.object({
      email: yup.string().email("Invalid email").required("Email is required"),
      password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    });

    // Use VeeValidate's useForm and useField
    const { handleSubmit, errors } = useForm({
      validationSchema: schema,
    });

    const { value: email } = useField("email");
    const { value: password } = useField("password");

    // Submit handler
    const submitForm = handleSubmit((values) => {
      console.log("Form submitted!", values);
    });

    return {
      email,
      password,
      errors,
      submitForm,
    };
  },
};
</script>

<template>
    <form @submit.prevent="submitForm">
      <!-- Email Input -->
      <InputComponent
        v-model="email"
        type="email"
        placeholder="Enter your email"
        :border-radius="'8px'"
        :width="'250px'"
        :padding="'20px'"
        :error-message="errors.email"
      />
  
      <!-- Password Input -->
      <InputComponent
        v-model="password"
        type="password"
        placeholder="Enter your password"
        :border-radius="'8px'"
        :width="'250px'"
        :padding="'20px'"
        :error-message="errors.password"
      />
  
      <!-- Submit Button -->
      <button type="submit" style="padding: 15px; background-color: orange; color: white; width: 150px; font-size: 20px; margin-top: 15px;">Register</button>
    </form>
  </template>


<style scoped>
    .input-style{
        width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
    }
</style>
  

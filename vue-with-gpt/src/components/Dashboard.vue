<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
  localStorage.removeItem('auth');
  router.push('/');
};
</script>

<template>
    <div>
      <h1>📊 Dashboard</h1>
      <p>Welcome to your private dashboard.</p>
      <button @click="logout">Logout</button>
      <router-link to="/">Go to Home</router-link>
    </div>
  </template>
  

  
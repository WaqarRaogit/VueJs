<script setup>
    import { useRouter } from 'vue-router';

    const login = () => {
        localStorage.setItem('auth', 'true');
        router.push('/dashboard');
    }
</script>

<template>
    <h2>🔑 Login</h2>
    <button @click="login">Login</button>
</template>
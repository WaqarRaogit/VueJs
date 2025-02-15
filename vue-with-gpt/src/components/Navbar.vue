<script setup>
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const router = useRouter();

    const auth = computed(() => {
        localStorage.getItem('auth');
    })

    const logout = () => {
        localStorage.removeItem('auth');
        router.push('/');
    }
</script>
<template>
    <nav>
        <router-link to = '/'>Home</router-link>
        <router-link to = '/about'>About</router-link>
        <router-link v-if ="!auth" to ='/login'>Login</router-link>
        <router-link v-if="auth" to="/dashboard">Dashboard</router-link>
        <button v-if="auth" @click="logout">Logout</button>
    </nav>
</template>
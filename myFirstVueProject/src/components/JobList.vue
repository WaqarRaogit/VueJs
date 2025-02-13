<script setup>
import { defineProps, ref, computed } from 'vue';
defineProps({
  job: Object
});

const showFullDescription = ref(false);
</script>


<template>
  <div class="bg-white rounded shadow position-relative">
    <div class="p-4">
      <div class="mb-4">
        <div class="text-muted mb-2">{{ job.type }}</div>
        <h3 class="h5 fw-bold">{{ job.type }}</h3>
      </div>
    
      <div class="mb-4">
        {{ job.description }}
      </div>

      <h3 class="text-success mb-3">{{ job.salary }} / Year</h3>

      <hr class="mb-4" />

      <div class="d-flex flex-column flex-lg-row justify-content-between mb-3">
        <div class="text-warning mb-3 mb-lg-0">
          <i class="fa-solid fa-location-dot me-2"></i>
          {{ job.location }}
        </div>
        <a
          :href="'/job/' + job.id"
          class="btn btn-success text-white text-center text-sm"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
</template>

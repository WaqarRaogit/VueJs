<script setup>
import jobsData from "@/Jobs.json";
import JobList from "./JobList.vue";
import { ref, defineProps } from "vue";

    const jobs = ref(jobsData);
    console.log(jobs.value);

    defineProps({
        limit: Number,
        showbtn : {
            type : Boolean,
            default: "false"
        }
    })
    
</script>

<template>

<section class="bg-light px-3 py-5">
  <div class="container-fluid mx-auto">
    <h2 class="text-success text-center fw-bold display-6 mb-4">
      Browse Jobs
    </h2>
    <div class="row row-cols-1 row-cols-md-3  g-4">
      <JobList v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job" />
    </div>
  </div>
</section>

<section v-if="showbtn" class="mx-auto my-5 px-3" style="max-width: 40rem;">
  <a
    href="jobs.html"
    class="btn btn-dark d-block text-center py-3 px-4 rounded"
    role="button"
    >View All Jobs</a
  >
</section>



    
</template>     
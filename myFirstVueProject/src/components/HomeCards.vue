<script setup>
    import Card from "@/components/Card.vue";
</script>

<template>
    <section class="py-4">
  <div class="container-xl m-auto">
    <div class="row row-cols-1 row-cols-md-2 g-4 p-4 rounded-lg">
    
      <Card>
        <h2 class="h3 fw-bold">For Developers</h2>
        <p class="mt-2 mb-4">
          Browse our Vue jobs and start your career today
        </p>
        <a href="jobs.html" class="btn btn-dark rounded-lg px-4 py-2">
          Browse Jobs
        </a>
    </Card>
  
      <Card>
        <h2 class="h3 fw-bold">For Employers</h2>
        <p class="mt-2 mb-4">
          List your job to find the perfect developer for the role
        </p>
        <a href="add-job.html" class="btn btn-success rounded-lg px-4 py-2">
          Add Job
        </a>
    </Card>
    </div>
  </div>
</section>

</template>
<script setup>
import logo from '@/assets/logo.png'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success border-bottom border-success">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">
        <img class="d-inline-block align-top" :src="logo" alt="Vue Jobs" style="height: 40px;">
        <span class="d-none d-md-inline text-white ms-2 fs-3 fw-bold">Vue Jobs</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link text-white bg-success rounded px-3 py-2 hover-bg-dark" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white rounded px-3 py-2 hover-bg-dark" href="jobs.html">Jobs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white rounded px-3 py-2 hover-bg-dark" href="add-job.html">Add Job</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


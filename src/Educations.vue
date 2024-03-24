<script setup>
import { educations } from "./data";
import { ref } from "vue";
</script>

<template>
  <div class="container-sm mb-5">
    <div class="m-4 text-light px-1 py-2 border-bottom">
      <h4 class="heading">
        Educational Qualifications
        <div class="navbar-brand spinner-grow" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h4>
    </div>

    <div class="d-flex flex-row flex-wrap justify-content-center">
      <div
        v-for="(edu, index) in educations"
        :key="index"
        class="card p-3 m-2 mw-25 text-light border text-center list-group"
        style="background-color: #272822"
      >
        <h5 class="fw-bold card-text">
          Course:
          <span class="fst-italic fw-normal" style="color: #eb1f6a">{{
            edu.course
          }}</span>
        </h5>
        <p class="fw-bold card-text list-group-item bg-opacity-25">
          Institute:
          <span class="fst-italic fw-normal">{{ edu.institution }}</span>
        </p>
        <p class="fw-bold card-text list-group-item">
          Dates Attended:
          <span class="fst-italic fw-normal">{{ edu.date }}</span>
        </p>
        <p v-if="edu.result != 'N'" class="fw-bold card-text list-group-item">
          Result: <span class="fst-italic fw-normal">{{ edu.result }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.border-bottom {
  border-color: #655a42 !important;
  color: #ddb966 !important;
}
</style>

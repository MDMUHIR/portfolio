<script setup></script>

<template>
  <div class="main-info text-light">
    <div class="hero-div row g-0 d-flex justify-content-center">
      <img
        src="../assets/hero.png"
        class="rounded-3 shadow mt-5 user-select-none"
        style="
          max-height: 600px;
          width: auto;
          background-size: cover;
          background-attachment: fixed;
          background-position: center;
        "
        alt="my-img.jpeg"
      />
    </div>

    <div class="details-text row g-0 p-4 text-light user-select-none">
      <div class="card-text py-4">
        <h2
          class="mb-4 border-bottom p-2"
        >
          Hello everyone!!!
          <div class="navbar-brand spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </h2>
        <h4>
          Greetings, this is Md. Muhir Uddin. Let's take a bit of time of my
          portfolio...
        </h4>
        <p class="fs-5">
          I have expertise in web development using various type of tools and
          started my journey in 2021 to build my career as a web developer to
          mark up my knowledge in this regard. I am very delighted to share that
          as an enthusiastic, I am open to work in this field and also expand my
          knowledge about new technologies and frameworks.
        </p>
        <a
          href="https://github.com/MDMUHIR/CV.pdf/archive/refs/heads/main.zip"
          class="btn btn-sm btn-dark float-start"
          >Download CV</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.border-bottom {
  border-color: #655a42 !important;
}
</style>

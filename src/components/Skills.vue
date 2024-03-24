<script setup>
import { ref } from "vue";
import nuxt from "../assets/nuxt.svg";
const skills = ref([
  {
    title: "HTML 5",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    webLink: "",
  },

  {
    title: "CSS 3",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    webLink: "",
  },
  {
    title: "JavaScript",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    webLink: "",
  },
  {
    title: "TypeScript",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    webLink: "",
  },
  {
    title: "vue.js",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
    webLink: "https://vuejs.org/",
  },
  {
    title: "Nuxt.js",
    image:
      "https://camo.githubusercontent.com/954c58d17bc5f663f20ec8a009149a5455484daf730edd763dfa9f3b94663f46/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6e7578746a732f6e7578746a732d69636f6e2e737667",
    webLink: "https://vuejs.org/",
  },
  {
    title: "Node js",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    webLink: "https://nodejs.org/en",
  },

  {
    title: "Bootstrap 5",
    image:
      "https://camo.githubusercontent.com/9ee806be83385d8b6a369a74cb1fc746644521a279ba959174ce5b9e75caf384/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f626f6f7473747261702f626f6f7473747261702d6f726967696e616c2e737667",
    webLink: "https://getbootstrap.com/",
  },
  {
    title: "tailwindcss",
    image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    webLink: "https://tailwindcss.com/",
  },
  {
    title: "Vite js",
    image: "https://vitejs.dev/logo-with-shadow.png",
    webLink: "https://vitejs.dev/",
  },
]);
</script>

<template>
  <div class="main border-end border-5 border-danger">
    <h3 class="heading m-4 px-1 py-2 border-bottom text-end">
      <div class="navbar-brand spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      My Skills
    </h3>
    <div class="w-100 rounded pb-5 text-light">
      <div
        class="skills row d-flex align-items-center justify-content-end w-100 p-3 rounded"
        style="margin-inline-start: 1px"
      >
        <template v-for="skill in skills" key="skill.title">
          <a
            :href="skill.webLink"
            type="button"
            class="btn skill my-1 fw-semibold text-light"
            style="width: auto; max-width: 200px"
          >
            <img :src="skill.image" alt="" class="w-25 me-1" />{{ skill.title }}
          </a>
        </template>
      </div>

      <div class="ext-skill">
        <div class="most-used-lang mt-3 p-3 d-flex justify-content-end">
          <img
            src="https://camo.githubusercontent.com/f8b01ab87530f692267ede564a1ab7a80e89e1aa3e6e25e88f48ff8d3f600a7d/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d6d646d75686972267468656d653d6d6f6e6f6b61692673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
            alt="mdmuhir"
            class="stats"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.border-bottom {
  border-color: #655a42 !important;
  color: #ddb966 !important;
}
.skill {
  transition: 0.2s;
}

.skill:hover {
  transform: scale(1.05);
  filter: drop-shadow(8px 8px 1px #ff8800);
}

.stats {
  width: 35%;
  min-width: 250px;
  transition: 0.2s;
}
.stats:hover {
  transform: scale(1.05);
  filter: drop-shadow(10px 10px 1px #ff8800);
}
</style>

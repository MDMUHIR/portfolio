<script setup>
const skills = reactive([
  {
    name: "HTML5",
    link: "https://www.w3.org/html/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  },
  {
    name: "CSS3",
    link: "https://www.w3schools.com/css/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  },
  {
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "Vue.js",
    link: "https://vuejs.org/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
  },
  {
    name: "Nuxt.js",
    link: "https://nuxtjs.org/",
    icon: "https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg",
  },
  {
    name: "React",
    link: "https://reactjs.org/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    name: "Bootstrap",
    link: "https://getbootstrap.com",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  
]);
</script>

<template>
  <div class="main p-10">
    <h1 class="text-4xl mb-5 text-white">💻 Tech Stacks</h1>
    <div class="showcase flex flex-wrap justify-center gap-5">
      <div v-for="(skill, index) in skills" :key="index">
        <div class="px-5 py-2 flex justify-center items-center border ">
          <img :src="skill.icon" alt="" class="w-12" />
          <p class="text-lg font-bold text-white ml-2">{{ skill.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

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
  <div class="main p-10 text-center">
    <h1 class="text-3xl 2xl:text-4xl font-mono font-bold mb-5 text-white">My Tech Stacks</h1>
    <div class="showcase flex flex-wrap justify-center gap-5">
      <div v-for="(skill, index) in skills" :key="index">
        <a
          :href="skill.link"
          class="px-5  flex justify-end items-end btn10  py-4 bg-black/25 rounded"
        >
          <img :src="skill.icon" alt="" class="w-12" />
          <p class="text-lg font-extrabold text-white ml-2">{{ skill.name }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn10 {
  color: #fff;
  font-family: sans-serif;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  text-decoration: none;
}

/* Btn 10  */
.btn10 {
  font-family: "proxima-nova", sans-serif;
  text-transform: uppercase !important;
  letter-spacing: 2px;
  color: #fff;
  cursor: hand;
  text-align: center;
  text-transform: capitalize;
  position: relative;
  overflow: hidden !important;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  /* background: transparent !important; */
  z-index: 10;
}

.btn10:hover {

  color: #80ffd3 !important;
}
.btn10::before {
  content: "";
  width: 0%;
  height: 100%;
  display: block;
  background: #e1110a;
  position: absolute;
  -ms-transform: skewX(-20deg);
  -webkit-transform: skewX(-20deg);
  transform: skewX(-20deg);
  left: -10%;
  opacity: 1;
  top: 0;
  z-index: -12;
  -moz-transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
  -o-transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
  -webkit-transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
  transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
  box-shadow: 2px 0px 14px rgba(0, 0, 0, 0.6);
}

.btn10::after {
  content: "";
  width: 0%;
  height: 100%;
  display: block;
  background: #80ffd3;
  position: absolute;
  -ms-transform: skewX(-20deg);
  -webkit-transform: skewX(-20deg);
  transform: skewX(-20deg);
  left: -10%;
  opacity: 0;
  top: 0;
  z-index: -15;
  -webkit-transition: all 0.94s cubic-bezier(0.2, 0.95, 0.57, 0.99);
  -moz-transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
  -o-transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
  transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
  box-shadow: 2px 0px 14px rgba(0, 0, 0, 0.6);
}
.btn10:hover::before,
.btn1O:hover::before {
  opacity: 1;
  width: 116%;
}
.btn10:hover::after,
.btn1O:hover::after {
  opacity: 1;
  width: 120%;
}
</style>

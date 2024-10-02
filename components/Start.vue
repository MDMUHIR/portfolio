<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Function to handle the background darkening effect
const darkenBackground = () => {
  const heroSection = document.querySelector(".section.hero");
  const scroll = window.pageYOffset || document.documentElement.scrollTop;
  const offsetTop = heroSection.offsetTop + heroSection.offsetHeight;
  let opacity = (1 / offsetTop) * scroll;

  if (opacity > 0 && opacity < 1) {
    heroSection.style.boxShadow = `10000px 0 0 0 rgba(255, 255, 255, ${0}) inset`;
  }
};

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  // GSAP ScrollTrigger animation for the hero section
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: false,
      },
    })
    .to(".top-img", {
      scale: 2.5,
      z: 250,
      transformOrigin: "center center",
      ease: "power1.inOut",
    })
    .to(
      ".section.hero",
      {
        scale: 1.4,
        transformOrigin: "center center",
        ease: "power1.inOut",
      },
      "<"
    );

  // Add scroll event listener for darkening background effect
  window.addEventListener("scroll", darkenBackground);
});

// Cleanup event listener when component is destroyed
onBeforeUnmount(() => {
  window.removeEventListener("scroll", darkenBackground);
});
</script>

<template>
  <div class="wrapper">
    <div class="intro">

      <p class="text-6xl font-extrabold">Front-end Developer</p>
    </div>

    <div class="image-container">
      <img
        class="top-img"
        src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d13364599bb70e3560cc4e5_background-min%203.png"
        alt="image"
      />
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Beth+Ellen&family=Chelsea+Market&display=swap");

.intro {
  z-index: 2;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff0000;
  /*   margin: 0 auto; */
}

.intro p {
  font-family: "Chelsea Market", system-ui;
}

.content {
  overflow-x: hidden;
}

.content .section {
  width: 100%;
  height: 100vh;
}

.image-container {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  perspective: 500px;
  overflow: hidden;
}

.image-container .top-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  position: relative;
  z-index: 1;
}

/* For type Writer */
.typewriter {
  overflow: hidden;
  white-space: nowrap;
  border-right: 5px solid;
  animation: type 1.5s steps(90) 1.5s 1 normal both, cursor 1s step-end infinite;
  position: relative;
}

@keyframes type {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes cursor {
  0% {
    border-color: rgb(210, 61, 61);
  }
  50% {
    border-color: transparent;
  }
}
</style>

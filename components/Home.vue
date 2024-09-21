<script setup></script>

<template>
  <div class="main text-center text-white py-10">
    <h1 class="text-xl font-mono">Hi! I’m</h1>
    <!-- typeWriter -->
    <div class="container">
      <div>
        <h1 class="typewriter text-7xl font-bold">
          <span
            class="bg-clip-text text-transparent bg-[url('~/public/images/bg.png')] bg-contain"
          >
            MD. MUHIR UDDIN
          </span>
        </h1>
      </div>
    </div>
    <div class="cover-latter p-2 mt-5">
      <h4 class="text-sm font-bold italic mb-2 font-mono">
        I appreciate you taking the time to explore my profile.
      </h4>
      <p class="text-xl px-10 font-mono">
        With expertise in web development and hands-on experience using a
        variety of powerful tools, I embarked on my journey in 2021 to craft a
        meaningful career in this dynamic field. My passion for technology
        drives me to continually enhance my skills, and I'm always eager to
        embrace new challenges, explore emerging frameworks, and stay at the
        cutting edge of web development. As an enthusiastic learner and
        developer, I'm open to exciting opportunities that allow me to innovate
        and grow in this ever-evolving landscape!
      </p>
    </div>
  </div>
</template>

<style scoped>
:root {
  --primary-color: #c8dc71;
  --gradient-color: linear-gradient(180deg, #d2ff00 0%, #00d2ff 100%);
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Custom */

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

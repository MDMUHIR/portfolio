<template>
  <div class="bg-[#2c2b2b]" id="large-header" ref="largeHeader">
    <canvas id="demo-canvas" ref="demoCanvas"> </canvas>

    <div class="area">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap"; // For TweenLite-like functionality

// Refs for DOM elements
const largeHeader = ref(null);
const demoCanvas = ref(null);

// Variables
let width,
  height,
  ctx,
  points = [],
  target = { x: 0, y: 0 },
  animateHeader = true;

// Utility function to calculate distance between two points
const getDistance = (p1, p2) => {
  return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
};

// Circle class
class Circle {
  constructor(pos, radius, color) {
    this.pos = pos;
    this.radius = radius;
    this.color = color;
    this.active = 0;
  }

  draw() {
    if (!this.active) return;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = `rgba(156,217,249,${this.active})`;
    ctx.fill();
  }
}

// Function to initialize the header
const initHeader = () => {
  width = window.innerWidth;
  height = window.innerHeight;
  target = { x: width / 2, y: height / 2 };

  largeHeader.value.style.height = height + "px";
  const canvas = demoCanvas.value;
  canvas.width = width;
  canvas.height = height;
  ctx = canvas.getContext("2d");

  // Create points
  points = [];
  for (let x = 0; x < width; x += width / 20) {
    for (let y = 0; y < height; y += height / 20) {
      const px = x + (Math.random() * width) / 20;
      const py = y + (Math.random() * height) / 20;
      const point = { x: px, originX: px, y: py, originY: py };
      points.push(point);
    }
  }

  // For each point, find the 5 closest points
  points.forEach((p1) => {
    let closest = [];
    points.forEach((p2) => {
      if (p1 !== p2) {
        let placed = false;
        for (let k = 0; k < 5; k++) {
          if (!placed) {
            if (closest[k] === undefined) {
              closest[k] = p2;
              placed = true;
            }
          }
        }

        for (let k = 0; k < 5; k++) {
          if (!placed) {
            if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
              closest[k] = p2;
              placed = true;
            }
          }
        }
      }
    });
    p1.closest = closest;
  });

  // Assign a circle to each point
  points.forEach((point) => {
    const circle = new Circle(
      point,
      2 + Math.random() * 2,
      "rgba(255,255,255,0.3)"
    );
    point.circle = circle;
  });
};

// Event handling functions
const mouseMove = (e) => {
  const posx =
    e.pageX ||
    e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
  const posy =
    e.pageY ||
    e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  target.x = posx;
  target.y = posy;
};

const scrollCheck = () => {
  animateHeader = document.body.scrollTop <= height;
};

const resize = () => {
  width = window.innerWidth;
  height = window.innerHeight;
  largeHeader.value.style.height = height + "px";
  const canvas = demoCanvas.value;
  canvas.width = width;
  canvas.height = height;
};

// Function to shift points
const shiftPoint = (p) => {
  gsap.to(p, {
    duration: 1 + 1 * Math.random(),
    x: p.originX - 50 + Math.random() * 100,
    y: p.originY - 50 + Math.random() * 100,
    ease: "circ.inOut",
    onComplete: () => shiftPoint(p),
  });
};

// Drawing and animation
const drawLines = (p) => {
  if (!p.active) return;
  p.closest.forEach((closePoint) => {
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(closePoint.x, closePoint.y);
    ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
    ctx.stroke();
  });
};

const animate = () => {
  if (animateHeader) {
    ctx.clearRect(0, 0, width, height);
    points.forEach((point) => {
      const distance = Math.abs(getDistance(target, point));
      if (distance < 4000) {
        point.active = 0.3;
        point.circle.active = 0.6;
      } else if (distance < 20000) {
        point.active = 0.1;
        point.circle.active = 0.3;
      } else if (distance < 40000) {
        point.active = 0.02;
        point.circle.active = 0.1;
      } else {
        point.active = 0;
        point.circle.active = 0;
      }

      drawLines(point);
      point.circle.draw();
    });
  }
  requestAnimationFrame(animate);
};

// Initialize animation
const initAnimation = () => {
  animate();
  points.forEach(shiftPoint);
};

// Lifecycle hooks
onMounted(() => {
  initHeader();
  initAnimation();
  window.addEventListener("mousemove", mouseMove);
  window.addEventListener("scroll", scrollCheck);
  window.addEventListener("resize", resize);
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", mouseMove);
  window.removeEventListener("scroll", scrollCheck);
  window.removeEventListener("resize", resize);
});
</script>

<style scoped>
/* Header */
.large-header {
  position: relative;
  width: 100%;
  background: #333;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  z-index: 1;
}

/* #large-header {
  background-image: url("https://www.marcoguglie.it/Codepen/AnimatedHeaderBg/demo-1/img/demo-1-bg.jpg");
} */

.main-title {
  position: absolute;
  margin: 0;
  padding: 0;
  color: #f9f1e9;
  text-align: center;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}

.demo-1 .main-title {
  text-transform: uppercase;
  font-size: 4.2em;
  letter-spacing: 0.1em;
}

.main-title .thin {
  font-weight: 200;
}

@media only screen and (max-width: 768px) {
  .demo-1 .main-title {
    font-size: 3em;
  }
}
/* test */

* {
  margin: 0px;
  padding: 0px;
}

body {
  font-family: "Exo", sans-serif;
}

.context {
  width: 100%;
  position: absolute;
  top: 50vh;
}

.context h1 {
  text-align: center;
  color: #fff;
  font-size: 50px;
}

/* .area {
  background: #4e54c8;
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  width: 100%;
  height: 100vh;
} */

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
</style>

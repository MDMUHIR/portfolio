/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      scrollbar: {
        hide: "scrollbar-width: none; -ms-overflow-style: none;", // Hide for Firefox and IE
      },
    },
  },
  plugins: [],
};

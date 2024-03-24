import { ref } from "vue";
const educations = ref([
  {
    type: "PC",
    course: "Mastering Vue.js",
    institution: "Ostad Ltd",
    date: "2023 - 2024",
    result: "N/A",
  },
  {
    type: "PC",
    course: "Web Development",
    institution: "Softech IT",
    date: "2021 - 2022",
    result: "N/A",
  },
  {
    type: "EC",
    course: "BBA in Management",
    institution: "National University",
    date: "Continuing",
    result: "N/A",
  },
  {
    type: "EC",
    course: "HSC",
    institution: "Khoksa Govt. College, Kushtia",
    date: "2022",
    result: "GPA - 5.00 / 5.00",
  },
  {
    type: "EC",
    course: "SSC",
    institution: "Khoksa Govt. High School, Kushtia",
    date: "2020",
    result: "GPA - 5.00 / 5.00",
  },
]);

export { educations };

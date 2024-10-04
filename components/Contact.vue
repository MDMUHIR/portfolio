<script setup>
const contacts = reactive([
  {
    name: "Skype",
    link: "https://join.skype.com/invite/um45L2MIzxQP",
    image: "https://api.iconify.design/ph:skype-logo-fill.svg?color=%23ffffff",
  },
  {
    name: "Gmail",
    link: "mailto:mdmuhir04@gmail.com",
    image: "https://api.iconify.design/bx:bxl-gmail.svg?color=%23ffffff",
  },
  {
    name: "WhatsApp",
    link: "https://wa.link/m875rv",
    image:
      "https://api.iconify.design/mingcute:whatsapp-fill.svg?color=%23ffffff",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/md-muhir",
    image: "https://api.iconify.design/ri:linkedin-fill.svg?color=%23ffffff",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/md_muhiruddin",
    image:
      "https://api.iconify.design/hugeicons:new-twitter.svg?color=%23ffffff",
  },
  {
    name: "YouTube",
    link: "https://youtube.com/@codegrammarbd?si=b5Q9WA3fwe5dLE-o",
    image: "https://api.iconify.design/mdi:youtube.svg?color=%23ffffff",
  },
]);
</script>

<template>
  <div class="main">
    <div class="showcase flex flex-col justify-end items-center  gap-y-5 bg-[#000000ab] py-2 border border-red-500 md:px-1">
      <div class="w-1.5 border h-32 bg-[#dc2525eb]"></div>
      <div v-for="(contact, index) in contacts" :key="index">
        <a :href="contact.link" >
          <img :src="contact.image" alt="" class="w-5 md:w-6 mx-auto" />
        </a>
      </div>
    </div>
  </div>
</template>

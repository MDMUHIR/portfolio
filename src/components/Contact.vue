<script setup>
import Github from "../../assets/icons/contact/Github.vue";
import Skype from "../../assets/icons/contact/Skype.vue";
import Mail from "../../assets/icons/contact/Mail.vue";
import LinkedIn from "../../assets/icons/contact/LinkedIn.vue";
import Youtube from "../../assets/icons/contact/Youtube.vue";
import Whatsapp from "../../assets/icons/contact/Whatsapp.vue";
import { ref } from "vue";
import { toast } from "vue3-toastify";
const showmail = ref(false);

const copyText = () => {
  navigator.clipboard.writeText("mdmuhir04@gmail.com");

  showmail.value = true;

  toast("Email Address Copied !", {
    autoClose: 1000,
    theme: "auto",
    type: "success",
    position: "bottom-right",
  }); // ToastOptions
};
</script>

<template>
  <div class="container bg-white pt-3 mt-5 rounded">
    <h4 class="text-center p-1 bg-warning rounded">Ways to Contact me</h4>
    <div class="links">
      <ul class="list-group">
        <li class="link list-group-item d-flex">
          <a
            href="https://github.com/MDMUHIR"
            class="w-100 text-decoration-none fs-5 fw-medium btn btn-light"
            ><Github /> <span>Github</span></a
          >
        </li>
        <li class="link list-group-item d-flex">
          <div
            @click="copyText()"
            class="w-100 d-flex justify-content-center align-items-center btn btn-light"
          >
            <Mail />
            <p v-if="showmail" class="px-2 mt-3 fw-medium user-select-all">
              mdmuhir04@gmail.com
            </p>
            <h5 v-else class="px-2 mt-1 fs-5">Mail</h5>
          </div>
        </li>
        <li class="link list-group-item d-flex">
          <a
            href="https://join.skype.com/invite/um45L2MIzxQP"
            class="w-100 text-decoration-none fs-5 fw-medium btn btn-light"
            ><Skype /> <span>Skype</span></a
          >
        </li>

        <li class="link list-group-item d-flex">
          <a
            href="https://www.linkedin.com/in/md-muhir-uddin"
            class="w-100 text-decoration-none fs-5 fw-medium btn btn-light"
            ><LinkedIn /> <span>LinkedIn</span></a
          >
        </li>
        <li class="link list-group-item d-flex">
          <a
            href="https://wa.link/sytqw7"
            class="w-100 text-decoration-none fs-5 fw-medium btn btn-light"
            ><Whatsapp /> <span>Whatsapp</span></a
          >
        </li>

        <li class="link list-group-item d-flex">
          <a
            href="https://www.youtube.com/channel/UC09M-vv3Tt1253Q1OfrIY-A"
            class="w-100 text-decoration-none fs-5 fw-medium btn btn-light"
            ><Youtube /> <span>Youtube</span></a
          >
        </li>
      </ul>

      <p class="text-end pt-3 font-monospace" style="font-size: xx-small">
        ©️2024
      </p>
    </div>
  </div>
</template>

<style scoped></style>

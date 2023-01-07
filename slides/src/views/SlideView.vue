<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { remark } from "../remark";

const slideshow = ref(null);
onMounted(async () => {
  const id = useRoute().params.id;

  const res = await fetch(`/slides/slides/${id}.md`);
  if (res.status === 404) {
    window.location.href = "/slides/404";
  }
  slideshow.value = remark.create({
    sourceUrl: `/slides/slides/${id}.md`,
    highlightLanguage: "php",
    highlightStyle: "github",
  });
});
</script>

<template>
  <div
    class="absolute bottom-0 left-0 z-50 mx-2 mb-1 hover:text-cyan-700 transition-all"
  >
    <router-link class="underline" to="/">Liste des chapitres</router-link>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { remark } from "../remark";

const slideshow = ref(null);
onMounted(async () => {
  const id = useRoute().params.id;

  const res = await fetch(`/slides/md/${id}.md`);
  if (res.status === 404) {
    window.location.href = "/slides/404";
  }
  slideshow.value = remark.create({
    sourceUrl: `/slides/md/${id}.md`,
    highlightLanguage: "php",
    highlightStyle: "github",
  });
});
</script>

<template>
  <div
    class="absolute bottom-0 left-0 z-50 mx-2 mb-1 hover:text-cyan-700 transition-all"
  >
    <a class="underline" href="/slides/">Liste des chapitres</a>
  </div>
</template>

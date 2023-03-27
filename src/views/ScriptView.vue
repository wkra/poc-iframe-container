<template>
  <div>SCRIPT</div>
</template>

<script setup>
import { onMounted } from "vue";

const addScript = (url) => {
  let script = document.createElement("script");
  script.setAttribute("src", url);
  document.head.appendChild(script);
}

onMounted(async () => {
  const url = ''
  addScript(url);
});
</script>

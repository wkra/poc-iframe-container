<template>
  <div>
    <div>SCRIPT</div>
    <div id="app"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const addScript = (url) => {
  let script = document.createElement("script");
  script.setAttribute("src", url);
  document.head.appendChild(script);
};

onMounted(async () => {
  const url = process.env.VUE_APP_SCRIPT_SRC;

  addScript(url);
});
</script>

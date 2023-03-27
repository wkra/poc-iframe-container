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

const addStyle = (url) => {
  var newstyle = document.createElement("link");
  newstyle.setAttribute("rel", "stylesheet");
  newstyle.setAttribute("type", "text/css");
  newstyle.setAttribute("href", url);
   document.head.appendChild(newstyle);
};

onMounted(async () => {
  const scriptUrl = process.env.VUE_APP_SCRIPT_SRC;
  const styleUrl = process.env.VUE_APP_STYLE_SRC;

  addScript(scriptUrl);
  addStyle(styleUrl);
});
</script>

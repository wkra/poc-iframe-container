<template>
  <div>
  <div>IFRAME</div>
  <iframe :src="iframeSrc" width="100%"/>
  </div>
</template>

<script setup>
const iframeSrc = 'https://wkra.github.io/poc-iframe-list/'
</script>
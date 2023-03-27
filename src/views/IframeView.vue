<template>
  <div class="s-iframe">
    <div>IFRAME</div>
    <iframe
      class="s-iframe__iframe"
      :src="iframeSrc"
      width="100%"
      height="800"
    />
  </div>
</template>

<script setup>
const iframeSrc = process.env.VUE_APP_IFRAME_SRC;
</script>

<style lang="scss">
.s-iframe {
  &__iframe {
    border: none;
  }
}
</style>

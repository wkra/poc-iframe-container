<template>
  <div>
    <button type="button" @click="emitHandler">Emit event</button>
    <div v-if="showCustomEventMessage">CUSTOM EVENT FROM CHILD RECIVED</div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

const showCustomEventMessage = ref(false);

const emitHandler = () => {
  const myEvent = new CustomEvent("parentevent", {
    detail: {},
    bubbles: true,
    cancelable: true,
    composed: false,
  });
  document.dispatchEvent(myEvent);
  console.log("parentevent emited");
};

onMounted(() => {
  document.addEventListener("childevent", function () {
    showCustomEventMessage.value = true;
    console.log("childevent received");
  });
});
</script>

<template>
  <div>
    <hr />
    <div>Test parent / child comunication</div>
    <button type="button" @click="emitHandler">Emit event do child</button>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const showCustomEventMessage = ref(false);

const emitHandler = () => {
  const myEvent = new CustomEvent("parentevent", {
    detail: {},
    bubbles: true,
    cancelable: true,
    composed: false,
  });
  console.log("emit parent event");
  document.dispatchEvent(myEvent);
};

const eventHandler = () => {
  showCustomEventMessage.value = true;
  alert("I am container. Event from child reveived");
};

onMounted(() => {
  document.addEventListener("childevent", eventHandler);
});

onUnmounted(() => {
  document.removeEventListener("childevent", eventHandler);
});
</script>

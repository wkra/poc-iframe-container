<template>
  <div>
    <hr />
    <div>Test parent / child comunication</div>
    <button type="button" @click="emitHandler">Emit event do child</button>
    <button type="button" @click="emitPostMessage">Emit postMessage</button>
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

const emitPostMessage = () => {
  window.parent.postMessage(
    { myCustomParent: true, message: "message from parent" },
    "*"
  );
};

const popMessageHandler = (event) => {
  const urls = [
    "http://localhost:8081",
    "http://localhost:8080",
    "https://wkra.github.io/poc-iframe-list",
    "https://wkra.github.io/poc-iframe-container",
  ];

  if (!urls.includes(event.origin)) return;
  if (event.data.myCustomChild) alert(event.data.message);
};

onMounted(() => {
  document.addEventListener("childevent", eventHandler);
  window.addEventListener("message", popMessageHandler);
});

onUnmounted(() => {
  document.removeEventListener("childevent", eventHandler);
  window.removeEventListener("message", popMessageHandler);
});
</script>

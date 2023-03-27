<template>
  <div>
    <div>
      <form @submit.prevent="cookieSaveHandler">
        <label>Cookie Input</label>
        <input v-model="cookieInput" />
        <button type="submt">Save</button>
      </form>
    </div>
    <div>
      <form @submit.prevent="localStorageHandler">
        <label>localStore Input</label>
        <input v-model="localStorageInput" />
        <button type="submt">Save</button>
      </form>
    </div>
    <div>
      <form @submit.prevent="sessionStorageHandler">
        <label>sessionStorage Input</label>
        <input v-model="sessionStorageInput" />
        <button type="submt">Save</button>
      </form>
    </div>
    <div>
      <div>
        <div>Cookie item: {{ cookieVal }}</div>
        <div>localStore item: {{ localStorageVal }}</div>
        <div>sessionStore item: {{ sessionStorageVal }}</div>
      </div>
    </div>
    <button type="button" @click="emitHandler">Emitt event</button>
  </div>
</template>
<script setup>
import { useCookies } from "vue3-cookies";
import { ref, onMounted } from "vue";

const { cookies } = useCookies();
const itemKey = "item";

const cookieInput = ref("");
const localStorageInput = ref("");
const sessionStorageInput = ref("");

const cookieVal = ref("");
const localStorageVal = ref("");
const sessionStorageVal = ref("");

const cookieSaveHandler = () => {
  cookies.set(itemKey, cookieInput.value);
  getStoredValues();
};

const localStorageHandler = () => {
  localStorage.setItem(itemKey, localStorageInput.value);
  getStoredValues();
};

const sessionStorageHandler = () => {
  sessionStorage.setItem(itemKey, sessionStorageInput.value);
  getStoredValues();
};

const getStoredValues = () => {
  cookieVal.value = cookies.get(itemKey);
  localStorageVal.value = localStorage.getItem(itemKey) || "none";
  sessionStorageVal.value = sessionStorage.getItem(itemKey) || "none";
};

const emitHandler = () => {
  const myEvent = new CustomEvent("myevent", {
    detail: {},
    bubbles: true,
    cancelable: true,
    composed: false,
  });
  document.dispatchEvent(myEvent);
};

onMounted(() => {
  getStoredValues();
});
</script>

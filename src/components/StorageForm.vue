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
    <CustomEvent />
  </div>
</template>
<script setup>
import { useCookies } from "vue3-cookies";
import { ref, onMounted } from "vue";
import CustomEvent from "./CustomEvent.vue";

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

onMounted(() => {
  getStoredValues();
});
</script>

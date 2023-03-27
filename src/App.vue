<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/iframe">IFRAME</router-link> |
    <router-link to="/script">SCRIPT</router-link>
  </nav>
  <div>
    <h2>I AM PARENT / CONTAINER</h2>
    <StorageForm />
  </div>
  <router-view />
</template>

<script setup>
import StorageForm from './components/StorageForm.vue';

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

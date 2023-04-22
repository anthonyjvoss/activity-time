<template>
  <div id="app">
    <div class="topnav">
      <nuxt-link to="/" class="header-link">
        <h1 class="main-header">{{ header }}</h1>
      </nuxt-link>
    </div>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: 'Activity Time'
    }
  },
}
</script>

<style global>
#app {
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
}
</style>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.main-header {
  padding: 5px;
  margin: 5px;
  border-style: solid;
  border-radius: 6px;
}

.header-link {
  color: #FFFFFFDE;
}

.topnav {
  overflow: hidden;
  background-color: #877e7e;
}
</style>

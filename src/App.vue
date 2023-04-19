<template>
  <div class="topnav">
    <a href="/activities" class="header-link">
      <h1 class="main-header">{{ header }}</h1>
    </a>
  </div>
  <router-view></router-view>
</template>

<script>

export default {
  data() {
    return {
      header: 'Activity Time'
    }
  }
}
</script>

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

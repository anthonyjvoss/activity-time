<template>
  <div id="app">
    <header class="topnav">
      <nav class="flex flex-row py-2 px-4 gap-4 items-center">
        <nuxt-link to="/activityhome">
          <h1 class="main-header">{{ header }}</h1>
        </nuxt-link>
        <ul class="flex flex-col mr-4 flex-1 justify-end gap-x-10 items-end md:items-center md:flex-row md:mr-0">
          <nuxt-link class="text-white text-lg" to="/profile">
            Profile
          </nuxt-link>
          <button
            class="logout-link text-white text-lg"
            @click="client.auth.signOut()"
          >
            Logout
          </button>
        </ul>
      </nav>
    </header>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
const client = useSupabaseAuthClient()
const header = 'Activity Time'
</script>

<style global>
#app {
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
}
</style>

<style scoped lang="scss">
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
.topnav {
  overflow: hidden;
  background-color: #877e7e;
  border-bottom: #add8e6 2px solid;
}

.logout-link {
  background: none;
  padding: 0;
}
</style>

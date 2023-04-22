<template>
  <div class="landing-banner">
    Welcome to Activity Time
  </div>
  <button
    @click="login"
  >
    Login
  </button>
</template>

<script>
export default {
  name: 'ActivityTimeHome',
  methods: {
    login() {
      this.$auth0.loginWithRedirect();
    }
  }
};
</script>

<style lang="scss" scoped>
  .landing-banner {
    margin: 20px;
  }
</style>

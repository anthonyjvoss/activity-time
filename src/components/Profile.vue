<template>
  <h2>
    Profile
  </h2>
  <div>
    User: {{ user }}
  </div>
</template>

<script>
export default {
  name: 'ActivityTimeProfile',

  data() {
    return {
      user: this.$auth0.user,
      isAuthenticated: this.$auth0.isAuthenticated,
      isLoading: this.$auth0.isLoading,
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>

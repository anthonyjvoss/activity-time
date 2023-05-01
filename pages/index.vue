<template>
  <div class="landing-banner">
    Welcome to Activity Time
  </div>
  <form 
    @submit.prevent="() => (isSignUp ? signUp() : login())"
    class="flex flex-col gap-2"
  >
    <input 
      type="email"
      placeholder="Email"
      v-model="email"
      class="p-2 rounded"
    />
    <input 
      type="password"
      placeholder="Password"
      v-model="password"
      class="p-2 rounded"
    />
    <button>
      Login
    </button>
  </form>
</template>

<script setup>
const client = useSupabaseClient()
const email = ref('')
const password = ref('')
const isSignUp = ref(true)

const login = async () => {
  const { user, error } = await client.auth.login()
}

const signUp = async () => {
  const { user, error } = await client.auth.signUp({
    email: email.value,
    password: password.value
  })
}
</script>

<style lang="scss" scoped>
  .landing-banner {
    margin: 20px;
  }
</style>

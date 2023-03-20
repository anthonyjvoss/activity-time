<template>
  <div>
    <input 
      type="text"
      :value="searchTerm"
      @input="setSearchTerm"
      placeholder="Enter activity search here..."
    />
  </div>
</template>

<script>
import _debounce from 'lodash/debounce'

export default {
  name: 'SearchInput',

  data() {
    return {
      searchTerm: ''
    }
  },
  methods: {
    setSearchTerm: _debounce( function (event) {
      this.searchTerm = event.target.value
      console.warn('search', this.searchTerm)
      this.$emit('input', this.searchTerm)
    }, 400)
  },
};
</script>

<style lang="scss" scoped>

</style>
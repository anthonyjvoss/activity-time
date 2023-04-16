<template>
  <div class="search-input-container">
    <input
      class="input-search" 
      type="search"
      v-model="searchInput"
      placeholder="Enter activity search here..."
    />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data() {
    return {
      searchInput: ''
    }
  }
};
</script>

<style lang="scss" scoped>

.search-input-container {
  margin-top: 20px;
}
.input-search {
  border-style: none;
  width: 200px;
  height: 20px;
  padding-left: 10px;
}

</style>
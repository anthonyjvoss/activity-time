<template>
  <div>
    <input 
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Enter activity search here..."
    />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: ['modelValue'],
  emits: ['update:modelValue']
};
</script>

<style lang="scss" scoped>

</style>
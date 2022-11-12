<template>
    <div class="info">
        <p>{{ msg }}</p>
    </div>
</template>

<script setup>
defineProps({
  msg: String,
})
</script>

<style lang="scss" scoped>
.info {
    background-color: lightgray;
    border-left: 6px solid gray;
    // width: max-content;
}
</style>
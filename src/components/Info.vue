<template>
    <div class="info">
        <div>{{ msg }}</div>
    </div>
</template>

<script>
export default {
    props: {
        msg: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.info {
    background-color: lightgray;
    border-left: 6px solid gray;
    // width: max-content;
    color: black;
}
</style>
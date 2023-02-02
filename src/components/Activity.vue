<template>
    <div>
        <h2>{{ activityType }} Activities</h2>
        <Info :msg="activityMsg" />
        
        <div v-for="activity in activityList" :key="activity.id">
            <p>{{ activity.name }}</p>
        </div>
    </div>
</template>

<script>
import Info from './Info.vue'

export default {
    props: {
        activityType: {
            type: String,
            default: ''
        },
        activityMsg: {
            type: String,
            default: ''
        },
        activityList: {
            type: Array,
            default: []
        }
    },
    data () {
        return {}
    },
    components: {
        Info
    }
}
</script>

<style lang="scss" scoped>

</style>
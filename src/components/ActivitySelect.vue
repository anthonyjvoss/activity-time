<template>
    <div class="mt-4">
        <h2 class="mb-2">Select an Activity Type</h2>
        <select 
          v-model="activity_selected"
          class="activity-select"
        >
            <option v-for="actType in activityTypes" :key="actType" :value="actType">
              {{ actType }}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        props: {
            activityTypes: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                activity_selected: ''
            }
        },
    }
</script>

<style lang="scss" scoped>
    option {
        color: black;
    }

    .activity-select {
      font-size: 16px;
      color: #FFFFFF;
      width: 160px;
    }
</style>

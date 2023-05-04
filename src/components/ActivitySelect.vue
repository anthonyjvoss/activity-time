<template>
    <div class="mt-4 text-xl text-emerald-500">
        <div class="mb-2">Select an Activity Type</div>
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
      color: #000000;
      width: 160px;
      background-color: #bab3b3;
      border: #add8e6 1px solid;
    }
</style>

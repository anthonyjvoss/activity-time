<template>
    <div>
        <h2>Select an Activity Type</h2>
        <select 
          v-model="activity_selected"
          class="activity-select"
        >
            <option disabled value="">Please select an activity type</option>
            <option v-for="type in activityTypes" :key="type" :value="type">
              {{ type }}
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
    }
</style>

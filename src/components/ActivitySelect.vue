<template>
    <div>
        <h2>Select an Activity Type</h2>
        <select 
          v-model="activity_selected"
          class="activity-select"
        >
            <option disabled value="">Please select an activity type</option>
            <option value="Independent">Independent</option>
            <option value="Guided">Guided</option>
            <option value="Parent Night">Parent Night</option>
        </select>
    </div>
</template>

<script>
    export default {
        props: {
            activityType: {
                type: String
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

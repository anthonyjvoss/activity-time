<template>
  <div>
    <h1 class="main-header">Cohen's Activity Time</h1>
  </div>
  <ActivitySelect @change="setActivity"/>
  <Activity 
    v-if="selected_activity"
    :activity-type="selected_activity"
    :activity-msg="activityData.msg"
    :activity-list="activityData.activities"
  />
</template>

<script>
import ActivitySelect from './components/ActivitySelect.vue'
import Activity from './components/Activity.vue'
import dataService from './services/dataService'

export default {
  data () {
    return {
     selected_activity: '',
     activityData: {}
    }
  },
  components: {
    ActivitySelect,
    Activity
  },
  methods: {
    setActivity (val) {
      this.selected_activity = val.target.value
      this.activityData = dataService.getActivityData(this.selected_activity)
    }
  }
}

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.main-header {
  border-style: solid;
  border-color: grey;
  border-radius: 30px;
  padding: 10px;
}
</style>

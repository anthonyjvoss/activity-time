<template>
  <div>
    <ActivitySelect 
      @change="setActivity"
      :activity-types="activityTypes"
    />
    <ActivityList 
      v-if="selected_activity"
      :activity-type="selected_activity"
      :activity-msg="activityMsg"
      :activity-data="activityData"
      :activity-tags="activityTags"
      :key="selected_activity"
    />
  </div>
</template>

<script>
import ActivitySelect from './ActivitySelect.vue'
import ActivityList from './ActivityList.vue'
import dataService from '../services/dataService'
import _ from 'lodash'

export default {
  data () {
    return {
     selected_activity: '',
     activityData: {},
     allData: {},
     activityTypes: [],
     activityTags: []
    }
  },
  components: {
    ActivitySelect,
    ActivityList
  },
  async created() {
    try{
      this.allData = await dataService.getActivityData()
      this.activityTypes = Array.from(new Set(this.allData.map(d => d.type)))
      this.activityTags = await dataService.getActivityTags()
    } catch(err) {
      console.error(err)
    }
  },
  computed: {
    activityMsg() {
      switch(this.selected_activity) {
        case 'Independent':
          return 'Activities that I can do by myself.'
        case 'Guided':
          return 'Activites that I can do with someone.'
        case 'Parent Night':
          return 'Activities that I can do on parent night.'
      }
    }
  },
  methods: {
    setActivity (val) {
      this.selected_activity = val.target.value
      this.activityData = this.allData.filter(activity => {
        return activity.type === this.selected_activity
      })
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

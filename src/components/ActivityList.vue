<template>
    <div class="activities-list">
        <h2>{{ activityType }} Activities</h2>
        <Info :msg="activityMsg" />
        <SearchInput 
          v-bind="searchTerm"
          class="activity-search"
        />
        <div 
          v-for="activity in activityData" 
          :key="activity.id"
          class="activity-wrapper"
        >
            <ActivityCard 
              :activity="activity"
            />
        </div>
    </div>
</template>

<script>
import Info from './Info.vue'
import ActivityCard from './ActivityCard.vue'
import SearchInput from './SearchInput.vue'

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
        activityData: {
            type: Array,
            default: []
        }
    },
    components: {
        Info,
        ActivityCard,
        SearchInput
    },
    data() {
      return {
        searchTerm: ''
      }
    }
}
</script>

<style lang="scss" scoped>
.activities-list {
  border: lightblue 1px solid;
  border-radius: 4px;
  padding: 10px 10px 20px 10px;
  margin-top: 20px;
}

.activity-wrapper {
  margin-top: 20px;
}

:deep .activity-search input{
  border-style: none;
  width: 200px;
  height: 20px;
  margin-top: 20px;
  padding-left: 10px;
}
</style>
<template>
    <div class="activities-list">
        <h2>{{ activityType }} Activities</h2>
        <Info :msg="activityMsg" />
        <SearchInput 
          v-bind="searchTerm"
          class="activity-search"
        />
        <div
          class="activity-tags"
        >
          <ActivityTagPill 
            v-for="tag in tagList"
            :key="tag"
            :tag-label="tag.tagName"
            :tag-color="tag.tagColor"
          />
        </div>
        <div 
          v-for="activity in activityData" 
          :key="activity.id"
          class="activity-wrapper"
        >
            <ActivityCard 
              :activity="activity"
              :activity-tags="activityTags"
            />
        </div>
    </div>
</template>

<script>
import Info from './Info.vue'
import ActivityCard from './ActivityCard.vue'
import ActivityTagPill from './ActivityTagPill.vue'
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
        },
        activityTags: {
            type: Array,
            default: []
        }
    },
    components: {
        Info,
        ActivityCard,
        ActivityTagPill,
        SearchInput
    },
    data() {
      return {
        searchTerm: ''
      }
    },
    computed: {
      tagList() {
        const currentTags = (Array.from(new Set((this.activityData.map(d => d.tags)).flat())))
        const tagData = this.activityTags.filter(tag => {
          return currentTags.includes(tag.tagName)
        })

        return tagData || []
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

.activity-tags {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
<template>
    <div class="activities-list">
        <h2>{{ activityType }} Activities</h2>
        <Info :msg="activityMsg" />
        <div class="search-container">
          <SearchInput 
            @input="setSearchTerm"
            class="activity-search"
          />
          <img 
            @click="getRandomActivity"
            src="../assets/pokeball.png"
            class="random-image"
            title="Click for a random activity"
          />
        </div>
        <div
          class="activity-tags"
        >
          <ActivityTagPill 
            v-for="tag in tagList"
            :key="tag.id"
            :tag-label="tag.tagName"
            :tag-color="tag.tagColor"
            @selected="toggleTagFilters"
          />
        </div>
        <div 
          v-if="!filterSearch.length"
          class="empty-state"
        >
          No activities match selected tags or search
        </div>
        <div 
          v-else  
          class="activity-grid"
        >
            <ActivityCard
              v-for="activity in filterSearch"
              :key="activity.id"
              :activity="activity"
              :activity-tags="activityTags"
              @show-activity="setSelectedActivity"
              class="activity-wrapper"
            />
        </div>
        <ActivityModal 
          v-if="isModalVisible"
          @close="closeModal"
          :key="selectedActivity.id"
          :activity="selectedActivity"
          :activity-tags="activityTags"
        />
    </div>
</template>

<script>
import _debounce from 'lodash/debounce'
import Info from './Info.vue'
import ActivityCard from './ActivityCard.vue'
import ActivityTagPill from './ActivityTagPill.vue'
import SearchInput from './SearchInput.vue'
import ActivityModal from './modals/ActivityModal.vue'

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
        SearchInput,
        ActivityModal
    },
    data() {
      return {
        searchTerm: '',
        tagFilters: [],
        isModalVisible: false,
        selectedActivity: ''
      }
    },
    computed: {
      tagList() {
        const currentTags = (Array.from(new Set((this.activityData.map(d => d.tags)).flat())))
        const tagData = this.activityTags.filter(tag => {
          return currentTags.includes(tag.tagName)
        })

        return tagData || []
      },
      filterSearch() {
        let doSearch = this.searchTerm !== ''
        if (this.tagFilters.length) {
          let filteredActivities = this.activityData.filter(activity => {
            return activity.tags.some(t => this.tagFilters.indexOf(t) >= 0)
          })
          if (doSearch) {
            return filteredActivities.filter(t => {
              return t.name.toLowerCase().includes(this.searchTerm.toLowerCase())
            })
          } else {
            return filteredActivities
          }
        } else {
          if (doSearch) {
            return this.activityData.filter(t => {
              return t.name.toLowerCase().includes(this.searchTerm.toLowerCase())
            })
          } else {
            return this.activityData
          }
        }
      }
    },
    methods: {
      toggleTagFilters(e) {
        let tagName = e.tagName
        let selected = e.selected
        if (!selected && this.tagFilters.includes(tagName)) {
          let index = this.tagFilters.indexOf(tagName)
          this.tagFilters.splice(index, 1)
        } else if (selected && !this.tagFilters.includes(tagName)) {
          this.tagFilters.push(tagName)
        }
      },
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      setSelectedActivity(activity) {
        this.selectedActivity = activity
        this.showModal()
      },
      getRandomActivity() {
        let randomActivity = this.filterSearch[Math.floor(Math.random()*this.filterSearch.length)]
        this.selectedActivity = randomActivity
        this.showModal()
      },
      setSearchTerm: _debounce(function (e) {
        this.searchTerm = e.target.value
      }, 300)
    }
}
</script>

<style lang="scss" scoped>
.activities-list {
  border: lightblue 1px solid;
  border-radius: 4px;
  padding: 10px 10px 20px 10px;
  margin: 20px;
}

.activity-wrapper {
  margin-top: 20px;
}

.activity-tags {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.search-container {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
}

.random-image {
  width: 22px;
  height: 22px;
  margin: 20px 0px 0px 10px;
}

.empty-state {
  margin-top: 20px;
}

.activity-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
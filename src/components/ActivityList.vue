<template>
    <div class="activities-card">
        <h2>{{ activityType }} Activities</h2>
        <Info :msg="activityMsg" />
        
        <div 
          v-for="activity in activityData.activities" 
          :key="activity.id"
          class="activity-wrapper"
        >
            <div
              class="activity-name"
            >
              <p>
                {{ activity.name }}
              </p>
            </div>
            <div 
              class="activity-tags"
              v-if="activity.tags.length"
            >
              <button
              v-for="tag in activity.tags"
              :key="tag"  
              class="tag"
              >
                {{ tag }}
              </button>
            </div>
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
        activityData: {
            type: Object,
            default: {}
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
.activities-card {
  border: lightblue 1px solid;
  border-radius: 4px;
  padding: 10px;
  margin-top: 20px;
}

.activity-wrapper {
  margin-top: 20px;
}

.activity-name {
  & p {
    margin: 4px;
  }
  font-size: 16px;
  :hover {
    background-color: lightblue;
    color: black;
  }
}

.activity-tags {
  display: flex;
  justify-content: center;
}

.tag {
  border-radius: 16px;
  text-align: center;
  border: lightseagreen 0.5px solid;
  padding: 5px 10px;
  margin: 0 2px;
  font-size: 12px;
}
</style>
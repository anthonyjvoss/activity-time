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

<script setup>
const client = useSupabaseClient()
import ActivitySelect from '~/components/ActivitySelect.vue'
import ActivityList from '~/components/ActivityList.vue'
import _ from 'lodash'

let selected_activity = ref('')
let activityData = ref({})

const { data: allData } = await useAsyncData('allData', async () => {
  const { data } = await client
    .from('activities')
    .select('*')
    .order('id')

  return data
})

const { data: activityTags } = await useAsyncData('activityTags', async () => {
  const { data } = await client
    .from('activityTags')
    .select('*')

  return data
})

const activityMsg = computed(() => {
  switch(selected_activity) {
    case 'Independent':
      return 'Activities that I can do by myself.'
    case 'Guided':
      return 'Activites that I can do with someone.'
    case 'Parent Night':
      return 'Activities that I can do on parent night.'
  }
})

const activityTypes = computed(() => {
  return Array.from(new Set(allData.value.map(d => d.type)))
})

const setActivity = (val) => {
  console.warn('allData', allData.value)
  selected_activity.value = val.target.value
  activityData.value = allData.value.filter(activity => {
    return activity.type === selected_activity.value
  })
  console.warn({
    sel: selected_activity,
    dat: activityData,
    msg: activityMsg.value,
    tags: activityTags.value
  })
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

.user-toolbar {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>

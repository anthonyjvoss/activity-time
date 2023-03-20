<template>
  <div>
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
      <ActivityTagPill 
        v-for="tag in activity.tags"
        :key="tag"
        :tagLabel="tag"
      />
    </div>
  </div>
</template>

<script>
import ActivityTagPill from './ActivityTagPill.vue';

export default {
  name: 'ActivityCard',
  props: {
    activity: {
      type: Object,
      default: {}
    }
  },
  components: {
    ActivityTagPill
  }
};
</script>

<style lang="scss" scoped>
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
</style>
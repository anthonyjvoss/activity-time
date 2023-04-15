<template>
  <div 
    class="card-wrapper"
    @click="$emit('show-activity', activity)"
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
      <ActivityTagPill 
        v-for="tag in tagList"
        :key="tag.id"
        :tag-label="tag.tagName"
        :tag-color="tag.tagColor"
        variant="dot"
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
    },
    activityTags: {
      type: Array,
      default: []
    }
  },
  components: {
    ActivityTagPill
  },
  computed: {
    tagList() {
      let tagData = []
      for (let tag of this.activity.tags) {
        let d = this.activityTags.find(t => {
          return t.tagName === tag
        })
        if (d) tagData.push(d)
      }

      return tagData || []
    }
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

.card-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
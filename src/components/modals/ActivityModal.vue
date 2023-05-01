<template>
  <div class="modal-backdrop">
    <div class="modal" v-click-away="close" >
      <header class="modal-header text-lg">
        {{ activity.name }}
        <button
          type="button"
          class="btn-close"
          @click="close"
        >
          x
        </button>
      </header>

      <div class="activity-tags gap-4">
        <ActivityTagPill 
          v-for="tag in tagList"
          :key="tag.id"
          :tag-label="tag.tagName"
          :tag-color="tag.tagColor"
          :is-modal-view="true"
        />
      </div>

      <section class="modal-body">
        {{ activity.description }}
       </section>
    </div>
  </div>
</template>

<script>
import ActivityTagPill from '../ActivityTagPill.vue'
import { directive } from 'vue3-click-away'

export default {
  directives: {
    ClickAway: directive
  },
  name: 'ActivityModal',
  components: {
    ActivityTagPill
  },
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
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #3f6264;
    box-shadow: 0px 0px 40px #3f6264;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 250px;
    min-height: 275px;
    border-radius: 6px;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #3c3737;
    color: #8bd3c7;
    justify-content: center;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

  .activity-tags {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
</style>

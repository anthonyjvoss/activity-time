<template>
  <button
    type="button"
    class="tag"
    :value="tagLabel"
    :class="{selected: isSelected, dot: variant === 'dot'}"
    @click="toggleSelected"
    :style="tagStyles"
  >
    {{ variant !== 'dot' ? tagLabel : '' }}
  </button>
</template>

<script>
export default {
  name: 'ActivityTagPill',
  props: {
    tagLabel: {
      type: String,
      default: ''
    },
    showClose: {
      type: Boolean,
      default: false
    },
    tagColor: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'button'
    }
  },
  data() {
    return {
      isSelected: false
    }
  },
  computed: {
    tagStyles() {
      let style = {
        border: `${this.tagColor} 1px solid`
      }

      if (this.isSelected || this.variant === 'dot') {
        style['background-color'] = this.tagColor
      } else {
        style['background-color'] = '#1a1a1a'
      }

      return style
    }
  },
  methods: {
    toggleSelected(e) {
      this.isSelected = !this.isSelected
      this.$emit('selected', {
        tagName: e.target.value,
        selected: this.isSelected
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.tag {
  border-radius: 16px;
  text-align: center;
  padding: 0px 5px;
  margin: 0 2px;
  font-size: 12px;
  background-color: #1a1a1a;
  color: #FFFFFF;
}

.dot {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  display: inline-block;
}
</style>
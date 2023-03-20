<template>
  <div>
    <button  
      class="tag"
      :style="tagBorderStyle"
      >
        {{ tagLabel }}
      </button>
  </div>
</template>

<script>
export default {
  name: 'ActivityTagPill',
  props: {
    tagLabel: {
      type: String,
      default: ''
    }
  },
  computed: {
    tagBorderStyle() {
      switch(this.tagLabel) {
        case 'quiet':
          return 'border: lightseagreen 1px solid'
        case 'loud':
          return 'border: #CC5500 1px solid'
        case 'creative':
          return 'border: #B87333 1px solid'
        case 'educational':
          return 'border: #808000 1px solid'
        case 'motion':
          return 'border: #BF40BF 1px solid'
        case 'outside':
          return 'border: #954535 1px solid'
        case 'relaxing':
          return 'border: #6F8FAF 1px solid'
        default:
          return ''
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.tag {
  border-radius: 16px;
  text-align: center;
  padding: 5px 10px;
  margin: 0 2px;
  font-size: 12px;
}
</style>
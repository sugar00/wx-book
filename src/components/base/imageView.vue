<template>

    <div class="image-view">
      <img
        v-show="!isLoading&&!error"
        :class="round?'round image':'image'"
        :style="{height}"
        :src="src"
        :mode="mode"
        :lazy-load="lazyLoad"
        @load="onLoad"
        @error="onError"
      />
      <img
        v-if="isLoading||error"
        :class="round?'round image':'image'"
        :style="{height}"
        src="https://www.youbaobao.xyz/book/img/loading2.ae9e5924.jpeg"
        :mode="mode"
        :lazy-load="lazyLoad"

      />
    </div>
</template>

<script>
export default {
  name: 'imageView',
  props: {
    // 照片地址
    src: {
      type: String,
      default: ''
    },
    //  图片伸缩模式
    mode: {
      type: String,
      default: 'widthFix'
    },
    // 是否启动懒加载
    lazyLoad: {
      type: Boolean,
      default: true
    },
    //  是否为圆形图片
    round: {
      type: Boolean,
      default: false
    },
    //  图片高度
    height: {
      type: String,
      default: 'auto'
    }
  },
  warch: {
    // 监听src变化，如果src变化，则将isLoading置为true
    src (newValue, preValue) {
      console.log('img监听', newValue, preValue)
    }
  },
  data () {
    return {
      isLoading: true, // 图片是否处于加载状态
      error: false// 是否加载失败
    }
  },
  methods: {
    // 图片点击事件
    onClick () {
      this.$emit('onClick')// 父组件onClick事件
    },
    //  图片加载失败事件
    onError () {
      this.error = true
      this.isLoading = false
    },
    //  图片加载成功事件
    onLoad () {
      this.error = false
      this.isLoading = false
    }
  }

}
</script>

<style lang="scss" scoped>
.image-view{
width: 100%;//兼容父组件
  .image{
    width: 100%;//兼容父组件
    &.round{
      border-radius: 50%;
    }
  }

}
</style>

<template>
  <div>
    book
    <div class="red">h</div>
    <van-button type="primary" @click="jump">按钮</van-button>
  </div>
</template>

<script>
import {get} from '@/utils/request'
export default {
  methods: {
    jump () {
      // this.$router.push('/pages/index/main')
      get('www.baidu.com').then(Response => {
        console.log('fanhuui', Response)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.red {
  color: red;
}
</style>

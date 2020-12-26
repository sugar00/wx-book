<template>
  <div class="search-bar">
    <div class="search-bar-wrapper">
      <van-icon class="search" name="search" color="#858C96"></van-icon>
      <input
        class="search-bar-input"
        :focus="focus"
        :disabled="disabled"
        :maxlength="limit"
        :placeholder="hotSearch.length === 0?'搜索':hotSearch"
        v-model="searchWorld"
        @input="onChange"
        confirm-type="search"
        @comfirm="onComfirm"
        placeholder-style="color:#ADB4BE"
      />
      <van-icon class="clear" name="clear" color="#858C96" @click="onClearClick" v-if="searchWorld.length>0"></van-icon>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // 获取焦点
    focus: {
      type: Boolean,
      default: true
    },
    // 禁止
    disabled: {
      type: Boolean,
      default: false
    },
    // 限制
    limit: {
      type: Number,
      default: 50
    },
    //  热门搜索词
    hotSearch: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      searchWorld: ''// 搜索关键词

    }
  },
  methods: {
    onSearchBarClick () {
      this.$emit('onclick')// 触发父组件方法
    },
    onClearClick () {
      // 清空
      this.searchWorld = ''
      this.$emit('onClear')// 触发父组件方法
    },
    /*
    * 输入调用
    * */
    onChange (e) {
      const {value} = e.mp.detail
      this.$emit('onChange', value)
    },
    // 点击虚拟键盘搜索事件
    onComfirm (e) {
      const {value} = e.mp.detail
      this.$emit('onComfirm', value)
    },
    /*
    * 对输入框关键字赋值
    * */
    setValue (e) {
      console.log('赋值', e)
    },
    /*
    * 获取输入框的关键字
    * */
    getValue (e) {
      console.log('获取值', e)
    }
  }

}
</script>
<style lang="scss" scoped>
  .search-bar {
    padding:15px 15.5px;
    .search-bar-wrapper {
      padding:12px 17px;
      background:#F5F7F9;
      border-radius: 20px;
      display: flex;
      align-items: center;//垂直居中
      height: 40px;
      box-sizing: border-box;//box-sizing:border-box;属性来改变盒子的结构
     .search-bar-input{
       flex:1;//撑满内容
       margin-left: 8px;
       margin-right: 8px;
     }
      //图标 垂直居中
      .search{
        display: flex;
        align-items: center;
        height: 100%;
      }
      .clear{
        display: flex;
        align-items: center;
        height: 100%;
      }
    }
  }
</style>

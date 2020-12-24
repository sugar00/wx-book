<template>
  <div class="home">
   <SearchBar
     disabled
     @onclick="onSearchBarClick"/>
<HomeCard/>
<!--
 height="100px"
  mode="scaleToFill"
  -->
  </div>
</template>

<script>
import SearchBar from '../../components/home/searchBar'// 搜索框组件
import HomeCard from '../../components/home/homeCard'
// 照片组件
export default {
  components: {
    HomeCard,
    SearchBar

  },
  data () {
    return {

    }
  },
  methods: {
    /*
    * 单击搜索栏
    * */
    onSearchBarClick () {
      // 跳转搜索页面
    },
    /*
    * 照片点击
    * */
    imgOnClick () {}
  }
}
</script>

<style lang='scss' scoped>
.home{

}
</style>

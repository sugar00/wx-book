<template>
  <div class="home">
   <SearchBar
     :disabled="false"
     @onclick="onSearchBarClick"/>
    <HomeCard/>
    <HomeBanner
    title="mpvue2.0"
    sub-title="congchongchong"
    img="http://www.youbaobao.xyz/book/res/bg.jpg"
    @click="onBannerClick"
    />
    <HomeBook
    title="为你推荐"
    row="1"
    col="2"
    :data="data"
    mode="row"
    btn-text="更多"
    @onMoreClick="onBookMoreClick"
    @onBookClick="onHomeBookClick"/>
<!--
 height="100px"
  mode="scaleToFill"
  -->
  </div>
</template>

<script>
import SearchBar from '../../components/home/searchBar'// 搜索框组件
import HomeCard from '../../components/home/homeCard'// 图书卡片
import HomeBanner from '../../components/home/HomeBanner'
import HomeBook from '../../components/home/HomeBook'// 图书推荐组件
// banner
// 照片组件
export default {
  components: {
    HomeBook,
    HomeCard,
    SearchBar,
    HomeBanner

  },
  data () {
    return {
      data: [
        {
          'id': 225,
          'fileName': '2016_Book_MicrofinanceEUStructuralFundsA',
          'cover': 'https://www.youbaobao.xyz/book/res/img/Economics/2016_Book_MicrofinanceEUStructuralFundsA.jpeg',
          'title': 'Microfinance, EU Structural Funds and Capacity Building for Managing Authorities',
          'author': 'Giovanni Nicola Pes',
          'publisher': 'Palgrave Macmillan',
          'bookId': '2016_Book_MicrofinanceEUStructuralFundsA',
          'category': 3,
          'categoryText': 'Economics',
          'language': 'en',
          'rootFile': 'OEBPS/9781137536013.opf'
        },
        {
          'id': 88,
          'fileName': '2018_Book_BetweenMobilityAndMigration',
          'cover': 'https://www.youbaobao.xyz/book/res/img/SocialSciences/978-3-319-77991-1_CoverFigure.jpg',
          'title': 'Between Mobility and Migration',
          'author': 'Peter Scholten',
          'publisher': 'Springer International Publishing',
          'bookId': '2018_Book_BetweenMobilityAndMigration',
          'category': 2,
          'categoryText': 'SocialSciences',
          'language': 'en',
          'rootFile': 'OEBPS/package.opf'
        },
        {
          'id': 24,
          'fileName': '2018_Book_SecurityInComputerAndInformati',
          'cover': 'https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-95189-8_CoverFigure.jpg',
          'title': 'Security in Computer and Information Sciences',
          'author': 'Erol Gelenbe',
          'publisher': 'Springer International Publishing',
          'bookId': '2018_Book_SecurityInComputerAndInformati',
          'category': 1,
          'categoryText': 'ComputerScience',
          'language': 'en',
          'rootFile': 'OEBPS/package.opf'
        }
      ]
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
    imgOnClick () {},
    /*
    * 点击banner */
    onBannerClick () {},
    /*
  * 点击推荐组件 显示更多
  * */
    onBookMoreClick () {
      console.log('more Click')
    },
    /*
    * 点击图书事件
    * */
    onHomeBookClick () {
      console.log('book Click')
    }
  }

}
</script>

<style lang='scss' scoped>
.home{

}
</style>

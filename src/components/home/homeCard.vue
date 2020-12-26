<template>
<div class="home-card">
  <div class="home-card-inner">
<!--    用户信息-->
    <div class="user-info">
      <div class="avatar-wrapper">
        <image-view
          src="https://www.youbaobao.xyz/mpvue-res/logo.jpg"
          round
        />
      </div>

      <div class="nickname">{{'米老鼠'}}</div>
      <div class="shelf-text">书架共有{{3}}本好书</div>
      <div class="round-item"></div>

      <div class="shelf-text">特别精选</div>
    </div>
<!--    书本信息-->
    <div class="book-info">
<!--      书列表-->
      <div
      class="book-wrapper">
        <div class="book-img-wrapper">
        <image-view
        src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"></image-view>
        </div>
        <div class="book-img-wrapper">

        <image-view
          src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"></image-view>
        </div>
        <div class="book-img-wrapper">
        <image-view
          src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"></image-view>
        </div>

      </div>
<!--书架入口-->
      <div class="shelf-wrapper">
        <div class="shelf">书架</div>
        <van-icon class="arrow" name="arrow" size="11px" color="#828489"></van-icon>

      </div>
    </div>
<!--    漂浮的反馈-->
    <div class="feedback-wrapper" @click="onFeedBackClick"> 反馈 </div>
  </div>
<!--  要是用dialog记得添加dialog结点-->
  <van-dialog id="van-dialog"/>
</div>
</template>

<script>
import ImageView from '../base/imageView'
import Dialog from '../../../dist/wx/vant-weapp/dist/dialog/dialog'
export default {
  name: 'homeCard',
  components: {ImageView},
  props: {
    // 界面需要展示的数据，userInfo为用户信息，bookList为推荐图书信息，num为书架图书数量
    data: {
      type: String,
      default: null
    },
    //  今天是否签到
    hasSign: {
      type: Boolean,
      default: false
    },
    //  连续签到天数
    signDay: {
      type: Number,
      default: 0
    }
  },
  methods: {
  //  跳转到书架列表
    gotoShelf () {},
    // 图书点击事件
    onBookClick () {},
    // 签到事件
    // sign(){},
    /* 反馈 */
    onFeedBackClick () {
      Dialog.confirm({
        title: '反馈',
        message: '您是否确认提交反馈信息？',
        confirmButtonText: '是',
        cancelButtonText: '否'
      }).then(() => {
        console.log('点击是之后的事件')
      }).catch(() => {
        console.log('点击否之后的事件')
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.home-card{
  background-image: linear-gradient(-90deg, #54575F 0%, #595B60 100%);
  border-radius: 15px;
  margin: 22px 20px 0;
.home-card-inner{
  padding: 21.5px 17px 20px 20px;
  box-sizing: border-box;
  position: relative;
  .user-info{
    display: flex;
    align-items: center;
    .avatar-wrapper{
      width: 20px;
      height: 20px;
    }
    .nickname,.shelf-text{
      font-size: 12px;
      color: #FFF;
      margin: 0 8.5px;
    }
    .shelf-text{
      opacity: 0.7;//半透明
    }
    .round-item{
      width: 4px;
      height: 4px;
      color: #a2a2a2;
      border-radius: 50%;
      margin: 0 8px;
    }
  }
  //书架
  .book-info{
    display: flex;
    margin-top: 16.5px;
    .book-wrapper{
      flex: 1;//撑满
      display: flex;
      justify-content: space-around;//水平布局
      /*书架照片*/
      .book-img-wrapper{
        width: 72px;
        height: 101px;
      }
    }
    .shelf-wrapper{
      display: flex;
      align-items: center;//居中
      /*文字*/
      .shelf{
        width: 11px;
        font-size: 10.5px;
        word-break: break-word;//文字换行   安词换行
        color: #FFFFFF;
        opacity: .8;//透明度
      }
    /* 图标*/
    }
  }
  /*反馈*/
  .feedback-wrapper{
    position: absolute;//相对于home-card-inner
    right: 0;
    top: 19.5px;
    width: 44.5px;
    height: 23.5px;
    background: #707070;
    /*opacity: 0.3;*/
    border-radius: 100px 0 0 100px;
    line-height: 23.5px;
    text-align: center;
    color: #FFFFFF;
    font-size: 11px;
  }
}
}
</style>

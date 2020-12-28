<template>
<!--  推荐组件-->
    <div class="home-book">
<!--      头-->
      <div class="home-book-header">{{title}}</div>
      <!--      内容-->
      <div class="home-book-content">
<!--        两层循环，第一次获取row，第二层获取col -->
        <div class="home-book-row" v-for="(item,index) in bookData" :key="index">
          <div class="home-book-col" v-for="(book,bookIndex) in item" :key="bookIndex"
               :style="{flex:' 0 0 ' + (100/col) + '%'}">
<!--电子书信息展示
若mode分类为Row或者Col 则展示 book wrapper
否则展示 category 分类-->
            <div class="book-wrapper"
                 :style="{flexDirection:mode===HOME_BOOK_MODE.COL?'column':'row'}"
                 @click="onBookClick"
                 v-if="mode===HOME_BOOK_MODE.CO||mode===HOME_BOOK_MODE.ROW"
            >
              <ImageView :src="book.cover"/>
              <!--              垂直布局-->
              <div class="book-title-wrapper book-title-col"
                   v-if="mode===HOME_BOOK_MODE.COL">
                <div class="book-title">{{book.title}}</div>
              </div>
              <!--              水平布局-->
              <div class="book-title-wrapper book-title-row" v-else>
                <div class="book-title">
                  {{book.title}}
                </div>
                <div class="book-title-authot-wrapper">
                  <div class="book-author">
                    {{book.author}}
                  </div>
                  <div class="book-title book-author ">
                    {{book.categoryText}}
                  </div>
                </div>

              </div>
            </div>
            <div v-else class="category-wrapper">
            <!--分类名称-->
              <div class="category-text">{{book.text}}</div>
            <!--  图书数量-->
              <div class="category-num">{{book.num}}本书</div>
              <!--  照片-->
              <div class="category-img-wrapper">
              <!--  两张封面照片-->
                <div class="category-img1">
                  <image-view :src="book.cover"></image-view>
                </div>
                <div class="category-img2">
                  <image-view :src="book.cover2"></image-view>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <!--      尾巴-->
      <div class="home-book-footer" v-if="showBtn" @click="onMoreClick">
        <van-button round  custom-class="home-book-btn" >{{btnText}}</van-button>
      </div>
    </div>
</template>

<script>
import {HOME_BOOK_MODE, CATEGORY} from '../../utils/const'
import ImageView from '../base/imageView'
// 引用数据

export default {
  name: 'HomeBook',
  components: {ImageView},
  props: {
    // 标题栏
    title: {
      type: String,
      default: ''
    },
    // 图书列表
    data: {
      type: Array,
      default: []
    },
    // 按钮文本
    btnText: {
      type: String,
      default: ''
    },
    // 行数
    row: {
      type: Number,
      default: 0
    },
    // 列数
    col: {
      type: Number,
      default: 1
    },
    // 显示模式，row - 按行显示，col - 按列显示，category - 分类显示
    mode: {
      type: String,
      default: HOME_BOOK_MODE.ROW
    },
    // 是否显示标题
    showTitle: {
      type: Boolean,
      default: true
    },
    // 是否显示按钮
    showBtn: {
      type: Boolean,
      default: true
    },
    // 是否显示背景
    linearBg: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    console.log('booldata', this.bookData)
  },
  computed: {
  //  获取HOME_BOOK_MODE
    HOME_BOOK_MODE () {
      return HOME_BOOK_MODE
    },
    //  根据row col data 重新计算数据结构
    bookData () {
      // 从this 解构data row col
      const {data, row, col} = this
      //  判断data是否为空且data是否存在
      if (data && data.length > 0) {
        // 小程序不支持过滤 故在计算属性中进行转换处理
        data.forEach(book => {
          book.text = CATEGORY[book.categoryText.toLowerCase()]
        })
        // 计算要获取的数量
        const Number = row * col
        //  从data中截取数量
        const _bookData = data.slice(0, Number)
        // 输出的目标 _bookDataRow
        const _bookDataRow = []
        // 从0 开始循环
        let _row = 0
        while (_row < row) {
          // 0*2 0*2+2
          // 1*2 1*2+2
          _bookDataRow.push(_bookData.slice(_row * col, _row * col + col))
          _row++
        }
        return _bookDataRow
      } else {
        return []
      }
    }
  },
  methods: {
  //  点击更多按钮事件
    onMoreClick () {
      this.$emit('onMoreClick')
    },
    // 图书点击事件
    onBookClick () {
      this.$emit('onBookClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.home-book{
  margin-top: 10px;
  .home-book-header{
    padding: 13px 0 0 20.5px ;
  }
  .home-book-content{
    padding: 0 12px;//左右距离20px
    margin-top: 10.5px;
    .home-book-row{
      display: flex;
      flex-flow: row nowrap;//横着拍 不换行
      margin-top: 12px;
      .home-book-col{
        padding:0 8px;//图书与图书之间左右都为8像素
        box-sizing: border-box;//解决溢出问题
        /*除分类外的图书展示*/
        .book-wrapper{
          display: flex;
          flex-wrap: nowrap;
          width: 100%;
          .book-title-wrapper{
            &.book-title-col{
              .book-title{
                font-size: 12px;
                color: red;
                line-height: 16.5px;
                max-height: 33px;//行高*2 最多显示两行
                font-weight: 500;
                overflow: hidden;
                word-break: break-word;
              }
            }
            &.book-title-row{
              flex: 0 0 50%;
              padding: 10px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              .book-title{
                font-size: 14px;
                color: #1F1F1F;
                line-height: 18px;
                max-height: 36px;//行高*2 最多显示两行
                overflow: hidden;
                word-break: break-word;
              }
              .book-author{
                font-size: 12px;
                color: #868686;
                line-height: 14px;
                max-height: 14px;//行高*2 最多显示两行
                overflow: hidden;
                word-break: break-word;
              }
            }
          }
        }
      /*  分类展示*/
        .category-wrapper{
          position: relative;//便于两张图片的绝对定位
          display: flex;
          flex-direction: column;//换行展示
          justify-content: space-between;
          background: #F8F9FB;
          border-radius: 10px;
          height: 96px;
          padding: 13px 0 14.5px 16px;
          box-sizing: border-box;
          .category-text{
            font-size: 16px;
            line-height: 22.5px;
            width: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .category-num{
            color: #868686;
            font-size: 12px;
            line-height: 16.5px;
          }
          .category-img-wrapper{
            position: absolute;
            right: 0;
            bottom: 0;
            .category-img1{
              position: absolute;
              right: 0;
              bottom: -5px;
              z-index: 100;
              width: 48px;
            }
            .category-img2{
              position: absolute;
              right: 30px;
              bottom: -5px;
              z-index: 90;
              width: 36px;
            }
          }
        }
      }
    }
  }
  .home-book-footer{
   margin-top: 12px;
    padding: 0 20px;
  }
}
</style>
<style lang="scss">
.category-img1{
  .img{
    border-radius: 0 0 10px 0;

  }
}
.home-book-footer{
  .home-book-btn{
  width: 100%;//宽度设为100%
  font-size:14px ;
    color: #3696Ef;
    border: 1px solid #EDEEEE;
}
}
</style>

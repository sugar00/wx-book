<template>
    <div class="home-banner" @click="onClick">
      <div
        class="bg-img"
        :style="{backgroundImage: bgImage}"
      >
<!--        反标号在小程序中不被支持 ··-->
<!--主标题-->
        <div class="title">{{title}}</div>
<!--        副标题-->
        <div class="sub-title">{{subTitle}}</div>

      </div>
    </div>
</template>

<script>
export default {
  name: 'HomeBanner',
  props: {
    title: String,
    subTitle: String,
    img: String
  },
  computed: {
    bgImage () {
      return 'url(' + this.img + ')'
    }
  },

  methods: {
    onClick () {
      this.$emit('onclick')
    }

  }

}
</script>

<style lang="scss" scoped>
.home-banner{
  margin-top:20px;
  padding: 0 20px;

  .bg-img{
    /*垂直居中布局*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 125px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    border-radius: 10px;

    .title{
      margin-top: 10px;
      font-size: 18px;
      font-weight: 500;
      color: #FFFFFF;
    }
    .sub-title{
      padding: 5px 15px;
      background: deepskyblue;
      border: 1px solid #cccccc;
      border-radius: 50px;
      margin-top: 10px;
      font-size: 14px;
      color: #FFFFFF;
    }
  }
}
</style>

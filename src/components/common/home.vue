<template>
  <div class="home-box">

    <div class="content">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <van-tabbar v-model="active" @change="change">
      <van-tabbar-item>
        数据
        <template slot="icon" slot-scope="props">
          <span class="iconfont icon-1shuju"></span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item info="2">
        工单
        <template slot="icon" slot-scope="props">
          <span class="iconfont icon-suyaniconchanpinleibufenzuodaohangbufen88"></span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item >
      巡检
      <template slot="icon" slot-scope="props">
          <span class="iconfont icon-jingbao"></span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        我
        <template slot="icon" slot-scope="props">
          <span class="iconfont icon-wode2"></span>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vant';

  export default {
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
    },
    data() {
      return {
        active: 0
      }
    },
    mounted() {
      this.$router.push("/index");//页面重新加载还原到数据页面
    },
    methods: {
      change() {
//      alert(this.active)
        switch(this.active) {
          case 0: //x等于0
            this.$router.push("/index")
            break;
          case 1: //x等于1
            this.$router.push("/work-order")
            break;
          case 2:
            this.$router.push("/polling")
            break;
          case 3:
            this.$router.push("/mine")
            break;
        }
      }
    }
  }
</script>

<style scoped="scoped">
  .home-box {
  	height: 100%;
  	box-sizing: border-box;
    padding-bottom: 60px;
  }
  .home-box .content {
  	height:100%;
  }
  .fade-enter-active {
    -webkit-transition: all .5s;
    transition: all .5s;
  }
  .iconfont {
    font-size:20px;
  }
  /*.fade-leave-active {
    opacity: 0;
  }
 
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    -webkit-transform: translateX(-100px);
    transform: translateX(-100px);
  }*/
</style>
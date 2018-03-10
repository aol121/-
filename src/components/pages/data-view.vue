<template>
  <div class="refresh-box">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!--<template slot="pulling">
        <span class="iconfont icon-jingbao"></span> 下拉刷新...
      </template>-->
      数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 
      数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 
      数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 
      数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 
      数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 
      数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 
      数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 数据 
      数据 数据 数据 数据 数据 数据 数据 数据 数据
      <p>刷新次数: {{ count }}</p>
    </van-pull-refresh>
  </div>
</template>

<script>
  import { PullRefresh, Toast } from 'vant';
  import Axios from '@/api/axios'
  export default {
    components: {
      [PullRefresh.name]: PullRefresh,
      [Toast.name]: Toast,
      Axios:Axios,
    },
    data() {
      return {
        count: 0,
        isLoading: false
      }
    },
    mounted() {

    },
    methods: {
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
          this.count++;
        }, 500);
      },
      getData(){
      	Axios.get(url,params,success,failure)
      }
    }
  }
</script>

<style scoped="scoped">
	.refresh-box {
		height:100%;
	}
	.van-pull-refresh {
		height:100%;
	}
</style>
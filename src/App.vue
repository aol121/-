<template>
  <div id="app">
    <!--<van-cell-group class="item-list">
      <van-cell isLink icon="points" title="我的积分" />
      <van-cell isLink icon="gift" title="我收到的礼物" />
    </van-cell-group>-->
    <router-view/>
  </div>
</template>

<script>
import { Cell, CellGroup, Icon } from 'vant';

export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon
  }
};
</script>

<style>
  @import "../static/css/main.css";
  #app {
  	height:100%;
  }
body {
  background-color: #f8f8f8;
}

.van-cell__title .van-icon {
  font-size: 18px;
}
</style>

<template>
  <div class="login-box">
    <transition name="fade">
      <div class="" v-if="isShow">
        <h3>登录页面</h3>
        <van-cell-group>
          <van-field v-model="form.mobile" @change="uem=''" label="手机号" icon="clear" placeholder="请输入手机号" required :error-message="uem" @click-icon="form.mobile = '';uem=''" />

          <van-field v-model="form.password" @change="pem=''" type="password" label="密码" placeholder="请输入密码" :error-message="pem" required />
        </van-cell-group>
        <van-button type="primary" size="large" @click="login">登 录</van-button>
      </div>
    </transition>
  </div>

</template>

<script>
  import { Button, Field, CellGroup } from 'vant';
  export default {
    components: {
      [Button.name]: Button,
      [Field.name]: Field,
      [CellGroup.name]: CellGroup,
    },
    data() {
      return {
        isShow: false,
        uem: "",
        pem: "",
        form: {
          mobile: '15252011900',
          password: '123456'
        }
      }
    },
    mounted() {
      this.isShow = true;
    },
    methods: {
      login() {
        if(!(/1[\d]{10}/).test(this.form.mobile)) {
          this.uem = "手机号不正确"
          return;
        }
        if(this.form.password !== "123456") {
          this.pem = "密码不正确"
          return;
        }

        this.isShow = false;
        this.$router.push('/index');

      }
    }
  }
</script>

<style scoped="scoped">
  .login-box {
    padding: 150px 15px 0;
  }
  
  h3 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  button {
    margin-top: 30px;
  }
  .fade-enter-active {
    -webkit-transition: all .5s;
    transition: all .5s;
  }
</style>
<template>
  <div class="authentication">
    <div class="tel"> {{ config[active].title }} </div>
    <div >
      <template v-if="active === 1">
        <div class="content">
          <el-input placeholder="请输入手机验证码"></el-input>
          <div class="space"></div>
          <el-button @click="countDownFunc">{{ sendCodeBtn ? num + 's' : '获取短信验证码' }}</el-button>
        </div>
      </template>
      <template v-if="active === 2">
        <el-form class="elForm" v-if="btnParam === 1">
          <el-form-item>
            <div class="formItem">
              <el-select v-model="selectValue">
                <el-option 
                  v-for="(item, index) in config[active]['options']" 
                  :key="`options${index}`"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-input placeholder="请输入常用手机号" v-model="useTelNumber"></el-input>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="formItem">
              <el-input placeholder="请输入手机验证码"></el-input>
              <el-button @click="countDownFunc">{{ sendCodeBtn ? num + 's' : '获取短信验证码' }}</el-button>
            </div>
          </el-form-item>
        </el-form>
        <div class="content" v-else>
          <div style="width: 130px;">设置新密码</div>
          <el-input placeholder="请输入密码"></el-input>
        </div>
      </template>
      <template v-if="active === 3">
        <div class="complate">
          <div class="bigCircle">
            <div class="circle">
              <div class="logo"></div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="btnBox">
      <el-button class="btn mainbgcolor" @click="submit">{{ config[active].btnText }}</el-button>
    </div>
  </div>
</template>

<script>
import { debounce } from '@/util/index.js';
import circle from '../../../assets/imgs/sysControl/椭圆 3@2x.png'
export default {
  name: 'authentication',
  props: {
    active: {
      type: Number,
      default: 1
    },
    config: {
      type: Object,
      default: () => {
        return {
          1: {
            title: '',
            btnText: ''
          }
        };
      }
    }
  },
  data() {
    return{
      num: 60, // 发送验证码的间隔时间
      sendCodeBtn: false,
      selectValue: 1,
      useTelNumber: '',
      btnParam: 1, // 判断是修改预留手机号还是修改密码  1、修改手机号 2、修改密码
    }
  },
  mounted() {
    this.btnParam = this.$route.query.btnParam
  },
  methods: {
    submit:debounce(function() {
      this.$parent.stepsPlus(2)
    }, 500),
    countDownFunc() {
      this.num = 60;
      this.sendCodeBtn = true;
      let timer = setInterval(() => {
        if (this.num === 0) {
          this.sendCodeBtn = false
          this.num = 60;
          clearInterval(timer)
        }
        this.num = this.num - 1
      }, 1000)
    },
  }
}
</script>

<style lang="scss" scoped>
.authentication{
  padding: 20px 0;
  .tel{
    color: #616161;
    font-size: 26px;
    text-align: center;
    margin-bottom: 10px;
  }
  .content{
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    height: 130px;
    padding: 0 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    .space{
      width: 100px;
    }
  }
  .btnBox{
    display: flex;
    justify-content: center;
    align-items: center;
    .btn{
      width: 30%;
      margin-top: 20px;
      font-size: 18px;
    }
  }
}
.elForm{
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 20px 20%;
  .formItem{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.complate{
  display: flex;
  justify-content: center;
  align-items: center;
}
.bigCircle{
  width: 182px;
  height: 182px;
  background-image: $main-color;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  .circle{
    width: 164px;
    height: 164px;
    border-radius: 50%;
    position: relative;
    background-color: #fff;
    .logo{
      width: 119px;
      height: 92px;
      background: url('../../../assets/imgs/sysControl/Logo@2x.png');
      background-size: cover;
      position: absolute;
      top: calc(50% - 46px);
      left: calc(50% - 60px);
    }
  }
}

</style>
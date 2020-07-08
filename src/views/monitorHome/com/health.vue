<template>
  <div class="Health">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <template v-for="(key, index) in tabInfo">
        <el-tab-pane :label="key.name" :key="index" :name="key.key"></el-tab-pane>
      </template>
    </el-tabs>
   <div style="background-color: #F4F9FC;padding: 20px;">
      <div class="timeBox">
      <template  v-for="(key, index) in timeButtonInfo" >
        <el-button 
          class="timeBtn" 
          size="small" 
          :class="key.active? 'btnactive':''"
          :key="`timeBox${index}`" 
          @click="changRange(key.type)"
        >{{ key.name }}</el-button>
      </template>
      
    </div>
    <lineChart></lineChart>
    <div class="bottom">
      <div class="left bottomItem">
        <div class="title">
          AI健康解读
        </div>
        <div class="content">
          当前数据段最值：最高值xx,最低值xx；<br/>
          当前数据段状态：指标正常； <br/>
          当前数据段建议：建议保持当前状态。   
        </div>
      </div>
      <div class="right bottomItem">
        <el-button class="btn">即时心率指标检测</el-button>
        <span>查看AI健康分析报告</span>
      </div>
    </div>
   </div>
  </div>
</template>

<script>
import lineChart from '@/components/lineChart';
import amap from '@/components/amap';
export default {
  components: {
    lineChart,
    amap
  },
  data() {
    return {
      activeName: '1',
      tabInfo: [
        {
          name: '心率',
          key: '1'
        },
        {
          name: '血压',
          key: '2'
        },
        {
          name: '计步',
          key: '3'
        },
        {
          name: '睡眠',
          key: '4'
        },
        {
          name: '呼吸',
          key: '5'
        },
        {
          name: '血氧',
          key: '6'
        },
        {
          name: '心电',
          key: '7'
        },
        {
          name: '体温',
          key: '8'
        },
        {
          name: '血糖',
          key: '9'
        }
      ],
      timeButtonInfo: [
        {
          name: '24H',
          type: 'day',
          active: true
        },
        {
          name: '周',
          type: 'week',
          active: false
        },
        {
          name: '月',
          type: 'mounth',
          active: false
        },
        {
          name: '季',
          type: 'season',
          active: false
        },
        {
          name: '年',
          type: 'year',
          active: false
        }
      ]
    }
  },
  methods: {
    handleClick() {

    },
    changRange(type) {
      this.timeButtonInfo.forEach(val => {
        val.active = (val.type === type);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Health{
  background-color: #fff;
  padding: 25px;
  .bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
  }
  .left{
    display: flex;justify-content: center;
    align-items: center;
    .title{
      margin-right: 15px;
      color: #273359;
      font-size: 18px;
    }
  }
  .right{
    .btn{
      // bgc
    }
  }
}
.timeBox{
  display: flex;
  justify-content: center;
  align-items: center;
  .btnactive{
    background-color: #35D1CF!important;
    color: #fff!important;
  }
  .timeBtn{
    border: 1px solid #35D1CF;
    color: #273359;
    background-color: #EFF3F3;
    &:hover{
      background-color: #35D1CF;
      color: #fff;
    }
  }
}
</style>
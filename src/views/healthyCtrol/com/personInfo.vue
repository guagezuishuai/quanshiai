<template>
  <div class="top">
      <div class="imgBox">
        <el-image src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1475250788,2831348885&fm=26&gp=0.jpg"></el-image>
      </div>
      <div class="personInfo">
        <div class="infoGroup">
          <div class="infoItem">
            <div class="label">编号:<span></span></div>
            <div class="content">{{ info.number }}</div>
          </div>
          <div class="infoItem">
            <div class="label">姓名:</div>
            <div class="content">{{ info.name }}</div>
          </div>
          <div class="infoItem">
            <div class="label">性别:</div>
            <div class="content">{{ info.sex }}</div>
          </div>
          <div class="infoItem">
            <div class="label">年龄:</div>
            <div class="content">{{ info.age }}</div>
          </div>
        </div>
        <div class="infoGroup">
          <div class="infoItem">
            <div class="label">身高:</div>
            <div class="content">{{ info.height }}CM</div>
          </div>
          <div class="infoItem">
            <div class="label">体重:</div>
            <div class="content">{{ info.weight }}KG</div>
          </div>
          <div class="infoItem">
            <div class="label">BMI指数:</div>
            <div class="content">{{ info.BMI }}(肥胖)</div>
          </div>
          <div class="infoItem">
            <div class="label">血型:</div>
            <div class="content">{{ info.bloodType }}</div>
          </div>
        </div>
        <div class="infoGroup">
          <div class="infoItem">
            <div class="label">烟龄:</div>
            <div class="content">{{ info.smoke }}年</div>
          </div>
          <div class="infoItem">
            <div class="label">酒龄:</div>
            <div class="content">{{ info.drink }}年</div>
          </div>
          <div class="infoItem">
            <div class="label">药物过敏史:</div>
            <div class="content">{{ info.guomin }}</div>
          </div>
          <div class="infoItem">
            <div class="label">遗传病史:</div>
            <div class="content">{{ info.yichuan }}</div>
          </div>
        </div>
        <div class="infoGroup">
          <div class="infoItem">
            <div class="label">电话:</div>
            <div class="content">{{ info.tel }}</div>
          </div>
          <div class="infoItem">
            <div class="label">身份证号:</div>
            <div class="content">{{ info.idNumber }}</div>
          </div>
          <div class="infoItem">
            <div class="label">联系地址:</div>
            <div class="content">{{ info.address }}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        number: 'NB001',
        name: '王总',
        sex: '男',
        age: 45,
        height: 173,
        weight: 76,
        BMI: 27,
        bloodType: 'A',
        smoke: '10',
        drink: 6,
        guomin: '青霉素',
        yichuan: '无',
        tel: '16762767890',
        idNumber: '387388767890878900',
        address: '上海市嘉定区南翔镇槎溪路18009号9065室龄30年等'
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.top{
  display: flex;
  background-color: #fff;
  padding: 15px 40px;
  // justify-content: space-between;
  .imgBox{
    width: 160px;
  }
  .personInfo{
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .infoGroup{
      .infoItem{
        line-height: 50px;
        display: flex;
        .label{
          width: 90px;
        }
      }
    }
  }
}
</style>
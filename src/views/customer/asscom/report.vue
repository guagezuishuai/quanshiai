<template>
  <el-form label-width="110px" inline="">
    <div class="reportTitle">
      客户能力评估报告
    </div>
    <tableGroup :groupInfo="groupInfo[0]">
      <div slot="客户信息">
        <el-form-item label="客户姓名">
          <el-input disabled v-model="dataInfo.name" ></el-input>
        </el-form-item>
        <el-form-item label="评估编号">
          <el-input disabled v-model="dataInfo.number" ></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input disabled v-model="dataInfo.idNumber" ></el-input>
        </el-form-item>
        <el-form-item label="评估基准日期">
          <el-input disabled v-model="dataInfo.time" ></el-input>
        </el-form-item>
        <el-form-item label="客户电话">
          <el-input disabled v-model="dataInfo.tel" ></el-input>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-input disabled v-model="dataInfo.birthday" ></el-input>
        </el-form-item>
      </div>
      <div slot="指标分级">
        <el-form-item label="日常生活活动">
          <el-input disabled v-model="dataInfo.active" ></el-input>
        </el-form-item>
        <el-form-item label="精神状态">
          <el-input disabled v-model="dataInfo.spirit" ></el-input>
        </el-form-item>
        <el-form-item label="感知觉与沟通">
          <el-input disabled v-model="dataInfo.perception" ></el-input>
        </el-form-item>
        <el-form-item label="社会参与">
          <el-input disabled v-model="dataInfo.sociology" ></el-input>
        </el-form-item>
      </div>
      <div slot="客户能力初步等级">
        <el-form-item>
          <el-input v-model="dataInfo.level"></el-input>
        </el-form-item>
      </div>
      <div slot="等级变更条款">
        <div style="display: flex; align-items: center;">
          <el-checkbox-group style="line-height: 25px;" v-model="dataInfo.changeLevel.value">
            <template v-for="(key, index) in dataInfo.changeLevel.options">
              <el-checkbox :key="`changeLevel${index}`" :value="key.value" :label="key.lable"></el-checkbox>
            </template>
          </el-checkbox-group>
        </div>
      </div>
      <div slot="客户能力最终等级">
        <el-form-item>
          <el-input v-model="dataInfo.levelLast"></el-input>
        </el-form-item>
      </div>
    </tableGroup>
    <div class="standardBox">
      <div class="standardTitle">注：客户能力初步等级划分标准</div>
      <div class="content">
        <div class="standardItem marginRight">
          <div class="itemTitle">0-能力完好：</div>
          <div class="itemContent">
            日常生活活动、精神状态、感知觉与沟通分级均为0，社会参与分级为0或1；
          </div>
        </div>
        <div class="standardItem">
          <div class="itemTitle">1-轻度失能：</div>
          <div class="itemContent">
            ※日常生活活动分级为0、但精神状态、感知觉与沟通中至少一项分级为1及以上，或社会参与的分级为2；<br/>
            ※日常生活活动分级为1、精神状态、感知觉与沟通、社会参与中至少有一项的分级为0或1；
          </div>
        </div>
        <div class="standardItem marginRight">
          <div class="itemTitle">2-中度失能：</div>
          <div class="itemContent">
            ※日常生活活动分级为1、但精神状态、感知觉与沟通、社会参与均为2，或有一项为3；日常生活活动分级为1、但精神状态、感知觉与沟通、社会参与均为2，或有一项为3；<br/>
            ※或日常生活活动分级为2、但精神状态、感知觉与沟通、社会参与中有1-2项的分级为1或2；或日常生活活动分级为2、但精神状态、感知觉与沟通、社会参与中有1-2项的分级为1或2；
                            
                            
          </div>
        </div>
        <div class="standardItem">
          <div class="itemTitle">3-重度失能：</div>
          <div class="itemContent">
            ※日常生活活动的分级为3； <br/>
            ※日常生活活动、精神状态、感知觉与沟通、社会参与分级均为2；<br/>
            ※日常生活活动分级为2、且精神状态、感知觉与沟通、社会参与中至少有一项分级为3；日常生活活动分级为2、且精神状态、感知觉与沟通、社会参与中至少有一项分级为3；
          </div>
        </div>
      </div>
    </div>
    <div class="bottomBox">
      <div class="bottomItem">
        <el-form-item label="评估员">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="信息提供者">
          <el-input></el-input>
        </el-form-item>
      </div>
      <div class="bottomItem">
        <el-form-item label="评估员签名">
          <el-input class="onlyBorderBottom"></el-input>
        </el-form-item>
        <el-form-item label="信息提供者签名">
          <el-input class="onlyBorderBottom"></el-input>
        </el-form-item>
      </div>
      <div class="bottomItem">
        <el-form-item label="日期">
          <el-input class="onlyBorderBottom"></el-input>
        </el-form-item>
        <el-form-item label="日期">
          <el-input class="onlyBorderBottom" ></el-input>
        </el-form-item>
      </div>
      <div class="bottomItem"></div>
    </div>
  </el-form>
</template>

<script>
import tableGroup from "@/components/tableGroup";
export default {
  components: {
    tableGroup
  },
  data() {
    return {
      groupInfo: [
        {
          info: ['客户信息', '指标分级', '客户能力初步等级', '等级变更条款', '客户能力最终等级']
        }
      ],
      dataInfo: {
        name: '',
        number: '',
        idNumber: '',
        time: '',
        tel: '',
        birthday: '',
        active: '',
        spirit: '',
        perception: '',
        sociology: '',
        level: '',
        changeLevel: {
          value: [],
          options: [
            {
              value: 0,
              lable: '1、有认知障碍/痴呆、精神疾病者，在原有能力级别上提高一个等级；'
            },
            {
              value: 1,
              lable: '2、近30天内发生过2次及以上跌倒、噎食、自杀、走失者，在原有能力级别上提高一个等级；'
            },
            {
              value: 2,
              lable: '3、处于昏迷状态者，直接评定为重度失能；'
            },
            {
              value: 3,
              lable: '4、若初步等级确定为“3重度失能”，则不考虑上述1-3中各情况对最终等级的影响，等级不再提升。'
            }
          ]
        },
        levelLast: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.reportTitle{
  color: #273359;
  font-size: 20px;
  text-align: center;
  font-weight:500;
}
.el-checkbox{
  padding: 10px 0;
  display: flex;
}
.standardBox{
  border-top: 1px solid #2BB1E7;
  border-bottom: 1px solid #2BB1E7;
  padding: 20px 0;
  .standardTitle{
    color: #273359;
    font-size: 16px;
    text-align: center;
    margin-bottom: 20px;
  }
  .content{
    display: flex;
    flex-wrap: wrap;
    .standardItem{
      width: calc(50% - 15px);
      margin-bottom: 15px;
      border: 1px solid rgba(189,195,199,1);
      padding: 10px 20px;
      box-sizing: border-box;
      border-radius: 10px;
    }
    .marginRight{
      margin-right: 20px;
    }
  }
}
.bottomBox{
  margin-top: 20px;
  .bottomItem{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
.onlyBorderBottom{
  /deep/.el-input__inner{
    border-top: 0!important;
    border-left: 0!important;
    border-right: 0!important;
  }
}
</style>
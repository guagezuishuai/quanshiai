<template>
  <el-form>
    <tableGroup :groupInfo="groupInfo[0]">
      <div slot="认知功能">
        <el-form-item>
          <div>测试内容</div>
          <div>1、“我说三样东西，请重复一遍，并记住，一会儿会问您：苹果、手表、国旗”</div>
          <div>2、画钟测验：“请您在这儿画一个圆形的时钟，在时钟上标出10点45分”</div>
          <div>3、回忆词语：“现在请您告诉我，刚才我要您记住的三样东西是什么？”</div>
        </el-form-item>
        <el-form-item>
          <div style="display: flex; align-items: center;">
            <el-radio-group style="line-height: 25px;" v-model="dataInfo.cognition.value">
              <template v-for="(key, index) in dataInfo.cognition.options">
                <el-radio :key="`cognition${index}`" :value="key.value" :label="key.lable"></el-radio>
              </template>
            </el-radio-group>
          </div>
        </el-form-item>
      </div>
      <div slot="攻击行为">
        <el-form-item>
          <div style="display: flex; align-items: center;">
            <el-radio-group style="line-height: 25px;" v-model="dataInfo.attack.value">
              <template v-for="(key, index) in dataInfo.attack.options">
                <el-radio :key="`attack${index}`" :value="key.value" :label="key.lable"></el-radio>
              </template>
            </el-radio-group>
          </div>
        </el-form-item>
      </div>
      <div slot="抑郁症状">
        <el-form-item>
          <div style="display: flex; align-items: center;">
            <el-radio-group style="line-height: 25px;" v-model="dataInfo.depression.value">
              <template v-for="(key, index) in dataInfo.depression.options">
                <el-radio :key="`depression${index}`" :value="key.value" :label="key.lable"></el-radio>
              </template>
            </el-radio-group>
          </div>
        </el-form-item>
      </div>
    </tableGroup>
    <tableGroup :groupInfo="groupInfo[1]">
      <div slot="精神状态总分">
        <div>
          <el-form-item >
            <el-input disabled v-model="dataInfo.state" ></el-input>
            <span>上述3个项目得分之和</span>
          </el-form-item>
        </div>
      </div>
      <div slot="精神状态分级">
        <div>
          <el-form-item >
            <el-input disabled v-model="dataInfo.level" ></el-input>
            <div>0 能力完好：总分0分</div>
            <div>1 轻度受损：总分1分</div>
            <div>2 中度受损：总分2-3分</div>
            <div>3 重度受损：总分4-6分</div>
          </el-form-item>
        </div>
      </div>
    </tableGroup>
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
          title: '精神状态',
          info: ['认知功能', '攻击行为', '抑郁症状']
        },
        {
          title: '结果',
          info: [
            {
              title: '结果',
              subInfo: ['精神状态总分', '精神状态分级']
            }
          ]
        }
      ],
      dataInfo: {
        cognition: {
          value: '',
          options: [
            {
              value: 0,
              lable: '0分， 画钟正确（画出一个闭锁圆，指针位置准确），且能回忆出2-3个词'
            },
            {
              value: 1,
              lable: '1分， 画钟错误（画的圆不闭锁，或指针位置不准确），或只回忆出0-1个词'
            },
            {
              value: 2,
              lable: '2分， 已确诊为认知障碍，如老年痴呆'
            }
          ]
        },
        attack: {
          value: '',
          options: [
            {
              value: 0,
              lable: '0分， 无身体攻击行为（如打/踢/推/咬/抓/摔东西）和语言攻击行为（如骂人、语言威胁、尖叫）'
            },
            {
              value: 1,
              lable: '1分， 每月有几次身体攻击行为，或每周有几次语言攻击行为'
            },
            {
              value: 2,
              lable: '2分， 每周有几次身体攻击行为，或每日有语言攻击行为'
            }
          ]
        },
        depression: {
          value: '',
          options: [
            {
              value: 0,
              lable: '0分， 无'
            },
            {
              value: 1,
              lable: '1分， 情绪低落、不爱说话、不爱梳洗、不爱活动'
            },
            {
              value: 2,
              lable: '2分， 有自杀念头或自杀行为'
            }
          ]
        },
        state: '',
        level: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-radio{
  padding: 10px 0;
  display: flex;
}
</style>
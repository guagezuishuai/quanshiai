<template>
  <el-form label-width="130px" :model="dataInfo" :rules="rules" inline>
    <tableGroup :groupInfo="groupInfo[0]">
      <div class="rowContent" slot="意识水平">
        <div style="display: flex; align-items: center;">
          <el-radio-group style="line-height: 25px;" v-model="dataInfo.consciousness.value">
            <template v-for="(key, index) in dataInfo.consciousness.options">
              <el-radio :key="`consciousness${index}`" :value="key.value" :label="key.lable"></el-radio>
            </template>
          </el-radio-group>
        </div>
      </div>
      <div class="rowContent" slot="视力">
        <div style="display: flex; align-items: center;">
          <el-radio-group style="line-height: 25px;" v-model="dataInfo.vision.value">
            <template v-for="(key, index) in dataInfo.vision.options">
              <el-radio :key="`vision${index}`" :value="key.value" :label="key.lable"></el-radio>
            </template>
          </el-radio-group>
        </div>
      </div>
      <div class="rowContent" slot="听力">
        <div style="display: flex; align-items: center;">
          <el-radio-group style="line-height: 25px;" v-model="dataInfo.hearing.value">
            <template v-for="(key, index) in dataInfo.hearing.options">
              <el-radio :key="`hearing${index}`" :value="key.value" :label="key.lable"></el-radio>
            </template>
          </el-radio-group>
        </div>
      </div>
      <div class="rowContent" slot="沟通交流">
        <div style="display: flex; align-items: center;">
          <el-radio-group style="line-height: 25px;" v-model="dataInfo.communication.value">
            <template v-for="(key, index) in dataInfo.communication.options">
              <el-radio :key="`communication${index}`" :value="key.value" :label="key.lable"></el-radio>
            </template>
          </el-radio-group>
        </div>
      </div>
    </tableGroup>
    <tableGroup :groupInfo="groupInfo[1]">
      <div slot="感知觉与沟通分级">
        <div>
          <el-form-item >
            <el-input disabled v-model="dataInfo.dayFraction" ></el-input>
            <div>0 能力完好：意识为0，且视力和听力评为0或1，沟通评为0</div>
            <div>1 轻度受损：意识为0，但视力或听力中至少一项评为2，或沟通评为1</div>
            <div>2 中度受损：意识为0，但视力或听力中至少一项评为3，或沟通评为2；或意识为1，视力或听力评定为3及以下，沟通评定为2及以下</div>
            <div>3 重度受损：意识小于等于1，但视力或听力中至少一项评为4，或沟通评为3；或意识大于1</div>
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
          title: "生活习惯",
          info: [
            {
              title: '意识水平',
            },
            {
              title: '视力',
              subTitle: '（若平日带老花镜或近视镜，应在佩戴眼镜的情况下评估）',
            },
            {
              title: '听力',
              subTitle: '（若平日带助听器，应在佩戴助听器的情况下评估）',
            },
            {
              title: '沟通交流',
              subTitle: '（包括非语言沟通）',
            }
          ]
        },
        {
          title: '结果',
          info: [{title: '结果', subInfo: ['感知觉与沟通分级']}]
        }
      ],
      radio:'',
      dataInfo: {
        consciousness: {
          value: '',
          options: [
            {
              value: 0,
              lable: '0分， 神志清醒，对周围环境警觉'
            },
            {
              value: 1,
              lable: '1分， 嗜睡，表现为睡眠状态过度延长。当呼唤或推动其肢体时可唤醒，并能进行正确的交谈或执行指令，停止刺激后又继续入睡'
            },
            {
              value: 2,
              lable: '2分， 昏睡，一般的外界刺激不能使其觉醒，给予较强烈的刺激时可有短时的意识清醒，醒后可简短回答提问，当刺激减弱后又很快进入睡眠状态'
            },
            {
              value: 3,
              lable: '3分， 昏迷，处于浅昏迷时对疼痛刺激有回避和痛苦表情；处于深昏迷时对刺激无反应（若评定为昏迷，直接评定为重度失能，可不进行以下项目的评估）'
            }
          ]
        },
        vision: {
          value: '',
          options: [
            {
              value: 0,
              lable: '0分， 能看清书报上的标准字体'
            },
            {
              value: 1,
              lable: '1分， 能看清楚大字体，但看不清书报上的标准字体'
            },
            {
              value: 2,
              lable: '2分， 视力有限，看不清报纸大标题，但能辨认物体'
            },
            {
              value: 3,
              lable: '3分， 辨认物体有困难，但眼睛能跟随物体移动，只能看到光、颜色和形状'
            },
            {
              value: 4,
              lable: '4分， 没有视力，眼睛不能跟随物体移动'
            }
          ]
        },
        hearing: {
          value: '',
          options: [
            {
              value: 0,
              lable: '0分， 可正常交谈，能听到电视、电话、门铃的声音'
            },
            {
              value: 1,
              lable: '1分， 在轻声说话或说话距离超过2米时听不清'
            },
            {
              value: 2,
              lable: '2分， 正常交流有些困难，需在安静的环静或大声说话才能听到'
            },
            {
              value: 3,
              lable: '3分， 讲话者大声说话或说话很慢，才能部分听见'
            },
            {
              value: 4,
              lable: '4分， 完全听不见'
            }
          ]
        },
        communication: {
          value: '',
          options: [
            {
              value: 0,
              lable: '0分， 无困难，能与他人正常沟通和交流'
            },
            {
              value: 1,
              lable: '1分， 能够表达自己的需要及理解别人的话，但需要增加时间或给予帮助'
            },
            {
              value: 2,
              lable: '2分， 表达需要或理解有困难，需频繁重复或简化口头表达'
            },
            {
              value: 3,
              lable: '3分， 不能表达需要或理解他人的话'
            }
          ]
        },
        level: ''
      },
      rules: {

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
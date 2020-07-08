<template>
  <el-form label-width="130px" :model="dataInfo" :rules="rules" inline>
    <tableGroup :groupInfo="groupInfo[0]">
      <div class="rowContent" slot="进食">
        <div style="display: flex; align-items: center;">
          <el-radio-group style="line-height: 25px;" v-model="dataInfo.eat.value">
            <template v-for="(key, index) in dataInfo.eat.options">
              <el-radio :key="`eat${index}`" :value="key.value" :label="key.lable"></el-radio>
            </template>
          </el-radio-group>
        </div>
      </div>
      <div class="rowContent" slot="洗澡">
        <div style="display: flex; align-items: center;">
          <el-radio-group style="line-height: 25px;" v-model="dataInfo.shower.value">
            <template v-for="(key, index) in dataInfo.shower.options">
              <el-radio :key="`shower${index}`" :value="key.value" :label="key.lable"></el-radio>
            </template>
          </el-radio-group>
        </div>
      </div>
      <div class="rowContent" slot="修饰">
        <div style="display: flex; align-items: center;">
          <el-radio-group style="line-height: 25px;" v-model="dataInfo.modification.value">
            <template v-for="(key, index) in dataInfo.modification.options">
              <el-radio :key="`modification${index}`" :value="key.value" :label="key.lable"></el-radio>
            </template>
          </el-radio-group>
        </div>
      </div>
      <div class="rowContent" slot="穿衣">
        <div style="display: flex; align-items: center;">
          <el-radio-group style="line-height: 25px;" v-model="dataInfo.eat.value">
            <template v-for="(key, index) in dataInfo.eat.options">
              <el-radio :key="`eat${index}`" :value="key.value" :label="key.lable"></el-radio>
            </template>
          </el-radio-group>
        </div>
      </div>
      <div class="rowContent" slot="大便控制">
        <div style="display: flex; align-items: center;">
          <el-radio-group style="line-height: 25px;" v-model="dataInfo.shit.value">
            <template v-for="(key, index) in dataInfo.shit.options">
              <el-radio :key="`shit${index}`" :value="key.value" :label="key.lable"></el-radio>
            </template>
          </el-radio-group>
        </div>
      </div>
      <div class="rowContent" slot="小便控制">
        <div style="display: flex; align-items: center;">
          <el-radio-group style="line-height: 25px;" v-model="dataInfo.urine.value">
            <template v-for="(key, index) in dataInfo.urine.options">
              <el-radio :key="`urine${index}`" :value="key.value" :label="key.lable"></el-radio>
            </template>
          </el-radio-group>
        </div>
      </div>
      <div class="rowContent" slot="如厕">
        <div style="display: flex; align-items: center;">
          <el-radio-group style="line-height: 25px;" v-model="dataInfo.wc.value">
            <template v-for="(key, index) in dataInfo.wc.options">
              <el-radio :key="`wc${index}`" :value="key.value" :label="key.lable"></el-radio>
            </template>
          </el-radio-group>
        </div>
      </div>
      <div class="rowContent" slot="床椅转移">
        <div style="display: flex; align-items: center;">
          <el-radio-group style="line-height: 25px;" v-model="dataInfo.movebed.value">
            <template v-for="(key, index) in dataInfo.movebed.options">
              <el-radio :key="`movebed${index}`" :value="key.value" :label="key.lable"></el-radio>
            </template>
          </el-radio-group>
        </div>
      </div>
      <div class="rowContent" slot="平地行走">
        <div style="display: flex; align-items: center;">
          <el-radio-group style="line-height: 25px;" v-model="dataInfo.walk.value">
            <template v-for="(key, index) in dataInfo.walk.options">
              <el-radio :key="`walk${index}`" :value="key.value" :label="key.lable"></el-radio>
            </template>
          </el-radio-group>
        </div>
      </div>
      <div class="rowContent" slot="上下楼梯">
        <div style="display: flex; align-items: center;">
          <el-radio-group style="line-height: 25px;" v-model="dataInfo.stairs.value">
            <template v-for="(key, index) in dataInfo.stairs.options">
              <el-radio :key="`stairs${index}`" :value="key.value" :label="key.lable"></el-radio>
            </template>
          </el-radio-group>
        </div>
      </div>
    </tableGroup>
    <tableGroup :groupInfo="groupInfo[1]">
      <div class="" slot="评估结果">
        <div>
          <el-form-item label="日常生活活动总分">
            <el-input disabled v-model="dataInfo.dayFraction" ></el-input>
            <span>上述10个项目得分之和</span>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="日常生活活动分级">
            <el-input disabled v-model="dataInfo.dayLevel" ></el-input>
            <div>0 能力完好：总分100分   1 轻度受损：总分65-95分</div>
            <div>2 中度受损：总分45-60分       3 重度受损：总分≤40分</div>
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
              title: '进食',
              subTitle: '指用餐具将食物由容器送到口中、咀嚼、吞咽等过程',
            },
            {
              title: '洗澡'
            },
            {
              title: '修饰',
              subTitle: '指洗脸、刷牙、梳头、刮脸等',
            },
            {
              title: '穿衣',
              subTitle: '指穿脱衣服、系扣、拉拉链、穿拖鞋袜、系鞋带',
            },
            {
              title: '大便控制'
            },
            {
              title: '小便控制'
            },
            {
              title: '如厕',
              subTitle: '包括去厕所、解开衣裤擦净、整理衣裤、冲水',
            },
            {
              title: '床椅转移'
            },
            {
              title: '平地行走'
            },
            {
              title: '上下楼梯'
            },
          ]
        },
        {
          title: '评估结果',
          info: ['评估结果']
        }
      ],
      radio:'',
      dataInfo: {
        eat: {
          value: '',
          options: [
            {
              value: 0,
              lable: '10分----可独立进食（在合理的时间内独立进食准备好的 食物）'
            },
            {
              value: 1,
              lable: '5分---- 需部分帮助（进食过程中需要一定帮助，如协助把持餐具）'
            },
            {
              value: 2,
              lable: '0分----极大帮助或完全依赖他人，或有留置营养管'
            }
          ]
        },
        shower: {
          value: '',
          options: [
            {
              value: 0,
              lable: '5分----准备好洗澡水后，可自己独立完成洗澡过程'
            },
            {
              value: 1,
              lable: '0分----在洗澡过程中需他人帮助'
            }
          ]
        },
        modification: {
          value: '',
          options: [
            {
              value: 0,
              lable: '5分----准备好洗澡水后，可自己独立完成洗澡过程'
            },
            {
              value: 1,
              lable: '0分----在洗澡过程中需他人帮助'
            }
          ]
        },
        dress: {
          value: '',
          options: [
            {
              value: 0,
              lable: '10分----可独立完成'
            },
            {
              value: 1,
              lable: '5分---- 需部分帮助（能自己穿脱，但需他人帮助整理衣物、系扣/鞋带、拉拉链）'
            },
            {
              value: 2,
              lable: '0分----需极大帮助或完全依赖他人'
            }
          ]
        },
        shit: {
          value: '',
          options: [
            {
              value: 0,
              lable: '10分----可控制大便'
            },
            {
              value: 1,
              lable: '5分----偶尔失控（每周1次），或需要他人提示'
            },
            {
              value: 2,
              lable: '0分----完全失控'
            }
          ]
        },
        urine: {
          value: '',
          options: [
            {
              value: 0,
              lable: '10分----可控制小便'
            },
            {
              value: 1,
              lable: '5分---- 偶尔失控（每天小于1次，但每周大于1次），或需要他人提示'
            },
            {
              value: 2,
              lable: '0分----完全失控，或留置导尿管'
            }
          ]
        },
        wc: {
          value: '',
          options: [
            {
              value: 0,
              lable: '10分----可独立完成'
            },
            {
              value: 1,
              lable: '5分----需部分帮助（需他人搀扶去厕所、需他人帮忙冲水或整理衣裤等）'
            },
            {
              value: 2,
              lable: '0分----需极大帮助或完全依赖他人'
            }
          ]
        },
        movebed: {
          value: '',
          options: [
            {
              value: 0,
              lable: '15分----可独立完成'
            },
            {
              value: 1,
              lable: '10分----需部分帮助（需他人搀扶或使用拐杖)'
            },
            {
              value: 2,
              lable: '5分----需极大帮助（较大程度上依赖他人搀扶和帮助）'
            },
            {
              value: 3,
              lable: '0分----完全依赖他人'
            }
          ]
        },
        walk: {
          value: '',
          options: [
            {
              value: 0,
              lable: '15分----可独立在平地上行走45m'
            },
            {
              value: 1,
              lable: '10分----需部分帮助（因肢体残疾、平衡能力差、过度衰弱、视力等问题，在一定程度上需他人地搀扶或使用拐杖、助行器等辅助用具）'
            },
            {
              value: 2,
              lable: '5分----需极大帮助（因肢体残疾、平衡能力差、过度衰弱、视力等问题，在较大程度上依赖他人搀扶，或坐在轮椅上自行移动）'
            },
            {
              value: 3,
              lable: '0分----完全依赖他人'
            }
          ]
        },
        stairs: {
          value: '',
          options: [
            {
              value: 0,
              lable: '10分---- 可独立上下楼梯（连续上下10-15个台阶）'
            },
            {
              value: 1,
              lable: '5分----需部分帮助（需他人搀扶，或扶着楼梯、使用拐杖等）'
            },
            {
              value: 2,
              lable: '0分----需极大帮助或完全依赖他人'
            }
          ]
        },
        dayFraction: '',
        dayLevel: ''
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
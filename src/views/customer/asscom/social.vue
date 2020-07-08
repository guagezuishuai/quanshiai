<template>
  <el-form label-width="130px" :model="dataInfo" :rules="rules" inline>
    <tableGroup :groupInfo="groupInfo[0]">
      <div class="rowContent" slot="生活能力">
        <div style="display: flex; align-items: center;">
          <el-radio-group style="line-height: 25px;" v-model="dataInfo.lifeAss.value">
            <template v-for="(key, index) in dataInfo.lifeAss.options">
              <el-radio :key="`lifeAss${index}`" :value="key.value" :label="key.lable"></el-radio>
            </template>
          </el-radio-group>
        </div>
      </div>
      <div class="rowContent" slot="工作能力">
        <div style="display: flex; align-items: center;">
          <el-radio-group style="line-height: 25px;" v-model="dataInfo.work.value">
            <template v-for="(key, index) in dataInfo.work.options">
              <el-radio :key="`work${index}`" :value="key.value" :label="key.lable"></el-radio>
            </template>
          </el-radio-group>
        </div>
      </div>
      <div class="rowContent" slot="时间/空间定向">
        <div style="display: flex; align-items: center;">
          <el-radio-group style="line-height: 25px;" v-model="dataInfo.position.value">
            <template v-for="(key, index) in dataInfo.position.options">
              <el-radio :key="`position${index}`" :value="key.value" :label="key.lable"></el-radio>
            </template>
          </el-radio-group>
        </div>
      </div>
      <div class="rowContent" slot="人物定向">
        <div style="display: flex; align-items: center;">
          <el-radio-group style="line-height: 25px;" v-model="dataInfo.person.value">
            <template v-for="(key, index) in dataInfo.person.options">
              <el-radio :key="`person${index}`" :value="key.value" :label="key.lable"></el-radio>
            </template>
          </el-radio-group>
        </div>
      </div>
      <div class="rowContent" slot="社会交往能力">
        <div style="display: flex; align-items: center;">
          <el-radio-group style="line-height: 25px;" v-model="dataInfo.Sociology.value">
            <template v-for="(key, index) in dataInfo.Sociology.options">
              <el-radio :key="`Sociology${index}`" :value="key.value" :label="key.lable"></el-radio>
            </template>
          </el-radio-group>
        </div>
      </div>
    </tableGroup>
    <tableGroup :groupInfo="groupInfo[1]">
      <div slot="社会参与总分">
        <div>
          <el-form-item >
            <el-input disabled v-model="dataInfo.score" ></el-input>
            <div>上述5个项目得分之和</div>
          </el-form-item>
        </div>
      </div>
      <div slot="社会参与分级">
        <div>
          <el-form-item >
            <el-input disabled v-model="dataInfo.level" ></el-input>
            <div>0 能力完好：总分0-2分</div>
            <div>1 轻度受损：总分3-7分</div>
            <div>2 中度受损：总分8-13分</div>
            <div>3 重度受损：总分14-20分</div>
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
          title: "社会参与",
          info: ['生活能力', '工作能力', '时间/空间定向', '人物定向', '社会交往能力']
        },
        {
          title: '结果',
          info: [{title: '结果', subInfo: ['社会参与总分', '社会参与分级']}]
        }
      ],
      radio:'',
      dataInfo: {
        lifeAss: {
          value: '',
          options: [
            {
              value: 0,
              lable: '0分， 除个人生活自理外（如饮食、洗漱、穿戴、二便），能料理家务（如做饭、洗衣）或当家管理事务'
            },
            {
              value: 1,
              lable: '1分， 除个人生活自理外，能做家务，但欠好，家庭事务安排欠条理'
            },
            {
              value: 2,
              lable: '2分， 个人生活能自理；只有在他人帮助下才能做些家务，但质量不好'
            },
            {
              value: 3,
              lable: '3分， 个人基本生活事务能自理（如饮食、二便），在督促下可洗漱'
            },
            {
              value: 4,
              lable: '4分， 个人基本生活事务（如饮食、二便）需要部分帮助或完全依赖他人帮助'
            }
          ]
        },
        work: {
          value: '',
          options: [
            {
              value: 0,
              lable: '0分， 原来熟练的脑力工作或体力技巧性工作可照常进行'
            },
            {
              value: 1,
              lable: '1分， 原来熟练的脑力工作或体力技巧性工作能力有所下降'
            },
            {
              value: 2,
              lable: '2分， 原来熟练的脑力工作或体力技巧性工作明显不如以往，部分遗忘'
            },
            {
              value: 3,
              lable: '3分， 对熟练工作只有一些片段保留，技能全部遗忘'
            },
            {
              value: 4,
              lable: '4分， 对以往的知识或技能全部磨灭'
            }
          ]
        },
        position: {
          value: '',
          options: [
            {
              value: 0,
              lable: '0分， 时间观念（年、月、日、时）清楚；可单独出远门，能很快掌握新环境的方位'
            },
            {
              value: 1,
              lable: '1分， 时间观念有些下降，年、月、日清楚，但有时相差几天；可单独来往于近街，知道现住地的名称和方位，但不知回家路线'
            },
            {
              value: 2,
              lable: '2分， 时间观念较差，年、月、日不清楚，可知上半年或下半年；只能单独在家附近行动，对现住地只知名称，不知道方位'
            },
            {
              value: 3,
              lable: '3分， 时间观念很差，年、月、日不清楚，可知上午或下午；只能在左邻右舍间串门，对现住地不知名称和方位'
            },
            {
              value: 4,
              lable: '4分， 无时间观念；不能单独外出'
            }
          ]
        },
        person: {
          value: '',
          options: [
            {
              value: 0,
              lable: '0分， 知道周围人们的关系，知道祖孙、叔伯、姑姨、侄子侄女等称谓的意义；可分辨陌生人的大致年龄和身份，可用适当称呼'
            },
            {
              value: 1,
              lable: '1分， 只知家中亲密近亲的关系，不会分辨陌生人的大致年龄，不能称呼陌生人'
            },
            {
              value: 2,
              lable: '2分， 只能称呼家中人，或只能照样称呼，不知其关系，不辨辈分'
            },
            {
              value: 3,
              lable: '3分， 只认识常同住的亲人，可称呼子女或孙子女，可辨熟人和生人'
            },
            {
              value: 4,
              lable: '4分， 只认识保护人，不辨熟人和生人'
            }
          ]
        },
        Sociology: {
          value: '',
          options: [
            {
              value: 0,
              lable: '0分， 参与社会，在社会环境有一定的适应能力，待人接物恰当'
            },
            {
              value: 1,
              lable: '1分， 能适应单纯环境，主动接触人，初见面时难让人发现智力问题，不能理解隐喻语'
            },
            {
              value: 2,
              lable: '2分， 脱离社会，可被动接触，不会主动待人，谈话中很多不适词句，容易上当受骗'
            },
            {
              value: 3,
              lable: '3分， 勉强可与人交往，谈吐内容不清楚，表情不恰当'
            },
            {
              value: 4,
              lable: '4分， 难以与人接触'
            }
          ]
        },
        score: '',
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
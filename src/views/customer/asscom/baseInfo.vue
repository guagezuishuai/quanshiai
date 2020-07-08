<template>
  <el-form label-width="130px" :model="dataInfo" :rules="rules" inline>
    
    <tableGroup :groupInfo="groupInfo[0]">
      <div class="rowContent">
        <el-form-item label="客户姓名" prop="userName" class="item">
          <el-input v-model="dataInfo.userName" size="small"></el-input>
        </el-form-item>
        <el-form-item label="评估编号" class="item">
          <el-input v-model="dataInfo.number" size="small"></el-input>
        </el-form-item>
        <el-form-item label="评估日期" class="item">
          <el-input v-model="dataInfo.time" size="small"></el-input>
        </el-form-item>
        <el-form-item label="客户性别" prop="sex" class="item">
          <el-input v-model="dataInfo.sex" size="small"></el-input>
        </el-form-item>
        <el-form-item label="出生日期" prop="birthday" class="item">
          <el-input v-model="dataInfo.birthday" size="small"></el-input>
        </el-form-item>
        <el-form-item label="民族" prop="nation" class="item">
          <el-input v-model="dataInfo.nation" size="small"></el-input>
        </el-form-item>
        <el-form-item label="客户电话" prop="tel" class="item">
          <el-input v-model="dataInfo.tel" size="small"></el-input>
        </el-form-item>
        <el-form-item label="客户身份证号" prop="idNumber" class="item">
          <el-input v-model="dataInfo.idNumber" size="small"></el-input>
        </el-form-item>
        <el-form-item label="客户社保卡号" prop="socialCardNumber" class="item">
          <el-input v-model="dataInfo.socialCardNumber" size="small"></el-input>
        </el-form-item>
        <el-form-item label="婚姻状况" prop="maritalStatus" class="item">
          <el-input v-model="dataInfo.maritalStatus" size="small"></el-input>
        </el-form-item>
        <el-form-item label="宗教信仰" prop="religious" class="item">
          <el-input v-model="dataInfo.religious" size="small"></el-input>
        </el-form-item>
        <el-form-item label="文化程度" prop="culture" class="item">
          <el-input v-model="dataInfo.culture" size="small"></el-input>
        </el-form-item>
        <el-form-item label="居住情况" prop="liveState" class="item">
          <el-input v-model="dataInfo.liveState" size="small"></el-input>
        </el-form-item>
        <el-form-item label="紧急联系人姓名" prop="urgentTelName" class="item">
          <el-input v-model="dataInfo.urgentTelName" size="small"></el-input>
        </el-form-item>
        <el-form-item label="紧急联系人电话" prop="urgentTel" class="item">
          <el-input v-model="dataInfo.urgentTel" size="small"></el-input>
        </el-form-item>
        <el-form-item label="信息提供者" prop="provideName" class="item">
          <el-input v-model="dataInfo.provideName" size="small"></el-input>
        </el-form-item>
        <el-form-item label="与被评估者关系" prop="relation" class="item">
          <el-input v-model="dataInfo.relation" size="small"></el-input>
        </el-form-item>
        <el-form-item label="客户姓名" prop="userName" class="item">
          <el-input v-model="dataInfo.userName" size="small"></el-input>
        </el-form-item>
        <el-form-item label="客户姓名" prop="userName" class="item">
          <el-input v-model="dataInfo.userName" size="small"></el-input>
        </el-form-item>
        <el-form-item label="客户姓名" prop="userName" class="item">
          <el-input v-model="dataInfo.userName" size="small"></el-input>
        </el-form-item>
        <el-form-item label="客户姓名" prop="userName" class="item">
          <el-input v-model="dataInfo.userName" size="small"></el-input>
        </el-form-item>
      </div>
    </tableGroup>
    <tableGroup :groupInfo="groupInfo[1]">
      <div class="rowContent">
        <div style="display: flex; align-items: center;">
          <el-checkbox-group style="line-height: 25px;" v-model="dataInfo.evaluation.value">
            <template v-for="(key, index) in dataInfo.evaluation.options">
              <el-checkbox :key="`evaluation${index}`" :value="key.value" :label="key.lable"></el-checkbox>
            </template>
          </el-checkbox-group>
        </div>
      </div>
    </tableGroup>
    <tableGroup :groupInfo="groupInfo[2]">
      <div class="rowContent">
        <div style="display: flex; align-items: center;">
          <el-checkbox-group style="line-height: 25px;" v-model="dataInfo.moneyOrigin.value">
            <template v-for="(key, index) in dataInfo.moneyOrigin.options">
              <el-checkbox :key="`moneyOrigin${index}`" :value="key.value" :label="key.lable"></el-checkbox>
            </template>
            <el-input style="flex: 1; width: 192px; margin-left: 10px;" placeholder="请填写详细信息" size="small" v-model="dataInfo.moneyOrigin.detail"></el-input>
          </el-checkbox-group>
        </div>
      </div>
    </tableGroup>
    <tableGroup :groupInfo="groupInfo[3]">
      <div class="rowContent">
        <div style="display: flex; align-items: center;">
          <el-checkbox-group style="line-height: 25px;" v-model="dataInfo.medical.value">
            <template v-for="(key, index) in dataInfo.medical.options">
              <el-checkbox :key="`medical${index}`" :value="key.value" :label="key.lable"></el-checkbox>
            </template>
            <el-input style="flex: 1; width: 192px; margin-left: 10px;" placeholder="请填写详细信息" size="small" v-model="dataInfo.medical.detail"></el-input>
          </el-checkbox-group>
        </div>
      </div>
    </tableGroup>
    <tableGroup :groupInfo="groupInfo[4]">
      <div class="rowContent" slot="痴呆">
        <div class="rowContent">
          <div style="display: flex; align-items: center;">
            <el-radio-group style="line-height: 25px;" v-model="dataInfo.dementia.value">
              <template v-for="(key, index) in dataInfo.dementia.options">
                <el-radio :key="`dementia${index}`" :value="key.value" :label="key.lable"></el-radio>
              </template>
            </el-radio-group>
          </div>
        </div>
      </div>
      <div class="rowContent" slot="精神疾病">
        <div class="rowContent">
          <div style="display: flex; align-items: center;">
            <el-radio-group style="line-height: 25px;" v-model="dataInfo.mentalIllness.value">
              <template v-for="(key, index) in dataInfo.mentalIllness.options">
                <el-radio :key="`mentalIllness${index}`" :value="key.value" :label="key.lable"></el-radio>
              </template>
            </el-radio-group>
          </div>
        </div>
      </div>
      <div class="rowContent" slot="慢性疾病">
        <div class="rowContent">
        <div style="display: flex; align-items: center;">
          <el-checkbox-group style="line-height: 25px;" v-model="dataInfo.chronicDis.value">
            <template v-for="(key, index) in dataInfo.chronicDis.options">
              <el-checkbox :key="`chronicDis${index}`" :value="key.value" :label="key.lable"></el-checkbox>
            </template>
            <el-input style="flex: 1; width: 192px; margin-left: 10px;" placeholder="请填写详细信息" size="small" v-model="dataInfo.chronicDis.detail"></el-input>
          </el-checkbox-group>
        </div>
      </div>
      </div>
    </tableGroup>
    <tableGroup :groupInfo="groupInfo[5]">
      <div class="rowContent" slot="跌倒">
        <div class="rowContent">
          <div style="display: flex; align-items: center;">
            <el-radio-group style="line-height: 25px;" v-model="dataInfo.fall.value">
              <template v-for="(key, index) in dataInfo.fall.options">
                <el-radio :key="`fall${index}`" :value="key.value" :label="key.lable"></el-radio>
              </template>
            </el-radio-group>
          </div>
        </div>
      </div>
      <div class="rowContent" slot="走失">
        <div class="rowContent">
          <div style="display: flex; align-items: center;">
            <el-radio-group style="line-height: 25px;" v-model="dataInfo.lost.value">
              <template v-for="(key, index) in dataInfo.lost.options">
                <el-radio :key="`lost${index}`" :value="key.value" :label="key.lable"></el-radio>
              </template>
            </el-radio-group>
          </div>
        </div>
      </div>
      <div class="rowContent" slot="噎食">
        <div class="rowContent">
          <div style="display: flex; align-items: center;">
            <el-radio-group style="line-height: 25px;" v-model="dataInfo.choking.value">
              <template v-for="(key, index) in dataInfo.choking.options">
                <el-radio :key="`choking${index}`" :value="key.value" :label="key.lable"></el-radio>
              </template>
            </el-radio-group>
          </div>
        </div>
      </div>
      <div class="rowContent" slot="自杀">
        <div class="rowContent">
          <div style="display: flex; align-items: center;">
            <el-radio-group style="line-height: 25px;" v-model="dataInfo.commit.value">
              <template v-for="(key, index) in dataInfo.commit.options">
                <el-radio :key="`commit${index}`" :value="key.value" :label="key.lable"></el-radio>
              </template>
            </el-radio-group>
          </div>
        </div>
      </div>
      <div class="rowContent" slot="其他">
        <el-input placeholder="请填入其他意外事件" v-model="dataInfo.other"></el-input>
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
          title: "基础信息"
        },
        {
          title: "评估原因"
        },
        {
          title: "经济来源"
        },
        {
          title: "医疗保障"
        },
        {
          title: "疾病诊断",
          info: ["痴呆", "精神疾病", "慢性疾病"]
        },
        {
          title: "近30天内意外事件",
          info: ["跌倒", "走失", "噎食", "自杀", "其他"]
        }
      ],
      dataInfo: {
        userName: "",
        number: "",
        time: "",
        sex: "",
        birthday: "",
        nation: "",
        tel: "",
        idNumber: "",
        socialCardNumber: "",
        maritalStatus: "",
        religious: "",
        culture: "",
        liveState: "",
        urgentTelName: "",
        provideName: "",
        relation: "",
        evaluation: {
          value: [],
          options: [
            {
              value: 0,
              lable: '接受服务前初评'
            },
            {
              value: 1,
              lable: '接受服务后的常规评估'
            },
            {
              value: 2,
              lable: '状况发生变化后的即时评估'
            },
            {
              value: 3,
              lable: '因评估结果有疑问进行的复评'
            }
          ]
        },
        moneyOrigin: {
          value: [],
          options: [
            {
              value: 0,
              lable: '退休金/养老金'
            },
            {
              value: 1,
              lable: '子女补贴'
            },
            {
              value: 2,
              lable: '亲友资助'
            },
            {
              value: 3,
              lable: '社会救济'
            },
            {
              value: 4,
              lable: '劳动收入'
            },
            {
              value: 5,
              lable: '自我存款'
            },
            {
              value: 6,
              lable: '其他补贴'
            }
          ]
        },
        medical: {
          value: [],
          options: [
            {
              value: 0,
              lable: '城镇职工基本医疗保险'
            },
            {
              value: 1,
              lable: '城镇居民基本医疗保险'
            },
            {
              value: 2,
              lable: '新型农村合作医疗'
            },
            {
              value: 3,
              lable: '商业医疗保险'
            },
            {
              value: 4,
              lable: '贫困救助'
            },
            {
              value: 5,
              lable: '全公费'
            },
            {
              value: 6,
              lable: '全自费'
            },
            {
              value: 7,
              lable: '其他'
            }
          ]
        },
        dementia: {
          value: '',
          options: [
            {
              value: 0,
              lable: '城镇职工基本医疗保险'
            },
            {
              value: 1,
              lable: '城镇居民基本医疗保险'
            },
            {
              value: 2,
              lable: '新型农村合作医疗'
            },
            {
              value: 3,
              lable: '商业医疗保险'
            },
            {
              value: 4,
              lable: '贫困救助'
            },
            {
              value: 5,
              lable: '全公费'
            },
            {
              value: 6,
              lable: '全自费'
            },
            {
              value: 7,
              lable: '其他'
            }
          ]
        },
        mentalIllness: {
          value: [],
          options: [
            {
              value: 0,
              lable: '0-无'
            },
            {
              value: 1,
              lable: '1-精神分裂症'
            },
            {
              value: 2,
              lable: '2-双相情感障碍'
            },
            {
              value: 3,
              lable: '3-偏执性精神障碍'
            },
            {
              value: 4,
              lable: '4-分裂情感性障碍'
            },
            {
              value: 5,
              lable: '5-癫痫所致精神障碍'
            },
            {
              value: 6,
              lable: '6-精神发育迟滞伴发精神障碍'
            }
          ]
        },
        chronicDis: {
          value: [],
          options: [
            {
              value: 0,
              lable: '无'
            },
            {
              value: 1,
              lable: '高血压'
            },
            {
              value: 2,
              lable: '糖尿病'
            },
            {
              value: 3,
              lable: '高血脂'
            },
            {
              value: 4,
              lable: '冠心病'
            },
            {
              value: 5,
              lable: '慢性阻塞性肺疾病'
            },
            {
              value: 6,
              lable: '恶性肿瘤'
            },
            {
              value: 7,
              lable: '其他'
            }
          ]
        },
        fall: {
          value: '',
          options: [
            {
              value: 0,
              lable: '0-无'
            },
            {
              value: 1,
              lable: '1-发生过1次'
            },
            {
              value: 2,
              lable: '2-发生过2次'
            },
            {
              value: 3,
              lable: '3-发生过3次及以上'
            }
          ]
        },
        lost: {
          value: '',
          options: [
            {
              value: 0,
              lable: '0-无'
            },
            {
              value: 1,
              lable: '1-发生过1次'
            },
            {
              value: 2,
              lable: '2-发生过2次'
            },
            {
              value: 3,
              lable: '3-发生过3次及以上'
            }
          ]
        },
        choking: {
          value: '',
          options: [
            {
              value: 0,
              lable: '0-无'
            },
            {
              value: 1,
              lable: '1-发生过1次'
            },
            {
              value: 2,
              lable: '2-发生过2次'
            },
            {
              value: 3,
              lable: '3-发生过3次及以上'
            }
          ]
        },
        commit: {
          value: '',
          options: [
            {
              value: 0,
              lable: '0-无'
            },
            {
              value: 1,
              lable: '1-发生过1次'
            },
            {
              value: 2,
              lable: '2-发生过2次'
            },
            {
              value: 3,
              lable: '3-发生过3次及以上'
            }
          ]
        },
        other: ''
      },
      rules: {
        userName: [{ required: true, message: "请输入身高", trigger: "blur" }],
        sex: [{ required: true, message: "请输入身高", trigger: "blur" }],
        birthday: [{ required: true, message: "请输入身高", trigger: "blur" }],
        nation: [{ required: true, message: "请输入身高", trigger: "blur" }],
        tel: [{ required: true, message: "请输入身高", trigger: "blur" }],
        idNumber: [{ required: true, message: "请输入身高", trigger: "blur" }],
        socialCardNumber: [
          { required: true, message: "请输入身高", trigger: "blur" }
        ],
        maritalStatus: [
          { required: true, message: "请输入身高", trigger: "blur" }
        ],
        religious: [{ required: true, message: "请输入身高", trigger: "blur" }],
        culture: [{ required: true, message: "请输入身高", trigger: "blur" }],
        liveState: [{ required: true, message: "请输入身高", trigger: "blur" }],
        urgentTelName: [
          { required: true, message: "请输入身高", trigger: "blur" }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
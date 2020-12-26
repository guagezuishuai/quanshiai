<template>
  <div class="baseInfo">
    <el-form label-width="100px" :rules="rules" :model="userInfo" inline>
      <template>
        <!-- 老人基础信息 -->
        <tableGroup :groupInfo="groupInfo[0]">
          <!-- 客户编号 -->
          <div class="rowContent" slot="编号归属">
            <el-form-item label="客户编号" class="item">
              <el-input size="small" disabled v-model="userInfo.userNumber"></el-input>
            </el-form-item>
            <el-form-item label="所属机构" class="item">
              <div @click="showTable">
                <el-input size="small" readonly  v-model="userInfo.org"></el-input>
              </div>
            </el-form-item>
          </div>
          <!-- 登记时间 -->
          <div class="rowContent" slot="登记时间">
            <el-form-item label="登记时间" class="item">
              <el-input size="small" disabled v-model="userInfo.resTime"></el-input>
            </el-form-item>
          </div>
          <!-- 其他信息 -->
          <div class="rowContent" slot="基础信息">
            <el-form-item label="姓  名" prop="name" class="item">
              <el-input size="small" v-model="userInfo.name"></el-input>
            </el-form-item>
            <el-form-item label="性  别" prop="sex" class="item">
              <el-select size="small" v-model="userInfo.sex">
                <el-option value="0" label="男"></el-option>
                <el-option value="1" label="女"></el-option>
                <el-option value="2" label="未知性别"></el-option>
                <el-option value="3" label="未说明的性别"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="民  族" prop="nation" class="item">
              <el-select size="small" v-model="userInfo.nation">
                <el-option value="0" label="汉族"></el-option>
                <el-option value="1" label="少数民族"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="身份证号" prop="idNumber" class="item">
              <el-input size="small" v-model="userInfo.idNumber"></el-input>
            </el-form-item>
            <el-form-item label="出生日期" prop="birthDay" class="item">
              <el-date-picker
                size="small"
                v-model="userInfo.birthDay"
                type="date"
                placeholder="选择出生日期"
              />
            </el-form-item>
            <el-form-item label="阴历生日" prop="otherBirth" class="item">
              <el-date-picker
                size="small"
                v-model="userInfo.otherBirth"
                type="date"
                placeholder="选择阴历生日"
              />
            </el-form-item>
            <el-form-item label="婚姻状况" prop="marriage" class="item">
              <el-select size="small" v-model="userInfo.marriage">
                <el-option value="0" label="未婚"></el-option>
                <el-option value="1" label="已婚"></el-option>
                <el-option value="2" label="丧偶"></el-option>
                <el-option value="3" label="离婚"></el-option>
                <el-option value="4" label="未说明的婚姻状况"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="宗教信仰" prop="religion" class="item">
              <el-select size="small" v-model="userInfo.religion">
                <el-option value="0" label="无"></el-option>
                <el-option value="1" label="基督教"></el-option>
                <el-option value="2" label="伊斯兰教"></el-option>
                <el-option value="3" label="佛教"></el-option>
                <el-option value="4" label="其他教派"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="文化程度" prop="culture" class="item">
              <el-select size="small" v-model="userInfo.culture">
                <el-option value="0" label="文盲及半文盲"></el-option>
                <el-option value="1" label="小学"></el-option>
                <el-option value="2" label="初中"></el-option>
                <el-option value="3" label="高中/技校/中专"></el-option>
                <el-option value="4" label="大学专科"></el-option>
                <el-option value="5" label="大学本科"></el-option>
                <el-option value="6" label="硕士研究生"></el-option>
                <el-option value="7" label="博士研究生"></el-option>
                <el-option value="8" label="不详"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="居住情况" prop="liveState" class="item">
              <el-select size="small" v-model="userInfo.liveState">
                <el-option value="0" label="独居"></el-option>
                <el-option value="1" label="与配偶/伴侣居住"></el-option>
                <el-option value="2" label="与子女居住"></el-option>
                <el-option value="3" label="与父母居住"></el-option>
                <el-option value="4" label="与兄弟姐妹居住"></el-option>
                <el-option value="5" label="与其他亲属居住"></el-option>
                <el-option value="6" label="与非亲属关系的人居住"></el-option>
                <el-option value="7" label="养老机构"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="常驻类型" prop="permanent" class="item">
              <el-select size="small" v-model="userInfo.permanent">
                <el-option value="0" label="户籍"></el-option>
                <el-option value="1" label="非户籍"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="right" slot="right">
            <el-upload
              class="avatar-uploader"
              action="#"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
        </tableGroup>
        <!-- 老人联系信息 -->
        <tableGroup :groupInfo="groupInfo[1]">
          <!-- 联系电话 -->
          <div class="rowContent" slot="联系电话">
            <el-form-item label="客户电话1" prop="tel1" class="item">
              <el-input size="small" v-model="userInfo.customerPhpone"></el-input>
            </el-form-item>
            <el-form-item label="客户电话2" class="item">
              <el-input size="small" v-model="userInfo.customerPhpone2"></el-input>
            </el-form-item>
            <el-form-item label="客户电话3" class="item">
              <el-input size="small" v-model="userInfo.customerPhpone3"></el-input>
            </el-form-item>
          </div>
          <!-- 联系地址 -->
          <div class="rowContent" slot="联系地址">
            <el-form-item label="联系地址" class="item">
              <el-input size="small" v-model="userInfo.org"></el-input>
            </el-form-item>
          </div>
        </tableGroup>
        <!-- 紧急联系人信息 -->
        <tableGroup :groupInfo="groupInfo[2]">
          <!-- 联系电话 -->
          <div class="rowContent" slot="紧急联系人1">
            <el-form-item label="姓名" prop="emcName1" class="item">
              <el-input size="small" v-model="userInfo.emcName1"></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="emcaTel1" class="item">
              <el-input size="small" v-model="userInfo.emcaTel1"></el-input>
            </el-form-item>
            <el-form-item label="与老人关系" prop="emcCont1" class="item">
              <el-input size="small" v-model="userInfo.emcCont1"></el-input>
            </el-form-item>
          </div>
          <!-- 联系电话 -->
          <div class="rowContent" slot="紧急联系人2">
            <el-form-item label="姓名" prop="emcName2" class="item">
              <el-input size="small" v-model="userInfo.emcName1"></el-input>
            </el-form-item>
            <el-form-item label="电话" class="item">
              <el-input size="small" v-model="userInfo.emcaTel1"></el-input>
            </el-form-item>
            <el-form-item label="与老人关系" class="item">
              <el-input size="small" v-model="userInfo.emcCont1"></el-input>
            </el-form-item>
          </div>
          <!-- 联系电话 -->
          <div class="rowContent" slot="紧急联系人3">
            <el-form-item label="姓名" prop="emcName3" class="item">
              <el-input size="small" v-model="userInfo.emcName1"></el-input>
            </el-form-item>
            <el-form-item label="电话" class="item">
              <el-input size="small" v-model="userInfo.emcaTel1"></el-input>
            </el-form-item>
            <el-form-item label="与老人关系" class="item">
              <el-input size="small" v-model="userInfo.emcCont1"></el-input>
            </el-form-item>
          </div>
        </tableGroup>
        <tableGroup :groupInfo="groupInfo[3]">
          <!-- 经济来源 -->
          <div class="rowContent" slot="经济来源">
            <div style="display: flex; align-items: center;">
              <el-checkbox-group v-model="userInfo.moneyOriginList">
                <el-checkbox label="退休金/养老金"></el-checkbox>
                <el-checkbox label="子女补贴"></el-checkbox>
                <el-checkbox label="亲友资助"></el-checkbox>
                <el-checkbox label="社会救济"></el-checkbox>
                <el-checkbox label="劳动收入"></el-checkbox>
                <el-checkbox label="自我存款"></el-checkbox>
                <el-checkbox label="其他补贴"></el-checkbox>
              </el-checkbox-group>
              <el-input
                style="flex: 1; margin-left: 10px;"
                placeholder="请填写详细信息"
                size="small"
                v-model="userInfo.otherMoneyOrigin"
              ></el-input>
            </div>

            <el-form-item label="月收入" class="item">
              <el-input size="small" v-model="userInfo.income">
                <template slot="append">元</template>
              </el-input>
            </el-form-item>
          </div>
          <!-- 医疗保险 -->
          <div class="rowContent" slot="医疗保障">
            <div style="display: flex; align-items: center;">
              <el-checkbox-group style="line-height: 40px;" v-model="userInfo.medicalCare">
                <el-checkbox label="城镇职工基本医疗保险"></el-checkbox>
                <el-checkbox label="城镇居民基本医疗保险"></el-checkbox>
                <el-checkbox label="新型农村合作医疗"></el-checkbox>
                <el-checkbox label="新型农村合作医疗"></el-checkbox>
                <el-checkbox label="贫困救助"></el-checkbox>
                <el-checkbox label="全公费"></el-checkbox>
                <el-checkbox label="全自费"></el-checkbox>
                <el-checkbox label="其他补贴"></el-checkbox>
                <el-input
                  style="flex: 1; margin-left: 10px;width: 192px;"
                  placeholder="请填写详细信息"
                  size="small"
                  v-model="userInfo.otherMedicalCare"
                ></el-input>
              </el-checkbox-group>
            </div>
            <el-form-item label="社保号" class="item">
              <el-input size="small" v-model="userInfo.socialNum"></el-input>
            </el-form-item>
          </div>
        </tableGroup>
        <tableGroup :groupInfo="groupInfo[4]">
          <!-- 专业职位 -->
          <div class="rowContent" slot="专业职位">
            <el-form-item label="从事职业" prop="emcName3" class="item">
              <el-select size="small" v-model="userInfo.occupation">
                <el-option value="0" label="国家机关、党群组织、企业、事业单位负责人"></el-option>
                <el-option value="1" label="专业技术人员"></el-option>
                <el-option value="2" label="办事人员和有关人员"></el-option>
                <el-option value="3" label="商业、服务也人员"></el-option>
                <el-option value="4" label="农、林、牧、渔、水利业生产人员"></el-option>
                <el-option value="5" label="生产、运输设备操作人员及有关人员"></el-option>
                <el-option value="6" label="军人"></el-option>
                <el-option value="7" label="不便分类的其他人员"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="最后工作职位" class="item">
              <el-input size="small" v-model="userInfo.lastPosition"></el-input>
            </el-form-item>
            <el-form-item label="最后工作单位" class="item">
              <el-input size="small" v-model="userInfo.lastCompany"></el-input>
            </el-form-item>
          </div>
          <!-- 工作意愿 -->
          <div class="rowContent" slot="工作意愿">
            <el-form-item label="再就业意愿" prop="emcName3" class="item">
              <el-select size="small" v-model="userInfo.employment">
                <el-option value="0" label="期望再就业"></el-option>
                <el-option value="1" label="不期望再就业"></el-option>
                <el-option value="2" label="不确定"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="再就业性质" class="item">
              <el-select size="small" v-model="userInfo.employmentNatur">
                <el-option value="0" label="社会专业岗位"></el-option>
                <el-option value="1" label="社区公益岗位"></el-option>
                <el-option value="2" label="其他岗位"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="再就业区域" class="item">
              <el-select size="small" v-model="userInfo.employmentArea">
                <el-option value="0" label="所在社区附近"></el-option>
                <el-option value="1" label="所在城市"></el-option>
                <el-option value="2" label="无限制"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </tableGroup>
      </template>
    </el-form>
    <mechanismTable @rowDblclick="rowDblclick" ref="mechanismTable"></mechanismTable>
  </div>
</template>

<script>
import tableGroup from "@/components/tableGroup";
import BMI from "@/components/BMI.vue";
import mechanismTable from "@/components/mechanismTable.vue";
export default {
  components: {
    tableGroup,
    BMI,
    mechanismTable
  },
  data() {
    return {
      // 新增基础信息
      imageUrl: "",
      groupInfo: [
        {
          title: "老人基础信息",
          info: ["编号归属", "登记时间", "基础信息"]
        },
        {
          title: "老人联系信息",
          info: ["联系电话", "联系地址"]
        },
        {
          title: "紧急联系人信息",
          info: ["紧急联系人1", "紧急联系人2", "紧急联系人3"]
        },
        {
          title: "经济保险状况",
          info: ["经济来源", "医疗保障"]
        },
        {
          title: "职业状况",
          info: ["专业职位", "工作意愿"]
        }
      ],
      userInfo: {
        userNumber: "",
        org: "",
        resTime: "",
        name: "",
        sex: "",
        nation: "",
        idNumber: "",
        birthDay: "",
        otherBirth: "",
        marriage: "",
        religion: "",
        culture: "",
        liveState: "",
        permanent: "",
        tel1: "",
        tel2: "",
        tel3: "",
        emcName1: "",
        emcaTel1: "",
        emcCont1: "",
        emcName2: "",
        emcaTel2: "",
        emcCont2: "",
        emcName3: "",
        emcaTel3: "",
        emcCont3: "",
        moneyOriginList: [],
        otherMoneyOrigin: "",
        income: "",
        medicalCare: [],
        otherMedicalCare: "",
        socialNum: "",
        occupation: "",
        lastPosition: "",
        lastCompany: "",
        employment: "",
        employmentNatur: "",
        employmentArea: ""
      },
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        sex: [{ required: true, message: "请输入性别", trigger: "blur" }],
        nation: [{ required: true, message: "请选择民族", trigger: "blur" }],
        idNumber: [
          { required: true, message: "请输入身份证号", trigger: "blur" }
        ],
        birthDay: [
          { required: true, message: "请输入出生日期", trigger: "blur" }
        ],
        otherBirth: [
          { required: true, message: "请输入阴历生日", trigger: "blur" }
        ],
        marriage: [
          { required: true, message: "请输入婚姻状况", trigger: "blur" }
        ],
        religion: [
          { required: true, message: "请输入宗教信仰", trigger: "blur" }
        ],
        culture: [
          { required: true, message: "请输入文化程度", trigger: "blur" }
        ],
        liveState: [
          { required: true, message: "请输入居住情况", trigger: "blur" }
        ],
        permanent: [
          { required: true, message: "请输入常驻类型", trigger: "blur" }
        ],
        tel1: [{ required: true, message: "请输入客户电话", trigger: "blur" }],
        emcName1: [
          { required: true, message: "请输入紧急联系人姓名", trigger: "blur" }
        ],
        emcaTel1: [
          { required: true, message: "请输入紧急联系人电话", trigger: "blur" }
        ],
        emcCont1: [
          { required: true, message: "请选择与紧急联系人关系", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    showTable() {
      this.$refs.mechanismTable.dialogVisible = true;
    },
    handleAvatarSuccess() {},
    beforeAvatarUpload() {},
    rowDblclick(row, column, event) {
      console.log(row)
    }
  }
};
</script>
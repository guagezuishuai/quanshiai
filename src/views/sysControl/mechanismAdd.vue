<template>
  <div class="mechanismAdd">
    <el-form label-width="100px" :rules="rules" :model="userInfo" inline>
      <tableGroup :groupInfo="groupInfo[0]">
        <!-- 角色信息 -->
        <div class="rowContent" slot="类型名称">
          <el-form-item label="上级机构" class="item">
            <el-input size="small" disabled v-model="userInfo.org"></el-input>
          </el-form-item>
          <el-form-item label="上级机构层级" class="item">
            <el-input size="small" disabled v-model="userInfo.orgLevel"></el-input>
          </el-form-item>
          <el-form-item label="上级机构类型" class="item">
            <el-input size="small" disabled v-model="userInfo.orgType"></el-input>
          </el-form-item>
          <el-form-item label="上级机构编号" class="item">
            <el-input size="small" disabled v-model="userInfo.orgNumber"></el-input>
          </el-form-item>
          <el-form-item label="新增机构类型" class="item">
            <el-select size="small" v-model="userInfo.roleType.value">
              <el-option
                v-for="(key, index) in userInfo.roleType.options"
                :key="`roleType${index}`"
                :value="key.value"
                :label="key.label"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="新增机构名称" class="item">
            <el-input size="small" disabled v-model="userInfo.org"></el-input>
          </el-form-item>
          <el-form-item label="新增机构编号" class="item">
            <el-input size="small" disabled v-model="userInfo.org"></el-input>
          </el-form-item>
          <el-form-item label="新增机构层级" class="item">
            <el-input size="small" disabled v-model="userInfo.org"></el-input>
          </el-form-item>
          <el-form-item label="角色类型" class="item">
            <el-select size="small" v-model="userInfo.roleType.value">
              <el-option
                v-for="(key, index) in userInfo.roleType.options"
                :key="`roleType${index}`"
                :value="key.value"
                :label="key.label"
              ></el-option>
            </el-select>
          </el-form-item>
        </div>
        <!-- 登录信息 -->
        <div class="rowContent avatarBox" slot="登录信息">
          <div>
            <el-form-item label="登录账号" prop="roleType" class="item">
              <div style="display: flex">
                <el-input placeholder="请输入员工常用手机号" v-model="userInfo.normalTel"></el-input>
                <el-button>账号及名称检测</el-button>
              </div>
            </el-form-item>
            <span class="tip">以机构负责人常用手机号为登录账号</span>
            <br />
            <el-form-item label="登录密码" prop="roleType" class="item">
              <el-input show-password clearable v-model="userInfo.password"></el-input>
            </el-form-item>
            <span class="tip">初始登录密码默认为：88888888</span>
          </div>
          <div class="right" slot="right">
            <el-upload
              class="avatar-uploader"
              action="#"
              :show-file-list="false"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
        </div>
        <!-- 联系信息 -->
        <div class="rowContent" slot="联系信息">
          <el-form-item label="姓名" class="item">
            <el-input size="small" disabled v-model="userInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="身份证号" class="item">
            <el-input size="small" disabled v-model="userInfo.idNumber"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" class="item">
            <el-input size="small" disabled v-model="userInfo.tel"></el-input>
          </el-form-item>
          <el-form-item label="紧急联系电话" class="item">
            <el-input size="small" disabled v-model="userInfo.urgentTel"></el-input>
          </el-form-item>
          <el-form-item label="居住地址" class="item">
            <threeLevel v-model="userInfo.address"></threeLevel>
          </el-form-item>
          <el-form-item label="详细地址" class="item">
            <el-input  :rows="2" type="textarea" size="small" v-model="userInfo.addressDetail"></el-input>
          </el-form-item>
        </div>
        <!-- 员工概况 -->
        <div class="rowContent onlyOne" slot="员工概况">
          <el-form-item label="机构概况" prop="roleType" class="item">
            <el-input :rows="2" type="textarea" v-model="userInfo.survey"></el-input>
          </el-form-item>
        </div>
      </tableGroup>
      <el-form-item>
        <el-button>保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import tableGroup from "@/components/tableGroup";
import threeLevel from "@/components/threeLevl";
export default {
  name: "mechanismAdd",
  components: {
    tableGroup,
    threeLevel
  },
  data() {
    return {
      imageUrl: "",
      groupInfo: [
        {
          title: "新增员工",
          info: ["类型名称", "登录信息", "联系信息", "员工概况"]
        }
      ],
      userInfo: {
        org: "",
        orgLevel: "",
        orgType: "",
        orgNumber: "",
        roleType: {
          value: "",
          options: [
            {
              label: "王子",
              value: 1
            },
            {
              label: "公主",
              value: 2
            },
            {
              label: "太监",
              value: 3
            }
          ]
        },
        staffNumber: "",
        normalTel: "",
        password: "",
        name: "",
        idNumber: "",
        tel: "",
        urgentTel: "",
        address: {
          province: "",
          city: "",
          county: ""
        },
        addressDetail: "",
        survey: ''
      },
      rules: {}
    };
  },
  methods: {
    beforeAvatarUpload() {}
  }
};
</script>

<style lang="scss" scoped>
.avatarBox {
  justify-content: space-between;
}
.tip {
  color: #616161;
  font-size: 14px;
  opacity: 0.7;
}
.onlyOne {
  .el-form-item {
    width: 100%;
  }
  /deep/.el-form-item__content {
    flex: 1;
  }
}
.avatar-uploader .el-upload {
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border: 1px solid #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 1px solid #ccc;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
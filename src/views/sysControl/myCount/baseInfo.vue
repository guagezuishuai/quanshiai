<template>
  <div class="baseInfo">
    <el-form
      label-width="120px"
      ref="form"
      :disabled="disabled"
      :rules="rules"
      :model="model"
      inline
    >
      <tableGroup :groupInfo="groupInfo[0]">
        <div class="rowContent" slot="类型名称">
          <el-form-item label="所属机构" prop="preOrg" class="item">
            <el-input :disabled="true" v-model="model.organ.name"></el-input>
          </el-form-item>
          <el-form-item label="所属机构层级" class="item">
            <el-input :disabled="true" v-model="model.organ.level"></el-input>
          </el-form-item>
          <el-form-item label="所属机构类型" class="item">
            <el-input :disabled="true" v-model="model.organ.type"></el-input>
          </el-form-item>
          <el-form-item label="所属机构编号" class="item">
            <el-input :disabled="true" v-model="model.organ.code"></el-input>
          </el-form-item>
          <el-form-item label="角色类型" prop="orgType" class="item">
            <el-input :disabled="true" v-model="model.roleName"></el-input>
          </el-form-item>
          <el-form-item label="员工编号" class="item">
            <el-input :disabled="true" v-model="model.orderNum"></el-input>
          </el-form-item>
        </div>
        <div class="rowContent avatarBox" slot="登录信息">
          <div>
            <el-form-item label="登录账号" prop="roleType" class="item">
              <div style="display: flex">
                <el-input :disabled="true" v-model="model.accountName"></el-input>
                <el-button :disabled="true">账号及名称检查</el-button>
              </div>
            </el-form-item>
            <span class="tip">以机构负责人常用手机号为登录账号</span>
            <br />
            <!-- <el-form-item label="登录密码" prop="roleType" class="item">
              <el-input :disabled="true" show-password clearable v-model="model.password"></el-input>
            </el-form-item>
            <span class="tip">初始登录密码默认为：88888888</span>-->
          </div>
          <div class="right" slot="right">
            <fileUpload
              ref="fileUpload"
              :imgUrl="model.headImg"
              :isUploadOne="true"
            ></fileUpload>
          </div>
        </div>
        <div class="rowContent" slot="联系信息">
          <el-form-item label="姓名" prop="roleType" class="item">
            <el-input clearable v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="身份证号" prop="roleType" class="item">
            <el-input clearable v-model="model.idCard"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" prop="roleType" class="item">
            <el-input clearable v-model="model.contactNumber"></el-input>
          </el-form-item>
          <el-form-item label="紧急联系电话" prop="roleType" class="item">
            <el-input clearable v-model="model.emergencyContactNumber"></el-input>
          </el-form-item>
          <el-form-item label="居住地址" prop="roleType" class="item">
            <threeLevel v-model="model.address"></threeLevel>
          </el-form-item>
          <el-form-item label="详细地址" prop="roleType" class="item">
            <el-input v-model="model.detailedAddress"></el-input>
          </el-form-item>
        </div>
        <div class="rowContent onlyOne" slot="员工概况">
          <el-form-item label="员工概况" prop="roleType" class="item">
            <el-input :rows="2" type="textarea" v-model="model.employeeProfile"></el-input>
          </el-form-item>
        </div>
      </tableGroup>
    </el-form>
    <bottomBtn :btnText="btnText" @submit="submit"></bottomBtn>
  </div>
</template>

<script>
import tableGroupMixins from "@/minxins/tableGroup";
import threeLevel from "@/components/threeLevl";
import bottomBtn from "@/components/bottomBtn";
import fileUpload from "@/components/imgUpload";
import { selectB, employeeUpdate } from "@/api/sys";
export default {
  name: "baseInfo",
  mixins: [tableGroupMixins],
  components: {
    threeLevel,
    bottomBtn,
    fileUpload
  },
  data() {
    return {
      btnText: "修 改",
      disabled: true,
      groupInfo: [
        {
          title: "",
          info: ["类型名称", "登录信息", "联系信息", "员工概况"]
        }
      ],
      model: {
        organ: {
          level: "",
          type: "",
          name: "",
          code: "",
        },
        address: {
          province: "",
          city: "",
          county: ""
        },
        roleName: "",
        orderNum: "",
        accountName: "",
        headImg: '',
        name: "",
        idCard: "",
        contactNumber: "",
        emergencyContactNumber: "",
        
        detailedAddress: "",
        employeeProfile: ""
      },
      rules: {
        // preOrg: [
        //   { required: true, message: "请输入红键号码", trigger: "blur" }
        // ],
        // orgType: [
        //   { required: true, message: "请输入红键号码", trigger: "blur" }
        // ],
        // orgName: [
        //   { required: true, message: "请输入红键号码", trigger: "blur" }
        // ],
        // roleType: [
        //   { required: true, message: "请输入红键号码", trigger: "blur" }
        // ]
      },
      imageUrl: "",
      addressInfo: {
        province: "",
        city: "",
        county: "",
        address: ""
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const userinfo = JSON.parse(localStorage.getItem("userInfo"));
      const id = userinfo.employee.id;
      selectB({ id }).then(res => {
        Object.assign(this.model, res.data);
        console.log(this.model)
        this.model.address.province = res.data.organ.provinceCode;
        this.model.address.city = res.data.organ.cityCode;
        this.model.address.county = res.data.organ.areaCode;
      });
    },
    submit() {
      // 改变当前状态
      if (this.disabled) {
        this.btnText = "保 存";
        this.disabled = false;
        return false;
      }
      this.$refs.form.validate(valid => {
        if(valid) {
          let params = Object.assign({}, this.model);
          params["account"] = {
            name: params.accountName,
            password: params.password,
            roleId: params.roleId,
            status: ""
          };
          params["provinceCode"] = params.address.province;
          params["cityCode"] = params.address.city;
          params["areaCode"] = params.address.county;
          const userinfo = JSON.parse(localStorage.getItem("userInfo"));
          const id = userinfo.employee.id;
          params["id"] = id;
          employeeUpdate(params).then(res => {
            this.$message.success("操作成功");
            this.disabled = true;
            debugger
            this.$refs.fileUpload.fileUpload(res.data.account.id)
          });
        }
      });
    }
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
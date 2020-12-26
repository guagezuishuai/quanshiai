<template>
  <div class="staffAdd">
    <el-form label-width="100px" :disabled="!isAdd && !isEdit" :rules="rules" :model="userInfo" inline>
      <tableGroup :groupInfo="groupInfo[0]">
        <!-- 角色信息 -->
        <div class="rowContent" slot="角色信息">
          <el-form-item label="所属机构" class="item">
            <!-- 只有查看的时候是不可以选择机构的 -->
            <div @click="$refs.orgTable.show()" v-if="isAdd || isEdit">
              <el-input size="small" readonly v-model="userInfo.pidName"></el-input>
            </div>
            <el-input size="small" disabled v-else v-model="userInfo.pidName"></el-input>
          </el-form-item>
          <el-form-item label="所属机构层级" class="item">
            <el-input size="small" disabled v-model="userInfo.orgLevel"></el-input>
          </el-form-item>
          <el-form-item label="所属机构类型" class="item">
            <el-input size="small" disabled v-model="userInfo.orgType"></el-input>
          </el-form-item>
          <el-form-item label="所属机构编号" class="item">
            <el-input size="small" disabled v-model="userInfo.orgNumber"></el-input>
          </el-form-item>
          <el-form-item label="角色类型" class="item">
            <!-- 只有查看的时候是不可以选择角色类型 -->
            <div @click="$refs.roleTable.show()" v-if="isAdd || isEdit">
              <el-input size="small" readonly v-model="userInfo.roleType"></el-input>
            </div>
            <el-input size="small" disabled v-else v-model="userInfo.roleType"></el-input>
          </el-form-item>
          <el-form-item label="员工编号" class="item">
            <el-input size="small" placeholder="保存后自动生成" disabled v-model="userInfo.orderNum"></el-input>
          </el-form-item>
        </div>
        <!-- 登录信息 -->
        <div class="rowContent avatarBox" slot="登录信息">
          <div>
            <el-form-item label="登录账号" prop="roleType" class="item">
              <div style="display: flex">
                <el-input placeholder="请输入员工常用手机号" v-model="userInfo.accountName"></el-input>
                <el-button @click="checkAccount">账号检测</el-button>
              </div>
            </el-form-item>
            <span class="tip">以员工常用手机号为登录账号</span>
            <br />
            <el-form-item label="登录密码" prop="roleType" class="item">
              <el-input show-password clearable v-model="userInfo.password"></el-input>
            </el-form-item>
            <span class="tip">初始登录密码默认为：88888888</span>
          </div>
          <div class="right" slot="right">
            <fileUpload :isUploadOne="true"></fileUpload>
          </div>
        </div>
        <!-- 联系信息 -->
        <div class="rowContent" slot="联系信息">
          <el-form-item label="姓名" class="item">
            <el-input size="small"  v-model="userInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="身份证号" class="item">
            <el-input size="small" v-model="userInfo.idCard"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" class="item">
            <el-input size="small" v-model="userInfo.contactNumber"></el-input>
          </el-form-item>
          <el-form-item label="紧急联系电话" class="item">
            <el-input size="small" v-model="userInfo.emergencyContactNumber"></el-input>
          </el-form-item>
          <el-form-item label="居住地址" class="item">
            <threeLevel v-model="userInfo.address"></threeLevel>
          </el-form-item>
          <el-form-item label="详细地址" class="item">
            <el-input  :rows="2" type="textarea" size="small" v-model="userInfo.detailedAddress"></el-input>
          </el-form-item>
        </div>
        <!-- 员工概况 -->
        <div class="rowContent onlyOne" slot="员工概况">
          <el-form-item label="员工概况" prop="roleType" class="item">
            <el-input :rows="2" type="textarea" v-model="userInfo.employeeProfile"></el-input>
          </el-form-item>
        </div>
      </tableGroup>
    </el-form>
    <!-- 底部按钮 -->
    <bottomBtn v-if="isAdd || isEdit" @submit="submit"></bottomBtn>
    <!-- 选择上级机构的弹窗 -->
    <orgTable @rowDblclick="selectOrg" ref="orgTable"></orgTable>
    <!-- 选择角色类型 -->
    <roleTable ref="roleTable" @rowDblclick="selectRoleType"></roleTable>
  </div>
</template>

<script>
import tableGroup from "@/components/tableGroup";
import threeLevel from "@/components/threeLevl";
import bottomBtn from '@/components/bottomBtn';
import orgTable from '@/components/orgTable';
import roleTable from '@/components/roleTable';
import fileUpload from '@/components/imgUpload';
import {checkAccount} from '@/api/login';
import {employeeInsert, employeeUpdate, selectB} from '@/api/sys';
export default {
  name: "staffAdd",
  components: {
    tableGroup,
    threeLevel,
    bottomBtn,
    orgTable,
    roleTable,
    fileUpload
  },
  data() {
    return {
      isEdit: false,
      isAdd: false,
      imageUrl: "",
      groupInfo: [
        {
          title: "新增员工",
          info: ["角色信息", "登录信息", "联系信息", "员工概况"]
        }
      ],
      userInfo: {
        pidName: "",
        organId: '',
        orgLevel: "",
        orgType: "",
        orderNum: "",
        roleType: '',
        roleId:'',
        staffNumber: "",
        accountName:'',
        password: "88888888",
        accountHeadImg: '',
        name: "",
        idCard: "",
        contactNumber: "",
        emergencyContactNumber: "",
        address: {
          province: "",
          city: "",
          county: ""
        },
        detailedAddress: "",
        employeeProfile: '',
      },
      rules: {}
    };
  },
  mounted() {
    const id = this.$route.query.id;
    if(id) {
      this.isEdit = this.$route.query.isEdit;
      selectB({id}).then(res => {
        Object.assign(this.userInfo, res.data);
        this.userInfo.pidName = res.data.organ.name;
        this.userInfo.orgLevel = res.data.organ.level;
        this.userInfo.orgType = res.data.organ.type;
        this.userInfo.orgNumber = res.data.organ.code;
        this.userInfo.organId = res.data.organ.organId;
        this.userInfo.roleType = res.data.roleName;
        this.userInfo.roleId = res.data.roleId;
        this.userInfo.orderNum = res.data.orderNum;
        this.userInfo.accountName = res.data.accountName;
        this.userInfo.accountHeadImg = res.data.accountHeadImg;
      })
    } else {
      this.isAdd = true;
    }
  },
  methods: {
    submit() {
      let params = Object.assign({}, this.userInfo);
      params['account'] = {
        name: params.accountName,
        password: params.password,
        roleId: params.roleId,
        status: ''
      }
      params['provinceCode'] = params.address.province;
      params['cityCode'] = params.address.city;
      params['areaCode'] = params.address.county;
      // 新增
      if(this.isAdd) {
        employeeInsert(params).then(res => {
          this.$message.success('操作成功');
          this.$router.go(-1);
        })
      }
      // 修改
      if(this.isEdit) {
        params['id'] = this.$route.query.id;
        employeeUpdate(params).then(res => {
          this.$message.success('操作成功');
          this.$router.go(-1);
        })
      }
    },
    checkAccount() {
      checkAccount({naem: this.userInfo.account}).then(res => {
        if(!res.data) this.$message.success('用户名可用');
        if(res.data) this.$message.warning('用户名已存在，请更换');
      })
    },
    selectOrg(rowInfo) {
      this.userInfo.pidName = rowInfo.name;
      this.userInfo.orgLevel = rowInfo.level;
      this.userInfo.orgType = rowInfo.type;
      this.userInfo.orgNumber = rowInfo.code;
      this.userInfo.organId = rowInfo.id;
    },
    selectRoleType(rowInfo) {
      this.userInfo.roleType = rowInfo.name;
      this.userInfo.roleId = rowInfo.id;
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
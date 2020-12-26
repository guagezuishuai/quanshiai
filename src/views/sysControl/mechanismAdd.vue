<template>
  <div class="mechanismAdd">
    <el-form label-width="100px" :disabled="!isAdd && !isEdit" :rules="rules" :model="userInfo" inline>
      <tableGroup :groupInfo="groupInfo[0]">
        <!-- 角色信息 -->
        <div class="rowContent" slot="类型名称">
          <el-form-item label="上级机构" class="item">
            <el-input size="small" disabled v-model="userInfo.pidName"></el-input>
          </el-form-item>
          <el-form-item label="上级机构层级"  class="item">
            <!-- 只有查看的时候是不可以选择机构的 -->
            <div @click="$refs.orgTable.show()" v-if="isAdd || isEdit">
              <el-input size="small" readonly v-model="userInfo.pidName"></el-input>
            </div>
            <el-input size="small" disabled v-else v-model="userInfo.pidName"></el-input>

          </el-form-item>
          <el-form-item label="上级机构类型" class="item">
            <el-input size="small" disabled v-model="userInfo.orgType"></el-input>
          </el-form-item>
          <el-form-item label="上级机构编号" class="item">
            <el-input size="small" disabled v-model="userInfo.orgNumber"></el-input>
          </el-form-item>
          <el-form-item label="新增机构类型" class="item">
            <!-- 只有查看的时候是不可以选择角色类型 -->
            <div @click="$refs.roleTable.show()" v-if="isAdd || isEdit">
              <el-input size="small" readonly v-model="userInfo.orgType"></el-input>
            </div>
            <el-input size="small" disabled v-else v-model="userInfo.roleType"></el-input>
          </el-form-item>
          <el-form-item label="新增机构层级" class="item">
            <el-input size="small" disabled v-model="userInfo.level"></el-input>
          </el-form-item>
          <el-form-item label="新增机构名称" class="item">
            <el-input size="small" v-model="userInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="新增机构编号" class="item">
            <el-input size="small" disabled v-model="userInfo.code"></el-input>
          </el-form-item>
          <el-form-item label="角色类型" class="item">
            <div @click="$refs.roleTable.show()">
              <el-input size="small" readonly v-model="userInfo.roleType"></el-input>
            </div>
          </el-form-item>
        </div>
        <!-- 登录信息 -->
        <div class="rowContent avatarBox" slot="登录信息">
          <div>
            <el-form-item label="登录账号" prop="roleType" class="item">
              <div style="display: flex">
                <el-input placeholder="请输入员工常用手机号" v-model="userInfo.account.name"></el-input>
                <el-button @click="checkAccount">账号及名称检测</el-button>
              </div>
            </el-form-item>
            <span class="tip">以机构负责人常用手机号为登录账号</span>
            <br />
            <el-form-item v-if="isAdd" label="登录密码" prop="roleType" class="item">
              <el-input show-password clearable v-model="userInfo.account.password"></el-input>
            </el-form-item>
            <span class="tip" v-if="isAdd" >初始登录密码默认为：88888888</span>
          </div>
          <div class="right" slot="right">
            <fileUpload ref="fileUpload" :imgUrl="userInfo.account.headImg" :isUploadOne="true"></fileUpload>
          </div>
        </div>
        <!-- 联系信息 -->
        <div class="rowContent" slot="联系信息">
          <el-form-item label="联系人" class="item">
            <el-input size="small" v-model="userInfo.contacts"></el-input>
          </el-form-item>
          <el-form-item label="联系人电话" class="item">
            <el-input size="small" v-model="userInfo.contactNumber"></el-input>
          </el-form-item>
          <el-form-item label="机构电话" class="item">
            <el-input size="small" v-model="userInfo.orgainContactNumber"></el-input>
          </el-form-item>
          <el-form-item label="所属区域" class="item">
            <threeLevel v-model="userInfo.address"></threeLevel>
          </el-form-item>
          <el-form-item label="详细地址" class="item">
            <el-input  :rows="2" type="textarea" size="small" v-model="userInfo.detailedAddress"></el-input>
          </el-form-item>
        </div>
        <!-- 机构概况 -->
        <div class="rowContent onlyOne" slot="机构概况">
          <el-form-item label="机构概况" prop="roleType" class="item">
            <el-input :rows="2" type="textarea" v-model="userInfo.orgainProfile"></el-input>
          </el-form-item>
        </div>
      </tableGroup>
    </el-form>
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
import {getDetails, organSaveOrUpdate} from '@/api/sys';
import {checkAccount} from '@/api/login';
import orgTable from '@/components/orgTable';
import roleTable from '@/components/roleTable';
import fileUpload from '@/components/imgUpload';
export default {
  name: "mechanismAdd",
  components: {
    tableGroup,
    threeLevel,
    orgTable,
    bottomBtn,
    fileUpload,
    roleTable
  },
  data() {
    return {
      imageUrl: "",
      isAdd: false,
      isEdit: false,
      groupInfo: [
        {
          title: "新增机构",
          info: ["类型名称", "登录信息", "联系信息", "机构概况"]
        }
      ],
      userInfo: {
        pidName: "",
        orgLevel: "",
        orgType: "",
        orgNumber: "",
        roleType: '',
        roleId: '',
        name: "",
        level:'',
        code: '',
        pid: '',
        account: {
          name: '',
          password: '88888888',
          headImg: '',
          roleId: ''
        },
        password: "",
        contacts: "",
        contactNumber: "",
        orgainContactNumber: "",
        address: {
          province: "",
          city: "",
          county: ""
        },
        detailedAddress: "",
        orgainProfile: ''
      },
      rules: {}
    };
  },
  mounted() {
    console.log()
    const id = this.$route.query.id;
    if(id) {
      id && this.init(id)
      this.isEdit = this.$route.query.isEdit;
    } else {
      this.isAdd = true;
    }
  },
  methods: {
    init(id) {
      getDetails({id}).then(res => {
        console.log(res);
        Object.assign(this.userInfo, res.data);
        // 上级
        this.userInfo.pidName = res.data.organParent.name;
        this.userInfo.orgLevel = res.data.organParent.level;
        this.userInfo.orgType = res.data.organParent.type;
        this.userInfo.orgNumber = res.data.organParent.code;
        // 新增
        this.userInfo.orgType = res.data.type;
        this.userInfo.level = res.data.level;
        this.userInfo.name = res.data.name;
        this.userInfo.code = res.data.code;
        this.userInfo.roleType = res.data.role.name; // TODO 角色类型，暂时没
        this.userInfo.account.name = res.data.account.name;
        this.userInfo.account.headImg = res.data.account.headImg;
        this.userInfo.contacts = res.data.contacts;
        this.userInfo.contactNumber = res.data.contactNumber;
        this.userInfo.orgainContactNumber = res.data.orgainContactNumber;
        this.userInfo.address.province = res.data.provinceCode;
        this.userInfo.address.city = res.data.cityCode;
        this.userInfo.address.county = res.data.areaCode;
        this.userInfo.detailedAddress = res.data.detailedAddress;
        this.userInfo.orgainProfile = res.data.orgainProfile;
      })
    },
    // 选择上级机构
    selectOrg(rowInfo) {
      this.userInfo.pidName = rowInfo.name;
      this.userInfo.orgLevel = rowInfo.level;
      this.userInfo.orgType = rowInfo.type;
      this.userInfo.orgNumber = rowInfo.code;
      this.userInfo.pid = rowInfo.id;
    },
    selectRoleType(rowInfo) {
      this.userInfo.roleType = rowInfo.name;
      this.userInfo.roleId = rowInfo.id;
    },
    // 监测账号是否存在
    checkAccount() {
      checkAccount({naem: this.userInfo.normalTel}).then(res => {
        if(!res.data) this.$message.success('用户名可用');
        if(res.data) this.$message.warning('用户名已存在，请更换');
      })
    },
    // 表单提交
    submit() {
      const params = {};
      Object.assign(params, this.userInfo)
      // const temp = params.roleType.value;
      // delete params.roleType;
      // params['roleType'] = temp;
      params['provinceCode'] = params.address.province;
      params['cityCode'] = params.address.city;
      params['areaCode'] = params.address.county;
      delete params.address;
      organSaveOrUpdate(params).then(res => {
        this.$message.success('操作成功');
        this.$refs.fileUpload.fileUpload(res.data.account.id,() => {
          this.$router.go(-1);
        })
      })
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
</style>
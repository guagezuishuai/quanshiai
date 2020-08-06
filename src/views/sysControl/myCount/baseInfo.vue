<template>
  <tableGroup :groupInfo="groupInfo[0]">
    <div class="rowContent" slot="类型名称">
      <el-form-item label="上级机构" prop="preOrg" class="item">
        <el-input v-model="model.preOrg"></el-input>
      </el-form-item>
      <el-form-item label="上级机构层级" class="item">
        <el-input v-model="model.preOrgLevel"></el-input>
      </el-form-item>
      <el-form-item label="上级机构类型" class="item">
        <el-input v-model="model.preOrgType"></el-input>
      </el-form-item>
      <el-form-item label="上级机构编号" class="item">
        <el-input v-model="model.preOrgNumber"></el-input>
      </el-form-item>
      <el-form-item label="本级机构类型" prop="orgType" class="item">
        <el-input v-model="model.orgType"></el-input>
      </el-form-item>
      <el-form-item label="本级机构层级" class="item">
        <el-input v-model="model.orgLevel"></el-input>
      </el-form-item>
      <el-form-item label="本级机构名称" prop="orgName" class="item">
        <el-input v-model="model.orgName"></el-input>
      </el-form-item>
      <el-form-item label="本级机构编号" class="item">
        <el-input v-model="model.orgNumber"></el-input>
      </el-form-item>
      <el-form-item label="角色类型" prop="roleType" class="item">
        <el-input v-model="model.roleType"></el-input>
      </el-form-item>
    </div>
    <div class="rowContent avatarBox" slot="登录信息">
      <div>
        <el-form-item label="登录账号" prop="roleType" class="item">
          <div style="display: flex">
            <el-input v-model="model.roleType"></el-input>
            <el-button>账号及名称检查</el-button>
          </div>
        </el-form-item>
        <span class="tip">以机构负责人常用手机号为登录账号</span>
        <br />
        <el-form-item label="登录密码" prop="roleType" class="item">
          <el-input show-password clearable v-model="model.roleType"></el-input>
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
    <div class="rowContent" slot="联系信息">
      <el-form-item label="联系人" prop="roleType" class="item">
        <el-input show-password clearable v-model="model.roleType"></el-input>
      </el-form-item>
      <el-form-item label="联系人电话" prop="roleType" class="item">
        <el-input show-password clearable v-model="model.roleType"></el-input>
      </el-form-item>
      <el-form-item label="机构电话" prop="roleType" class="item">
        <el-input show-password clearable v-model="model.roleType"></el-input>
      </el-form-item>
      <el-form-item label="所属区域" prop="roleType" class="item">
        <threeLevel></threeLevel>
      </el-form-item>
      <el-form-item label="详细地址" prop="roleType" class="item">
        <el-input  v-model="model.roleType"></el-input>
      </el-form-item>
    </div>
    <div class="rowContent onlyOne" slot="机构概况">
      <el-form-item label="机构概况" prop="roleType" class="item">
        <el-input :rows="2" type="textarea" v-model="model.roleType"></el-input>
      </el-form-item>
    </div>
  </tableGroup>
</template>

<script>
import tableGroupMixins from "@/minxins/tableGroup";
import threeLevel from '@/components/threeLevl'
export default {
  name: "",
  mixins: [tableGroupMixins],
  components: {
    threeLevel
  },
  props: {
    groupInfo: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      imageUrl: "",
      addressInfo: {
        province: '',
        city: '',
        county: '',
        address: ''
      }
    };
  },
  computed: {
    model() {
      return this.$parent.model;
    }
  },
  methods: {
    beforeAvatarUpload(file) {}
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
.onlyOne{
  .el-form-item{
    width: 100%;
  }
  /deep/.el-form-item__content{
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
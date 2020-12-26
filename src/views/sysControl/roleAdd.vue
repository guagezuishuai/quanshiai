<template>
  <div class="roleAdd">
    <div class="roleName">
      <div class="title">角色名称</div>
      <div class="content">
        <div class="item">
          <div class="label">角色名称</div>
          <el-input class="int" :disabled="!isEdit" placeholder="请输入角色名称，如健康管理师、医师、护理师等" v-model="name"></el-input>
          <el-radio v-model="status" label="1">员工角色</el-radio>
          <el-radio v-model="status" label="2">机构角色</el-radio>
        </div>
        <div class="item">
          <div class="label">机构概况</div>
          <el-input
            class="int"
            :rows="6"
            :disabled="!isEdit"
            type="textarea"
            placeholder="请输入角色名称，如健康管理师、医师、护理师等"
            v-model="remark"
          ></el-input>
        </div>
      </div>
    </div>
    <autherMenu ref="autherMenu" :autherIdArr="autherIdArr" :hasCheck="true">
      <div class="title" slot="title">权限选择</div>
    </autherMenu>
    <bottomBtn @submit="submit"></bottomBtn>
  </div>
</template>

<script>
import autherMenu from './auther/index';
import bottomBtn from '@/components/bottomBtn';
import {
  roleSaveOrUpdate,
  selectRoleId
} from "@/api/sys";
export default {
  name: "roleAdd",
  components: {
    autherMenu,
    bottomBtn
  },
  data() {
    return {
      name: "",
      status: "",
      remark: '',
      isEdit: true, // 新增和编辑的时候可以编辑
      autherIdArr: []
    };
  },
  mounted() {
    const id = this.$route.query.id;
    const isEdit = this.$route.query.isEdit;
    if(id) {
      this.isEdit = isEdit;
      selectRoleId({id}).then(res => {
        console.log(res);
      })
    }
  },
  methods: {
    submit() {
      const id = this.$route.query.id || '';
      const {name, remark, status} = this;
      const menuList = this.$refs.autherMenu.getCheckList();
      if(name === '') {
        this.$message.warning('请填写角色名称');
        return false;
      }
      if(remark === '') {
        this.$message.warning('请填写机构概况');
        return false;
      }
      if(menuList.length === 0) {
        this.$message.warning('请选择权限');
        return false;
      }
      const params = {
        id,
        name,
        remark,
        menuList,
        status
      }
      roleSaveOrUpdate(params).then(res => {
        this.$message.success('操作成功')
        this.$router.go(-1)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 16px;
  padding: 5px 0 5px 15px;
  background-color: #CAEDFD;
}
.roleName{
  margin-bottom: 20px;
}
.content {
  background-color: #fff;
  padding: 20px 40px;
  .item {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    .label {
      width: 100px;
      vertical-align: middle;
    }
    .int {
      flex: 1;
      margin-right: 40px;
    }
  }
}

</style>
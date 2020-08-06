<template>
  <div class="roleAdd">
    <div class="roleName">
      <div class="title">角色名称</div>
      <div class="content">
        <div class="item">
          <div class="label">角色名称</div>
          <el-input class="int" placeholder="请输入角色名称，如健康管理师、医师、护理师等" v-model="roleName"></el-input>
          <el-radio v-model="radio" label="1">员工角色</el-radio>
          <el-radio v-model="radio" label="2">机构角色</el-radio>
        </div>
        <div class="item">
          <div class="label">机构概况</div>
          <el-input
            class="int"
            :rows="6"
            type="textarea"
            placeholder="请输入角色名称，如健康管理师、医师、护理师等"
            v-model="roleName"
          ></el-input>
          <el-radio v-model="radio" label="1">员工角色</el-radio>
          <el-radio v-model="radio" label="2">机构角色</el-radio>
        </div>
      </div>
    </div>
    <autherMenu>
      <div class="title" slot="title">权限选择</div>
    </autherMenu>
  </div>
</template>

<script>
import autherMenu from './auther/index'
export default {
  name: "roleAdd",
  components: {
    autherMenu
  },
  data() {
    return {
      roleName: "",
      radio: "",
      
    };
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
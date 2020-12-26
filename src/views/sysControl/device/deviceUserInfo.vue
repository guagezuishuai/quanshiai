<template>
  <div>
    <tableGroup :groupInfo="groupInfo[0]">
      <div class="deviceUserInfo" slot="客户信息">
        <div class="rowContent">
          <el-form-item label="客户姓名" class="item">
            <div @click="showTable">
              <el-input readonly size="small" v-model="model.customerName"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="客户身份证号" class="item">
            <div>
              <el-input size="small" disabled v-model="model.customerCard"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="客户电话" class="item">
            <div>
              <el-input size="small" disabled v-model="model.customerPhpone"></el-input>
            </div>
          </el-form-item>
          <el-form-item label="客户年龄" class="item">
            <div>
              <el-input size="small" disabled v-model="model.age">
                <template slot="append">岁</template>
              </el-input>
            </div>
          </el-form-item>
          <el-form-item label="客户身高" class="item">
            <div>
              <el-input size="small" disabled v-model="model.height">
                <template slot="append">CM</template>
              </el-input>
            </div>
          </el-form-item>
          <el-form-item label="客户体重" class="item">
            <div>
              <el-input size="small" disabled v-model="model.weight">
                <template slot="append">KG</template>
              </el-input>
            </div>
          </el-form-item>
          <el-form-item label="客户步长" class="item">
            <div>
              <el-input size="small" v-model="model.buzhang">
                <template slot="append">CM</template>
              </el-input>
            </div>
          </el-form-item>
        </div>
      </div>
    </tableGroup>
    <tableUserInfo @rowDblclick="rowDblclick" ref="tableUserInfo"></tableUserInfo>
  </div>
</template>

<script>
import tableGroupMixins from "@/minxins/tableGroup";
import tableUserInfo from "@/components/tableUserInfo";
export default {
  name: "deviceUserInfo",
  mixins: [tableGroupMixins],
  components: {
    tableUserInfo
  },
  props: {
    groupInfo: Array
  },
  computed: {
    model() {
      return this.$parent.model;
    }
  },
  methods: {
    showTable() {
      this.$refs.tableUserInfo.show();
    },
    rowDblclick(row, column, event) {
      let parentModel = this.$parent.model;
      parentModel.customerId = row.id;
      parentModel.customerName = row.customerName;
      parentModel.customerCard = row.customerCard;
      parentModel.customerPhpone = row.customerPhpone;
      parentModel.age = row.age;
      parentModel.height = row.height;
      parentModel.weight = row.weight;
      // parentModel.stepWidth = row.customerName;
    }
  }
};
</script>
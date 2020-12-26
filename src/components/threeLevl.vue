<template>
  <div class="threeLevel">
    <el-row class="row" :gutter="24">
      <!-- 省 -->
      <el-col class="province" :span="8">
        <el-select
          :placeholder="addressdisabled?'':'请选择省'"
          @change="proChange"
          v-model="addressInfo.province"
          :disabled="addressdisabled"
        >
          <el-option
            v-for="(key, index) in province_data"
            :key="`province${index}`"
            :label="key.pname"
            :value="key.id"
          ></el-option>
        </el-select>
      </el-col>
      <!-- 市 -->
      <el-col class="province" :span="8">
        <el-select
          :placeholder="addressdisabled?'':'请选择市'"
          @change="cityChange"
          v-model="addressInfo.city"
          :disabled="addressdisabled"
        >
          <el-option
            v-for="(key, index) in city_data"
            :key="`city${index}`"
            :label="key.cname"
            :value="key.id"
          ></el-option>
        </el-select>
      </el-col>
      <!-- 县 -->
      <el-col class="province county" :span="8">
        <el-select
          :placeholder="addressdisabled?'':'请选择区'"
          v-model="addressInfo.county"
          :disabled="addressdisabled"
        >
          <el-option
            v-for="(key, index) in county_data"
            :key="`city${index}`"
            :label="key.dname"
            :value="key.id"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <template v-if="addressDetai">
      <el-input
        v-if="addressLength"
        class="textarea"
        :maxlength="addressLength"
        v-model="address"
        placeholder="请填写详细地址"
        type="textarea"
      ></el-input>
      <el-input
        v-else
        class="textarea"
        v-model="addressInfo.address"
        placeholder="请填写详细地址"
        type="textarea"
      ></el-input>
    </template>
  </div>
</template>

<script>
import {requestProvince, requestCity, requestCounty} from '../util/index';
export default {
  name: 'threeLevel',
  model: {
    prop: 'addressInfo',
    event: 'change'
  },
  props: {
    // 是否是禁用状态
    addressdisabled: {
      type: Boolean,
      default: false
    },
    addressDetai: {
      type: Boolean,
      default: false
    },
    // 详细地址的可输入长度
    addressLength: {
      type: Number,
      default: null
    },
    addressInfo: {
      type: Object,
      default: () => {
        return {
          province: '',
          city: '',
          county: '',
          address: ''
        }
      }
    }
  },
  data() {
    return {
      province_data: [],
      city_data: [],
      county_data: [],
    }
  },
  watch: {
    addressInfo: {
      handler() {
        // this.init()
      },
      deep: true
    }
  },
  mounted() {
    // 有接口了吧这三个请求数据的方法换了就好了
    console.log(this.add)
    this.init();
  },
  methods: {
    async init() {
      this.province_data = await requestProvince();
      this.addressInfo.province = this.addressInfo.province ? Number(this.addressInfo.province) : '';
      this.addressInfo.province !== '' && (this.city_data = await requestCity(this.addressInfo.province));
      this.addressInfo.city = this.addressInfo.city ? Number(this.addressInfo.city) : '';
      this.addressInfo.city !== '' && (this.county_data = await requestCounty(this.addressInfo.city));
      this.addressInfo.county = this.addressInfo.county ? Number(this.addressInfo.county): '';
    },
    async proChange(value) {
      this.city_data.length = 0;
      this.addressInfo.city = '';
      this.county_data.length = 0;
      this.addressInfo.county = '';
      this.city_data = await requestCity(value);
      this.$emit('change', this.addressInfo);
    },
    async cityChange(value) {
      this.county_data.length = 0;
      this.addressInfo.county = '';
      this.county_data = await requestCounty(value);
      this.$emit('change', this.addressInfo);
    }
  }
};
</script>

<style lang="scss" scoped>
.threeLevel {
  .row {
    margin: 0 !important;
  }
  /deep/ .el-select {
    width: 100%;
  }
  .province {
    padding-left: 0 !important;
  }
  .county {
    padding-right: 0 !important;
  }
  .textarea {
    margin-top: 0.625rem;
  }
}
</style>
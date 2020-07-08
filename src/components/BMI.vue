<template>
  <div class="BMItable">
    <div class="title">BMI和腰围与发病危险的关系</div>
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      align="center"
      prop="weight"
      label="肥胖程度">
    </el-table-column>
    <el-table-column
      prop="BMI"
      align="center"
      label="BMI范围">
    </el-table-column>
    <el-table-column align="center" label="腰围（cm）">
      <el-table-column
        prop="LOW"
        align="center"
        label="男<85   女<80"
        width="120">
      </el-table-column>
      <el-table-column
        prop="middle"
        align="center"
        label="85 <= 男 <=90   80 <=女 <= 90"
        width="120">
      </el-table-column>
      <el-table-column
        prop="top"
        align="center"
        label="男<85  女<80"
        width="120">
      </el-table-column>
    </el-table-column>
  </el-table>
  <div>注意：发病危险是指包括高血压、糖尿病、血脂异常等疾病的发病危险；体重过低可能预示有其他健康风险增加。引自《中国成人超重和肥胖症预防控制指南（试行）》)</div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      tableData: [
        {
          weight: '体重过低',
          BMI: 'BMI < 18.5',
          LOW: '增加',
          middle: '增加',
          top: '增加'
        },
        {
          weight: '正常',
          BMI: '18.5 <= BMI < 24.0',
          LOW: '正常',
          middle: '增加',
          top: '高'
        },
        {
          weight: '超重',
          BMI: '24.0 <= BMI < 28.0',
          LOW: '增加',
          middle: '高',
          top: '极高'
        },
        {
          weight: '肥胖',
          BMI: 'BMI > 28.0',
          LOW: '高',
          middle: '极高',
          top: '极高'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.BMItable{
  width: 95%;
  text-align: center;
}
</style>
<template>
  <div class="device">
    <el-button>新增设备</el-button>
    <app-form :dataInfo="dataInfo"></app-form>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data() {
    return {
      dataInfo: {
        inline: true, // 表单组件的排列方式
        labelPosition: 'left', // top  left 表单label的位置
        labelWidth: '100px',
        components: [
          {
            type: 'input',
            props: 'name',
            placeholder: '请输入客户姓名',
            label: '客户姓名',
            size: 'small',
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: 'input',
            props: 'idNumber',
            placeholder: '请输入客户身份证号',
            label: '客户身份证号',
            size: 'small',
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: 'input',
            props: 'tel',
            placeholder: '请输入客户电话',
            label: '客户电话',
            size: 'small',
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: 'input',
            props: 'userNumber',
            placeholder: '请输入设备标识',
            label: '客户标识',
            size: 'small',
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: 'select',
            props: 'deviceType',
            placeholder: '请选择设备类别',
            label: '设备类别',
            size: 'small',
            options: [
              {
                label: '男',
                value: 0
              },
              {
                label: '女',
                value: 1
              }
            ],
            contentWidth: '176px',
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: 'select',
            props: 'deviceType',
            placeholder: '请选择设备型号',
            label: '设备型号',
            size: 'small',
            options: [
              {
                label: '男',
                value: 0
              },
              {
                label: '女',
                value: 1
              }
            ],
            contentWidth: '176px',
            auther: {
              see: true,
              write: true
            }
          },
        ]
      }
    };
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>

</style>
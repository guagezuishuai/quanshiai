<template>
  <div class="bottomBtn">
      <el-button @click="submit" class="btn mainbgcolor">{{ btnText }}</el-button>
    </div>
</template>

<script>
export default {
  name: 'bottomBtn',
  props: {
    btnText: {
      type: String,
      default: '保 存'
    }
  },
  methods: {
    submit() {
      this.$emit('submit');
    }
  }
}
</script>

<style lang="scss" scoped>
.bottomBtn{
  text-align: center;
  margin-top: 20px;
}
.btn{
  width: 600px;
  height: 40px;
  font-size: 24px;
}
</style>
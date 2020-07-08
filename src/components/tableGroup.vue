<template>
  <div class="tableGroup">
    <div class="groupTitle" v-if="groupInfo.title && groupInfo.title != ''">{{ groupInfo.title }}</div>
    <div class="content">
      <!-- 左侧插槽 -->
      <slot name="left"></slot>
      <!-- 左侧内容 -->
      <div class="left">
        <template v-if="groupInfo.info">
          <div class="rowBox" v-for="(key, index) in groupInfo.info" :key="index">
            <template v-if="key.subInfo">
              <div class="leftTitle">
                <span>{{ key.title }}</span>
                <div class="subTitle" v-if="key.subTitle"> {{ key.subTitle }} </div>
              </div>
              <div class="rightContentBox">
                <div
                  class="rightContent"
                  v-for="(item, itemIndex) in key.subInfo"
                  :key="`sub${itemIndex}`"
                >
                  <!-- <div> -->
                  <div class="rowTitle">{{ item }}</div>
                  <div class="rowContent">
                    <slot :name="item"></slot>
                  </div>
                  <!-- </div> -->
                </div>
              </div>
            </template>
            <template v-else>
              <div class="rowTitle">
                <div class="titleBox">
                  <span>{{ key.title || key }}</span>
                  <div class="subTitle" v-if="key.subTitle"> {{ key.subTitle }} </div>
                </div>
              </div>
              <div class="rowContent">
                <slot :name="key.title || key"></slot>
              </div>
            </template>
          </div>
        </template>
        <template v-else>
          <div class="rowBox">
            <slot></slot>
          </div>
        </template>
      </div>
      <!-- 右侧是否有内容 -->
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tableGroup",
  props: {
    groupInfo: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang="scss" scoped>
.tableGroup {
  margin-bottom: 20px;
  .groupTitle {
    background-color: #caedfd;
    padding: 5px 10px;
    color: #273359;
  }
  .content {
    padding: 15px 30px;
    display: flex;
  }
}
.left {
  flex: 1;
  .leftTitle {
    width: 30px;
    background-color: #eff3f3;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-right: 10px;
    padding: 0 10px;
  }
  .rightContentBox {
    flex: 1;
  }
  .rightContent {
    display: flex;
    flex: 1;
    margin-bottom: 20px;
    .rowTitle {
      width: 185px !important;
    }
    .rowBox {
      flex-wrap: wrap;
    }
  }
  :last-child {
    margin-bottom: 0;
  }
  .rowBox {
    display: flex;
    margin-bottom: 20px;
    .rowTitle {
      width: 247px;
      background-color: #eff3f3;
      border-radius: 6px;
      color: #273359;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      .titleBox{
        text-align: center;
        .subTitle{
          color: #616161;
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
    .rowContent {
      display: flex;
      align-items: center;
      flex: 1;
    }
  }
}
</style>
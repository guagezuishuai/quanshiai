<template>
  <div class="steps">
    <!-- 最底层的大圈和连通器 -->
    <div class="bigcircleBox">
      <div class="circleBox">
        <div class="circle"></div>
        <div class="circleText">{{ stepsMsg[0] }}</div>
      </div>
      <template v-for="(key, index) in steps-1">
        <div class="bigCircleItem" :key="`big${index}`">
          <div class="connect"></div>
          <!-- 为了给圆圈挤开位置 -->
          <div style="flex: 1;"></div>
          <div class="circleBox">
            <div class="circle"></div>
            <div class="circleText">{{ stepsMsg[index+2] }}</div>
          </div>
        </div>
      </template>
    </div>
    <!-- 变色的圈和连通器 -->
    <div class="changColor">
      <div class="active circle"></div>
      <template v-for="(key, index) in steps-1">
        <div class="changeItem" :key="`big${index}`">
          <div class="connect active" v-if="index + 2 <= active "></div>
          <!-- 为了给圆圈挤开位置 -->
          <div style="flex: 1;"></div>
          <div class="circle"  :class="index + 2 <= active ? 'active' : 'normal'"></div>
        </div>
      </template>
    </div>
    <!-- 填数字的区域 -->
    <div class="textBox">
      <div class="base circle">01</div>
      <template v-for="(key, index) in steps-1">
        <div class="textItem" :key="`big${index}`">
          <!-- <div class="connect"></div> -->
          <!-- 为了给圆圈挤开位置 -->
          <div style="flex: 1;"></div>
          <div class="circle">
            0{{ 2+index }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'steps',
  props: {
    steps: {
      type: Number,
      default: 3
    },
    active: {
      type: Number,
      default: 1
    },
    stepsMsg: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.steps{
  position: relative;
  text-align: center;
  margin-bottom: 50px;
}
.active{
  background-color: #2BB2E7;
}
.normal{
  background-color: #ccc;
}
.bigcircleBox{
  display: flex;
  justify-content: space-between;
  align-items: center;
  .bigCircleItem{
    display: flex;
    align-items: center;
    flex: 1;
    position: relative;
  }
  .circleBox{
    position: relative;
    .circleText{
      position: absolute; 
      width: 100%;
      margin-top: 15px;
      font-size: 24px;
    }
  }
  .circle{
    background-color: #f5f5f5;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: none;
    box-shadow: 1px 1px 1px #ccc;
  }
  .connect{
    background-color: #f5f5f5;
    height: 40px;
    width: 100%;
    border: none;
    position: absolute;
    right: 60px;
    // box-shadow: 1px 1px 1px #ccc;
  }
}
.changColor{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: calc(50% - 40px);
  box-sizing: border-box;
  padding: 0 20px;
  .changeItem{
    display: flex;
    align-items: center;
    flex: 1;
    position: relative;
  }
  .circle{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: none;
  }
  .connect{
    height: 20px;
    width: 100%;
    border: none;
    position: absolute;
    right: 1px;
  }
}
.textBox{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: calc(50% - 20px);
  box-sizing: border-box;
  padding: 0 40px;
  .changeItem{
    display: flex;
    align-items: center;
    flex: 1;
    position: relative;
  }
  .circle{
    background-image: linear-gradient(#e6e2e2, #fff);
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    border: none;
    font-size: 22px;
  }
}
</style>
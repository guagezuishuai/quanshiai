<template>
  <div class="dictionaries">
    <div class="content">
      <div class="left">
        <div class="title">数据字典</div>
        <div class="treeBox">
          <el-tree 
            :highlight-current="true"
            :data="data" 
            :props="defaultProps" 
            @node-click="handleNodeClick"
          ></el-tree>
        </div>
      </div>
      <div class="right">
        <div class="title">字典管理</div>
        <div class="subTitle">健康指标异常及报警容限值设定</div>
        <myGroup 
          v-for="(key, index) in groupData" 
          :key="`group${index}`"
          :info="key"
        ></myGroup>
      </div>
    </div>
  </div>
</template>

<script>
import myGroup from '@/components/group.vue'
export default {
  components: {
    myGroup
  },
  data() {
    return {
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      groupData: [
        {
          title: '心率',
          normal: [
            {
              image: require('../../assets/imgs/dataDic/heartNormal.png'),
              content: [
                {
                  label: '心率异常上限值',
                  value: '',
                  company: 'bmp'
                },
                {
                  label: '心率异常下限值',
                  value: '',
                  company: 'bmp'
                }
              ],
              haSwitch: false,
            }
          ],
          warning: [
            {
              image: require('../../assets/imgs/dataDic/heartWar.png'),
              content: [
                {
                  label: '心率异常上限值',
                  value: '',
                  company: 'bmp'
                },
                {
                  label: '心率异常下限值',
                  value: '',
                  company: 'bmp'
                }
              ],
              haSwitch: true,
              switchLabel: '报警开启'
            }
          ]
        },
        {
          title: '血压',
          normal: [
            {
              image: require('../../assets/imgs/dataDic/gaoyaNormal.png'),
              content: [
                {
                  label: '高压异常上限值',
                  value: '',
                  company: 'bmp'
                },
                {
                  label: '高压异常下限值',
                  value: '',
                  company: 'bmp'
                }
              ],
              haSwitch: false,
            },
            {
              image: require('../../assets/imgs/dataDic/diyaNormal.png'),
              content: [
                {
                  label: '低压异常上限值',
                  value: '',
                  company: 'bmp'
                },
                {
                  label: '低压异常下限值',
                  value: '',
                  company: 'bmp'
                }
              ],
              haSwitch: false,
            },
          ],
          warning: [
            {
              image: require('../../assets/imgs/dataDic/gaoyaWar.png'),
              content: [
                {
                  label: '高压报警上限值',
                  value: '',
                  company: 'mmHg'
                },
                {
                  label: '高压报警下限值',
                  value: '',
                  company: 'mmHg'
                }
              ],
              haSwitch: true,
              switchLabel: '报警开启'
            },
            {
              image: require('../../assets/imgs/dataDic/diyaWar.png'),
              content: [
                {
                  label: '低压报警上限值',
                  value: '',
                  company: 'mmHg'
                },
                {
                  label: '低压报警下限值',
                  value: '',
                  company: 'mmHg'
                }
              ],
              haSwitch: true,
              switchLabel: '报警开启'
            }
          ]
        },
        {
          title: '计步',
          normal: [
            {
              image: require('../../assets/imgs/dataDic/computedStep.png'),
              content: [
                {
                  label: '计步异常上限值',
                  value: '',
                  company: '步'
                },
                {
                  label: '计步异常下限值',
                  value: '',
                  company: '步'
                }
              ],
              haSwitch: false,
            }
          ]
        },
        {
          title: '睡眠',
          normal: [
            {
              image: require('../../assets/imgs/dataDic/sleep.png'),
              content: [
                {
                  label: '睡眠异常上限值',
                  value: '',
                  company: '小时'
                },
                {
                  label: '睡眠异常下限值',
                  value: '',
                  company: '小时'
                }
              ],
              haSwitch: false,
            }
          ]
        },
        {
          title: '血氧',
          normal: [
            {
              image: require('../../assets/imgs/dataDic/xueyangNormal.png'),
              content: [
                {
                  label: '血氧异常下限值',
                  value: '',
                  company: '%'
                }],
              haSwitch: false,
            }
          ],
          warning: [
            {
              image: require('../../assets/imgs/dataDic/xueyangWar.png'),
              content: [
                {
                  label: '血氧报警下限值',
                  value: '',
                  company: '%'
                }
              ],
              haSwitch: true,
              switchLabel: '报警开启'
            }
          ]
        },
        {
          title: '呼吸',
          normal: [
            {
              image: require('../../assets/imgs/dataDic/huxiNormal.png'),
              content: [
                {
                  label: '呼吸异常上限值',
                  value: '',
                  company: '次/分钟'
                },
                {
                  label: '呼吸异常下限值',
                  value: '',
                  company: '次/分钟'
                }
              ],
              haSwitch: false,
            }
          ],
          warning: [
            {
              image: require('../../assets/imgs/dataDic/huxiWar.png'),
              content: [
                {
                  label: '呼吸报警上限值',
                  value: '',
                  company: '次/分钟'
                },
                {
                  label: '呼吸报警下限值',
                  value: '',
                  company: '次/分钟'
                }
              ],
              haSwitch: true,
              switchLabel: '报警开启'
            }
          ]
        },
        {
          title: '体温',
          normal: [
            {
              image: require('../../assets/imgs/dataDic/etiwenNor.png'),
              content: [
                {
                  label: '体温异常上限值',
                  value: '',
                  company: '℃'
                },
                {
                  label: '体温异常下限值',
                  value: '',
                  company: '℃'
                }
              ],
              haSwitch: false,
            }
          ],
          warning: [
            {
              image: require('../../assets/imgs/dataDic/tiwenWar.png'),
              content: [
                {
                  label: '体温报警上限值',
                  value: '',
                  company: '℃'
                },
                {
                  label: '体温报警下限值',
                  value: '',
                  company: '℃'
                }
              ],
              haSwitch: true,
              switchLabel: '报警开启'
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    }
  }
}
</script>

<style lang="scss" scoped>
.dictionaries{
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .bigTitle{
    color: #273359;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .content{
    display: flex;
    height: calc(100% - 0px);
    overflow-y: auto;
    .left{
      width: 250px;
      background-color: #fff;
      .title{
        font-size:18px;
        color:rgba(39,51,89,1);
        line-height:38px;
        text-shadow:0px 1px 0px rgba(195,244,244,0.75);
        text-align: center;
        background-color: #CAEDFD;
      }
      .treeBox{
        height: calc(100% - 50px);
        overflow: auto;
      }
    }
    .right{
      width: calc(100% - 200px);
      margin-left: 20px;
      background-color: #fff;
      overflow-y: auto;
      .title{
        font-size:18px;
        color:rgba(39,51,89,1);
        line-height:38px;
        text-shadow:0px 1px 0px rgba(195,244,244,0.75);
        text-align: center;
        background-color: #CAEDFD;
      }
      .subTitle{
        font-size:20px;
        font-weight:400;
        color:rgba(97,97,97,1);
        line-height:53px;
        text-align: center;
      }
      .group{
        padding: 0 30px;
        .groupTitle{
          font-size:18px;
          color:rgba(39,51,89,1);
          line-height:38px;
          text-shadow:0px 1px 0px rgba(195,244,244,0.75);
          background:rgba(216,240,251,1);
          padding-left: 10px;
          border-radius: 8px;
        }
      }
    }
  }
}
</style>
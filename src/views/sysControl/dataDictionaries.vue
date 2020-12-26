<template>
  <div class="dictionaries" @click.stop="$refs.tree.menuShow = false">
    <div class="content">
      <div class="left">
        <div class="title">数据字典</div>
        <div class="treeBox">
          <tree ref="tree"></tree>
        </div>
      </div>
      <div class="right">
        <div class="title">字典管理</div>
        <div v-if="true">
          <div class="subTitle">健康指标异常及报警容限值设定</div>
          <myGroup
            @exceptionValueSaveOrUpdate="exceptionValueSaveOrUpdate"
            v-for="(key, index) in groupData"
            :key="`group${index}`"
            :info="key"
          ></myGroup>
        </div>
        <!-- <typeSet></typeSet> -->
        <!-- <normalPage :info="curData"></normalPage> -->
      </div>
    </div>
  </div>
</template>

<script>
import tree from '@/components/tree';
import {
  exceptionValueList,
  exceptionValueSaveOrUpdate
} from "@/api/sys";
export default {
  components: {
    myGroup: () => import("@/components/group"),
    typeSet: () => import('./dicom/setType'),
    normalPage: () => import('./dicom/normalPage'),
    tree
  },
  data() {
    return {
      curData: {},
      groupData: [
        {
          title: "心率",
          normal: [
            {
              image: require("../../assets/imgs/dataDic/heartNormal.png"),
              content: [
                {
                  label: "心率异常上限值",
                  value: "",
                  company: "bmp"
                },
                {
                  label: "心率异常下限值",
                  value: "",
                  company: "bmp"
                }
              ],
              haSwitch: false,
              type: "0"
            }
          ],
          warning: [
            {
              image: require("../../assets/imgs/dataDic/heartWar.png"),
              content: [
                {
                  label: "心率报警上限值",
                  value: "",
                  company: "bmp"
                },
                {
                  label: "心率报警下限值",
                  value: "",
                  company: "bmp"
                }
              ],
              haSwitch: true,
              type: "1",
              switchLabel: "报警开启"
            }
          ]
        },
        {
          title: "血压",
          normal: [
            {
              image: require("../../assets/imgs/dataDic/gaoyaNormal.png"),
              content: [
                {
                  label: "高压异常上限值",
                  value: "",
                  company: "bmp"
                },
                {
                  label: "高压异常下限值",
                  value: "",
                  company: "bmp"
                }
              ],
              type: "2",
              haSwitch: false
            },
            {
              image: require("../../assets/imgs/dataDic/diyaNormal.png"),
              content: [
                {
                  label: "低压异常上限值",
                  value: "",
                  company: "bmp"
                },
                {
                  label: "低压异常下限值",
                  value: "",
                  company: "bmp"
                }
              ],
              type: "3",
              haSwitch: false
            }
          ],
          warning: [
            {
              image: require("../../assets/imgs/dataDic/gaoyaWar.png"),
              content: [
                {
                  label: "高压报警上限值",
                  value: "",
                  company: "mmHg"
                },
                {
                  label: "高压报警下限值",
                  value: "",
                  company: "mmHg"
                }
              ],
              haSwitch: true,
              type: "4",
              switchLabel: "报警开启"
            },
            {
              image: require("../../assets/imgs/dataDic/diyaWar.png"),
              content: [
                {
                  label: "低压报警上限值",
                  value: "",
                  company: "mmHg"
                },
                {
                  label: "低压报警下限值",
                  value: "",
                  company: "mmHg"
                }
              ],
              haSwitch: true,
              type: "5",
              switchLabel: "报警开启"
            }
          ]
        },
        {
          title: "计步",
          normal: [
            {
              image: require("../../assets/imgs/dataDic/computedStep.png"),
              content: [
                {
                  label: "计步异常上限值",
                  value: "",
                  company: "步"
                },
                {
                  label: "计步异常下限值",
                  value: "",
                  company: "步"
                }
              ],
              type: "6",
              haSwitch: false
            }
          ]
        },
        {
          title: "睡眠",
          normal: [
            {
              image: require("../../assets/imgs/dataDic/sleep.png"),
              content: [
                {
                  label: "睡眠异常上限值",
                  value: "",
                  company: "小时"
                },
                {
                  label: "睡眠异常下限值",
                  value: "",
                  company: "小时"
                }
              ],
              type: "7",
              haSwitch: false
            }
          ]
        },
        {
          title: "血氧",
          normal: [
            {
              image: require("../../assets/imgs/dataDic/xueyangNormal.png"),
              content: [
                {
                  label: "血氧异常下限值",
                  value: "",
                  company: "%"
                }
              ],
              type: "8",
              haSwitch: false
            }
          ],
          warning: [
            {
              image: require("../../assets/imgs/dataDic/xueyangWar.png"),
              content: [
                {
                  label: "血氧报警下限值",
                  value: "",
                  company: "%"
                }
              ],
              type: "9",
              haSwitch: true,
              switchLabel: "报警开启"
            }
          ]
        },
        {
          title: "呼吸",
          normal: [
            {
              image: require("../../assets/imgs/dataDic/huxiNormal.png"),
              content: [
                {
                  label: "呼吸异常上限值",
                  value: "",
                  company: "次/分钟"
                },
                {
                  label: "呼吸异常下限值",
                  value: "",
                  company: "次/分钟"
                }
              ],
              type: "10",
              haSwitch: false
            }
          ],
          warning: [
            {
              image: require("../../assets/imgs/dataDic/huxiWar.png"),
              content: [
                {
                  label: "呼吸报警上限值",
                  value: "",
                  company: "次/分钟"
                },
                {
                  label: "呼吸报警下限值",
                  value: "",
                  company: "次/分钟"
                }
              ],
              haSwitch: true,
              type: "11",
              switchLabel: "报警开启"
            }
          ]
        },
        {
          title: "体温",
          normal: [
            {
              image: require("../../assets/imgs/dataDic/etiwenNor.png"),
              content: [
                {
                  label: "体温异常上限值",
                  value: "",
                  company: "℃"
                },
                {
                  label: "体温异常下限值",
                  value: "",
                  company: "℃"
                }
              ],
              type: "12",
              haSwitch: false
            }
          ],
          warning: [
            {
              image: require("../../assets/imgs/dataDic/tiwenWar.png"),
              content: [
                {
                  label: "体温报警上限值",
                  value: "",
                  company: "℃"
                },
                {
                  label: "体温报警下限值",
                  value: "",
                  company: "℃"
                }
              ],
              type: "13",
              haSwitch: true,
              switchLabel: "报警开启"
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 指标类型 0 心率异常 ；1 心率报警；2 高压异常；3 低压异常 ；4 高压报警 ；
      // 5 低压报警 ； 6 计步异常 ； 7 睡眠异常 ； 8 血氧异常； 9 血氧报警；
      // 10 呼吸异常 ； 11 呼吸报警 ； 12 体温异常 ； 13 体温报警 ；
      const obj = {
        0: [0, "normal", "0"],
        1: [0, "warning", "0"],
        2: [1, "normal", "0"],
        3: [1, "normal", "1"],
        4: [1, "warning", "0"],
        5: [1, "normal", "1"],
        6: [2, "normal", "0"],
        7: [3, "normal", "0"],
        8: [4, "normal", "0"], // 上下限分开的
        9: [4, "warning", "0"],
        10: [5, "warning", "0"],
        11: [5, "normal", "1"],
        12: [6, "normal", "0"],
        13: [6, "normal", "0"]
      };
      exceptionValueList().then(res => {
        res.data.forEach(item => {
          let target = this.groupData;
          if (item.type && item.type != "") {
            obj[item.type].forEach(path => {
              target = target[path];
            });

            if (item.type === 8) {
              target["content"][0].value = item.upperLower;
            } else if (item.type === 9) {
              target["content"][0].value = item.limitValue;
            } else {
              target["content"][0].value = item.upperLower;
              target["content"][1].value = item.limitValue;
            }
            target["id"] = item.id;
            target["haSwitch"] = item.alarmSwitch;
          }
        });
      });
      
    },
    exceptionValueSaveOrUpdate(info) {
      const params = {
        id: info.id,
        LimitValue: info.content[1].value, // 下限值
        upperLower: info.content[0].value, // 上限值
        unit: info.content[1].company, // 单位
        type: info.type,
        alarmSwitch: info.haSwitch ? '0' : '1' // 是否开始报警 0 开 1 关
      };
      console.log(params);
      exceptionValueSaveOrUpdate(params).then(res => {
        this.$message.success('数据更新成功')
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.dictionaries {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .bigTitle {
    color: #273359;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .content {
    display: flex;
    height: calc(100% - 0px);
    overflow-y: auto;
    .left {
      width: 250px;
      background-color: #fff;
      .title {
        font-size: 18px;
        color: rgba(39, 51, 89, 1);
        line-height: 38px;
        text-shadow: 0px 1px 0px rgba(195, 244, 244, 0.75);
        text-align: center;
        background-color: #caedfd;
      }
      .treeBox {
        height: calc(100% - 50px);
        overflow: auto;
      }
    }
    .right {
      width: calc(100% - 200px);
      margin-left: 20px;
      background-color: #fff;
      overflow-y: auto;
      .title {
        font-size: 18px;
        color: rgba(39, 51, 89, 1);
        line-height: 38px;
        text-shadow: 0px 1px 0px rgba(195, 244, 244, 0.75);
        text-align: center;
        background-color: #caedfd;
      }
      .subTitle {
        font-size: 20px;
        font-weight: 400;
        color: rgba(97, 97, 97, 1);
        line-height: 53px;
        text-align: center;
      }
      .group {
        padding: 0 30px;
        .groupTitle {
          font-size: 18px;
          color: rgba(39, 51, 89, 1);
          line-height: 38px;
          text-shadow: 0px 1px 0px rgba(195, 244, 244, 0.75);
          background: rgba(216, 240, 251, 1);
          padding-left: 10px;
          border-radius: 8px;
        }
      }
    }
  }
}
</style>
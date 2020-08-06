<template>
  <div class="auther">
    <slot name="title"></slot>
    <div class="content">
      <div class>
        <template v-for="(key, index) in auter">
          <div class="autherItemBox" :key="`auther${index}`">
            <div class="left">
              <el-checkbox v-model="key.checked">{{ key.name }}</el-checkbox>
            </div>
            <div class="right">
              <template v-for="(item, itemIndex) in key.child">
                <div class="autherItem" :key="`item${itemIndex}`">
                  <template v-for="(autherItem, autherIndex) in item">
                    <el-checkbox
                      :key="`auther${autherIndex}`"
                      v-model="autherItem.checked"
                    >{{ autherItem.name }}</el-checkbox>
                  </template>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "auther",
  data() {
    return {
      auter: [
        {
          value: "monitorHome",
          name: "监控首页",
          checked: false,
          child: [
            [
              {
                name: "机构监控首页",
                value: "monitorHome/index",
                checked: false
              }
            ],
            [
              {
                name: "个人监控首页",
                value: "personHome/index",
                checked: false
              }
            ]
          ]
        },
        {
          value: "safeAssistance",
          name: "安全救助",
          checked: false
        },
        {
          value: "healthyCtrol",
          name: "健康管理",
          checked: false,
          child: [
            [
              {
                name: "健康监测页",
                value: "healthyCtrol/monitor",
                checked: false
              }
            ],
            [
              {
                name: "个人监控首页",
                value: "healthyCtrol/archives",
                checked: false
              },
              {
                name: "查看",
                value: "healthyCtrol/archives/see",
                checked: false
              },
              {
                name: "新建",
                value: "healthyCtrol/archives/add",
                checked: false
              },
              {
                name: "修改",
                value: "healthyCtrol/archives/edit",
                checked: false
              },
              {
                name: "删除",
                value: "healthyCtrol/archives/del",
                checked: false
              }
            ]
          ]
        },
        // {
        //   value: 'lifeService',
        //   name: '生活服务页',
        //   checked: false,
        // },
        // {
        //   value: 'culturalEnt',
        //   name: '文化娱乐页',
        //   checked: false,
        // },
        {
          value: "customer",
          name: "客户管理",
          checked: false,
          child: [
            [
              {
                name: "客户列表页",
                value: "customer/list",
                checked: false
              },
              {
                name: "查看",
                value: "customer/list/see",
                checked: false
              },
              {
                name: "新建",
                value: "customer/list/add",
                checked: false
              },
              {
                name: "修改",
                value: "customer/list/edit",
                checked: false
              },
              {
                name: "删除",
                value: "customer/list/del",
                checked: false
              },
              {
                name: "激活",
                value: "customer/list/activation",
                checked: false
              },
              {
                name: "冻结",
                value: "customer/list/thaw",
                checked: false
              }
            ],
            [
              {
                name: "信息登记页",
                value: "customer/registerInfo",
                checked: false
              }
            ],
            [
              {
                name: "能力评估页",
                value: "customer/assAbility",
                checked: false
              }
            ]
          ]
        },
        // {
        //   value: 'serviceSport',
        //   name: '服务支持页',
        //   checked: false,
        // },
        {
          value: "sysControl",
          name: "系统管理",
          checked: false,
          child: [
            [
              {
                name: "设备管理页",
                value: "sysControl/device",
                checked: false
              },
              {
                name: "查看",
                value: "customer/device/see",
                checked: false
              },
              {
                name: "新建",
                value: "customer/device/add",
                checked: false
              },
              {
                name: "修改",
                value: "customer/device/edit",
                checked: false
              },
              {
                name: "删除",
                value: "customer/device/del",
                checked: false
              },
              {
                name: "激活",
                value: "customer/device/activation",
                checked: false
              },
              {
                name: "冻结",
                value: "customer/device/thaw",
                checked: false
              }
            ],
            [
              {
                name: "员工管理页",
                value: "sysControl/staff",
                checked: false
              },
              {
                name: "查看",
                value: "customer/staff/see",
                checked: false
              },
              {
                name: "新建",
                value: "customer/staff/add",
                checked: false
              },
              {
                name: "修改",
                value: "customer/staff/edit",
                checked: false
              },
              {
                name: "删除",
                value: "customer/staff/del",
                checked: false
              },
              {
                name: "激活",
                value: "customer/staff/activation",
                checked: false
              },
              {
                name: "冻结",
                value: "customer/staff/thaw",
                checked: false
              }
            ],
            [
              {
                name: "机构管理页",
                value: "sysControl/mechanism",
                checked: false
              },
              {
                name: "查看",
                value: "customer/mechanism/see",
                checked: false
              },
              {
                name: "新建",
                value: "customer/mechanism/add",
                checked: false
              },
              {
                name: "修改",
                value: "customer/mechanism/edit",
                checked: false
              },
              {
                name: "删除",
                value: "customer/mechanism/del",
                checked: false
              },
              {
                name: "激活",
                value: "customer/mechanism/activation",
                checked: false
              },
              {
                name: "冻结",
                value: "customer/mechanism/thaw",
                checked: false
              }
            ],
            [
              {
                name: "角色管理页",
                value: "sysControl/role",
                checked: false
              },
              {
                name: "查看",
                value: "customer/role/see",
                checked: false
              },
              {
                name: "新建",
                value: "customer/role/add",
                checked: false
              },
              {
                name: "修改",
                value: "customer/role/edit",
                checked: false
              },
              {
                name: "删除",
                value: "customer/role/del",
                checked: false
              },
              {
                name: "激活",
                value: "customer/role/activation",
                checked: false
              },
              {
                name: "冻结",
                value: "customer/role/thaw",
                checked: false
              }
            ],
            [
              {
                name: "权限管理页",
                value: "sysControl/jurisdiction",
                checked: false
              },
              {
                name: "查看",
                value: "customer/jurisdiction/see",
                checked: false
              },
              {
                name: "新建",
                value: "customer/jurisdiction/add",
                checked: false
              },
              {
                name: "修改",
                value: "customer/jurisdiction/edit",
                checked: false
              },
              {
                name: "删除",
                value: "customer/jurisdiction/del",
                checked: false
              },
              {
                name: "激活",
                value: "customer/jurisdiction/activation",
                checked: false
              },
              {
                name: "冻结",
                value: "customer/jurisdiction/thaw",
                checked: false
              }
            ],
            [
              {
                name: "数据字典",
                value: "sysControl/dataDictionaries",
                checked: false
              },
              {
                name: "查看",
                value: "customer/dataDictionaries/see",
                checked: false
              },
              {
                name: "新建",
                value: "customer/dataDictionaries/add",
                checked: false
              },
              {
                name: "修改",
                value: "customer/dataDictionaries/edit",
                checked: false
              },
              {
                name: "删除",
                value: "customer/dataDictionaries/del",
                checked: false
              },
              {
                name: "激活",
                value: "customer/dataDictionaries/activation",
                checked: false
              },
              {
                name: "冻结",
                value: "customer/dataDictionaries/thaw",
                checked: false
              }
            ]
          ]
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      let content = document.querySelector('.content')
      content.oncontextmenu=function(ev){
          var ev=ev || event;
          console.log(ev)
          return false;
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.title{
  font-size: 16px;
  padding: 5px 0 5px 15px;
  background-color: #CAEDFD;
}
.auther {
  .content {
    background-color: #fff;
    padding: 20px 40px;
    .autherItemBox {
      display: flex;
      justify-content: left;
      // align-items: center;
      width: 100%;
      margin-bottom: 20px;
      .left {
        background-color: #eff3f3;
        width: 200px;
        height: auto;
        padding: 5px 0;
        text-align: center;
        margin-right: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .right {
        flex: 1;
      }
      .autherItem {
        display: flex;
        line-height: 40px;
      }
    }
  }
}
</style>
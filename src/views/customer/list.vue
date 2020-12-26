<template>
  <div class="list">
    <div class="topbox">
      <div class="btnBox">
        <el-button class="mainbgcolor" size="small" type="primary" @click="$router.push('/customer/add')" icon="el-icon-edit">新增客户</el-button>
        <el-button class="mainbgcolor" size="small" type="primary" icon="el-icon-edit">查询</el-button>
        <el-button class="mainbgcolor" size="small" type="primary" icon="el-icon-edit">批量删除</el-button>
        <el-button class="mainbgcolor" size="small" type="primary" icon="el-icon-edit">批量导入</el-button>
      </div>
      <app-form ref="form" :dataInfo="dataInfo" :formType="formType" ></app-form>
      <!-- <el-button @click="changeSearchBox" class="mainbgcolor" type="primary">{{ searchBoxState === 'up' ? '收起' : '更多查询条件' }}</el-button> -->
    </div>
    
    <!-- 表格 -->
    <div class="table">
       <el-table
        :data="tableData"
        :header-cell-style="{'text-align': 'center'}"
        style="width: 100%">
         <el-table-column
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column label="基本信息">
          <template slot-scope="scope">
            <div class="baseInfoBox">
              <el-image class="avator" :src="scope.row.baseInfo.img"></el-image>
              <div class="baseInfoDetail">
                <div>编号：{{ scope.row.baseInfo.number }}</div>
                <div>姓名：{{ scope.row.baseInfo.name }}</div>
                <div>性别：{{ scope.row.baseInfo.sex }}</div>
                <div>年龄：{{ scope.row.baseInfo.age }}</div>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="身份信息">
          <template slot-scope="scope">
            <div class="idInfoDetai">
              <div>身份证：{{ scope.row.idInfo.idNumber }}</div>
              <div>电 话：{{ scope.row.idInfo.tel }}</div>
              <div>所属地：{{ scope.row.idInfo.local }}</div>
              <div>所属机构：{{ scope.row.idInfo.org }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="健康信息">
          <template slot-scope="scope">
            <div class="healthInfoDetail">
              <div>能力等级：{{ scope.row.healthInfo.assLevel }}</div>
              <div>BMI指数：{{ scope.row.healthInfo.BMI }}</div>
              <div>病史信息：{{ scope.row.healthInfo.diseaseInfo }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="服务信息">
          <template slot-scope="scope">
            <div class="serviceInfoDetail">
              <div>登记时间：{{ scope.row.serviceInfo.registerTime }}</div>
              <div>护理级别：{{ scope.row.serviceInfo.nursingLevel }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column width="250px" label="操作">
          <template slot-scope="scope">
            <div class="tableBtns">
            <el-button class="btn_link btnSee" @click="toSee(scope)">查看</el-button>
            <el-button class="btn_link btnEdit" @click="toEdit(scope)">修改</el-button>
            <el-button class="btn_link btndel" @click="toDelet(scope)">删除</el-button>
          </div>
          <div class="tableBtns">
            <el-button
              class="btn_link btnSee"
              @click="deviceControl(scope.$index, scope.row)"
              style="margin: 0"
            >设备</el-button>
            <el-button
              class="btn_link btnEdit"
              :disabled="scope.row.status == '0'"
              @click="activation(scope)"
            >激活</el-button>
            <el-button
              class="btn_link btndel"
              :disabled="scope.row.status == '1'"
              @click="frozen(scope)"
            >冻结</el-button>
          </div>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        class="pagination"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="PAGESIZE"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="count"
      ></el-pagination>
    </div>
    
  </div>
</template>

<script>
import customTablemixins from '@/minxins/customTable';
import {customerList} from '@/api/customer';
import {BMIName} from '@/util/index';
export default {
  mixins: [customTablemixins],
  data() {
    return {
      formType: 'search',
      searchBoxState: 'up',
      dataInfo: {
        inline: true, // 表单组件的排列方式
        labelPosition: 'left', // top  left 表单label的位置
        labelWidth: '100px',
        components: [
          {
            type: 'input',
            props: 'customerNum',
            placeholder: '请输入客户编号',
            label: '客户编号',
            size: 'small',
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: 'input',
            props: 'customerName',
            placeholder: '请输入姓名',
            label: '姓名',
            size: 'small',
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: 'input',
            props: 'customerCard',
            placeholder: '请输入身份证号',
            label: '身份证号',
            size: 'small',
            auther: {
              see: true,
              write: true
            }
          },
          // {
          //   type: 'input',
          //   props: 'bedNumber',
          //   placeholder: '请输入床位编号',
          //   label: '床位编号',
          //   size: 'small',
          //   auther: {
          //     see: true,
          //     write: true
          //   }
          // },
          {
            type: 'input',
            props: 'userAge',
            placeholder: '请输入客户年龄',
            label: '客户年龄',
            size: 'small',
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: 'select',
            props: 'customerGender',
            placeholder: '请选择性别',
            label: '性别',
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
            type: 'input',
            props: 'customerPhpone',
            placeholder: '请输入电话号码',
            label: '电话号码',
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: 'input',
            props: 'organId',
            placeholder: '请输入所属机构',
            label: '所属机构',
            size: 'small',
            auther: {
              see: true,
              write: true
            }
          },
          // {
          //   type: 'select',
          //   props: 'state',
          //   placeholder: '请选择入住状态',
          //   label: '入住状态',
          //   contentWidth: '176px',
          //   size: 'small',
          //   options: [
          //     {
          //       label: '居家',
          //       value: 0
          //     },
          //     {
          //       label: '入住',
          //       value: 1
          //     },
          //     {
          //       label: '试住',
          //       value: 2
          //     },
          //     {
          //       label: '不确定',
          //       value: 3
          //     }
          //   ],
          //   auther: {
          //     see: true,
          //     write: true
          //   }
          // },
          {
            type: 'select',
            props: 'abilityDegree',
            placeholder: '请选择能力等级',
            label: '能力等级',
            contentWidth: '176px',
            size: 'small',
            options: [
              {
                label: '能力完好',
                value: 0
              },
              {
                label: '轻度失眠',
                value: 1
              },
              {
                label: '中度失眠',
                value: 2
              },
              {
                label: '重度失眠',
                value: 3
              }
            ],
            auther: {
              see: true,
              write: true
            }
          },
          {
            type: 'select',
            props: 'nursingDegree',
            placeholder: '请选择护理级别',
            label: '护理级别',
            contentWidth: '176px',
            size: 'small',
            options: [
              {
                label: '零级护理',
                value: 0
              },
              {
                label: '一级护理',
                value: 1
              },
              {
                label: '二级护理',
                value: 2
              },
              {
                label: '三级护理',
                value: 3
              },
              {
                label: '不确定',
                value: 4
              }
            ],
            auther: {
              see: true,
              write: true
            }
          },
          // {
          //   type: 'select',
          //   props: 'payState',
          //   placeholder: '请选择缴费状态',
          //   label: '缴费状态',
          //   contentWidth: '176px',
          //   size: 'small',
          //   options: [
          //     {
          //       label: '已缴费',
          //       value: 0
          //     },
          //     {
          //       label: '欠费',
          //       value: 1
          //     },
          //     {
          //       label: '无需缴费',
          //       value: 2
          //     }
          //   ],
          //   auther: {
          //     see: true,
          //     write: true
          //   }
          // },
          // {
          //   type: 'select',
          //   props: 'serviceState',
          //   placeholder: '请选择服务状态',
          //   label: '服务状态',
          //   contentWidth: '176px',
          //   size: 'small',
          //   options: [
          //     {
          //       label: '服务中',
          //       value: 0
          //     },
          //     {
          //       label: '停止服务',
          //       value: 1
          //     },
          //     {
          //       label: '未服务',
          //       value: 2
          //     },
          //     {
          //       label: '不确定',
          //       value: 3
          //     }
          //   ],
          //   auther: {
          //     see: true,
          //     write: true
          //   }
          // },
          // {
          //   type: 'input',
          //   props: 'otherInfo',
          //   placeholder: '请输入其他信息',
          //   label: '其他信息',
          //   contentWidth: '176px',
          //   size: 'small',
          //   auther: {
          //     see: true,
          //     write: true
          //   }
          // }
        ],
      },
      // 表格的数据
      tableData: [
        {
          baseInfo: {
            img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1242273181,3992362129&fm=26&gp=0.jpg',
            number: 'SH001',
            name: '于大郎',
            sex: '男',
            age: '70'
          },
          idInfo: {
            idNumber: '341223198007195355',
            tel: '15821499789',
            local: '上海市-徐汇区',
            org: '古漪园社区店'
          },
          healthInfo: {
            assLevel: '1-轻度失能',
            BMI: '35(重度肥胖)',
            diseaseInfo: '高血压/心脏病/高血脂'
          },
          serviceInfo: {
            registerTime: '2018-01-01  20:20',
            nursingLevel: '二级护理',
            // BedNumber: 'A4087'
          }
        }
      ]
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$refs.form.getFromValue(params => {
        customerList(params).then(res => {
          console.log(res)
          this.tableData = res.data.records.map(item => {
            return {
              baseInfo: {
                img: item.fileUrl,
                number: item.customerNum,
                name: item.customerName,
                sex: item.customerGender,
                age: item.age
              },
              idInfo: {
                idNumber: item.customerCard,
                tel: item.customerPhpone,
                local: `${item.pname}-${item.cname}`,
                org: item.customerOrg
              },
              healthInfo: {
                assLevel: item.assessFinDegree,
                BMI:  `${item.bmi}(${BMIName(item.bmi)})`,
                diseaseInfo: item.disease
              },
              serviceInfo: {
                registerTime: item.createdTime,
                nursingLevel: item.nursingDegree,
                // BedNumber: 'A4087'
              }
            }
          });
          this.count = res.total;
        })
      })
    },
    changeSearchBox() {
      const isUp = this.searchBoxState === 'up';
      this.searchBoxState = isUp ? 'dowm' : 'up';
      this.dataInfo.components = this.dataInfo.components.map((res, index) => {
        if(index > 7) {
          res.auther.see = !isUp;
          return res;
        } else {
          return res
        }
      })
    },
    toSee() {
      this.$router.push({
        path: '/customer/add',
        query: {
          id: '12'
        }
      });
    },
    toEdit() {

    },
    toDelet() {

    },
    deviceControl() {

    },
    activation() {

    },
    frozen() {

    }
  }
}
</script>

<style lang="scss" scoped>
.table{
  .baseInfoBox{
    display: flex;
    line-height: 25px;
    .avator{
      width:105px;
      height:125px;
      margin-right: 5px;
    }
  }
}
/deep/.el-input{
  width: 175px;
}
.pagination{
  text-align: center;
  background-color: #fff;
}
</style>
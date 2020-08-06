// 这套数据菜单用，路由也用
export default [
  {
    index: 1,
    name: '监控首页',
    path: '/monitorHome',
    children: [
      {
        name: '个人监控首页',
        index: 1,
        icon: 'el-icon-setting',
        path: '/monitorHome/index'
      }
    ]
  },
  {
    index: 2,
    name: '安全救助',
    path: '/safeAssistance',
    children: [
      {
        name: '安全救助首页',
        path: '/safeAssistance/index',
        index: 1
      }
    ]
  },
  {
    index: 3,
    name: '健康管理',
    path: '/healthyCtrol',
    children: [
      {
        name: '健康管理首页',
        index: 1,
        path: '/healthyCtrol/index'
      },
      {
        name: '健康监测',
        index: 2,
        path: '/healthyCtrol/monitor'
      },
      // {
      //   name: '健康报告',
      //   index: 3,
      //   path: '/healthyCtrol/report'
      // },
      {
        name: '健康档案',
        index: 4,
        path: '/healthyCtrol/archives'
      }
    ]
  },
  // {
  //   index: 5,
  //   name: '生活服务'
  // },
  // {
  //   index: 6,
  //   name: '文化娱乐'
  // },
  {
    index: 6,
    name: '客户管理',
    path: '/customer/index',
    children: [
      {
        name: '客户管理首页',
        index: 1,
        path: '/customer/index'
      },
      {
        name: '客户列表',
        index: 2,
        path: '/customer/list',
        hasShowChild: false, // 没有子集
      },
      {
        name: '客户列表新增',
        index: '2-1',
        path: '/customer/add',
        isShow: false
      },
      {
        name: '信息登记',
        index: 3,
        path: '/customer/registerInfo'
      },
      {
        name: '能力评估',
        index: 4,
        path: '/customer/assAbility'
      }
    ]
  },
  // {
  //   index: 7,
  //   name: '服务支持'
  // },
  {
    index: 8,
    name: '系统管理',
    path: '/sysControl',
    children: [
      {
        index: 1,
        name: '系统管理首页',
        path: '/sysControl/index'
      },
      {
        index: 2,
        name: '设备管理',
        path: '/sysControl/device'
      },
      
      {
        index: 3,
        name: '我的账号',
        path: '/sysControl/myCount'
      },
      {
        index: 4,
        name: '员工管理',
        path: '/sysControl/staff'
      },
      {
        index: 5,
        name: '机构管理',
        path: '/sysControl/mechanism'
      },
      {
        index: 6,
        name: '角色管理',
        path: '/sysControl/role'
      },
      {
        index: 7,
        name: '权限目录',
        path: '/sysControl/jurisdiction'
      },
      {
        index: 8,
        name: '数据字典',
        path: '/sysControl/dataDictionaries'
      },
      {
        index: '2-1',
        name: '新增设备',
        path: '/sysControl/addDevice',
        isShow: false
      },
      {
        index: '2-2',
        name: '绑定设备',
        path: '/sysControl/bindingDevice',
        isShow: false
      },
      {
        index: '2-3',
        name: '安全设置',
        path: '/sysControl/safeEdit',
        isShow: false
      },
      {
        index: '2-4',
        name: '新增员工',
        path: '/sysControl/staffAdd',
        isShow: false
      },
      {
        index: '2-5',
        name: '新增员工',
        path: '/sysControl/mechanismAdd',
        isShow: false
      },
      {
        index: '2-5',
        name: '新增员工',
        path: '/sysControl/roleAdd',
        isShow: false
      },
    ]
  }
]
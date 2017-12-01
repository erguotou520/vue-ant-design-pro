export default [
  {
    title: 'Dashboard',
    icon: 'speedometer',
    name: 'dashboard',
    children: [
      {
        title: '分析页',
        name: 'analysis'
      }, {
        title: '监控页',
        name: 'monitor'
      }, {
        title: '工作台',
        name: 'worksplace'
      }
    ]
  }, {
    title: '表单页',
    icon: 'compose',
    name: 'form',
    children: [
      {
        title: '基础表单',
        name: 'basic{form'
      }, {
        title: '分步表单',
        name: 'step{form'
      }, {
        title: '高级表单',
        name: 'advanced{form'
      }
    ]
  }, {
    title: '列表页',
    icon: 'android-list',
    name: 'list',
    children: [
      {
        title: '查询表格',
        name: 'table{list'
      }, {
        title: '标准列表',
        name: 'basic{list'
      }, {
        title: '卡片列表',
        name: 'card{list'
      }, {
        title: '搜索列表(项目)',
        name: 'cover{card{list'
      }, {
        title: '搜索列表(应用)',
        name: 'filter{card{list'
      }, {
        title: '搜索列表(文章)',
        name: 'search'
      }
    ]
  }, {
    title: '详情页',
    icon: 'ios-paper',
    name: 'profile',
    children: [
      {
        title: '基础详情页',
        name: 'basic'
      }, {
        title: '高级详情页',
        name: 'advanced'
      }
    ]
  }, {
    title: '结果',
    icon: 'checkmark-circled',
    name: 'result',
    children: [
      {
        title: '成功',
        name: 'success'
      }, {
        title: '失败',
        name: 'fail'
      }
    ]
  }, {
    title: '异常',
    icon: 'android-warning',
    name: 'exception',
    children: [
      {
        title: '403',
        name: '403'
      }, {
        title: '404',
        name: '404'
      }, {
        title: '500',
        name: '500'
      }
    ]
  }, {
    title: '账户',
    icon: 'android-person',
    name: 'account',
    children: [
      {
        title: '登录',
        name: 'login'
      }, {
        title: '注册',
        name: 'register'
      }, {
        title: '注册结果',
        name: 'register{result'
      }
    ]
  }, {
    title: '项目地址',
    icon: 'social-github',
    href: 'https://github.com/erguotou520/vue-ant-design-pro'
  }
]

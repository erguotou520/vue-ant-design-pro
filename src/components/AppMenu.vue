<script>
import menus from '@/menus'
export default {
  name: 'app-menu',
  props: {
    collapsed: Boolean
  },
  computed: {
    openMenus () {
      const arr = /\/(\w+)\/\w+/.exec(this.$route.path)
      if (arr && arr.length) {
        return [arr[1]]
      }
      return []
    },
    width () {
      return this.collapsed ? '5rem' : '16rem'
    }
  },
  render (h) {
    const logo = require('../assets/images/logo.png')
    const subMenus = []

    // 菜单图标
    function generateMenuIcon (menu) {
      return [
        h('i-icon', { staticClass: 'menu-icon', props: { type: menu.icon }}),
        h('span', { staticClass: 'menu-text' }, [menu.title])
      ]
    }

    menus.forEach(menu => {
      if (menu.href) {
        // href跳转菜单
        subMenus.push(h('i-menu-item', {
          props: { name: menu.href },
          nativeOn: {
            click () {
              window.location.href = menu.href
            }
          }
        }, generateMenuIcon(menu)))
      } else {
        // 子菜单，先是icon
        const menuItems = [h('template', { slot: 'title' }, generateMenuIcon(menu))]
        if (menu.children && menu.children.length) {
          // 二级子菜单
          menu.children.forEach(childMenu => {
            const name = `/${menu.name}/${childMenu.name}`
            menuItems.push(h('i-menu-item', {
              props: { name },
              nativeOn: {
                click: () => {
                  this.$router.push(name)
                }
              }
            }, [childMenu.title]))
          })
        }
        subMenus.push(h('i-submenu', {
          props: { name: menu.name }
        }, menuItems))
      }
    })
    return h('div', {
      staticClass: 'app-layout-slider flex flex-column pos-r',
      style: { width: this.width }
    }, [
      h('div', { staticClass: 'app-icon flex' }, [
        h('router-link', { staticClass: 'flex flex-1 flex-row flex-jc-center flex-ai-center text-white', props: { to: '/' }}, [
          h('img', { attrs: { src: logo }}),
          h('h1', { staticClass: 'ml-2 font-20 text-white' }, 'Vue Ant Pro')
        ])
      ]),
      h('div', { staticClass: 'flex-1 scroll-y' }, [
        h('i-menu', {
          staticClass: 'mt-2',
          props: {
            theme: 'dark',
            activeName: this.$route.path,
            openNames: this.openMenus,
            width: 'auto'
          }
        }, subMenus)
      ])
    ])
  }
}
</script>
<style lang="stylus">
@import '../assets/styles/variable'
$menu-bg-color = #001529
.app-layout-slider
  min-height 100vh
  box-shadow 2px 0 6px rgba(0, 21, 41, 0.35)
  background-color $menu-bg-color
  transition width .3s
  // logo
  .app-icon
    height $header-height
    font-size 20px
    font-family 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif
    font-weight 600
    background-color #002140
    img
      max-width 32px
      max-height @max-width
      width 100%
      height 100%
  // 背景色和菜单颜色覆盖
  .ivu-menu-dark
  .ivu-menu-dark .ivu-menu-opened
  .ivu-menu-dark .ivu-menu-opened .ivu-menu-submenu-title
    background-color $menu-bg-color
  .ivu-menu-dark .ivu-menu-opened .ivu-menu-submenu-title
    color rgba(#fff, .5)
  .ivu-menu-dark .ivu-menu-item-active .ivu-menu-submenu-title
    color #fff
  // 菜单图标
  .ivu-icon
    min-width 14px
    font-size 16px
  ::-webkit-scrollbar-thumb
    background-color #595d61
// 菜单被收起时
.app-collapsed .app-layout-slider
  // 展示整个图标
  .ivu-menu-submenu-title
    padding-left 32px
    padding-right 32px
  .menu-icon
    font-size 20px
  // 隐藏内容
  .app-icon h1
  .menu-text
  .ivu-menu-opened .ivu-menu
  .ivu-menu-submenu-title-icon
    display none
  // 鼠标hover时显示子菜单
  .ivu-menu-submenu
    position relative
    &:hover
      .ivu-menu
        position absolute
        display block !important
        top 0
        left 82px
        padding-top 8px
        padding-bottom 8px
        width auto
        background-color $menu-bg-color
        border-radius 4px
        .ivu-menu-item
          padding 8px 12px
          width 10rem
  // 没有子菜单的菜单
  > .ivu-menu > .ivu-menu-item
    text-align center
    .menu-icon
      margin-right 0
</style>
<!-- <template>
  <div class="app-layout-slider" :style="{width}">
    <i-menu theme="dark" :active-name="$route.path"
      :open-names="openMenus" width="auto">
      <i-submenu name="dashboard">
        <template slot="title">
          <i-icon type="ios-paper"></i-icon>Dashboard
        </template>
        <i-menu-item name="/dashboard/analysis">分析页</i-menu-item>
        <i-menu-item name="/dashboard/monitor">监控页</i-menu-item>
        <i-menu-item name="/dashboard/worksplace">工作台</i-menu-item>
      </i-submenu>
    </i-menu>
  </div>
</template> -->

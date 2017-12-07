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
      staticClass: 'app-layout-slider pos-r',
      style: { width: this.width }
    }, [
      h('div', { staticClass: 'app-icon flex' }, [
        h('router-link', { staticClass: 'flex flex-1 flex-row flex-jc-center flex-ai-center text-white', props: { to: '/' }}, [
          h('img', { attrs: { src: logo }}),
          h('h1', { staticClass: 'ml-2 font-20' }, 'Vue Ant Pro')
        ])
      ]),
      h('i-menu', {
        props: {
          theme: 'dark',
          activeName: this.$route.path,
          openNames: this.openMenus,
          width: 'auto'
        }
      }, subMenus)
    ])
  }
}
</script>
<style lang="stylus">
@import '../assets/styles/variable'
.app-layout-slider
  min-height 100vh
  background-color #495060
  box-shadow 2px 0 6px rgba(0, 21, 41, 0.35)
  transition width .3s
  .app-icon
    height $header-height
    font-size 20px
    font-family 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif
    font-weight 600
    background-color darken(#495060, 20%)
    img
      max-width 32px
      max-height @max-width
      width 100%
      height 100%
  .ivu-icon
    min-width 14px
    font-size 16px
.app-collapsed .app-layout-slider
  .ivu-menu-submenu-title
    padding-left 32px
    padding-right 32px
  .menu-icon
    font-size 20px
  .app-icon h1
  .menu-text
  .ivu-menu-submenu-title-icon
  .ivu-menu-opened .ivu-menu
    display none
  .ivu-menu > .ivu-menu-item
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

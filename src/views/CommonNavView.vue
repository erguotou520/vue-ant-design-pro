<template>
  <div class="flex flex-1 flex-row" :class="[{'app-collapsed': menuCollapsed},`screen-${screenSize}`]">
    <app-menu :collapsed="menuCollapsed"></app-menu>
    <div class="pos-r flex-1 flex flex-column">
      <app-header :collapsed="menuCollapsed" @toggle="menuCollapsed=!menuCollapsed"></app-header>
      <div class="flex flex-1 px-2 py-2 .over-hide scroll-y">
        <router-view></router-view>
      </div>
      <i-spin v-if="$store.routerLoading" class="router-spin" size="large" fix></i-spin>
    </div>
  </div>
</template>
<script>
import AppMenu from '@/components/AppMenu'
import AppHeader from '@/components/AppHeader'
import { debounce } from 'lodash'

const SCREEN_SIZE_MAP = [{ width: 1200, size: 'lg' }, { width: 992, size: 'md' }, { width: 768, size: 'sm' }]
export default {
  data () {
    return {
      // 收缩菜单
      menuCollapsed: false,
      // 屏幕尺寸
      screenSize: SCREEN_SIZE_MAP[0].size
    }
  },
  components: {
    AppMenu, AppHeader
  },
  methods: {
    onResize: debounce(function () {
      // 计算屏幕尺寸大小
      const width = document.body.clientWidth
      let map
      for (let i = 0; i < SCREEN_SIZE_MAP.length; i++) {
        map = SCREEN_SIZE_MAP[i]
        if (width < SCREEN_SIZE_MAP[i].width) {
          i++
        } else {
          break
        }
      }
      this.screenSize = map.size
      // 根据尺寸收起或展开
      this.menuCollapsed = map !== SCREEN_SIZE_MAP[0]
    }, 500)
  },
  mounted () {
    this.$nextTick(() => {
      this.onResize()
    })
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroyed () {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>
<style lang="stylus">
@import '../assets/styles/variable'
.router-spin
  top 5rem
  left 1rem
  right 1rem
  bottom 1rem
  width auto
  height auto
</style>

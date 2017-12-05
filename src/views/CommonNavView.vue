<template>
  <div class="flex flex-1 flex-row" :class="{'app-collapsed': menuCollapsed}">
    <app-menu :collapsed="menuCollapsed"></app-menu>
    <div class="flex-1 flex flex-column">
      <app-header :collapsed="menuCollapsed" @toggle="menuCollapsed=!menuCollapsed"></app-header>
      <div class="flex flex-1 px-2 py-2">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import AppMenu from '@/components/AppMenu'
import AppHeader from '@/components/AppHeader'
export default {
  data () {
    return {
      // 收缩菜单
      menuCollapsed: false
    }
  },
  components: {
    AppMenu, AppHeader
  },
  methods: {}
}
</script>
<style lang="stylus">
</style>

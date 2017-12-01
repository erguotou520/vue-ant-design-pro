<template>
  <div class="app-header flex flex-row flex-ai-center flex-jc-between bg-white pr-3">
    <i-icon class="icon-toggle-menu action-icon text-secondary font-20 px-3"
      :class="{ 'revert-x': collapsed }" size="24" type="arrow-return-left"
      @click.native="$emit('toggle')"></i-icon>
    <div class="flex flex-row flex-ai-center">
      <div class="app-search flex flex-row flex-ai-center px-1" v-clickoutside="collapseSearch">
        <i-icon size="20" type="ios-search" @click.native="expandSearch"></i-icon>
        <i-input class="app-search-input" v-model="search" placeholder="站内搜索"
          :class="{'search-expanded ml-1': searchExpanded }" ref="search"></i-input>
      </div>
      <i-poptip class="ml-1 mr-2 action-icon" trigger="click" placement="bottom-end">
        <i-badge count="12">
          <i-icon class="px-1" size="20" type="ios-bell-outline"></i-icon>
        </i-badge>
        <i-tabs class="app-notifications" slot="content">
          <i-tab-pane label="通知(5)">
            123
            <div class="border-1px-t py-1 text-center">清空通知</div>
          </i-tab-pane>
          <i-tab-pane label="消息(3)">
            234
            <div class="border-1px-t py-1 text-center">清空消息</div>
          </i-tab-pane>
          <i-tab-pane label="代办(4)">
            345
            <div class="border-1px-t py-1 text-center">清空通知</div>
          </i-tab-pane>
        </i-tabs>
      </i-poptip>
      <i-dropdown class="action-icon mx-1">
        <i-avatar size="small" src="https://gw.alipayobjects.com/zos/rmsportal/eHBsAsOrrJcnvFlnzNTT.png"/>
        <span>erguotou520</span>
        <i-dropdown-menu slot="list" style="width:8rem">
          <i-dropdown-item><i-icon class="mr-1" size="16" type="ios-person-outline"></i-icon>个人中心</i-dropdown-item>
          <i-dropdown-item><i-icon class="mr-1" size="16" type="android-settings"></i-icon>设置</i-dropdown-item>
          <i-dropdown-item divided><i-icon class="mr-1" type="log-out"></i-icon>退出</i-dropdown-item>
        </i-dropdown-menu>
      </i-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    collapsed: Boolean
  },
  data () {
    return {
      search: '',
      searchExpanded: false
    }
  },
  methods: {
    expandSearch () {
      this.searchExpanded = true
      this.$nextTick(() => this.$refs.search.focus())
    },
    collapseSearch () {
      this.searchExpanded = false
    }
  }
}
</script>
<style lang="stylus">
@import '../assets/styles/variable'
.app-header
  height $header-height
  .icon-toggle-menu
    line-height @height
    transition all .3s

  // 交互按钮
  .action-icon
    line-height @height
    cursor pointer
    transition background-color .3s
    &:hover
      background-color #e6f7ff
  .app-search
    .ivu-icon
      cursor pointer
  .app-search-input
    width 0
    overflow hidden
    transition all .3s
    .ivu-input
      padding-left 0
      padding-right 0
      border-left none
      border-top none
      border-right none
      border-radius 0
      &:focus
        box-shadow none
    &.search-expanded
      width 10rem
</style>
